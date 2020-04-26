const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        exact: true,
        name: "Home",
        component: () => import("pages/MainPage.vue")
      },
      {
        path: "/tables",
        component: () => import("pages/TablesPage.vue")
      },
      {
        path: "/userProfile",
        component: () => import("pages/UserProfilePage.vue")
      },
      {
        path: "/calendar",
        component: () => import("pages/CalendarPage.vue")
      },
 
      {
        path: "/map",
        component: () => import("pages/MapPage.vue")
      },
      {
        path: "/profile",
        component: () => import("../components/auth/ProfilePage.vue")
      },

      {
        path: "/cards",
        name: "Cards",
        component: () => import("pages/CardsPage.vue")
      },
      {
        path: "/searchRepos",
        name: "SearchRepo",
        component: () => import("pages/SearchReposPage.vue")
      },
      // {
      //   path: "/resources",
      //   name: "resources",
      //   component: () => import("../components/Resources/Resources.vue"),
      //   meta: {
      //     requiresAuth: true
      //   }
      // }
    ]
  },
  {
    path: "/register",
    component: () => import("layouts/RegisterLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/auth/Register.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/auth/Login.vue")
      }
    ]
  }
];

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next();
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
