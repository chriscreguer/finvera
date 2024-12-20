<template>
    <!-- Placeholder for Chips Component -->
    <div class="flex space-x-2">
        <div 
            v-for="chip in data" 
            :key="chip.label" 
            class="px-2 py-1 text-xs font-medium rounded-full" 
            :class="{ 'bg-green-500': chip.up, 'bg-red-500': !chip.up }">
            {{ chip.label }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'ArticleTags',
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
};
</script>