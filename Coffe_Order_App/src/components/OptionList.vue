<template>
  <div id="choice-section" class="col">
    <div class="row mb-3">
      <h1 id="title">OPTION</h1>
    </div>
    <div class="row">
      <option-list-item
        v-for="(option, index) in optionList"
        :key="index"
        :option="option"
      />
    </div>
  </div>
</template>

<script>
import OptionListItem from "@/components/OptionListItem"

export default {
  name: "OptionList",
  components: {
    OptionListItem,
  },
  computed: {
    optionList() {
      return this.$store.state.optionList
    },
  },
  methods: {
    // increase: function () {},
    // decrease: function () {},
  },
}
</script>

<style></style>
