<template>
    <div style="position: relative">
    <el-table
        ref="templateTable"
        :data="data"
        tooltip-effect="dark"
        style="width: 100%"
        @select="handleSelectChange"
        @select-all="handleSelectAll">

        <el-table-column
        type="selection"
        width="55">
        </el-table-column>

        <el-table-column
        prop="templateid"
        label="Id"
        width="100">
        </el-table-column>

        <el-table-column
        prop="host"
        label="Template"
        min-width="100%">
        </el-table-column>

    </el-table>
    <div style="position: fixed;bottom: 40px;right: 10px">
    <button type="button" class="btn btn-w-m btn-primary" style="margin-top:10px" @click="goHostConfig">Submit</button>
    </div>
    </div>
</template>

<script>
import { getTemplates } from "../../api.js"

export default {
  data() {
    return {
        data: this.$store.state.zabbixTemplate.zabbixTemplates.templates,
        templates: []
    }
  },
  methods: {
      handleSelectChange: function(selection,row) {
        let name = row.host
        console.log(name)
        this.$store.commit('SET_TEMPLATE', { name })
      },
      handleSelectAll: function(selection) {
          this.$store.commit('SET_ALL_TEMPLATE')
      },
      toggleSelection: function(rows) {
        if (rows) {
            let that = this
            rows.forEach(row => {
                this.$refs.templateTable.toggleRowSelection(row);
            });
        } else {
          this.$refs.templateTable.clearSelection();
        }
      },
      getSelection: function() {
          var selections = []
          console.log(this.$store.state.zabbixTemplate)
          this.$store.state.zabbixTemplate.zabbixTemplates.templates.forEach(element => {
              if(element.selected) {
                  selections.push(element)
              }
          })
          return selections
      },
      goHostConfig: function() {
        let ip = this.$route.params.ip
        let port = this.$route.params.port
        this.$router.push({name: 'HostConfigPage',params : {ip: ip, port: port}})
      },
      initTemplate: function() {
        let ip = this.$route.params.ip
        let port = this.$route.params.port
        getTemplates(this, ip, port).then(res => {
            
            this.templates = res.body
            this.templates.forEach(template => {
                template.selected = false
            })
            this.$store.dispatch('getZabbixTemplate', { templates: this.templates })
            
        }, err => {
            console.log(err)
        })
      }
  },
  computed: {
 
  },
  mounted() {
      //console.log(this.$store.state.zabbixTemplate.zabbixTemplates.templates)
      if(this.$store.state.zabbixTemplate.zabbixTemplates.templates === undefined) {
          //console.log("yes")
        this.initTemplate()
      } else {
      var selection = this.getSelection()
        this.toggleSelection(selection)
      }
  }
}
</script>

<style scoped>
</style>
