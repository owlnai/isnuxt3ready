<script setup>

defineProps({
    title: String,
    core: String,
    bridge: String,
    repoUrl: String,
    issueUrl: String,
    maintainers: String,
});

function color(status) {
    switch (status) {
        case 'ready':
            return "bg-green-800";

        case 'pending':
            return "bg-yellow-500 text-black";

        case 'unknown':
            return "bg-gray-700";

        case 'bugged':
            return "bg-orange-800";
        case 'unsupported':
            return "bg-red-700";

    }
}
</script>
<template>
    <article class="rounded-md bg-gradient-to-b from-nuxt-darkest to-[#101B1F] shadow-md">
        <div class="p-4">
            <div class="mb-4">
                <h2 class="font-semibold text-2xl">{{ title }}</h2>
                <p class="text-sm">{{ maintainers || '-' }}</p>
            </div>
            <div class="flex justify-between mb-2">
                <div>
                    <Core class="h-6 w-6 mr-2 inline-block" />Nuxt 3
                </div>
                <span
                    :class="`text-xs  font-medium uppercase tracking-wider ${color(core)} py-1 px-4 rounded-full`"
                >{{ core }}</span>
            </div>
            <div class="flex justify-between gap-2">
                <div>
                    <Bridge class="h-6 w-6 mr-2 inline-block" />Nuxt Bridge
                </div>
                <span
                    :class="`text-xs font-medium uppercase tracking-wider ${color(bridge)} py-1 px-4 rounded-full`"
                >{{ bridge }}</span>
            </div>
        </div>
        <div class="flex justify-between p-4 bg-nuxt-darkest rounded-b-md">
            <a class="text-sm items-center inline-flex gap-2" :href="repoUrl" v-if="repoUrl">
                <GitHub class="h-5 w-5" />
                {{ repoUrl.split(".com/").pop() }}
            </a>
            <span v-else class="text-sm items-center inline-flex gap-2">       
                <GitHub class="h-5 w-5" />
                TBA
            </span>
            <a :href="issueUrl" v-if="issueUrl">
                <GitIssue class="h-5 w-5" />
            </a>
        </div>
    </article>
</template>