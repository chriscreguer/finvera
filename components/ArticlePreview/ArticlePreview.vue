<template>
    <div
        class="article-card"
        :class="{ 'article-card-dark': color === 'dark', 'article-card-light': color === 'light' }"
    >
        <a
            href=""
            class="flex gap-y-[15px] gap-x-5"
            :class="[
                { 'py-5 md:py-6': !isFirst && !isLast && section !== 'movingNow' && section !== 'sentiment' },
                { 'py-3': section === 'movingNow' || section === 'sentiment' },
                { 'pt-0 pb-5 md:pb-6': isFirst && !isLast && section !== 'movingNow' },
                { 'pt-5 md:pt-6 pb-0': isLast && !isFirst && section !== 'movingNow' },
                { 'py-0': isLast && isFirst && section !== 'movingNow' },
                { 'flex-col md:flex-row lg:flex-col': imageflex === 'col' && size !=='large'},
                { 'flex-col': imageflex === 'col' && size ==='large'},
                { 'flex-col md:flex-row items-center': imageflex === 'row' }
            ]"
        >
            <ArticleImage
                :image="image"
                :section="section"
                :size="size"
                :imageflex="imageflex"
                :article-id="article.id"
            />

            <!-- Content Section -->
            <div
                class="flex flex-col w-full flex-1"
                :class="{
                    'gap-1':section === 'sentiment',
                    'gap-2':section !== 'sentiment',
                }">
                <ArticleTags
                    v-if="tags"
                    :data="article.tags"
                    :variant="color"
                />

                <ArticleTitle
                    :size="size"
                    :section="section"
                    :title="article.title"
                />

                <ArticleDescription
                    v-if="description"
                    :description="description"
                    :size="size"
                    :section="section"
                    :description-text="article.description || ''"
                />

                <ArticleByline
                    :section="section"
                    :author="article.author"
                    :time="article.time"
                />
            </div>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import ArticleTags from './ArticlePreviewTags.vue';
import ArticleImage from './ArticlePreviewImage.vue';
import ArticleTitle from './ArticlePreviewTitle.vue';
import ArticleDescription from './ArticlePreviewDescription.vue';
import ArticleByline from './ArticlePreviewByline.vue';

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
        ArticleImage,
        ArticleTitle,
        ArticleDescription,
        ArticleByline,
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
        isFirst: {
            type: Boolean,
            default: false,
        },
        isLast: {
            type: Boolean,
            default: false,
        },
        section: {
            type: String,
            required: false,
            default: 'default',
        },
    },
});
</script>
