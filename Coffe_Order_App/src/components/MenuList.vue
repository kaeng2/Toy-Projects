<template>
  <div id="choice-section" class="col">
    <div class="row mb-3">
      <h1 id="title">MENU</h1>
    </div>
    <div class="row">
      <menu-list-item
        v-for="(menu, index) in menuList"
        :key="index"
        :menu="menu"
      />
    </div>
  </div>
</template>

<script>
import MenuListItem from "@/components/MenuListItem"

export default {
  name: "MenuList",
  components: {
    MenuListItem,
  },
  computed: {
    menuList: function () {
      return this.$store.state.menuList
    },
  },
  methods: {
    // selectMenu: function () {},
  },
}
</script>

<style></style>
