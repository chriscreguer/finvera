<template>
    <div class="flex flex-wrap gap-x-2 items-center text-xs">
        <span
            v-if="section !== 'movingNow'"
            :class="authorClass"
            class="font-sans font-bold"
        >
            {{ author }}
        </span>
        <hr v-if="section !== 'movingNow'" class="vertical-divider" />
        <span :class="timeClass" class="font-sans">
            {{ time }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArticleByline',
    props: {
        section: {
            type: String,
            default: 'default',
        },
        author: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },
    computed: {
        authorClass() {
            return this.section === 'movingNow' || this.section === 'sentiment'
                ? 'text-white/70'
                : 'text-text/80';
        },
        timeClass() {
            return this.section === 'movingNow' || this.section === 'sentiment'
                ? 'text-white'
                : 'text-text/70';
        },
    },
});
</script>
