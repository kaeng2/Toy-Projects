<template>
  <div id="orderItem" class="row border-bottom border-secondary">
    <div class="col-1">
      <img :src="order.menu[0].image" id="menu-img" class="my-2" />
    </div>
    <div class="col-7 align-self-center">
      <p class="text-left m-0 mb-1" style="font-size: medium">
        {{ order.menu[0].title }}
      </p>
      <p class="text-left m-0" style="font-size: medium">
        사이즈 : {{ order.size[0].name }}
      </p>
    </div>
    <div class="col-4">
      <p class="text-right">가격 : {{ totalPrice.toLocaleString() }}원</p>
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
    totalPrice: function () {
      return this.order.menu[0].price + this.order.size[0].price
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
}
</style>
