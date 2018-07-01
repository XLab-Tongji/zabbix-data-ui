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
            <button class="btn btn-primary" @click="goBack">Back</button>
            <button class="btn btn-primary" @click="successCreateHost">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTemplates } from "../../api.js"
import { getGroups } from "../../api.js"
name: 'hostConfigPage'
export default {
  data() {
    return {
      host_name: "Host",
      host_group: "",
      host_templates: "",
      host_description: "My monitering host",

      templates: [],
      groups: []
    }
  },
  methods: {
    cancel: function() {
      this.host_name = "Host",
      this.host_group = "",
      this.host_templates = "",
      this.host_description = "My monitering host"
      this.$store.commit('RESET_GROUP')
      this.$store.commit('RESET_TEMPLATE')
    },
    goBack: function() {
      let ip = this.$route.params.ip
      console.log(ip)
      let port = this.$route.params.port
      this.$router.push({name: "HostPage", params: {ip: ip, port: port}})
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
    },

    initTemplate: function() {
        let ip = this.$route.params.ip
        let port = this.$route.params.port
        let that = this
        getTemplates(this, ip, port).then(res => {
            this.templates = res.body
            this.templates.forEach(template => {
                template.selected = false
            })
            this.$store.dispatch('getZabbixTemplate', { templates: this.templates })
            
            // this.$store.state.zabbixGroup.zabbixGroups.forEach(element => {
            //     if(element.selected) {
            //         that.host_group = that.host_group + element.name + ", "
            //     }
            // })
        
        }, err => {
            console.log(err)
        })
      },
    initGroups: function() {
        let ip = this.$route.params.ip
        let port = this.$route.params.port
        let that = this
        getGroups(this, ip, port).then((res) => {
          this.groups = res.body
          this.groups.forEach(group => {
            group.selected = false
          })
          this.$store.dispatch('getZabbixGroup', {groups: this.groups})

          // this.$store.state.zabbixGroup.groups.forEach(element => {
          //   if(element.selected) {
          //     that.host_group = that.host_group + element.name + ','
          //   }
          // })
        })
    }
  },
  created() {
    
  },
  mounted() {
    let that = this
    console.log(this.$route.params.ip)
    if(this.$store.state.zabbixTemplate.zabbixTemplates.templates === undefined) {
      this.initTemplate()
    }

    if(this.$store.state.zabbixGroup.zabbixGroups.groups === undefined) {
      this.initGroups()
    }

    this.$store.state.zabbixTemplate.zabbixTemplates.templates.forEach(element => {
      if(element.selected) {
          that.host_templates = that.host_templates + element.host + ", "
      }
    })

     this.$store.state.zabbixGroup.zabbixGroups.groups.forEach(element => {
        if(element.selected) {
          that.host_group = that.host_group + element.name + ','
        }
      })

    // console.log(this.$store.state.zabbixTemplate.zabbixTemplates)
    
  }
}
</script>

<style scoped>
</style>
