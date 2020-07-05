<template>
  <div class="content-wrapper">
    <VideoBox />
  </div>
</template>

<script>
import VideoBox from "@/components/video-box";
export default {
  components: { VideoBox }
};
</script>

<style lang="less" scoped>
.content-wrapper {
  padding: 2.875rem 0;
}
</style>
