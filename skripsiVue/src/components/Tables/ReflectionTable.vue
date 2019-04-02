<template>
  <div>
    <md-table v-model="reflections" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Verse">{{ item.verse }}</md-table-cell>
        <md-table-cell md-label="In Verse">{{ item.in_verse }}</md-table-cell>
        <md-table-cell md-label="Reflection">{{ item.reflection }}</md-table-cell>
        <md-table-cell md-label="Image">{{ item.image }}</md-table-cell>
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
        name: "reflection-table",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
    data() {
        return {
            selected: [],
            reflections: 
                [{
                    id: "1",
                    title: "Kekuatan",
                    verse: "Yohanes 1",
                    in_verse: "21",
                    reflection: "Kekuatan kita adalah jika kita berserah di hadapan Tuhan",
                    image:"",
                    church_name:"GBIS SOLO"
                },
                {
                    id: "2",
                    title: "Kekuatan",
                    verse: "Yohanes 1",
                    in_verse: "21",
                    reflection: "Kekuatan kita adalah jika kita berserah di hadapan Tuhan",
                    image:"",
                    church_name:"GBIS SOLO"
                },
                {
                    id: "3",
                    title: "Kekuatan",
                    verse: "Yohanes 1",
                    in_verse: "21",
                    reflection: "Kekuatan kita adalah jika kita berserah di hadapan Tuhan",
                    image:"",
                    church_name:"GBIS SOLO"
                }]
            }
        }
    }
</script>
