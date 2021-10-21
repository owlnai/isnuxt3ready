<script setup>
const { data } = await useAsyncData('modules', () => $fetch('/api/modules'));
</script>

<template>
  <div class="bg-nuxt-darkest text-white min-h-screen font-sans p-4 sm:p-8">
    <div class="max-w-6xl mx-auto">
      <section>
        <h1
          class="text-4xl md:text-[60px] font-bold text-nuxt-light text-center leading-loose mt-12"
        >Is Nuxt 3 ready?</h1>
         <Title>Is Nuxt 3 ready?</Title>
        <p
          class="text-center text-md md:text-lg"
        >A community-built compatibility guide for Nuxt 3 modules</p>
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
          :maintainers="module.maintainers"
        />
      </section>
      <footer class="text-center">Built with ♥️ by <a href="https://owln.ai" class="underline">@owlnai</a> and other maintainers. <a href="https://github.com/owlnai/isnuxt3ready" class="underline">Contribute</a></footer>
    </div>
  </div>
</template>
