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
            return "dark:from-green-800 dark:to-green-900 from-nuxt-valley to-nuxt-mountain";

        case 'pending':
            return "from-yellow-500 to-yellow-600 dark:text-black";

        case 'unknown':
            return "from-gray-700 to-gray-800";

        case 'bugged':
            return "from-orange-800 to-orange-900";
        case 'unsupported':
            return "from-red-700 to-red-800";

    }
}
</script>
<template>
    <article
        class="rounded-md bg-gradient-to-b dark:from-nuxt-space dark:to-[#101B1F] from-gray-300 to-[#FFFFFF] shadow-md"
    >
        <div class="p-4">
            <div class="mb-4">
                <h2 class="font-semibold text-2xl">{{ title }}</h2>
                <p class="text-sm">
                    <a
                        :href="'https://github.com/' + maintainer.replace('@', '')"
                        v-for="(maintainer, index) in maintainers.split(', ')"
                        v-if="maintainers"
                    >
                        <template v-if="index > 0">,</template>
                        {{ maintainer }}
                    </a>
                    <template v-else>-</template>
                </p>
            </div>
            <div class="flex justify-between mb-2">
                <div>
                    <Core class="h-6 w-6 mr-2 inline-block" />Nuxt 3
                </div>
                <span
                    :class="`text-sm text-white  font-medium uppercase tracking-wider ${color(core)} py-1 px-4 rounded-full bg-gradient-to-b`"
                >{{ core }}</span>
            </div>
            <div class="flex justify-between gap-2">
                <div>
                    <Bridge class="h-6 w-6 mr-2 inline-block" />Nuxt Bridge
                </div>
                <span
                    :class="`text-sm text-white font-medium uppercase tracking-wider ${color(bridge)} py-1 px-4 rounded-full bg-gradient-to-b`"
                >{{ bridge }}</span>
            </div>
        </div>
        <div class="flex justify-between p-4 bg-nuxt-grass dark:bg-nuxt-space rounded-b-md">
            <a class="text-sm items-center inline-flex gap-2" :href="repoUrl" v-if="repoUrl">
                <GitHub class="h-5 w-5" />
                {{ repoUrl.split(".com/").pop() }}
            </a>
            <span v-else class="text-sm items-center inline-flex gap-2">
                <GitHub class="h-5 w-5" />TBA
            </span>
            <a :href="issueUrl" v-if="issueUrl">
                <GitIssue class="h-5 w-5" />
            </a>
        </div>
    </article>
</template>