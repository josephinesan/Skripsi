<template>
  <div>
    <md-table v-model="baptism" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Baptism Name">{{ item.baptism_name }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="Birth Certificate Image">{{ item.birth_certif_img }}</md-table-cell>
        <md-table-cell md-label="Family Card Image">{{ item.family_card_img }}</md-table-cell>
        <md-table-cell md-label="Church">{{ item.church_name }}</md-table-cell>
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
  name: "baptism-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      baptism: [
        {
          id: "1",
          name: "Josephine Santika",
          baptism_name: "Eunike",
          date: "02-10-2013",
          church_name: "GBIS Solo"
        },
        {
          id: "2",
          name: "Josephine Santika",
          baptism_name: "Eunike",
          date: "02-10-2013",
          church_name: "GBIS Solo"
        },
        {
          id: "3",
           name: "Josephine Santika",
          baptism_name: "Eunike",
          date: "02-10-2013",
          church_name: "GBIS Solo"
        }
      ]
    };
  }
};
</script>
