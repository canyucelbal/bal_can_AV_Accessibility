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
        <img :src="'images/' + file.thumbnail" :alt="name" class="img-fluid">
        <p>{{ name }}</p>
      </div>
    </router-link>
  `,
};
