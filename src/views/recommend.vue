<template>
  <div class="recommend" v-loading:[loadingText]="loading">
    <!-- <ScrollVue class="scroll-content"> -->
      <!-- 只针对第一个子节点生效在套一层div -->
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <SliderVue v-if="sliders.length" :sliders="sliders"></SliderVue>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <li v-for="item in playlists" class="item" :key="item.id" @click="selectItem(item)">
              <div class="item-icon">
                <img width="60" height="60" v-lazy :src="item.pic" />
              </div>
              <div class="item-text">
                <h2 class="name">
                  {{ item.username }}
                </h2>
                <p class="item-title">
                  {{ item.title }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    <!-- </ScrollVue> -->
  </div>
</template>

<script>
import { getRecommend } from '@/service/recommend.js'
// 轮播图插件
import SliderVue from '../components/base/slider/slider.vue'
// 滚动条插件
// import ScrollVue from '../components/base/scroll/scroll.vue'
export default {
  name: '',
  components: {
    SliderVue
    // ScrollVue
  },
  data () {
    return {
      sliders: [],
      playlists: [],
      loadingText: '正在载入...'
    }
  },
  methods: {
    selectItem (item) {

    }
  },
  computed: {
    loading () {
      return false
    }
  },
  async created () {
    const result = await getRecommend()
    console.log(result)
    this.sliders = result.data.result.sliders
    this.playlists = result.data.result.albums
  }
}

</script>

<style lang="scss" scoped>
.recommend {
  position: relative;
  width: 100%;
  overflow: hidden;
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }

    .item {
      display: flex;
      padding: 0 20px 20px 20px;

      .item-icon {
        flex: 0 0 60px;
        padding-right: 20px;
      }

      .item-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        font-size: $font-size-medium;
      }

      .name {
        margin-bottom: 10px;
        color: $color-text;
      }

      .item-title {
        color: $color-text-d;
      }
    }
  }
}
</style>
