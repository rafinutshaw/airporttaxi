<template>
    <div>
        <card
            class="stripe-card"
            :class="{ complete }"
            :stripe="token"
            :options="stripeOptions"
            @change="change($event)"
        />

        <!-- Used to display form errors. -->
        <div id="card-errors" role="alert" v-text="errorMessage"></div>
        <!-- <button class="btn btn-primary" @click="pay" :disabled="!complete">
            Pay with credit card
        </button> -->
    </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";
export default {
    props: {
        complete: Boolean
    },
    components: { Card },
    data() {
        return {
            // complete: false,
            token: "pk_test_51HOzVPAQ30mnpxgSFDh78Spamz6dac0YkvBei15FGgEcpirejByzBRN4CtGeuJ30mYD5e5PKnxrJOxmPo7leoaqy00jvasWY5v",
            errorMessage: "",
            stripeOptions: {
                // see https://stripe.com/docs/stripe.js#element-options for details
                hidePostalCode: true
            },
            style: {
                base: {
                    color: "#32325d",
                    fontFamily: '"Nunito", sans-serif',
                    fontSmoothing: "antialiased",
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                    // height: "20px"
                },
                invalid: {
                    color: "#fa755a",
                    iconColor: "#fa755a"
                }
            }
        };
    },
    methods: {
        change(event) {
            this.errorMessage = event.error ? event.error.message : "";
        }
        // pay() {
        //     // createToken returns a Promise which resolves in a result object with
        //     // either a token or an error key.
        //     // See https://stripe.com/docs/api#tokens for the token object.
        //     // See https://stripe.com/docs/api#errors for the error object.
        //     // More general https://stripe.com/docs/stripe.js#stripe-create-token.
        //     createToken().then(data => console.log(data.token));
        // }
    }
};
</script>
<style scoped>
.stripe-card.complete {
    border-color: green;
}
</style>
