<script setup>
const user = userStore();
const router = useRouter();
const api_token = useCookie('api_token')

import {toast} from "~/utils/toastify";

const loginForm = reactive({
    email: '',
    password: '',
    errors: [],
})

async function submitForm() {
    await useCustomFetch({
        url: 'user/login',
        options: {
            method: 'post',
            params: {
                email: loginForm.email,
                password: loginForm.password,
            },
        },
        success: (res) => {
            user.doLogin(res.user, res.api_token);
            api_token.value = res.api_token;

            toast('ورود با موفقیت انجام شد.');

            router.back();
        },
        error_validation: (errors) => {
            loginForm.errors = errors;
        }
    });
}
</script>

<template>
    <div class="flex justify-center items-center w-full min-h-screen">
        <div>
            <custom-form @validated="submitForm" :errors="loginForm.errors">
                <div class="flex flex-col">
                    <text-input type="text" id="email" v-model="loginForm.email" rules="required|email|max:40"/>
                    <text-input type="password" id="password" v-model="loginForm.password" rules="required|min:6|max:40"/>
                    <button class="bg-amber-500">ورود</button>
                </div>
            </custom-form>
        </div>
    </div>
</template>
