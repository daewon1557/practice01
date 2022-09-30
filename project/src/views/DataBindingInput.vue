<template>
  <div>
    <input type="text" v-model="userId" @input="onChange('userId', $event.target.value)"/>
    <button @click="onClick">클릭</button>
    <div>{{userId}}</div>
    <input type="text" v-model.number="num1" @input="onChange('num1', parseInt($event.target.value))"/> +
    <input type="text" v-model.number="num2" @input="onChange('num2', parseInt($event.target.value))"/> =
    <span>{{sum}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      userId: '',
      num1: 0,
      num2: 0,
      sum: 0
    }
  },
  setup () {},
  created () {},
  mounted () {},
  methods: {
    onChange (key, value) {
      switch (key) {
        case 'userId':
          this.userId = value
          break
        case 'num1':
          this.num1 = value
          this.sum = this.num1 + this.num2
          break
        case 'num2':
          this.num2 = value
          this.sum = this.num1 + this.num2
          break
      }
    },
    onClick () {
      console.log(this.userId)
      this.userId = 'hello'
    }
  }
}
</script>
