<template>
  <!--<div id="app">-->

  <!--</div>-->
  <div id="usermain">

    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
          <li class="nav-header">
            <div class="dropdown profile-element">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">Vv</strong>
                             </span> <span class="text-muted text-xs block">Manager <b class="caret"></b></span> </span> </a>
              <ul class="dropdown-menu animated fadeInRight m-t-xs">
                <li><a href="#" @click="logout">Logout</a></li>
              </ul>
            </div>
            <div class="logo-element">
              ZB+
            </div>
          </li>
          <li :class="{ active:isZabbixPage }">
            <a @click="showZabbixPage"><i class="fa fa-th-large"></i> <span class="nav-label">My zabbix</span></a>
          </li>
          <!-- <li :class="{ active:isIdentityPage }">
            <a @click="showIdentityPage"><i class="fa fa-th-large"></i> <span class="nav-label">Identity</span> </a>
          </li> -->
          <!-- <li>
            <a @click="showItemDataPage"><i class="fa fa-th-large"></i> <span class="nav-label">Minor view</span> </a>
          </li> -->

        </ul>

      </div>
    </nav>

    <div id="page-wrapper" class="gray-bg">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary "><i class="fa fa-bars"></i> </a>
            <form role="search" class="navbar-form-custom" method="post">
              <div class="form-group">
                <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
              </div>
            </form>
          </div>
          <ul class="nav navbar-top-links navbar-right">
            <li>
              <a @click="logout">
                <i class="fa fa-sign-out"></i> Log out
              </a>
            </li>
          </ul>

        </nav>
      </div>

      <!--main page-->
      <router-view/>

      <div class="footer">
        <div class="pull-right">
          10GB of <strong>250GB</strong> Free.
        </div>
        <div>
          <strong>Copyright</strong> Example Company &copy; 2014-2015
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isZabbixPage: true,
      isIdentityPage: false
    }
  },
  methods: {
    showZabbixPage: function () {
      this.$router.push("/user/1/cluster")
      this.isZabbixPage = true
      this.isIdentityPage = false
    },
    // showIdentityPage: function () {
    //   this.$router.push("/2")
    //   this.isZabbixPage = false
    //   this.isIdentityPage = true
    // },
      logout: function() {
        this.$router.push('/login')
      }
  },
  mounted() {
   
  }
}
</script>

<style>

</style>
