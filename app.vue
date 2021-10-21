<script setup>
const { data } = await useAsyncData('modules', () => $fetch('/api/modules'));
</script>

<template>
  <div class="bg-nuxt-darkest text-white min-h-screen font-sans p-4 sm:p-8">
    <div class="max-w-6xl mx-auto">
      <section>
        <h1
          class="text-4xl md:text-[60px] font-bold text-nuxt-light text-center leading-normal mt-12"
        >Is Nuxt 3 ready?</h1>
        <p
          class="text-center text-md md:text-lg"
        >A community-built compatibility guide of your next Nuxt 3 module</p>
      </section>
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-8 grid-flow-row my-12">
        <Card
          v-for="module in data"
          :key="module.name"
          :title="module.name"
          :bridge="module.bridge"
          :core="module.core"
          :repoUrl="module.repoUrl"
          :issueUrl="module.issueUrl"
        />
      </section>
      <footer class="text-center">Built with ♥️ by <a href="https://owln.ai" class="underline">@owlnai</a> and other maintainers</footer>
    </div>
  </div>
</template>