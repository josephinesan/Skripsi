<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      
    <!-- <md-button class="md-primary" style="float: right">Add</md-button> -->
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Region</h4>
          </md-card-header>
          <md-card-content>
            <md-table v-model="regions" :table-header-color="tableHeaderColor">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Action">
                  <md-button class="md-fab md-icon-button md-success"><md-icon>create</md-icon></md-button>
                  <md-button class="md-fab md-icon-button md-danger"><md-icon>delete</md-icon></md-button>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "region-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      regions: [
        {
          id: "1",
          name: "Jawa"
        },
        {
          id: "2",
          name: "Sulawesi"
        },
        {
          id: "3",
          name: "Jakarta"
        },
        {
          id: "4",
          name: "Kalimantan"
        },
        {
          id: "5",
          name: "Solo"
        },
        {
          id: "6",
          name: "Bandung"
        }
      ]
    };
  }
};
</script>

