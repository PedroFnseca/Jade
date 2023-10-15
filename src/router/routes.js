const routes = [
  {
    path: "/logged",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/IndexPage.vue") },
    ],
  },
  {
    path: "/auth",
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/PublicLayout.vue"),
    children: [{ path: "", component: () => import("pages/WellcomePage.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
