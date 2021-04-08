export default {
  name: "TheMiniFile",
  props: ["file"],

  data: function () {
    return {
      id: this.file.id,
      name: this.file.name,
      thumbnail: this.file.thumbnail,
    };
  },

  template: `
    <router-link :to="'/detail/'+id">
      <div class="mini-file">
        <img :src="thumbnail" :alt="name" class="miniImage">
        <p>{{ name }}</p>
      </div>
    </router-link>
  `,
};
