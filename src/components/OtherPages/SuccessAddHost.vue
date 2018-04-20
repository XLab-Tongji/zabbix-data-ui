<template>
  <div id="page">
    <div class="middle-box text-center animated fadeInDown">
        <h2>Success!</h2>
        <h3 class="font-bold">Add host successfully..</h3>
        <h3 class="font-bold">Continue add host?</h3>

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
      this.$router.push({path: '/hostconfig'})
    },
    cancelAdd: function() {
        let that = this
      this.$router.push({path: '/2/' + that.$route.params.ip + '/' + that.$route.params.port})
    }
  },
  mounted() {
      console.log(this.$route.params)
  }
}
</script>

<style scoped>
</style>
