<template>
  <div class="home fixed-wrapper">
    <Header />
    <Conetnet />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  mounted() {
    this.withdrawal();
  },
  methods: {
    ...mapActions("User", ["withdrawal"])
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
