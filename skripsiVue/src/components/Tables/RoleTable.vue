<template>
  <div>
    <md-table v-model="roles" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
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
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      roles: [
        {
          id: "1",
          name: "Gembala Sidang"
        },
        {
          id: "2",
          name: "Sekretariat"
        },
        {
          id: "3",
          name: "Bendahara"
        },
        {
          id: "4",
          name: "Koord Pelayan Tuhan"
        },
        {
          id: "5",
          name: "Gembala Cabang"
        },
        {
          id: "6",
          name: "Kepala Direksi"
        }
      ]
    };
  }
};
</script>
