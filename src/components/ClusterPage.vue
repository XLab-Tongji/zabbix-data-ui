<template>
  <div id = "clusterPage">
    <div class=" widget lazur-bg p-xl" v-for="server in servers" @click="goHostPage(server.ip+server.port)">
      <h2>
          {{server.host}}
      </h2>
      <ul class="list-unstyled m-t-md">
          <li>
            <span class="fa fa-at m-r-xs"></span>
            <label>ip:</label>
            {{server.ip}}
          </li>
          <li>
            <span class="fa fa-at m-r-xs"></span>
            <label>port:</label>
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
          name: "Server 1",
          description: "cluster server"
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server"
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server"
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server"
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server"
        },
        {
          ip: "127.0.0.1",
          port: "8080",
          name: "Server 1",
          description: "cluster server"
        },
      ]
    }
  },
  methods: {
    goHostPage: function(url) {
      this.$router.push({ path: '/2/' + url})
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
