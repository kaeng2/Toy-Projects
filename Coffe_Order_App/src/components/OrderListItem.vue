<template>
  <div id="orderItem" class="row border-secondary align-self-center mx-3" 
        style="border-bottom: 2px dashed;">
    <div class="col-1">
      <img :src="order.menu.image" id="menu-img" class="my-2" />
    </div>
    <div class="col-7 align-self-center">
      <p class="text-left m-0 mb-1" style="font-size: medium">
        {{ order.menu.title }}
      </p>
      <p class="text-left m-0" style="font-size: medium">
        사이즈 : {{ order.size.name }}
      </p>
    </div>
    <div class="col-4 align-self-center">
      <p class="text-right m-0 mb-1" style="font-size: medium">가격 : {{ totalPrice.toLocaleString() }}원</p>
      <p class="text-right m-0">
        <span v-for="(option, index) in order.options" :key="index" class="m-0" style="font-size: medium">{{ option.type }} {{ option.count }}회 | </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderListItem",
  props: {
    order: Object,
  },
  computed: {
    totalPrice () {
      const optionPrice = this.order.options.reduce((total, option) => {
        return total + option.price * option.count
      }, 0)
      return this.order.menu.price + this.order.size.price + optionPrice
    },
  },
}
</script>

<style>
#orderItem {
  justify-content: center;
  align-self: center;
  width: 100%;
  margin-block: 5px;
  padding-block-end: 10px;
  font-size: medium;
}
</style>
