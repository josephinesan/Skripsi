<template>
  <div>
    <md-table v-model="news" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Church">{{ item.church_name }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Description">{{ item.description }}</md-table-cell>
        <md-table-cell md-label="Image">{{ item.image }}</md-table-cell>
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
  name: "news-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      news: [
        {
          id: "1",
          church_name: "GBIS Solo",
          title: "Natal",
          description: "Ibadah Perayaan Natal",
          image:""
        },
        {
          id: "2",
          church_name: "GBIS Solo",
          title: "Natal",
          description: "Ibadah Perayaan Natal",
          image:""
        },
        {
          id: "3",
          church_name: "GBIS Solo",
          title: "Natal",
          description: "Ibadah Perayaan Natal",
          image:""
        },
        {
          id: "4",
          church_name: "GBIS Solo",
          title: "Natal",
          description: "Ibadah Perayaan Natal",
          image:""
        },
        {
          id: "5",
          church_name: "GBIS Solo",
          title: "Natal",
          description: "Ibadah Perayaan Natal",
          image:""
        },
        {
          id: "6",
          church_name: "GBIS Solo",
          title: "Natal",
          description: "Ibadah Perayaan Natal",
          image:""
        }
      ]
    };
  }
};
</script>
