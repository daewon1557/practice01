<template>
  <div class="about">
    <h1>hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'DataBindingView',
  data () {
    return {
      userName: 'John Doe',
      message: 'wolcome',
      arr: [],
      obj: {}
    }
  }
}
</script>

<style scoped>
.text-red {
  color: red;
}
</style>
