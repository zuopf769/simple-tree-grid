<template>
    <div class="tree-table-wrap">
        <div class="table-wrap"
            :class="{'show-fixed-header': showFixedHeader}">
            <div class="fix-header-wrap" ref="fixHeaders">
                <span
                    class="fix-header"
                    v-for="header in headers"
                    :key="header.key">
                    <span class="key-wrap">
                        <span class="label"
                            :class="{'left': header.align === 'left'}">
                            <span class="text">{{ header.value}}</span>
                        </span>
                        <span class="icon-wrap"
                            v-if="header.sortable">
                            <i class="icon iconfont icon-triangle-up ascend"></i>
                            <i class="icon iconfont icon-triangle descend"></i>
                        </span>
                    </span>
                </span>
            </div>
            <table>
                <colgroup ref="colgroup">
                    <col v-for="header in headers" :key="header.key"/>
                </colgroup>
                <thead ref="thead">
                    <tr>
                        <th v-for="header in headers"
                            :key="header.key">
                            <div class="key-wrap">
                                <div class="label"
                                    :class="{'left': header.align === 'left'}">
                                    <div class="text">{{ header.value}}</div>
                                </div>
                                <div class="icon-wrap"
                                    v-if="header.sortable">
                                    <i class="icon iconfont icon-triangle-up ascend"></i>
                                    <i class="icon iconfont icon-triangle descend"></i>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in datas"
                        :key="rowIndex"
                        :class="['level-' + (row.level ? row.level : 0), row.level && row.level > 0 ? 'children' : '']">
                        <td v-for="(cell, cellIndex) in row.data"
                            :key="cell.indicatorId">
                            <div class="content"
                                :class="{'left': headers[cellIndex].align === 'left'}">   
                                <template v-if="showIcon && cellIndex === 0">
                                    <div class="tree-wrap"
                                        @click="treeClickHandler(row, rowIndex)">
                                        <slot name="tree" :row-data="row" :cell-data="cell" :cell-index="cellIndex">
                                        </slot>
                                        <i 
                                            v-if="isShowIcon(row, cellIndex)"
                                            class="icon iconfont"
                                            :class="[row.isOpen ? 'icon-list-arrow-down' : 'icon-list-arrow']">
                                        </i>
                                    </div>
                                </template>
                                <template v-else>
                                    <slot :row-data="row" :cell-data="cell" :cell-index="cellIndex">
                                    </slot>
                                </template>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="less" scoped src="./TreeTable.less"></style>

<script>
export default {
    name: 'TreeTable',
    props: {
        fixedToClass: {// header吸顶到哪个class的dom
            type: String,
            default: 'top'
        },
        isScrolled: {// 是否可以滚动
            type: Boolean,
            default: true
        }
    },
    data: function() {
        return {
            showIcon: true,
            showFixedHeader: false,
            headers: [
                {
                    key: '-1',
                    value: '事业部',
                    sortable: 0,
                    align: 'left'
                },
                {
                    key: '1',
                    value: '销售额',
                    sortable: 1
                },
                {
                    key: '2',
                    value: '采销毛利率',
                    sortable: 1
                },
                {
                    key: '3',
                    value: '日均库存周转天数',
                    sortable: 1
                }
            ],
            datas: [
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    data: [
                        {
                            indicatorId: -1,
                            showName: '北京',
                            showVal: '北京',
                        },
                        {
                            indicatorId: 850,
                            showName: '销售额(万元)',
                            showVal: "1,7430000000000000000",
                            indicatorChangeCode: 'equal',
                            relativeDataFormat: "+3.2%",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 914,
                            showName: '采销毛利率',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        },
                        {
                            indicatorId: 851,
                            showName: '日均库存周转天数',
                            showVal: "6.07%",
                            indicatorChangeCode: 'desc',
                            relativeDataFormat: "-0.17pp",
                            relativeDataType: 1
                        }
                    ],
                    children: [
                        {
                            data: [
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850-2,
                                    showName: '销售额(万元)',
                                    showVal: "1,7430000000000000000000000000000000",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914-2,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851-2,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ],
                        },
                        {
                            data:[
                                {
                                    indicatorId: -1,
                                    showName: '北京事业部',
                                    showVal: '北京',
                                },
                                {
                                    indicatorId: 850,
                                    showName: '销售额(万元)',
                                    showVal: "1,743",
                                    indicatorChangeCode: 'up',
                                    relativeDataFormat: "+3.2%",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 914,
                                    showName: '采销毛利率',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                },
                                {
                                    indicatorId: 851,
                                    showName: '日均库存周转天数',
                                    showVal: "6.07%",
                                    indicatorChangeCode: 'desc',
                                    relativeDataFormat: "-0.17pp",
                                    relativeDataType: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    updated() {
       this.calColWidth();
    },
    mounted() {
        // 计算table每个col的宽度
        this.calColWidth();
        // 滚动区域在body上，因为统一的样式中body的高度设置了100%，需要把body的高度置为auto
        this.topHeight = document.getElementsByClassName(this.fixedToClass)[0].clientHeight;
        // table距离body顶部的偏移量
        this.offsetTop = this.$el.offsetTop;
        // 滚动吸顶
        document.addEventListener('scroll', this.handleScroll, 1000);
        // 左右滑动同步吸顶header的偏移量
        if (this.isScrolled) {
            this.$el.addEventListener('scroll', this.handleHeaderScroll);
        }
    },
    destroyed() {
        document.removeEventListener('scroll', this.handleScroll);
        this.$el.removeEventListener('scroll', this.handleHeaderScroll);
    },
    methods: {
        calColWidth() {
            this.$nextTick(()=>{
                let realThead = this.$refs.thead.querySelectorAll('th');
                let realColgroup = this.$refs.colgroup.querySelectorAll('col');
                let fixHeaders = this.$refs.fixHeaders.querySelectorAll('.fix-header');
                let totalWidth = 0;
                for (let i = 0; i < realThead.length; i++) {
                    let realWidth = Math.ceil(realThead[i].clientWidth);
                    realColgroup[i].width = realWidth;
                    fixHeaders[i].style.width = realWidth + 'px';
                    totalWidth += realWidth;
                }
                this.$refs.fixHeaders.style.width = totalWidth + 'px';
            });
        },
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= this.offsetTop - this.topHeight) {
                if (this.showFixedHeader === false) {
                    this.showFixedHeader = true;
                }
            } else {
                this.showFixedHeader = false;
            }
        },
        handleHeaderScroll () {
            // 不知道为什么非得设置第一个span的margin-left,设置容器就是不好使(右侧表头会覆盖左侧表头)
            this.$refs.fixHeaders.querySelectorAll('span.fix-header')[0].style.marginLeft = -this.$el.scrollLeft + 'px';
        },
        treeClickHandler(row, rowIndex) {
            let children = row.children;
            if (!children ||  children.length === 0) {
                return;
            }
            if (!row.isOpen) {
                if (!row.level) {
                    this.$set(row, 'level', 0);
                }
                children = children.map(item => {
                    return {
                        ...item,
                        level: (+row.level + 1)
                    }
                })
                this.datas.splice(rowIndex + 1, 0, ...children);
                this.$set(row, 'isOpen', 1);
            } else {
                this.datas.splice(rowIndex + 1, children.length);
                this.$set(row, 'isOpen', 0);
            }
        },
        hasChildren(row) {
            return row && row.children && row.children.length > 0 ? true : false;
        },
        isShowIcon(row, cellIndex) {
            return this.hasChildren(row) && cellIndex === 0 ? true : false;
        }
    }
};
</script>