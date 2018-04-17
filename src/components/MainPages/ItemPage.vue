<template>
  <div id="itemPage">
    {{items}}
  </div>
</template>

<script>

export default {
  name: 'ItemPage',
  data () {
    return {
      items: null,
      hostId: '10254',
    }
  },
  methods: {
    getItemInfo: function () {
      this.$http.get(zabbixUrl + '/items', {params: {'hostId': this.hostId}}).then(
        function (response) {
          console.log(response)
          this.itemsgit = response.body
        }, function (error) {
          console.log(error)
        }
      )
    }
  },
  mounted () {
    this.getItemInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
