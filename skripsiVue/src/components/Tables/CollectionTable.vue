<template>
  <div>
    <md-table v-model="collections" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Church">{{ item.church_name }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="Worship Session">{{ item.worship_session }}</md-table-cell>
        <md-table-cell md-label="Total">{{ item.total }}</md-table-cell>
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
  name: "collection-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      collections: [
        {
          id: "1",
          church_name: "GBIS Solo",
          date: "12-1-2019",
          worship_session: "1",
          total: "2000000"
        },
        {
          id: "2",
          church_name: "GBIS Solo",
          date: "12-1-2019",
          worship_session: "1",
          total: "2000000"
        },
        {
          id: "3",
          church_name: "GBIS Solo",
          date: "12-1-2019",
          worship_session: "1",
          total: "2000000"
        }
      ]
    };
  }
};
</script>
