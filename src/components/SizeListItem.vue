<template>
  <div
    id="single-choice"
    :class="['row', { 'is-selected': size.selected }]"
    @click="pickSize"
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
    pickSize() {
      this.$store.commit("updateSizeList", this.size)
    },
  },
}
</script>

<style></style>
