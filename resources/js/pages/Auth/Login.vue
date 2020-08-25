<template>
    <div>
        <section class="banner-area relative login">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div
                    class="row d-flex align-items-center justify-content-center"
                >
                    <div class="about-content col-lg-12">
                        <h1 class="text-white">
                            Login
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <div id="loginContainer" class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <ValidationObserver ref="form" v-slot="{ invalid }">
                                <form @submit.prevent="onSubmit" method="post">
                                    <div class="form-group row">
                                        <label
                                            for="email_address"
                                            class="col-md-4 col-form-label text-md-right"
                                            >E-Mail Address</label
                                        >
                                        <div class="col-md-6">
                                            <ValidationProvider
                                                vid="email"
                                                name="E-Mail"
                                                rules="required|email"
                                                v-slot="{ errors }"
                                            >
                                                <input
                                                    v-model="form.email"
                                                    type="email"
                                                    name="email"
                                                    class="form-control"
                                                    @blur="
                                                        inputFieldFocused.email = true
                                                    "
                                                    placeholder="Ex: john@example.com"
                                                    required
                                                />
                                                <!-- <span
                                                    v-if="
                                                        inputFieldFocused.email
                                                    "
                                                    class="text-danger"
                                                    >{{ errors[0] }}
                                                </span> -->
                                            </ValidationProvider>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label
                                            for="password"
                                            class="col-md-4 col-form-label text-md-right"
                                            >Password</label
                                        >
                                        <div class="col-md-6">
                                            <ValidationProvider
                                                vid="password"
                                                name="Password"
                                                rules="required"
                                                v-slot="{ errors }"
                                            >
                                                <input
                                                    v-model="form.password"
                                                    name="password"
                                                    type="password"
                                                    class="form-control"
                                                    @blur="
                                                        inputFieldFocused.password = true
                                                    "
                                                    required
                                                    placeholder="Enter Password"
                                                    ref="password"
                                                />
                                                <!-- <span
                                                    v-if="
                                                        inputFieldFocused.password
                                                    "
                                                    class="text-danger"
                                                    >{{ errors[0] }}
                                                </span> -->
                                            </ValidationProvider>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-1">
                                        <div class="col-md-6 offset-md-4">
                                            <div class="checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="remember"
                                                        v-model="form.remember"
                                                    />
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Show the errors -->
                                    <div v-if="form.errors.length > 0">
                                        <div
                                            class="col-sm-6 offset-md-4 alert alert-danger alert-dismissible fade show"
                                            role="alert"
                                            v-for="(error,
                                            index) in form.errors"
                                            :key="index"
                                        >
                                            <li v-if="error[0]">
                                                {{ error }}
                                            </li>
                                            <button
                                                type="button"
                                                class="close"
                                                data-dismiss="alert"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true"
                                                    >&times;</span
                                                >
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-md-6 offset-md-4">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                            :disabled="invalid"
                                        >
                                            Login
                                        </button>
                                        <router-link
                                            to="/reset-password"
                                            class="btn btn-link"
                                        >
                                            Forgot Your Password?
                                        </router-link>
                                        <!-- <a
                                            href="/password/reset"
                                            class="btn btn-link"
                                        >
                                            Forgot Your Password?
                                        </a> -->
                                    </div>
                                </form>
                            </ValidationObserver>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.login {
    background: url("../../../../public/img/join-us.jpg") center;
    background-size: cover;
}
#loginContainer {
    margin-top: 5%;
    margin-bottom: 5%;
}
.card {
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.07) !important;
}

.form-control {
    transition: box-shadow 0.15s ease;
    border: 0;
    box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
}

.card {
    border: 0px;
}

.card-header {
    background-color: white;
    border-bottom: 0px;
}

.card-body {
    background-color: #f4f5f7;
}
</style>

<script>
import axios from "axios";
// import { autoClose } from "../../tools/tools";
// import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
    name: "login",
    data() {
        return {
            // Create a new form instance
            form: {
                email: "",
                password: "",
                remember: false,
                errors: []
            },

            inputFieldFocused: {
                email: false,
                password: false
            }
        };
    },
    methods: {
        // ...mapActions(["login"]),
        onSubmit() {
            this.loginErrors = [];

            let email = this.form.email;
            let password = this.form.password;

            axios
                .post("/login", { email, password })
                .then(response => {
                    // console.log(response.data);

                    localStorage.setItem("loggedIn", true);
                    localStorage.setItem("authUsername", response.data.name);
                    localStorage.setItem("authEmail", response.data.email);

                    if (response.data.mobile != null)
                        localStorage.setItem(
                            "authMobile",
                            response.data.mobile
                        );

                    window.location = "/";
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        this.form.errors.push(
                            "Sorry, email or password was incorrect."
                        );
                    } else if (error.response.status == 404) {
                        this.form.errros.push(
                            "404 not found! Please try again later."
                        );
                    } else if (error.response.status == 429) {
                        this.form.errors.push(
                            "Too many login attempts. Please try again in 58 seconds."
                        );
                    } else {
                        this.form.errors.push(
                            "Something went wrong, please try again later."
                        );
                    }
                });

            // this.$store
            //     .dispatch("login", { email, password })
            //     .then(() => {
            //         // this.$router.push("/home");
            //         // axios.get("/home");
            //         // window.location.reload();
            //         window.location = "/";
            //     })
            //     .catch(error => {
            //         if (error.response.status == 422) {
            //             this.form.errors.push(
            //                 "Sorry, email or password was incorrect."
            //             );
            //         } else if (error.response.status == 404) {
            //             this.form.errros.push(
            //                 "404 not found! Please try again later."
            //             );
            //         } else if (error.response.status == 429) {
            //             this.form.errors.push(
            //                 "Too many login attempts. Please try again in 58 seconds."
            //             );
            //         } else {
            //             this.form.errors.push(
            //                 "Something went wrong, please try again later."
            //             );
            //         }
            //     });
        }
        // myAutoClose(target, time) {
        //     autoClose(target, time);
        // }
    },
    created() {
        $("html,body").scrollTop(0);
    }
};
</script>
