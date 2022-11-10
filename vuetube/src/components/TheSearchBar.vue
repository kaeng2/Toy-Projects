<template>
  <div class="TheSearchBar">
    <input type="text" v-model="text" @keyup.enter="onInputKeyword">
    <button id="btn" class="bg-light" @click="onInputKeyword">검색</button>
  </div>
</template>

<script>
export default {
  name: 'TheSearchBar',
  props: {
    
  },
  data () {
    return {
      text: null
    }
  },
  methods: {
    onInputKeyword (event) {
      this.$emit('input-change', event.target.value)
    }
  }
  
}
</script>

<style>
.TheSearchBar {
  margin: 50px;
  margin-block: 50px;
}
#btn {
  margin-inline: 10px;
}
</style>
