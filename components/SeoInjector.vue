<script setup>
const description = "A community-built compatibility guide for Nuxt 3 modules";
const title = "Is Nuxt 3 Ready?";
const url = "https://isnuxt3ready.owln.ai/"
const ogImage = "https://isnuxt3ready.owln.ai/og.png";
</script>
<template>
    <Title>Is Nuxt 3 ready?</Title>
    <Meta name="description" :content="desecription" />
    <Meta property="og:url" :content=url />
    <Meta property="og:type" content="website" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" :content="ogImage" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta property="twitter:domain" :content="url.split('/')[2]" />
    <Meta property="twitter:url" :content="url" />
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
</template>