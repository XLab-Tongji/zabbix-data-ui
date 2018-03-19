<template>
  <div id="itemPage">
    <div v-for="item in items">
      <button  type="button" class="btn btn-w-m btn-success" style="margin-top: 10px; margin-left: 20px;">{{item.name}}, {{item.key}}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ItemPage',
  data () {
    return {
      items: null,
      hostId: null,
    }
  },
  methods: {
    getItemInfo: function () {
      this.$http.get(zabbixUrl + '/items', {params: {'hostId': this.hostId}}).then(
        function (response) {
          console.log(response)
          this.items = response.body
        }, function (error) {
          console.log(error)
        }
      )
    }
  },
  mounted () {
    this.hostId = this.$route.params.hostId
    this.getItemInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
