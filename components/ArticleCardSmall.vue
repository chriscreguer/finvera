<template>
    <!-- Placeholder for ArticleCardSmall Component -->
    <div class="article-hero-card">
        <a href="">
            <img :src="`/_nuxt/assets/images/article-${article.id}.png`">
            <div class="p-5 pt-3 flex flex-col">
                <ArticleTags :data="article.tags" variant="dark" class="pb-2"/>
                <h2 class="leading-6 font-bold pb-3 text-white">
                    {{ article.title }}
                </h2>
                <div class="flex gap-1 font-serif">
                    <span class="text-sm text-white/90 font-semibold">
                        {{ article.author }}
                    </span>
                    <span class="text-sm text-white/70">
                        |
                    </span>
                    <span class="text-sm text-white/70">
                        {{ article.time }}
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: 'ArticleCardSmall',
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>

.article-hero-card {
    color: rgba(255,255,255,1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    height: min-content;
  }

  .article-hero-card:hover h2{
    color: #B3D9FF;
  }


</style>