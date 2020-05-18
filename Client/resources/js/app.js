require("./bootstrap");

import Vue from "vue";
import router from "./routes.js";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import store from "./store";

// install Vee-Validate rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

// Install Vee-Validate components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.component("pagination", require("laravel-vue-pagination"));

const app = new Vue({
    el: "#app",
    router,
    store,
});
