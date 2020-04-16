<template>
  <q-layout view="lHh lpR fFf" class="img-background">
    <q-page-container class="container-fluid">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.img-background {
  background: #fff url(../assets/images/bg-stars.jpg);
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 1px black;
}
</style>
