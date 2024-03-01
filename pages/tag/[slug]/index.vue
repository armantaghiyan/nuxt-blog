<script setup>
const route = useRoute();
</script>

<template>
    <nuxt-layout name="main-layout">
        <post-list :params="{tag: route.params.slug}"/>
    </nuxt-layout>
</template>
