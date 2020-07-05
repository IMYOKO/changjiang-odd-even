<template>
  <div class="video-wrapper">
    <video
      :ref="`video${index}`"
      class="video"
      :class="{'active': index === activeIndex}"
      width="100%"
      height="100%"
      muted
      preload="auto"
      webkit-playsinline
      playsinline
      :src="'http://58.84.7.20:8081/vedio/'+item.FileName"
      v-for="(item, index) in playList"
      :key="index"
    >你的浏览器不支持video标签</video>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
  data() {
    return {
      activeIndex: 0,
      videoList: [],
      playList: [],
      playIndex: 0,
      pushIndex: 0
    };
  },
  mounted() {
    this.getVideo();
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
          this.updateIndex(eq, activeIndex);
        };

        const video1EndAction = () => {
          video0.play();
          this.activeIndex = 0;
          const eq = this.pushIndex + 1;
          const activeIndex = this.playIndex + 1;
          this.updateIndex(eq, activeIndex);
        };

        video0.removeEventListener("ended", video0EndAction);
        video1.removeEventListener("ended", video1EndAction);

        video0.addEventListener("ended", video0EndAction);
        video1.addEventListener("ended", video1EndAction);
      });
    },
    async getVideo() {
      try {
        const data = await this.$apis.getVideo();
        this.videoList = data;
        if (data.length > 0) {
          if (data.length === 1) {
            const list = [data[0]];
            this.playList = list;
            this.pushIndex = 0;
          } else {
            const list = [data[0], data[1]];
            this.playList = list;
            this.pushIndex = 1;
          }
          this.videoPlay();
        }
      } catch (error) {
        console.log(error);
      }
    },
    updateIndex(index, activeIndex) {
      console.log({ index });
      if (this.videoList.length === 1) {
        return;
      } else if (this.videoList.length === 2) {
        this.pushIndex = index;
        this.playIndex = activeIndex;
      } else {
        this.pushIndex = index;
        this.playIndex = activeIndex;
        const eq = index % 2 === 0 ? 0 : 1;
        this.$set(this.playList, eq, this.videoList[index]);
      }
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
  position: relative;
  padding-top: 56.25%;

  .video {
    display: block;
    position: absolute;
    left: 0;
    top: 0;

    &.active {
      z-index: 10;
    }
  }
}
</style>
