<template>
  <div class="title">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'vueApp',
  data () {
    return {
      message: 'hello Vue'
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      // /api/users -> http://localhost:3000/api/users
      axios.get('/api/users')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang='css' scoped>
.title {
  color: blue;
}
</style>
