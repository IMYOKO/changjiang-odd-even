<template>
  <div class="register">register</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      Phone: "",
      SMSCode: "", // 8888
      UserName: "",
      PassWord: "",
      PassWordAgain: "",
      YQM: "10000",
      isSend: false,
      codeText: "获取",
    };
  },
  mounted() {
    this.getYQM();
  },
  computed: {
    ...mapState("User", ["token", "userInfo"]),
  },
  methods: {
    ...mapActions("User", ["login"]),
    getYQM() {
      const query = this.$route.query;
      const { YQM } = query;
      this.YQM = YQM || "10000";
    },
    goLogin() {
      this.$router.push("/login");
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped></style>
