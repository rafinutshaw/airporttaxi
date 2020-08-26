<template>
    <div class="container" id="password-reset">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card card-default">
                    <div class="card-header">New Password</div>
                    <div class="card-body">
                        <form
                            autocomplete="off"
                            @submit.prevent="resetPassword"
                            method="post"
                        >
                            <div class="form-group">
                                <label for="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="user@example.com"
                                    v-model="email"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    placeholder=""
                                    autofocus
                                    v-model="password"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Confirm Password</label>
                                <input
                                    type="password"
                                    id="password_confirmation"
                                    class="form-control"
                                    placeholder=""
                                    v-model="password_confirmation"
                                    required
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Update
                            </button>

                            <!-- Show the errors -->
                            <div
                                v-if="errors"
                                class="col-sm-12 alert alert-danger alert-dismissible fade show mt-3"
                                role="alert"
                            >
                                <div
                                    v-for="(error, index) in errors"
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUrlVars } from "../../../tools/tools";
export default {
    data() {
        return {
            token: null,
            email: getUrlVars()["email"],
            password: null,
            password_confirmation: null,
            errors: null
        };
    },
    methods: {
        resetPassword() {
            axios
                .post("/password/reset", {
                    token: this.$route.params.token,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                .then(response => {
                    localStorage.setItem("loggedIn", true);
                    localStorage.setItem(
                        "authUsername",
                        response.data.auth.name
                    );
                    localStorage.setItem("authEmail", response.data.auth.email);

                    Swal.fire({
                        icon: "success",
                        title: "Great!",
                        text: response.data.message,
                        timer: 3000
                    });
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 4000);
                    // this.$router.push({ name: "Home" });
                    // if (response.response.status === 200) {
                    // }
                })
                .catch(errors => {
                    console.log(errors);
                    this.errors = errors.response.data.errors;
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
#password-reset {
    margin-top: 15%;
    margin-bottom: 10%;
}
</style>
