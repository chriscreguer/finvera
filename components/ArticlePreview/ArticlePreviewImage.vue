<template>
    <div
        v-if="image"
        class="relative overflow-hidden"
        :class="imageClass"
    >
        <img
            class="absolute inset-0 object-cover w-full h-full"
            :src="`/_nuxt/assets/images/article-${articleId}.png`"
            loading="lazy"
        />
    </div>
    <div
        v-if="!image && section==='hero' && size!=='small'"
        class="lg:hidden relative overflow-hidden"
        :class="imageClass"
    >
        <img
            class="absolute inset-0 object-cover w-full h-full"
            :src="`/_nuxt/assets/images/article-${articleId}.png`"
            loading="lazy"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArticleImage',
    props: {
        image: Boolean,
        section: String,
        size: String,
        imageflex: String,
        articleId: Number,
    },
    computed: {
        imageClass() {
            if (this.section === 'body') return 'w-full md:w-1/2 h-36';
            const sizeClass =
                this.size === 'large' ? 'h-60' : this.size === 'default' || this.size === 'medium' ? 'h-48 md:h-[136px]'  : '';
            const flexClass =
                this.imageflex === 'row' && this.size !== 'medium'
                    ? 'w-full md:w-60'
                    : this.imageflex === 'row' && this.size === 'medium'
                        ? 'w-full md:w-72'
                        : this.imageflex === 'col' && this.size === 'large'
                            ? 'w-full lg:w-full'
                            : this.imageflex === 'col' && this.size !== 'large'
                                ? 'w-full md:w-60 lg:w-full'
                                : '';
            return `${sizeClass} ${flexClass}`;
        },
    },
});
</script>
