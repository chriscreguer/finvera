<template>
    <div>
        <SiteHeader />
        <!-- Hero Section -->
        <div class="h-min bg-primary-500">
            <div class="container mx-auto flex items-center pt-8 pb-32">
                <div class="grid gap-6 max-w-screen-xl mx-auto custom-grid">
                    <!-- Left Column -->
                    <div class="left-column relative">
                        <div class="decorative-line"></div>
                        <img src="../assets/images/article-1.png">
                        <div class="bg-black/40 p-6 pt-4 text-white">
                            <ArticleTags :data="leftColumnArticle.tags" class="mb-2" />
                            <h1 class="leading-10 font-bold mb-4">{{ leftColumnArticle.title }}</h1>
                            <p class="text-xl leading-6 mb-2 text-white/70">{{ leftColumnArticle.description }}</p>
                            <div class="flex gap-1 font-serif">
                                <span class="text-sm text-white/90 font-semibold">
                                    {{ leftColumnArticle.author }}
                                </span>
                                <span class="text-sm text-white/70">
                                    |
                                </span>
                                <span class="text-sm text-white/70">
                                    {{ leftColumnArticle.time }}
                                </span>
                            </div>
                        </div>
                    </div>
  
                    <!-- Middle Column -->
                    <div class="middle-column space-y-6">
                        <ArticleCardSmall v-for="article in middleColumnArticles" :key="article.id" :article="article" />
                    </div>
  
                    <!-- Right Column -->
                    <div class="flex flex-col gap-4">
                        <h3 class="text-white pb-1">Latest News</h3>
                        <div 
                            v-for="(article, index) in rightColumnArticles" 
                            :key="article.id" 
                            class="rounded"
                            :class="['text-white text-sm pb-4 flex flex-col gap-1', { 'border-b border-white/20': index !== rightColumnArticles.length - 1 }]">
                            <ArticleTags :data="article.tags" class="mb-1" />
                            <h3 class="font-bold">{{ article.title }}</h3>
                            <div class="flex gap-1 font-serif pt-1">
                                <span class="text-sm text-white/90 font-semibold">
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

<script lang="ts">
import { ref, onMounted, watch } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import ArticleCardSmall from '@/components/ArticleCardSmall.vue';
import ArticleTags from '@/components/ArticleTags.vue';

export default {
    name: 'HomePage',
    components: {
        SiteHeader,
        ArticleCardSmall,
        ArticleTags,
    },
    setup() {
        const scrolled = ref(false);
        const middleColumnArticles = ref([]);
        const rightColumnArticles = ref([]);
        const leftColumnArticle = ref({
            title: "2 new forecasts see the S&P 500's bull market roaring in 2025x",
            description: 'Investors are ramping up bets that Trump 2.0 will loosen the federal government’s grip over mortgage giants Freddie Mac (FMCC) and Fannie Mae (FNMA), ending one of the oldest fights on Wall Street.',
            author: 'Cameron Bates',
            time: '12 minutes ago',
            tags: ['Forecast', 'S&P 500']
        });
    
        const fetchArticles = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        middleColumnArticles: [
                            { id: 2, title: 'FuelCell Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', author: 'John Doe', time: '25 mins ago', tags: ['Hydrogen', 'Energy'] },
                            { id: 3, title: 'Dow jumps, eyes record after Trump picks Bessent for Treasury', author: 'Jane Smith', time: '2 hours ago', tags: ['Stock Market', 'Economy'] },
                        ],
                        rightColumnArticles: [
                            { id: 4, title: 'Meta face trial in FTC case aiming to undo Instagram merge', author: 'Bob Brown', time: '21 mins ago', tags: ['Meta', 'FTC', 'Instagram'] },
                            { id: 5, title: 'AI Bot Flips Wall Street on Its Head: Turns $1K into $50K in Record 30 Days', author: 'Charlie Davis', time: '1 hour ago', tags: ['AI', 'Wall Street'] },
                            { id: 6, title: 'Billionaire Tom Steyer Strikes New Jersey Real Estate Deal', author: 'Dana White', time: '2 hours ago', tags: ['Real Estate'] },
                            { id: 7, title: 'Eurozone Inflation Rises, Testing ECB\'s Rate Strategies', author: 'Dana White', time: '2 hours ago', tags: ['Eurozone'] },
                        ],
                    });
                }, 1000); // Simulate a 1-second delay
            });
        };
    
        const handleScroll = () => {
            scrolled.value = window.scrollY > window.innerHeight * 0.7;
        };
    
        onMounted(async () => {
            window.addEventListener('scroll', handleScroll);
            const articles = await fetchArticles();
            middleColumnArticles.value = articles.middleColumnArticles;
            rightColumnArticles.value = articles.rightColumnArticles;
        });
    
        watch(() => scrolled.value, (newVal) => {
            if (newVal) {
                console.log('Scrolled past hero section.');
            }
        });
    
        return { scrolled, middleColumnArticles, rightColumnArticles, leftColumnArticle };
    },
};
</script>

<style scoped>
.custom-grid {
    display: grid;
    grid-template-columns: 514px 346px 310px;
    gap: 1.5rem; /* Adjust the gap as needed */
}

.decorative-line {
    position: absolute;
    left: -48px;
    top: 50%;
    width: 3px; /* Line width */
    height: calc(100% + 24px); /* Adjust this height as needed */
    background: repeating-linear-gradient(
        to bottom,
        rgba(101, 178, 255, 1),
        rgba(101, 178, 255, 1) 6px, /* Dash length */
        transparent 6px, /* Gap start */
        transparent 13px /* Gap end */
    );
}

.decorative-line::before,
.decorative-line::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
}

.decorative-line::before {
    background-color: rgba(101, 178, 255, .2);
}

.decorative-line::after {
    background-color: rgba(101, 178, 255, .3);
}

.decorative-line::before {
    width: 32px;
    height: 32px;
    top: -20px;
}

.decorative-line::after {
    width: 14px;
    height: 14px;
    top: -11px;
}

</style>