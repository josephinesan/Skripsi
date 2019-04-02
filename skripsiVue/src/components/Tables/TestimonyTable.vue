<template>
  <div>
    <md-table v-model="testimony" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="User">{{ item.user }}</md-table-cell>
        <md-table-cell md-label="Testimony">{{ item.testi }}</md-table-cell>
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
        name: "testimony-table",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
    data() {
        return {
            selected: [],
            testimony: 
                [{
                    id: "1",
                    user: "Josephine",
                    testi: "Firmannya berkualitas"
                },
                {
                    id: "2",
                    user: "Josephine",
                    testi: "Firmannya berkualitas"
                },
                {
                    id: "3",
                    user: "Josephine",
                    testi: "Firmannya berkualitas"
                }]
            }
        }
    }
</script>
