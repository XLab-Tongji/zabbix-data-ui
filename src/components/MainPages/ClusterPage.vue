<template>
  <div id = "clusterPage" style="padding-bottom:30px">
    <div class=" widget lazur-bg p-xl animated" v-bind:class="{ fadeOutRight:server.fadeActive }"  v-for="(server,index) in servers">
      <h2>
          {{server.host}}
      </h2>
      <ul class="list-unstyled m-t-md">
          <li>
            <span class="fa fa-at m-r-xs"></span>
            <label>Ip:</label>
            {{server.ip}}
          </li>
          <li>
            <span class="fa fa-at m-r-xs"></span>
            <label>Port:</label>
            {{server.port}}
          </li>
          <li>
            <span class="fa fa-desktop m-r-xs"></span>
            <label>Name:</label>
            {{server.name}}
          </li>
          <li>
            <span class="fa fa-file-text m-r-xs"></span>
            <label>Description:</label>
            {{server.description}}
          </li>
      </ul>
      <div style="display:inline-block">
        <button type="button" class="btn btn-w-m btn-primary" @click="goHostPage(server.ip,server.port)">Hosts</button>
        <button type="button" class="btn btn-w-m btn-danger" @click="deleteCluster(server,index)">Delete</button>
      </div>
    </div>
    <div class="addBtn">
      <button class="btn btn-primary btn-circle btn-lg dim" type="button" @click="addCluster"><i class="fa fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClusterPage",
  data() {
    return {
      servers: [
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 2",
          description: "cluster server",

          fadeActive: false
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server",

          fadeActive: false
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server",

          fadeActive: false
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server",

          fadeActive: false
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server",

          fadeActive: false
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server",

          fadeActive: false
        },
      ]
    }
  },
  methods: {
    goHostPage: function(ip,port) {
      this.$router.push({name: "HostPage", params: {ip: ip, port: port}})
      //this.$router.push({ path: '2/' + ip + port})
    },
    deleteCluster: function(server,index) {
      this.$confirm('确定删除?','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //TODO:调用接口、删除用户集群
        toastr.success('删除成功')
        server.fadeActive = true
        let that = this
        setTimeout(function() {
          that.servers.splice(index,1)
        },1000)
      }).catch(() => {
        toastr.success('已取消删除')
      })
      
      
    },
    addCluster: function() {
      this.$router.push({path: 'zabbixconfig'})
    }
  },
  mounted() {
    //TODO:请求servers数据
  }
}
</script>

<style scoped>
  .addBtn {
    position: fixed;
    bottom: 25px;
    right: 30px;
  }
</style>
