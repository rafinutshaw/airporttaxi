<template>
    <div class="container mt-4">
        <loader :is-loading="isLoading"></loader>
        <h4 class="text-center">Please pay the remainig amount</h4>

        <div class="container">
            <hr />
        </div>

        <!-- Booking Not Found -->
        <div
            class="row d-flex justify-content-center"
            v-if="error.data.message"
        >
            <div
                class="alert alert-dismissible alert-danger fade show"
                role="alert"
            >
                {{ error.data.message }}
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
        <!-- Booking Not Found -->

        <div class="container d-flex flex-row justify-content-center mb-2">
            <div
                class="row mt-4 justify-content-center"
                v-if="error.data.message == '' && journey.unpaid_amount > 0"
            >

                <!-- Passenger Details -->
                <div class="col-md-10 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title text-dark">
                                Passenger Details
                                <i class="fas fa-user ml-1"></i>
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label
                                        class="col-sm-12 col-form-label pl-0 pr-0 pl-0 pr-0"
                                        >Email</label
                                    >
                                    <p class="mb-0">
                                        {{ journey.customer.email }}
                                    </p>
                                </div>
                                <div class="form-group col-md-4">
                                    <label
                                        class="col-sm-12 col-form-label pl-0 pr-0"
                                        >Name</label
                                    >
                                    <p class="mb-0">
                                        {{ journey.customer.name }}
                                    </p>
                                </div>
                                <div class="form-group col-md-4">
                                    <label
                                        class="col-sm-12 col-form-label pl-0 pr-0"
                                        >Mobile</label
                                    >
                                    <p class="mb-0">
                                        {{ journey.customer.mobile }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Journey Details -->
                <div class="col-md-10 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title text-dark">
                                Journey Details <i class="fas fa-car ml-1"></i>
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label
                                        class="col-sm-12 col-form-label pl-0 pr-0 pl-0 pr-0"
                                        >From</label
                                    >
                                    <p class="mb-0">{{ journey.from.text }}</p>
                                </div>
                                <div class="form-group col-md-6">
                                    <label
                                        class="col-sm-12 col-form-label pl-0 pr-0"
                                        >To</label
                                    >
                                    <p class="mb-0">{{ journey.to.text }}</p>
                                </div>
                                <div class="form-group col-md-6">
                                    <label
                                        class="col-sm-12 col-form-label text-danger font-italic pl-0 pr-0 pl-0 pr-0"
                                        >Unpaid Amount</label
                                    >
                                    <p class="text-danger font-italic mb-0">
                                        £{{ journey.unpaid_amount }}
                                    </p>
                                </div>
                                <div class="form-group col-md-6">
                                    <label
                                        class="col-sm-12 col-form-label pl-0 pr-0"
                                        >Journey Time</label
                                    >
                                    <p class="mb-0">
                                        {{ journey.journey_date | moment-with-time}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Payment Form -->
                <div class="col-md-10 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title text-dark">
                                Payment Form
                                <i class="fas fa-credit-card ml-1"></i>
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="form-row">
                                <form
                                    id="payment-form"
                                    class="container text-left"
                                    @submit.prevent="confirmCardPayment()"
                                >
                                    <div class="payment-details">
                                        <div class="form-group mb-2">
                                            <label
                                                for="name_on_card"
                                                class="required"
                                                >Name on Card</label
                                            >

                                            <ValidationProvider
                                                vid="fullName"
                                                name="Name"
                                                rules="required"
                                                v-slot="{ errors }"
                                            >
                                                <div
                                                    class="form-row align-items-center"
                                                >
                                                    <div class="col">
                                                        <div
                                                            class="input-group"
                                                        >
                                                            <div
                                                                class="input-group-prepend input-prepend"
                                                            >
                                                                <div
                                                                    class="input-group-text"
                                                                >
                                                                    <i
                                                                        class="fa fa-user"
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                </div>
                                                            </div>

                                                            <input
                                                                type="text"
                                                                autocomplete="off"
                                                                required
                                                                autofocus
                                                                class="form-control form-control-iconized"
                                                                id="name_on_card"
                                                                name="name_on_card"
                                                                placeholder="Ex: John"
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Ex: John'"
                                                                v-model="
                                                                    name_on_card
                                                                "
                                                                @blur="
                                                                    inputFieldFocused.paymentDetails.fullName = true
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <span
                                                    v-if="
                                                        inputFieldFocused
                                                            .paymentDetails
                                                            .fullName
                                                    "
                                                    class="text-danger font-italic"
                                                    >{{ errors[0] }}
                                                </span>
                                            </ValidationProvider>
                                        </div>

                                        <div class="form-group mb-2">
                                            <label
                                                class="required"
                                                for="receipt_email"
                                                >Email Address</label
                                            >

                                            <ValidationProvider
                                                vid="email"
                                                name="Email"
                                                rules="required|email"
                                                v-slot="{ errors }"
                                            >
                                                <div
                                                    class="form-row align-items-center"
                                                >
                                                    <div class="col">
                                                        <div
                                                            class="input-group"
                                                        >
                                                            <div
                                                                class="input-group-prepend input-prepend"
                                                            >
                                                                <div
                                                                    class="input-group-text"
                                                                >
                                                                    <i
                                                                        class="fas fa-envelope"
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                </div>
                                                            </div>
                                                            <input
                                                                autocomplete="off"
                                                                type="email"
                                                                required
                                                                class="form-control form-control-iconized"
                                                                name="receipt_email"
                                                                id="receipt_email"
                                                                v-model="
                                                                    receipt_email
                                                                "
                                                                placeholder="Ex: john@example.com"
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Ex: john@example.com'"
                                                                @blur="
                                                                    inputFieldFocused.paymentDetails.email = true
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <span
                                                    v-if="
                                                        inputFieldFocused
                                                            .paymentDetails
                                                            .email
                                                    "
                                                    class="text-danger font-italic"
                                                    >{{ errors[0] }}
                                                </span>
                                            </ValidationProvider>
                                        </div>

                                        <!-- CSRF Field -->
                                        <input
                                            type="hidden"
                                            name="_token"
                                            :value="csrf"
                                        />

                                        <div class="form-group">
                                            <label
                                                for="card-element"
                                                class="required"
                                            >
                                                Credit or debit card
                                            </label>
                                            <div
                                                id="card-element"
                                                class="form-control"
                                            >
                                                <!-- A Stripe Element will be inserted here. -->
                                            </div>

                                            <!-- Used to display form errors. -->
                                            <div
                                                class="text-danger font-italic"
                                                id="card-errors"
                                                role="alert"
                                            ></div>
                                        </div>

                                        <div
                                            class="info-section border-left-danger my-2"
                                        >
                                            Payment is non refundable.
                                        </div>

                                        <button
                                            class="btn btn-primary"
                                            id="payment-submit-button"
                                            :disabled="!validatePaymentForm"
                                        >
                                            <div
                                                class="spinner hidden"
                                                id="spinner"
                                            ></div>
                                            <span id="button-text"></span>
                                        </button>
                                        <!-- Error Message -->
                                        <div
                                            id="card-error"
                                            class="alert alert-danger alert-dismissible fade show mt-2"
                                            role="alert"
                                            v-if="cardPayment.error"
                                        >
                                            {{ cardPayment.errorText }} <br />
                                            <a
                                                href="#"
                                                onClick="window.location.reload()"
                                                style="color: black;"
                                            >
                                                Try again.
                                            </a>
                                            <button
                                                type="button"
                                                class="close alert-button"
                                                data-dismiss="alert"
                                                aria-label="Close"
                                                @click="
                                                    cardPayment.error = false
                                                "
                                            >
                                                <span aria-hidden="true"
                                                    >&times;</span
                                                >
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loader from "../components/Loader";
import { loadStripe } from "@stripe/stripe-js";
export default {
    components: {
        loader
    },
    data() {
        return {
            isLoading: false,
            journey: {
                id: parseInt(this.$route.params.id),
                customer: {
                    name: null,
                    email: null,
                    mobile: null
                },
                from: {
                    text: ""
                },
                to: {
                    text: ""
                },
                unpaid_amount: 0
            },
            error: {
                data: {
                    message: ""
                }
            },
            inputFieldFocused: {
                paymentDetails: {
                    email: false,
                    fullName: false
                }
            },
            // Payment Information Data
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
                },
                hidePostalCode: true
            },
            name_on_card: null,
            receipt_email: null,
            address: null,
            cardPayment: {
                success: false,
                error: false,
                errorText: null
            }
        };
    },
    methods: {
        // Payment Information
        // Load Stripe element and post payment intent
        async getStripe() {
            loadStripe(
                "pk_test_51HOzVPAQ30mnpxgSFDh78Spamz6dac0YkvBei15FGgEcpirejByzBRN4CtGeuJ30mYD5e5PKnxrJOxmPo7leoaqy00jvasWY5v"
            )
                .then(response => {
                    this.stripe = response;

                    this.elements = this.stripe.elements();
                    this.card = this.elements.create(
                        "card",
                        this.stripeOptions
                    );

                    // Add an instance of the card Element into the `card-element` <div>.
                    this.card.mount("#card-element");
                    document.getElementById("button-text").innerText =
                        "Pay £" + this.journey.unpaid_amount;

                    // Handle real-time validation errors from the card Element.
                    this.card.on("change", function(event) {
                        var displayError = document.getElementById(
                            "card-errors"
                        );

                        if (event.error) {
                            displayError.textContent = event.error.message;
                        } else if (event.complete) {
                            displayError.textContent = "";
                        } else {
                            displayError.textContent =
                                "Card Number is incomplete/required.";
                        }
                    });
                })
                .finally(() => {});
        },

        // Confirm Card Payment
        confirmCardPayment() {
            this.loading(true);

            this.isLoading = true;

            // Make a request to create payment intent
            axios
                .post("/repay-intent", {
                    bookingId: this.journey.id,
                    receipt_email: this.receipt_email,
                    name: this.name_on_card
                })
                // After creating payment intent
                .then(response => {
                    this.clientSecret = response.data.client_secret;

                    this.cardPayment = {
                        success: false,
                        error: false,
                        errorText: null
                    };

                    // Make a stripe request to confirm payment
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
                                this.cardPayment.errorText =
                                    result.error.message;
                            } else {
                                // The payment has been processed!
                                if (
                                    result.paymentIntent.status === "succeeded"
                                ) {
                                    // Update booking status from unpaid to pending
                                    axios
                                        .post("/confirmPayment", {
                                            bookingId: this.journey.id,
                                            paymentIntentId:
                                                result.paymentIntent.id
                                        })
                                        .then(response => {
                                            console.log(response.data);
                                            this.loading(false);
                                            this.cardPayment.success = true;

                                            Swal.fire({
                                                icon: "success",
                                                title: `Succeeded`,
                                                text: "Payment succeeded",
                                                confirmButtonColor: "#3085d6",
                                                confirmButtonText: "Finish"
                                            }).then(result => {
                                                if (result.isConfirmed) {
                                                    window.location.reload();
                                                }
                                            });
                                        });
                                }
                            }
                        })
                        .finally(() => {
                            this.isLoading = false;
                        });
                });
        },

        // Payment button loading
        loading(isLoading) {
            if (isLoading) {
                // Disable the button and show a spinner
                document.querySelector(
                    "#payment-submit-button"
                ).disabled = true;
                document.querySelector("#spinner").classList.remove("hidden");
                document.querySelector("#button-text").classList.add("hidden");
            } else {
                document.querySelector(
                    "#payment-submit-button"
                ).disabled = false;
                document.querySelector("#spinner").classList.add("hidden");
                document
                    .querySelector("#button-text")
                    .classList.remove("hidden");
            }
        },

        /*
         * Validate Email using regx
         */
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
    computed: {
        validatePaymentForm() {
            if (
                this.name_on_card === null ||
                this.validateEmail(this.receipt_email) == false ||
                this.card._complete === false
            ) {
                return false;
            } else {
                return true;
            }
        }
    },
    created() {
        this.isLoading = true;
        axios
            .post("/get-booking-info", {
                id: this.journey.id
            })
            .then(response => {
                this.journey = response.data;
                this.getStripe();
            })
            .catch(error => {
                this.error.data.message = error.response.data.message;
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
};
</script>

<style scoped></style>
