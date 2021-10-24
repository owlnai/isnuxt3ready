<script setup>
const { data } = await useAsyncData('modules', () => $fetch('/api/modules'));
import { UseDark } from '@vueuse/components'
import Moon from './components/Moon.vue';
</script>

<style>
.dark .blurry-gradient {
  @apply w-full top-0 left-0 h-screen hidden sm:block fixed overflow-hidden z-10;
  background: radial-gradient(
      circle at 15% 50%,
      #09846655,
      rgba(255, 255, 255, 0) 25%
    ),
    radial-gradient(circle at 85% 30%, #003543, rgba(255, 255, 255, 0) 25%);
}
.blurry-gradient {
  @apply w-full top-0 left-0 h-screen hidden sm:block fixed overflow-hidden z-10;
  background: radial-gradient(
      circle at 15% 50%,
      #2bf3c13a,
      rgba(255, 255, 255, 0) 25%
    ),
    radial-gradient(circle at 85% 30%, #1691a146, rgba(255, 255, 255, 0) 25%);
}
</style>

<template>
  <Title>Is Nuxt 3 ready?</Title>
  <Head lang="en-US" />
  <div
    class="dark:bg-[#151718] dark:text-gray-200 text-gray-800 bg-gray-200 min-h-screen font-sans"
  >
    <div class="blurry-gradient"></div>
    <div class="p-4 sm:p-8 z-20 relative">
      <div class="max-w-6xl mx-auto">
        <section class="my-24">
          <h1 class="text-4xl md:text-[60px] font-bold text-center leading-loose">
            Is
            <span class="text-nuxt-light">Nuxt 3</span> ready?
          </h1>
          <p
            class="text-center text-md md:text-lg mt-6 text-green-900 dark:text-green-100"
          >A community-built compatibility guide for Nuxt 3 modules</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 my-6">
            <a
              href="/api/modules"
              class="border-green-800 dark:hover:bg-nuxt-dark hover:bg-green-200 hover:bg-opacity-50 dark:text-white border-2 py-2 px-6 rounded-md font-medium inline-flex gap-3 text-center"
            >
              <GetApi />Explore API data
            </a>
            <a
              href="https://github.com/owlnai/isnuxt3ready"
              class="border-green-800 dark:hover:bg-nuxt-dark hover:bg-green-200 hover:bg-opacity-50 border-2 dark:text-white py-2 px-6 rounded-md font-medium inline-flex gap-3 text-center"
            >
              <GitStar />Star this project
            </a>
            <UseDark v-slot="{ isDark, toggleDark }">
              <span
                @click="toggleDark()"
                class="select-none cursor-pointer border-green-800 dark:hover:bg-nuxt-dark hover:bg-green-200 hover:bg-opacity-50 border-2 dark:text-white py-2 px-6 rounded-md font-medium inline-flex gap-3 text-center"
              >
                <template v-if="isDark">
                  <Moon />
                </template>
                <template v-else>
                  <Sun />
                </template>
                Toggle theme
              </span>
            </UseDark>
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
          <div
            class="rounded-md border-2 border-gray-500 border-dashed p-4 flex flex-col justify-center items-center text-center"
          >
            <h2 class="text-2xl font-semibold mb-2">Missing a module?</h2>
            <a href="https://github.com/owlnai/isnuxt3ready/issues/new?assignees=&labels=module+request&template=new-module.md&title=%5BMODULE+REQUEST%5D" class="underline">Request it</a>
          </div>
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