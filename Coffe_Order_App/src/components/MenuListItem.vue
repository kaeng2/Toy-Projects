<template>
  <div
    id="single-choice"
    :class="['row', { 'is-selected': menu.selected }]"
    @click="updateMenuChoice"
  >
    <img :src="menu.image" alt="menu-img" id="menu-img" />
    <span>{{ menu.title }}</span>
    <span>{{ menu.price.toLocaleString() }}원</span>
  </div>
</template>

<script>
export default {
  name: "MenuListItem",
  props: {
    menu: Object,
  },
  methods: {
    updateMenuChoice() {
      this.$store.commit("UPDATE_MENU_CHOICE", this.menu)
    },
  },
}
</script>
