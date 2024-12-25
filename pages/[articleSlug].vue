<template>
    <div>
        <SiteHeader />
  
        <!-- Article Section -->
        <div class="container-custom mx-auto px-6 py-12">
            <!-- Title -->
            <h1 class="text-4xl font-bold mb-4">FuelCell Energy, Inc.</h1>
  
            <!-- Author and Time -->
            <div class="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <span>By Cameron Bates</span>
                <span>|</span>
                <span>2 hours ago</span>
            </div>
  
            <!-- Hero Image -->
            <img
                src="../assets/images/article-hero.png"
                alt="Hero Image"
                class="w-full h-96 object-cover rounded-lg mb-6"
            />
  
            <!-- Summary Section -->
            <div class="border-t-4 border-primary-500 rounded-lg p-4 mb-8">
                <h2 class="text-primary-500 font-bold uppercase mb-2">Summary</h2>
                <ul class="list-disc pl-6">
                    <li>The company signed an MOU with Korea Hydro & Nuclear Power Co., Ltd.</li>
                    <li>Focus on hydrogen energy business initiatives.</li>
                    <li>Efforts to integrate South Korea's clean energy sources.</li>
                    <li>Producing low-cost, domestic clean hydrogen.</li>
                </ul>
            </div>
  
            <!-- Article Text -->
            <div class="text-gray-800 leading-7 space-y-4">
                <p>
                    <strong>FuelCell Energy, Inc. (FCEL)</strong> shares are trading higher on Tuesday. The company inked a
                    memorandum of understanding (MOU) with <strong>Korea Hydro & Nuclear Power Co., Ltd. (KHNP)</strong> to collaborate
                    on hydrogen energy business initiatives. The agreement marks the beginning of their joint efforts to advance
                    hydrogen energy solutions.
                </p>
                <p>
                    The partnership will focus on developing advanced energy solutions using
                    <strong>FuelCell Energy’s</strong> solid oxide electrolysis hydrogen platform and <strong>KHNP’s</strong>
                    nuclear power plants, following all regulations.
                </p>
                <p>
                    This initiative aims to integrate South Korea’s clean energy sources with
                    <strong>FuelCell Energy’s</strong> technology to produce low-cost, domestic clean hydrogen and diversify the
                    nation’s hydrogen supply beyond imports.
                </p>
                <p>
                    <strong>FuelCell Energy’s</strong> solid oxide electrolyzer cell produces hydrogen at nearly 90% electrical
                    efficiency without excess heat and can reach 100% efficiency when using excess heat.
                </p>
                <p>
                    The oxide electrolyzer takes in electricity and cold water and produces dry hydrogen at high efficiency.
                    Although external heat is never needed, if it is added as an input, <strong>FuelCell Energy’s</strong>
                    electrolyzer platform converts water and electricity at 100% efficiency.
                </p>
                <p>
                    Kong Young-gon, Vice President of Hydrogen & Smart Business Department of <strong>KHNP</strong>, said, “This
                    collaboration aligns with our commitment to innovation and sustainability, and we look forward to working
                    together to develop advanced energy solutions that will benefit both our companies and the communities we
                    serve.”
                </p>
            </div>
  
            <!-- Divider -->
            <div class="border-t border-gray-300 my-12"></div>
  
            <!-- More News Section -->
            <h2 class="text-2xl font-bold mb-4">More News</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-bold">Meta faces trial in FTC case aiming to undo Instagram merge</h3>
                    <div class="flex items-center gap-2 text-sm text-gray-600">
                        <span>By Bob Brown</span>
                        <span>|</span>
                        <span>21 mins ago</span>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-bold">AI Bot Flips Wall Street on Its Head: Turns $1K into $50K</h3>
                    <div class="flex items-center gap-2 text-sm text-gray-600">
                        <span>By Finvera Newsroom</span>
                        <span>|</span>
                        <span>30 mins ago</span>
                    </div>
                </div>
            </div>
        </div>
  
        <SiteFooter />
    </div>
</template>
  
<script lang="ts">
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
  
export default {
    name: 'ArticlePage',
    components: {
        SiteHeader,
        SiteFooter,
    },
};
</script>
  
  <style scoped>
  .container-custom {
    max-width: 1024px;
    margin: auto;
  }
  
  .text-primary-500 {
    color: #65b2ff;
  }
  </style>
  