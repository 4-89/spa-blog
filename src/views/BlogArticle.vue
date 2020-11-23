<template>
  <div>
    <div v-html="compiledMd" />
  </div>
</template>

<style></style>
<script>
export default {
  name: "blog-article",
  props: ["code"],
  data: function() {
    return {
      articleMd: "loding..."
    };
  },
  computed: {
    compiledMd() {
      return this.articleMd;
    }
  },
  created() {
    this.compileMdText();
  },
  methods: {
    compileMdText() {
      import("../assets/articles/json/" + this.code + ".json")
        .then(module => {
          console.log(module);
          this.articleMd = module.bodyHtml;
        })
        .catch(err => {
          this.articleMd = "<div>article was not found.</div>";
          Promise.reject(err);
        });
    }
  }
};
</script>
