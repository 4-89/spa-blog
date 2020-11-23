<template>
  <div class="l-blog-footer--bg">
    <div class="l-blog-footer__message">
      {{ this.$store.state.message.footerMessage }}
    </div>
  </div>
</template>

<style>
.l-blog-footer__message {
  margin: 0 auto;
  text-align: center;
}
.l-blog-footer--bg {
  background-image: url(../assets/img/footer.png);
  background-position: center center;
  background-size: 100% auto;
}
</style>
<script>
export default {
  name: "blog-footer"
};
</script>
