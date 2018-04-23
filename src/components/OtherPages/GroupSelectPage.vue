<template>
    <div>
    <el-table
        ref="groupTable"
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
        prop="groupId"
        label="Id"
        width="100">
        </el-table-column>

        <el-table-column
        prop="name"
        label="Group"
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
        data: this.$store.state.zabbixGroup.zabbixGroups
    }
  },
  methods: {
      handleSelectChange: function(selection,row) {
        let name = row.name
        this.$store.commit('SET_GROUP', { name })
      },
      handleSelectAll: function(selection) {
          this.$store.commit('SET_ALL_GROUP')
      },
      toggleSelection: function(rows) {
        if (rows) {
            let that = this
            rows.forEach(row => {
                this.$refs.groupTable.toggleRowSelection(row);
            });
        } else {
          this.$refs.groupTable.clearSelection();
        }
      },
      getSelection: function() {
          var selections = []
          this.$store.state.zabbixGroup.zabbixGroups.forEach(element => {
              if(element.selected) {
                  selections.push(element)
              }
          })
          return selections
      },
      goHostConfig: function() {
          let ip = this.$route.params.ip
            let port = this.$route.params.port
          this.$router.push({name: 'HostConfigPage', params : {ip: ip, port: port}})
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
