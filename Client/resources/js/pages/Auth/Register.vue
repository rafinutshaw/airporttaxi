<template>
    <div>
        <section class="banner-area relative register">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div
                    class="row d-flex align-items-center justify-content-center"
                >
                    <div class="about-content col-lg-12">
                        <h1 class="text-white">
                            Signup
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <div class="container" id="registerContainer">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Register</div>

                        <div class="card-body">
                            <!-- Vee-Validate 3.x -->

                            <ValidationObserver ref="form" v-slot="{ invalid }">
                                <form @submit.prevent="onSubmit">
                                    <input
                                        type="hidden"
                                        name="_token"
                                        :value="csrf"
                                    />
                                    <div class="form-group row">
                                        <label
                                            for="name"
                                            class="col-md-4 col-form-label text-md-right"
                                            >Name</label
                                        >
                                        <div class="col-md-6">
                                            <ValidationProvider
                                                vid="name"
                                                name="Name"
                                                rules="required"
                                                v-slot="{ errors }"
                                            >
                                                <input
                                                    v-model="form.name"
                                                    type="text"
                                                    name="name"
                                                    class="form-control"
                                                    required
                                                />
                                                <span class="text-danger">
                                                    {{ errors[0] }}
                                                </span>
                                            </ValidationProvider>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label
                                            for="email"
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
                                                <span
                                                    v-if="
                                                        inputFieldFocused.email
                                                    "
                                                    class="text-danger"
                                                    >{{ errors[0] }}
                                                </span>
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
                                                rules="min:8|max:20|required"
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

                                                <small
                                                    id="passwordHelpInline"
                                                    class="text-muted"
                                                >
                                                    Must be 8-20 characters
                                                    long.
                                                </small>
                                                <br />
                                                <span
                                                    v-if="
                                                        inputFieldFocused.password
                                                    "
                                                    class="text-danger"
                                                    >{{ errors[0] }}
                                                </span>
                                            </ValidationProvider>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label
                                            for="password-confirm"
                                            class="col-md-4 col-form-label text-md-right"
                                            >Confirm Password</label
                                        >
                                        <div class="col-md-6">
                                            <ValidationProvider
                                                name="Confirm Password"
                                                rules="required|confirmed:password"
                                                v-slot="{ errors }"
                                            >
                                                <input
                                                    name="password_confirmation"
                                                    type="password"
                                                    class="form-control"
                                                    placeholder="Rewrite your password"
                                                    v-model="
                                                        form.password_confirmation
                                                    "
                                                    @blur="
                                                        inputFieldFocused.password_confirmation = true
                                                    "
                                                />
                                                <span
                                                    v-if="
                                                        inputFieldFocused.password_confirmation
                                                    "
                                                    class="text-danger"
                                                    >{{ errors[0] }}
                                                </span>
                                            </ValidationProvider>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-6 offset-md-4">
                                            <button
                                                type="submit"
                                                class="btn btn-primary"
                                                :disabled="invalid"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </ValidationObserver>
                        </div>
                    </div>

                    <!-- Show the errors -->
                    <div v-if="form.errors.length > 0">
                        <div
                            class="mt-4 alert alert-danger alert-dismissible fade show"
                            role="alert"
                            v-for="(error, index) in form.errors"
                            :key="index"
                            v-bind="myAutoClose('.alert', 3000)"
                        >
                            <li v-if="error.email">
                                {{ error.email[0] }}
                            </li>
                            <li v-if="error[0]">
                                {{ error }}
                            </li>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.register {
    background: url("../../../../public/img/join-us.jpg") center;
    background-size: cover;
}
#registerContainer {
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
import { extend } from "vee-validate";
import { autoClose } from "../../tools/tools";
// import { log } from "util";

export default {
    data() {
        return {
            csrf: document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),

            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                remember: false,
                errors: []
            },

            inputFieldFocused: {
                email: false,
                password: false,
                password_confirmation: false
            }
        };
    },
    methods: {
        onSubmit() {
            this.form.errors = [];

            let name = this.form.name;
            let email = this.form.email;
            let password = this.form.password;
            let password_confirmation = this.form.password_confirmation;
            let remember = this.form.remember;

            axios
                .post("/register", {
                    name,
                    email,
                    password,
                    password_confirmation,
                    remember
                })
                .then(response => {
                    window.location = "/";
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        // To set Server Side Error Message for a form value
                        // this.$refs.form.setErrors({
                        //     email: ["The email has already taken."]
                        // });

                        this.form.errors.push(error.response.data.errors);
                    } else if (error.response.status == 404) {
                        this.form.errors.push("404 Not Found");
                    } else {
                        this.form.errors.push(
                            "Something errors happend, please try again later"
                        );
                    }
                });

            // this.$store
            //     .dispatch("register", {
            // name, email, password, password_confirmation, remember;
            //     })
            //     .then(response => {
            //         // this.$router.push("/home");
            //         window.location = "/home";
            //     })
            //     .catch(error => {
            //         if (error.response.status == 422) {
            //             // To set Server Side Error Message for a form value
            //             // this.$refs.form.setErrors({
            //             //     email: ["The email has already taken."]
            //             // });

            //             this.form.errors.push(error.response.data.errors);
            //         } else if (error.response.status == 404) {
            //             this.form.errors.push("404 Not Found");
            //         } else {
            //             this.form.errors.push(
            //                 "Something errors happend, please try again later"
            //             );
            //         }
            //     });
        },
        myAutoClose(target, time) {
            autoClose(target, time);
        }
    }
};
</script>
