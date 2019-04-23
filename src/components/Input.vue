<template>
<div class="input flex">
  <div class="icon">
    <img class="img" :src="src" alt="图标">
  </div>
  <input
    v-model="value"
    @input="$emit('input', value)"
    :type="type"
    :placeholder="placeholder"
    class="text flex-a"/>
</div>
</template>

<script>
"use strict";
export default {
  name: "Input",
  props: {
    src: {type: String, default: ''},
    type: {type: String, default: 'text'},
    placeholder: {type: String, default: ''},
  },
  data () {
    return {
      value: ''
    }
  }
};
</script>

<style scoped lang="stylus">
.icon
  width 2.5rem
  height 3rem
  .img
    width 100%
    height 100%
.text
  box-sizing border-box
  margin-left 1rem
  height 3rem
  line-height 3rem
  font-size 1.6rem
  border-bottom 1px solid #bdbdbd
  &::-webkit-input-placeholder
    color #bdbdbd
    font-size 1.6rem
</style>
