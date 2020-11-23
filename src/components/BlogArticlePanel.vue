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
<style>
.p-article-panel__headline-initial {
  font-size: 2rem;
}
.p-article-panel__header {
  display: flex;
  /* border-top: solid 0.05rem; */
  border-bottom: solid 0.05rem;
  font-size: 0.5rem;
  height: 1rem;
  justify-content: space-between;
}
.p-article-panel__title {
  font-size: 1rem;
  text-align: center;
}
.p-article-panel__subtitle {
  text-align: center;
}
.p-article-panel__headline {
  font-size: 0.75rem;
  white-space: pre-wrap;
}
.p-article-panel__headline::first-letter {
  font-size: 1.25rem;
  padding-right: 0.15rem;
}
.p-article-panel__link {
  text-align: right;
  font-size: 0.5rem;
}
.p-article-panel__date {
  /* text-align: right; */
  text-align: center;
  font-size: 0.5rem;
}
.p-article-panel__border {
  width: 100%;
  height: 0.25rem;
  border-top: solid 0.05rem;
  border-bottom: solid 0.05rem;
}
.p-article-panel__border-short {
  margin: 0 auto;
  width: 50%;
  height: 0.2rem;
  border-top: solid 0.05rem;
  border-bottom: solid 0.05rem;
}
.p-article-panel__border-middle {
  margin: 0 auto;
  width: 75%;
  height: 0.2rem;
  border-top: solid 0.05rem;
  border-bottom: solid 0.05rem;
}
.p-article-panel__footer {
  display: flex;
  border-top: solid 0.05rem;
  /* border-bottom: solid 0.05rem; */
  font-size: 0.5rem;
  height: 1rem;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.u-br {
  border-right: solid 0.05rem;
}
.u-bl {
  border-left: solid 0.05rem;
}
.u-bb {
  border-bottom: solid 0.05rem;
}
.u-spacer-as-mbm {
  height: 1.5rem;
}
</style>

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
