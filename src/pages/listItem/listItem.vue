<template>
  <div @tap="goDetail" class="container">
    <div class="avatar">
      <img :src="item.avatar" alt />
      <span>{{item.date}}</span>
    </div>
    <p class="company">{{item.title}}</p>
    <img class="detail_img" :src="item.detail_img" alt />
    <p class="content">{{item.detail_content}}</p>
    <div class="star">
      <img src="/static/images/icon/collection.png" alt />
      <span>{{item.love_count}}</span>
      <img src="/static/images/icon/view.png" alt />
      <span>{{item.attention_count}}</span>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        item: Object,
        index: Number
    },
    methods: {
        goDetail () {
            wx.navigateTo({
                // 跳转到detail页面并传参index
                url: '/pages/detail/main?index=' + this.index
            })
        }
    },
}
</script>
<style>
.container {
    display: flex;
    flex-direction: column;
    border-bottom: 1rpx solid #eee;
}
.avatar {
    padding: 10rpx;
}
.avatar img {
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
    margin-right: 10rpx;
}
.avatar span {
    font-size: 28rpx;
    color: #333;
}
.company {
    font-size: 40rpx;
    font-weight: bold;
    padding: 10rpx;
}
.detail_img {
    width: 100%;
    height: 460rpx;
}
.content {
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
}
.star img {
    width: 32rpx;
    height: 32rpx;
    vertical-align: middle;
    margin-left: 10rpx;
}
.star span {
    font-size: 28rpx;
    color: #333;
    margin-left: 10rpx;
}
</style>