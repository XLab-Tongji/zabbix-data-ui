<template>
  <div style="width:100%" id="hostPage">
    <div class="widget lazur-bg p-xl hostblock" v-for="host in hosts" @click="goItems(host.hostid)">

      <h2>
          {{host.host}}
      </h2>
      <ul class="list-unstyled m-t-md">
          <li>
              <span class="fa fa-at m-r-xs"></span>
              <label>id:</label>
              {{host.hostid}}
          </li>
          <li>
              <span class="fa fa-desktop m-r-xs"></span>
              <label>Name:</label>
              {{host.name}}
          </li>
          <li>
              <span class="fa fa-file-text m-r-xs"></span>
              <label>Description:</label>
              {{host.description}}
          </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "HostPage",
  data() {
    return {
      //  hosts: null,

      //  hosts: []
      hosts: [
        {
          hostid: 10160,
          host: "Zabbix server",
          name: "Zabbix server",
          description: "The Zabbix monitoring server."
        },
        {
          hostid: 10167,
          host: "Linux server",
          name: "Linux server",
          description: ""
        },
        {
          hostid: 10160,
          host: "Zabbix server",
          name: "Zabbix server",
          description: "The Zabbix monitoring server."
        },
        {
          hostid: 10167,
          host: "Linux server",
          name: "Linux server",
          description: ""
        },
        {
          hostid: 10160,
          host: "Zabbix server",
          name: "Zabbix server",
          description: "The Zabbix monitoring server."
        },
        {
          hostid: 10167,
          host: "Linux server",
          name: "Linux server",
          description: ""
        },
        {
          hostid: 10160,
          host: "Zabbix server",
          name: "Zabbix server",
          description: "The Zabbix monitoring server."
        },
        {
          hostid: 10167,
          host: "Linux server",
          name: "Linux server",
          description: ""
        },
        {
          hostid: 10160,
          host: "Zabbix server",
          name: "Zabbix server",
          description: "The Zabbix monitoring server."
        },
        {
          hostid: 10167,
          host: "Linux server",
          name: "Linux server",
          description: ""
        },
        {
          hostid: 10160,
          host: "Zabbix server",
          name: "Zabbix server",
          description: "The Zabbix monitoring server."
        },
        {
          hostid: 10167,
          host: "Linux server",
          name: "Linux server",
          description: ""
        },
        {
          hostid: 10160,
          host: "Zabbix server",
          name: "Zabbix server",
          description: "The Zabbix monitoring server."
        },
        {
          hostid: 10167,
          host: "Linux server",
          name: "Linux server",
          description: ""
        }
      ]
    };
  },
  methods: {
    goItems: function(hostid) {
      this.$router.push({ path: '/3/'+hostid })
    }
  },
  mounted() {
    // get zabbix hosts
    this.$http.get(zabbixUrl + "/hosts").then(
      function(response) {
        console.log(response);
        this.hosts = response.body;
      },
      function(error) {
        console.log(error);
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hostblock {
    min-width: 30%;
    max-width: 40%;
    display:inline-block;
    margin:10px
  }
</style>
