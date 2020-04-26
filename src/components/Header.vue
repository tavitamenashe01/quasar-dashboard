<template>
  <q-item class="header">
    <q-item-section>
      <div class="row justify-between">
        <q-item text-subtitle6 class="header-title flex flex-center">Dashboard</q-item>
        <div class="row">
          <q-item to="/">
            <q-item-section>
              <q-icon name="dashboard" color="grey-7" size="24px" />
              <q-tooltip>Dashboard</q-tooltip>
            </q-item-section>
          </q-item>
          <q-item to="/register">
            <q-item-section>
              <q-icon name="account_circle" color="grey-7" size="24px" />
              <q-tooltip>Register</q-tooltip>
            </q-item-section>
          </q-item>

          <a @click="logout">
            <q-item>
              <q-item-section>
                <q-icon name="directions_run" color="grey-7" size="24px" />
                <q-tooltip>Logout</q-tooltip>
              </q-item-section>
            </q-item>
          </a>

          <q-item to="/login">
            <q-item-section>
              <q-icon name="lock" color="grey-7" size="24px" />
              <q-tooltip>Login</q-tooltip>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/main.scss";

.link-label {
  font-size: 16px;
}

.header {
  margin: 0 !important;
}

.header-title {
  color: $text-grey;
}

@media screen and (max-width: 768px) {
  .header {
    padding: 0;
    margin: 0;
  }
}
</style>
