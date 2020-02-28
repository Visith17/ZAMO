<template>
  <v-app dark>
    <tool-bar />
    <app-bar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- <navigation-drawer /> -->
    <bottom-nevigation />
    <div class="d-none d-lg-block">
      <v-footer :fixed="fixed" app>
        <span>&copy; 2k20</span>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import BottomNevigation from '~/components/mobile/BottomNevigation.vue'
import ToolBar from '~/components/mobile/ToolBar.vue'
import AppBar from '~/components/pc/AppBar.vue'
export default {
  data() {
    return {
      fixed: false
    }
  },
  components: {
    BottomNevigation,
    ToolBar,
    AppBar
  }
}
</script>
