<template>
  <div id="block" class="pt-0 my-3">
    <div class="row">
      <h2 id="title">CART</h2>
    </div>
    <div class="row my-4">
      <h5>
        총 {{ totalOrderCount }}건 : {{ totalOrderPrice.toLocaleString() }}원
      </h5>
    </div>
    <div class="row">
      <order-list-item
        v-for="(order, index) in orderList"
        :key="index"
        :order="order"
      />
    </div>
  </div>
</template>

<script>
import OrderListItem from "@/components/OrderListItem"
export default {
  name: "OrderList",
  components: { OrderListItem },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice: function () {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style></style>
