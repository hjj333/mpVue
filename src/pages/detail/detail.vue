<template>
  <div class="container">
    <img class="detail_img" :src="isMusic ? detailObj.music.coverImgUrl : detailObj.detail_img" alt />
    <img @tap="music" class="music_img" :src="isMusic ? '/static/images/music/music-start.png' : '/static/images/music/music-stop.png'"/>
    <div class="avatar_data">
      <img :src="detailObj.avatar" alt />
      <span>{{detailObj.author}}</span>
      <span>发布于</span>
      <span>{{detailObj.date}}</span>
    </div>
    <p class="company">{{detailObj.title}}</p>
    <div class="share_container">
      <div class="share">
        <img @tap="collected" :src="isCollected ? '/static/images/icon/collection.png' : '/static/images/icon/collection-anti.png'" alt />
        <img src="/static/images/icon/share-anti.png" alt />
      </div>
      <div class="line"></div>
    </div>
    <button>转发</button>
    <p class="content">{{detailObj.detail_content}}</p>
  </div>
</template>
<script>
import { mapState } from "vuex"
import isPlayObj from '../../datas/isPlay.js'
export default {
  data() {
    return {
      detailObj: {}, // 每一个详情页面对象的数据
      isCollected: false, // 是否收藏
      isMusic: false
    };
  },
  mounted() {
    this.index = this.$mp.query.index
    this.detailObj = this.list[this.index]
    // oldStorage初始为null，所以oldStorage[this.index]会报错
    let oldStorage = wx.getStorageSync('isCollected')
    if (!oldStorage) { // 当oldStorage为null时，设置数据为空对象
      wx.setStorage({
        key: 'isCollected',
        data: {}
      })
    } else { // 当用户缓存过时，oldStorage[this.index] = true || false || undefined
      this.isCollected = (oldStorage[this.index] ? true : false)
    }
    (isPlayObj.pageIndex === this.index && isPlayObj.isPlay) ? this.isMusic = true : this.isMusic = false
    // 监听音乐的播放和暂停
    wx.onBackgroundAudioPlay(() => {
      console.log('音乐播放')
      this.isMusic = true
      isPlayObj.pageIndex = this.index
      isPlayObj.isPlay = true
    })
    wx.onBackgroundAudioPause(() => {
      console.log('音乐暂停')
      this.isMusic = false
      isPlayObj.isPlay = false
    })
  },
  methods: {
    // 点击收藏或取消收藏
    collected () {
      let isCollected = !this.isCollected
      this.isCollected = isCollected
      let title = isCollected ? '收藏成功' : '取消收藏'
      // 设置提示信息
      wx.showToast({
        title, //提示的内容,
        icon: 'success', //图标,
        mask: true, //显示透明蒙层，防止触摸穿透,
      })
      // 先读取本地缓存的状态（查看是否收藏）
      let oldStorage = wx.getStorageSync('isCollected')
      // 将数据设置成对象类型（使每一个详情页的oldStorage数据不一样）
      oldStorage[this.index] = isCollected
      // 将本次设置的结果再缓存到本地
      wx.setStorage({
        key: 'isCollected',
        data: oldStorage
      });
    },
    // 点击播放音乐
    music () {
      let isMusic = !this.isMusic
      this.isMusic = isMusic
      let { dataUrl, title } = this.detailObj.music
      if (isMusic) {
        wx.playBackgroundAudio({ // 使用后台播放器播放音乐
          dataUrl,
          title
        })
      } else { // 暂停播放音乐
        wx.pauseBackgroundAudio()
      }
    } 
 },
  computed: {
    ...mapState(['list'])
  }
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
}
.detail_img {
  width: 100%;
  height: 460rpx;
}
.music_img {
  width: 60rpx;
  height: 60rpx;
  position: absolute;
  top: 200rpx;
  left: 50%;
  margin-left: -30rpx;
}
.avatar_data {
  padding: 10rpx;
}
.avatar_data img {
  width: 64rpx;
  height: 64rpx;
  vertical-align: middle;
}
.avatar_data span {
  font-size: 28rpx;
  margin-left: 6rpx;
}
.company {
  font-size: 32rpx;
  font-weight: bold;
  padding: 10rpx;
}
.share_container {
  position: relative;
}
.share_container .share {
  float: right;
  margin-right: 30rpx;
}
.share_container .share img {
  width: 90rpx;
  height: 90rpx;
  margin-right: 20rpx;
}
.line {
  position: absolute;
  top: 45rpx;
  left: 5%;
  width: 90%;
  height: 1px;
  background: #eee;
  z-index: -1;
}
.content {
  font-size: 32rpx;
  text-indent: 32rpx;
  letter-spacing: 3rpx;
  line-height: 50rpx;
}
</style>