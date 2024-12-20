<template>
    <!-- MenuItem Component with internal data -->
    <div class="relative group">
        <button class="hover:text-gray-300">Topics</button>
        <div class="absolute top-full mt-2 w-64 bg-white shadow-lg p-4 grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div 
                v-for="item in menuItems" 
                :key="item.id" 
                class="p-2 hover:bg-gray-100 cursor-pointer text-gray-800">
                {{ item.label }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MenuItem',
    data() {
        return {
            menuItems: [
                { id: 1, label: 'Markets' },
                { id: 2, label: 'Technology' },
                { id: 3, label: 'Finance' },
                { id: 4, label: 'Healthcare' },
            ],
        };
    },
};
</script>