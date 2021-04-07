export default {
  name: "TheMiniFile",
  props: ["file"],

  data: function () {
    return {
      name: this.mini.file,
      thumbnail: this.file.thumbnail,
    };
  },

  template: `<li @click="logClicked">
        <img :src="'images/' + file.thumbnail" :alt='file.name + " image"' class="miniImage">
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
