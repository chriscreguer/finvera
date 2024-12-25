<template>
    <footer class="bg-dark py-12 h-96">
        <div class="container mx-auto mx-auto px-6 flex flex-col md:flex-row gap-24 h-full">
            <div class="flex-shrink-0 self-start">
                <img src="../assets/images/logo.svg" class="w-32 h-full" alt="Logo">
            </div>
            <div class="flex flex-col flex-wrap gap-x-10 gap-y-4">
                <a
                    v-for="category in categories"
                    :key="category"
                    href="#"
                    class="text-white/90 font-sans">
                    {{ category }}
                </a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    name: 'SiteFooter',

    setup() {
 
        const categories = ref([
            'Market Trends',
            'Stock Analysis',
            'Small Cap News',
            'Earnings Reports',
            'IPO Updates',
            'Economic Insights',
            'Technology Stocks',
            'Energy Sector',
            'Financial Services',
            'Real Estate',
            'Healthcare',
            'Consumer Goods',
            'Industrial Goods',
            'Cryptocurrency',
            'Forex Updates',
            'Global Markets'
        ]);

        return {
            categories
        };
    }
};
</script>