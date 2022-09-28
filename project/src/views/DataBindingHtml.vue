<template>
  <div>{{ htmlString }}</div>
  <div v-html="htmlString"></div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      htmlString: '<p style="color: red;">빨강 문자</p>'
    }
  },
  setup () {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
