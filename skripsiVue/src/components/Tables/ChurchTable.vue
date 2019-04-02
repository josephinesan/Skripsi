<template>
  <div>
    <md-table v-model="churchs" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Phone Number">{{ item.phone_number }}</md-table-cell>
        <md-table-cell md-label="Branch Status">{{ item.branch_status }}</md-table-cell>
        <md-table-cell md-label="Region">{{ item.region }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-fab md-icon-button md-success"><md-icon>create</md-icon></md-button>
          <md-button class="md-fab md-icon-button md-danger"><md-icon>delete</md-icon></md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "church-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      churchs: [
        {
          id: "1",
          name: "GBIS Solo",
          address: "Solo",
          phone_number: "0271-567567",
          branch_status: "no",
          region: "Solo"
        },
        {
          id: "2",
          name: "GBIS Solo",
          address: "Solo",
          phone_number: "0271-567567",
          branch_status: "no",
          region: "Solo"
        },
        {
          id: "3",
          name: "GBIS Solo",
          address: "Solo",
          phone_number: "0271-567567",
          branch_status: "no",
          region: "Solo"
        },
        {
          id: "4",
          name: "GBIS Solo",
          address: "Solo",
          phone_number: "0271-567567",
          branch_status: "no",
          region: "Solo"
        },
        {
          id: "5",
          name: "GBIS Solo",
          address: "Solo",
          phone_number: "0271-567567",
          branch_status: "no",
          region: "Solo"
        },
        {
          id: "6",
          name: "GBIS Solo",
          address: "Solo",
          phone_number: "0271-567567",
          branch_status: "no",
          region: "Solo"
        }
      ]
    };
  }
};
</script>
