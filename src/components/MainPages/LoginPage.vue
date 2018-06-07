<template>
  <div id="loginpage" class="gray-bg" style="height:100%">
    <div class="loginColumns animated fadeInDown">
        <div class="row">

            <div class="col-md-6">
                <h2 class="font-bold">Welcome to Zabbix-data-UI of Xlab-Tongji</h2>

                <p>
                    Perfectly designed and precisely prepared UI is enough for you to supervise your servers.
                </p>

                <p>
                    The user interface is simply easy for any people to use, making them on top of the world.
                </p>

                <p>
                    After you using this excellent UI, you will think it happier to conduct performance monitoring.
                </p>

                <p>
                    It has provided service for more than 4 people in Tongji university, gaining good reputation.
                </p>
                <p>
                    <small>We are continually improving this tool for better experience.</small>
                </p>
              

            </div>
            <div class="col-md-6">
                <div class="ibox-content">
                    <form class="m-t" role="form" action="index.html">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Username" required="">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" required="">
                        </div>
                        <button type="submit" class="btn btn-primary block full-width m-b" @click="login(1)">Login</button>

                        <a href="#">
                            <small>Forgot password?</small>
                        </a>

                        <p class="text-muted text-center">
                            <small>Do not have an account?</small>
                        </p>
                        <a class="btn btn-sm btn-white btn-block" @click="goRegister">Create an account</a>
                    </form>
                    <p class="m-t">
                        <small>Let's start the fantastic journey in Zabbix-data-UI's world</small>
                    </p>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-6">
                Copyright Xlab of Software College, Tongji University
            </div>
            <div class="col-md-6 text-right">
               <small>© 2017-2018</small>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
      login: function(userid) {
          this.$router.push({name: 'ClusterPage', params: {userid: userid}})
          //this.$router.push('/user' + '/' + userid + '/cluster')
      },
      goRegister: function() {
          this.$router.push('/register')
      }
  },
  mounted() {

  }
}
</script>

<style scoped>
</style>
