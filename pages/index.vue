<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <!-- <logo />
        <vuetify-logo />-->
      </div>
      <weather-card />
      <social-medai-card />
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import WeatherCard from '~/components/cards/WeatherCard.vue'
import SocialMedaiCard from '~/components/cards/SocialMedaiCard.vue'
export default {
  components: {
    Logo,
    VuetifyLogo,
    SocialMedaiCard,
    WeatherCard
  },
  computed: {
    isAuthenticated() {
      return this.$auth.loggedIn
    },
    loggedInUser() {
      return this.$auth.user
    }
  },
  middleware: 'authenticated',
  scrollToTop: true
}
</script>
