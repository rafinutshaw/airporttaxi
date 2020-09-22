<template>
    <form
        id="payment-form"
        @submit.prevent="pay()"
    >
        <div class="form-group">
            <label for="name_on_card">Name on Card</label>
            <input
                type="text"
                class="form-control"
                id="name_on_card"
                name="name_on_card"
                placeholder="Ex: John"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Ex: John'"
                v-model="name_on_card"
            />
        </div>

        <div class="form-group">
            <label for="receipt_email">Email Address</label>
            <input
                type="email"
                class="form-control"
                name="receipt_email"
                id="receipt_email"
                v-model="receipt_email"
                placeholder="Ex: john@example.com"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Ex: john@example.com'"
            />
        </div>

        <!-- <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="address">Address</label>
                    <input
                        type="text"
                        class="form-control"
                        id="address"
                        name="address"
                        v-model="address"
                    />
                </div>
            </div>
        </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label for="postalcode">Postal Code</label>
                    <input
                        type="text"
                        class="form-control"
                        id="postalcode"
                        name="postalcode"
                        placeholder="Ex: B73 5BL"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Ex: B73 5BL'"
                        v-model="postalCode"
                    />
                </div>
            </div>
        </div> -->

        <div class="form-group">
            <label for="card-element">Credit Card</label>
            <card-element :complete="complete"></card-element>
        </div>

        <!-- CSRF Field -->
        <input type="hidden" name="_token" :value="csrf" />

        <div class="spacer"></div>

        <button
            type="submit"
            class="btn btn-block btn-success"
            :disabled="!complete"
        >
            Submit Payment
        </button>
    </form>
</template>

<script>
import { createToken, Card } from "vue-stripe-elements-plus";
import cardElement from "./Card Element";
export default {
    components: {
        cardElement
    },
    data() {
        return {
            complete: true,
            csrf: document.head.querySelector('meta[name="csrf-token"]')
                .content,
            name_on_card: null,
            receipt_email: null,
            address: null
        };
    },
    methods: {
        pay() {
            // createToken returns a Promise which resolves in a result object with
            // either a token or an error key.
            // See https://stripe.com/docs/api#tokens for the token object.
            // See https://stripe.com/docs/api#errors for the error object.
            // More general https://stripe.com/docs/stripe.js#stripe-create-token.
            this.complete = false;

            var options = {
                name: this.name_on_card,
                receipt_email: this.receipt_email
            };
            createToken(options)
                .then(result => {
                    console.log(result.token);

                    let formData = {
                        name: this.name_on_card,
                        receipt_email: this.receipt_email,
                        strpeToken: result.token.id
                    };
                    
                    axios
                        .post("/checkout", formData)
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.log(error);
                        });

                    // var form = document.getElementById("payment-form");
                    // var hiddenInput = document.createElement("input");
                    // hiddenInput.setAttribute("type", "hidden");
                    // hiddenInput.setAttribute("name", "stripeToken");
                    // hiddenInput.setAttribute("value", result.token.id);
                    // form.appendChild(hiddenInput);
                    // form.submit();
                    this.complete = true;
                })
                .catch(error => {
                    console.log(error);
                });
            this.complete = false;
        }
    },
    mounted() {
        if (localStorage.getItem("loggedIn") !== null) {
            this.name = localStorage.getItem("authUsername");
            this.receipt_email = localStorage.getItem("authEmail");
        }
    }
};
</script>
<style scoped>
.form-control {
    background-color: white;
}
label {
    color: black;
}
</style>
