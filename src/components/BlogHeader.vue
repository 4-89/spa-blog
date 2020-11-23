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

<style>
.l-blog-header {
  box-sizing: border-box;
  padding: 7em;
  display: flex;
}
.l-blog-header__under-space {
  box-sizing: border-box;
  padding: 0.1em 0.5em;
  display: flex;
  justify-content: flex-end;
}
.l-blog-header--with-bg {
  background-image: url(../assets/img/bg_large.png);
  background-position: center center;
  background-size: 100% auto;
}
.l-blog-header__spacer {
  box-sizing: border-box;
  flex-basis: 30%;
  padding-left: 2em;
}
.l-blog-header__title {
  box-sizing: border-box;
  flex-basis: 50%;
  padding-left: 2em;
  cursor: pointer;
}
.l-blog-header__link {
  box-sizing: border-box;
  padding-left: 1em;
  padding-right: 1em;
  cursor: pointer;
}
.l-blog-header__link--decorated {
  border-bottom: ridge;
  border-bottom-width: thin;
  border-bottom-color: black;
}
</style>

<script>
export default {
  name: "blog-header"
};
</script>
