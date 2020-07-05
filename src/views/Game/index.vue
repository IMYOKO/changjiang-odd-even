<template>
  <div class="game">
    <VideoBox />
  </div>
</template>

<script>
import VideoBox from "@/components/video-box";
export default {
  components: { VideoBox },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.game {
  color: red;
}
</style>