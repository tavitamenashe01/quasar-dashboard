<template>
  <div class="q-mt-md main-page">
    <Header />

    <h4 class="info-boxes__title">User dashboard data</h4>
    <div class="container">
      <div class="info-boxes row justify-between">
        <div class="info-container" v-for="(info, key) in infos" :key="key">
          <q-card class="info-box" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="info-box__icon flex flex-center col-6">
                <div class="row justify-center">
                  <q-icon name="person" size="30px" color="white"></q-icon>
                </div>
              </q-card-section>
              <q-card-section class="info-box__content flex flex-center">
                <p class="info-box__content-title">{{ info.userId }}</p>
                <b class="info-box__content-desc">{{ info.title }}</b>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="chart">
      <AreaChart />
    </div>

    <div class=" darken-overlay">
      <q-parallax
        class="parallax"
        src="https://casetext.com/blog/wp-content/uploads/2020/01/Canva-Person-Using-Macbook-Pro.jpg"
      >
        <h1 class="text-white">Your Dashboard</h1>
      </q-parallax>
    </div>

    <div class="container">
      <div class="row justify-between flex-center">
        <PieChart
          class="pie-chart"
          :data="pieChartData"
          :options="pieChartOptions"
        />
        <div class="col-6">
          <q-card class="my-card">
            <q-card-section>
              <h4>Your Pie Chart</h4>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import PieChart from "../components/ChartsComponent/PieChart";
import AreaChart from "../components/ChartsComponent/AreaChart";
import axios from "axios";

export default {
  name: "PageIndex",
  components: { Header, AreaChart, PieChart },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      user: "",
      datacollection: null,
      gradient: null,
      gradient2: null,
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      infos: null,

      desc: "90%",
      pieChartOptions: {
        hoverBorderWidth: 20
      },
      pieChartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Repos", "Likes", "Hello", "Actives"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: [
              "rgba(0, 231, 255, 0.9)",
              "rgba(0, 231, 255, 0.25)",
              "rgb(61,58,67)",
              "rgb(130,40,35)"
            ],
            data: [1, 10, 5, 2]
          }
        ]
      }
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then(res => {
        this.infos = res.data;
      });
  }
};
</script>

<style lang="scss" scope>
@import "../assets/styles/main.scss";
</style>
