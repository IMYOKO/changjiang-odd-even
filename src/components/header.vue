<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="left-wrapper">
        <div class="user-info">
          <div class="user-avtar"></div>
          <div class="user-info-box">
            <h2></h2>
            <h3></h3>
          </div>
        </div>
        <div class="user-money">
          <div class="user-money-item">
            <div class="item"></div>
          </div>
          <div class="user-money-item"></div>
        </div>
      </div>
      <div class="logo-wrapper">
        <img src="../assets/images/home/login@2x.png" alt />
      </div>
      <div class="right-wrapper">
        <ul class="right-action-wrapper item-01">
          <li>
            <div class="right-action-item">
              <img src="../assets/images/home/icon_tuiguang@2x.png" alt />
            </div>
          </li>
          <li>
            <div class="right-action-item item-02">
              <img src="../assets/images/home/icon_cz@2x.png" alt />
            </div>
          </li>
          <li>
            <div class="right-action-item item-03">
              <img src="../assets/images/home/icon_kefu@2x.png" alt />
            </div>
          </li>
          <li>
            <div class="right-action-item item-04">
              <img src="../assets/images/home/icon_back@2x.png" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 2.875rem;
  background-color: rgba(25, 16, 13, 0.8);

  .header-wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;

    .logo-wrapper {
      height: 100%;
      img {
        width: 11.5625rem;
      }
    }

    .left-wrapper {
      width: 14.375rem;
      display: flex;
      padding: 0.32rem 0.32rem 0;

      .user-info {
        display: flex;

        .user-avtar {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 2.25rem;
          overflow: hidden;
          background-color: #fff;
          border: 2px solid #bf7d22;
        }

        .user-info-box {
          padding: 0 0.32rem;
          max-width: 5rem;
          h2,
          h3 {
            color: #f9f4d6;
            font-weight: normal;
            font-size: 1rem;
            line-height: 1rem;
            margin-top: 0.125rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; // 382619
          }

          h3 {
            font-size: 0.85rem;
            line-height: 0.85rem;
            margin-top: 0.25rem;
          }
        }
      }

      .user-money {
        &-item {
          .item {
            height: 0.75rem;
            line-height: 0.75rem;
            border: 1px solid #382619;
            background-color: #231e18;
          }
        }
      }
    }

    .right-wrapper {
      width: 14.375rem;
      display: flex;
      justify-content: flex-end;

      .right-action-wrapper {
        width: 12rem;
        display: flex;
        padding-right: 0.375rem;
        justify-content: space-between;

        li {
          margin: 0.2rem 0.2rem 0;

          .right-action-item {
            width: 2.375rem;
            height: 100%;

            &.item-02 {
              width: 3.0625rem;
            }
            &.item-03 {
              width: 2.8125rem;
            }
            &.item-04 {
              width: 2.625rem;
            }

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
