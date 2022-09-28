<template>
  <div>
    <input type="text" v-model="userId" @input="onChange($event.target.value)"/>
    <button @click="onClick">클릭</button>
    <div>{{userId}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      userId: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  methods: {
    onChange (data) {
      this.userId = data
    },
    onClick () {
      console.log(this.userId)
      this.userId = ''
    }
  }
}
</script>
