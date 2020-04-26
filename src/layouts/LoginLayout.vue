<template>
  <q-layout view="hHh lpR fFf" class="img-background">
    <q-page-container class="container-fluid">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
/* ::-webkit-scrollbar {
  display: none;
} */
.img-background {
  background: #fff url(../assets/images/bg-quasar.jpg);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 1px black;
}
</style>
