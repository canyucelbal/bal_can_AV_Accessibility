import { fetchData } from "./components/DataMiner.js";
import MiniFile from "./components/MiniFile.js";

(() => {
  let vue_vm = new Vue({
    data: {
      mainMessage: "Accessibility",
      descMessage: "You can mouseover on any mini model to see it's details",
      files: [],
    },

    mounted: function () {
      console.log("Vue is mounted, trying a fetch for the initial data");

      fetchData("./includes/index.php")
        .then((data) => (this.minis = data))
        .catch((err) => console.error(err));
    },

    updated: function () {
      console.log("Vue just updated the DOM");
    },

    methods: {
      showDetail(target) {
        console.log("Click to view file detail", target, target.name);

        this.currentFile = target;
      },
    },

    components: {
      "mini-file": MiniFile,
    },
  }).$mount("#app");
})();
