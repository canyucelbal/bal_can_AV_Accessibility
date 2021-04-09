import { fetchData } from "./DataMiner.js";

export default {
  name: "TheFileDetail",

  data: function () {
    return {
      id: this.$route.params.id,
      file: null,
      video_is_playing: false,
      player: null,
      fullScreen: false,
      sound: null
    };
  },

  template: `
    <div class="video-wrapper element" id="element" :class="{'full-screen': fullScreen}">
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

          <input type="range" class="ml-1" min="0" max="1" step="0.1" v-model="sound">

          <div class="ml-auto">
            <button onclick="var fs = document.getElementById('element'); fs.webkitRequestFullscreen();" class="btn btn-primary btn-sm" @click="fullScreenToggle">
              <i v-if="fullScreen" class="fa fa-object-group" aria-hidden="true"></i>
              <i v-else class="fa fa-object-ungroup" aria-hidden="true"></i>
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
    sound(n) {
      this.$refs.video.volume = n
    }
  },

  methods: {
    fullScreenToggle: function () {
      this.fullScreen = !this.fullScreen;
    },
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
