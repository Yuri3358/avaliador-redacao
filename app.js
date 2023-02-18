const app = Vue.createApp({})

const routes = [
    {path: "/cadastro", component: formsComponent},
    {path: "/lista", component: dataComponent}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

app
.component("formsComponent", formsComponent)
.component("dataComponent", dataComponent)
.use(router)

app.mount("#root")