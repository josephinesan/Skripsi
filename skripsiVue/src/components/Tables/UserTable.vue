<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Role">{{ item.role }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Password">{{ item.password }}</md-table-cell>
        <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Bank Account Number">{{ item.bank_number }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="Church">{{ item.church }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-fab md-icon-button md-success"><md-icon>create</md-icon></md-button>
          <md-button class="md-fab md-icon-button md-danger"><md-icon>delete</md-icon></md-button>
        </md-table-cell>
        <!-- <md-table-cell md-label="City">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Salary">{{ item.salary }}</md-table-cell> -->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "user-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: "1",
          role: "Gembala",
          name: "Gideon",
          email: "gideon@gmail.com",
          password: "gideon",
          phone: "08123456788",
          address: "jalan manalagi",
          bank_account_number: "035678262",
          status: "active",
          church: "GBIS Solo"
        },
        {
          id: "2",
          role: "Gembala",
          name: "Gideon",
          email: "gideon@gmail.com",
          password: "gideon",
          phone: "08123456788",
          address: "jalan manalagi",
          bank_account_number: "035678262",
          status: "active",
          church: "GBIS Solo"
        },
        {
          id: "3",
          role: "Gembala",
          name: "Gideon",
          email: "gideon@gmail.com",
          password: "gideon",
          phone: "08123456788",
          address: "jalan manalagi",
          bank_account_number: "035678262",
          status: "active",
          church: "GBIS Solo"
        }
      ]
    };
  }
};
</script>
