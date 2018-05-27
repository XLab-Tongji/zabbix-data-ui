<template>
  <div id="hostPage">
    <!-- <div style="width:100%;display: flex"> -->
      <!-- <div >
        <el-tree class="el_tree_style"
          :data="hosts"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          ref="tree"
          @check-change="handleCheckChange"
          @node-expand="handleNodeExpand"
          @node-collapse="handleNodeCollapse">
        </el-tree>
      </div> -->
      
      <div class="my-hosts">
      <div v-for="(host,index) in hosts" class="hostblock animated" v-bind:class="{ fadeOutRight:host.fadeActive }">
        <div class=" widget lazur-bg p-xl host-detail">
          <h1>Host: {{host.name}}</h1>
          <ul class="list-unstyled m-t-md">
            <li>
                <span class="fa fa-at m-r-xs"></span>
                <label>id:</label>
                {{host.hostid}}
            </li>
            <li>
                <span class="fa fa-desktop m-r-xs"></span>
                <label>Name:</label>
                {{host.name}}
            </li>
            <li class="tooltip-demo">
                <!-- <span class="fa fa-file-text m-r-xs"></span>
                <label>Description:</label> -->
                <div class="des-block" data-toggle="tooltip" data-placement="bottom" :title="host.description">
                  <span class="fa fa-file-text m-r-xs"></span>
                  <label>Description:</label>
                  {{host.description}}
                </div>
            </li>
          </ul>
          <div class="host-button">
            <div>
              <button style="width: 108.75px; height: 40px" type="button" class="btn  btn-primary" @click="goItemPage(host)">Items</button>
            </div>
            <!-- <button type="button" class="btn btn-w-m btn-danger" @click="deleteHost(host,index)">Delete</button>
            <button type="button" class="btn btn-w-m btn-success">Download</button> -->
            <div style="padding-left: 10px">
              <el-dropdown @command="handleCommand">
                <el-button type="primary">
                  Actions<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="{type: 'download', 'host': host, 'index': index}">Download</el-dropdown-item>
                  <el-dropdown-item :command="{type: 'delete', 'host': host, 'index': index}">Delete</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
        
        
      </div>
      
    <!-- </div> -->
    <div class="addBtn">
      <button class="btn btn-primary btn-circle btn-lg dim" type="button" @click="addHost"><i class="fa fa-plus"></i></button>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HostPage",
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label"
      },
      hosts: []
    };
  },
  methods: {
    goItemPage: function(host) {
      let that = this
      this.$router.push({name: 'ItemDataPage', params: {
        userid: that.$route.params.userid, 
        hostid: host.hostid, 
        hostname: host.name,
        hosts: this.hosts,
        ip: this.$route.params.ip,
        port: this.$route.params.port
      }})
      //this.$router.push( '3/'+hostid )
    },
    addHost: function() {
      let that = this
      this.$router.push({name: 'HostConfigPage', params: {ip: that.$route.params.ip, port: that.$route.params.port}})
    },
    goComparePage: function() {
      let that = this
      this.$router.push({name: 'ItemComparePage', params: {ip: that.$route.params.ip, port: that.$route.params.port}})
    },

    handleCommand: function(command) {
      if(command.type === "delete") {
        this.deleteHost(command.host, command.index)
      }
    },
    deleteHost: function(host, index) {
      this.$confirm('确定删除?','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //TODO:调用接口删除主机信息
        toastr.success("删除成功")
        host.fadeActive = true
        let that = this
        setTimeout(function() {
          that.hosts.splice(index,1)
        },1000)
      }).catch(() => {
        toastr.success("取消删除")
      })
    }
    //  handleCheckChange: function(data, checked, indeterminate) {
    //   console.log("yes");
    //   if (data.isLeaf) {
    //     //TODO:调用接口
    //     data.rendered = !data.rendered;
    //   } else {
    //     if (!data.spread && !data.firstSpread) {
    //       let that = this;
    //       data.children.forEach(function(element) {
    //         element.rendered = !element.rendered;
    //       });
    //     }
    //   }
    // },
    // handleNodeExpand: function(data, node, self) {
    //   if (!data.firstSpread) data.firstSpread = !data.firstSpread;
    //   data.spread = !data.spread;
    //   console.log(data.spread);
    // },
    // handleNodeCollapse: function(data, node, self) {
    //   data.spread = !data.spread;
    //   console.log(data.spread);
    // },
  },
  mounted() {
    this.$http.get(global.zabbixUrl + '/get_host', {params: {ip: this.$route.params.ip, port: this.$route.params.port}}).then(res => {
      res.body = res.body.filter(t => t.hostid !== "10084")
      res.body.forEach(element => {
        element.label = element.name = element.host
        element.fadeActive = false
      });
      this.hosts = res.body
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hostblock {
    height: 300px;
    width: 30%;
    /* display:inline-block; */
    margin: 15px;
    
  }
  .my-hosts {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 35px
  }
  .host-detail {
    height: 100%;
    width: 100%;
    position: relative;
  }
  .host-button {
    position: absolute;
    bottom: 25px;
    left: 60px;
    display: flex;
    justify-content: flex-end;
  }
  .addBtn {
    position: fixed;
    bottom: 25px;
    right: 30px;
    z-index: 99999;
  }
  .des-block {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>
