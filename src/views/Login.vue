<template>
  <div>
      <input type="email" placeholder="E-pošta" v-model="email" />
      <br>
      <input type="password" placeholder="Lozinka" v-model="password" />
      <br>
      <button>Prijavi se</button>
      <p>Nemaš korisnički račun? <router-link to="/sign-up">Registriraj se ovdje</router-link></p>
  </div>
</template>

<script>
import firebase
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {

        }
    }
}
</script>

<style scoped>

</style>