<template>
  <div class="container">
    <img :src="moviesDetail.images.large" alt />
    <p class="movies_name">{{moviesDetail.original_title}}</p>
    <div class="detail_content">
      <span>评分: {{moviesDetail.rating.average}}</span>
      <span>导演: {{moviesDetail.directors[0].name}}</span>
      <span>主演: {{moviesDetail.casts[0].name}} {{moviesDetail.casts[1].name}} {{moviesDetail.casts[2].name}}</span>
    </div>
    <button>我要观影</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      moviesDetail: {}
    };
  },
  computed: {
    ...mapState(['movies'])
  },
  beforeMount () {
      console.log(this)
      this.moviesDetail = this.movies[this.$mp.query.index]
  }
}
</script>
<style lang="">
.container {
    display: flex;
    flex-direction: column;
}
.container img {
    width: 70%;
    height: 700rpx;
    margin: 50rpx auto;
}
.movies_name {
    font-size: 40rpx;
    text-align: center;
    font-weight: bold;
}
.detail_content {
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-top: 30rpx;
    line-height: 50rpx;
    font-size: 26rpx;
}
button {
    width: 70%;
    height: 80rpx;
    background: green;
    line-height: 80rpx;
    color: #fff;
    font-size: 28rpx;
    margin-top: 20rpx;
}
</style>