<template>
  <div>
    <md-table v-model="deads" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Date Of Birth">{{ item.date_of_birth }}</md-table-cell>
        <md-table-cell md-label="Date of Dead">{{ item.date_of_dead }}</md-table-cell>
        <md-table-cell md-label="Church">{{ item.church_name }}</md-table-cell>
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
  name: "dead-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      deads: [
        {
          id: "1",
          name: "Santika",
          date_of_birth: "02-09-1990",
          date_of_dead: "10-10-2020",
          church_name: "GBIS Indonesia"
        },
        {
          id: "2",
          name: "Santika",
          date_of_birth: "02-09-1990",
          date_of_dead: "10-10-2020",
          church_name: "GBIS Indonesia"
        },
        {
          id: "3",
          name: "Santika",
          date_of_birth: "02-09-1990",
          date_of_dead: "10-10-2020",
          church_name: "GBIS Indonesia"
        }
      ]
    };
  }
};
</script>
