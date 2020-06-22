<template>
  <div class="login">login</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  computed: {
    ...mapState("User", ["token"]),
  },
  mounted() {
    this.login({ username: 123456, password: 123456 });
  },
  methods: {
    ...mapActions("User", ["login"]),
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login/login_bg@2x.png") center center
    no-repeat;
  background-size: contain;
}
</style>
