<template>
    <div>
        <SiteHeader />
        <!-- Hero Section -->
        <div class="h-min bg-primary-500">
            <div class="container mx-auto flex items-center pt-8 pb-32">
                <div class="grid gap-6 max-w-screen-xl mx-auto" style="grid-template-columns: 514px 346px 310px;">
                    <!-- Left Column -->
                    <div>
                        <img src="../assets/images/article-1.png">
                        <div class="bg-black/40 p-6 text-white">
                            <h1 class="leading-10 font-bold mb-4">2 new forecasts see the S&P 500's bull market roaring in 2025x</h1>
                            <p class="text-xl leading-6 mb-2 text-white/80">Investors are ramping up bets that Trump 2.0 will loosen the federal government’s grip over mortgage giants Freddie Mac (FMCC) and Fannie Mae (FNMA), ending one of the oldest fights on Wall Street.</p>
                            <div class="flex gap-1 font-serif">
                                <span class="text-sm text-white/80 font-semibold">
                                    Cameron Bates
                                </span>
                                <span class="text-sm text-white/70">
                                    |
                                </span>
                                <span class="text-sm text-white/70">
                                    15 mins ago
                                </span>
                            </div>
                        </div>
                    </div>
  
                    <!-- Middle Column -->
                    <div class="flex flex-col gap-6">
                        <ArticleCardSmall v-for="article in middleColumnArticles" :key="article.id" :article="article" />
                    </div>
  
                    <!-- Right Column -->
                    <div>
                        <div 
                            v-for="article in rightColumnArticles" 
                            :key="article.id" 
                            class="text-white text-sm border-b border-white/20 pb-4 flex flex-col gap-1">
                            <ArticleTags :data="article.ArticleTags" class="mb-2" />
                            <h3 class="font-bold">{{ article.title }}</h3>
                            <div class="flex gap-1 font-serif">
                                <span class="text-sm text-white/80 font-semibold">
                                    {{ article.author }}
                                </span>
                                <span class="text-sm text-white/70">
                                    |
                                </span>
                                <span class="text-sm text-white/70">
                                    {{ article.time }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted, watch } from 'vue';
import ArticleCardSmall from '~/components/ArticleCardSmall.vue';
import ArticleTags from '~/components/ArticleTags.vue';
  
export default {
    name: 'HomePage',
    setup() {
        const scrolled = ref(false);
        const middleColumnArticles = ref([
            { id: 2, title: 'FuelCell Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', author: 'John Doe', time: '25 mins ago' },
            { id: 3, title: 'Dow jumps, eyes record after Trump picks Bessent for Treasury', author: 'Jane Smith', time: '2 hours ago' },
        ]);
        const rightColumnArticles = ref([
            { id: 4, title: 'Meta face trial in FTC case aiming to undo Instagram merge', author: 'Bob Brown', time: '21 mins ago' },
            { id: 5, title: 'AI Bot Flips Wall Street on Its Head: Turns $1K into $50K in Record 30 Days', author: 'Charlie Davis', time: '1 hour ago' },
            { id: 6, title: 'Billionaire Tom Steyer Strikes New Jersey Real Estate Deal', author: 'Dana White', time: '2 hours ago' },
            { id: 6, title: 'Eurozone Inflation Rises, Testing ECB\'s Rate Strategies', author: 'Dana White', time: '2 hours ago' },
        ]);
  
        const handleScroll = () => {
            scrolled.value = window.scrollY > window.innerHeight * 0.7;
        };
  
        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });
  
        watch(() => scrolled.value, (newVal) => {
            if (newVal) {
                console.log('Scrolled past hero section.');
            }
        });
  
        return { scrolled, middleColumnArticles, rightColumnArticles };
    },
};
</script>
  
  <style scoped>
  .bg-dark-900 {
    background-color: #1a202c;
  }
  </style>
  