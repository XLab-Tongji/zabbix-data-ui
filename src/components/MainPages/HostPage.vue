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
      <div v-for="(host,index) in hosts" class="hostblock animated" v-bind:class="{ fadeOutRight:host.fadeActive }">
        <div class=" widget lazur-bg p-xl ">
          <h2>
              {{host.host}}
          </h2>
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
            <li>
                <span class="fa fa-file-text m-r-xs"></span>
                <label>Description:</label>
                {{host.description}}
            </li>
          </ul>
          <div style="display:inline-block">
        <button type="button" class="btn btn-w-m btn-primary" @click="goItemPage(host.hostid)">Items</button>
        <button type="button" class="btn btn-w-m btn-danger" @click="deleteHost(host,index)">Delete</button>
      </div>
        </div>
        
      </div>
    <!-- </div> -->
    <div class="addBtn">
      <button class="btn btn-primary btn-circle btn-lg dim" type="button" @click="addHost"><i class="fa fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HostPage",
  data() {
    return {
      // hosts: [
      //   {
      //     label: null,
      //     spread: null,
      //     firstSpread: null,
      //     isLeaf: null,
      //     children: [
      //       {
      //         label: null,
      //         hostid: null,
      //         host: "",
      //         name: "",
      //         description: "",
      //         rendered: null,
      //         isLeaf: null,
      //       }
      //     ]
      //   }
      // ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      hosts: [
        { 
          label: "Host 1",
          hostid: 10160,
          host: "Host 1",
          name: "Host 1",
          description: "The Zabbix monitoring server.",
          fadeActive: false
        },
        {
          label: "Host 2",
          hostid: 10160,
          host: "Host 2",
          name: "Host 2",
          description: "The Zabbix monitoring server.",
          fadeActive: false
        },
        {
          label: "Host 3",
          hostid: 10160,
          host: "Host 3",
          name: "Host 3",
          description: "The Zabbix monitoring server.",
          fadeActive: false
        },
        {
          label: "Host 4",
          hostid: 10160,
          host: "Host 4",
          name: "Host 4",
          description: "The Zabbix monitoring server.",
          fadeActive: false
        },
        {
          label: "Host 5",
          hostid: 10160,
          host: "Host 5",
          name: "Host 5",
          description: "The Zabbix monitoring server.",
          fadeActive: false
        },
        {
          label: "Host 6",
          hostid: 10160,
          host: "Host 6",
          name: "Host 6",
          description: "The Zabbix monitoring server.",
          fadeActive: false
        },
        {
          label: "Host 7",
          hostid: 10160,
          host: "Host 7",
          name: "Host 7",
          description: "The Zabbix monitoring server.",
          fadeActive: false
        },
        {
          label: "Host 8",
          hostid: 10160,
          host: "Host 8",
          name: "Host 8",
          description: "The Zabbix monitoring server.",
          fadeActive: false
        },
      ],
    };
  },
  methods: {
    goItemPage: function(hostid) {
      this.$router.push({ path: '/3/'+hostid })
    },
    addHost: function() {
      let that = this
      this.$router.push({name: 'HostConfigPage', params: {ip: that.$route.params.ip, port: that.$route.params.port}})
    },
    goItemPage: function(hostid) {
      this.$router.push({ path: '/3/'+hostid })
    },
    deleteHost: function(host, index) {
      //TODO:调用接口删除主机信息
      host.fadeActive = true
      let that = this
      setTimeout(function() {
        that.hosts.splice(index,1)
       },1000)
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
    // get zabbix hosts
    console.log(this.$route.params)
    this.$http.get(zabbixUrl + "/hosts").then(
      function(response) {
        console.log(response);
        this.hosts = response.body;
      },
      function(error) {
        console.log(error);
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hostblock {
    min-width: 25%;
    max-width: 30%;
    display:inline-block;
    margin:10px;
    padding-bottom: 20px;
  }
  .addBtn {
    position: fixed;
    bottom: 25px;
    right: 30px;
  }
</style>
