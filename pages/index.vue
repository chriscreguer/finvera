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
                        <div class="article-hero-card">
                            <a href="">
                                <img src="../assets/images/article-1.png">
                                <div v-if="leftColumnArticle" class="p-6 pt-4">
                                    <ArticleTags :data="leftColumnArticle.tags" class="mb-2" />
                                    <h1 class="leading-9.5 font-bold mb-4 text-white">{{ leftColumnArticle.title }}</h1>
                                    <p class="text-xl leading-6 mb-2 text-white/70">{{ leftColumnArticle.description }}</p>
                                    <div class="flex gap-1 font-serif">
                                        <span class="text-sm text-white/90 font-semibold">
                                            {{ leftColumnArticle.author }}
                                        </span>
                                        <span class="text-sm text-white/70">|</span>
                                        <span class="text-sm text-white/70">{{ leftColumnArticle.time }}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
  
                    <!-- Middle Column -->
                    <div class="middle-column space-y-6 flex flex-col">
                        <ArticleCardSmall 
                            v-for="article in middleColumnArticles" 
                            :key="article.id" 
                            :article="article" 
                        />
                    </div>
  
                    <!-- Right Column -->
                    <div class="flex flex-col gap-4">
                        <h3 class="text-white pb-1">Latest News</h3>
                        <div 
                            v-for="(article, index) in rightColumnArticles" 
                            :key="article.id" 
                            class="rounded article-hero text-white text-sm pb-4 flex flex-col gap-1"
                            :class="[{ 'border-b border-white/20': index !== rightColumnArticles.length - 1 }]">
                            <a href="">
                                <ArticleTags :data="article.tags" class="mb-1" />
                                <h3 class="font-bold text-white">{{ article.title }}</h3>
                                <div class="flex gap-1 font-serif pt-1">
                                    <span class="text-sm text-white/90 font-semibold">
                                        {{ article.author }}
                                    </span>
                                    <span class="text-sm text-white/70">|</span>
                                    <span class="text-sm text-white/70">{{ article.time }}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { ref, onMounted } from 'vue';
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
        const leftColumnArticle = ref<{
            id: number;
            title: string;
            description?: string;
            author: string;
            time: string;
            tags: { text?: string; trend?: number; }[];
        } | null>(null);
        const middleColumnArticles = ref<Array<{ id: number, title: string, description?: string, author: string, time: string, tags: Array<{ text?: string, trend?: number}> }>>([]);
        const rightColumnArticles = ref<Array<{ id: number, title: string, description?: string, author: string, time: string, tags: Array<{ text?: string, trend?: number}> }>>([]);
  
        const fetchArticles = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { 
                            id: 1, 
                            title: '2 new forecasts see the S&P 500\'s bull market roaring in 2025', 
                            description: 'Investors are ramping up bets that Trump 2.0 will loosen the federal government’s grip over mortgage giants Freddie Mac (FMCC) and Fannie Mae (FNMA), ending one of the oldest fights on Wall Street.', 
                            author: 'John Doe', 
                            time: '25 mins ago', 
                            tags: [
                                { text: 'SP500', trend: +3.2 },
                                { text: 'Economy' },
                                { text: 'Finance' },
                            ],
                        },
                        { 
                            id: 2, 
                            title: 'FuelCell Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', 
                            author: 'Cameron Bates', 
                            time: '12 mins ago', 
                            tags: [
                                { text: 'FCEL', trend: +1.5 },
                                { text: 'KHNP', trend: -0.3 },
                                { text: 'Energy' },
                            ],
                        },
                        { 
                            id: 3, 
                            title: 'Dow jumps, eyes record after Trump picks Bessent for Treasury', 
                            author: 'Jane Smith', 
                            time: '2 hours ago', 
                            tags: [
                                { text: 'DOW', trend: +0.9 },
                                { text: 'Stocks' },
                            ],
                        },
                        { 
                            id: 4, 
                            title: 'Meta faces trial in FTC case aiming to undo Instagram merge', 
                            author: 'Bob Brown', 
                            time: '21 mins ago', 
                            tags: [
                                { text: 'META', trend: +1.2 },
                                { text: 'FTC' },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 5, 
                            title: 'AI Bot Flips Wall Street on Its Head: Turns $1K into $50K in Record 30 Days', 
                            author: 'Finvera Newsroom', 
                            time: '21 mins ago', 
                            tags: [
                                { text: 'AI' },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 6, 
                            title: 'Billionaire Tom Steyer Strikes New Jersey Real Estate Deal', 
                            author: 'Finvera Newsroom', 
                            time: '21 mins ago', 
                            tags: [
                                { text: 'FTC' },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 7, 
                            title: 'Eurozone Inflation Rises, Testing ECB\'s Rate Strategies', 
                            author: 'Finvera Newsroom', 
                            time: '21 mins ago', 
                            tags: [
                                { text: 'Interest Rates' },
                                { text: 'Inflation' },
                            ],
                        },
                    ].map(article => ({
                        ...article,
                        tags: article.tags.map(tag => ({
                            ...tag,
                            text: tag.text || ''
                        }))
                    })));
                }, 1000); // Simulate a 1-second delay
            });
        };
  
        const distributeArticles = (articles: Array<{ id: number, title: string, description?: string, author: string, time: string, tags: Array<{ text?: string, trend?: number }> }>) => {
            if (articles.length > 0) leftColumnArticle.value = articles[0];
            if (articles.length > 1) middleColumnArticles.value = articles.slice(1, 3);
            if (articles.length > 3) rightColumnArticles.value = articles.slice(3);
        };
  
        onMounted(async () => {
            const articles = await fetchArticles() as Array<{ id: number, title: string, description?: string, author: string, time: string, tags: Array<{ text?: string, trend?: number }> }>;
            distributeArticles(articles);
        });
  
        return { leftColumnArticle, middleColumnArticles, rightColumnArticles };
    },
};
</script>
  
  <style scoped>
  .custom-grid {
    display: grid;
    grid-template-columns: 514px 346px 310px;
    gap: 1.5rem;
  }
  
  .decorative-line {
    position: absolute;
    left: -48px;
    top: 50%;
    width: 3px;
    height: calc(100% + 24px);
    background: repeating-linear-gradient(
      to bottom,
      rgba(101, 178, 255, 1),
      rgba(101, 178, 255, 1) 6px,
      transparent 6px,
      transparent 13px
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
    width: 32px;
    height: 32px;
    top: -20px;
  }
  
  .decorative-line::after {
    background-color: rgba(101, 178, 255, .3);
    width: 14px;
    height: 14px;
    top: -11px;
  }

  .article-hero-card {
    color: rgba(255,255,255,1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    height: min-content;
  }

  .article-hero-card:hover{
    background-color: rgba(0, 0, 0, 0.45);
  }

  .article-hero-card:hover h1{
    color: #B3D9FF;
  }

  .article-hero{
    color: rgba(255,255,255,1);
  }

  .article-hero:hover h3{
    color: #B3D9FF;
  }
  </style>
  