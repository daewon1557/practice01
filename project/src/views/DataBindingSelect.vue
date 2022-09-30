<template>
  <div>
    <select v-model="sampleData" @change="changed($event.target.value)">
      <option value="'01'">서울</option>
      <option value="'02'">부산</option>
      <option value="'03'">제주</option>
    </select>
    {{sampleData}}
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      sampleData: '01'
    }
  },
  setup () {},
  created () {},
  mounted () {},
  methods: {
    changed (value) {
      this.sampleData = value
    }
  }
}
</script>
