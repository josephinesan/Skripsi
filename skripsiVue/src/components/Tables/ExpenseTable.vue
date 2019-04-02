<template>
  <div>
    <md-table v-model="expenses" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Church">{{ item.church_name }}</md-table-cell>
        <md-table-cell md-label="Expense From">{{ item.expense_from }}</md-table-cell>
        <md-table-cell md-label="Expense For">{{ item.expense_for }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.location }}</md-table-cell>
        <md-table-cell md-label="Payment Status">{{ item.payment_status }}</md-table-cell>
        <md-table-cell md-label="Total">{{ item.total }}</md-table-cell>
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
  name: "expense-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      expenses: [
        {
          id: "1",
          church_name: "GBIS Jambi",
          expense_from: "Santika",
          expense_for: "Donasi",
          location: "Jambi",
          payment_status: "Lunas",
          total: "10000000"
        },
        {
          id: "2",
          church_name: "GBIS Jambi",
          expense_from: "Santika",
          expense_for: "Donasi",
          location: "Jambi",
          payment_status: "Lunas",
          total: "10000000"
        },
        {
          id: "3",
          church_name: "GBIS Jambi",
          expense_from: "Santika",
          expense_for: "Donasi",
          location: "Jambi",
          payment_status: "Lunas",
          total: "10000000"
        }
      ]
    };
  }
};
</script>
