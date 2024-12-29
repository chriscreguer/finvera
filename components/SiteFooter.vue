<template>
    <footer class="bg-dark py-[70px]">
        <div class="container-custom mx-auto mx-auto px-6 flex flex-col md:flex-row gap-8 items-start">
            <div class="flex gap-32">
                <a
                    href="#"
                    class="flex-shrink-0 self-start">
                    <img src="../assets/images/logo-wordmark.svg" class="w-26 pt-2" alt="Logo">
                </a>
                <div class="flex flex-col md:flex-row gap-10">
                    <div v-for="(column, index) in columns" :key="index" class="flex flex-col">
                        <a
                            v-for="category in column"
                            :key="category"
                            href="#"
                            class="text-white/80 font-sans nav-item py-[7px]">
                            {{ category }}
                        </a>
                    </div>
                </div>
            </div>
            <a
                href="#"
                class="text-white/80 font-sans nav-item">
                Newsletter
            </a>
        </div>
    </footer>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    name: 'SiteFooter',

    setup() {
        const categories = ref([
            'Guidance',
            'Earnings',
            'Dividends',
            'Buybacks',
            'M&A',
            'IPOs',
            'Offers',
            'Tech',
            'Biotech/FDA',
            'Manufacturing & Logistics',
            'Defense',
            'Retail & E-Commerce',
            'Media & Entertainment',
            'Legal',
        ]);

        const columns = ref<string[][]>([]);
        for (let i = 0; i < categories.value.length; i += 7) {
            columns.value.push(categories.value.slice(i, i + 7));
        }

        return {
            columns
        };
    }
};
</script>
<style scoped>
.nav-item {
    color: rgba(255,255,255, .7);
}

.nav-item:hover{
    color: rgba(255, 255, 255, .9);
}
</style>