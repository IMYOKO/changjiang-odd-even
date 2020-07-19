<template>
  <div class="game">
    <VideoBox />
  </div>
</template>

<script>
// import VideoBox from "@/components/video-box";
import VideoBox from "@/components/video";
export default {
  components: { VideoBox },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.game {
  background: #000;
}
</style>