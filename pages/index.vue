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
        <NewsletterPromo />
        <SiteFooter />
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import articlePreview from '@/components/ArticlePreview.vue';
import NewsletterPromo from '@/components/NewsletterPromo.vue';
import { mockArticles} from '@/data/mockarticles'; // Import the mock data

export default {
    name: 'HomePage',
    components: {
        SiteHeader,
        articlePreview,
        NewsletterPromo
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

        const distributeArticles = () => {
            if (mockArticles.length > 0) leftColumnArticles.value = mockArticles.slice(0, 3);
            if (mockArticles.length > 3) middleColumnArticles.value = mockArticles.slice(3, 6);
            if (mockArticles.length > 6) rightColumnArticles.value = mockArticles.slice(6, 11);
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

@media (max-width: 1023px) {
    .custom-grid {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

}
 

</style>
