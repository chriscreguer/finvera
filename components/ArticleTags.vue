<template>
    <div class="tags font-bold font-mono text-xs">
        <span
            v-for="(tag, index) in data"
            :key="index"
            class="tag bg-black/15 px-2 py-0.5 rounded-full text-white/80"
        >
            <span v-if="tag.trend === undefined">{{ tag.text }}</span>
            <div
                v-if="tag.trend !== undefined"
                class="flex gap-1"
            >
                {{ tag.text }}
                <div
                    :class="{
                        'text-green': tag.trend > 0,
                        'text-red': tag.trend < 0
                    }">
                    <span> {{ tag.trend > 0 ? '+' : '' }}{{ tag.trend.toFixed(1) }}</span>
                
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