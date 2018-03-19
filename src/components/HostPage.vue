<template>
  <div id="hostPage">
    <button v-for="host in hosts" @click="showHostItems(host)" type="button" class="btn btn-w-m btn-primary" style="margin-top: 20px; margin-left: 20px">{{host}}</button>
  </div>
</template>

<script>

export default {
  name: 'HostPage',
  data () {
    return {
      hosts: null,
    }
  },
  methods: {
    getZabbixHosts: function () {
      this.$http.get(zabbixUrl + '/hosts').then(
        function (response) {
          console.log(response)
          this.hosts = response.body
        }, function (error) {
          console.log(error)
        }
      )
    },
    showHostItems: function (host) {
      console.log('host: ' + host)
      this.$router.push({name: "ItemPage", params: {hostId: host}})
    }
  },
  mounted () {
    this.getZabbixHosts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
