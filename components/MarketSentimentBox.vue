<template>
    <div class="market-sentiment-box bg-black/20">
        <!-- Header Section -->
        <div class="header bg-black/30 p-5 relative flex flex-col gap-1">
            <h3 class="font-sans font-bold text-xs text-white/90 tracking-[0.5px] uppercase">
                {{ company.company }} ({{ company.ticker[0]?.text }})
                <span :class="company.ticker[0] && company.ticker[0].trend > 0 ? 'text-green' : 'text-red'"
                >
                    {{ company.ticker[0]?.trend > 0 ? '+' : '' }}{{ company.ticker[0]?.trend }}%
                </span>
            </h3>
            <p 
                class="font-sans text-xs flex items-center gap-1.5 tracking-[0.5px] uppercase font-bold"
                :class="{
                    'text-green': company.sentiment > 60,
                    'text-red': company.sentiment <= 40,
                    'text-white/80': company.sentiment > 40 && company.sentiment <= 60
                }"
            >
                <svg
                    v-if="company.sentiment > 80"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-smile">
                    <circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line
                        x1="9"
                        y1="9"
                        x2="9.01"
                        y2="9"></line><line
                            x1="15"
                            y1="9"
                            x2="15.01"
                            y2="9"></line>
                </svg>
                <svg
                    v-if="company.sentiment > 40 && company.sentiment <= 60"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-meh">
                    <circle cx="12" cy="12" r="10"></circle><line
                        x1="8"
                        y1="15"
                        x2="16"
                        y2="15"></line><line
                            x1="9"
                            y1="9"
                            x2="9.01"
                            y2="9"></line><line
                                x1="15"
                                y1="9"
                                x2="15.01"
                                y2="9"></line>
                </svg>
                <svg
                    v-if="company.sentiment <= 40"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-frown">
                    <circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line
                        x1="9"
                        y1="9"
                        x2="9.01"
                        y2="9"></line><line
                            x1="15"
                            y1="9"
                            x2="15.01"
                            y2="9"></line>
                </svg>
                <span>
                    {{
                        company.sentiment > 80 ? 'Very Positive' :
                        company.sentiment > 60 ? 'Positive' :
                        company.sentiment > 40 ? 'Mixed' :
                        company.sentiment > 20 ? 'Negative' :
                        'Very Negative'
                    }}
                </span>
            </p>

            <div class="absolute top-0 right-0 bg-black/20 h-full px-5 py-1 font-sans text-2xl font-bold flex items-center">
                <div>
                    <span class="mr-0.5">{{ company.sentiment }}</span>
                    <span class="text-sm font-sans text-white/80">%</span>
                </div>
            </div>
        </div>

        <!-- Quotes Section -->
        <div class="px-5 py-3">
            <articlePreview 
                v-for="quote in company.quotes"
                :key="quote.id"
                :article="quote"
                type="quote"
                :image="false"
                :description="true"
                :tags="false"
                section="sentiment"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import ArticlePreview from '@/components/ArticlePreview.vue';


interface Quote {
    id: number;
    title: string;
    description: string;
    author: string; // Username
    time: string; // Social media platform
    tags: { text: string; trend?: number }[];
}

interface Ticker {
    text: string;
    trend: number;
}

interface Company {
    id: number;
    company: string;
    ticker: Ticker[];
    sentiment: number;
    quotes: Quote[];
}

export default defineComponent({
    name: 'MarketSentimentBox',
    components: {
        ArticlePreview,
    },
    props: {
        company: {
            type: Object as PropType<Company>,
            required: true,
        },
    },
    computed: {
        sentimentColor() {
            if (this.company.sentiment > 60) return 'green';
            if (this.company.sentiment <= 40) return 'red';
            return 'white';
        },
    },
    methods: {
        getSentimentIcon(sentiment: number): string {
            if (sentiment > 80) return '/_nuxt/assets/images/icons/positive.svg';
            if (sentiment > 60) return '/_nuxt/assets/images/icons/positive.svg';
            if (sentiment > 40) return '/_nuxt/assets/images/icons/neutral.svg';
            if (sentiment > 20) return '/_nuxt/assets/images/icons/negative.svg';
            return '/_nuxt/assets/images/icons/negative.svg';
        },
    },
});
</script>
