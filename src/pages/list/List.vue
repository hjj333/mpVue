<template>
  <div class="container">
    <swiper indicator-dots indicator-color="pink" indicator-active-color="green">
      <swiper-item>
        <img src="/static/images/detail/carousel/01.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/detail/carousel/02.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/detail/carousel/03.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/detail/carousel/04.jpg" alt />
      </swiper-item>
    </swiper>
    <div>
      <listItem v-for="(item, index) in list" :key="index" :item="item" :index="index"></listItem>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import listItem from '../listItem/listItem'
export default {
    components: {
      listItem
    },
    mounted() {
      this.$store.dispatch('getList')
    },
    computed: {
      ...mapState(['list'])
    },
}
</script>
<style>
    .container swiper {
        width: 100%;
        height: 400rpx;
    }
    .container swiper img {
        width: 100%;
        height: 100%;
    }
</style>