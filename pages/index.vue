<template>
    <div>
        <SiteHeader />
        <!-- Hero Section -->
        <div class="h-min hero">
            <div class="container-custom mx-auto flex items-center pt-4 md:pt-[1.79rem] pb-12">
                <div class="grid custom-grid grid-cols-3 divide-gray lg:divide-x lg:divide-y-0">
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

                    <hr class="mx-4 divide-x lg:hidden">

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
                    <div class="right-column flex flex-col divide-y divide-gray px-4 pt-4 lg:pt-0">
                        <h4 class="uppercase text-black/70 text-xs pb-2">Latest News</h4>
                        <div class="md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-x-8 divide-y">
                            <div 
                                v-for="(article) in rightColumnArticles" 
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
                        </div>
                        <div class="relative bg-[#005BE3] p-6 text-white sm:max-w-full mt-4 lg:mt-0">
                            <img src="../assets/images/logo-logomark.svg" class="absolute inset-0 w-full h-full object-cover opacity-10 z-0" alt="Watermark Logo">
                            <div class="relative z-10">
                                <h2 class="text-[18px]">Stay ahead of the herd.</h2>
                                <p class="text-sm font-sans mt-1.5 leading-none">Fast, accurate small-cap updates sent to your inbox before the market reacts.</p>
                                <form class="mt-6">
                                    <input type="email" class="w-full bg-white text-black px-3 py-3 lg:py-2 text-[14px] font-sans placeholder:text-black/70" placeholder="Enter your email" />
                                    <button type="submit" class="mt-2 w-full bg-secondary py-3 lg:py-2 border border-dark text-white font-bold text-xs uppercase font-sans tracking-wider hover:bg-[#001E4B]">Join now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Moving Now Section -->
        <div class="moving-now-section bg-[#333333] text-white py-16 mt-8">
            <div class="container-custom mx-auto">
                <h2 class="font-sans text-2xl mb-6">Moving Now</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div 
                        v-for="(company, index) in movingNowCompanies" 
                        :key="company.id" 
                        class="box bg-black/20"
                    >
                        <div class="header bg-black/40 px-5 py-4">
                            <h3 class="font-sans text-lg uppercase pb-0.5">
                                {{ company.ticker[0].text }} 
                                <span :class="company.ticker[0] && company.ticker[0].trend !== undefined && company.ticker[0].trend > 0 ? 'text-green' : 'text-red'">
                                    {{ (company.ticker[0]?.trend ?? 0) > 0 ? '+' : '' }}{{ company.ticker[0]?.trend ?? 0 }}%
                                </span>
                            </h3>
                            <p class="font-sans font-bold text-xs text-white/70 tracking-[0.5px] uppercase">{{ company.company }}</p>
                        </div>
                        <div class="px-5 py-3">
                            <articlePreview 
                                v-for="(article) in movingNowArticles.slice(index * 2, index * 2 + 2)" 
                                :key="article.id" 
                                :article="article" 
                                :image="false"
                                :description="false"
                                :tags="false"
                                section="movingNow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Section -->
        <div class="new-section bg-white py-16 mt-8">
            <div class="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 relative divide-x">
                <!-- Left Side -->
                <div class="left-side flex flex-col pr-6">
                    <!-- First Subsection -->
                    <h4 class="uppercase font-sans text-black/70 pb-5">Guidance</h4>
                    <div class="first-subsection flex flex-col section !== 'movingNow' divide-y divide-gray">
                        <articlePreview 
                            :article="leftSideFirstSubsectionTopArticle" 
                            :imageflex="'row'"
                            section="body"
                            :tags="false"
                            :is-first="true"
                        />
                        <div class="grid grid-cols-2 section !== 'movingNow' py-4 divide-x">
                            <articlePreview 
                                v-for="(article, index) in leftSideFirstSubsectionBottomArticles" 
                                :key="article.id" 
                                :article="article" 
                                :image="false"
                                :tags="false"
                                size="default"
                                :class="[index===leftSideFirstSubsectionBottomArticles.length-1 ? 'pl-6' : '']"
                            />
                        </div>
                    </div>
                    <hr class="divide-x">
                    <!-- Second Subsection -->
                    <h4 class="uppercase font-sans text-black/70 py-5 pt-7">Earnings</h4>
                    <div class="second-subsection flex flex-col section !== 'movingNow' divide-y divide-gray">
                        <articlePreview 
                            :article="leftSideSecondSubsectionTopArticle" 
                            :imageflex="'row'"
                            section="body"
                            :tags="false"
                            :is-first="true"
                        />
                        <div class="grid grid-cols-2 section !== 'movingNow' py-4 divide-x">
                            <articlePreview 
                                v-for="(article, index) in leftSideSecondSubsectionBottomArticles" 
                                :key="article.id" 
                                :article="article" 
                                :image="false"
                                :tags="false"
                                :class="[index===leftSideSecondSubsectionBottomArticles.length-1 ? 'pl-6' : '']"
                            />
                        </div>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="right-side grid grid-cols-1 md:grid-cols-2 md:divide-x divide-gray pl-6">
                    <div class="right-side-column flex flex-col divide-y divide-gray pr-5 ">
                        <h4 class="uppercase font-sans text-black/70 pb-5">Tech</h4>
                        <articlePreview 
                            :article="rightSideFirstColumnTopArticle" 
                            :imageflex="'col'"
                            :description="false"
                            :is-first="true"
                        />
                        <div class="flex flex-col divide-y divide-gray">
                            <articlePreview 
                                v-for="(article) in rightSideFirstColumnBottomArticles" 
                                :key="article.id" 
                                :article="article" 
                                :image="false"
                                :description="false"
                                class="py-2"
                            />
                        </div>
                    </div>
                    <div class="right-side-column flex flex-col divide-y divide-gray pl-5">
                        <h4 class="uppercase font-sans text-black/70 pb-5">Biotech</h4>
                        <articlePreview 
                            :article="rightSideSecondColumnTopArticle" 
                            :imageflex="'col'"
                            :description="false"
                            :is-first="true"
                        />
                        <div class="flex flex-col divide-y divide-gray">
                            <articlePreview 
                                v-for="(article) in rightSideSecondColumnBottomArticles" 
                                :key="article.id" 
                                :article="article" 
                                :image="false"
                                :description="false"
                                class="py-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Market Sentiment Section -->
        <div class="market-sentiment-section bg-[#0048B4] text-white py-16 mt-8">
            <div class="container-custom mx-auto">
                <h2 class="font-sans text-2xl">Market Sentiment</h2>
                <p class="font-sans text-lg mb-6 text-white/70">% Positive Sentiment, Past 24 Hours</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <MarketSentimentBox 
                        v-for="company in marketSentimentCompanies"
                        :key="company.id"
                        :company="company"
                    />
                </div>
            </div>
        </div>

        <!-- Additional Section -->
        <div class="additional-section bg-white py-16 mt-8">
            <div class="container-custom mx-auto grid grid-cols-1 md:grid-cols-3 relative divide-x">
                <!-- First Column -->
                <div class="first-column flex flex-col pr-6 md:col-span-2">
                    <h4 class="uppercase font-sans text-black/70 pb-5">Manufacturing & Logistics</h4>
                    <div class="grid grid-cols-1 md:grid-cols-8 gap-7">
                        <div class="first-subsection flex flex-col col-span-5 divide-y divide-gray">
                            <articlePreview 
                                :article="additionalSectionFirstColumnLargeArticle" 
                                :description="true"
                                image-flex="col"
                                :tags="false"
                                size="large"
                                :is-first="true"
                            />
                        </div>
                        <div class="second-subsection flex flex-col divide-y col-span-3 divide-gray">
                            <articlePreview 
                                v-for="(article, index) in additionalSectionFirstColumnSmallArticles" 
                                :key="article.id" 
                                :article="article" 
                                :image="false"
                                :description="false"
                                :is-first="index === 0"
                                :tags="false"
                                class="py-2"
                            />
                        </div>
                    </div>
                </div>

                <!-- Second Column -->
                <div class="second-column flex flex-col pl-6">
                    <h4 class="uppercase font-sans text-black/70 pb-5">Defense</h4>
                    <div class="flex flex-col divide-y divide-gray">
                        <articlePreview 
                            v-for="(article, index) in additionalSectionSecondColumnArticles" 
                            :key="article.id" 
                            :article="article" 
                            :is-first="index === 0"
                            :image="false"
                            :description="false"
                            :tags="false"
                            class="py-2"
                        />
                    </div>
                </div>
            </div>
        </div>
      
        <!-- New Additional Section -->
        <div class="new-additional-section bg-white pb-16 mt-8">
            <div class="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- First Column -->
                <div class="first-column flex flex-col divide-y divide-gray">
                    <h4 class="uppercase font-sans text-black/70 pb-5">New Column Title 1</h4>
                    <articlePreview 
                        v-for="(article, index) in newAdditionalSectionFirstColumnArticles" 
                        :key="article.id" 
                        :article="article" 
                        :imageflex="'row'"
                        :description="false"
                        :tags="false"
                        :is-first="index === 0"
                        class="py-2"
                    />
                </div>
                <!-- Second Column -->
                <div class="second-column flex flex-col divide-y divide-gray">
                    <h4 class="uppercase font-sans text-black/70 pb-5">New Column Title 2</h4>
                    <articlePreview 
                        v-for="(article, index) in newAdditionalSectionSecondColumnArticles" 
                        :key="article.id" 
                        :article="article" 
                        :imageflex="'row'"
                        :description="false"
                        :tags="false"
                        :is-first="index === 0"
                        class="py-2"
                    />
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
import articlePreview from '@/components/ArticlePreview.vue';
import NewsletterPromo from '@/components/NewsletterPromo.vue';
import { mockArticles, mockMarketSentimentCompanies } from '@/data/MockArticles';
import MarketSentimentBox from '@/components/MarketSentimentBox.vue';
import { mockMovingNow } from '~/data/MockMovingNowCompanies';

export default {
    name: 'HomePage',
    components: {
        SiteHeader,
        articlePreview,
        NewsletterPromo,
        MarketSentimentBox,
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

        interface MovingNow{
            id: number;
            company: string;
            ticker: { text: string; trend?: number }[];
        }
           
        const leftColumnArticles = ref<Article[]>([]);
        const middleColumnArticles = ref<Article[]>([]);
        const rightColumnArticles = ref<Article[]>([]);
        const movingNowArticles = ref<Article[]>([]);
        const movingNowCompanies = ref<MovingNow[]>([]);
        interface MarketSentimentCompany {
            id: number;
            company: string;
            ticker: { text: string; trend: number }[];
            sentiment: number;
            quotes: {
                id: number;
                description: string;
                author: string;
                time: string;
            }[];
        }
        
        const marketSentimentCompanies = ref<MarketSentimentCompany[]>([]);

        const leftSideFirstSubsectionTopArticle = ref<Article>({ id: 0, title: '', author: '', time: '', tags: [] });
        const leftSideFirstSubsectionBottomArticles = ref<Article[]>([]);
        const leftSideSecondSubsectionTopArticle = ref<Article>({ id: 0, title: '', author: '', time: '', tags: [] });
        const leftSideSecondSubsectionBottomArticles = ref<Article[]>([]);

        const rightSideFirstColumnTopArticle = ref<Article>({ id: 0, title: '', author: '', time: '', tags: [] });
        const rightSideFirstColumnBottomArticles = ref<Article[]>([]);
        const rightSideSecondColumnTopArticle = ref<Article>({ id: 0, title: '', author: '', time: '', tags: [] });
        const rightSideSecondColumnBottomArticles = ref<Article[]>([]);

        const additionalSectionFirstColumnLargeArticle = ref<Article>({ id: 0, title: '', author: '', time: '', tags: [] });
        const additionalSectionFirstColumnSmallArticles = ref<Article[]>([]);
        const additionalSectionSecondColumnArticles = ref<Article[]>([]);

        const newAdditionalSectionFirstColumnArticles = ref<Article[]>([]);
        const newAdditionalSectionSecondColumnArticles = ref<Article[]>([]);

        const distributeArticles = () => {
            if (mockArticles.length > 0) leftColumnArticles.value = mockArticles.slice(0, 3);
            if (mockArticles.length > 3) middleColumnArticles.value = mockArticles.slice(3, 6);
            if (mockArticles.length > 6) rightColumnArticles.value = mockArticles.slice(6, 11);
            if (mockArticles.length > 11) movingNowArticles.value = mockArticles.slice(11, 17);

            if (mockArticles.length > 17) leftSideFirstSubsectionTopArticle.value = mockArticles[17];
            if (mockArticles.length > 18) leftSideFirstSubsectionBottomArticles.value = mockArticles.slice(18, 20);
            if (mockArticles.length > 20) leftSideSecondSubsectionTopArticle.value = mockArticles[20];
            if (mockArticles.length > 21) leftSideSecondSubsectionBottomArticles.value = mockArticles.slice(21, 23);

            if (mockArticles.length > 23) rightSideFirstColumnTopArticle.value = mockArticles[23];
            if (mockArticles.length > 24) rightSideFirstColumnBottomArticles.value = mockArticles.slice(24, 26);
            if (mockArticles.length > 26) rightSideSecondColumnTopArticle.value = mockArticles[26];
            if (mockArticles.length > 27) rightSideSecondColumnBottomArticles.value = mockArticles.slice(27, 29);

            if (mockArticles.length > 29) additionalSectionFirstColumnLargeArticle.value = mockArticles[29];
            if (mockArticles.length > 30) additionalSectionFirstColumnSmallArticles.value = mockArticles.slice(30, 33);
            if (mockArticles.length > 32) additionalSectionSecondColumnArticles.value = mockArticles.slice(33, 36);

            if (mockArticles.length > 36) newAdditionalSectionFirstColumnArticles.value = mockArticles.slice(36, 38);
            if (mockArticles.length > 39) newAdditionalSectionSecondColumnArticles.value = mockArticles.slice(38, 40);
        };

        const distributeMovingNow = () => {
            if (mockMovingNow.length > 0) movingNowCompanies.value = mockMovingNow;
        };

        const distributeMarketSentiment = () => {
            marketSentimentCompanies.value = mockMarketSentimentCompanies;
        };

        onMounted(() => {
            distributeArticles();
            distributeMovingNow();
            distributeMarketSentiment();
        });

        return {
            leftColumnArticles,
            middleColumnArticles,
            rightColumnArticles,
            movingNowArticles,
            movingNowCompanies,
            leftSideFirstSubsectionTopArticle,
            leftSideFirstSubsectionBottomArticles,
            leftSideSecondSubsectionTopArticle,
            leftSideSecondSubsectionBottomArticles,
            rightSideFirstColumnTopArticle,
            rightSideFirstColumnBottomArticles,
            rightSideSecondColumnTopArticle,
            rightSideSecondColumnBottomArticles,
            additionalSectionFirstColumnLargeArticle,
            additionalSectionFirstColumnSmallArticles,
            additionalSectionSecondColumnArticles,
            newAdditionalSectionFirstColumnArticles,
            newAdditionalSectionSecondColumnArticles,
            marketSentimentCompanies,
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

@media (max-width: 1023px) {
    .custom-grid {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

}
 

</style>
