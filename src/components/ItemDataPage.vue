<template>
  <div id="itemDataPage">
    {{data}}
  </div>
</template>

<script>

export default {
  name: 'itemDataPage',
  data () {
    return {
      data: null,
      itemId: '28273',
      valueType: '0',
      timeFrom: '',
      timeTill: '',
    }
  },
  mounted () {
    // get zabbix hosts
    this.$http.get(zabbixUrl + '/itemData', {params: {
      itemId: this.itemId,
      valueType: this.valueType,
//      timeFrom: this.timeFrom,
//      timeTill: this.timeTill,
    }}).then(
      function (response) {
        console.log(response)
        this.data = response.body
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
