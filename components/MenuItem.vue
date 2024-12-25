<template>
    <div class="relative group p-4 rounded h-full flex">
        <!-- Activator Element -->
        <button 
            class="topics-menu-activator font-sans font-semibold focus:outline-none" 
            aria-haspopup="true" 
            aria-expanded="false">
            Topics
        </button>

        <!-- Dropdown Menu -->
        <div 
            class="topics-menu absolute left-0 rounded top-full w-max bg-white shadow-lg py-2 grid grid-cols-[auto_auto] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200"
            role="menu"
            @mouseover="toggleMenu(true)"
            @mouseleave="toggleMenu(false)">
            <a
                v-for="item in menuItems" 
                :key="item.id" 
                href=""
                role="menuitem"
                class="py-2 pl-4 pr-8 text-black hover:bg-primary-100 hover:text-primary-500 focus:bg-primary-100 focus:text-primary-500 focus:outline-none">
                {{ item.label }}
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MenuItem',
    data() {
        return {
            menuItems: [
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
                { id: 12, label: 'Offers' },
                { id: 11, label: 'Politics' },
                { id: 12, label: 'Offers' },
                { id: 11, label: 'Interviews' },
                { id: 12, label: 'Government' },
            ],
        };
    },
};
</script>
<style scoped>
/* Default hidden state for the dropdown menu */
.topics-menu {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
}

/* When group-hover or JavaScript state is active */
.group:hover .topics-menu,
.group:focus-within .topics-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Focus outline for accessibility */
a:focus {
    outline: 2px solid #1d4ed8; /* Tailwind's primary color */
    outline-offset: 2px;
}
</style>
