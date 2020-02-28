    <template>
  <v-card :elevation="15" class="mx-auto" max-width="400" style="opacity:0.8">
    <!-- <Notification :message="error" v-if="error"/> -->
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- <div v-if="$auth.error"> -->
        <v-alert type="info">Unauthorized user</v-alert>
        <!-- </div> -->

        <v-text-field v-model="username" :counter="10" :rules="nameRules" label="Username" required></v-text-field>

        <v-text-field
          autocomplete="current-password"
          :value="password"
          label="Enter password"
          hint="Your password passed! Password rules are not meant to be broken!"
          :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="() => (value = !value)"
          :type="value ? 'password' : 'text'"
          :rules="passwordRole"
          @input="_=>password=_"
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="remember me?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">Login</v-btn>

        <!-- <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset Form
        </v-btn>-->

        <!--  -->
        <v-label>
          I don't have account
          <a href="/auth/register">Sign up</a>
        </v-label>
      </v-form>
    </v-container>
  </v-card>
</template>

    <script>
import axios from 'axios'
import Vuex from 'vuex'

export default {
  middleware: 'notAuthenticated',
  //   layout: 'auth_layout',
  data: () => ({
    valid: true,
    username: 'test1',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],

    password: 'test1',
    valid: true,
    value: true,
    passwordRole: [value => !!value || 'Required.'],

    checkbox: true
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },

    async login() {
      console.log('hello world!')
      if (this.$refs.form.validate()) {
        this.snackbar = true
        await this.$axios
          .post('http://10.10.14.52:5000/', {
            username: this.username,
            password: this.password
          })
          .then(resp => {
            this.$store.commit('setAuth', true)
            this.$store.commit('setUser', resp)
            this.$router.push('/')
          })
      }
    }
  }
}
</script>