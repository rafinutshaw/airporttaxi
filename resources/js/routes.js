import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";

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
        // component: Home
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
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("./pages/Contact")
    },
    // {
    //     path: "/career",
    //     name: "Career",
    //     component: () => import("./pages/Career")
    // },
    {
        path: "/login",
        name: "Login",
        component: () => import("./pages/Auth/Login")
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("./pages/Auth/Register")
    },
    {
        path: "/reset-password",
        name: "Reset Password",
        component: () => import("./pages/Auth/Password/Forgot Password")
    },
    {
        path: "/password/reset/:token",
        name: "reset-password-form",
        component: () => import("./pages/Auth/Password/Reset Password")
    },
    {
        path: "/terms-and-conditions",
        name: "terms-and-conditions",
        component: () => import("./pages/Terms & Conditions")
    },
    {
        path: "/manage-bookings/:id?/:email?",
        name: "manage-bookings",
        component: () => import("./pages/Manage Bookings")
    },
    {
        path: "/new-payment/:id",
        name: "new-payment",
        component: () => import("./pages/New Payment")
    }
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
