<template>
    <!-- Placeholder for ArticleCardSmall Component -->
    <div class="bg-black/40 text-white">
        <img :src="`/_nuxt/assets/images/article-${article.id}.png`">
        <div class="p-5 pt-3 flex flex-col">
            <ArticleTags :data="article.tags" class="pb-2"/>
            <h2 class="leading-6 font-bold pb-3">
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