<script setup>

defineProps({
    title: String,
    core: String,
    bridge: String,
    repoUrl: String,
    issueUrl: String,
});

function color(status) {
    switch (status) {
        case 'ready':
            return "bg-green-600";

        case 'pending':
            return "bg-yellow-500 text-black";

        case 'unknown':
            return "bg-white";

        case 'bugged':
            return "bg-orange-600";
        case 'unsupported':
            return "bg-red-600";

    }
}
</script>
<template>
    <article class="rounded-md bg-nuxt-dark p-6 shadow-md">
        <h2 class="font-semibold text-2xl mb-4">{{ title }}</h2>
        <div class="flex justify-between mb-2">
            <div>
                <Core class="h-6 w-6 mr-2 inline-block" />Nuxt Core
            </div>
            <span
                :class="`text-sm  font-medium uppercase tracking-wider ${color(core)} py-1 px-4 rounded-full`"
            >{{ core }}</span>
        </div>
        <div class="flex justify-between gap-2">
            <div>
                <Bridge class="h-6 w-6 mr-2 inline-block" />Nuxt Bridge
            </div>
            <span
                :class="`text-sm font-medium uppercase tracking-wider ${color(bridge)} py-1 px-4 rounded-full`"
            >{{ bridge }}</span>
        </div>
        <div class="flex justify-between mt-4">
            <a
                class="text-xl"
                :href="repoUrl"
                v-if="repoUrl"
            >{{ repoUrl.split(".com/").pop() }}</a>
            <span v-else>[TBA]</span>
            <a :href="issueUrl" v-if="issueUrl">
                <GitHub class="h-6 w-6" />
            </a>
        </div>
    </article>
</template>