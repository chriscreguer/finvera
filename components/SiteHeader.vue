<template>
    <header class="sticky top-0 flex flex-col z-10 transition-all text-white bg-dark"
    >
        <div class="px-8 w-screen flex items-center justify-between h-full">
            <!-- Left Menu -->
            <div class="flex items-center h-full">
                <button class="h-8 w-8 group relative">
                    <img src="../assets/images/icons/menu.svg" alt="Menu" class="menu-icon" />
                </button>
            </div>

            <!-- Logo -->
            <div class="absolute left-1/2 transform -translate-x-1/2 flex gap-3 items-center justify-end">
                <img
                    src="../assets/images/logo-logomark.svg"
                    alt="Logo"
                    class="logomark transition-transform"
                    :class="{ 'collapsed': scrolled }" />
                <div class="content-wrapper" :class="{ 'collapsed': scrolled }">
                    <img
                        src="../assets/images/logo-wordmark.svg"
                        alt="Logo"
                        class="wordmark" />
                    <span class="subtitle text-white/70 font-sans flex items-center h-5">small cap stock news</span>
                </div>
            </div>

            <!-- Right Menu -->
            <div class="flex items-center gap-4">
                <div class="group px-6 py-2 rounded font-sans font-semibold flex relative">
                    <a href="" class="uppercase font-mono text-white/80 text-sm self-center text-white">
                        Newsletter
                    </a>
                </div>
                <button class="h-8 w-8 group relative" @click="toggleSearch">
                    <img src="../assets/images/icons/search.svg" alt="Search" class="menu-icon" />
                </button>
            </div>
        </div>

        <!-- Topics Row -->
        <div class="topics-row" :class="{ 'collapsed': scrolled }">
            <a href="#" class="nav-link">Markets</a>
            <a href="#" class="nav-link">Investing</a>
            <a href="#" class="nav-link">Small Caps</a>
            <a href="#" class="nav-link">Analysis</a>
        </div>
    </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'SiteHeader',
    setup() {
        const scrolled = ref(false);

        const handleScroll = () => {
            if (window.scrollY > 60 && !scrolled.value) {
                scrolled.value = true;
            }
            else if (window.scrollY < 40 && scrolled.value) {
                scrolled.value = false;
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            scrolled
        };
    },
};
</script>

<style>
header {
    height: 120px;
    transition: height 0.5s ease-in-out;
}

header .logomark {
    height: 48px;
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

header .logomark.collapsed {
    height: 0;
    opacity: 0;
}

header .content-wrapper {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

header .content-wrapper.collapsed {
    transform: scale(0.9);
    opacity: 0;
}

.topics-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.25rem 1rem;
    background-color: #2b2c30;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    transition: all 0.5s ease-in-out;
}

.topics-row.collapsed {
    transform: scaleY(0);
    opacity: 0;
    pointer-events: none;
}

.topics-row .nav-link {
    padding: 0.5rem;
}

.menu-icon {
    filter: brightness(0) invert(1);
}

.subtitle {
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
}

.subtitle.collapsed {
    opacity: 0;
}
</style>
