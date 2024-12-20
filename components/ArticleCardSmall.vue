<template>
    <!-- Placeholder for ArticleCardSmall Component -->
    <div class="bg-black/40 text-white">
        <img :src="`/_nuxt/assets/images/article-${article.id}.png`">
        <div class="p-4 flex flex-col gap-3">
            <h2 class="leading-6 font-bold">
                {{ article.title }}
            </h2>
            <div class="flex gap-1 font-serif">
                <span class="text-sm text-white/80 font-semibold">
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