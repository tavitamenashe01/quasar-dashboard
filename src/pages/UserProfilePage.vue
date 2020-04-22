<template>
  <div class="q-pa-md">
    <Header />
    <Profile />
    <div class="container">
      <div class="q-mt-md banner-container">
        <q-banner class="bg-primary text-white q-banner" rounded>
          Edit profile
        </q-banner>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="row justify-between">
            <div class="col q-pr-md">
              <q-input
                v-model="name"
                label="Your name *"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
            </div>
            <div class="col q-pr-md">
              <q-input
                type="number"
                v-model="age"
                label="Your age *"
                lazy-rules
                :rules="[
                  val => (val !== null && val !== '') || 'Please type your age',
                  val => (val > 0 && val < 100) || 'Please type a real age'
                ]"
              />
            </div>
          </div>

          <div class="row justify-between">
            <div class="col q-pr-md">
              <q-input
                type="text"
                v-model="firstName"
                label="First name"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
            </div>
            <div class="col">
              <q-input
                type="text"
                label="Last name"
                v-model="lastName"
                lazy-rules
                :rules="[
                  val =>
                    (val !== null && val !== '') || 'Please type your last name'
                ]"
              />
            </div>
          </div>

          <div>
            <div class="col">
              <q-input type="text" v-model="address" label="Address" />
            </div>
          </div>

          <div class="row justify-between">
            <div class="col q-pr-md">
              <q-input label="City" v-model="city" />
            </div>
            <div class="col q-pr-md">
              <q-input type="text" label="Country" v-model="country" />
            </div>
            <div class="col">
              <q-input
                label="Postal code"
                v-model.number="postCode"
                type="number"
              />
            </div>
          </div>

          <div>
            <div class="col">
              <q-input type="textarea" v-model="textarea" label="About me" />
            </div>
          </div>

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
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
      <div class="user shadow-2">
        <q-avatar size="100px" font-size="52px" class="user-avatar" />
        <h6><b>John Brown</b></h6>
        <p>Front-End developer</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        aliquid officiis dolores expedita tempore tempora maiores deleniti
        dolorem voluptas maxime.
      </div>
    </div>

    <!-- CurrentUserToken eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNTg3MjY3Nzg2LCJleHAiOjE1ODczNTQxODZ9.5rhhQWemjZ1uEyCGHwtWAf1S4lBJU6uYxYYPPTdoDNg -->
  </div>
</template>

<script>
import Header from "../components/Header";
import Profile from "../components/auth/ProfilePage";
export default {
  data() {
    return {
      name: null,
      age: null,
      address: null,
      emailAddress: null,
      firstName: null,
      lastName: null,
      country: null,
      city: null,
      textarea: null,
      postCode: null,

      accept: false
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  },

  components: {
    Header,
    Profile
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
.container {
  width: 50%;
}

.user {
  width: 400px;
  padding: 30px;
  margin: 0 30px;
  margin-top: 50px;
  height: 350px;
  position: relative;
  text-align: center;
  border-radius: 5px;
}
.user-avatar {
  position: absolute;
  top: -50px;
  right: 150px;
  background-image: url("../assets/images/user.jpg");
  /* width: 100%; */
  background-size: cover;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    margin: 0;
  }
  .user {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
