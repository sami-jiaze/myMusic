<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">My Music</h1>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 44px;
  color: $color-theme;
  justify-content: center;

  .icon {
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    @include bg-image('logo');
    background-size: 100% 100%;
    // background-image: url(./logo@3x.png);
  }

  .text {
    line-height: 44px;
    font-size: $font-size-large;
  }
}
</style>
