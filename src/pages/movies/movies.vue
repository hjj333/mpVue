<template>
  <div>
    <div @tap="toDetailMovies(index)" class="container" v-for="(item, index) in moviesArr" :key="index">
      <img class="movies_img" :src="item.images.large" alt />
      <div class="movies_info">
        <p class="movies_name">{{item.original_title}}</p>
        <p class="movies_year">年份: {{item.year}}</p>
        <p class="movies_dir">导演: {{item.directors[0].name}}</p>
      </div>
      <p class="movies_rating">{{item.rating.average}}</p>
    </div>
  </div>
</template>
<script>
const MOVIES_URL = 'http://t.yushu.im/v2/movies/top250'
export default {
  data() {
    return {
      moviesArr: []
    };
  },
  mounted() {
    this.$fly
      .get(MOVIES_URL)
      .then(response => {
        let moviesArr = response.data.subjects
        this.$store.dispatch('getMovies', moviesArr)
        this.moviesArr = moviesArr
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods: {
    toDetailMovies (index) {
      wx.navigateTo({
        url: '/pages/moviesDetail/main?index=' + index
      })
    }
  }

};
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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