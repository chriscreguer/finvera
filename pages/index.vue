<template>
    <div>
        <SiteHeader />
        <!-- Hero Section -->
        <div class="h-min bg-primary-500 hero">
            <div class="container-custom mx-auto mx-auto px-6 flex items-center pt-8 pb-12 pt-12">
                <div class="grid gap-6 custom-grid">
                    <!-- Left Column -->
                    <div class="left-column relative">
                        <div class="decorative-line"></div>
                        <div class="article-hero-card">
                            <a href="[articleSlug]">
                                <img src="../assets/images/article-1.png">
                                <div v-if="leftColumnArticle" class="p-6 pt-4">
                                    <ArticleTags variant="dark" :data="leftColumnArticle.tags" class="mb-2" />
                                    <h1 class="leading-9.5 font-bold mb-4 text-white">{{ leftColumnArticle.title }}</h1>
                                    <p class="text-lg leading-6 mb-2 text-white/70">{{ leftColumnArticle.description }}</p>
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
                                <h3 class="font-bold text-white pb-2">{{ article.title }}</h3>
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
        <!-- Latest Analysis Section -->
        <div class="pb-12 relative py-10">
            <div class="absolute inset-x-0 top-1/4 bg-primary-101 h-3/4"></div>
            <div class="container-custom mx-auto mx-auto px-6 relative">
                <div class="flex justify-between items-center py-4">
                    <h2 class="text-lg font-bold">Latest Analysis</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div 
                        v-for="(article) in analysisArticles" 
                        :key="article.id" 
                        class="overflow-hidden">
                        <a href="" class="article-card">
                            <img :src="`/_nuxt/assets/images/article-${article.id}.png`" class="w-full h-48 object-cover">
                            <div class="flex flex-col gap-3">
                                <ArticleTags
                                    :data="article.tags"
                                    class="pt-4" />
                                <h3 class="font-bold">
                                    {{ article.title }}
                                </h3>
                                <p class="text-black/80 leading-5 text-sm">{{ article.description }}</p>
                                <div class="flex gap-1 font-serif text-sm">
                                    <span class="text-black/80 font-semibold">
                                        {{ article.author }}
                                    </span>
                                    <span class="text-black/80">|</span>
                                    <span class="text-black/60">{{ article.time }}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Latest News Section -->
        <div class="py-12 bg-white">
            <div class="container-custom mx-auto px-6">
                <h2 class="text-lg font-bold pb-4">Latest News</h2>
                <div class="grid grid-cols-[1fr_2fr_1fr] gap-6">
                    <!-- First Column -->
                    <div class="flex flex-col gap-2">
                        <a href="" class="py-2 flex flex-col gap-2 article-card">
                            <img :src="`/_nuxt/assets/images/article-${latestArticles[0]?.id || 1}.png`" class="w-full h-48 object-cover">
                            <div class="pt-2 flex flex-col gap-2 border-b border-black/20 pb-4">
                                <h3 class="font-bold">{{ latestArticles[0]?.title }}</h3>
                                <div class="flex gap-1 font-serif text-sm">
                                    <span class="text-black/80 font-semibold">{{ latestArticles[0]?.author }}</span>
                                    <span class="text-black/80">|</span>
                                    <span class="text-black/60">{{ latestArticles[0]?.time }}</span>
                                </div>
                            </div>
                        </a>
                        <a href="" class="py-2 flex flex-col gap-2 article-card">
                            <img :src="`/_nuxt/assets/images/article-${latestArticles[1]?.id || 2}.png`" class="w-full h-48 object-cover">
                            <div class="pt-2 flex flex-col gap-2 border-b border-black/20 pb-4">
                                <h3 class="font-bold">{{ latestArticles[1]?.title }}</h3>
                                <div class="flex gap-1 font-serif text-sm">
                                    <span class="text-black/80 font-semibold">{{ latestArticles[1]?.author }}</span>
                                    <span class="text-black/80">|</span>
                                    <span class="text-black/60">{{ latestArticles[1]?.time }}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <!-- Second Column -->
                    <div class="flex flex-col gap-2">
                        <a href="" class="py-2 flex flex-col gap-2 article-card">
                            <img :src="`/_nuxt/assets/images/article-${latestArticles[3]?.id || 1}.png`" class="w-full h-48 object-cover">
                            <div class="pt-2 flex flex-col gap-2 border-b border-black/20 pb-4">
                                <h3 class="font-bold">{{ latestArticles[3]?.title }}</h3>
                                <div class="flex gap-1 font-serif text-sm">
                                    <span class="text-black/80 font-semibold">{{ latestArticles[3]?.author }}</span>
                                    <span class="text-black/80">|</span>
                                    <span class="text-black/60">{{ latestArticles[3]?.time }}</span>
                                </div>
                            </div>
                        </a>
                        <div class="flex flex-col gap-2">
                            <a
                                v-for="(article, index) in latestArticles.slice(4, 6)"
                                :key="index"
                                href=""
                                class="py-4 flex flex-col gap-2 article-card"
                                :class="[{ 'border-b border-black/20': index !== latestArticles.slice(4, 6).length - 1 }]">
                                <h3 class="font-bold">{{ article.title }}</h3>
                                <div class="flex gap-1 font-serif text-sm">
                                    <span class="text-black/80 font-semibold">{{ article.author }}</span>
                                    <span class="text-black/80">|</span>
                                    <span class="text-black/60">{{ article.time }}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- Third Column -->
                    <div class="flex flex-col gap-2">
                        <a href="" class="py-2 flex flex-col gap-2 article-card">
                            <div class="pt-2 flex flex-col gap-2 border-b border-black/20 pb-4">
                                <h3 class="font-bold">{{ latestArticles[7]?.title }}</h3>
                                <div class="flex gap-1 font-serif text-sm">
                                    <span class="text-black/80 font-semibold">{{ latestArticles[7]?.author }}</span>
                                    <span class="text-black/80">|</span>
                                    <span class="text-black/60">{{ latestArticles[7]?.time }}</span>
                                </div>
                            </div>
                        </a>
                        <div class="flex flex-col gap-2">
                            <a
                                v-for="(article, index) in latestArticles.slice(8, 10)"
                                :key="index"
                                href=""
                                class="py-4 flex flex-col gap-2 article-card"
                                :class="[{ 'border-b border-black/20': index !== latestArticles.slice(8, 10).length - 1 }]">
                                <h3 class="font-bold">{{ article.title }}</h3>
                                <div class="flex gap-1 font-serif text-sm">
                                    <span class="text-black/80 font-semibold">{{ article.author }}</span>
                                    <span class="text-black/80">|</span>
                                    <span class="text-black/60">{{ article.time }}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Newsletter Section -->
        <div class="relative bg-primary-101 newsletter flex">
            <div class="container-newsletter px-6 relative flex flex-col gap-4 self-center z-10">
                <h2 class="text-6xl font-bold text-dark">Discover the companies shaping the future.</h2>
                <p class="text-xl font-sans font-regular text-text-light">The latest small cap trends and insights, delivered to your inbox</p>
                <form class="mt-6">
                    <input type="email" class="w-full md:w-1/2  px-7 py-5 rounded-l border border-black/20 text-lg font-sans" placeholder="Enter your email" />
                    <button type="submit" class="mt-3 md:mt-0 px-7 py-5 bg-secondary border border-dark text-white font-bold text-lg uppercase font-sans tracking-wider rounded-r">Join now</button>
                </form>
            </div>
            <div class="absolute inset-0 z-0 flex items-center grid justify-self-start">
                <img src="../assets/images/logo-logomark-watermark.svg" class="w-full h-full object-contain ml-4" alt="Watermark Logo">
            </div>
        </div>

        <SiteFooter />
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

        const adjustDecorativeLineHeight = () => {
            const line = document.querySelector('.decorative-line') as HTMLElement;
            if (line) {
                line.style.height = `${document.documentElement.scrollHeight}px`;
            }
        };


        interface Article {
            id: number;
            title: string;
            description?: string;
            author: string;
            time: string;
            tags: { text: string; trend?: number }[];
        }
        
        const leftColumnArticle = ref<Article | null>(null);
        const middleColumnArticles = ref<Article[]>([]);
        const rightColumnArticles = ref<Article[]>([]);
        const analysisArticles = ref<Article[]>([]);
        const latestArticles = ref<Article[]>([]);

        const fetchArticles = async () => {
            const articles = await new Promise((resolve) => {
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
                        { 
                            id: 8, 
                            title: 'Tesla down as UBS says \'animal spirits\' driving rally, not changes', 
                            description: 'Investors are ramping up bets that Trump 2.0 will loosen the federal government’s grip over mortgage giants Freddie Mac (FMCC) and Fannie Mae (FNMA).', 
                            author: 'Kevin Hua', 
                            time: '1 hour ago', 
                            tags: [
                                { text: 'TSLA', trend: +1.9  },
                                { text: 'Auto' },
                            ],
                        },
                        { 
                            id: 9, 
                            title: 'Rivian Lands Billion Dollar Loan For Electric Vehicle Production', 
                            description: 'Investors are ramping up bets that Trump 2.0 will loosen the federal government’s grip over mortgage giants Freddie Mac (FMCC) and Fannie Mae (FNMA), ending one of the oldest fights on Wall Street.', 
                            author: 'Medical Insights', 
                            time: '3 hours ago', 
                            tags: [
                                { text: 'RIV', trend: +2.1  },
                                { text: 'Auto' },
                            ],
                        },
                        { 
                            id: 10, 
                            title: 'There’s A New Public Company Stacking Solana', 
                            description: 'Investors are ramping up bets that Trump 2.0 will loosen the federal government’s grip over mortgage giants Freddie Mac (FMCC) and Fannie Mae (FNMA), ending one of the oldest fights on Wall Street.', 
                            author: 'Market Watch', 
                            time: '5 hours ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 11, 
                            title: 'FuelCell Energy Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '30 minutes ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 12, 
                            title: 'UK Inflation Dips Significantly, Paving The Way For Rate Cuts', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '51 minutes ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 13, 
                            title: 'FuelCell Energy Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '58 minutes ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 14, 
                            title: 'AI Bot Flips Wall Street on Its Head: Turns $1K into $50K in Record 30 Days', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '2 hours ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 15, 
                            title: 'Tens of thousands of Spaniards protest housing crunch and high rents in Barcelona', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '3 hours ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 16, 
                            title: 'Klarna CEO says buy now, pay later is used by shoppers who otherwise avoid credit', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '3 hours ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 17, 
                            title: 'Man Accidentally Threw Away Hard Drive Containing 8,000 Bitcoins Worth A Billion Dollars ', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '4 hours ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 18, 
                            title: 'Tens of thousands of Spaniards protest housing crunch and high rents in Barcelona', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '5 hours ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 19, 
                            title: 'Billionaire Tom Steyer Strikes New Jersey Real Estate Deal', 
                            description: 'Exploring the dynamic world of small-cap stocks.', 
                            author: 'Market Watch', 
                            time: '5 hours ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 20, 
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
                            id: 21, 
                            title: 'AI Bot Flips Wall Street on Its Head: Turns $1K into $50K in Record 30 Days', 
                            author: 'Finvera Newsroom', 
                            time: '21 mins ago', 
                            tags: [
                                { text: 'AI' },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 22, 
                            title: 'Bitcoin Surges as Institutional Investors Pile In', 
                            author: 'Alice Johnson', 
                            time: '10 mins ago', 
                            tags: [
                                { text: 'Bitcoin', trend: +5.0 },
                                { text: 'Cryptocurrency' },
                            ],
                        },
                        { 
                            id: 23, 
                            title: 'Amazon Announces New Drone Delivery Service', 
                            author: 'Michael Lee', 
                            time: '15 mins ago', 
                            tags: [
                                { text: 'Amazon', trend: +2.3 },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 24, 
                            title: 'Apple Unveils Latest iPhone Model with Advanced Features', 
                            author: 'Sarah Connor', 
                            time: '20 mins ago', 
                            tags: [
                                { text: 'Apple', trend: +1.8 },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 25, 
                            title: 'Google AI Achieves Breakthrough in Quantum Computing', 
                            author: 'David Kim', 
                            time: '25 mins ago', 
                            tags: [
                                { text: 'Google', trend: +3.5 },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 26, 
                            title: 'Microsoft Acquires Gaming Company for $7.5 Billion', 
                            author: 'Emma Watson', 
                            time: '30 mins ago', 
                            tags: [
                                { text: 'Microsoft', trend: +2.0 },
                                { text: 'Gaming' },
                            ],
                        },
                        { 
                            id: 27, 
                            title: 'Netflix Expands into Live Sports Streaming', 
                            author: 'Chris Evans', 
                            time: '35 mins ago', 
                            tags: [
                                { text: 'Netflix', trend: +1.7 },
                                { text: 'Entertainment' },
                            ],
                        },
                        { 
                            id: 28, 
                            title: 'Tesla Unveils New Electric Truck Model', 
                            author: 'Elon Musk', 
                            time: '40 mins ago', 
                            tags: [
                                { text: 'Tesla', trend: +2.5 },
                                { text: 'Auto' },
                            ],
                        },
                        { 
                            id: 29, 
                            title: 'Facebook Faces Backlash Over Privacy Concerns', 
                            author: 'Mark Zuckerberg', 
                            time: '45 mins ago', 
                            tags: [
                                { text: 'Facebook', trend: -1.2 },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 30, 
                            title: 'Uber Launches Self-Driving Car Service in Major Cities', 
                            author: 'Travis Kalanick', 
                            time: '50 mins ago', 
                            tags: [
                                { text: 'Uber', trend: +1.9 },
                                { text: 'Auto' },
                            ],
                        },
                        { 
                            id: 31, 
                            title: 'Spotify Introduces New Podcast Subscription Service', 
                            author: 'Daniel Ek', 
                            time: '55 mins ago', 
                            tags: [
                                { text: 'Spotify', trend: +1.4 },
                                { text: 'Entertainment' },
                            ],
                        },
                    ]);
            
                }, 1000);
            });
            return articles;
        };

        const distributeArticles = async () => {
            const articles = await fetchArticles() as Article[];
            if (articles.length > 0) leftColumnArticle.value = articles[0];
            if (articles.length > 1) middleColumnArticles.value = articles.slice(1, 3);
            if (articles.length > 3) rightColumnArticles.value = articles.slice(3, 7);
            if (articles.length > 7) analysisArticles.value = articles.slice(7, 13);
            if (articles.length > 10) latestArticles.value = articles.slice(13);
        };

        onMounted(() => {
            adjustDecorativeLineHeight();
            distributeArticles();
            const decorativeLine = document.querySelector('.decorative-line') as HTMLElement | null;
            const heroElement = document.querySelector('.hero') as HTMLElement | null;
            if (decorativeLine && heroElement) {
                const heroHeight = heroElement.offsetHeight;
                const pageHeight = document.documentElement.scrollHeight;
                decorativeLine.style.height = `${pageHeight - (heroHeight / 2)}px`; /* Start at 50% and stretch to bottom */
            }
        });

        return {
            leftColumnArticle,
            middleColumnArticles,
            rightColumnArticles,
            analysisArticles,
            latestArticles,
        };
    },
};
</script>

<style scoped>
.custom-grid {
    display: grid;
    grid-template-columns: 2.5fr 1.75fr 1.25fr;
    gap: 1.5rem;
}

/* Updated decorative line to start at top: 50% and stretch dynamically */
.decorative-line {
    position: absolute; /* Use absolute positioning for visibility */
    left: -48px;
    top: 50%; /* Start at 50% of the page */

    width: 3px;
    height: 100vh; /* Stretch initially to the viewport height */
    background: repeating-linear-gradient(
      to bottom,
      rgba(101, 178, 255, 1),
      rgba(101, 178, 255, 1) 6px,
      transparent 6px,
      transparent 13px
    );
  }

  .decorative-line-wrapper {
    position: relative;
    height: 100%;
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
    top: -10px;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    margin: 0;
  }

  .article-container {
    position: relative;
  }


.article-hero-card {
    color: rgba(255,255,255,1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    height: min-content;
}

.article-hero-card:hover {
    background-color: rgba(0, 0, 0, 0.45);
}

.article-hero-card:hover h1 {
    color: #B3D9FF;
}

.article-card:hover{
    color: rgba(0, 57, 143, 1);
}

.article-hero {
    color: rgba(255,255,255,1);
}

.article-hero:hover h3 {
    color: #B3D9FF;
}

.newsletter{
    height: 520px;
}

.newsletter button:hover{
    background-color: rgb(0, 34, 84);
}

.container-newsletter{
    max-width: 824px;
    margin: auto;
    height: min-content;
}
</style>
