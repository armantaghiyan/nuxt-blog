<script setup lang="ts">
import type {Post} from "~/utils/models";

defineProps<{
    post: Post
    size: 'sm' | 'lg'
}>();
</script>

<template>
    <header>
        <div class="flex justify-between">
            <div class="flex">
                <div>
                    <img class="rounded-full" :class="size === 'sm'? 'w-10':'w-12'" :src="post.user?.avatar" :alt="post.user?.name"/>
                </div>
                <div class="w-4"></div>
                <div class="flex flex-col justify-between">
                    <div :class="size === 'sm'? 'text-[12.8px]':'text-[16px]'">{{ post.user?.name }}</div>
                    <div class="text-[12px] text-gray-700">7 دقیقه پیش - خواندن 3 دقیقه</div>
                </div>
            </div>

            <router-link v-if="size === 'sm'" :to="`/topic/${post.topic?.slug}`" class="text-gray-700 hover:text-gray-900 duration-150 cursor-pointer text-[11.2px] font-bold">
                {{ post.topic?.title }}
            </router-link>
        </div>
    </header>
</template>
