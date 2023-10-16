import type { RouteRecordRaw } from 'vue-router';
import Hello from '@/components/Hello.vue'


export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Hello 
    },
    {
        path: '/xixi',
        name: 'xixi',
        component: Hello 
    },
]