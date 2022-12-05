<!-- 轮播图 -->
<template>
  <div class="slider" ref="rootRef">
    <div class="slider-group">
      <div class="slider-page" v-for="item in sliders" :key="item.id">
        <img :src="item.pic" alt="" srcset="">
      </div>
    </div>
    <div class="dots-wrapper">
      <span class="dot" v-for="(item, index) in sliders" :key="item.id"
        :class="{ 'active': currentPageIndex === index }"></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSlider from './use-slider'
export default {
  name: 'slider',
  props: {
    sliders: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup () {
    const rootRef = ref(null)
    const { currentPageIndex } = useSlider(rootRef)
    return {
      rootRef,
      currentPageIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  min-height: 1px;
  // 设置在父元素上避免莫名其妙的间距
  font-size: 0;
  touch-action: pan-y;

  .slider-group {
    position: relative;
    overflow: hidden;

    .slider-page {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      // 背面隐藏两面翻转
      backface-visibility: hidden;

      a {
        display: block;
        width: 100%;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 12px;
    line-height: 12px;

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>
