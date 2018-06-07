<template>
  <div id="page">
    <div class="middle-box text-center animated fadeInDown">
        <h2>Success!</h2>
        <h3 class="font-bold">Add cluster successfully..</h3>
        <h3 class="font-bold">Continue add cluster?</h3>

        <form class="form-inline m-t" role="form">
          <button class="btn btn-primary" @click="cancelAdd">Cancel</button>
          <button class="btn btn-primary" @click="continueAdd">Continue</button>
        </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'successPage',
  data() {
    return {

    }
  },
  methods: {
    continueAdd: function() {
      this.$router.push({name: 'ZabbixConfigPage'})
    },
    cancelAdd: function() {
      this.$router.push({name: 'ClusterPage'})
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
</style>
