<template>
  <div>
    <md-table v-model="weddings" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Wife Name">{{ item.wife_name }}</md-table-cell>
        <md-table-cell md-label="Husband Name">{{ item.husband_name }}</md-table-cell>
        <md-table-cell md-label="Marriage Certificate Image">{{ item.marriage_certif_img }}</md-table-cell>
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
  name: "wedding-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      weddings: [
        {
          id: "1",
          wife_name: "Santika",
          husband_name: "Daniel",
          church_name: "GBIS Solo"
        },
        {
          id: "2",
          wife_name: "Santika",
          husband_name: "Daniel",
          church_name: "GBIS Solo"
        },
        {
          id: "3",
          wife_name: "Santika",
          husband_name: "Daniel",
          church_name: "GBIS Solo"
        }
      ]
    };
  }
};
</script>
