<template>
    <div class="relative bg-primary-101 newsletter flex items-center py-8 mb-6 md:mb-12">
        <div class="container-custom mx-auto flex px-6">
            <div class="relative flex flex-col gap-4 self-center z-10 text-left w-full">
                <h2 class="text-[42px] md:text-[64px] font-bold text-dark">Stay ahead of the herd.</h2>
                <p class="text-xl font-sans font-medium text-text-light">Fast, accurate small-cap updates sent to your inbox before the market reacts.</p>
                <form class="mt-4 flex flex-col md:flex-row">
                    <input type="email" class="w-full md:w-1/3 px-5 py-5 h-[76px] border border-black/10 text-xl font-sans placeholder:text-black/70" placeholder="Enter your email" />
                    <button type="submit" class="mt-3 md:mt-0 md:-ml-px px-8 py-5 md:h-[76px] bg-primary-500 border border-primary text-white font-bold text-base uppercase font-sans tracking-wider">Join now</button>
                </form>
            </div>
            <div class="absolute inset-0 z-0 flex items-end justify-end">
                <img src="../assets/images/logo-logomark.svg" class="w-auto h-full opacity-5 md:opacity-10 xl:opacity-15" alt="Watermark Logo">
            </div>
        </div>
    </div>
</template>

<style scoped>
.newsletter{
    height: 430px;
}

.newsletter button:hover{
    background-color: rgb(0, 83, 208);
}

</style>
