<template>
  <q-item>
    <q-item-section>
      <div class="row justify-between">
        <q-item text-subtitle6 class="header-title justify-center"
          >Dashboard</q-item
        >
        <div class="row">
          <q-item to="/">
            <q-item-section>
              <q-icon name="dashboard" color="grey-7" size="24px" />
              <q-tooltip>
                Dashboard
              </q-tooltip>
            </q-item-section>
          </q-item>
          <q-item to="/register">
            <q-item-section>
              <q-icon name="account_circle" color="grey-7" size="24px" />
              <q-tooltip>
                Register
              </q-tooltip>
            </q-item-section>
          </q-item>

          <a @click="logout"
            ><q-item>
              <q-item-section>
                <q-icon name="person" color="grey-7" size="24px" />
                <q-tooltip>
                  Logout
                </q-tooltip>
              </q-item-section>
            </q-item>
          </a>

          <q-item to="/login">
            <q-item-section>
              <q-icon name="lock" color="grey-7" size="24px" />
              <q-tooltip>
                Login
              </q-tooltip>
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

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

.link-label {
  font-size: 16px;
}

.header-title {
  color: #52585f;
}
</style>
