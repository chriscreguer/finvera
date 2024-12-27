<template>
    <header class="sticky top-0 flex flex-col z-20 transition-all text-white bg-dark">
        <div class="px-10 w-screen flex items-center justify-between h-full">
            <!-- Logo -->
            <a href="/" class="flex items-center h-full">
                <img src="../assets/images/logo.svg" alt="Logo" class="h-8" />
            </a>

            <!-- Middle Nav Items -->
            <nav class="flex items-center gap-6">
                <a
                    v-for="item in middleNavItems"
                    :key="item"
                    href="#"
                    class="nav-item">
                    {{ item }}
                </a>
            </nav>

            <!-- Right Menu -->
            <div class="flex items-center gap-8">
                <a href="#" class="nav-item">
                    Newsletter
                </a>
                <div class="flex gap-7 items-center">
                    <div class="relative opacity-80 w-5">
                        <img
                            src="../assets/images/icons/search.svg"
                            alt="Search"
                            class="search-icon cursor-pointer"
                            @click="toggleSearch" />
                        <input
                            v-if="searchOpen"
                            type="text"
                            placeholder="Search"
                            class="search-input" />
                    </div>
                    <button class="h-8 w-8 group relative opacity-80 w-5" @click="toggleMenu">
                        <img src="../assets/images/icons/menu.svg" alt="Menu" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Hamburger Menu -->
        <div v-if="menuOpen" class="hamburger-menu">
            <a
                v-for="item in hamburgerMenuItems"
                :key="item"
                href="#"
                class="nav-item">
                {{ item }}
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'SiteHeader',
    data() {
        return {
            menuOpen: false,
            searchOpen: false,
            middleNavItems: ['Topics', 'Moving Now', 'Guidance', 'Sentiment'],
            hamburgerMenuItems: [
                'Earnings', 'Dividends', 'Guidance', 'M&A', 'Buybacks', 'Legal', 
                'Interviews', 'Management', 'Offers', 'IPOs', 'Biotech/FDA', 
                'Politics', 'Government'
            ],
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        toggleSearch() {
            this.searchOpen = !this.searchOpen;
        },
    },
};
</script>

<style>
header {
    height: 69px;
    transition: height 0.5s ease-in-out;
}

.nav-item {
    font-family: 'Satoshi', sans-serif;
    color: rgb(255,255,255);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.75rem;
    position: relative;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
    border-radius: 4px;
}

.search-input {
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: white;
}

.hamburger-menu {
    display: flex;
    flex-direction: column;
    background-color: #2b2c30;
    padding: 1rem;
    position: absolute;
    top: 69px;
    right: 0;
    width: 200px;
    z-index: 30;
}

.hamburger-menu a {
    padding: 0.5rem 0;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    color: white;
    transition: color 0.3s ease-in-out;
}

.hamburger-menu a:hover {
    color: #ccc;
}

</style>
