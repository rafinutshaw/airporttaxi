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
                                        @click="allowEdit = true"
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
                                        @click="allowEdit = false"
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
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >From</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.from }}
                                            </p>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >To</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.to }}
                                            </p>
                                        </div>
                                        <div
                                            class="form-group col-md-4"
                                            v-if="booking.via"
                                        >
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Via Route</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.via }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Journey Date</label
                                            >
                                            <p
                                                class="booking-data"
                                                v-if="
                                                    errorTypes.editNotPossible
                                                "
                                            >
                                                {{
                                                    booking.journey_date
                                                        | moment
                                                }}
                                            </p>
                                            <div
                                                v-if="
                                                    !errorTypes.editNotPossible
                                                "
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
                                                <flat-pickr
                                                    name="journey_date"
                                                    v-model="
                                                        booking.journey_date
                                                    "
                                                    :config="config"
                                                    class="flat-datepicker"
                                                    placeholder="Select date (BST)"
                                                    v-if="allowEdit"
                                                >
                                                </flat-pickr>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Journey Type</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.journey_type }}
                                            </p>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Vehicle</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.vehicle_id }}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="form-row"
                                        v-if="booking.flight_number"
                                    >
                                        <div class="form-group col-md-4">
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Flight Number</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.flight_number }}
                                            </p>
                                        </div>
                                        <div
                                            class="form-group col-md-4"
                                            v-if="booking.flight_origin"
                                        >
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Flight Origin</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.flight_origin }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Passengers</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.passengers }}
                                            </p>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Luggage</label
                                            >
                                            <p class="booking-data">
                                                {{ booking.luggage }}
                                            </p>
                                        </div>
                                    </div>

                                    <hr />
                                    <div class="form-row">
                                        <div
                                            class="form-group col-md-12 text-right"
                                        >
                                            <label
                                                class="col-sm-6 col-form-label"
                                                >Total price</label
                                            >
                                            <p class="booking-data">
                                                {{ "₤ " + booking.total_price }}
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        class="text-danger container"
                                        v-if="!errorTypes.editNotPossible"
                                    >
                                        *** You can only update journey date
                                        once.
                                    </p>
                                    <p
                                        class="text-danger container"
                                        v-if="error"
                                    >
                                        {{ error.data.message }}
                                    </p>
                                    <!-- <p
                                        class="text-danger container"
                                        v-if="errorTypes.editNotPossible"
                                    >
                                        Sorry you can't not edit this booking
                                        right now.
                                    </p> -->
                                    <div v-if="!errorTypes.editNotPossible">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
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

export default {
    components: {
        flatPickr,
        loader
    },
    data() {
        return {
            // FlatPickr Config
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y h:i K",
                altInput: true,
                enableTime: true,
                dateFormat: "Y-m-d",
                minDate: "today",
                closeOnSelect: true
            },
            isLoading: false,
            bookingId: null,
            email: "",
            booking: {
                booking_status_id: null,
                journey_date: null,
                updated_at: null
            },
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
            updateError: null
        };
    },
    filters: {
        moment(date) {
            return moment(date).format("MMMM Do YYYY, h:mm:ss a");
        }
    },
    methods: {
        onSearchSubmit() {
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

            axios
                .post("/search-booking", {
                    bookingId: this.bookingId,
                    email: this.email
                })
                .then(response => {
                    this.showBooking = true;
                    this.booking = response.data.booking;
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.showBooking = true;
                        this.booking = error.response.data.booking;
                        this.errorTypes.editNotPossible = true;
                    } else if (error.response.status === 404) {
                        this.errorTypes.bookingNotFound == true;
                    }
                    this.error = error.response;
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        onUpdate() {
            this.isLoading = true;
            this.updated = null;
            this.updateError = null;
            axios
                .post("/update-booking", {
                    bookingId: this.booking.id,
                    journey_date: this.booking.journey_date
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
        }
    }
};
</script>

<style scoped>
.booking-data {
    display: block;
    width: 100%;
    height: calc(1.6em + 0.75rem + 2px);
    padding: 0.375rem 1rem;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.6;
    color: #5a5a5a;
    background-color: #fff;
}
</style>
