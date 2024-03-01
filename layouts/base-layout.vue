<template>
    <div>
        <header class="bg-white h-[102px] base-shadow">
            <div class="flex justify-between gap-2 h-full mx-auto px-4 items-center max-w-[1000px]">
                <div>
                    <nuxt-link to="/" class="text-blue text-[13.3px] font-normal">وبلاگ</nuxt-link>
                </div>
                <div>
                    <nuxt-link class="bg-white text-[13.3px] font-normal text-blue rounded px-6 py-[5px]" href="/user/login">ورود</nuxt-link>
                    <nuxt-link class="bg-blue text-[13.3px] font-normal text-white rounded px-6 py-[5px]" href="/user/register">ثبت نام</nuxt-link>
                </div>
            </div>
        </header>
        <slot/>
    </div>
</template>
