<template>
    <div class="relative bg-primary-101 newsletter flex items-center py-8 mb-12">
        <div class="container-custom mx-auto flex px-6">
            <div class="relative flex flex-col gap-4 self-center z-10 text-left w-full">
                <h2 class="text-7xl font-bold text-dark">Stay ahead of the herd.</h2>
                <p class="text-xl font-sans font-medium text-text-light">Fast, accurate small-cap updates sent to your inbox before the market reacts.</p>
                <form class="mt-6 flex flex-col md:flex-row">
                    <input type="email" class="w-full md:w-1/3 px-7 py-5 border border-black/20 text-lg font-sans" placeholder="Enter your email" />
                    <button type="submit" class="mt-3 md:mt-0 md:-ml-px px-7 py-5 bg-primary-500 border border-primary text-white font-bold text-lg uppercase font-sans tracking-wider">Join now</button>
                </form>
            </div>
            <div class="absolute inset-0 z-0 flex items-end justify-end">
                <img src="../assets/images/logo-logomark-watermark.svg" class="w-auto h-full object-contain" alt="Watermark Logo">
            </div>
        </div>
    </div>
</template>

<style scoped>
.newsletter{
    height: 430px;
}

.newsletter button:hover{
    background-color: rgb(0, 34, 84);
}

</style>
