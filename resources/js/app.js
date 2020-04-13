require("./bootstrap");

import Vue from "vue";
import router from "./routes.js";

const app = new Vue({
    el: "#app",
    router
});
