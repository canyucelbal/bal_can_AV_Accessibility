import { fetchData } from "./DataMiner.js";

export default {
  name: "TheFileDetail",

  data: function () {
    return {
      id: this.$route.params.id,
      file: null,
      video_is_playing: false,
      player: null,
    };
  },

  template: `
    <div class="video-wrapper">
      <video v-if="file" class="video" ref="video">
        <source :src="file.file_path" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <div class="actions">
        <button type="button" class="btn btn-primary btn-play_pause" @click="togglePlaying">
          <i v-if="!video_is_playing" class="fa fa-play" aria-hidden="true"></i>
          <i v-else class="fa fa-pause" aria-hidden="true"></i>
        </button>

        <div class="bottom">
          <button type="button" class="btn btn-outline-primary" @click="togglePlaying">
          <i v-if="!video_is_playing" class="fa fa-play" aria-hidden="true"></i>
            <i v-else class="fa fa-pause" aria-hidden="true"></i>
          </button>

          <div class="prev-next">
            <button class="btn btn-primary btn-sm" @click="backward">
              <i class="fa fa-backward" aria-hidden="true"></i>
            </button>
            <button class="btn btn-primary btn-sm" @click="forward">
              <i class="fa fa-forward" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,

  mounted: function () {
    fetchData("./includes/index.php?id=" + this.id)
      .then((data) => (this.file = data[0]))
      .catch((err) => console.error(err));
  },

  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },

  watch: {
    video_is_playing(n) {
      if (n) {
        this.$refs.video.play();
      } else {
        this.$refs.video.pause();
      }
    },
  },

  methods: {
    togglePlaying: function () {
      this.video_is_playing = !this.video_is_playing;
    },
    backward: function () {
      this.seek(-10);
    },
    forward: function () {
      this.seek(10);
    },
    seek(secs) {
      let currentTime = this.$refs.video.currentTime;
      currentTime += secs;

      if (currentTime < 0) {
        currentTime = 0;
      }

      setTimeout(() => {
        this.$refs.video.currentTime += currentTime;
      }, 200);
    },
  },
};
