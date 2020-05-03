<template>
    <div class="header-right">
        <h5 class="pb-10">BOOK ONLINE</h5>

        <!-- /**
        * TODO:     Stage 1
        * ? Starting Origin-Destination Place Form
        */ -->
        <div
            class="origin-destination-place-form"
            style="text-align: left;"
            v-if="formStage[0].place && formStage[0].journeyFare == false"
        >
            <div id="bookingForm">
                <div v-for="(item, index) in journey" :key="index">
                    <div class="mb-2">
                        <label class="bookingFormLabel" for="origin"
                            >Start</label
                        >
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <v-select
                                class="form-control d-flex flex-column justify-content-center style-chooser"
                                placeholder="e.g. Heathrow Airport or AA11AA"
                                v-model="item.origin"
                                :options="CityNames"
                            ></v-select>
                        </div>
                    </div>
                    <div
                        class="form-group input-group"
                        v-show="!index && item.via.length > 0"
                    >
                        <draggable
                            tag="div"
                            :list="item.via"
                            class="form-group"
                            handle=".handle"
                        >
                            <div
                                v-for="(viaItem, viaIndex) in item.via"
                                :key="viaIndex"
                            >
                                <div class="mb-2">
                                    <label class="bookingFormLabel" for="Via"
                                        >Via</label
                                    >
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i
                                                    class="fa fa-align-justify handle"
                                                ></i>
                                            </div>
                                        </div>

                                        <v-select
                                            class="form-control d-flex flex-column justify-content-center style-chooser"
                                            placeholder="e.g. AA11AA or Heathrow Airport"
                                            v-model="viaItem.name"
                                            :options="CityNames"
                                        ></v-select>
                                        <i
                                            class="fa fa-times close mt-1 remove-icon"
                                            @click.prevent="removeVia(viaIndex)"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </draggable>
                    </div>
                    <div class="mt-2">
                        <label class="bookingFormLabel" for="destination"
                            >End</label
                        >
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <v-select
                                class="form-control d-flex flex-column justify-content-center style-chooser"
                                placeholder="e.g. AA11AA or Heathrow Airport"
                                v-model="item.destination"
                                :options="CityNames"
                            ></v-select>
                        </div>
                    </div>
                </div>
                <div
                    class="container-fluid d-flex justify-content-between pl-0 pr-0 mt-2 booking-form-btn"
                >
                    <button
                        class="btn btn-outline-secondary mt-2"
                        @click.prevent="add"
                    >
                        Add Route
                    </button>
                    <button
                        class="btn btn-primary mt-2"
                        :disabled="!validateQuote"
                        @click.prevent="submitQuote"
                    >
                        Quote Now
                        <span
                            ><i
                                class="fa fa-arrow-right ml-1"
                                aria-hidden="true"
                            ></i
                        ></span>
                    </button>
                </div>
            </div>
        </div>
        <!-- /**
        * TODO:     Stage 1
        * ? Ending Origin-Destination Place Form
        */ -->

        <!-- /**
        * TODO:     Stage 2
        * ? Starting First Journey
        */ -->
        <div
            v-if="
                formStage[0].details ||
                    formStage[0].journeyFare ||
                    formStage[0].basket
            "
            class="first-journey text-left"
        >
            <h6>First Journey</h6>
            <ul class="list-unstyled origin">
                <li>
                    <span>
                        <strong>Start: </strong> {{ journey[0].origin }}
                    </span>
                </li>
                <li>
                    <span>
                        <strong>End: </strong> {{ journey[0].destination }}
                    </span>
                </li>
            </ul>
            <div id="map">
                Map
            </div>
        </div>
        <!-- /**
        * TODO:     Stage 2
        * ? Ending First Journey
        */ -->

        <!-- /**
        * TODO:     Stage 3
        * ? Starting Journey Fares
        */ -->
        <div
            v-if="formStage[0].details == false && formStage[0].journeyFare"
            class="row d-flex justify-content-between text-left form-information-heading ml-0 mr-0"
        >
            <div>
                <h5>Journey Fares</h5>
            </div>
            <div>
                <i
                    @click="guidance = !guidance"
                    class="fas fa-info-circle"
                    style="color: #5865f5; font-size: 22px"
                ></i>
            </div>
            <div v-show="guidance" class="form-information-guidance">
                <p class="mb-1">
                    Now that you've chosen your route, you can view the
                    available fares and select a vehicle type.
                </p>
            </div>
            <p class="mb-0">
                <strong
                    >Book a return journey now for an instant discount!
                </strong>
            </p>
            <p class="mb-0">
                Pricing includes any applicable VAT & Credit Card Charges
            </p>
            <div class="group-vehicle row d-flex ml-0 mr-0">
                <!-- Saloon Car -->
                <div class="group vehicle">
                    <h4>Saloon Car</h4>

                    <div class="vehicle-content">
                        <div class="detail">
                            <img
                                src="../../../../public/img/Cars/Cars SVG/Black Color/Saloon Car black.svg"
                                alt="Saloon Car"
                            />

                            <br />
                            <p class="mb-0">
                                Up to 3 passengers plus 3 suitcases (20kg max)
                                or 4 passengers plus hand luggage. Any more
                                luggage than this will require a larger vehicle.
                            </p>
                        </div>

                        <div class="labels">
                            <label class="single">
                                Single £53
                                <input type="radio" name="vehicle" value="" />
                            </label>

                            <label class="return">
                                Return £100
                                <input type="radio" name="vehicle" value="" />
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Estate Car -->
                <div class="group vehicle">
                    <h4>Estate Car</h4>

                    <div class="vehicle-content">
                        <div class="detail">
                            <img
                                src="../../../../public/img/Cars/Cars SVG/Black Color/Estate Car black.svg"
                                alt="Estate Car"
                            />

                            <br />
                            <p class="mb-0">
                                Up to 4 passengers plus 4 suitcases (20kg max).
                                Any more luggage than this will require a larger
                                vehicle.
                            </p>
                        </div>

                        <div class="labels">
                            <label class="single">
                                Single £53
                                <input type="radio" name="vehicle" value="" />
                            </label>

                            <label class="return">
                                Return £100
                                <input type="radio" name="vehicle" value="" />
                            </label>
                        </div>
                    </div>
                </div>

                <!-- People Carrier -->
                <div class="group vehicle">
                    <h4>People Carrier</h4>

                    <div class="vehicle-content">
                        <div class="detail">
                            <img
                                src="../../../../public/img/Cars/Cars SVG/Black Color/People Carrier black.svg"
                                alt="People Carrier"
                            />

                            <br />
                            <p class="mb-0">
                                Up to 5 passengers plus 5 suitcases (20kg max)
                                or 6 passengers plus hand luggage. Any more
                                luggage than this will require a larger vehicle.
                            </p>
                        </div>

                        <div class="labels">
                            <label class="single">
                                Single £53
                                <input type="radio" name="vehicle" value="" />
                            </label>

                            <label class="return">
                                Return £100
                                <input type="radio" name="vehicle" value="" />
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Executive Car -->
                <div class="group vehicle">
                    <h4>Executive Car</h4>

                    <div class="vehicle-content">
                        <div class="detail">
                            <img
                                src="../../../../public/img/Cars/Cars SVG/Black Color/Executive Car black.svg"
                                alt="Executive Car"
                            />

                            <br />
                            <p class="mb-0">
                                Up to 3 passengers plus 3 suitcases (20kg max)
                                or 4 passengers plus hand luggage. Any more
                                luggage than this will require a larger vehicle.
                            </p>
                        </div>

                        <div class="labels">
                            <label class="single">
                                Single £53
                                <input type="radio" name="vehicle" value="" />
                            </label>

                            <label class="return">
                                Return £100
                                <input type="radio" name="vehicle" value="" />
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Executive People Carrier -->
                <div class="group vehicle">
                    <h4>Executive People Carrier</h4>

                    <div class="vehicle-content">
                        <div class="detail">
                            <img
                                src="../../../../public/img/Cars/Cars SVG/Black Color/Executive People Carrier black.svg"
                                alt="Executive People Carrier"
                            />

                            <br />
                            <p class="mb-0">
                                Up to 5 passengers plus 5 suitcases (20kg max)
                                or 6 passengers plus hand luggage. Any more
                                luggage than this will require a larger vehicle.
                            </p>
                        </div>

                        <div class="labels">
                            <label class="single">
                                Single £53
                                <input type="radio" name="vehicle" value="" />
                            </label>

                            <label class="return">
                                Return £100
                                <input type="radio" name="vehicle" value="" />
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 8 Seater Minibus -->
                <div class="group vehicle">
                    <h4>8 Seater Minibus</h4>

                    <div class="vehicle-content">
                        <div class="detail">
                            <img
                                src="../../../../public/img/Cars/Cars SVG/Black Color/8 Seater Minibus black.svg"
                                alt="8 Seater Minibus"
                            />

                            <br />
                            <p class="mb-0">
                                8 passengers plus up to 8 suitcases (20kg max).
                                Any more luggage than this will require a larger
                                vehicle.
                            </p>
                        </div>

                        <div class="labels">
                            <label class="single">
                                Single £53
                                <input type="radio" name="vehicle" value="" />
                            </label>

                            <label class="return">
                                Return £100
                                <input type="radio" name="vehicle" value="" />
                            </label>
                        </div>
                    </div>
                </div>

                <!-- 14 Seater Minibus -->
                <div class="group vehicle">
                    <h4>14 Seater Minibus</h4>

                    <div class="vehicle-content">
                        <div class="detail">
                            <img
                                src="../../../../public/img/Cars/Cars SVG/Black Color/14 Seater Minibus black.svg"
                                alt="14 Seater Minibus"
                            />

                            <br />
                            <p class="mb-0">
                                Up to 3 passengers plus 3 suitcases (20kg max)
                                or 4 passengers plus hand luggage. Any more
                                luggage than this will require a larger vehicle.
                            </p>
                        </div>

                        <div class="labels">
                            <label class="single">
                                Single £53
                                <input type="radio" name="vehicle" value="" />
                            </label>

                            <label class="return">
                                Return £100
                                <input type="radio" name="vehicle" value="" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="container d-flex flex-row justify-content-between mt-3 pl-0 pr-0"
            >
                <div class="">
                    <button
                        @click="backToBooking"
                        type="button"
                        class="btn btn-outline-secondary"
                    >
                        Back to Booking
                        <i class="fa fa-undo ml-1" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="submitFare"
                    >
                        Select Fare
                        <i
                            class="fa fa-arrow-right ml-1"
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- /**
        * TODO:     Stage 3
        * ? Ending Journey Fares
        */ -->

        <!-- /**
        * TODO:     Stage 4
        * ? Starting Journey Details
        */ -->
        <div
            v-if="formStage[0].journeyFare == false && formStage[0].details"
            class="journey-details"
        >
            <!-- /**
            * ? Passenger Details
            */ -->
            <div class="row d-flex justify-content-between ml-0 mr-0">
                <div>
                    <h5>Passenger Details</h5>
                </div>
                <div>
                    <i
                        @click="passengerGuidance = !passengerGuidance"
                        class="fas fa-info-circle"
                        style="color: #5865f5; font-size: 22px"
                    ></i>
                </div>
            </div>

            <div
                class="row d-flex text-left justify-content-between passenger-details ml-0 mr-0"
            >
                <div>
                    <div class="mb-2">
                        <label>Head Passenger Full Name</label>
                        <div class="form-row align-items-center">
                            <div class="col">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i
                                                class="fa fa-user"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inlineFormInputGroup"
                                        placeholder="---"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-show="passengerGuidance"
                        class="form-information-guidance"
                    >
                        <small>
                            Our driver will need to know the
                            <strong>Head Passenger Name</strong> and
                            <strong>Passenger Mobile</strong> telesmallhone
                            number. If you're booking for someone else and don't
                            know this information yet, please use a dash ( - )
                            instead.
                        </small>
                    </div>
                    <div class="mb-2">
                        <label>Passenger Mobile</label>
                        <div class="form-row align-items-center">
                            <div class="col">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i
                                                class="fas fa-mobile-alt"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inlineFormInputGroup"
                                        placeholder="---"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mb-2"
                        v-show="journey[0].originType == 'airport'"
                    >
                        <label>Passport Details</label>
                        <div class="form-row align-items-center">
                            <div class="col">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fas fa-passport"></i>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inlineFormInputGroup"
                                        placeholder="---"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-5 mb-3">
                            <label>Passengers</label>
                            <select class="custom-select" required>
                                <option>1 Person</option>
                                <option>2 Person</option>
                                <option>3 Person</option>
                                <option>4 Person</option>
                            </select>
                        </div>
                        <div class="col-md-7 mb-3">
                            <label>Luggage</label>
                            <select class="custom-select" required>
                                <option>None</option>
                                <option>Hand Luggage</option>
                                <option>Suitcases</option>
                            </select>
                        </div>
                        <small class="form-text text-muted pl-2"
                            >If the desired amount of passengers and luggage
                            isn't available, you'll need to go back to your
                            fares and select a larger vehicle.</small
                        >
                    </div>
                </div>
            </div>

            <!-- /**
            * ? Journey Details
            */ -->
            <div class="journey-details">
                <div class="row d-flex justify-content-between ml-0 mr-0 mt-3">
                    <div>
                        <h5>Journey Details</h5>
                    </div>
                    <div>
                        <i
                            @click="pickupDate = !pickupDate"
                            class="fas fa-info-circle"
                            style="color: #5865f5; font-size: 22px"
                        ></i>
                    </div>
                </div>
                <div
                    class="row d-flex text-left justify-content-between passenger-details ml-0 mr-0"
                >
                    <div class="width-100">
                        <div class="mb-2">
                            <label>Pick-up Date & Time</label>
                            <div class="form-row align-items-center">
                                <div class="col">
                                    <div class="input-group mb-2">
                                        <date-picker
                                            class="width-100"
                                            placeholder="---"
                                            v-model="journey[0].pickupDate"
                                            type="datetime"
                                            format="DD/MM/YYYY hh:mm A"
                                            value-type="date"
                                            :disabled-date="notBeforeToday"
                                        ></date-picker>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- /**
                        * ? Pickup Date Guidance
                        */ -->
                        <div
                            v-show="pickupDate"
                            class="form-information-guidance"
                        >
                            <small>
                                <strong>Pick-up Date</strong> and
                                <strong>Pick-up Time</strong> is the date and
                                time the driver needs to collect you.
                            </small>
                        </div>
                    </div>
                </div>

                <!-- /**
                * ? Back to Fares Button & Continue to Basket Button
                 */ -->
                <div
                    class="container d-flex flex-row justify-content-between mt-3 pl-0 pr-0"
                >
                    <div class="mr-2">
                        <button
                            @click="backToFare"
                            type="button"
                            class="btn btn-outline-secondary"
                        >
                            Back to Fares
                            <i class="fa fa-undo ml-1" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="">
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="continueToBasket"
                        >
                            Continue to Basket
                            <i
                                class="fa fa-shopping-basket ml-1"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /**
        * TODO:     Stage 4
        * ? Ending Journey Details
        */ -->

        <!-- /**
        * TODO:     Stage 5
        * ? Starting Basket
        */ -->
        <div
            class="basket"
            style="text-align: left;"
            v-if="formStage[0].basket"
        >
            <div class="row continue-to-basket ml-0 mr-0">
                <div
                    class="row d-flex text-left justify-content-between passenger-details ml-0 mr-0 mt-2"
                >
                    <div class="width-100">
                        <div>
                            <p class="mb-0">
                                Pick up at 3:00pm on Wednesday 6th May, 2020 By
                                Saloon Car 1 Passenger with hand luggage
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="row d-flex flex-fill justify-content-between passenger-details ml-0 mr-0 mt-2"
                >
                    <div class="">
                        <strong>Total Fare</strong>
                    </div>
                    <div class="">
                        <strong>£53.00</strong>
                    </div>
                </div>

                <div class="d-flex passenger-details ml-0 mr-0 mt-2">
                    <div class="" style="font-size: 12px">
                        I have read and agree to the
                        <a href="http://" target="_blank">privacy policy</a> &
                        <a href="http://" target="_blank">terms</a> of booking
                        with OTS.
                    </div>
                    <div class="d-flex align-self-center">
                        <input type="checkbox" class="ml-2" />
                    </div>
                </div>
                <!-- Buttons -->
                <div
                    class="container d-flex flex-row justify-content-between mt-3 pl-0 pr-0"
                >
                    <div class="mr-2">
                        <button
                            @click="backToBasket"
                            type="button"
                            class="btn btn-outline-secondary"
                        >
                            Back to Basket
                            <i
                                class="fa fa-shopping-basket ml-1"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                    <div class="">
                        <button type="button" class="btn btn-primary">
                            Pay Now
                            <i
                                class="fas fa-credit-card ml-1"
                                style="font-size: 13px"
                            ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /**
        * TODO:     Stage 5
        * ? Ending Basket
        */ -->
    </div>
</template>

<script>
import draggable from "vuedraggable";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import Cities from "../../store/Cities";

export default {
    components: {
        draggable,
        vSelect,
        DatePicker
    },
    data() {
        return {
            // Starting Journey Details Form
            journey: [
                {
                    origin: "",
                    originType: "",
                    destination: "",
                    pickupDate: null,
                    via: []
                }
            ],
            formStage: [
                {
                    place: true,
                    details: false,
                    journeyFare: false,
                    basket: false
                }
            ],
            CityNames: [
                "Bath",
                "Birmingham",
                "Bradford",
                "Brighton and Hove",
                "Bristol",
                "Cambridge",
                "Canterbury",
                "Carlisle",
                "Chester",
                "Chichester",
                "Coventry",
                "Derby",
                "Durham",
                "Ely",
                "Exeter",
                "Gloucester",
                "Hereford",
                "Kingston upon Hull",
                "Lancaster",
                "Leeds",
                "Leicester",
                "Lichfield",
                "Lincoln",
                "Liverpool City of London",
                "Manchester",
                "Newcastle upon Tyne",
                "Norwich",
                "Nottingham",
                "Oxford",
                "Peterborough",
                "Plymouth",
                "Portsmouth",
                "Preston",
                "Ripon",
                "Salford",
                "Salisbury",
                "Sheffield",
                "Southampton",
                "St Albans",
                "Stoke-on-Trent",
                "Sunderland",
                "Truro",
                "Wakefield",
                "Wells",
                "Westminster",
                "Winchester",
                "Wolverhampton",
                "Worcester",
                "York"
            ],
            // Ending Journey Details Form

            // Starting Journey Fares
            guidance: false,
            // Ending Journey Fares

            // Starting Journey Guidance
            passengerGuidance: false,
            pickupDate: false
            // Ending Journey Guidance
        };
    },
    methods: {
        add() {
            this.journey[0].via.push({
                name: ""
            });
        },
        removeVia(index) {
            this.journey[0].via.splice(index, 1);
        },
        submittedQuote() {
            return new Promise((resolve, reject) => {
                if (!this.journey[0].origin || !this.journey[0].destination)
                    reject(false);
                else resolve(true);
            });
        },
        submitQuote() {
            this.submittedQuote().then(() => {
                this.formStage[0].place = false;
                this.formStage[0].journeyFare = true;
            });
        },
        backToBooking() {
            this.formStage[0].place = true;
            this.formStage[0].journeyFare = false;
            $("html,body").scrollTop(0);
        },
        submitFare() {
            this.formStage[0].journeyFare = false;
            this.formStage[0].details = true;
            $("html,body").scrollTop(0);
        },
        backToFare() {
            this.formStage[0].journeyFare = true;
            this.formStage[0].details = false;
            $("html,body").scrollTop(0);
        },
        continueToBasket() {
            this.formStage[0].details = false;
            this.formStage[0].basket = true;
            $("html,body").scrollTop(0);
        },
        backToBasket() {
            this.formStage[0].details = true;
            this.formStage[0].basket = false;
            $("html,body").scrollTop(0);
        },
        notBeforeToday(date) {
            return date < new Date().setHours(0, 0, 0, 0);
        }
    },
    computed: {
        validateQuote() {
            if (!this.journey[0].origin || !this.journey[0].destination)
                return false;
            else return true;
        }

        // getValidation() {
        //     if (
        //         this.quoteValidation().then(result => {
        //             result === true ? true : false;
        //         })
        //     )
        //         return true;
        //     else return false;
        // }
    }
};
</script>

<style scoped>
.remove-icon {
    position: absolute;
    left: 102%;
}

.form-group {
    margin-bottom: 0rem;
}

label {
    margin-bottom: 0.2rem;
}

.fas {
    font-size: 20px;
}

.col-lg-4.col-md-6.header-right {
    max-width: 450px;
}

.header-right {
    background-color: #f3f3f3eb;
    /* box-shadow: 0px 4px 8px #999999a3; */
    box-shadow: 0px 2px 10px #999999a3;
    border-radius: 8px;
    max-width: 450px;
    padding: 35px;
    margin-top: 100px;
    margin-bottom: 50px;
}

.header-right .form-control {
    font-size: 14px;
    padding: 0.575rem 0.75rem;
    background-color: #f3f3f3eb;
    /* box-shadow: 0px 4px 8px #999999a3; */
    box-shadow: 0px 2px 10px #999999a3;
    /* border: 1px solid #ced4da; */
}

.autocomplete-input {
    font-size: 14px;
}

.bookingFormLabel {
    font-weight: 600;
    font-size: 15px;
}

.form-group {
    width: 100%;
}

/* .btn-primary {
    background-color: #5856d6;
    border-color: #5856d6;
} */
@media only screen and (max-width: 400px) {
    .booking-form-btn {
        flex-direction: column-reverse;
    }
}

/* First Journey */
.origin li {
    padding: 10px 10px 10px 10px;
    color: black;
    background-color: #a8c5ec;
    border-radius: 5px;
    margin-bottom: 5px;
}

/* Starting Journey Fares */

div.vehicle {
    display: block;
    margin: 10px 0 0 0;
    padding: 8px 0 0 10px;
    border-radius: 5px;
    font-size: 12px;
    color: black;
    background-color: #f0f0f0;
    box-shadow: 1px 5px 8px 2px #d2dce6;
    /* background-color: #282828;
    background: -webkit-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.05) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.05) 100%
    ); */
}

.group {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: end;
    -moz-box-align: end;
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    width: 100%;
    position: relative;
}

.vehicle-content {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 15px 10px 10px 0;
}

.detail {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex: 1;
    flex-grow: 1;
    padding-right: 15px;
}

.detail img {
    margin: 0 0 5px 0;
    width: 45%;
}

.labels {
    -webkit-flex-shrink: 0;
    -moz-flex-shrink: 0;
    -ms-flex: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-box-direction: normal;
    -moz-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    min-width: 115px;
}

.labels label {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    border-radius: 5px;
    padding: 12px 12px 12px 12px;
    margin: 10px 0 0 0;
    margin-top: 10px;
    font-weight: bold;
    cursor: pointer;
    /* background-color: #ffca09; */

    /* Secondary Color  */
    color: #5865f5;
    border: 1px solid #5865f5;
    /* Secondary Color  */

    /* Primary Color */
    /* color: #06c4ea;
    border: 1px solid #06c4ea; */
    /* Primary Color */
}

@media only screen and (max-width: 400px) {
    .vehicle-content {
        flex-direction: column;
    }
}

/* Ending Journey Fares */

/* Starting Passenger Details */
.passenger-details {
    background-color: #f0f0f0;
    box-shadow: 1px 5px 8px 2px #d2dce6;
    padding: 10px;
    border-radius: 5px;
}

/* Ending Passenger Details */
</style>
