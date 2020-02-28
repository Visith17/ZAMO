<template>
  <div class="d-lg-none">
    <!-- <v-card color="grey lighten-4" flat height="200px" tile> -->
    <v-app-bar dense fixed app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ZAMO KARAOKE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <!-- <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>-->
      <v-menu bottom left :offset-y="offset">
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- </v-card> -->
  </div>
</template>
<script>
export default {
  fixed: false,
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' }
    ],
    offset: true
  }),
  methods: {
    logout() {
      console.log('----------------')
      this.$store.commit('setAuth', null)
      this.$store.commit('setUser', null)
      // this.$auth.$storage.syncUniversal('mykey', null, false)
      this.$router.push('auth/login')
    }
  }
}
</script>