<template>
  <div>
    <md-table v-model="worshipSchedule" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Worship Name">{{ item.worship_name }}</md-table-cell>
        <md-table-cell md-label="Day">{{ item.day }}</md-table-cell>
        <md-table-cell md-label="Time">{{ item.time }}</md-table-cell>
        <md-table-cell md-label="Place">{{ item.place }}</md-table-cell>
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
  name: "worSchedule-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      worshipSchedule: [
        {
          id: "1",
          worship_name: "Kids",
          day: "Minggu",
          time: "10.00",
          place: "Kids Room",
          church_name: "GBIS Solo"
        },
        {
          id: "2",
          worship_name: "Kids",
          day: "Minggu",
          time: "10.00",
          place: "Kids Room",
          church_name: "GBIS Solo"
        },
        {
          id: "3",
          worship_name: "Kids",
          day: "Minggu",
          time: "10.00",
          place: "Kids Room",
          church_name: "GBIS Solo"
        }
      ]
    };
  }
};
</script>
