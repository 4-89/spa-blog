<template>
  <div class="p-article-panel">
    <div class="p-article-panel__header">code:{{ article.code }}</div>
    <div class="p-article-panel__title u-bl">
      <router-link
        tag="a"
        :to="{ name: 'article', params: { code: article.code } }"
      >
        {{ article.title }}
      </router-link>
    </div>
    <div class="p-article-panel__date u-bb u-bl">{{ article.date }}</div>
    <div class="u-br u-spacer-as-mbm"></div>
    <div class="p-article-panel__headline u-br">
      {{ article.preview + this.$store.state.message.ellipsis }}
    </div>
    <div class="u-br u-spacer-as-mbm"></div>
    <div class="p-article-panel__footer">
      <div class="p-article-panel__link">
        <router-link
          tag="a"
          :to="{ name: 'article', params: { code: article.code } }"
        >
          {{ this.$store.state.message.readMore }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-article-panel",
  props: {
    article: Object
  },
  data() {
    return {};
  },
  computed: {
    headlineInitial() {
      return this.article.preview.slice(0, 1);
    },
    headline() {
      return this.article.preview.slice(1);
    }
  }
};
</script>
