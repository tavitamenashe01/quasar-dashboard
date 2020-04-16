<template>
  <div class="q-mt-md">
    <div class="container fixed-center">
      <q-form @submit.prevent="register" @reset="onReset" class="q-gutter-md">
        <h4 class="form-title">Register</h4>

        <q-input
          v-model="name"
          filled
          label-color="grey-1"
          :input-style="{ color: '#fff' }"
          label="Your name *"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
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
          label-color="grey-1"
          :input-style="{ color: '#fff' }"
          :type="isPwd ? 'password' : 'text'"
          label="Password"
          :rules="[val => val.length >= 6 || 'Please use minimum 6 characters']"
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

        <q-input
          ref="input"
          filled
          label-color="grey-1"
          :input-style="{ color: '#fff' }"
          v-model="password_confirmation"
          :type="isPwd ? 'password' : 'text'"
          label="Confirm password"
          :rules="[val => val.length >= 6 || 'Please use minimum 6 characters']"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div class="row justify-center">
          <q-btn label="Sign up" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      accept: false,
      isPwd: false
    };
  },
  methods: {
    register() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("auth/register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));

      // if (this.accept !== true) {
      //   this.$q.notify({
      //     color: "red-5",
      //     textColor: "white",
      //     icon: "warning",
      //     message: "You need to accept the license and terms"
      //   });
      // } else {
      //   this.$q.notify({
      //     color: "green-4",
      //     textColor: "white",
      //     icon: "cloud_done",
      //     message: "Submitted"
      //   });
      // }
    },

    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    onReset() {
      this.name = null;
      this.email = null;
      this.password = null;
      this.password_confirmation = null;
      this.accept = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/main.scss";

.container {
  width: 45% !important ;
  padding: 50px;
  color: #fff;
  background: #1817309a;
  border-radius: 5px;
}

.form-title {
  text-align: center;
}
</style>
