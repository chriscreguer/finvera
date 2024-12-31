<template>
    <header class="sticky top-0 flex flex-col z-40 transition-all text-white bg-dark">
        <div class="pr-9 pl-8 flex items-center justify-between h-full">
            <!-- Logo -->
            <a href="/" class="flex items-center h-full px-3">
                <img src="../assets/images/logo.svg" alt="Logo" class="h-7.5" />
            </a>

            <!-- Middle Nav Items -->
            <nav class="hidden lg:flex items-center h-3/4">
                <a
                    v-for="item in middleNavItems"
                    :key="item"
                    href="#"
                    class="nav-item h-full">
                    {{ item }}
                </a>
            </nav>

            <!-- Right Menu -->
            <div class="flex items-center h-3/4 gap-2">
                <div class="hidden lg:flex h-full">
                    <a href="#" class="nav-item">
                        Newsletter
                    </a>
                </div>
                <div class="flex h-full items-center">
                    <div class="flex items-center relative h-full px-4 opacity-80 hover:opacity-90 cursor-pointer" @click="toggleSearch">
                        <img
                            v-if="!searchOpen"
                            src="../assets/images/icons/search.svg"
                            alt="Search"
                            class="search-icon h-full w-5"
                        />
                        <img
                            v-else
                            src="../assets/images/icons/close.svg"
                            alt="Close"
                            class="close-icon h-full w-5"
                        />
                    </div>
                    <button class="h-full group relative opacity-80 pl-3 last:pr-3 hover:opacity-90" @click="toggleMenu">
                        <img
                            v-if="!menuOpen"
                            src="../assets/images/icons/menu.svg"
                            alt="Menu"
                            class="w-5" />
                        <img
                            v-else
                            src="../assets/images/icons/close.svg"
                            alt="Close"
                            class="w-5" />
                    </button>
                </div>
            </div>
        </div>
        <!-- Search Bar -->
        <transition name="slide-fade">
            <div v-if="searchOpen" class="search-bar absolute w-full bg-dark px-6 md:px-11 p-4 pt-0 flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    class="search-input flex-grow font-sans pl-2" />
            </div>
        </transition>

        <!-- Search Overlay -->
        <div
            v-if="searchOpen"
            class="search-overlay overlay fixed inset-0 bg-black opacity-50"
            @click="toggleSearch"></div>

        <!-- Hamburger Menu -->
        <transition name="slide-fade">
            <div v-if="menuOpen" class="hamburger-menu flex flex-row gap-4 md:gap-16">
                <div class="flex flex-row flex-wrap gap-4">
                    <div v-for="column in menuColumns" :key="column.id" class="menu-column">
                        <a
                            v-for="item in column.items"
                            :key="item.id"
                            href="#"
                            class="nav-item">
                            {{ item.label }}
                        </a>
                    </div>
                </div>
                <a
                    href="#"
                    class="nav-item">
                    Newsletter
                </a>
            </div>
        </transition>

        <!-- Hamburger Menu Overlay -->
        <div
            v-if="menuOpen"
            class="menu-overlay overlay fixed inset-0 bg-black opacity-50"
            @click="toggleMenu"></div>
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
                { id: 1, label: 'Earnings' },
                { id: 2, label: 'Management' },
                { id: 3, label: 'Dividends' },
                { id: 4, label: 'Offers' },
                { id: 5, label: 'Guidance' },
                { id: 6, label: 'IPOs' },
                { id: 7, label: 'M&A' },
                { id: 8, label: 'Cannabis' },
                { id: 9, label: 'Biotech' },
                { id: 10, label: 'Legal' },
                { id: 11, label: 'Politics' },
                { id: 12, label: 'Interviews' },
                { id: 13, label: 'Government' },
            ],
        };
    },
    computed: {
        menuColumns() {
            const columns = [[], []];
            this.hamburgerMenuItems.forEach((item, index) => {
                columns[index % 2].push(item);
            });
            return columns.map((items, index) => ({ id: index, items }));
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
            if (this.menuOpen) {
                this.searchOpen = false;
            }
        },
        toggleSearch() {
            this.searchOpen = !this.searchOpen;
            if (this.searchOpen) {
                this.menuOpen = false;
            }
        },
    },
};
</script>

<style scoped>
header {
    height: 69px;
}

.nav-item {
    display: flex;
    padding: 0rem .75rem;
    align-items: center;
    letter-spacing: 0.32px;
}

.nav-item:hover{
    color: rgba(255, 255, 255, 0.8);
}

.search-input {
    padding: 0.5rem 2rem 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: white;
}

.hamburger-menu {
    display: flex;
    flex-direction: column;
    background-color: #2b2c30;
    padding: 2rem;
    position: absolute;
    top: 69px; 
    left: 0;
    width: 100%;
    max-height: calc(100vh - 69px); 
    overflow-y: auto;
}

.menu-column {
    display: flex;
    flex-direction: column;
}

.hamburger-menu a {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    color: white;
}

.hamburger-menu a:hover {
    color: #ccc;
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.2s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
}

.search-overlay, .menu-overlay {
    top: 125px;
}

.menu-overlay{
       top: 493px;
    }

.search-bar {
    top: 69px;
}

@media (max-width: 768px) {
    .pr-9 {
        padding-right: 1rem;
    }
    .pl-8 {
        padding-left: 1rem;
    }

    .nav-item {
        padding: 0.5rem 1rem;
    }
    .hamburger-menu {
        padding: 1rem;
        top: 60px;
        height: calc(100vh - 60px);
        max-height: calc(100vh - 60px); 
        overflow-y: auto; 
    }
    
    .search-overlay {
        top: 116px;
    }

    .menu-overlay{
       display: none;
    }
    
    .search-bar {
        top: 60px;
    }

    header {
    height: 60px;
    }
}
</style>

