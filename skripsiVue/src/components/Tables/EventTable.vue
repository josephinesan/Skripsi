<template>
  <div>
    <md-table v-model="events" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Datetime">{{ item.datetime }}</md-table-cell>
        <md-table-cell md-label="Place">{{ item.place }}</md-table-cell>
        <md-table-cell md-label="Longitude">{{ item.longitude }}</md-table-cell>
        <md-table-cell md-label="Latitude">{{ item.latitude }}</md-table-cell>
        <md-table-cell md-label="Description">{{ item.description }}</md-table-cell>
        <md-table-cell md-label="Church">{{ item.church_name }}</md-table-cell>
        <md-table-cell md-label="Image">{{ item.img }}</md-table-cell>
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
  name: "event-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      events: [
        {
          id: "1",
          name: "Natal",
          datetime: "02-09-1990 10:00",
          place: "Jalan Sutan Syahrir",
          longitude: "10",
          latitude: "-11",
          description: "Event Natal Se Surakarta",
          church_name: "GBIS Solo",
          img: ""
        },
        {
          id: "2",
          name: "Natal",
          datetime: "02-09-1990 10:00",
          place: "Jalan Sutan Syahrir",
          longitude: "10",
          latitude: "-11",
          description: "Event Natal Se Surakarta",
          church_name: "GBIS Solo",
          img: ""
        },
        {
          id: "3",
          name: "Natal",
          datetime: "02-09-1990 10:00",
          place: "Jalan Sutan Syahrir",
          longitude: "10",
          latitude: "-11",
          description: "Event Natal Se Surakarta",
          church_name: "GBIS Solo",
          img: ""
        }
      ]
    };
  }
};
</script>
