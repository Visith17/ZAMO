<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
            <div v-if="this.$auth.loggedIn">{{this.$store.getters.loggedInUser.data.data}}</div>
            <div v-else>sorry, required full authentication.</div>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import $axios from 'axios'
import store from '../store/index'
export default {
  asyncData({ $auth }) {
    let user = $auth.user
    $axios
      .post('http://127.0.0.1:5000/user', {
        user: user
      })
      .then(resp => {
        console.log(resp)
        // this.$store.commit('setAuth', true)
        // this.$store.commit('setUser', resp)
        // this.$router.push('/')
      })
  },
}
</script>
