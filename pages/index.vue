<template>
    <div>
        <SiteHeader />
        <!-- Hero Section -->
        <div class="h-min hero">
            <div class="container-custom mx-auto flex items-center pt-4 md:pt-[1.79rem] md:pb-2 lg:pb-12">
                <div class="grid custom-grid grid-cols-3 divide-gray lg:divide-x lg:divide-y-0">
                    <!-- Hero - Left Column -->
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
                                section="hero"
                            />
                        </div>
                    </div>

                    <hr class="mx-4 divide-x lg:hidden">

                    <!-- Hero - Middle Column -->
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
                                section="hero"
                                size="default"
                            />
                        </div>
                    </div>

                    <!-- Hero - Right Column -->
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
                                    section="hero"
                                />
                            </div>
                        </div>
                        <div class="relative bg-[#005BE3] p-6 text-white sm:max-w-full mt-4 -mx-4 md:mx-0 lg:mt-0">
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
        <div class="moving-now-section bg-[#333333] text-white py-8 xl:py-16 mt-8">
            <div class="container-custom px-4 mx-auto">
                <h2 class="font-sans text-2xl mb-6">Moving Now</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
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

        <!-- Body Section 1 -->
        <div class="new-section bg-white md:py-6 lg:py-12 mt-8">
            <div class="container-custom px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 relative lg:divide-x">
                <!-- Body Section 1 - Left Side -->
                <div class="left-side flex flex-col lg:pr-6 pb-6 lg:pb-0">
                    <!--  Body Section 1 - Left Side - First Subsection -->
                    <h4 class="uppercase font-sans text-black/70 pb-5">Guidance</h4>
                    <div class="first-subsection flex flex-col section !== 'movingNow' divide-y divide-gray">
                        <articlePreview 
                            :article="leftSideFirstSubsectionTopArticle" 
                            :imageflex="'row'"
                            section="body"
                            :tags="false"
                            :description="true"
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
                                :class="{
                                    'pl-4 md:pl-6': index === leftSideFirstSubsectionBottomArticles.length - 1,
                                    'pr-4 md:pr-6': index === 0
                                }"
                            />
                        </div>
                    </div>
                    <hr class="divide-x">
                    <!--  Body Section 1 - Left Side - Second Subsection -->
                    <h4 class="uppercase font-sans text-black/70 py-5 pt-7">Earnings</h4>
                    <div class="second-subsection flex flex-col section !== 'movingNow' divide-y divide-gray">
                        <articlePreview 
                            :article="leftSideSecondSubsectionTopArticle" 
                            :imageflex="'row'"
                            section="body"
                            :tags="false"
                            :description="true"
                            :is-first="true"
                        />
                        <div class="grid grid-cols-2 section !== 'movingNow' py-4 divide-x">
                            <articlePreview 
                                v-for="(article, index) in leftSideSecondSubsectionBottomArticles" 
                                :key="article.id" 
                                :article="article" 
                                :image="false"
                                :tags="false"
                                
                                :is-last="true"
                                :class="{
                                    'pl-4 md:pl-6': index === leftSideSecondSubsectionBottomArticles.length - 1,
                                    'pr-4 md:pr-6': index === 0
                                }"
                            />
                        </div>
                    </div>
                </div>
                <hr class="divide-x lg:hidden pb-6">
                <!-- Body Section 1 - Right Side -->
                <div class="right-side grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-x lg:divide-y-0 divide-gray lg:pl-6">
                    <div class="pb-6 lg:pb-0">
                        <h4 class="uppercase font-sans text-black/70 pb-5">Tech</h4>
                        <div class="right-side-column flex flex-col divide-y divide-gray pr-5 ">    
                            <articlePreview 
                                :article="rightSideFirstColumnTopArticle" 
                                :imageflex="'col'"
                                :description="true"
                                :is-first="true"
                            />
                            <div class="flex flex-col divide-y divide-gray">
                                <articlePreview 
                                    v-for="(article, index) in rightSideFirstColumnBottomArticles" 
                                    :key="article.id" 
                                    :article="article" 
                                    :image="false"
                                    
                                    class="py-2"
                                    :is-last="index === rightSideFirstColumnBottomArticles.length -1"
                                />
                            </div>
                        </div>
                    </div>
                    <div class=" lg:pl-5 lg:pt-0 pt-6">
                        <h4 class="uppercase font-sans text-black/70 pb-5">Biotech</h4>
                        <div class="right-side-column flex flex-col divide-y divide-gray">
                            <articlePreview 
                                :article="rightSideSecondColumnTopArticle" 
                                :imageflex="'col'"
                                :description="true"
                                :is-first="true"
                            />
                            <div class="flex flex-col divide-y divide-gray">
                                <articlePreview 
                                    v-for="(article,index) in rightSideSecondColumnBottomArticles" 
                                    :key="article.id" 
                                    :article="article" 
                                    :image="false"
                                    
                                    class="py-2"
                                    :is-last="index === rightSideFirstColumnBottomArticles.length -1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Market Sentiment Section -->
        <div class="market-sentiment-section bg-[#0048B4] text-white py-8 md:py-12 xl:py-16 mt-8">
            <div class="container-custom px-4 mx-auto">
                <h2 class="font-sans text-2xl leading-tight">Market Sentiment</h2>
                <p class="font-sans text-lg leading-tight mb-6 text-white/70">% Positive Sentiment, Past 24 Hours</p>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <MarketSentimentBox 
                        v-for="company in marketSentimentCompanies"
                        :key="company.id"
                        :company="company"
                    />
                </div>
            </div>
        </div>

        <div class="container-custom mx-auto px-4 flex flex-col divide-y divide-gray md:pt-6 lg:pt-12 pb-8">
            <!-- Body Section 2 -->
            <div class="additional-section bg-white mt-8">
                <div class=" mx-auto grid grid-cols-1 lg:grid-cols-3 relative divide-y lg:divide-y-0 lg:divide-x">
                    <!-- Body Section 2 - First Column -->
                    <div class="first-column flex flex-col lg:pr-6 md:col-span-2 pb-8 lg:pb-0">
                        <h4 class="uppercase font-sans text-black/70 pb-5">Manufacturing & Logistics</h4>
                        <div class="divide-y md:divide-y-0 divide-gray grid grid-cols-1 md:grid-cols-8 md:gap-7">
                            <div class="col-span-5">
                                <div class="">
                                    <div class="first-subsection flex flex-col divide-y md:divide-y-0 divide-gray pb-8 md:pb-0">
                                        <articlePreview 
                                            :article="additionalSectionFirstColumnLargeArticle" 
                                            :description="true"
                                            image-flex="col"
                                            :tags="false"
                                            size="large"
                                            :is-first="true"
                                            :is-last="true"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-3">
                                <div class="second-subsection flex flex-col divide-y col-span-3 divide-gray pt-8 md:pt-0">
                                    <articlePreview 
                                        v-for="(article, index) in additionalSectionFirstColumnSmallArticles" 
                                        :key="article.id" 
                                        :article="article" 
                                        :image="false"
                                        :is-first="index === 0"
                                        :is-last="index === additionalSectionFirstColumnSmallArticles.length -1"
                                        :tags="false"
                                        :class="['py-2' ? index !== 0 : '']"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Body Section 2 - Second Column -->
                    <div class="second-column flex flex-col lg:pl-6 pt-8 lg:pt-0">
                        <h4 class="uppercase font-sans text-black/70 pb-5">Defense</h4>
                        <div class="flex flex-col divide-y divide-gray">
                            <articlePreview 
                                v-for="(article, index) in additionalSectionSecondColumnArticles" 
                                :key="article.id" 
                                :article="article" 
                                :is-first="index === 0"
                                :is-last="index === additionalSectionFirstColumnSmallArticles.length -1"
                                :image="false"
                                :description="index === 0"
                                :tags="false"
                                class="py-2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Body Section 3 -->
            <div class="new-additional-section bg-white pt-10 pb-2 md:pb-8 lg:pb-16 mt-4 lg:mt-8">
                <div class="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-gray">
                    <!--Body Section 3 - First Column -->
                    <div class="first-column flex flex-col lg:pr-8 pb-4 md:pb-8 lg:pb-0">
                        <h4 class="uppercase font-sans text-black/70 pb-5">Retail & ECommerce</h4>
                        <div class="divide-y divide-gray">
                            <articlePreview 
                                v-for="(article, index) in newAdditionalSectionFirstColumnArticles" 
                                :key="article.id" 
                                :article="article" 
                                :imageflex="'row'"
                                :description="true"
                                size="medium"
                                :tags="false"
                                :is-first="index === 0"
                                :is-last="index === newAdditionalSectionFirstColumnArticles.length -1"
                                class="py-2"
                            />
                        </div>
                    </div>
                    <hr class="divide-x lg:hidden lg:pb-8">
                    <!-- Body Section 3 - Second Column -->
                    <div class="second-column flex flex-col pt-8 lg:pt-0 lg:pl-8">
                        <h4 class="uppercase font-sans text-black/70 pb-5">Media & Entertainment</h4>
                        <div class="divide-y divide-gray">
                            <articlePreview 
                                v-for="(article, index) in newAdditionalSectionSecondColumnArticles" 
                                :key="article.id" 
                                :article="article" 
                                :imageflex="'row'"
                                :description="true"
                                size="medium"
                                :tags="false"
                                :is-first="index === 0"
                                :is-last="index === newAdditionalSectionSecondColumnArticles.length -1"
                                class="py-2"
                            />
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
import articlePreview from '~/components/ArticlePreview/ArticlePreview.vue';
import NewsletterPromo from '@/components/NewsletterPromo.vue';
import { mockArticles, mockMovingNowCompanies, mockMarketSentimentCompanies } from '~/data/MockData';
import MarketSentimentBox from '@/components/MarketSentimentBox.vue';

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
                title: string;
                author: string;
                time: string;
                tags: { text: string; trend?: number }[];
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

            if (mockArticles.length > 36) newAdditionalSectionFirstColumnArticles.value = mockArticles.slice(36, 39);
            if (mockArticles.length > 39) newAdditionalSectionSecondColumnArticles.value = mockArticles.slice(39, 42);
        };

        const distributeMovingNow = () => {
            if (mockMovingNowCompanies.length > 0) movingNowCompanies.value = mockMovingNowCompanies;
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

@media (max-width: 1023px) {
    .custom-grid {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

}
 

</style>
