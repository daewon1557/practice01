<template>
  <div>
    <button @click="count">{{sampleData}}</button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      sampleData: 0
    }
  },
  setup () {},
  created () {},
  mounted () {},
  methods: {
    count () {
      this.sampleData++
    }
  }
}
</script>
