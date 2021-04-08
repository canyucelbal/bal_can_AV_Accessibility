import { fetchData } from "./DataMiner.js";

export default {
  name: "TheFileDetail",

  data: function () {
    return {
      id: this.$route.params.id,
      file: null,
    };
  },

  template: `<div v-if="file">
      <video class="video">
        <source :src="file.file_path" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>`,

  mounted: function () {
    console.log('this.id', this.id);
    fetchData("./includes/index.php?id=" + this.id)
      .then((data) => (this.file = data[0]))
      .catch((err) => console.error(err));
  },

  methods: {},
};
