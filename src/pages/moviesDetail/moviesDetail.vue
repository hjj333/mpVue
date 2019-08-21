<template>
  <div class="container">
    <img src="moviesDetail.images.large" alt />
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      moviesDetail: {}
    };
  },
  computed: {
    ...mapState(["movies"])
  },
  mounted() {
      this.moviesDetail = this.movies[this.$mp.query.index]
  }
};
</script>
<style lang="">
</style>