import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import Posts from "../pages/Posts.vue";
import MyPage from "../pages/MyPage.vue";
import EmptyPage from "../pages/EmptyPage.vue";

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    {
        path: '/', component: Main,
        children: [
            {
                path:'posts', component: Posts
            },
            {
                path:'mypage', component: MyPage
            }
        ]
    },
    { path: '/:pathMatch(.*)*', component: EmptyPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;