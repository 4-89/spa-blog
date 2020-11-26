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
      fetch("articles/json/" + this.code + ".json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(json => {
          this.articleMd = json.bodyHtml;
        })
        .catch(err => {
          this.articleMd = "<div>article was not found.</div>";
          Promise.reject(err);
        });
    }
  }
};
</script>
