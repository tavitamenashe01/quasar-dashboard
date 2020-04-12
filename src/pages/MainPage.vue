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
      <!-- <RandomChart :chart-data="datacollection" />
      <q-btn color="primary" @click="fillData()">Randomize</q-btn> -->
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
// import RandomChart from "../components/ChartsComponent/RandomChart";
import AreaChart from "../components/ChartsComponent/AreaChart";

export default {
  name: "PageIndex",
  components: { Header, AreaChart },
  data() {
    return {
      datacollection: null,
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      title: "Likes",
      desc: "90%"
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#4d4646",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data Two",
            backgroundColor: "#5b5656",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data Three",
            backgroundColor: "#7fcd91",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data Four",
            backgroundColor: "#f5eaea",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
</style>
