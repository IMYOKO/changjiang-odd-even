<template>
  <div class="home fixed-wrapper">
    <Header />
    <Conetnet />
    <Footer />
    <VideoBox
      :videoList="videoList"
      :playList="playList"
      :pushIndex="pushIndex"
      :playIndex="playIndex"
      @updateIndex="updateIndex"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VideoBox from "@/components/video-box";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Conetnet from "./Content";
export default {
  name: "Home",
  data() {
    return {
      videoList: [],
      playList: [],
      pushIndex: 0,
      playIndex: 0
    };
  },
  components: { VideoBox, Header, Footer, Conetnet },
  computed: {},
  created() {
    this.getVideo();
  },
  mounted() {
    this.withdrawal();
  },
  methods: {
    ...mapActions("User", ["withdrawal"]),
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
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  background: url("../../assets/images/home/home_bg@2x.png") center center
    no-repeat;
  background-size: cover;
}
</style>
