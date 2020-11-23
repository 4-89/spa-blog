<template>
  <div id="spa-wrapper" class>
    <BlogHeader class="u-mbs"></BlogHeader>
    <transition name="fade" mode="out-in">
      <router-view class="l-blog-content" />
    </transition>
    <BlogFooter class="l-blog-footer"></BlogFooter>
  </div>
</template>

<style>
#spa-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  /* フッター固定用 */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /*              */
}
body {
  margin: 0 0;
}

.l-blog-footer {
  margin-top: auto;
}
.l-blog-content {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* a {
  color: #2c3e50;
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.u-mbl {
  margin-bottom: 2.5em;
}
.u-mbm {
  margin-bottom: 1.5em;
}
.u-mbs {
  margin-bottom: 0.5em;
}
@media screen and (max-width: 500px) {
  /* 960px以上に適用されるCSS（PC用） */
  .l-blog-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
}
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
