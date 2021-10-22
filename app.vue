<script setup>
const { data } = await useAsyncData('modules', () => $fetch('/api/modules'));
</script>

<style>
.blurry-gradient {
  @apply w-full top-0 left-0 h-screen hidden sm:block fixed overflow-hidden z-10;
  background: radial-gradient(
      circle at 15% 50%,
      #09846655,
      rgba(255, 255, 255, 0) 25%
    ),
    radial-gradient(circle at 85% 30%, #003543, rgba(255, 255, 255, 0) 25%);
}
</style>

<template>
  <Title>Is Nuxt 3 ready?</Title>
  <Head lang="en-US" />
  <div class="bg-[#151718] text-gray-200 min-h-screen font-sans">
    <div class="blurry-gradient"></div>
    <div class="p-4 sm:p-8 z-20 relative">
      <div class="max-w-6xl mx-auto">
        <section class="my-24">
          <h1
            class="text-4xl md:text-[60px] font-bold text-nuxt-light text-center leading-loose"
          >Is Nuxt 3 ready?</h1>
          <p
            class="text-center text-md md:text-lg mt-6 text-green-100"
          >A community-built compatibility guide for Nuxt 3 modules</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 my-6">
            <a
              href="/api/modules"
              class="border-nuxt-light hover:bg-nuxt-dark transition-colors duration-300 text-white border py-2 px-6 rounded-md font-medium inline-flex gap-3 text-center"
            >
              <GetApi />Explore API data
            </a>
            <a
              href="https://github.com/owlnai/isnuxt3ready"
              class="border-nuxt-light hover:bg-nuxt-dark transition-colors duration-300 border text-white py-2 px-6 rounded-md font-medium inline-flex gap-3 text-center"
            >
              <GitStar />Star this project
            </a>
          </div>
        </section>
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 grid-flow-row my-12">
          <Card
            v-for="module in data"
            :key="module.name"
            :title="module.name"
            :bridge="module.bridge"
            :core="module.core"
            :repoUrl="module.repoUrl"
            :issueUrl="module.issueUrl"
            :maintainers="module.maintainers"
          />
        </section>
        <footer class="text-center">
          Built with ♥️ by
          <a href="https://owln.ai" class="underline">@owlnai</a> and other maintainers.
          <a
            href="https://github.com/owlnai/isnuxt3ready"
            class="underline"
          >Contribute</a>
        </footer>
      </div>
    </div>
  </div>
</template>