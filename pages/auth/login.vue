<template>
  <login />
</template>

<script>
import Login from '~/components/auth/Login.vue'
export default {
  layout: 'auth_layout',
  middleware: 'notAuthenticated',
  components: {
    Login
  }
}
</script> 