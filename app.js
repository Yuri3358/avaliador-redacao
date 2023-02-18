const app = Vue.createApp({})

const routes = [
    {path: "/cadastro", component: formsComponent},
    {path: "/lista", component: dataComponent},
    {path: "/aboutme", component: cardComponent}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

app
.component("Page", pageComponent)
.component("Register", formsComponent)
.component("Essays", dataComponent)
.component("Creator", cardComponent)
.use(router)

app.mount("#root")