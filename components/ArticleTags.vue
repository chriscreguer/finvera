<template>
    <ul class="flex ga-2 font-bold uppercase font-sans gap-2 text-xs flex text-black/80 tracking-wider">
        <div
            v-for="(tag, index) in data"
            :key="index"
            class="flex items-center gap-2"
        >
            <hr v-if="index !== 0" class="vertical-divider">
            <li class="flex gap-0.5">
                <span>{{ tag.text }}</span>
                <div v-if="tag.trend !== undefined" class="flex gap-1">
                    <div :class="trendClasses(tag.trend)">
                        <span>{{ tag.trend > 0 ? '+' : '' }}{{ tag.trend.toFixed(1) }}</span>
                        <span class="font-serif">%</span>
                    </div>
                </div>
            </li>
        </div>
    </ul>
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

.vertical-divider {
    width: 1px;
    background-color: rgba(37, 51, 73, .5);
    height: 10px;
}

</style>
