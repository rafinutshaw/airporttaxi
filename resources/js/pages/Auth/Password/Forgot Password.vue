<template>
    <div class="container" id="forgot-password">
        <loader :is-loading="isLoading"></loader>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Reset Password</div>

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
                                                autocomplete="email"
                                                autofocus
                                            />
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
                                            Send Password Reset Link
                                        </button>
                                    </div>
                                </div>

                                <!-- Show the success -->
                                <div
                                    v-if="form.success"
                                    class="col-sm-6 offset-md-4 alert alert-success alert-dismissible fade show mt-3"
                                    role="alert"
                                >
                                    <li>
                                        {{ form.success }}
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

                                <!-- Show the errors -->
                                <div
                                    v-for="(error, index) in form.errors"
                                    class="col-sm-6 offset-md-4 alert alert-danger alert-dismissible fade show mt-3"
                                    :key="index"
                                >
                                    <div
                                        v-for="(singleError, index) in error"
                                        :key="index"
                                    >
                                        <li>
                                            {{ singleError }}
                                        </li>
                                    </div>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="alert"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loader from "../../../components/Loader";
export default {
    components: { loader },
    data() {
        return {
            isLoading: false,
            // Create a new form instance
            form: {
                email: null,
                errors: null,
                success: null
            },

            inputFieldFocused: {
                email: false,
                password: false
            }
        };
    },
    methods: {
        onSubmit() {
            this.isLoading = true;
            this.form.errors = null;

            let email = this.form.email;

            axios
                .post("password/email", { email })
                .then(response => {
                    this.form.success = response.data.message;
                })
                .catch(errors => {
                    console.log(errors.response.data.errors);
                    this.form.errors = errors.response.data.errors;
                })
                .finally(() => {
                    this.isLoading = false;
                });
        }
    },
    created() {
        if (localStorage.getItem("loggedIn")) {
            this.$router.push({ name: "Home" });
        }
        $("html,body").scrollTop(0);
    }
};
</script>

<style scoped>
#forgot-password {
    margin-top: 15%;
    margin-bottom: 10%;
}
</style>
