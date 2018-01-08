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
        :rules="passwordRules"
        required

      ></v-text-field>
      <v-text-field
        label="Confirm Password"
        v-model="confirmPassword"
        :counter="10"
        :rules="CPasswordRules"

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
        email: '',
        Password: '',
        confirmPassword:''
      }
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword


          })
        }
      }
    },
    computed: {
      comparePasswords() {
        return this.Password !== this.confirmPassword ? "Mot de passe incorect" : ""
       }
    },

  }
</script>

<style>
  .signup {
    margin: auto;
  }
</style>
