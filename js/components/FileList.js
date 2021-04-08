import { fetchData } from "./DataMiner.js";
import MiniFile from "./MiniFile.js";

export default {
  name: "TheFileList",
  components: {
    MiniFile,
  },

  data: function () {
    return {
      files: [],
    };
  },

  mounted: function () {
    console.log("Vue is mounted, trying a fetch for the initial data");

    fetchData("./includes/index.php")
      .then((data) => (this.files = data))
      .catch((err) => console.error(err));
  },

  template: `<ul v-if="files.length > 0" class="files">
      <mini-file v-for="f in files" :file="f" :key="f.id"></mini-file>
    </ul>`,
};
