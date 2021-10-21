<script setup>
const { data } = await useAsyncData('modules', () => $fetch('/api/modules'));
</script>

<template>
  <div
    class="bg-[#012A35] text-white min-h-screen font-sans p-4 sm:p-8 transition-colors duration-300"
  >
    <div class="max-w-6xl mx-auto">
      <section class="my-12">
        <h1 class="text-[60px] font-bold text-[#00DC82] text-center leading-normal">Is Nuxt 3 ready?</h1>
        <p
          class="text-center"
        >Your best up-to-date guide for the compatibility of your next Nuxt module</p>
      </section>
      <section class="grid grid-cols-3 gap-4 grid-flow-row">
        <article v-for="module in data" :key="module.name" class="rounded-sm bg-[#003543] p-4">
          <h2 class="font-semibold text-2xl">{{ module.name }}</h2>
          <div>Nuxt Bridge: {{ module.bridge }}</div>
          <div>Nuxt 3: {{ module.core }}</div>
          <div class="flex justify-between mt-6">
            <a
              class="text-xl text-opacity-50"
              :href="module.repoUrl"
              v-if="module.repoUrl"
            >{{ module.repoUrl.split(".com/").pop() }}</a>
            <span v-else>[TBA]</span>
            <a :href="module.issueUrl" v-if="module.issueUrl">Issue Tracker</a>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>