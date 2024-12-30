<template>
    <!-- Placeholder for articlePreview Component -->
    <div class="article-card" :class="[{'article-card-dark': color === 'dark'}, {'article-card-light': color === 'light'}]">
        <a 
            href="" 
            class="flex gap-y-[15px] gap-x-5" 
            :class="[
                {'py-5 md:py-6': !isFirst && !isLast, 'pt-0 pb-5 md:pb-6': isFirst, 'pt-5 med:pt-6 pb-0': isLast},
                {'flex-col': size === 'large' && imageflex === 'col', 'flex-col md:flex-row items-center': size !== 'large' && imageflex === 'row'}, 
                {'flex-col': size === 'large' && imageflex === 'col', 'flex-col md:flex-row lg:flex-col items-center': size !== 'large' && imageflex === 'col'}
            ]"
        >
            <div v-if="image" class="relative overflow-hidden" :class="[{'h-60': size === 'large'}, {'h-48 md:h-32': size === 'default'}, {'w-full md:w-60': size !== 'large' && imageflex === 'row'}, {'w-full md:w-60 lg:w-full': size !== 'large' && imageflex === 'col'}]">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    :src="`/_nuxt/assets/images/article-${article.id}.png`"
                    loading="lazy">
            </div>
            <div v-if="!image && size==='default'" class="block lg:hidden relative overflow-hidden" :class="[ {'h-48 md:h-32': size === 'default'}, {'w-full md:w-60': imageflex === 'row'}, {'w-full md:w-60 lg:w-full':  imageflex === 'col'}]">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    :src="`/_nuxt/assets/images/article-${article.id}.png`"
                    loading="lazy">
            </div>
            <div class="flex flex-col w-full" :class="[{'flex-1': imageflex === 'row'}, {'flex-1': imageflex === 'col'}, {'gap-1': size === 'small', 'gap-2': size !== 'small'}]">
                <div class="flex flex-col">
                    <ArticleTags
                        v-if="tags"
                        :data="article.tags"
                        :variant="color"
                        class="pb-2"/>
                    <h3 v-if="size === 'default'" class="text-black">
                        {{ article.title }}
                    </h3>
                    <h2 v-else-if="size === 'large'" class="text-black">
                        {{ article.title }}
                    </h2>
                    <h4 v-else-if="size === 'small'" class="text-black">
                        {{ article.title }}
                    </h4>
                </div>
                <div class="flex flex-col gap-2.5">
                    <p v-if="description && size==='large'" class="font-sans leading-tight text-black/70">{{ article.description }}</p>
                    <p v-if="description && size!=='large'" class="font-sans leading-tight text-black/70 hidden lg:block" :class="[{'text-sm': size === 'default'}]">{{ article.description }}</p>
                    <div class="flex flex-wrap gap-x-2 items-center text-xs">
                        <span class="text-text/80 font-sans font-bold">
                            {{ article.author }}
                        </span>
                        <hr class="vertical-divider">
                        <span class="font-sans text-text/70">
                            {{ article.time }}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import ArticleTags from '@/components/ArticleTags.vue';

interface Tag {
    text: string;
    ticker?: string;
    trend?: number;
}

interface Article {
    id: number;
    title: string;
    description?: string;
    author: string;
    time: string;
    tags: Tag[];
}

export default defineComponent({
    name: 'ArticlePreview',
    components: {
        ArticleTags,
    },
    props: {
        article: {
            type: Object as PropType<Article>,
            required: true,
        },
        image: {
            type: Boolean,
            required: false,
            default: true,
        },
        imageflex: {
            type: String,
            required: false,
            default: 'col',
        },
        description: {
            type: Boolean,
            required: false,
            default: false,
        },
        tags: {
            type: Boolean,
            required: false,
            default: true,
        },
        color: {
            type: String,
            required: false,
            default: 'light',
        },
        size: {
            type: String,
            required: false,
            default: 'default',
        },
        font: {
            type: String,
            required: false,
            default: 'serif',
        },
        isFirst: Boolean,
        isLast: Boolean,
    },
});
</script>

<style scoped>
.article-card-dark {
    color: rgba(255, 255, 255, 1);
}

.article-card h2:hover , .article-card h3:hover , .article-card h4:hover{
   text-decoration: underline;
  /*  color: #002c6e; */
}

/* .article-card:hover img{
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}
     */
</style>