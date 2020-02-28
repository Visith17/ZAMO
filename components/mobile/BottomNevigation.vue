<template>
  <div class="d-lg-none">
    <v-bottom-navigation :fixed="fixed" app v-model="bottomNav">
      <v-btn value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <v-btn value="artist">
        <span>Artists</span>
        <v-icon>mdi-artstation</v-icon>
      </v-btn>
      <v-btn value="home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomNav: 'recent',
      fixed: false,
    }
  },
}
</script>