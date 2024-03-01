<script setup lang="ts">
import type {Post} from "~/utils/models";
import Loading from "~/components/app/loading.vue";
import type {PostListRes} from "~/utils/api";

const props = defineProps<{
    params?: object
}>();

const posts = ref<Post[]>([]);
const showLoadingPage = ref<boolean>(true);

const {execute, pending} = await useAsyncData('getPosts', async () => {
    await fetchData()
});

async function fetchData() {
    const {data} = await useCustomFetch<PostListRes>({
        url: 'post',
        options: {
            params:{
                loaded_count: posts.value.length,
                ...props.params??{}
            }
        }
    });

    if(data.value!.posts.length === 0){
        showLoadingPage.value = false;
    }

    posts.value.push(...data.value!.posts);
}
</script>

<template>
    <div class="max-w-[650px] mx-auto flex flex-col gap-y-5 pt-6">
        <post-item v-for="post in posts" :post="post"/>

        <button v-if="!pending && showLoadingPage" @click="execute" class="bg-white py-4 rounded base-shadow mb-4">بیشتر</button>
        <loading v-if="pending" class="mx-auto"/>
    </div>
</template>
