<template>
    <div class="footer">
        <ul class="footer-action-wrapper">
            <li v-for="item in list" :key="item.title">
                <div class="footer-action-item" @click="item.handle">
                    <img :src="item.src" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import iconVideo from "@/assets/images/home/icon_video@2x.png";
import iconMessage from "../assets/images/home/icon_message@2x.png";
import iconSounds from "../assets/images/home/icon_sounds@2x.png";
import iconRecord from "../assets/images/home/icon_record@2x.png";
import iconRules from "../assets/images/home/icon_rules@2x.png";
import iconSetting from "../assets/images/home/icon_setting@2x.png";
import iconPassword from "../assets/images/home/icon_password@2x.png";
import iconChangePW from "../assets/images/home/icon_changePW@2x.png";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = [
      {
        title: "全景视频",
        src: iconVideo,
        handle: () => {},
      },
      {
        title: "信息",
        src: iconMessage,
        handle: () => {},
      },
      {
        title: "声音",
        src: iconSounds,
        handle: () => {},
      },
      {
        title: "记录",
        src: iconRecord,
        handle: () => {},
      },
      {
        title: "规则",
        src: iconRules,
        handle: () => {},
      },
      {
        title: "设置",
        src: iconSetting,
        handle: () => {},
      },
      {
        title: "提款密码",
        src: iconPassword,
        handle: () => {},
      },
      {
        title: "修改密码",
        src: iconChangePW,
        handle: () => {},
      },
    ];
  },
};
</script>

<style lang="less" scoped>
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 2rem;
  background-color: #15110d;
  border-top: 1px solid #8e8569;
}
.footer-action-wrapper {
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  li {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .footer-action-item {
    align-items: center;
    width: 3rem;
    height: 2.875rem;
    img {
      display: block;
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>
