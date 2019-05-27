<template>
  <div id="app">
    <div class="top">顶部区域</div>
    <div class=content>
      <div class="test"></div>
      <tree-table
        :headers="headers"
        :datas="datas"
        :sort="sort"
      >
          <!--tree单元格-->
          <template v-slot:tree="{cellData, cellIndex}">
              <span class="value">{{ cellData.showVal }}</span>
          </template>
          <!--普通单元格-->
          <template v-slot="{cellData, cellIndex}">
              <div class="value">{{ cellData.showVal }}</div>
              <div class="relative"
                  v-if="cellIndex !== 0"
                  :class="indicatorsClass(cellData.relativeDataType, cellData.indicatorChangeCode)">
                  <span class="precent">6.6%</span>
                  <i class="iconfont"></i>
              </div>
          </template>
      </tree-table>
    </div>
  </div>
</template>

<script>
import TreeTable from 'components/TreeTable'
import {indicatorStatus} from 'tools/indicaotrStatus';

export default {
  name: 'app',
  data: function() {
    return {
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
          ],
          sort: {
                key: 2,
                isReverse: true
          }
    };
  },
  methods: {
      indicatorsClass(type, changeCode){
          return indicatorStatus(type, changeCode)
      },
       
  },
  components: {
    TreeTable
  }
}
</script>

<style lang="less">
@import '~@/style/common.less';

#app {
  height: 100%;
}

.top {
  z-index: 99999999;
  position: fixed;
  width: 100%;
  height: 44*@ptr;
  background-color: #ffffff;
}

.test {
  height: 40*@ptr;
}

.content {
  padding-top: 44*@ptr;
}
</style>
