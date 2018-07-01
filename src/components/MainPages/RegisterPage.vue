<template>
  <div id="page" class="gray-bg" style="height: 100%;">
<div class="middle-box text-center loginscreen   animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">ZB</h1>

            </div>
            <h3>Register to zabbix</h3>
            <p>Create account to see it in action.</p>
            <form class="m-t" role="form">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" required="" v-model="username">
                </div>

                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="" v-model="password">
                </div>
                <div class="form-group">
                        <div class="checkbox i-checks"><label> <div class="icheckbox_square-green" style="position: relative;"><input type="checkbox" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div><i></i> Agree the terms and policy </label></div>
                </div>
                <button class="btn btn-primary block full-width m-b" @click="register">Register</button>

                <p class="text-muted text-center"><small>Already have an account?</small></p>
                <a class="btn btn-sm btn-white btn-block" @click="goLogin">Login</a>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { register } from "../../api.js"
export default {
  data() {
    return {
        username: '',
        password: ''
    }
  },
  methods: {
      register: function() {
          register(this, this.username, this.password).then(res => {
              if(res.body == 'success') {
                  toastr.success('Register successfully')
              }
          })
      },
      goLogin: function() {
          this.$router.push('/login')
      }
  },
  mounted() {

  }
}
</script>

<style scoped>
</style>
