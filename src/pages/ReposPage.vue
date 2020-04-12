<template>
  <div class="q-mt-md">
    <Header />
    <div class="container">
      <div class="q-mb-md">
        <q-input
          type="text"
          v-model="search"
          filled
          placeholder="Search title.."
          label="Search title"
        />
      </div>
      <div class="row justify-between">
        <div class="card" v-for="post in filteredList" :key="post.id">
          <a v-bind:href="post.link" target="_blank">
            <img v-bind:src="post.img" />
            <small>posted by: {{ post.author }}</small>
            {{ post.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}
import Header from "../components/Header";

export default {
  data() {
    return {
      search: "",
      postList: [
        new Post(
          "Vue.js",
          "https://vuejs.org/",
          "Chris",
          "https://vuejs.org//images/logo.png"
        ),
        new Post(
          "React.js",
          "https://facebook.github.io/react/",
          "Tim",
          "https://daynin.github.io/clojurescript-presentation/img/react-logo.png"
        ),
        new Post(
          "Angular.js",
          "https://angularjs.org/",
          "Sam",
          "https://angularjs.org/img/ng-logo.png"
        ),
        new Post(
          "Ember.js",
          "http://emberjs.com/",
          "Rachel",
          "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200"
        ),
        new Post(
          "Meteor.js",
          "https://www.meteor.com/",
          "Chris",
          "http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png"
        ),
        new Post(
          "Aurelia",
          "http://aurelia.io/",
          "Tim",
          "https://cdn.auth0.com/blog/aurelia-logo.png"
        ),
        new Post(
          "Node.js",
          "https://nodejs.org/en/",
          "A. A. Ron",
          "https://code-maven.com/img/node.png"
        ),
        new Post(
          "Pusher",
          "https://pusher.com/",
          "Alex",
          "https://avatars1.githubusercontent.com/u/739550?v=3&s=400"
        ),
        new Post(
          "Feathers.js",
          "http://feathersjs.com/",
          "Chuck",
          "https://cdn.worldvectorlogo.com/logos/feathersjs.svg"
        )
      ]
    };
  },
  components: {Header},
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style lang="scss">
@import 'src/assets/styles/main.scss';

.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  width: 250px;
  margin: 12px;
  transition: 0.15s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    padding: 12px;
    color: #03a9f4;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 100px;
    }
    small {
      font-size: 10px;
      padding: 4px;
    }
  }
}
</style>
