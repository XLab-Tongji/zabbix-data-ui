<template>
  <div id="itemDataPage">
    <div class="tabs-container" style="width:100%" >
      <ul class="nav nav-tabs">
        <li class="active" style="width: 33%" @click="myRefresh"><a data-toggle="tab" href="#filter" aria-expanded="false"> <i class="fa fa-filter"> &nbsp;选择你需要展示的监控项</i></a></li>
        <li class="" style="width: 33%" ><a data-toggle="tab" href="#table" aria-expanded="false"> <i class="fa fa-filter"> &nbsp;监控项数据表格</i></a></li>
        <li class="" style="width: 33%" @click="myRefresh"><a data-toggle="tab" href="#charts" aria-expanded="true"><i class="fa fa-line-chart"> &nbsp;监控项图表全览</i></a></li>
      </ul>
      <div class="tab-content" >
        <div id="filter" class="tab-pane active">
          <div class="panel-body">
          <div>
              <h2>{{paramsHostid}}&nbsp-&nbsp{{hosts.filter(t => t.hostid == paramsHostid)[0].name}}</h2>
            </div>
          <hr>
          <div style="display:flex;">
            
            <div>
                <el-tree class="el_tree_style"
                  :data="items"
                  show-checkbox
                  node-key="label"
                  :props="defaultProps"
                  ref="tree"
                  @check-change="handleCheckChange"
                  @node-expand="handleNodeExpand"
                  @node-collapse="handleNodeCollapse"
                  @node-click="handleNodeClick">
                </el-tree>
            </div>
            <div >
              <div v-for="item in items" style="display:flex;flex-wrap: wrap">
                <div v-for="child in item.children" v-if="child.rendered" >
                  <eChart :options="child.chartOptions" name="myCharts" style="width: 500px"></eChart>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div id="table" class="tab-pane">
          <div class="panel-body">
            <div v-for="item in items">
              <div v-for="child in item.children">
                <div v-if="child.rendered" >
                  <item-table :table-title="child.label" :table-rows="child.data"></item-table>
                  <hr>
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
                  
                  <div class="ibox-tools configure" style="top: 0px">
                    <el-date-picker
                      v-model="child.time"
                      type="datetimerange"
                      :picker-options="pickerOptions"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      align="right"
                      @change="handleTimePickerChange(child)">
                    </el-date-picker>
                    <el-select 
                      v-model="child.selectHosts" 
                      placeholder="请选择需对比主机" 
                      multiple 
                      collapse-tags
                      @change="handleEloptionChange(child)"
                      @visible-change="handleEloptionCollapse"
                      @focus="handleEloptionFocus(child.label)">
                      <el-option   
                        v-for="item in hostsForOption"
                        :key="child.label + item.hostid"
                        :label="item.label"
                        :value="item.hostid">
                      </el-option>
                    </el-select>
                    <a class="close-link">
                      <i class="fa fa-times"></i>
                    </a>
                   
                  </div> 
                  
                  <eChart :options="child.chartDetailOptions" style="width:100%  ;" name="myCharts"></eChart>
                </div>
                <hr> 
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import itemTable from '../component/ItemTable.vue'
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
      paramsHostid: null,

      //items need to be rendered
      itemIds: [],

      selectHosts: [],
      selectHostsItem: '',
      select_host_item_data: [],
      hosts: [],
      hostsForOption: [],
      offset: 0,
      yIndex: 0,

      //items: []
      items: [
        {
          label: "CPU",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [
            {
              label: "system.cpu.intr",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.load[percpu,avg1]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.load[percpu,avg15]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.load[percpu,avg5]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.switches",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.util[,idle]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.util[,interrupt]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.util[,iowait]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.util[,nice]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.util[,softirq]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.util[,steal]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.util[,system]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.cpu.util[,user]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            
          ]
        },
        {
          label: "MEMORY",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [
            {
              label: "vm.memory.size[available]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vm.memory.size[total]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
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
              label: "vfs.fs.inode[/,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.inode[/boot,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.inode[/var/lib/docker/aufs,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.inode[/var/lib/kubelet,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.inode[/var/lib/rancher/volumes,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
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
              label: "system.swap.size[,free]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.swap.size[,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "system.swap.size[,total]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/,total]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/,used]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/boot,free]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/boot,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/boot,total]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/boot,used]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/docker/aufs,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/docker/aufs,total]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/docker/aufs,used]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/kubelet,free]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/kubelet,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/kubelet,total]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/kubelet,used]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/rancher/volumes,free]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/rancher/volumes,pfree]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/rancher/volumes,total]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: "vfs.fs.size[/var/lib/rancher/volumes,used]",
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            
            
          ]
        },
        {
          label: "NETWORK",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [
            {
              label: 'net.if.in[ens160]',
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: 'net.if.out[ens160]',
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            }
          ],
          rendered: false
        },
        {
          label: "PROCESS",
          spread: false,
          firstSpread: false,
          isLeaf: false,
          children: [
            {
              label: 'proc.num[,,run]',
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            },
            {
              label: 'proc.num[]',
              data: [],
              rendered: false,
              isLeaf: true,
              chartOptions: [],
              chartDetailOptions: [],
              selectHosts: [],
              oldSelectHosts: [],

              time: [],
            }
          ],
          rendered: false
        }
      ],

      itemId: "28330",
      valueType: "3",

      time:[],
      timeFrom: Date.parse(new Date()) / 1000 - 3 * 60 * 60,
      timeTill: Date.parse(new Date()) / 1000,
      pickerOptions: {
          shortcuts: [
            {
            text: '最近6小时',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近12小时',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 12);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 );
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      },

      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  components: {
    itemTable
  },
  methods: {
    handleCheckChange: function(data, checked, indeterminate) {
      if (data.isLeaf) {
        this.$http.get(global.zabbixUrl + '/get_monitordata', {params: {
          ip: this.$route.params.ip,
          port: this.$route.params.port,
          hostid: this.paramsHostid,
          key: data.label,
          timeFrom: this.timeFrom,
          timeTill: this.timeTill
        }}).then(res => {
          data.data = res.body
          if (!data.rendered) {
            
          let that = this, host = this.hosts.filter(t => t.hostid == that.paramsHostid)
          let option = this.getOption(data.data, data.label, false);
          let detailOption = this.getOption(data.data, data.label, true, host[0].label);
          data.chartOptions = option;
          data.chartDetailOptions = detailOption;
        }
        data.rendered = !data.rendered;
        })
      } else {
        if (!data.spread && !data.firstSpread) {
          let that = this, host = this.hosts.filter(t => t.hostid == that.paramsHostid)
          data.children.forEach(function(element) {
            that.$http.get(global.zabbixUrl + '/get_monitordata', {params: {
            ip: that.$route.params.ip,
            port: that.$route.params.port,
            hostid: that.paramsHostid,
            key: element.label,
            timeFrom: that.timeFrom,
            timeTill: that.timeTill
        }}).then(res => {
              element.data = res.body
          
            if (!element.rendered) {
              element.chartOptions = that.getOption(
                element.data,
                element.label,
                false,
              );
              element.chartDetailOptions = that.getOption(
                element.data,
                element.label,
                true,
                host[0].label
              );
            }
            element.rendered = !element.rendered;
            })
          });
        }
      }
    },
    handleNodeExpand: function(data, node, self) {
      if (!data.firstSpread) data.firstSpread = !data.firstSpread;
      data.spread = !data.spread;
    },
    handleNodeCollapse: function(data, node, self) {
      data.spread = !data.spread;
    },
    handleNodeClick: function(data) {
     
      if(data.isLeaf) { 
        this.$refs.tree.setChecked(data, !data.rendered)
      }
    },

    handleEloptionChange: function(child) {
      var index = 0
      let $ = this
      if(child.selectHosts.length > child.oldSelectHosts.length) {
        for(index = child.oldSelectHosts.length; index < child.selectHosts.length; index += 1) {
          var hostid = child.selectHosts[index], hostname = $.hosts.filter(t => t.hostid == hostid)[0].label
          //TODO: 请求数据
          this.$http.get(global.zabbixUrl + '/get_monitordata', {params: {
            ip: this.$route.params.ip,
            port: this.$route.params.port,
            hostid: hostid,
            key: child.label,
            timeFrom: child.time.length > 0 ? parseInt( new Date(child.time[0]).getTime() / 1000) : this.timeFrom,
            timeTill: child.time.length > 0 ? parseInt( new Date(child.time[1]).getTime() / 1000) : this.timeTill
        }}).then(res => {
            $.UpdateCompareOption(hostname, res.body, child, 'add')
          })
          
        }
      } else {
       
        for(index = 0; index < child.oldSelectHosts.length; index += 1) {
          
          if(child.selectHosts.indexOf(child.oldSelectHosts[index]) === -1) {

            var hostid = child.oldSelectHosts[index], hostname = $.hosts.filter(t => t.hostid == hostid)[0].label

            $.UpdateCompareOption(hostname, [], child, 'delete')
          }
        }
      }
      child.oldSelectHosts = child.selectHosts
      console.log(child)
    },
    handleEloptionCollapse: function (state) {
      this.select_host_item_data = []
      let that = this
      
      this.selectHosts.forEach(element => {
        var gap = Math.random()
        var newData = []
        that.data.forEach(function(element) {
          newData.push([element.timeStamp * 1000, element.value * gap]);
        });
        that.select_host_item_data.push({
          label: element.label,
          data: newData
        })
      })

      //console.log(selectHosts)
      console.log(state)
    },
    handleEloptionFocus: function(label) {
      this.selectHostsItem = label
      console.log(this.selectHostsItem)
    },

    handleTimePickerChange: function(child) {
      let timeFrom = parseInt( new Date(child.time[0]).getTime() / 1000)
      let timeTill = parseInt( new Date(child.time[1]).getTime() / 1000)
      this.$http.get(global.zabbixUrl + '/get_monitordata', {params: {
          ip: this.$route.params.ip,
          port: this.$route.params.port,
          hostid: this.paramsHostid,
          key: child.label,
          timeFrom: timeFrom,
          timeTill: timeTill
        }}).then(res => {
          console.log(res)
            child.selectHosts = []
            child.oldSelectHosts = []
            child.data = res.body
            let that = this, host = this.hosts.filter(t => t.hostid == that.paramsHostid)
            let option = this.getOption(child.data, child.label, false);
            let detailOption = this.getOption(child.data, child.label, true, host[0].label);
            child.chartOptions = option;
            child.chartDetailOptions = detailOption;
          }
        )
    },

    myRefresh: function(tab) {
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
    getOption: function(data, title, showSth, hostName) {
      var newData = [];
      var $ = this
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
        legend: {
          borderColor: '#1ab394',
         // data: ['test','test1']
         top: '25px'
        },
        grid: {
          left: showSth ? '15%' : 20,
          right: showSth ? '15%' : 20,
        },
        xAxis: [
          {
            type: "time",
            axisTick: {
              show: showSth
            },
            axisLabel: {
              show: showSth
            }
            //maxInterval: 60*1000
          }
        ],
        yAxis: [
          {
            name: hostName,
            type: "value",
            scale: true,
            axisTick: {
              show: showSth
            },
            axisLabel: {
              show: showSth
            }
          }
        ],
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
            name: hostName,
            type: "line",
            sampling: "average",
            lineStyle: {
              color: "#1ab394"
            },
            itemStyle: {
              color: "#1ab394"
            },
            data: newData
          }
        ]
      };
    },
    UpdateCompareOption: function(hostname, data, child, opration) {
      var childOptionY = child.chartDetailOptions.yAxis
      var childOptionSeries = child.chartDetailOptions.series
      if(opration == 'add') {
        var newData = [];
        var value = []
        var valueOrigin = []
        
        data.forEach(element => {
          newData.push([element.timeStamp * 1000 , element.value])
        })

        childOptionSeries[0].data.forEach(element => {
          valueOrigin.push(element[1])
        })

        if(value.sort().reverse()[0] < valueOrigin.sort()[0] * 0.5 || 
          value.sort()[0] > valueOrigin.sort().reverse()[0] * 1.5) {
            childOptionY.push({
              name: hostname,
              type: "value",
              min: "dataMin",
              max: "dataMax",
              //offset: this.offset += 20
            })
            //this.yIndex ++
            childOptionSeries.push({
              name: hostname,
              type: 'line',
              sampling: 'average',
              data: newData,
              //yAxisIndex: this.yIndex
            })
        } else {
          childOptionSeries.push({
            name: hostname,
            type: 'line',
            sampling: 'average',
            data: newData
          })
        }
        
      } else {
        
        this.myOptionFilter(childOptionSeries, hostname)
        // if(this.myOptionFilter(childOptionY, hostname)) {
        //   this.yIndex --
        // }
        // child.chartDetailOptions.series = childOptionSeries.filter(t => t.name !== hostname)
        // child.chartDetailOptions.yAxis = childOptionY.filter(t => t.name !== hostname)
        
        console.log(child.chartDetailOptions.yAxis)
      }
    },
    myOptionFilter: function(arr, name) {
      arr.forEach((element, index) => {
        if(element.name === name) {
          arr.splice(index, 1)
          return true
        }
      })
      return false
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

    this.hosts = this.$route.params.hosts

    this.paramsHostid = this.$route.params.hostid

    let hostid = this.paramsHostid
    this.hostsForOption = this.hosts.filter(t => t.hostid !== hostid)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el_tree_style {
  padding-right: 10px;
  background-color: #fff;
  display: inline-block;
  margin-right: 10px;
  height: 100%;
}
#itemDataPage {
  display: flex;
}
.configure {
  position: relative;
  top: 20px;
  right: 160px;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #1ab394;
  border-color: #1ab394;
}
</style>
