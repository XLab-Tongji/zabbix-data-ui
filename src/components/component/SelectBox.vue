<template>
  <div id="SelectBox" style="position: relative">
    <div class="mask" @click="closeBox"></div>
    <div class="modal-dialog time-picker">
        <div class="modal-content animated fadeIn">
            <div class="modal-header">
                <h4 class="modal-title"><i class="fa fa-edit modal-icon"></i>&nbsp Pick Time</h4>
            </div>
            <div class="modal-body">
                <el-date-picker           
                    v-model="time"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                </el-date-picker>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-white" data-dismiss="modal" @click="closeBox">Close</button>
                <button type="button" class="btn btn-primary" @click="handleTimePickerChange">Confirm</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectbox",
  data() {
    return {
        time: [],
        pickerOptions: {
          shortcuts: [
            {
            text: '最近6小时',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近12小时',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 12);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 );
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      },
    }
  },
  methods: {
      handleTimePickerChange: function() {
        let timeFrom = parseInt( new Date(this.time[0]).getTime() / 1000)
        let timeTill = parseInt( new Date(this.time[1]).getTime() / 1000)
        this.$emit('selectTime', [timeFrom, timeTill])
      },
      closeBox: function() {
        this.time = []
        this.$emit('closeBox', 'close')
      }
  },
  mounted() {

  }
}
</script>

<style scoped>
.time-picker {
    position: fixed;
    left: 50%;
    top: 30%;
    transform: translate(-30%, -50%);
    z-index: 1001;
}
.btn-group {
    display: flex;
    justify-content: flex-end; 
    margin-top: 5px
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0,0,0,.5);
}
</style>
