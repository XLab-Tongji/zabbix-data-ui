<template>

  <div class="myform">
    <div class="ibox-title">
      <h5>Zabbix 集群配置</h5>
        <!-- <button class="btn btn-info btn-circle" type="button" style="float: right; position: relative; bottom: 8px;" v-show="success"><i class="fa fa-check"></i></button>
        <button class="btn btn-info btn-warning" type="button" style="float: right; position: relative; bottom: 8px;" v-show="!success"><i class="fa fa-times"></i></button> -->
    </div>
    <div class="ibox-content">
      <div  class="form-horizontal">
        <div class="form-group"><label class="col-sm-2 control-label">Zabbix ip</label>

          <div class="col-sm-10"><input type="text"class="form-control" v-model="zabbix_ip"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Zabbix port</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="zabbix_port"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Username</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="zabbix_username"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Password</label>

          <div class="col-sm-10"><input type="password"  class="form-control"
                                        name="password" v-model="zabbix_password"/></div>
        </div>
        <div class="form-group">
          <div class="col-sm-4 col-sm-offset-2">
            <button class="btn btn-white" @click="cancel">Cancel</button>
            <button class="btn btn-primary" @click="successConnect">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zabbixConfigPage',
    data() {
      return {
        "success":false,
        "zabbix_ip":"127.0.0.1",
        "zabbix_port":"8080",
        "zabbix_username":"Admin",
        "zabbix_password":"zabbix",
      }
    },
    methods: {
      cancel () {
        this.zabbix_ip = "127.0.0.1";
        this.zabbix_port = "8080";
        this.zabbix_username = "Admin";
        this.zabbix_password = "zabbix";
      },
      loginZabbix () {
        this.$http.post('http://localhost:8080/zabbix', {
            "zabbixIp":this.zabbix_ip,
            "zabbixPort":this.zabbix_port,
            "zabbixUsername":this.zabbix_username,
            "zabbixPassword":this.zabbix_password,
          }
        ).then(function (response){
            console.log(response);
            this.success = true;
            toastr.success("连接成功");
          }, function (response) {
            console.log(response);
            this.success = false;
            toastr.error("连接失败，请检查配置");
        });
      },
      //test
      successConnect() {
        //TODO:后端接口存储数据
          this.$router.push({path : '/successconnect'})
          toastr.success("添加成功")
          
      },
      failConnect() {
          this.success = false;
          toastr.error("添加失败，请检查配置")
      }
    }
  }

</script>

<style>

</style>
