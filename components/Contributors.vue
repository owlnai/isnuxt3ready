<script setup>
const repo = "owlnai/isnuxt3ready";
const max_contributors = 8;
const avatar_size = 35;

const { data: contributors } = await useAsyncData(
    'contributors',
    () => $fetch(`https://api.github.com/repos/${repo}/contributors`)
);
</script>
<template>
    <div class="inline-flex items-center overflow-hidden mx-2" v-if="contributors">
        <span class="mr-3">Built with ♥️ by</span>
        <a
            v-for="contributor in contributors.slice(0, max_contributors)"
            :href="contributor.html_url"
            v-if="contributors"
            class="-ml-1"
        >
            <img
                class="inline-block rounded-full ring-2 ring-white bg-white"
                :width="avatar_size"
                :height="avatar_size"
                :src="contributor.avatar_url"
                :alt="`${contributor.login} avatar`"
            />
        </a>
        <span
            class="ml-3"
            v-if="contributors.length > max_contributors"
        >and other {{ contributors.length - max_contributors }} contributors</span>
    </div>
</template>