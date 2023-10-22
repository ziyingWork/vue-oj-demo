import type { RouteRecordRaw } from 'vue-router';
import Home from '@/views/HomeIndex.vue'
import BrowseQuestions from '@/views/BrowseQuestions.vue'
import BrowseQuestionsToSubmit from '@/views/BrowseQuestionsToSubmit.vue'
import CreateQuestions from '@/views/CreateQuestions.vue'
import ManageQuestions from '@/views/ManageQuestions.vue'
import LoginIndex from '@/views/LoginIndex.vue'
import RegistIndex from '@/views/RegistIndex.vue'



export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'homeIndex',
        component: Home 
    },
    {
        path: '/browse-questions',
        name: 'browseQuestions',
        component: BrowseQuestions 
    },
    {
        path: '/browse-questions-to-submit',
        name: 'browseQuestionsToSubmit',
        component: BrowseQuestionsToSubmit 
    },
    {
        path: '/create-questions',
        name: 'createQuestions',
        component: CreateQuestions 
    },
    {
        path: '/manage-questions',
        name: 'manageQuestions',
        component: ManageQuestions 
    },
    {
        path: '/login-index',
        name: 'loginIndex',
        component: LoginIndex 
    },
    {
        path: '/regist-index',
        name: 'registIndex',
        component: RegistIndex 
    },
]