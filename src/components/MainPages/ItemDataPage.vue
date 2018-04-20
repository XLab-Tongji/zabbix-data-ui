<template>
  <div id="itemDataPage">
    <div class="tabs-container" style="width:100%" >
      <ul class="nav nav-tabs">
        <li class="active" style="width: 50%" @click="myRefresh"><a data-toggle="tab" href="#filter" aria-expanded="false"> <i class="fa fa-filter"> &nbsp;选择你需要展示的监控项</i></a></li>
        <li class="" style="width: 50%" @click="myRefresh"><a data-toggle="tab" href="#charts" aria-expanded="true"><i class="fa fa-line-chart"> &nbsp;监控项图表全览</i></a></li>
      </ul>
      <div class="tab-content" >
        <div id="filter" class="tab-pane active">
          <div class="panel-body" style="display:flex;">
            <div>
              <el-tree class="el_tree_style"
                :data="items"
                show-checkbox
                node-key="id"
                :props="defaultProps"
                ref="tree"
                @check-change="handleCheckChange"
                @node-expand="handleNodeExpand"
                @node-collapse="handleNodeCollapse">
              </el-tree>
            </div>
            <div >
              <div v-for="item in items" style="width:100%">
                <div v-for="child in item.children" v-if="child.rendered" style="width:45%;display:inline-block;">
                  <eChart :options="child.chartOptions" name="myCharts"></eChart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="charts" class="tab-pane" style="width:100%  ;">
          <div class="panel-body" style="width:100%  ;">
    
              <div v-for="item in items" style="width:100%  ;">
                <div v-for="child in item.children" v-if="child.rendered" style="width:100% ">
                  <div v-if="child.rendered" style="width:100%;padding:20px;" >
                    <eChart :options="child.chartDetailOptions" style="width:100%  ;" name="myCharts"></eChart>
                  </div>
                </div>
              </div>
        
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemDataPage",
  data() {
    return {
      optionData: [],
      data: [
        { timeStamp: "1521035350", value: "1054859264" },
        { timeStamp: "1521035410", value: "1054396416" },
        { timeStamp: "1521035470", value: "1052774400" },
        { timeStamp: "1521035530", value: "1051287552" },
        { timeStamp: "1521035590", value: "1051049984" },
        { timeStamp: "1521035650", value: "1050828800" },
        { timeStamp: "1521035710", value: "1050701824" },
        { timeStamp: "1521035770", value: "1050853376" },
        { timeStamp: "1521035830", value: "1050984448" },
        { timeStamp: "1521035890", value: "1052344320" },
        { timeStamp: "1521035950", value: "1052409856" },
        { timeStamp: "1521036010", value: "1051508736" },
        { timeStamp: "1521036070", value: "1052073984" },
        { timeStamp: "1521036130", value: "1051918336" },
        { timeStamp: "1521036190", value: "1052385280" },
        { timeStamp: "1521036250", value: "1052311552" },
        { timeStamp: "1521036310", value: "1051865088" },
        { timeStamp: "1521036370", value: "1051783168" },
        { timeStamp: "1521036430", value: "1052086272" },
        { timeStamp: "1521036490", value: "1051967488" },
        { timeStamp: "1521036550", value: "1052356608" },
        { timeStamp: "1521036610", value: "1053011968" },
        { timeStamp: "1521036670", value: "1052635136" },
        { timeStamp: "1521036730", value: "1052401664" },
        { timeStamp: "1521036790", value: "1052352512" },
        { timeStamp: "1521036850", value: "1052794880" },
        { timeStamp: "1521036969", value: "1052479488" },
        { timeStamp: "1521036970", value: "1052004352" },
        { timeStamp: "1521037030", value: "1052110848" },
        { timeStamp: "1521037090", value: "1052020736" },
        { timeStamp: "1521037150", value: "1051664384" },
        { timeStamp: "1521037210", value: "1052082176" },
        { timeStamp: "1521037270", value: "1051553792" },
        { timeStamp: "1521037330", value: "1051275264" },
        { timeStamp: "1521037390", value: "1051238400" },
        { timeStamp: "1521037450", value: "1051475968" },
        { timeStamp: "1521037510", value: "1051070464" },
        { timeStamp: "1521037570", value: "1051054080" },
        { timeStamp: "1521037630", value: "1051406336" },
        { timeStamp: "1521037690", value: "1050865664" },
        { timeStamp: "1521037750", value: "1051213824" },
        { timeStamp: "1521037810", value: "1051189248" },
        { timeStamp: "1521037870", value: "1051295744" },
        { timeStamp: "1521037930", value: "1051107328" },
        { timeStamp: "1521037990", value: "1051217920" },
        { timeStamp: "1521038050", value: "1051136000" },
        { timeStamp: "1521038110", value: "1051676672" },
        { timeStamp: "1521038170", value: "1051357184" },
        { timeStamp: "1521038230", value: "1051066368" },
        { timeStamp: "1521038290", value: "1051258880" },
        { timeStamp: "1521038350", value: "1051332608" },
        { timeStamp: "1521038410", value: "1051439104" },
        { timeStamp: "1521038470", value: "1050816512" },
        { timeStamp: "1521038530", value: "1051115520" },
        { timeStamp: "1521038590", value: "1051176960" },
        { timeStamp: "1521038650", value: "1051226112" },
        { timeStamp: "1521038710", value: "1050923008" },
        { timeStamp: "1521038770", value: "1050902528" },
        { timeStamp: "1521038830", value: "1050947584" },
        { timeStamp: "1521038890", value: "1051119616" },
        { timeStamp: "1521038950", value: "1051176960" },
        { timeStamp: "1521039010", value: "1051066368" },
        { timeStamp: "1521039070", value: "1050914816" },
        { timeStamp: "1521039130", value: "1050693632" },
        { timeStamp: "1521039190", value: "1050537984" },
        { timeStamp: "1521039250", value: "1050599424" },
        { timeStamp: "1521039310", value: "1050451968" },
        { timeStamp: "1521039370", value: "1050341376" },
        { timeStamp: "1521039430", value: "1050501120" },
        { timeStamp: "1521039490", value: "1050443776" },
        { timeStamp: "1521039550", value: "1050529792" },
        { timeStamp: "1521039610", value: "1049874432" },
        { timeStamp: "1521039670", value: "1050357760" },
        { timeStamp: "1521039730", value: "1050472448" },
        { timeStamp: "1521039790", value: "1050468352" },
        { timeStamp: "1521039850", value: "1050218496" },
        { timeStamp: "1521039910", value: "1050808320" },
        { timeStamp: "1521039970", value: "1050738688" },
        { timeStamp: "1521040030", value: "1050353664" }
      ],
      options: [],

      //items need to be rendered
      itemIds: [],
      //items: []
      items: [
        {
          label: "CPU",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [
            {
              label: "cpu load of 1",
              data: [
                { timeStamp: "1521035350", value: "1054859264" },
                { timeStamp: "1521035410", value: "1054396416" },
                { timeStamp: "1521035470", value: "1052774400" },
                { timeStamp: "1521035530", value: "1051287552" },
                { timeStamp: "1521035590", value: "1051049984" },
                { timeStamp: "1521035650", value: "1050828800" },
                { timeStamp: "1521035710", value: "1050701824" },
                { timeStamp: "1521035770", value: "1050853376" },
                { timeStamp: "1521035830", value: "1050984448" },
                { timeStamp: "1521035890", value: "1052344320" },
                { timeStamp: "1521035950", value: "1052409856" },
                { timeStamp: "1521036010", value: "1051508736" },
                { timeStamp: "1521036070", value: "1052073984" },
                { timeStamp: "1521036130", value: "1051918336" },
                { timeStamp: "1521036190", value: "1052385280" },
                { timeStamp: "1521036250", value: "1052311552" },
                { timeStamp: "1521036310", value: "1051865088" },
                { timeStamp: "1521036370", value: "1051783168" },
                { timeStamp: "1521036430", value: "1052086272" },
                { timeStamp: "1521036490", value: "1051967488" },
                { timeStamp: "1521036550", value: "1052356608" },
                { timeStamp: "1521036610", value: "1053011968" },
                { timeStamp: "1521036670", value: "1052635136" },
                { timeStamp: "1521036730", value: "1052401664" },
                { timeStamp: "1521036790", value: "1052352512" },
                { timeStamp: "1521036850", value: "1052794880" },
                { timeStamp: "1521036969", value: "1052479488" },
                { timeStamp: "1521036970", value: "1052004352" },
                { timeStamp: "1521037030", value: "1052110848" },
                { timeStamp: "1521037090", value: "1052020736" },
                { timeStamp: "1521037150", value: "1051664384" },
                { timeStamp: "1521037210", value: "1052082176" },
                { timeStamp: "1521037270", value: "1051553792" },
                { timeStamp: "1521037330", value: "1051275264" },
                { timeStamp: "1521037390", value: "1051238400" },
                { timeStamp: "1521037450", value: "1051475968" },
                { timeStamp: "1521037510", value: "1051070464" },
                { timeStamp: "1521037570", value: "1051054080" },
                { timeStamp: "1521037630", value: "1051406336" },
                { timeStamp: "1521037690", value: "1050865664" },
                { timeStamp: "1521037750", value: "1051213824" },
                { timeStamp: "1521037810", value: "1051189248" },
                { timeStamp: "1521037870", value: "1051295744" },
                { timeStamp: "1521037930", value: "1051107328" },
                { timeStamp: "1521037990", value: "1051217920" },
                { timeStamp: "1521038050", value: "1051136000" },
                { timeStamp: "1521038110", value: "1051676672" },
                { timeStamp: "1521038170", value: "1051357184" },
                { timeStamp: "1521038230", value: "1051066368" },
                { timeStamp: "1521038290", value: "1051258880" },
                { timeStamp: "1521038350", value: "1051332608" },
                { timeStamp: "1521038410", value: "1051439104" },
                { timeStamp: "1521038470", value: "1050816512" },
                { timeStamp: "1521038530", value: "1051115520" },
                { timeStamp: "1521038590", value: "1051176960" },
                { timeStamp: "1521038650", value: "1051226112" },
                { timeStamp: "1521038710", value: "1050923008" },
                { timeStamp: "1521038770", value: "1050902528" },
                { timeStamp: "1521038830", value: "1050947584" },
                { timeStamp: "1521038890", value: "1051119616" },
                { timeStamp: "1521038950", value: "1051176960" },
                { timeStamp: "1521039010", value: "1051066368" },
                { timeStamp: "1521039070", value: "1050914816" },
                { timeStamp: "1521039130", value: "1050693632" },
                { timeStamp: "1521039190", value: "1050537984" },
                { timeStamp: "1521039250", value: "1050599424" },
                { timeStamp: "1521039310", value: "1050451968" },
                { timeStamp: "1521039370", value: "1050341376" },
                { timeStamp: "1521039430", value: "1050501120" },
                { timeStamp: "1521039490", value: "1050443776" },
                { timeStamp: "1521039550", value: "1050529792" },
                { timeStamp: "1521039610", value: "1049874432" },
                { timeStamp: "1521039670", value: "1050357760" },
                { timeStamp: "1521039730", value: "1050472448" },
                { timeStamp: "1521039790", value: "1050468352" },
                { timeStamp: "1521039850", value: "1050218496" },
                { timeStamp: "1521039910", value: "1050808320" },
                { timeStamp: "1521039970", value: "1050738688" },
                { timeStamp: "1521040030", value: "1050353664" }
              ],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: []
            },
            {
              label: "cpu load of 2",
              data: [
                { timeStamp: "1521035350", value: "1054859264" },
                { timeStamp: "1521035410", value: "1054396416" },
                { timeStamp: "1521035470", value: "1052774400" },
                { timeStamp: "1521035530", value: "1051287552" },
                { timeStamp: "1521035590", value: "1051049984" },
                { timeStamp: "1521035650", value: "1050828800" },
                { timeStamp: "1521035710", value: "1050701824" },
                { timeStamp: "1521035770", value: "1050853376" },
                { timeStamp: "1521035830", value: "1050984448" },
                { timeStamp: "1521035890", value: "1052344320" },
                { timeStamp: "1521035950", value: "1052409856" },
                { timeStamp: "1521036010", value: "1051508736" },
                { timeStamp: "1521036070", value: "1052073984" },
                { timeStamp: "1521036130", value: "1051918336" },
                { timeStamp: "1521036190", value: "1052385280" },
                { timeStamp: "1521036250", value: "1052311552" },
                { timeStamp: "1521036310", value: "1051865088" },
                { timeStamp: "1521036370", value: "1051783168" },
                { timeStamp: "1521036430", value: "1052086272" },
                { timeStamp: "1521036490", value: "1051967488" },
                { timeStamp: "1521036550", value: "1052356608" },
                { timeStamp: "1521036610", value: "1053011968" },
                { timeStamp: "1521036670", value: "1052635136" },
                { timeStamp: "1521036730", value: "1052401664" },
                { timeStamp: "1521036790", value: "1052352512" },
                { timeStamp: "1521036850", value: "1052794880" },
                { timeStamp: "1521036969", value: "1052479488" },
                { timeStamp: "1521036970", value: "1052004352" },
                { timeStamp: "1521037030", value: "1052110848" },
                { timeStamp: "1521037090", value: "1052020736" },
                { timeStamp: "1521037150", value: "1051664384" },
                { timeStamp: "1521037210", value: "1052082176" },
                { timeStamp: "1521037270", value: "1051553792" },
                { timeStamp: "1521037330", value: "1051275264" },
                { timeStamp: "1521037390", value: "1051238400" },
                { timeStamp: "1521037450", value: "1051475968" },
                { timeStamp: "1521037510", value: "1051070464" },
                { timeStamp: "1521037570", value: "1051054080" },
                { timeStamp: "1521037630", value: "1051406336" },
                { timeStamp: "1521037690", value: "1050865664" },
                { timeStamp: "1521037750", value: "1051213824" },
                { timeStamp: "1521037810", value: "1051189248" },
                { timeStamp: "1521037870", value: "1051295744" },
                { timeStamp: "1521037930", value: "1051107328" },
                { timeStamp: "1521037990", value: "1051217920" },
                { timeStamp: "1521038050", value: "1051136000" },
                { timeStamp: "1521038110", value: "1051676672" },
                { timeStamp: "1521038170", value: "1051357184" },
                { timeStamp: "1521038230", value: "1051066368" },
                { timeStamp: "1521038290", value: "1051258880" },
                { timeStamp: "1521038350", value: "1051332608" },
                { timeStamp: "1521038410", value: "1051439104" },
                { timeStamp: "1521038470", value: "1050816512" },
                { timeStamp: "1521038530", value: "1051115520" },
                { timeStamp: "1521038590", value: "1051176960" },
                { timeStamp: "1521038650", value: "1051226112" },
                { timeStamp: "1521038710", value: "1050923008" },
                { timeStamp: "1521038770", value: "1050902528" },
                { timeStamp: "1521038830", value: "1050947584" },
                { timeStamp: "1521038890", value: "1051119616" },
                { timeStamp: "1521038950", value: "1051176960" },
                { timeStamp: "1521039010", value: "1051066368" },
                { timeStamp: "1521039070", value: "1050914816" },
                { timeStamp: "1521039130", value: "1050693632" },
                { timeStamp: "1521039190", value: "1050537984" },
                { timeStamp: "1521039250", value: "1050599424" },
                { timeStamp: "1521039310", value: "1050451968" },
                { timeStamp: "1521039370", value: "1050341376" },
                { timeStamp: "1521039430", value: "1050501120" },
                { timeStamp: "1521039490", value: "1050443776" },
                { timeStamp: "1521039550", value: "1050529792" },
                { timeStamp: "1521039610", value: "1049874432" },
                { timeStamp: "1521039670", value: "1050357760" },
                { timeStamp: "1521039730", value: "1050472448" },
                { timeStamp: "1521039790", value: "1050468352" },
                { timeStamp: "1521039850", value: "1050218496" },
                { timeStamp: "1521039910", value: "1050808320" },
                { timeStamp: "1521039970", value: "1050738688" },
                { timeStamp: "1521040030", value: "1050353664" }
              ],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: []
            },
            {
              label: "cpu load of 3",
              data: [
                { timeStamp: "1521035350", value: "1054859264" },
                { timeStamp: "1521035410", value: "1054396416" },
                { timeStamp: "1521035470", value: "1052774400" },
                { timeStamp: "1521035530", value: "1051287552" },
                { timeStamp: "1521035590", value: "1051049984" },
                { timeStamp: "1521035650", value: "1050828800" },
                { timeStamp: "1521035710", value: "1050701824" },
                { timeStamp: "1521035770", value: "1050853376" },
                { timeStamp: "1521035830", value: "1050984448" },
                { timeStamp: "1521035890", value: "1052344320" },
                { timeStamp: "1521035950", value: "1052409856" },
                { timeStamp: "1521036010", value: "1051508736" },
                { timeStamp: "1521036070", value: "1052073984" },
                { timeStamp: "1521036130", value: "1051918336" },
                { timeStamp: "1521036190", value: "1052385280" },
                { timeStamp: "1521036250", value: "1052311552" },
                { timeStamp: "1521036310", value: "1051865088" },
                { timeStamp: "1521036370", value: "1051783168" },
                { timeStamp: "1521036430", value: "1052086272" },
                { timeStamp: "1521036490", value: "1051967488" },
                { timeStamp: "1521036550", value: "1052356608" },
                { timeStamp: "1521036610", value: "1053011968" },
                { timeStamp: "1521036670", value: "1052635136" },
                { timeStamp: "1521036730", value: "1052401664" },
                { timeStamp: "1521036790", value: "1052352512" },
                { timeStamp: "1521036850", value: "1052794880" },
                { timeStamp: "1521036969", value: "1052479488" },
                { timeStamp: "1521036970", value: "1052004352" },
                { timeStamp: "1521037030", value: "1052110848" },
                { timeStamp: "1521037090", value: "1052020736" },
                { timeStamp: "1521037150", value: "1051664384" },
                { timeStamp: "1521037210", value: "1052082176" },
                { timeStamp: "1521037270", value: "1051553792" },
                { timeStamp: "1521037330", value: "1051275264" },
                { timeStamp: "1521037390", value: "1051238400" },
                { timeStamp: "1521037450", value: "1051475968" },
                { timeStamp: "1521037510", value: "1051070464" },
                { timeStamp: "1521037570", value: "1051054080" },
                { timeStamp: "1521037630", value: "1051406336" },
                { timeStamp: "1521037690", value: "1050865664" },
                { timeStamp: "1521037750", value: "1051213824" },
                { timeStamp: "1521037810", value: "1051189248" },
                { timeStamp: "1521037870", value: "1051295744" },
                { timeStamp: "1521037930", value: "1051107328" },
                { timeStamp: "1521037990", value: "1051217920" },
                { timeStamp: "1521038050", value: "1051136000" },
                { timeStamp: "1521038110", value: "1051676672" },
                { timeStamp: "1521038170", value: "1051357184" },
                { timeStamp: "1521038230", value: "1051066368" },
                { timeStamp: "1521038290", value: "1051258880" },
                { timeStamp: "1521038350", value: "1051332608" },
                { timeStamp: "1521038410", value: "1051439104" },
                { timeStamp: "1521038470", value: "1050816512" },
                { timeStamp: "1521038530", value: "1051115520" },
                { timeStamp: "1521038590", value: "1051176960" },
                { timeStamp: "1521038650", value: "1051226112" },
                { timeStamp: "1521038710", value: "1050923008" },
                { timeStamp: "1521038770", value: "1050902528" },
                { timeStamp: "1521038830", value: "1050947584" },
                { timeStamp: "1521038890", value: "1051119616" },
                { timeStamp: "1521038950", value: "1051176960" },
                { timeStamp: "1521039010", value: "1051066368" },
                { timeStamp: "1521039070", value: "1050914816" },
                { timeStamp: "1521039130", value: "1050693632" },
                { timeStamp: "1521039190", value: "1050537984" },
                { timeStamp: "1521039250", value: "1050599424" },
                { timeStamp: "1521039310", value: "1050451968" },
                { timeStamp: "1521039370", value: "1050341376" },
                { timeStamp: "1521039430", value: "1050501120" },
                { timeStamp: "1521039490", value: "1050443776" },
                { timeStamp: "1521039550", value: "1050529792" },
                { timeStamp: "1521039610", value: "1049874432" },
                { timeStamp: "1521039670", value: "1050357760" },
                { timeStamp: "1521039730", value: "1050472448" },
                { timeStamp: "1521039790", value: "1050468352" },
                { timeStamp: "1521039850", value: "1050218496" },
                { timeStamp: "1521039910", value: "1050808320" },
                { timeStamp: "1521039970", value: "1050738688" },
                { timeStamp: "1521040030", value: "1050353664" }
              ],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: []
            },
            {
              label: "cpu load of 4",
              data: [
                { timeStamp: "1521035350", value: "1054859264" },
                { timeStamp: "1521035410", value: "1054396416" },
                { timeStamp: "1521035470", value: "1052774400" },
                { timeStamp: "1521035530", value: "1051287552" },
                { timeStamp: "1521035590", value: "1051049984" },
                { timeStamp: "1521035650", value: "1050828800" },
                { timeStamp: "1521035710", value: "1050701824" },
                { timeStamp: "1521035770", value: "1050853376" },
                { timeStamp: "1521035830", value: "1050984448" },
                { timeStamp: "1521035890", value: "1052344320" },
                { timeStamp: "1521035950", value: "1052409856" },
                { timeStamp: "1521036010", value: "1051508736" },
                { timeStamp: "1521036070", value: "1052073984" },
                { timeStamp: "1521036130", value: "1051918336" },
                { timeStamp: "1521036190", value: "1052385280" },
                { timeStamp: "1521036250", value: "1052311552" },
                { timeStamp: "1521036310", value: "1051865088" },
                { timeStamp: "1521036370", value: "1051783168" },
                { timeStamp: "1521036430", value: "1052086272" },
                { timeStamp: "1521036490", value: "1051967488" },
                { timeStamp: "1521036550", value: "1052356608" },
                { timeStamp: "1521036610", value: "1053011968" },
                { timeStamp: "1521036670", value: "1052635136" },
                { timeStamp: "1521036730", value: "1052401664" },
                { timeStamp: "1521036790", value: "1052352512" },
                { timeStamp: "1521036850", value: "1052794880" },
                { timeStamp: "1521036969", value: "1052479488" },
                { timeStamp: "1521036970", value: "1052004352" },
                { timeStamp: "1521037030", value: "1052110848" },
                { timeStamp: "1521037090", value: "1052020736" },
                { timeStamp: "1521037150", value: "1051664384" },
                { timeStamp: "1521037210", value: "1052082176" },
                { timeStamp: "1521037270", value: "1051553792" },
                { timeStamp: "1521037330", value: "1051275264" },
                { timeStamp: "1521037390", value: "1051238400" },
                { timeStamp: "1521037450", value: "1051475968" },
                { timeStamp: "1521037510", value: "1051070464" },
                { timeStamp: "1521037570", value: "1051054080" },
                { timeStamp: "1521037630", value: "1051406336" },
                { timeStamp: "1521037690", value: "1050865664" },
                { timeStamp: "1521037750", value: "1051213824" },
                { timeStamp: "1521037810", value: "1051189248" },
                { timeStamp: "1521037870", value: "1051295744" },
                { timeStamp: "1521037930", value: "1051107328" },
                { timeStamp: "1521037990", value: "1051217920" },
                { timeStamp: "1521038050", value: "1051136000" },
                { timeStamp: "1521038110", value: "1051676672" },
                { timeStamp: "1521038170", value: "1051357184" },
                { timeStamp: "1521038230", value: "1051066368" },
                { timeStamp: "1521038290", value: "1051258880" },
                { timeStamp: "1521038350", value: "1051332608" },
                { timeStamp: "1521038410", value: "1051439104" },
                { timeStamp: "1521038470", value: "1050816512" },
                { timeStamp: "1521038530", value: "1051115520" },
                { timeStamp: "1521038590", value: "1051176960" },
                { timeStamp: "1521038650", value: "1051226112" },
                { timeStamp: "1521038710", value: "1050923008" },
                { timeStamp: "1521038770", value: "1050902528" },
                { timeStamp: "1521038830", value: "1050947584" },
                { timeStamp: "1521038890", value: "1051119616" },
                { timeStamp: "1521038950", value: "1051176960" },
                { timeStamp: "1521039010", value: "1051066368" },
                { timeStamp: "1521039070", value: "1050914816" },
                { timeStamp: "1521039130", value: "1050693632" },
                { timeStamp: "1521039190", value: "1050537984" },
                { timeStamp: "1521039250", value: "1050599424" },
                { timeStamp: "1521039310", value: "1050451968" },
                { timeStamp: "1521039370", value: "1050341376" },
                { timeStamp: "1521039430", value: "1050501120" },
                { timeStamp: "1521039490", value: "1050443776" },
                { timeStamp: "1521039550", value: "1050529792" },
                { timeStamp: "1521039610", value: "1049874432" },
                { timeStamp: "1521039670", value: "1050357760" },
                { timeStamp: "1521039730", value: "1050472448" },
                { timeStamp: "1521039790", value: "1050468352" },
                { timeStamp: "1521039850", value: "1050218496" },
                { timeStamp: "1521039910", value: "1050808320" },
                { timeStamp: "1521039970", value: "1050738688" },
                { timeStamp: "1521040030", value: "1050353664" }
              ],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: []
            }
          ]
        },
        {
          label: "MEMORY",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [
            {
              label: "memory used",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: []
            }
          ]
        },
        {
          label: "INODE",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [
            {
              label: "inode used",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: []
            }
          ]
        },
        {
          label: "DISK",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [
            {
              label: "disk used",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: []
            }
          ]
        },
        {
          label: "NETWORK",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [],
          rendered: false
        },
        {
          label: "PROCESS",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [],
          rendered: false
        }
      ],
      canShow: false,

      itemId: "28330",
      valueType: "3",
      timeFrom: "",
      timeTill: "",

      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleCheckChange: function(data, checked, indeterminate) {
      console.log("yes");
      if (data.isLeaf) {
        //TODO:调用接口
        if (!data.rendered) {
          let option = this.getOption(data.data, data.label, false);
          let detailOption = this.getOption(data.data, data.label, true);
          data.chartOptions = option;
          data.chartDetailOptions = detailOption;
        }
        data.rendered = !data.rendered;
      } else {
        if (!data.spread && !data.firstSpread) {
          let that = this;
          data.children.forEach(function(element) {
            if (!element.rendered) {
              element.chartOptions = that.getOption(
                element.data,
                element.label,
                false
              );
              element.chartDetailOptions = that.getOption(
                element.data,
                element.label,
                true
              );
            }
            element.rendered = !element.rendered;
          });
        }
      }
    },
    handleNodeExpand: function(data, node, self) {
      if (!data.firstSpread) data.firstSpread = !data.firstSpread;
      data.spread = !data.spread;
      console.log(data.spread);
    },
    handleNodeCollapse: function(data, node, self) {
      data.spread = !data.spread;
      console.log(data.spread);
    },
    myRefresh: function(tab) {
      console.log("y");
      setTimeout(function() {
        var myCharts = [];
        myCharts = document.getElementsByName("myCharts");
        myCharts.forEach(function(element) {
          element.__vue__.resize();
        });
      }, 1);
    },
    getItemData: function() {
      this.$http
        .get(zabbixUrl + "/itemData", {
          params: {
            itemId: this.itemId,
            valueType: this.valueType
            //      timeFrom: this.timeFrom,
            //      timeTill: this.timeTill,
          }
        })
        .then(
          function(response) {
            console.log(response);
            this.data = response.body;
          },
          function(error) {
            console.log(error);
          }
        );
    },
    setOptions: function() {
      for (var i = 0; i < this.optionData.length; i = i + 1) {
        let option = this.getOption(this.optionData[i]);
        this.options.push(option);
      }
      console.log(this.options);
    },
    getOption: function(data, title, showSth) {
      var newData = [];
      data.forEach(function(element) {
        newData.push([element.timeStamp * 1000, element.value]);
      });
      return {
        title: {
          left: "center",
          text: title
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "15%",
          right: "15%"
        },
        xAxis: {
          type: "time",
          axisTick: {
            show: showSth
          },
          axisLabel: {
            show: showSth
          }
          //maxInterval: 60*1000
        },
        yAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          axisTick: {
            show: showSth
          },
          axisLabel: {
            show: showSth
          }
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: showSth ? 10 : 100
          },
          {
            show: showSth,
            start: 0,
            end: showSth ? 10 : 100,
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            name: "zabbix-data",
            type: "line",
            sampling: "average",
            lineStyle: {
              color: "#1ab394"
            },
            itemStyle: {
              color: "#999"
            },
            data: newData
          }
        ]
      };
    }
  },
  mounted() {
    window.onresize = function() {
      var myCharts = [];
      myCharts = document.getElementsByName("myCharts");
      myCharts.forEach(function(element) {
        element.__vue__.resize();
      });
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el_tree_style {
  padding-right: 10px;
  background-color: #f3f3f4;
  display: inline-block;
  margin-right: 10px;
  height: 100%;
}
#itemDataPage {
  display: flex;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #1ab394;
  border-color: #1ab394;
}
</style>
