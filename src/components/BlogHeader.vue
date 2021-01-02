<template>
  <div>
    <div class="l-blog-header l-blog-header--with-bg">
      <router-link tag="header" to="/" class="l-blog-header__title">
        {{ this.$store.state.message.blogTitle }}
      </router-link>
    </div>
    <div class="l-blog-header__under-space l-blog-header__under-space--with-bg">
      <router-link
        tag="span"
        to="/archive"
        class="l-blog-header__link l-blog-header__link--decorated"
      >
        archive
      </router-link>
      <span class="l-blog-header__link l-blog-header__link--decorated">
        <a href="#">git</a>
      </span>
      <span class="l-blog-header__link l-blog-header__link--decorated">
        <a href="#">twitter</a>
      </span>
      <span class="l-blog-header__link l-blog-header__link--decorated">
        <a href="#">qiita</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-header"
};
</script>
