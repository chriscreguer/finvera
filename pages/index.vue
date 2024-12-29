<template>
    <div>
        <SiteHeader />
        <!-- Hero Section -->
        <div class="h-min hero">
            <div class="container-custom mx-auto flex items-center pt-[1.79rem] pb-12">
                <div class="grid custom-grid grid-cols-3 divide-x divide-gray">
                    <!-- Left Column -->
                    <div class="left-column flex flex-col divide-y divide-gray px-4">
                        <div 
                            v-for="(article, index) in leftColumnArticles" 
                            :key="article.id"
                        >
                            <articlePreview 
                                :article="article" 
                                :description="index === 0" 
                                :imageflex="index > 0 ? 'row' : 'col'"
                                :size="index === 0 ? 'large' : 'default'"
                                :is-first="index === 0"
                                :is-last="index === leftColumnArticles.length -1"
                            />
                        </div>
                    </div>

                    <!-- Middle Column -->
                    <div class="middle-column flex flex-col divide-y divide-gray px-4">
                        <div 
                            v-for="(article, index) in middleColumnArticles" 
                            :key="article.id"
                        >
                            <articlePreview 
                                :article="article" 
                                :description="index === 0" 
                                :image="index !== 2"
                                :is-first="index === 0"
                                :is-last="index === middleColumnArticles.length -1"
                            />
                        </div>
                    </div>

                    <!-- Right Column -->
                    <div class="right-column flex flex-col divide-y divide-gray px-4">
                        <h4 class="uppercase text-black/70 text-xs pb-2">Latest News</h4>
                        <div 
                            v-for="(article, index) in rightColumnArticles" 
                            :key="article.id"
                        >
                            <articlePreview 
                                :article="article" 
                                :image="false"
                                size="small"
                                font="sans"
                                :tags="false"
                            />
                        </div>
                        <div class="newsletter-promo-small relative bg-[#005BE3] p-6 text-white">
                            <img src="../assets/images/logo-logomark.svg" class="absolute inset-0 w-full h-full object-cover opacity-10 z-0" alt="Watermark Logo">
                            <div class="relative z-10">
                                <h2 class="text-[18px]">Stay ahead of the herd.</h2>
                                <p class="text-sm font-sans mt-1.5 leading-none">Fast, accurate small-cap updates sent to your inbox before the market reacts.</p>
                                <form class="mt-6">
                                    <input type="email" class="w-full bg-white text-black px-3 py-2 text-[14px] font-sans placeholder:text-black/70" placeholder="Enter your email" />
                                    <button type="submit" class="mt-2 w-full bg-secondary py-2 border border-dark text-white font-bold text-xs uppercase font-sans tracking-wider hover:bg-[#001E4B]">Join now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NewsletterPromo />
        <SiteFooter />
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import articlePreview from '@/components/articlePreview.vue';
import NewsletterPromo from '@/components/NewsletterPromo.vue';
import ArticleTags from '@/components/ArticleTags.vue';

export default {
    name: 'HomePage',
    components: {
        SiteHeader,
        articlePreview,
        ArticleTags,
    },
    setup() {

        interface Article {
            id: number;
            title: string;
            description?: string;
            author: string;
            time: string;
            tags: { text: string; trend?: number }[];
        }
        
        const leftColumnArticles = ref<Article[]>([]);
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
                            title: 'Rocket Lab Shares Surge After Successful Test of Reusable Booster Technology', 
                            description: 'Investors are ramping up bets that Trump 2.0 will loosen the federal government’s grip over mortgage giants Freddie Mac (FMCC) and Fannie Mae (FNMA), ending one of the oldest fights on Wall Street.', 
                            author: 'Cameron Bates', 
                            time: '3 hours ago', 
                            tags: [
                                { text: 'RLB', trend: +2.3 },
                                { text: 'Defense' },
                            ],
                        },
                        { 
                            id: 2, 
                            title: 'Purple Innovation to Roll Out Adjustable Smart Mattress', 
                            author: 'Kevin Hua', 
                            time: '1 hour ago', 
                            tags: [
                                { text: 'PRPL', trend: +1.2 },
                                { text: 'Retail' },
                            ],
                        },
                        { 
                            id: 3, 
                            title: 'Generali Insurance Explores Sale of Technology Platform to Rival Insurer', 
                            author: 'Collin Godert', 
                            time: '54 minutes ago', 
                            tags: [
                                { text: 'GNLI', trend: +2.3 },
                                { text: 'Finance' },
                            ],
                        },
                        { 
                            id: 4, 
                            title: 'FuelCell Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', 
                            description: 'The partnership will focus on developing advanced energy solutions using FuelCell Energy’s solid oxide electrolysis hydrogen platform and KHNP’s nuclear power plants, following all regulations.', 
                            author: 'Matt Carpenter', 
                            time: '4 hours ago', 
                            tags: [
                                { text: 'FLCL', trend: -0.4 },
                                { text: 'Energy' },
                            ],
                        },
                        { 
                            id: 5, 
                            title: 'Kaleyra Teams Up With Tesla to Enhance AWD Solutions', 
                            description: 'An AI trading bot has made significant gains, turning a small investment into a large sum in a short period.', 
                            author: 'Aida Hill', 
                            time: '2 hours ago', 
                            tags: [
                                { text: 'KLYR', trend: +2.4 },
                                { text: 'TSLA', trend: -1.4 },
                                { text: 'Tech' },
                            ],
                        },
                        { 
                            id: 6, 
                            title: 'Myers Industries Reports Record Sales for Plastic Storage Solutions', 
                            description: 'Tom Steyer has made a significant real estate investment in New Jersey.', 
                            author: 'Adrian Peterson', 
                            time: '6 hours ago', 
                            tags: [
                                { text: 'RIV', trend: +0.8 },
                                { text: 'Manufacturing & Logistics' },
                            ],
                        },
                        { 
                            id: 7, 
                            title: 'Five Point Holdings Gains Approval for Major California Redevelopment Project', 
                            description: 'Rising inflation in the Eurozone is putting pressure on the ECB\'s monetary policies.', 
                            author: 'Finvera Newsroom', 
                            time: '2 mins ago', 
                            tags: [
                                { text: 'Interest Rates' },
                                { text: 'Inflation' },
                            ],
                        },
                        { 
                            id: 8, 
                            title: 'GrowGeneration Acquires Hydroponics Retail Chain to Boost West Coast Presence', 
                            description: 'UBS analysts attribute Tesla\'s recent stock rally to market sentiment rather than fundamental changes.', 
                            author: 'Kevin Hua', 
                            time: '12 minutes ago', 
                            tags: [
                                { text: 'TSLA', trend: +1.9  },
                                { text: 'Auto' },
                            ],
                        },
                        { 
                            id: 9, 
                            title: 'Nautilus Biotechnology to Expand Automated Proteomics Lab Network', 
                            description: 'Rivian secures a substantial loan to boost its electric vehicle production capabilities.', 
                            author: 'Medical Insights', 
                            time: '25 minutes ago', 
                            tags: [
                                { text: 'RIV', trend: +2.1  },
                                { text: 'Auto' },
                            ],
                        },
                        { 
                            id: 10, 
                            title: 'Carpenter Technology Adds Advanced Alloys Line to Support EV Battery Makers', 
                            description: 'A new public company is making significant investments in Solana.', 
                            author: 'Finvera Newsroom', 
                            time: '5 hours ago', 
                            tags: [
                                { text: 'Stocks' },
                                { text: 'Small Cap' },
                            ],
                        },
                        { 
                            id: 11, 
                            title: 'Moog Inc. Develops Advanced Actuators for Fighter Jets', 
                            description: 'FuelCell Energy and KHNP are working together to address South Korea\'s hydrogen energy requirements.', 
                            author: 'Finvera Newsroom', 
                            time: '37 minutes ago', 
                            tags: [
                                { text: 'Energy' },
                                { text: 'Hydrogen' },
                            ],
                        },
                        { 
                            id: 12, 
                            title: 'UK Inflation Dips Significantly, Paving The Way For Rate Cuts', 
                            description: 'The UK sees a significant drop in inflation, potentially leading to future rate cuts.', 
                            author: 'Market Watch', 
                            time: '51 minutes ago', 
                            tags: [
                                { text: 'Inflation' },
                                { text: 'Economy' },
                            ],
                        },
                        { 
                            id: 13, 
                            title: 'FuelCell Energy Collaborates With KHNP To Tackle South Korea\'s Hydrogen Needs', 
                            description: 'FuelCell Energy and KHNP are working together to address South Korea\'s hydrogen energy requirements.', 
                            author: 'Market Watch', 
                            time: '58 minutes ago', 
                            tags: [
                                { text: 'Energy' },
                                { text: 'Hydrogen' },
                            ],
                        },
                        { 
                            id: 14, 
                            title: 'AI Bot Flips Wall Street on Its Head: Turns $1K into $50K in Record 30 Days', 
                            description: 'An AI trading bot has made significant gains, turning a small investment into a large sum in a short period.', 
                            author: 'Market Watch', 
                            time: '2 hours ago', 
                            tags: [
                                { text: 'AI' },
                                { text: 'Technology' },
                            ],
                        },
                        { 
                            id: 15, 
                            title: 'Tens of thousands of Spaniards protest housing crunch and high rents in Barcelona', 
                            description: 'A large protest in Barcelona highlights the city\'s housing crisis and rising rents.', 
                            author: 'Market Watch', 
                            time: '3 hours ago', 
                            tags: [
                                { text: 'Housing' },
                                { text: 'Protest' },
                            ],
                        },
                        { 
                            id: 16, 
                            title: 'Klarna CEO says buy now, pay later is used by shoppers who otherwise avoid credit', 
                            description: 'Klarna\'s CEO discusses the popularity of buy now, pay later services among credit-averse shoppers.', 
                            author: 'Market Watch', 
                            time: '3 hours ago', 
                            tags: [
                                { text: 'Finance' },
                                { text: 'Credit' },
                            ],
                        },
                        { 
                            id: 17, 
                            title: 'Man Accidentally Threw Away Hard Drive Containing 8,000 Bitcoins Worth A Billion Dollars', 
                            description: 'A man mistakenly disposed of a hard drive containing a fortune in Bitcoin.', 
                            author: 'Market Watch', 
                            time: '4 hours ago', 
                            tags: [
                                { text: 'Bitcoin' },
                                { text: 'Cryptocurrency' },
                            ],
                        },
                        { 
                            id: 18, 
                            title: 'Tens of thousands of Spaniards protest housing crunch and high rents in Barcelona', 
                            description: 'A large protest in Barcelona highlights the city\'s housing crisis and rising rents.', 
                            author: 'Market Watch', 
                            time: '5 hours ago', 
                            tags: [
                                { text: 'Housing' },
                                { text: 'Protest' },
                            ],
                        },
                        { 
                            id: 19, 
                            title: 'Billionaire Tom Steyer Strikes New Jersey Real Estate Deal', 
                            description: 'Tom Steyer has made a significant real estate investment in New Jersey.', 
                            author: 'Market Watch', 
                            time: '5 hours ago', 
                            tags: [
                                { text: 'Real Estate' },
                                { text: 'Investment' },
                            ],
                        },
                        { 
                            id: 20, 
                            title: 'Meta faces trial in FTC case aiming to undo Instagram merge', 
                            description: 'Meta is set to face a trial as the FTC seeks to reverse its acquisition of Instagram.', 
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
                            description: 'An AI trading bot has made significant gains, turning a small investment into a large sum in a short period.', 
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
                            description: 'Bitcoin prices surge as more institutional investors enter the market.', 
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
                            description: 'Amazon reveals its latest innovation in delivery services with the introduction of drones.', 
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
                            description: 'Apple introduces its newest iPhone model, featuring cutting-edge technology.', 
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
                            description: 'Google\'s AI team announces a major breakthrough in quantum computing technology.', 
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
                            description: 'Microsoft expands its gaming portfolio with a significant acquisition.', 
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
                            description: 'Netflix ventures into live sports streaming, broadening its content offerings.', 
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
                            description: 'Tesla introduces its latest electric truck model, showcasing advanced features.', 
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
                            description: 'Facebook is under scrutiny for its handling of user privacy.', 
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
                            description: 'Uber rolls out its self-driving car service in several major cities.', 
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
                            description: 'Spotify launches a new subscription service for podcast enthusiasts.', 
                            author: 'Daniel Ek', 
                            time: '55 mins ago', 
                            tags: [
                                { text: 'Spotify', trend: +1.4 },
                                { text: 'Entertainment' },
                            ],
                        }
                    ]);
            
                }, 1000);
            });
            return articles;
        };

        const distributeArticles = async () => {
            const articles = await fetchArticles() as Article[];
            if (articles.length > 0) leftColumnArticles.value = articles.slice(0, 3);
            if (articles.length > 3) middleColumnArticles.value = articles.slice(3, 6);
            if (articles.length > 6) rightColumnArticles.value = articles.slice(6, 11);
        };

        onMounted(() => {
            distributeArticles();
        });

        return {
            leftColumnArticles,
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
    grid-template-columns: 4.45fr 3.32fr 2.23fr;
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

  .divide-x , .divide-y {
    border-color: rgba(39, 41, 43, .12);
    color: rgba(39, 41, 43, .12);
  }


.right-column hr:nth-of-type(1) {
    display: none;
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

</style>
