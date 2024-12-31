<template>
    <p
        v-if="description && size === 'large'"
        :class="descriptionClass"
        class="font-sans leading-tight"
    >
        {{ descriptionText }}
    </p>
    <p
        v-if="description && size !== 'large'"
        :class="['font-sans leading-tight hidden lg:block text-[14px]', descriptionClass]"
    >
        {{ descriptionText }}
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArticleDescription',
    props: {
        description: {
            type: Boolean,
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
        descriptionText: {
            type: String,
            required: true,
        },
    },
    computed: {
        descriptionClass() {
            return this.section === 'movingNow' || this.section === 'sentiment'
                ? 'text-white'
                : 'text-black/70';
        },
    },
});
</script>
