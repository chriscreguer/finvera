<template>
    <header class="sticky top-0 flex flex-col z-40 transition-all text-white bg-dark">
        <div class="pr-9 pl-8 w-screen flex items-center justify-between h-full">
            <!-- Logo -->
            <a href="/" class="flex items-center h-full px-3">
                <img src="../assets/images/logo.svg" alt="Logo" class="h-7.5" />
            </a>

            <!-- Middle Nav Items -->
            <nav class="flex items-center h-3/4">
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
                <a href="#" class="nav-item">
                    Newsletter
                </a>
                <div class="flex h-full items-center">
                    <div class="flex items-center relative h-full px-4 opacity-80 hover:opacity-90 cursor-pointer" @click="toggleSearch">
                        <img
                            src="../assets/images/icons/search.svg"
                            alt="Search"
                            class="search-icon h-full w-5 "
                        />
                        <input
                            v-if="searchOpen"
                            type="text"
                            placeholder="Search"
                            class="search-input h-full" />
                    </div>
                    <button class="h-full group relative opacity-80 pl-3 last:pr-3 hover:opacity-90" @click="toggleMenu">
                        <img src="../assets/images/icons/menu.svg" alt="Menu" class="w-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Hamburger Menu -->
        <transition name="slide-fade">
            <div v-if="menuOpen" class="hamburger-menu  flex gap-16">
                <div class="flex gap-4">
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
        },
        toggleSearch() {
            this.searchOpen = !this.searchOpen;
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
    height: 100%;
}

.nav-item:hover{
    color: rgba(255, 255, 255, 0.8);
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
    flex-direction: row;
    background-color: #2b2c30;
    padding: 2rem;
    position: absolute;
    top: 69px; /* Adjusted to be beneath the navbar */
    left: 0;
    width: 100%;
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
</style>
