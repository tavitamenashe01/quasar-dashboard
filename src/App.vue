<template>
  <div id="q-app">
    <div id="nav">
      <span v-if="isLoggedIn"> <a @click="logout">Logout</a></span>
      <span v-else> <router-link to="/login">Login</router-link></span>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
  font-size: 24px;
}
</style>
