<template>
  <div class="container">
    <nav v-if="show" class="nav-wrapper">
      <div class="row justify-center">
        <q-banner class="bg-primary text-white" rounded>
          <h5 class="nav-wrapper__title">
            Found
            <span>{{ total }}</span>
            {{ total == 1 ? "repository" : "repositories" }}
          </h5>
        </q-banner>
      </div>
    </nav>

    <div class="header row justify-center">
      <q-form @submit="searchRepo">
        <div class="row justify-between flex flex-center">
          <div class="col-12">
            <q-input
              placeholder="Search repos"
              id="keyword"
              v-model="keyword"
              filled
              type="search"
              class="validate"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-btn
              label="Submit"
              @click="showLoading"
              color="primary"
              class="q-ml-md"
              type="submit"
              name="action"
            >
              <q-icon name="send" size="15px"></q-icon>
            </q-btn>
          </div>
        </div>
      </q-form>
    </div>

    <div class="progress" v-if="load">
      <div class="indeterminate"></div>
    </div>

    <ul v-if="show" class="collection">
      <li v-for="(repo, index) in repos" :key="index" class="collection-item avatar">
        <div class="left-cont">
          <q-list bordered>
            <q-item clickable>
              <q-item-section top avatar>
                <q-avatar>
                  <img
                    :src="'' + repo.owner.avatar_url + ''"
                    alt="user profile photo"
                    class="circle"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <a :href="'' + repo.url + ''">
                    <span class="title">{{ repo.owner.login }}</span>
                  </a>
                </q-item-label>
                <q-item-label caption>
                  <p>{{ repo.description }}</p>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-item-section>
          <ul>
            <li v-if="repo.language">
              <p v-bind:class="'' + repo.language + ''">
                <q-icon name="lens" />
                <span>{{ repo.language }}</span>
              </p>
            </li>
            <li>
              <p>
                <q-icon name="star" color="yellow" />
                <a
                  v-bind:href="
                    'https://github.com/' + repo.full_name + '/stargazers'
                  "
                  target="_blank"
                >{{ repo.stargazers_count }}</a>
              </p>
            </li>
            <li v-if="repo.watchers" class="watch">
              <p>
                <q-icon name="visibility" />
                <span>{{ repo.watchers }}</span>
              </p>
            </li>
            <li class="date">
              <q-item-section side top>
                <q-badge>Last updated {{ repo.updated_at }}</q-badge>
              </q-item-section>
            </li>
          </ul>
        </q-item-section>
      </li>
    </ul>

    <ul v-if="pagination" class="pagination">
      <li v-if="page == 1 " class="disabled">
        <button v-on:click="prevPage()" disabled>
          <i class="material-icons">chevron_left</i>
        </button>
      </li>
      <li v-if="page != 1 " class="waves-effect">
        <button v-on:click="prevPage()">
          <i class="material-icons">chevron_left</i>
        </button>
      </li>

      <!-- Pagination loop -->
      <li
        v-for="n in maxPage"
        :key="n"
        v-bind:class="{'waves-effect': (page != n),'active': (page === n)}"
      >
        <button v-on:click="repoPage(n)">{{n}}</button>
      </li>

      <li v-if="page != total " class="waves-effect">
        <button v-on:click="nextPage()">
          <i class="material-icons">chevron_right</i>
        </button>
      </li>
      <li v-if="page == total " class="disabled">
        <button v-on:click="nextPage()" disabled>
          <i class="material-icons">chevron_right</i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { Loading, QSpinnerGears } from "quasar";

Loading.show();
// Loading.show({
//   spinner: QSpinnerGears
// });
Loading.hide();

export default {
  data() {
    return {
      status: "",
      keyword: "",
      total: "",
      repos: [],
      show: false,
      pagination: false,
      error: false,
      load: false,
      page: 1,
      n: 0,
      maxPage: 10
    };
  },
  methods: {
    searchRepo(event) {
      if (event) {
        event.preventDefault();
        this.page = 1;
      }
      var vm = this;
      var searchWord = this.keyword;
      var page = this.page;
      console.log("Current Page: " + page);
      var query =
        "https://api.github.com/search/repositories?sort=stars&per_page=10&page=" +
        page +
        "&q=";
      vm.load = true;

      axios
        .get(query + searchWord)
        .then(function(response) {
          var total = response.data.total_count;
          var pages = Math.round(response.data.total_count / 10);
          vm.total = total;
          vm.repos = response.data.items;
          // console.log(pages)
          // console.log(vm.repos)

          if (total == 0) {
            vm.error = true;
            vm.show = false;
            vm.pagination = false;
            vm.load = false;
            vm.keyword = "";
            var toastHTML =
              '<span>Repository not found</span><button class="btn-flat toast-action"><i class="fas fa-exclamation-circle"></i></button>';
            M.toast({ html: toastHTML });
          } else {
            vm.error = false;
            vm.show = true;
            vm.load = false;
            vm.pagination = true;
          }

          if (total <= 10) {
            vm.pagination = false;
          }
        })
        .catch(function(error) {
          vm.status = "An error occured." + error;
        });
    },
    repoPage(arg) {
      this.page = arg;
      this.searchRepo();
      this.backToTop();
    },
    nextPage() {
      this.page = this.page + 1;
      this.searchRepo();
      this.backToTop();
      this.incrementPagination();
    },
    prevPage() {
      vm.page = this.page - 1;
      this.searchRepo();
      this.backToTop();
      if (this.page >= 10) {
        this.decreasePagination();
      }
    },
    showLoading() {
      this.$q.loading.show();

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
      }, 1000);
    }
  },
  backToTop() {
    setTimeout(function() {
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: 0
          },
          1500,
          "swing"
        );
    }, 500);
  },
  incrementPagination: function() {
    if (this.page > this.maxPage) {
      vm.n = this.n + 11;
      this.maxPage = this.maxPage + 10;
      // vm.n = 10
    } else {
      vm.n = 0;
    }
    console.log("n: " + this.n);
    console.log("Max page: " + this.maxPage);
  },
  decreasePagination: function() {
    if (this.page < this.maxPage) {
      vm.n = this.n - 11;
      this.maxPage = this.maxPage - 10;
      // vm.n = 10
    } else {
      vm.n = 0;
    }
    console.log("n: " + this.n);
    console.log("Max page: " + this.maxPage);
  }
};
</script>


<style lang="scss">
@import "src/assets/styles/main.scss";
</style>