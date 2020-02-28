    <template>
    <v-card :elevation="15" class="mx-auto" max-width="400" style="opacity:0.8">
      <!-- <Notification :message="error" v-if="error"/> -->
      <v-container>
    <v-form method="post" @submit.prevent="register"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Username"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        autocomplete="current-password"
        :value="userPassword"
        label="Enter password"
        hint="Your password passed! Password rules are not meant to be broken!"
        :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        :rules="[rules.password]"
        @input="_=>userPassword=_"
      ></v-text-field>
      <v-text-field
        label="Confirm password"
        :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        :rules="[passwordConfirmationRule]"
        @input="_=>re_userPassword=_"
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Agree terms & conditions"
        required
      ></v-checkbox>

      <v-btn
        type="submit"
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Register
      </v-btn>

      <!-- <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn> -->

      <!--  -->
      <v-label>
         Already have account? <a href="/auth/login"> Login</a>
      </v-label>
    </v-form>
      </v-container>
    </v-card>
    </template>

    <script>
    export default {
    //   middleware: 'guest',
      data: () => ({
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        userPassword: "",
        valid: true,
        value: true,
        rules: {
          required: value => !!value || "Required.",
          password: value => {
            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            return (
              pattern.test(value) ||
              "Min. 8 characters with at least one capital letter, a number and a special character."
            );
          }
        },
        checkbox: false,
      }),
      
      methods: {
        validate () {
          if (this.$refs.form.validate()) {
            this.snackbar = true
          }
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
        passwordConfirmationRule() {
          return (this.userPassword === this.re_userPassword) || 'Password must match'
        },
        async register() {
          try {
            await this.$axios.post('register', {
              username: this.username,
              email: this.email,
              password: this.password
            })

            await this.$auth.loginWith('local', {
              data: {
                email: this.email,
                password: this.password
              },
            })
            // this.$store.commit('setAuth', true)
            this.$router.push('/')
          } catch (e) {
            this.error = e.response.data.message
          }
        },
      },
    }
    </script>