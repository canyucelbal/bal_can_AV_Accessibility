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
    fetchData("./includes/index.php")
      .then((data) => (this.files = data))
      .catch((err) => console.error(err));
  },

  template: `
    <div v-if="files.length > 0" class="row">
      <div class="col-md-4" v-for="f in files" :key="f.id">
        <mini-file :file="f"></mini-file>
      </div>
    </div>
  `,
};
