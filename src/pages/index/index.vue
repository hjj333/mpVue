<template>
  <div class="container">
    <img v-if="isShow" :src="userInfo.avatarUrl" alt />
    <button v-else open-type="getUserInfo" @getuserinfo="getUserInfo">授权</button>
    <p class="userName">hello {{userInfo.nickName}}</p>
    <div @tap="toDetail" class="goStudy">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {},
      isShow: false
    };
  },
  beforeMount() {
    // 查看是否授权
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用getUserInfo
          wx.getUserInfo({
            success: data => {
            },
            fail: () => {
              console.log("shibai")
            }
          })
        }
      },
      fail: () => {
        console.log("shibai")
      }
    });
  },
  methods: {
    getUserInfo(e) {
      this.isShow = true
      this.userInfo = e.mp.detail.userInfo
    },
    toDetail () {
      wx.switchTab({
        url: "/pages/list/main"
      })
    }
  }
};
</script>
<style scoped>
page {
  background: #8ed145;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 200rpx;
  height: 200rpx;
  border-radius: 100rpx;
  margin: 100rpx 0;
}
.userName {
  font-size: 40rpx;
  font-weight: bold;
  margin: 100rpx 0;
}
.goStudy {
  width: 220rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  font-size: 24rpx;
  border: 1rpx solid #eee;
  border-radius: 10rpx;
}
</style>
