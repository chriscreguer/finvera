<template>
    <header class="sticky text-white flex items-center h-28 pb-3" :class="{ 'bg-dark h-16': scrolled, 'bg-primary-500 h-24': !scrolled }">
        <div class="px-10 w-screen flex items-center justify-space-between h-full">
            <nav class="flex space-x-6 items-center flex-1 gap-4">
                <MenuItem />
                <div class="font-sans font-semibold">About</div>
            </nav>
            <div v-if="!scrolled" class="self-end">
                <img src="../assets/images/logo-large.svg" />
            </div>
            <div v-else class="flex items-center space-x-4">
                <img src="../assets/images/logo-logomark.svg" />
                <img src="../assets/images/logo-wordmark.svg" class="mx-auto" />
            </div>
            <div class="flex-1"></div>
        </div>
    </header>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue';

export default {
    name: 'SiteHeader',
    components: {
        MenuItem,
    },
};
</script>