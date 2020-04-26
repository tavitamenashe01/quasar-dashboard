<template>
  <div class="container">
    <h5>
      <!-- <strong>{{ currentUser }}</strong>  -->
      Profile
    </h5>

    <!-- <p>{{currentUserEmail}}</p> -->

    <div class="profile-item">
      <b>CurrentUserToken:</b>
      <p class="profile-item__desc">{{ currentUserToken }}</p>
    </div>
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

  mounted() {
    // if (!this.currentUser) {
    //   this.$router.push("/login");
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/main.scss";

.profile-item__desc {
  word-wrap: break-word;
  width: 100%;
}
</style>
