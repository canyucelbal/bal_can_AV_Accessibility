export default {
  name: "TheMiniFile",
  props: ["file"],

  data: function () {
    return {
      name: this.file.name,
      thumbnail: this.file.thumbnail,
    };
  },

  template: `<li @click="logClicked">
        <router-link :to="'/detail?id='+file.id">
          <img :src="file.thumbnail" :alt="file.name" class="miniImage">
        </router-link>
      </li>`,
  created: function () {
    console.log(`Created ${this.file.name}'s card`);
  },

  methods: {
    logClicked() {
      console.log(
        `Clicked on ${this.file.name}'s component! This will definitely not do anything.`
      );
    },
  },
};
