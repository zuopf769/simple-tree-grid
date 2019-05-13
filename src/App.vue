<template>
  <div id="app">
    <div class="top">顶部区域</div>
    <div class=content>
      <div class="test"></div>
      <tree-table>
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
