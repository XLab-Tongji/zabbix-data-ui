<template>
  <div id="hostPage">
    {{hosts}}
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
  mounted () {
    // get zabbix hosts
    this.$http.get(zabbixUrl).then(
      function (response) {
        console.log(response)
        this.hosts = response.body
      }, function (error) {
        console.log(error)
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
