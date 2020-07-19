<template>
  <video-player
    class="vjs-custom-skin"
    ref="videoPlayer"
    :options="playerOptions"
    :playsinline="true"
  ></video-player>
</template>

<script>
import "videojs-flash";
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
export default {
  name: "Video",
  data() {
    return {
      playerOptions: {
        height: "360",
        sources: [
          {
            type: "rtmp/flv",
            src: "rtmp://58.84.7.20:1935/hls/hls"
          }
        ],
        techOrder: ["flash"],
        autoplay: false,
        controls: false
      }
    };
  },
  components: {
    videoPlayer
  }
};
</script>