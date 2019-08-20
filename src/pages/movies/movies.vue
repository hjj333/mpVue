<template>
  <div class="container">
    <img class="movies_img" src="/static/images/index/cart.jpg" alt />
    <div class="movies_info">
      <p class="movies_name">帮网别急</p>
      <p class="movies_year">年份</p>
      <p class="movies_dir">导演</p>
    </div>
    <p class="movies_rating">9.6</p>
  </div>
</template>
<script>
const MOVIES_URL = 'http://t.yushu.im/v2/movies/top250'
export default {
    
}
</script>
<style lang="">
.container {
  display: flex;
  padding: 10rpx;
  border-bottom: 1px solid #eee;
}
.movies_img {
  width: 128rpx;
  height: 128rpx;
  margin-right: 20rpx;
}
.movies_info {
  width: 70%;
}
.movies_name {
  font-size: 32rpx;
  color: #333;
}
.movies_year {
  font-size: 28rpx;
  color: #999;
}
.movies_dir {
  font-size: 30rpx;
  color: #666;
}
.movies_rating {
  font-size: 36rpx;
  font-weight: bold;
  color: #666;
}
</style>