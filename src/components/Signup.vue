<template>
  <div class="signup">
    <v-form v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="10"
        required
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        :counter="10"
        required
      ></v-text-field>
      <v-text-field
        label="Confirm Password"
        v-model="confirmPassword"
        :rules="[comparePasswords]"
        :counter="10"

        required

      ></v-text-field>
      <v-btn
        @click="submit"
        :disabled="!valid"
      >
        submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        Password: '',
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Password must be valid '
        ],
        confirmPassword: '',
        CPasswordRules: [
          (v) => !!v || 'Password is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Password must be valid '
        ]


      }
    },
    computed: {
      comparePasswords() {
      return this.password == this.confirmPassword ? 'Mot de passe incorect' : ''
      }

    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email
          })
        }
      }
    }
  }
</script>

<style>
  .signup {
    margin: auto;
  }
</style>
