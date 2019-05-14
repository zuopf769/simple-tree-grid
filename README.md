# 基于vue的简单tree grid组件


## 背景

树表组件通常有以下交互需求：

+ 支持多级展开
+ 滚动时header吸顶
+ 可以左右滑动，当header吸顶时左右滑动时吸顶的header和真正的header能保证滚动偏移量同步（通常吸顶的header和真正的header是两个dom）
+ 单元格内容可以自定义，可能每个单元格内容都不一样
+ 支持排序
+ 支持固定列


## 数据格式

通常grid组件需要传如header和data两个props

例如header通常的数据格式如下： 

+ field 字段
+ lable 字段名
+ sortable 是否排序
+ align 对齐方式
+ width 宽度（如果少于两列或不能撑满容器的时候需要自适应）
+ formatter 自定义函数（暂时未实现）

```
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
    ]
```
tableData通常的数据格式如下： 

```
[
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
                            showVal: "1,743",
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
                    
                    	.....
                    ]
     }
               
 ]
```

## 如何支持多级展开？

其实思路很简单，就是点击某行时把当前点击`row`数据的chidren数据从`rowIndex + 1`插入到tableDatas数组中；说的通俗点就是把子节点拿出放到一级下，打平一级数组。

```
treeClickHandler(row, rowIndex) {
	// 拿到改行数据的chidren
    let children = row.children;
    if (!children ||  children.length === 0) {
        return;
    }
    
    if (!row.isOpen) {
        if (!row.level) {
        	   // 给点击行设置level，主要用于设置样式
            this.$set(row, 'level', 0);
        }
        children = children.map(item => {
            return {
                ...item,
                level: (+row.level + 1)
            }
        })
        // 把子添加到数组中
        this.datas.splice(rowIndex + 1, 0, ...children);
        // 给点击行设置isOpen状态
        this.$set(row, 'isOpen', 1);
    } else {
        this.datas.splice(rowIndex + 1, children.length);
        this.$set(row, 'isOpen', 0);
    }
},
```

## 如何滚动时header吸顶？

吸顶header通常需要另外一个`table`或者`div`来实现一个和真实`header`样式一模一样的假`header`；本人采用的是`div+span`的方案，不是用另外一个table的方案，原因是因为`可以左右滑动，当header吸顶时左右滑动时吸顶的header和真正的header能保证滚动偏移量同步（通常吸顶的header和真正的header是两个dom）`用table的方案实现不了，具体原理后面会解释。

```
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
```

如果用`div+span`模式一个假的`header`,就需要动态计算每个colum的宽度，在真实的table中可以通过设置colgroup的col的宽度来控制每个colum的宽度。
```
 <colgroup ref="colgroup">
    <col v-for="header in headers" :key="header.key"/>
</colgroup>
```

```
calColWidth() {
        this.$nextTick(()=>{
        	   // 拿到真实的th的宽度设置给col和用于吸顶的假header
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
```
至于如何吸顶如下，

```
handleScroll() {
			// 页面滚动距离
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // table组件距离页面顶部的距离，以及顶部区块的距离
        if (scrollTop >= this.offsetTop - this.topHeight) {
            if (this.showFixedHeader === false) {
                this.showFixedHeader = true;
            }
        } else {
            this.showFixedHeader = false;
        }
    },
```

需要注意的是一定要销毁事件

```
 destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
    this.$el.removeEventListener('scroll', this.handleHeaderScroll);
}
```

## 当header吸顶时左右滑动时吸顶的header和真正的header如何能保证滚动偏移量同步？

思路就是监听table容器的scroll事件，把scrollLeft偏移量设置给第一个span的margin-left

```
// 左右滑动同步吸顶header的偏移量
if (this.isScrolled) {
    this.$el.addEventListener('scroll', this.handleHeaderScroll);
}
```

```
 handleHeaderScroll () {
        // 不知道为什么非得设置第一个span的margin-left,设置容器就是不好使(右侧表头会覆盖左侧表头)
        this.$refs.fixHeaders.querySelectorAll('span.fix-header')[0].style.marginLeft = -this.$el.scrollLeft + 'px';
    },
```


## 单元格内容可以自定义，如何可能每个单元格内容都不一样？



