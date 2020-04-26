<template>
  <div class="q-mt-md">
    <div class="container fixed-center">
        <q-form @submit.prevent="login" class="q-gutter-md">
          <h4 class="form-title">Sign in</h4>

          <q-input
            filled
            label-color="grey-1"
            :input-style="{ color: '#fff' }"
            v-model="email"
            label="Email *"
            lazy-rules
            :rules="[val => !!val || 'Email is missing', isValidEmail]"
          />

          <q-input
            v-model="password"
            ref="input"
            filled
            :input-style="{ color: '#fff' }"
            label-color="grey-1"
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
                color="grey-1"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="auth-btn row justify-center">
            <div class="col">
              <q-btn label="sign in" type="submit" color="primary" />
            </div>
            <div class="row justify-center">
              <div class="col">
                <q-btn
                  color="primary"
                  push
                  icon="account_circle"
                  label="Login with Facebook"
                  size="md"
                  @click="auth('facebook')"
                />
              </div>
            </div>
          </div>
          <div class="q-pt-md col row justify-center">
            <a class="registerNow-link" href="/register">You dont have accont? Register now.</a>
          </div>
        </q-form>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      isPwd: true
    };
  },
  methods: {
    auth(network) {
      this.$hello(network)
        .login({ scope: "friends" })
        .then(() => {
          this.$router.push("profile");
        });
    },
    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("auth/login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
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
  width: 45% !important ;
  padding: 50px;
  border-radius: 5px;
  color: #fff;
  background: #1817309a;
}

.form-title {
  text-align: center;
}

.registerNow-link {
  color: #fff;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100% !important;
  }
  .auth-btn button {
    width: 100%;
    margin: 5px 0;
  }
  .auth-btn {
    display: flex;
    flex-direction: column;
  }
}
</style>
