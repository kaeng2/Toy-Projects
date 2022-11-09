<template>
  <div id="single-choice" class="row">
    <span style="padding-block: 13px">{{ option.type }}</span>
    <div>
      <button id="cnt-btn" class="btn-circle" @click="decrease">-</button>
      <span class="mx-3">{{ option.count }}</span>
      <button id="cnt-btn" class="btn-circle" @click="increase">+</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "OptionListItem",
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.commit("updateOptionList", {
        type: this.option.type,
        cnt: 1,
      })
    },
    decrease() {
      this.$store.commit("updateOptionList", {
        type: this.option.type,
        cnt: -1,
      })
    },
  },
}
</script>

<style>
.btn-circle {
  border-radius: 50%;
  width: 30px;
}
</style>
