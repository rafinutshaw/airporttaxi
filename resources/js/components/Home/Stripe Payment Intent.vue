/*
* Here stripe is used with vanila javascript, not any 3rd party library
*/

<template>
    <div>
        <form id="payment-form" @submit.prevent="confirmCardPayment()">
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

            <div class="form-group">
                <label for="receipt_email">Address</label>
                <input
                    type="text"
                    class="form-control"
                    name="address"
                    id="address"
                    v-model="address"
                    placeholder="Ex: 221-B Baker Street"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Ex: 221-B Baker Street'"
                />
            </div>

            <!-- CSRF Field -->
            <input type="hidden" name="_token" :value="csrf" />

            <div class="form-row ml-0 mr-0">
                <label for="card-element" class="text-dark">
                    Credit or debit card
                </label>
                <div id="card-element">
                    <!-- A Stripe Element will be inserted here. -->
                </div>

                <!-- Used to display form errors. -->
                <div id="card-errors" role="alert"></div>
            </div>

            <button id="payment-submit-button" :disabled="!validatePaymentForm">
                <div class="spinner hidden" id="spinner"></div>
                <span id="button-text">Pay</span>
            </button>

            <!-- Error Message -->
            <div
                id="card-error"
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
                v-if="cardPayment.error"
            >
                {{ cardPayment.errorText }} <br />
                <a href="#" @click="tryAgain()" style="color: black;">
                    Try again.
                </a>
                <button
                    type="button"
                    class="close alert-button"
                    data-dismiss="alert"
                    aria-label="Close"
                    @click="cardPayment.error = false"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <!-- Success Message -->
            <div
                id="card-success"
                class="alert alert-success alert-dismissible fade show"
                role="alert"
                v-if="cardPayment.success"
            >
                Payment succeeded.
                <button
                    type="button"
                    class="close alert-button"
                    data-dismiss="alert"
                    aria-label="Close"
                    @click="cardPayment.success = false"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";

export default {
    data() {
        return {
            csrf: document.head.querySelector('meta[name="csrf-token"]')
                .content,
            stripe: null,
            elements: null,
            card: null,
            clientSecret: null,
            stripeOptions: {
                // see https://stripe.com/docs/stripe.js#element-options for details
                style: {
                    base: {
                        color: "#32325d",
                        fontFamily: '"Nunito", sans-serif',
                        fontSmoothing: "antialiased",
                        fontSize: "16px",
                        "::placeholder": {
                            color: "#aab7c4"
                        }
                    },
                    invalid: {
                        color: "#fa755a",
                        iconColor: "#fa755a"
                    }
                }
                // hidePostalCode: true
            },
            name_on_card: null,
            receipt_email: null,
            address: null,
            cardPayment: {
                success: false,
                error: false,
                errorText: null
            },
            
        };
    },
    methods: {
        // Load Stripe element and post payment intent
        async getStripe() {
            loadStripe(
                "pk_test_51HOzVPAQ30mnpxgSFDh78Spamz6dac0YkvBei15FGgEcpirejByzBRN4CtGeuJ30mYD5e5PKnxrJOxmPo7leoaqy00jvasWY5v"
            ).then(response => {
                this.stripe = response;

                let bookingId = 3;

                (async () => {
                    const response = await axios.post("/paymentIntent", {
                        bookingId: bookingId
                    });
                    this.clientSecret = await response.data.client_secret;
                })();

                this.elements = this.stripe.elements();
                this.card = this.elements.create("card", this.stripeOptions);
                // console.log(this.card._complete);

                // Add an instance of the card Element into the `card-element` <div>.
                this.card.mount("#card-element");

                // Handle real-time validation errors from the card Element.
                this.card.on("change", function(event) {
                    var displayError = document.getElementById("card-errors");
                    if (event.error) {
                        displayError.textContent = event.error.message;
                    } else {
                        displayError.textContent = "";
                    }
                });
                // console.log(this.stripe);
            });
        },

        // Confirm Card Payment
        async confirmCardPayment() {
            var form = document.getElementById("payment-form");

            this.loading(true);
            this.cardPayment = {
                success: false,
                error: false,
                errorText: null
            };
            this.stripe
                .confirmCardPayment(this.clientSecret, {
                    payment_method: {
                        card: this.card,
                        billing_details: {
                            email: this.receipt_email,
                            name: this.name_on_card
                        }
                    },
                    receipt_email: this.receipt_email
                })
                .then(result => {
                    if (result.error) {
                        // Show error to your customer (e.g., insufficient funds)
                        this.loading(false);
                        this.cardPayment.error = true;
                        this.cardPayment.errorText = result.error.message;
                        // console.log(result.error.message);
                    } else {
                        // The payment has been processed!
                        if (result.paymentIntent.status === "succeeded") {
                            this.loading(false);
                            this.cardPayment.success = true;
                            // console.log(result);
                        }
                    }
                });
        },

        // Payment button loading
        loading(isLoading) {
            if (isLoading) {
                // Disable the button and show a spinner
                document.querySelector("#payment-submit-button").disabled = true;
                document.querySelector("#spinner").classList.remove("hidden");
                document.querySelector("#button-text").classList.add("hidden");
            } else {
                document.querySelector("#payment-submit-button").disabled = false;
                document.querySelector("#spinner").classList.add("hidden");
                document
                    .querySelector("#button-text")
                    .classList.remove("hidden");
            }
        },

        // Try again after failure
        tryAgain() {
            this.name_on_card = null;
            this.receipt_email = null;
            this.address = null;
            this.getStripe();
        }
    },
    mounted() {
        // get stripe when this component is mounted
        this.getStripe();
    },
    computed: {
        validatePaymentForm() {
            if (
                this.name_on_card === null ||
                this.receipt_email === null ||
                this.addresson_card === null ||
                this.card._complete === false
            ) {
                return false;
            } else {
                return true;
            }
        }
    }
};
</script>

<style scoped>
label {
    color: black;
}
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
form {
    align-self: center;
    /* width: 30vw;
    min-width: 500px;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
        0px 2px 5px 0px rgba(50, 50, 93, 0.1),
        0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px; */
}
input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
}
.result-message {
    line-height: 22px;
    font-size: 16px;
}
.result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
}
.hidden {
    display: none;
}
#card-error {
    color: rgb(105, 115, 134);
    text-align: left;
    font-size: 14px;
    line-height: 17px;
    margin-top: 12px;
}
#card-success {
    color: rgb(105, 115, 134);
    text-align: left;
    font-size: 14px;
    line-height: 17px;
    margin-top: 12px;
}
#card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    height: 44px;
    width: 100%;
    background: white;
}
#payment-request-button {
    margin-bottom: 32px;
}
/* Buttons and links */
button {
    background: #5469d4;
    color: #ffffff;
    font-family: Arial, sans-serif;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
}
button:hover {
    filter: contrast(115%);
}
button:disabled {
    opacity: 0.5;
    cursor: default;
}

/* Button */

/* #submit {
    margin-top: 10px;
    display: block;
    width: 100%;
    color: #ffffff;
    background-color: #3acae6;
    border-color: #3acae6;
    box-shadow: none;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    line-height: 1.6;
    border-radius: 0.4rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
#submit:hover {
    background-color: #06c4ea;
    border-color: #06c4ea;
    cursor: pointer;
}
#submit:disabled {
    cursor: not-allowed;
    opacity: 0.65;
    color: #fff;
    background-color: #3acae6;
    border-color: #3acae6;
} */

/* Button */

/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
    border-radius: 50%;
}
.spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
.spinner:before,
.spinner:after {
    position: absolute;
    content: "";
}
.spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
}
.spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
}
@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@media only screen and (max-width: 600px) {
    /* form {
        width: 80vw;
    } */
}
.alert-button {
    color: black;
    width: fit-content;
    border-radius: 0;
    top: 5px;
    right: 10px;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
    font-size: 25px;
    opacity: 0.5;
}
</style>
