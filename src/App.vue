<template>
  <div id="spa-wrapper" class>
    <BlogHeader class="u-mbs"></BlogHeader>
    <transition name="fade" mode="out-in">
      <router-view class="l-blog-content" />
    </transition>
    <BlogFooter class="l-blog-footer"></BlogFooter>
  </div>
</template>
<style lang="less">
@import "app";
</style>
<script>
import BlogHeader from "@/components/BlogHeader.vue";
import BlogFooter from "@/components/BlogFooter.vue";

export default {
  components: {
    BlogHeader,
    BlogFooter
  }
};
</script>
