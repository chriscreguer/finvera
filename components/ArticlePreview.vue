<template>
    <div
        class="article-card"
        :class="[
            {'article-card-dark': color === 'dark'}, 
            {'article-card-light': color === 'light'},
        ]">
        <a 
            href="" 
            class="flex gap-y-[15px] gap-x-5" 
            :class="[
                {'py-5 md:py-6': section !== 'movingNow' && section !== 'sentiment' && !isFirst && !isLast, 'py-3': section === 'movingNow' || section === 'sentiment', 'pt-0 pb-5 md:pb-6': isFirst && section!=='movingNow', 'pt-5 med:pt-6 pb-0': isLast && section!=='movingNow'},
                {'flex-col': size === 'large' && imageflex === 'col', 'flex-col md:flex-row items-center': size !== 'large' && imageflex === 'row'}, 
                {'flex-col md:flex-row lg:flex-col items-center': size !== 'large' && imageflex === 'col'}
            ]"
        >
            <div v-if="image && section !=='body'" class="relative overflow-hidden" :class="[{'h-60': size === 'large'}, {'h-48 md:h-32': size === 'default'}, {'w-full md:w-60': size !== 'large' && imageflex === 'row'}, {'w-full md:w-60 lg:w-full': size !== 'large' && imageflex === 'col'}]">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    :src="`/_nuxt/assets/images/article-${article.id}.png`"
                    loading="lazy">
            </div>
            <div v-if="image && section ==='body'" class="relative overflow-hidden w-1/2 h-36">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    :src="`/_nuxt/assets/images/article-${article.id}.png`"
                    loading="lazy">
            </div>
            <div v-if="!image && size==='default'" class="block lg:hidden relative overflow-hidden h-48 md:h-32" :class="[{'w-full md:w-60': imageflex === 'row'}, {'w-full md:w-60 lg:w-full':  imageflex === 'col'}]">
                <img
                    class="absolute inset-0 object-cover w-full h-full"
                    :src="`/_nuxt/assets/images/article-${article.id}.png`"
                    loading="lazy">
            </div>
            <div class="flex flex-col w-full" :class="[{'gap-2': section !== 'movingNow' && section !== 'sentiment'},{'flex-1': imageflex === 'row'}, {'flex-1': imageflex === 'col'}, {'gap-1': size === 'small', 'gap-2': size !== 'small'}]">
                <div class="flex flex-col">
                    <ArticleTags
                        v-if="tags"
                        :data="article.tags"
                        :variant="color"
                        class="pb-2"/>
                    <h3 v-if="size === 'default'" :class="{'text-white': section === 'movingNow' || section === 'sentiment', 'text-black': section !== 'movingNow' && section !== 'sentiment'}">
                        {{ article.title }}
                    </h3>
                    <h2 v-else-if="size === 'large'" :class="{'text-white': section === 'movingNow' || section === 'sentiment', 'text-black': section !== 'movingNow' && section !== 'sentiment'}">
                        {{ article.title }}
                    </h2>
                    <h4 v-else-if="size === 'small'" :class="{'text-white': section === 'movingNow' || section === 'sentiment', 'text-black': section !== 'movingNow' && section !== 'sentiment'}">
                        {{ article.title }}
                    </h4>
                </div>
                <div class="flex flex-col" :class="{'gap-2': section !== 'movingNow' && section !== 'sentiment'}">
                    <p v-if="description && size==='large'" :class="{'text-white': section === 'movingNow' || section === 'sentiment', 'text-black/70 ': section !== 'movingNow' && section !== 'sentiment'}" class="font-sans leading-tight ">
                        {{ article.description }}
                    </p>
                    <p v-if="description && size!=='large'" :class="['font-sans leading-tight hidden lg:block', {'text-white': section === 'movingNow' || section === 'sentiment', 'text-black/70': section !== 'movingNow' && section !== 'sentiment'}, {'text-sm': size === 'default'}]">
                        {{ article.description }}
                    </p>
                    <div class="flex flex-wrap gap-x-2 items-center text-xs">
                        <span v-if="section!=='movingNow'" :class="{'text-white/70': section === 'movingNow' || section === 'sentiment', 'text-text/80': section !== 'movingNow' && section !== 'sentiment'}" class="font-sans font-bold">
                            {{ article.author }}
                        </span>
                        <hr v-if="section!=='movingNow'" class="vertical-divider">
                        <span :class="{'text-white': section === 'movingNow' || section === 'sentiment', 'text-text/70': section !== 'movingNow' && section !== 'sentiment'}" class="font-sans">
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
        section: {
            type: String,
            required: false,
            default: 'default',
        },
    },
});
</script>

<style scoped>
.article-card-dark {
    color: rgba(255, 255, 255, 1);
}

.article-card h2:hover , .article-card h3:hover , .article-card h4:hover{
   text-decoration: underline;
}

</style>
