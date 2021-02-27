require("./bootstrap");

import Vue from "vue";
import router from "./routes.js";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import store from "./store";

import moment from "moment";

Vue.prototype.lodash = window._;

// Sweet Alert 2
import Swal from "sweetalert2";
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});
window.Toast = Toast;
// Sweet Alert 2

Vue.config.productionTip = true;

// My Custom Validation with Error Message
extend("required", {
    validate: value => {
        if (value > 0) {
            return true;
        }
    },
    message: "{_field_} field is required"
});
extend("confirmed", {
    validate: (value, confirmed) => {
        if (value === confirmed) {
            return true;
        }
    },
    message: "Passwords don't match"
});

/**
 * * Filter time with moment.js
 */
Vue.filter("moment-with-time", value => {
    return moment(value).format("MMMM Do YYYY, h:mm:ss a");
});

// install Vee-Validate rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

// Install Vee-Validate components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

// Vue.component("pagination", require("laravel-vue-pagination"));

const app = new Vue({
    el: "#app",
    router,
    store,
});
