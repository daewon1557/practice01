<template>
  <div>
    <input type="text" :value="userId" readonly/>
    <input type="search" v-model="txt1"/>
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      userId: 'hello',
      txt1: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
