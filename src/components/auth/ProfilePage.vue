<template>
  <div >
    <h3>
      <strong>{{ currentUser }}</strong> Profile
    </h3>

    <p>{{currentUserEmail}</p>

    <p>
      <strong>CurrentUserToken</strong>
      {{ currentUserToken }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUserToken() {
      return this.$store.state.auth.token;
    }
  },

  methods: {
    currentUserEmail() {
      let email = this.email;
    }
  },

  mounted() {
    // if (!this.currentUser) {
    //   this.$router.push("/login");
    // }
  }
};
</script>
