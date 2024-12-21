<template>
    <!-- Placeholder for Chips Component -->
    <div class="flex space-x-2">
        <div 
            v-for="chip in data"
            :key="chip"
            class="px-2 py-1 text-xs font-medium rounded-full bg-black/15 font-mono font-semibold text-white/80" >
            {{ chip }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
    name: 'ArticleTags',
    props: {
        data: {
            type: Array as PropType<string[]>,
            required: true,
        },
    },
});
</script>
