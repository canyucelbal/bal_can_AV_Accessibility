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

  template: `<li>
        <router-link :to="'/detail/'+id">
          <img :src="thumbnail" :alt="name" class="miniImage">
        </router-link>
      </li>`,
};
