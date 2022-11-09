<template>
  <div id="choice-section" class="col">
    <div class="row mb-3">
      <h1 id="title">SIZE</h1>
    </div>
    <div class="row">
      <size-list-item
        v-for="(size, index) in sizeList"
        :key="index"
        :size="size"
      />
    </div>
  </div>
</template>

<script>
import SizeListItem from "@/components/SizeListItem"

export default {
  name: "SizeList",
  components: {
    SizeListItem,
  },
  methods: {
    // onSelectMenu: function () {},
  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style></style>
