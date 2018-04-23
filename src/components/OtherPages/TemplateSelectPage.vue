<template>
    <div>
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
        prop="templateId"
        label="Id"
        width="100">
        </el-table-column>

        <el-table-column
        prop="name"
        label="Template"
        min-width="100%">
        </el-table-column>

    </el-table>
    <button type="button" class="btn btn-w-m btn-primary" style="margin-top:10px" @click="goHostConfig">Submit</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
        data: this.$store.state.zabbixTemplate.zabbixTemplates
    }
  },
  methods: {
      handleSelectChange: function(selection,row) {
        let name = row.name
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
          this.$store.state.zabbixTemplate.zabbixTemplates.forEach(element => {
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
      }
  },
  computed: {
 
  },
  mounted() {
      var selection = this.getSelection()
      this.toggleSelection(selection)
  }
}
</script>

<style scoped>
</style>
