<template>
  <div>
    <div>
      <select>
        <option :key="list.id" v-for="list in cities">{{list.cities}}</option>
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>지역</th>
            <th>input</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(list, index) in cities">
            <td>{{list.id}}</td>
            <td>{{list.cities}}</td>
            <td><input type="number" :style="'text-align: right'" v-model="list.input"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      cities: [
        { id: '001', cities: '서울', input: '' },
        { id: '002', cities: '서울', input: '' },
        { id: '003', cities: '서울', input: '' },
        { id: '004', cities: '서울', input: '' }
      ]
    }
  },
  setup () {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
