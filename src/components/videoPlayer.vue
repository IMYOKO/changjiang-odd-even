<template>
  <div>
    sss
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
import VideoPlayer from "@/components/videoJs.vue";

export default {
  name: "VideoExample",
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: false,
        sources: [
          // {
          //   src: "http://58.84.7.20:8081/vedio/1.mp4",
          //   type: "video/mp4"
          // }
          {
            type: "rtmp/mp4",
            src: "rtmp://58.84.7.20:1935/hls/hls",
          },
        ],
        techOrder: ["flash"],
      },
    };
  },
};
</script>