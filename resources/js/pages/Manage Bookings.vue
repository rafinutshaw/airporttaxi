<template>
    <div class="container mt-3">
        <loader :is-loading="isLoading"></loader>
        <h2 class="text-center">Manage Bookings</h2>

        <div class="container">
            <hr />
        </div>

        <div class="container d-flex flex-row justify-content-center mb-2">
            <form
                class="d-flex flex-column"
                method="POST"
                @submit.prevent="onSearchSubmit"
            >
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Enter your booking id</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Ex: 123"
                            v-model="bookingId"
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Your email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Ex: example@mail.com"
                            v-model="email"
                        />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Search</button>
            </form>
        </div>
        <div class="container-fluid">
            <div class="row mt-4 justify-content-center">
                <div class="col-12">
                    <div class="row justify-content-center">
                        <!-- Booking Not Found -->
                        <div
                            class="col-md-10 col-sm-12"
                            v-if="error.data.message != ''"
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

                        <!-- Success or Error after update request -->
                        <div
                            class="col-md-10 col-sm-12"
                            v-if="updated || updateError"
                        >
                            <div
                                class="alert alert-dismissible fade show"
                                :class="{
                                    'alert-success': updated,
                                    'alert-danger': updateError
                                }"
                                v-if="updated || updateError"
                                role="alert"
                            >
                                {{ updated ? updated : updateError }}
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
                        <!-- Success or Error after update request -->

                        <div class="col-md-10 col-sm-12" v-if="showBooking">
                            <div class="card mt-2">
                                <div class="card-header">
                                    <h3 class="card-title text-dark">
                                        Booking Id #{{ booking.id }}
                                    </h3>
                                    <button
                                        id="edit"
                                        type="button"
                                        class="btn btn-sm btn-primary card-tool ml-3"
                                        v-if="
                                            !errorTypes.editNotPossible &&
                                                !allowEdit
                                        "
                                        @click="onEdit"
                                    >
                                        Edit <i class="fas fa-edit ml-1"></i>
                                    </button>
                                    <button
                                        id="cancel-edit"
                                        type="button"
                                        class="btn btn-sm btn-danger card-tool ml-3"
                                        v-if="
                                            !errorTypes.editNotPossible &&
                                                allowEdit
                                        "
                                        @click="cancelEdit"
                                    >
                                        Cancel
                                        <i class="fas fa-window-close ml-1"></i>
                                    </button>
                                    <div class="card-tools">
                                        <p
                                            class="mb-0 badge font-weight-bold"
                                            style="font-size: 1rem;"
                                        >
                                            Status:
                                            {{
                                                bookingStatus[
                                                    booking.booking_status_id -
                                                        1
                                                ]
                                            }}
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label>From</label>
                                            <p class="booking-data">
                                                {{ booking.from }}
                                            </p>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>To</label>
                                            <p class="booking-data">
                                                {{ booking.to }}
                                            </p>
                                        </div>
                                        <div
                                            class="form-group col-md-4"
                                            v-if="booking.via"
                                        >
                                            <label>Via Route</label>
                                            <p class="booking-data">
                                                {{ booking.via }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label
                                                :class="{ required: allowEdit }"
                                                >Journey Date</label
                                            >
                                            <p
                                                class="booking-data"
                                                v-if="!allowEdit"
                                            >
                                                {{
                                                    booking.journey_date
                                                        | moment
                                                }}
                                            </p>

                                            <ValidationProvider
                                                vid="journey_date"
                                                name="Journey Date"
                                                rules="required"
                                                v-if="allowEdit"
                                                v-slot="{ errors }"
                                            >
                                                <flat-pickr
                                                    name="journey_date"
                                                    v-model="
                                                        booking.journey_date
                                                    "
                                                    :config="config"
                                                    class="flat-datepicker form-control"
                                                    placeholder="Select date (BST)"
                                                >
                                                </flat-pickr>
                                                <span
                                                    class="text-danger font-italic"
                                                    >{{ errors[0] }}
                                                </span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>Journey Type</label>
                                            <p class="booking-data">
                                                {{ booking.journey_type }}
                                            </p>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>Vehicle</label>
                                            <p class="booking-data">
                                                <!-- {{ booking.vehicle_id }} -->
                                                {{ vehicle.type }}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="form-row"
                                        v-if="booking.hasFlightNumber"
                                    >
                                        <div class="form-group col-md-4">
                                            <label
                                                :class="{ required: allowEdit }"
                                                >Flight Number</label
                                            >
                                            <p
                                                class="booking-data"
                                                v-if="!allowEdit"
                                            >
                                                {{ booking.flight_number }}
                                            </p>

                                            <ValidationProvider
                                                vid="flightNumber"
                                                name="Flight Number"
                                                rules="required"
                                                v-if="allowEdit"
                                                v-slot="{ errors }"
                                            >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    required
                                                    v-model="
                                                        booking.flight_number
                                                    "
                                                    placeholder="Flight Number"
                                                    aria-label="Flight Number"
                                                    aria-describedby="basic-addon1"
                                                />
                                                <span
                                                    class="text-danger font-italic"
                                                    >{{ errors[0] }}
                                                </span>
                                            </ValidationProvider>
                                        </div>
                                        <div
                                            class="form-group col-md-4"
                                            v-if="booking.hasFlightOrigin"
                                        >
                                            <label>Flight Origin</label>
                                            <p
                                                class="booking-data"
                                                v-if="!allowEdit"
                                            >
                                                {{ booking.flight_origin }}
                                            </p>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-else
                                                v-model="booking.flight_origin"
                                                placeholder="Flight Origin"
                                                aria-label="Flight Origin"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Passengers</label>
                                            <p
                                                class="booking-data"
                                                v-if="!allowEdit"
                                            >
                                                {{ booking.passengers }}
                                            </p>
                                            <select
                                                v-model="booking.passengers"
                                                class="form-control"
                                                v-else
                                                ><option
                                                    v-for="passengers in maxPassengerArray"
                                                    :key="passengers"
                                                >
                                                    {{ passengers }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Luggage</label>
                                            <p
                                                class="booking-data"
                                                v-if="!allowEdit"
                                            >
                                                {{ booking.luggage }}
                                            </p>
                                            <select
                                                v-model="booking.luggage"
                                                class="form-control"
                                                v-else
                                            >
                                                <option>None</option>
                                                <option
                                                    v-for="luggage in maxLuggageArray"
                                                    :key="luggage"
                                                >
                                                    {{ luggage }} luggage
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <hr />
                                    <div class="form-row">
                                        <div
                                            class="form-group col-md-12 text-right"
                                        >
                                            <label>Total price</label>
                                            <p class="booking-data">
                                                {{ "₤ " + booking.total_price }}
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        class="info-section border-left-danger"
                                        v-if="!errorTypes.editNotPossible"
                                    >
                                        You can only update your journey once.
                                    </p>
                                    <p
                                        class="info-section border-left-danger"
                                        v-if="
                                            error &&
                                                error.data &&
                                                error.data.message
                                        "
                                    >
                                        {{ error.data.message }}
                                    </p>
                                    <!-- <p
                                        class="info-section border-left-danger"
                                        v-if="errorTypes.editNotPossible"
                                    >
                                        Sorry, you can't not edit this booking
                                        right now.
                                    </p> -->
                                    <div v-if="!errorTypes.editNotPossible">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                            v-if="allowEdit"
                                            :disabled="!validateUpdate"
                                            @click.prevent="onUpdate"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import flatPickr from "vue-flatpickr-component";
import loader from "../components/Loader";
import _ from "lodash";

export default {
    components: {
        flatPickr,
        loader
    },
    data() {
        return {
            // FlatPickr Config
            config: {
                wrap: false, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y h:i K",
                altInput: true,
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                minDate: "today",
                closeOnSelect: true
            },
            isLoading: false,
            bookingId: null,
            email: "",
            booking: {
                booking_status_id: null,
                journey_date: null,
                updated_at: null,
                hasFlightNumber: false,
                hasFlightOrigin: false,
                vehicle: {
                    type: "asd",
                    maxPassenger: null,
                    luggage: null
                }
            },
            temporaryBooking: {},
            bookingStatus: [
                "Unpaid",
                "Pending",
                "Approved",
                "Ongoing",
                "Completed",
                "Canceled"
            ],
            showBooking: false,
            allowEdit: false,
            errorTypes: {
                editNotPossible: false,
                bookingNotFound: false
            },
            error: {
                data: {
                    message: ""
                }
            },
            updated: null,
            updateError: null,
            vehicles: null,
            vehicle: {},
            maxPassengerArray: [],
            maxLuggageArray: []
        };
    },
    filters: {
        moment(date) {
            return moment(date).format("MMM DD, YYYY h:mm:ss a");
        }
    },
    methods: {
        onSearchSubmit() {
            (this.allowEdit = false), (this.maxPassengerArray = []);
            this.maxLuggageArray = [];
            this.isLoading = true;
            this.booking = {
                booking_status_id: null,
                journey_date: null,
                updated_at: null
            };
            this.errorTypes = {
                editNotPossible: false,
                bookingNotFound: false
            };

            this.showBooking = false;
            this.error = {
                data: {
                    message: ""
                }
            };

            this.updated = null;
            this.updateError = null;
            this.errorTypes.editNotPossible = false;

            axios.get("/price-list").then(response => {
                this.vehicles = response.data;

                // Getting the price list from database
                axios
                    .post("/search-booking", {
                        bookingId: this.bookingId,
                        email: this.email
                    })
                    .then(response => {
                        this.booking = response.data.booking;

                        this.vehicles.forEach(element => {
                            if (element.id === this.booking.vehicle_id) {
                                this.vehicle = JSON.parse(
                                    JSON.stringify(element)
                                );
                            }
                        });
                        for (let i = 1; i <= this.vehicle.maxPassenger; i++) {
                            this.maxPassengerArray.push(i);
                        }
                        for (let i = 1; i <= this.vehicle.luggage; i++) {
                            this.maxLuggageArray.push(i);
                        }

                        this.showBooking = true;

                        this.booking.flight_number !== "" &&
                        this.booking.flight_number !== null
                            ? (this.booking.hasFlightNumber = true)
                            : false;

                        this.booking.hasFlightNumber == true
                            ? (this.booking.hasFlightOrigin = true)
                            : (this.booking.flight_origin = false);

                        // this.vehicle = this.vehicles.find(element => element.id == this.booking.vehicle_id);
                    })
                    .catch(error => {
                        if (error.response) {
                            if (error.response.status === 403) {
                                this.showBooking = true;
                                this.booking = error.response.data.booking;
                                this.errorTypes.editNotPossible = true;
                            } else if (error.response.status === 404) {
                                this.errorTypes.bookingNotFound == true;
                            }
                            this.error = error.response;
                        }
                    })
                    .finally(() => {
                        this.isLoading = false;
                    });
            });
        },
        onUpdate() {
            this.isLoading = true;
            this.updated = null;
            this.updateError = null;
            axios
                .post("/update-booking", {
                    bookingId: this.booking.id,
                    journey_date: this.booking.journey_date,
                    flight_number: this.booking.flight_number,
                    flight_origin: this.booking.flight_origin
                })
                .then(response => {
                    this.updated = response.data.message;
                    this.errorTypes.editNotPossible = true;
                    this.error.data.message =
                        "Sorry you can't not edit this booking right now.";
                })
                .catch(error => {
                    this.updateError = error.response.data.message;
                    if (error.response.data.errors.journey_date) {
                        this.updateError =
                            error.response.data.errors.journey_date[0];
                    }
                })
                .finally(() => {
                    this.isLoading = false;
                    this.allowEdit = false;
                });
        },
        onEdit() {
            this.allowEdit = true;
            this.temporaryBooking = _.cloneDeep(this.booking);
        },
        cancelEdit() {
            this.allowEdit = false;
            this.booking = _.cloneDeep(this.temporaryBooking);
        }
    },
    computed: {
        validateUpdate() {
            if (
                this.booking.journey_date !== "" &&
                this.booking.flight_number
            ) {
                return true;
            } else return false;
            // if (
            //     moment(
            //         this.booking.journey_date,
            //         "dddd, MMMM Do YYYY, h:mm:ss a",
            //         true
            //     ).isValid()
            // ) {
            //     return true;
            // } else return false;
        }
    }
};
</script>

<style scoped>
.booking-data {
    display: block;
    width: 100%;
    height: calc(1.6em + 0.75rem + 2px);

    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.6;
    color: #5a5a5a;
    background-color: #fff;
}
</style>
