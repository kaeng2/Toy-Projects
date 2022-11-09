<template>
  <div id="app">
    <div id="banner">
      <h1 id="title">COFFEE ORDER APP</h1>
    </div>
    <div class="container">
      <div id="block" class="row row-cols-auto justify-content-around">
        <menu-list />
        <size-list />
        <option-list />
      </div>
    </div>

    <div class="container">
      <div id="block" class="block is-selected" @click="addOrder">
        장바구니 담기
      </div>
    </div>

    <div class="container">
      <div id="block">
        <order-list />
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList"
import SizeList from "@/components/SizeList"
import OrderList from "@/components/OrderList"
import OptionList from "@/components/OptionList"

export default {
  name: "App",
  components: {
    MenuList,
    SizeList,
    OrderList,
    OptionList,
  },
  methods: {
    addOrder() {
      this.$store.commit("addOrder")
    },
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap");

@font-face {
  font-family: "Santana-Black";
  src: url("assets/fonts/Santana-Black/Santana-Black.ttf.woff") format("woff"),
    url("assets/fonts/Santana-Black/Santana-Black.ttf.svg#Santana-Black")
      format("svg"),
    url("assets/fonts/Santana-Black/Santana-Black.ttf.eot"),
    url("assets/fonts/Santana-Black/Santana-Black.ttf.eot?#iefix")
      format("embedded-opentype");
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0px;
  text-align: center;
  font-family: "IBM Plex Sans KR", "Santana-Black";
  font-weight: 600;
  font-size: large;
}

#banner {
  margin: 70px;
}

ul {
  list-style: none;
}

.is-selected {
  background-color: #398660 !important;
  color: white;
}

#menu-img {
  width: 50px;
  height: 50px;
  border-radius: 20%;
}

#title {
  font-family: "Santana-Black";
}

#block {
  background-color: rgb(233, 233, 233);
  padding: 10px;
  border-radius: 10px;
  margin: 30px;
}

#choice-section {
  margin: 10px;
  padding-block: 20px;
  padding-inline-start: 50px;
  padding-inline-end: 50px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
}

#single-choice {
  padding-block: 10px;
  padding-inline: 15px;
  margin-block: 10px;
  margin-inline: 2px;
  align-items: center;
  justify-content: space-between;
  border: solid 2px gray;
  border-radius: 10px;
  width: 100%;
}

.container {
  /* margin-inline: 100px; */
  max-width: 1500px;
}
</style>
