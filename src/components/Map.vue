<template>
  <div class="container">
    <h6>
      Google Map
    </h6>

    <!-- <ul class="list-inline">
      <li class="list-inline-item">
        <a
          href="#"
          class="btn btn-success"
          data-location="Location 1"
          @click="myclick('Location 1')"
          >Location 1</a
        >
      </li>
      <li class="list-inline-item">
        <a
          href="#"
          class="btn btn-success"
          data-location="Location 2"
          @click="myclick('Location 2')"
          >Location 2</a
        >
      </li>
      <li class="list-inline-item">
        <a
          href="#"
          class="btn btn-success"
          data-location="Location 3"
          @click="myclick('Location 3')"
          >Location 3</a
        >
      </li>
    </ul> -->

    <gmap-map v-bind="options" id="map"> </gmap-map>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "Map",
  data() {
    return {
      options: {
        zoom: 10,
        center: {
          lat: 42.8318217,
          lng: 74.6049057
        },
        mapTypeId: "roadmap"
      }
    };
  },
  computed: {
    google: gmapApi
  },
  methods: {
    myclick() {
      console.log(1111111111111111);
    }
  }
};
</script>

<style lang="scss" scoped>
#map {
  height: 500px;
  width: 100%;
  margin: 0 auto;
}
</style>
