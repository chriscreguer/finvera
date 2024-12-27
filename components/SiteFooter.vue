<template>
    <footer class="bg-dark py-12 h-96">
        <div class="container mx-auto mx-auto px-6 flex flex-col md:flex-row gap-24 h-full">
            <div class="flex-shrink-0 self-start">
                <img src="../assets/images/logo-wordmark.svg" class="w-32 h-full" alt="Logo">
            </div>
            <div class="flex flex-col flex-wrap gap-x-10 gap-y-4">
                <a
                    v-for="category in categories"
                    :key="category"
                    href="#"
                    class="text-white/90 font-sans nav-item">
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
<style scoped>
.nav-item {
    font-family: 'Satoshi', sans-serif;
    color: rgba(255,255,255, .8);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.75rem;
    position: relative;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
    border-radius: 4px;
}
</style>