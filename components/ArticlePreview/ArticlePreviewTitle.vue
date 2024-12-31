<template>
    <div>
        <h3 v-if="size === 'default' || size === 'medium'" class="article-title" :class="titleClass">{{ title }}</h3>
        <h2 v-else-if="size === 'large'" class="article-title" :class="titleClass">{{ title }}</h2>
        <h4 v-else-if="size === 'small'" class="article-title" :class="titleClass">{{ title }}</h4>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArticleTitle',
    props: {
        title: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: 'default',
        },
        section: {
            type: String,
            default: 'default',
        },
    },
    computed: {
        titleClass() {
            return this.section === 'movingNow' || this.section === 'sentiment'
                ? 'text-white font-bold'
                : 'text-black font-bold';
        },
    },
});
</script>

<style scoped>
.article-title:hover{
    text-decoration: underline;
}
</style>