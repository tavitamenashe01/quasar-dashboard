<template>
  <div class="q-mt-md main-page">
    <Header />
    
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

    <div class="container">
      <!-- <div class="banner-container">
        <q-banner class="bg-orange text-white q-banner" rounded>
          Random Chart
        </q-banner>
      </div> -->

      <div class="q-mt-md banner-container">
        <q-banner class="bg-orange text-white q-banner" rounded>
          Map
        </q-banner>
      </div>
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
      }
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

.main-page {
  background: #204051;
  padding: 0;
  margin: 0;
}

.chart {
  width: 100%;
  height: 50%;
}

.darken-overlay div {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
