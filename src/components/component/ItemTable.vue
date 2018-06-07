<template>
  <div id="ItemTable">
      <div class="col-lg-14"> 

          <div class="jqGrid_wrapper">
            <div class="ui-jqgrid ui-widget ui-widget-content ui-corner-all" id="gbox_table_list_1" dir="ltr" style="width: 1130px;">
              <div class="ui-widget-overlay jqgrid-overlay" id="lui_table_list_1"></div>
              <div class="loading ui-state-default ui-state-active" id="load_table_list_1" style="display: none;">Loading...</div>
              <div class="ui-jqgrid-view" id="gview_table_list_1" style="width: 1130px;">
                <div class="table-header">
                <div class="ui-jqgrid-titlebar ui-jqgrid-caption ui-widget-header ui-corner-top ui-helper-clearfix">
                  <span class="ui-jqgrid-title">{{tableTitle}}</span>
                </div>
                </div>

                <div class="ui-state-default ui-jqgrid-hdiv" style="width: 1130px;">
                  <div class="ui-jqgrid-hbox">
                    <table class="ui-jqgrid-htable" style="width: 1112px;" role="grid" aria-labelledby="gbox_table_list_1" cellspacing="0" cellpadding="0" border="0">
                      <thead>
                      <tr class="ui-jqgrid-labels" role="rowheader">

                        <th id="table_list_1_id" role="columnheader" class="ui-state-default ui-th-column ui-th-ltr" style="width: 104px;" v-for="col in tableCols">
                          <span class="ui-jqgrid-resize ui-jqgrid-resize-ltr" style="cursor: col-resize;">&nbsp;</span>
                          <div id="jqgh_table_list_1_id" class="ui-jqgrid-sortable">{{col}}
                            <span class="s-ico" style="">
                              <span sort="asc" class="ui-grid-ico-sort ui-icon-asc ui-icon ui-icon-triangle-1-n ui-sort-ltr"></span>
                              <span sort="desc" class="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"></span>
                            </span>
                          </div>
                        </th>

                      </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div class="ui-jqgrid-bdiv" style="height: 400px; width: 1130px;">
                  <div style="position:relative;">
                    <div></div>
                  <table id="table_list_1" tabindex="0" cellspacing="0" cellpadding="0" border="0" role="grid" aria-multiselectable="false" aria-labelledby="gbox_table_list_1" class="ui-jqgrid-btable" style="width: 1112px;">
                    <tbody>

                    <tr role="row" id="1" tabindex="-1" class="ui-widget-content jqgrow ui-row-ltr" v-for="row in tableRows">
                      <td role="gridcell"  :class="{'correct': value == 'true', 'incorrect': value == 'false'}" style="text-align: center;" title="1" aria-describedby="table_list_1_id" v-for="value in row">{{value}}</td>
                    </tr>

                    </tbody>
                  </table>
                </div>
                </div>
                </div>
              <div class="ui-jqgrid-resize-mark" id="rs_mtable_list_1">&nbsp;</div>
            </div>



          </div>

 


                    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemTable',
  props: {
            tableTitle: String,
            tableCols: {
                type: Array,
                default: function() {
                    return ['TimeStamp', 'Value']
                }
            },
            tableRows: Array
    },
  data() {
    return {
        
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>
.table-header {
  position: relative;
}
.download-button {
  position: absolute;
  top: 0px;
  right: 20px;
  height: 100%;
}
</style>
