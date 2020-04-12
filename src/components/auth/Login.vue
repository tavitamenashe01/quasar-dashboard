<template>
  <div class="q-pa-md">
    <Header />
    <div class="container">
      <div class="q-mt-md banner-container">
        <!-- <q-banner class="bg-primary text-white q-banner" rounded>
          Log in
        </q-banner> -->

        <q-form @submit.prevent="login" class="q-gutter-md">
          <h4 class="form-title">Sign in</h4>

          <q-input
            filled
            v-model="email"
            label="Email *"
            lazy-rules
            :rules="[val => !!val || 'Email is missing', isValidEmail]"
          />

          <q-input
            v-model="password"
            ref="input"
            filled
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            :rules="[
              val => val.length >= 6 || 'Please use minimum 6 characters'
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="row justify-center">
            <q-btn label="sign in" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header";
export default {
  data() {
    return {
      email: "",
      password: "",
      isPwd: false
    };
  },
  components: { Header },
  methods: {
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/main.scss";

.container {
  width: 50% !important ;
  padding: 10px;
}

.form-title {
  text-align: center;
}
</style>
