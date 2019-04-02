<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Song</h4>
          </md-card-header>
          <md-card-content>
            <song-table table-header-color="green"></song-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SongTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SongTable
  }
};
</script>
