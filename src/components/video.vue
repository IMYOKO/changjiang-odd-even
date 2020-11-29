<template>
  <div>
    <!-- <video-player
      class="vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
    ></video-player>-->
  </div>
</template>

<script>
// import { videoPlayer } from "vue-video-player";
// import "video.js/dist/video-js.css";
// import "videojs-flash";
export default {
  name: "Video",
  data() {
    return {
      flvPlayer: null,
      playerOptions: {
        height: "360",
        sources: [
          {
            type: "rtmp/mp4",
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
    // videoPlayer
  }
};
</script>