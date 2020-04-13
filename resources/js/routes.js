import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "Home",
        meta: {
            auth: true
        },
        /*
         * * Route level code-splitting
         * * this generates a separate chunk (home.[hash].js) for this route
         * * which is lazy-loaded when the route is visited.
         */
        component: () => import("./pages/Home") /* webpackChunkName: "home" */
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./pages/About")
    },
    {
        path: "/service",
        name: "Service",
        component: () => import("./pages/Service")
    }
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: () => import("../components/Login.vue")
    // },
    // {
    //     path: "/signup",
    //     name: "Signup",
    //     component: () => import("../components/Signup.vue")
    // }
];

const router = new Router({
    mode: "history",
    base: "/",
    routes
});

// router.beforeEach((to, from, next) => {
//     //* To Check if user is authenticated
//     if (
//         to.matched.some(record => record.meta.auth) &&
//         !store.getters.loggedIn
//     ) {
//         next("/login");
//         return;
//     } else {
//         next();
//     }
// });

export default router;
