<template>
    <div class="tags font-bold font-mono text-xs">
        <span
            v-for="(tag, index) in data"
            :key="index"
            class="flex gap-1"
            :class="[
                'tag px-2 py-0.5 rounded-full',
                variantClasses
            ]"
        >
            <span>{{ tag.text }}</span>
            <div v-if="tag.trend !== undefined" class="flex gap-1">
                <div :class="trendClasses(tag.trend)">
                    <span>{{ tag.trend > 0 ? '+' : '' }}{{ tag.trend.toFixed(1) }}</span>
                    <span class="font-serif">%</span>
                </div>
            </div>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Tag {
    text: string | undefined;
    trend?: number | undefined;
}

export default defineComponent({
    name: 'ArticleTags',
    props: {
        data: {
            type: Array as () => Tag[],
            required: true,
            default: () => [],
        },
        variant: {
            type: String,
            required: false,
            default: 'default',
        },
    },
    computed: {
        variantClasses() {
            switch (this.variant) {
            case 'dark':
                return 'bg-black/15 text-blue-700';
            default:
                return 'bg-primary-100 text-secondary';
            }
        },
    },
    methods: {
        trendClasses(trend: number) {
            switch (this.variant) {
            case 'dark':
                return trend > 0 ? 'text-green' : 'text-red';
            default:
                return trend > 0 ? 'text-light-green' : 'text-light-red';
            }
        },
    },
});
</script>

<style scoped>
.tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}
</style>
