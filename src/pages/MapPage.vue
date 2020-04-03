<template>
  <div>
    <Header />
    <div class="container">
      <Map />
    </div>
  </div>
</template>

<script>
import Map from "../components/Map";
import Header from "../components/Header";

export default {
  components: {
    Map,
    Header
  }
};
</script>

<style lang="scss">

@import 'src/assets/styles/main.scss';

</style>
