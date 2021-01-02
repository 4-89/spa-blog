<template>
  <div>
    <div class="p-archive-area__title">
      {{ this.$store.state.message.archivePageTitle }}
    </div>
    <div class="p-archive-area__search u-mbm">
      <input
        class="p-archive-area__input-form"
        :value="searchString"
        @input="searchArticles($event.target.value)"
        v-bind:placeholder="this.$store.state.message.searchPlaceholder"
      />
    </div>
    <transition-group name="panel" tag="div" class="p-archive-area">
      <div
        v-for="article in slicedArticleList"
        :key="article.title"
        class="p-archive-area__panel u-mbl"
      >
        <blog-article-panel :article="article" />
      </div>
    </transition-group>
    <div class="p-archive-area__fetch u-mbm">
      <span v-if="hasMore" v-on:click="fetchArticles()">
        {{ this.$store.state.message.fetchMore }}
      </span>
      <span v-else>
        {{ this.$store.state.message.noMore }}
      </span>
    </div>
  </div>
</template>

<script>
import BlogArticlePanel from "@/components/BlogArticlePanel.vue";

export default {
  name: "blog-archive",
  components: {
    BlogArticlePanel
  },
  data: function() {
    return {
      searchString: "",
      // 表示記事数(初期値はfetch数)
      totalNum: this.$store.state.fetchNum,
      // 検索対象記事
      articleList: this.$store.getters.articleArray,
      // 表示記事
      slicedArticleList: this.$store.getters.articleArray.slice(
        0,
        this.$store.state.fetchNum
      )
    };
  },
  computed: {
    hasMore() {
      return this.articleList.length > this.slicedArticleList.length;
    }
  },
  methods: {
    fetchArticles() {
      this.totalNum += this.$store.state.fetchNum;
      this.slicedArticleList = this.articleList.slice(0, this.totalNum);
    },
    filterArticles(article) {
      return article.title.includes(this.searchString);
    },
    searchArticles(value) {
      // 検索結果記事用配列
      let filterd = [];
      // stateで管理する全記事から検索
      this.$store.getters.articleArray.forEach(element => {
        if (element.title.includes(value) || element.code.includes(value)) {
          filterd.push(element);
        }
      });
      // 各データを更新
      this.slicedArticleList = filterd.slice(0, this.totalNum);
      this.articleList = filterd;
      this.searchString = value;
    }
  }
};
</script>
