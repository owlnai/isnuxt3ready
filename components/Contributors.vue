<script setup>
const repo = "owlnai/isnuxt3ready";
const max_contributors = 8;
const avatar_size = 30;

const { data: contributors } = await useAsyncData(
    'contributors',
    () => $fetch(`https://api.github.com/repos/${repo}/contributors`)
);
</script>
<template>
    <div class="inline-flex -space-x-1 overflow-hidden mx-2">
        <a
            v-for="contributor in contributors.slice(0, max_contributors)"
            :href="contributor.html_url"
        >
            <img
                class="inline-block rounded-full ring-2 ring-white bg-white"
                :width="avatar_size"
                :height="avatar_size"
                :src="contributor.avatar_url"
                :alt="`${contributor.login} avatar`"
            />
        </a>
    </div>
</template>