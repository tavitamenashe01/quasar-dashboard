<template>
  <div class=" TheLogin">
  
    <div class="container">
      <q-card class="my-card">
        <q-card-section>
          <h4>Login</h4>
          <div>
            <q-input type="text" name="username" placeholder="Username" />
            <q-input type="password" name="password" placeholder="Password" />
            <q-btn class="q-mt-lg q-mb-lg" @click="logIn">Log in</q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheLogin",
  methods: {
    logIn() {
      this.$emit("TheLogin::loginResult", { loginResult: true });
    }
  }
};
</script>

<style scoped>
.container {
  width: 350px;
  margin: 10% auto;
  text-align: center;
}


</style>
