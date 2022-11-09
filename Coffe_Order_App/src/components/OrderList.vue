<template>
  <div class="container">
    <div id="block">
      <div class="container align-items-between">
        <div class="row px-5 pt-5 pb-4 my-1">
          <h2 id="title">CART</h2>
        </div>
        <div class="row p-4 my-1">
          <order-list-item
          v-for="(order, index) in orderList"
          :key="index"
          :order="order"
          />
        </div>
        <div class="row px-5 py-3 my-3 justify-content-end">
          <h5>
            총 {{ totalOrderCount }}건 : {{ totalOrderPrice.toLocaleString() }}원
          </h5>
        </div>
      </div>
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
