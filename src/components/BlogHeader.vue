<template>
  <div>
    <div class="l-blog-header l-blog-header--with-bg"></div>
    <div class="l-blog-header__under-space l-blog-header__under-space--with-bg">
      <router-link
        tag="span"
        to="/"
        class="l-blog-header__link l-blog-header__link--decorated"
      >
        home
      </router-link>
      <router-link
        tag="span"
        to="/archive"
        class="l-blog-header__link l-blog-header__link--decorated"
      >
        archive
      </router-link>
      <!-- <span class="l-blog-header__link l-blog-header__link--decorated">
        <a href="#">git</a>
      </span>
      <span class="l-blog-header__link l-blog-header__link--decorated">
        <a href="#">twitter</a>
      </span>
      <span class="l-blog-header__link l-blog-header__link--decorated">
        <a href="#">qiita</a> 
      </span> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-header"
};
</script>
