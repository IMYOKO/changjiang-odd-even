<template>
  <div class="login">
    <div class="login-form-wrapper">
      <div class="title">游戏登录</div>
      <div class="login-form-content">
        <div class="form-item">
          <input v-model="username" type="text" maxlength="11" name id placeholder="账号或手机号" />
        </div>
        <div class="form-item">
          <input v-model="password" type="password" maxlength="16" name id placeholder="密码" />
        </div>
      </div>
      <div class="btn-wrapper">
        <div class="btn-box register-btn" @click="goRegister">注册</div>
        <div class="btn-box" @click="goLogin">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState("User", ["token", "userInfo"])
  },
  mounted() {
    if (this.token) {
      this.goHome();
      return;
    }
  },
  methods: {
    ...mapActions("User", ["login"]),
    async goLogin() {
      if (!this.username) {
        this.$toast("账号不能为空");
        return;
      }
      if (!this.password) {
        this.$toast("请输入密码");
        return;
      }
      try {
        const data = {
          username: this.username,
          password: this.password
        };
        await this.login(data);
        this.$toast({
          type: "success",
          message: "登录成功",
          duration: 1000,
          onClose: () => {
            this.goHome();
          }
        });
      } catch (e) {
        this.$toast("登录失败");
      }
    },
    goHome() {
      this.$router.push("/");
    },
    goRegister() {
      this.$router.push("/register");
    }
  }
};
</script>
