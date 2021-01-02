<template>
  <div class="l-blog-footer--bg">
    <div class="l-blog-footer__message">
      {{ this.$store.state.message.footerMessage }}
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-footer"
};
</script>
