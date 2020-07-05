<template>
  <div class="home fixed-wrapper">
    <Header />
    <Conetnet />
    <Footer />
    <!-- <VideoBox
      v-if="false"
      :videoList="videoList"
      :playList="playList"
      :pushIndex="pushIndex"
      :playIndex="playIndex"
      @updateIndex="updateIndex"
    />-->
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import VideoBox from "@/components/video-box";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Conetnet from "./Content";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { Header, Footer, Conetnet },
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
