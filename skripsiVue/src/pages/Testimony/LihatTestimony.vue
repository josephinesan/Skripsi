<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Testimony</h4>
          </md-card-header>
          <md-card-content>
            <testimony-table table-header-color="green"></testimony-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { TestimonyTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    TestimonyTable
  }
};
</script>
