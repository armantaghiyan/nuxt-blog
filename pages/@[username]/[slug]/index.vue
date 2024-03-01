<script setup lang="ts">
import type {PostRes} from "~/utils/api";
import type {Post} from "~/utils/models";
import PostHeader from "~/components/post/post-header.vue";

const route = useRoute();

const post = ref<Partial<Post>>({});

await useAsyncData('getPost', () => fetchData());

async function fetchData() {
    const {data} = await useCustomFetch<PostRes>({ url: `post/${route.params.username}/${route.params.slug}`});
    post.value = data.value!.post;
}
</script>

<template>
    <nuxt-layout name="secondery-layout">
        <div class="max-w-[800px] px-6 py-4 mx-auto">
            <post-header :post="post as Post" size="lg" class="pt-5"/>

            <h1 class="py-5">{{ post.title }}</h1>
            <p class="font-normal text-base text-gray-900 leading-8">{{ post.content }}</p>

            <div class="flex gap-x-2 pt-8">
                <NuxtLink v-for="tag in post.tags" :href="`/tag/${tag.slug}`">
                    <div class="bg-gray-200 text-gray-900 rounded-lg font-bold text-[13.3px] px-4 py-1">{{ tag.title }}</div>
                </NuxtLink>
            </div>
        </div>
    </nuxt-layout>
</template>
