<template>
  <div
    id="single-choice"
    :class="['row', { 'is-selected': size.selected }]"
    @click="updateSizeChoice"
  >
    <span style="padding-block: 13px">{{ size.name }}</span>
    <span>{{ size.price.toLocaleString() }}원</span>
  </div>
</template>

<script>
export default {
  name: "SizeListItem",
  props: {
    size: Object,
  },
  methods: {
    updateSizeChoice() {
      this.$store.commit("UPDATE_SIZE_CHOICE", this.size)
    },
  },
}
</script>

<style></style>
