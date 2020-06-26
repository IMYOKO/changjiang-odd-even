<template>
  <div class="video-wrapper fixed-wrapper">
    <video
      :ref="`video${index}`"
      class="video"
      width="100%"
      height="100%"
      muted
      preload
      :src="'http://58.84.7.20:8081/vedio/'+item.FileName"
      v-for="(item, index) in playList"
      v-show="index === activeIndex"
      :key="index"
    ></video>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
  props: {
    videoList: Array,
    playList: Array,
    playIndex: Number,
    pushIndex: Number
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  watch: {
    playList: {
      immediate: true,
      handler(val) {
        if (this.playIndex === 0 && this.activeIndex === 0 && val.length > 0) {
          this.videoPlay();
        }
      }
    }
  },
  methods: {
    videoPlay() {
      this.$nextTick(() => {
        if (this.playList.length === 0) {
          return;
        }
        const video0 = this.$refs.video0[0];
        const video1 = this.$refs.video1[0];

        if (this.activeIndex) {
          video1.play();
        } else {
          video0.play();
        }

        const video0EndAction = () => {
          video1.play();
          this.activeIndex = 1;
          const eq = this.pushIndex + 1;
          const activeIndex = this.playIndex + 1;
          this.$emit("updateIndex", eq, activeIndex);
        };

        const video1EndAction = () => {
          video0.play();
          this.activeIndex = 0;
          const eq = this.pushIndex + 1;
          const activeIndex = this.playIndex + 1;
          this.$emit("updateIndex", eq, activeIndex);
        };

        video0.removeEventListener("ended", video0EndAction);
        video1.removeEventListener("ended", video1EndAction);

        video0.addEventListener("ended", video0EndAction);
        video1.addEventListener("ended", video1EndAction);
      });
    },
    videoPlays() {
      this.$nextTick(() => {
        if (this.playList.length === 0) {
          return;
        }
        this.$refs[`video${this.activeIndex}`][0].play();
        this.playList.map((item, index) => {
          this.$refs[`video${index}`][0].addEventListener("ended", () => {
            if (index === this.playList.length - 1) {
              this.$refs["video0"][0].play();
              this.activeIndex = 0;
            } else {
              this.$refs[`video${index + 1}`][0].play();
              this.activeIndex = index + 1;
            }
            const eq = this.pushIndex + 1;
            this.$emit("updateIndex", eq);
          });
        });
      });
    },
    videoPlay2() {
      const video0 = this.$refs.video0;
      const video1 = this.$refs.video1;
      const video2 = this.$refs.video2;

      video0.play();

      video0.addEventListener("ended", () => {
        video1.play();
        this.activeIndex = 1;
      });

      video1.addEventListener("ended", () => {
        video2.play();
        this.activeIndex = 2;
      });

      video2.addEventListener("ended", () => {
        video0.play();
        this.activeIndex = 0;
      });
    },
    videoPlay3() {
      const video = this.$refs.video;

      video.addEventListener("ended", () => {
        this.index++;
        if (this.index > 2) {
          this.index = 0;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.video-wrapper {
  z-index: 100;
  video {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
</style>
