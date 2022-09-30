<template>
  <div>
    <div style="color: red; font-size: 30px">안녕</div>
    <div style="color: green; font-size: 30px">안녕</div>
    <div :style="style">안녕</div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      style: {
        color: 'yellow',
        fontSize: '30px'
      }
    }
  },
  setup () {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
