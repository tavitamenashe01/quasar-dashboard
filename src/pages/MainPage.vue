<template>
  <div class="q-mt-md main-page">
    <Header />

    <div class="info-boxes row justify-between">
      <q-card class="info-box" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="info-box__icon col-6">
            <div class="row justify-center">
              <q-icon
                name="person"
                size="30px"
                class="info-box__icon--item"
                color="white"
              ></q-icon>
            </div>
          </q-card-section>
          <q-card-section class="info-box__content">
            <p class="info-box__content-title">{{ title }}</p>
            <b class="info-box__content-desc">{{ desc }}</b>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="info-box" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="info-box__icon col-6">
            <div class="row justify-center">
              <q-icon
                name="person"
                size="30px"
                class="info-box__icon--item"
                color="white"
              ></q-icon>
            </div>
          </q-card-section>
          <q-card-section class="info-box__content">
            <p class="info-box__content-title">{{ title }}</p>
            <b class="info-box__content-desc">{{ desc }}</b>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="info-box" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="info-box__icon col-6">
            <div class="row justify-center">
              <q-icon
                name="person"
                size="30px"
                class="info-box__icon--item"
                color="white"
              ></q-icon>
            </div>
          </q-card-section>
          <q-card-section class="info-box__content">
            <p class="info-box__content-title">{{ title }}</p>
            <b class="info-box__content-desc">{{ desc }}</b>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>


    <div class="chart">
      <AreaChart />
    </div>

    <div class=" darken-overlay">
      <q-parallax
        class="parallax"
        src="https://casetext.com/blog/wp-content/uploads/2020/01/Canva-Person-Using-Macbook-Pro.jpg"
      >
        <h1 class="text-white">Dashboard</h1>
      </q-parallax>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

import AreaChart from "../components/ChartsComponent/AreaChart";

export default {
  name: "PageIndex",
  components: { Header, AreaChart },
  data() {
    return {
      info: null,
      datacollection: null,
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      title: "Likes",
      desc: "90%"
    };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
</style>
