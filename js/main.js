import { fetchData } from "./components/DataMiner.js";
import FileList from "./components/FileList.js";
import FileDetail from "./components/FileDetail.js";

(() => {
  const routes = [
    { path: "/", component: FileList },
    { path: "/detail/:id", component: FileDetail },
  ];

  const router = new VueRouter({
    routes, // short for `routes: routes`
  });

  let vue_vm = new Vue({
    router: router,
    data: {
      mainMessage: "Accessibility",
    },
  }).$mount("#app");
})();
