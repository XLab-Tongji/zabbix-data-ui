<template>
  <div class="myform">
    <div class="ibox-title">
      <h5>Zabbix 主机配置</h5>
        <!-- <button class="btn btn-info btn-circle" type="button" style="float: right; position: relative; bottom: 8px;" v-show="success"><i class="fa fa-check"></i></button>
        <button class="btn btn-info btn-warning" type="button" style="float: right; position: relative; bottom: 8px;" v-show="!success"><i class="fa fa-times"></i></button> -->
    </div>
    <div class="ibox-content">
      <div  class="form-horizontal">
        <div class="form-group"><label class="col-sm-2 control-label">Host name</label>

          <div class="col-sm-10"><input type="text"class="form-control" v-model="host_name"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Group</label>

          <div class="col-sm-10">
            <input type="text" disabled="disabled" class="form-control" v-model="host_group"/>
            <button type="button" class="btn btn-primary btn-xs" style="float:right" @click="selectGroup">Select</button>
          </div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Templates</label>

          <div class="col-sm-10">
            <input type="text" disabled="disabled" class="form-control" v-model="host_templates"/>
            <button type="button" class="btn btn-primary btn-xs" style="float:right" @click="selectTemplate">Select</button>
          </div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Description</label>

          <div class="col-sm-10"><input type="text"  class="form-control" v-model="host_description"/></div>
        </div>
        <div class="form-group">
          <div class="col-sm-4 col-sm-offset-2">
            <button class="btn btn-white" @click="cancel">Cancel</button>
            <button class="btn btn-primary" @click="successCreateHost">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
name: 'hostConfigPage'
export default {
  data() {
    return {
      host_name: "Host",
      host_group: "",
      host_templates: "",
      host_description: "My monitering host"
    }
  },
  methods: {
    cancel: function() {
      host_name = "Host",
      host_group = "",
      host_templates = "",
      host_description = "My monitering host"
    },
    successCreateHost: function() {
      //TODO:后端接口存储数据
      let ip = this.$route.params.ip
      let port = this.$route.params.port
      this.$router.push({name : 'SuccessAddHost',params : {ip: ip, port: port}})
      this.$store.commit('RESET_TEMPLATE')
      this.$store.commit('RESET_GROUP')
      toastr.success("添加成功")
    },
    selectGroup: function() {
       let ip = this.$route.params.ip
      let port = this.$route.params.port
      this.$router.push({name: 'GroupSelectPage',params : {ip: ip, port: port}})
    },
    selectTemplate: function() {
       let ip = this.$route.params.ip
      let port = this.$route.params.port
      this.$router.push({name: 'TemplateSelectPage',params : {ip: ip, port: port}})
    }
  },
  created() {
    
  },
  mounted() {
    let that = this
    this.$store.state.zabbixTemplate.zabbixTemplates.forEach(element => {
        if(element.selected) {
            that.host_templates = that.host_templates + element.name + ", "
        }
    })
    this.$store.state.zabbixGroup.zabbixGroups.forEach(element => {
        if(element.selected) {
            that.host_group = that.host_group + element.name + ", "
        }
    })
  }
}
</script>

<style scoped>
</style>
