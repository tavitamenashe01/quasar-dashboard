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
        path: "/todo",
        component: () => import("pages/TodoPage.vue")
      },
      {
        path: "/map",
        component: () => import("pages/MapPage.vue")
      },
      {
        path: "/newtodo",
        component: () => import("pages/NewToDoPage.vue")
      },
      {
        path: "/profile",
        component: () => import("../components/auth/ProfilePage.vue")
      },

      {
        path: "/repos",
        name: "Repo",
        component: () => import("pages/ReposPage.vue")
      },
      {
        path: "/resources",
        name: "resources",
        component: () => import("../components/Resources/Resources.vue"),
        meta: {
          requiresAuth: true
        }
      }
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
