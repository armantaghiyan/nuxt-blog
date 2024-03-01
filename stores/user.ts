import {defineStore} from 'pinia';

export const userStore = defineStore('counter', {
    state: () => ({
        auth: false,
        user: {
            id: null,
            avatar: null,
            name: null,
            username: null,
        },
    }),
    actions: {
        doLogin(user: any) {
            this.user.id = user.id;
            this.user.avatar = user.avatar;
            this.user.name = user.name;
            this.user.username = user.username;

            this.auth = true;
        },
        isAuth() {
            return this.auth;
        }
    },
})