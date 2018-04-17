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

          <div class="col-sm-10"><input type="text" class="form-control" v-model="host_group"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Templates</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="host_templates"/></div>
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
      host_name: "",
      host_group: "",
      host_templates: "",
      host_description: ""
    }
  },
  methods: {
    cancel: function() {
      host_name = "",
      host_group = "",
      host_templates = "",
      host_description = ""
    },
    successCreateHost: function() {
      
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
</style>
