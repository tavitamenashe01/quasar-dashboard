const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        exact: true,
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
        path: "/repos",
        name: "Repo",
        component: () => import("pages/ReposPage.vue")
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../components/auth/Login.vue")
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../components/auth/Register.vue")
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
