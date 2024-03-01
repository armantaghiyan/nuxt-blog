<script setup lang="ts">
import type {Post} from "~/utils/models";

defineProps<{
    post: Post
}>();
</script>

<template>
    <article class="bg-white py-4 rounded base-shadow">
        <post-header :post="post" class="px-5" size="sm"/>

        <div>
            <nuxt-link :to="`/@${post.user?.username}/${post.slug}`">
                <h2 class="text-[20.8px] font-bold px-4 py-5">{{ post.title }}</h2>
                <img :src="post.thumbnail" :alt="post.title" class="w-full"/>
                <p class="text-gray-600 p-4 text-[13.5px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...</p>
            </nuxt-link>
        </div>

        <footer class="flex justify-between px-4">
            <div>a</div>
            <div>b</div>
        </footer>
    </article>
</template>
