<template>
  <div>
    <md-table v-model="announcements" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Announcement">{{ item.announce }}</md-table-cell>
        <md-table-cell md-label="Image">{{ item.img }}</md-table-cell>
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
        name: "announcements-table",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
    data() {
        return {
            selected: [],
            announcements: 
                [{
                    id: "1",
                    title: "Ulang Tahun",
                    announce: "Ulang Tahun Saudara Kartika",
                    image: "",
                    church_name: "GBIS Solo"
                },
                {
                    id: "2",
                    title: "Ulang Tahun",
                    announce: "Ulang Tahun Saudara Kartika",
                    image: "",
                    church_name: "GBIS Solo"
                },
                {
                    id: "3",
                    title: "Ulang Tahun",
                    announce: "Ulang Tahun Saudara Kartika",
                    image: "",
                    church_name: "GBIS Solo"
                }]
            }
        }
    }
</script>
