export default {
  name: "TheFileDetail",
  props: ["id"],

  data: function () {
    return {
      file: null,
    };
  },

  template: `
    <div v-if="file">
      <video width="320" height="240" controls>
        <source :src="file.file_path" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  `,

  mounted: function () {
    fetchData("./includes/index.php?id=" + this.id)
      .then((data) => (this.file = data))
      .catch((err) => console.error(err));
  },

  methods: {},
};
