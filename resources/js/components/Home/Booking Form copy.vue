<template>
    <div class="header-right">
        <h5 class="pb-10">BOOK ONLINE</h5>

        <!-- Starting Journey Details Form  -->
        <!-- <div style="text-align: left;" v-show="!formStage[0].place">
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
                                            class="fa fa-times close ml-2 mt-1 remove-icon"
                                            @click.prevent="removeVia(viaIndex)"
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </draggable>
                    </div>
                    <div class="mt-2">
                        <label class="bookingFormLabel" for="destination">End</label>
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
        </div> -->
        <!-- Ending Journey Details Form -->

        <!-- Starting Journey Fares -->
        <div style="text-align: left;">
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
            <div
                class="row d-flex justify-content-between form-information-heading ml-0 mr-0"
            >
                <div>
                    <h6>Journey Fares</h6>
                </div>
                <div>
                    <i
                        @click="guidance = !guidance"
                        class="fas fa-info-circle"
                        style="color: #6481f2; font-size: 22px"
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
                <p>Pricing includes any applicable VAT & Credit Card Charges</p>
                <div class="group-vehicle row d-flex ml-0 mr-0">
                    <!-- Saloon Car -->
                    <div class="mb-2">
                        <h6>Saloon Car</h6>
                        <div class="vehicle-content row ml-0 mr-0">
                            <div class="details col-md-4 pr-0 pl-0">
                                <div
                                    class="vehicle-img-div row ml-0 mr-0 mt-1 mb-1"
                                >
                                    <img
                                        class="vehicle-content-img"
                                        src="../../../../public/img/Cars/Cars SVG/Black Color/Saloon Car black.svg"
                                    />
                                </div>
                            </div>
                            <div
                                class="form-check-div col-md-8 col-sm-12 d-flex justify-content-end pr-0"
                            >
                                <div class="form-check labels mr-1 bg-info">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-single"
                                        id="salon-car-single"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-single"
                                    >
                                        Single £53
                                    </label>
                                </div>
                                <div class="form-check labels bg-secondary">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-return"
                                        id="salon-car-return"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-return"
                                    >
                                        Return £100
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Estate Car -->
                    <div class="mb-2">
                        <h6>Estate Car</h6>
                        <div class="vehicle-content row ml-0 mr-0">
                            <div class="details col-md-4 pr-0 pl-0">
                                <div
                                    class="vehicle-img-div row ml-0 mr-0 mt-1 mb-1"
                                >
                                    <img
                                        class="vehicle-content-img"
                                        src="../../../../public/img/Cars/Cars SVG/Black Color/Estate Car black.svg"
                                    />
                                </div>
                            </div>
                            <div
                                class="form-check-div col-md-8 col-sm-12 d-flex justify-content-end pr-0"
                            >
                                <div class="form-check labels mr-1 bg-info">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-single"
                                        id="salon-car-single"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-single"
                                    >
                                        Single £53
                                    </label>
                                </div>
                                <div class="form-check labels bg-secondary">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-return"
                                        id="salon-car-return"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-return"
                                    >
                                        Return £100
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- People Carrier -->
                    <div class="mb-2">
                        <h6>People Carrier</h6>
                        <div class="vehicle-content row ml-0 mr-0">
                            <div class="details col-md-4 pr-0 pl-0">
                                <div
                                    class="vehicle-img-div row ml-0 mr-0 mt-1 mb-1"
                                >
                                    <img
                                        class="vehicle-content-img"
                                        src="../../../../public/img/Cars/Cars SVG/Black Color/People Carrier black.svg"
                                    />
                                </div>
                            </div>
                            <div
                                class="form-check-div col-md-8 col-sm-12 d-flex justify-content-end pr-0"
                            >
                                <div class="form-check labels mr-1 bg-info">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-single"
                                        id="salon-car-single"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-single"
                                    >
                                        Single £53
                                    </label>
                                </div>
                                <div class="form-check labels bg-secondary">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-return"
                                        id="salon-car-return"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-return"
                                    >
                                        Return £100
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Executive Car -->
                    <div class="mb-2">
                        <h6>Executive Car</h6>
                        <div class="vehicle-content row ml-0 mr-0">
                            <div class="details col-md-4 pr-0 pl-0">
                                <div
                                    class="vehicle-img-div row ml-0 mr-0 mt-1 mb-1"
                                >
                                    <img
                                        class="vehicle-content-img"
                                        src="../../../../public/img/Cars/Cars SVG/Black Color/Executive Car black.svg"
                                    />
                                </div>
                            </div>
                            <div
                                class="form-check-div col-md-8 col-sm-12 d-flex justify-content-end pr-0"
                            >
                                <div class="form-check labels mr-1 bg-info">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-single"
                                        id="salon-car-single"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-single"
                                    >
                                        Single £53
                                    </label>
                                </div>
                                <div class="form-check labels bg-secondary">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-return"
                                        id="salon-car-return"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-return"
                                    >
                                        Return £100
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Executive People Carrier -->
                    <div class="mb-2">
                        <h6>Executive People Carrier</h6>
                        <div class="vehicle-content row ml-0 mr-0">
                            <div class="details col-md-4 pr-0 pl-0">
                                <div
                                    class="vehicle-img-div row ml-0 mr-0 mt-1 mb-1"
                                >
                                    <img
                                        class="vehicle-content-img"
                                        src="../../../../public/img/Cars/Cars SVG/Black Color/Executive People Carrier black.svg"
                                    />
                                </div>
                            </div>
                            <div
                                class="form-check-div col-md-8 col-sm-12 d-flex justify-content-end pr-0"
                            >
                                <div class="form-check labels mr-1 bg-info">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-single"
                                        id="salon-car-single"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-single"
                                    >
                                        Single £53
                                    </label>
                                </div>
                                <div class="form-check labels bg-secondary">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-return"
                                        id="salon-car-return"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-return"
                                    >
                                        Return £100
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 8 Seater Minibus -->
                    <div class="mb-2">
                        <h6>8 Seater Minibus</h6>
                        <div class="vehicle-content row ml-0 mr-0">
                            <div class="details col-md-4 pr-0 pl-0">
                                <div
                                    class="vehicle-img-div row ml-0 mr-0 mt-1 mb-1"
                                >
                                    <img
                                        class="vehicle-content-img"
                                        src="../../../../public/img/Cars/Cars SVG/Black Color/8 Seater Minibus black.svg"
                                    />
                                </div>
                            </div>
                            <div
                                class="form-check-div col-md-8 col-sm-12 d-flex justify-content-end pr-0"
                            >
                                <div class="form-check labels mr-1 bg-info">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-single"
                                        id="salon-car-single"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-single"
                                    >
                                        Single £53
                                    </label>
                                </div>
                                <div class="form-check labels bg-secondary">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-return"
                                        id="salon-car-return"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-return"
                                    >
                                        Return £100
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 14 Seater Minibus -->
                    <div class="mb-2">
                        <h6>14 Seater Minibus</h6>
                        <div class="vehicle-content row ml-0 mr-0">
                            <div class="details col-md-4 pr-0 pl-0">
                                <div
                                    class="vehicle-img-div row ml-0 mr-0 mt-1 mb-1"
                                >
                                    <img
                                        class="vehicle-content-img"
                                        src="../../../../public/img/Cars/Cars SVG/Black Color/14 Seater Minibus black.svg"
                                    />
                                </div>
                            </div>
                            <div
                                class="form-check-div col-md-8 col-sm-12 d-flex justify-content-end pr-0"
                            >
                                <div class="form-check labels mr-1 bg-info">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-single"
                                        id="salon-car-single"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-single"
                                    >
                                        Single £53
                                    </label>
                                </div>
                                <div class="form-check labels bg-secondary">
                                    <input
                                        class="form-check-input mt-0"
                                        type="radio"
                                        name="salon-car-return"
                                        id="salon-car-return"
                                        value="option1"
                                    />
                                    <label
                                        class="form-check-label mb-0"
                                        for="salon-car-return"
                                    >
                                        Return £100
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Ending Journey Fares -->
    </div>
</template>

<script>
import draggable from "vuedraggable";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import Cities from "../../store/Cities";

export default {
    components: {
        draggable,
        vSelect
    },
    data() {
        return {
            // Starting Journey Details Form
            journey: [
                {
                    origin: "London",
                    destination: "Liverpool",
                    via: []
                }
            ],
            formStage: [
                {
                    place: false,
                    journeyFare: false
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
            guidance: false
            // Ending Journey Fares
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
        submitted() {
            return new Promise((resolve, reject) => {
                if (!this.journey[0].origin || !this.journey[0].destination)
                    reject(false);
                else resolve(true);
            });
        },
        submitQuote() {
            this.submitted().then(() => {
                this.formStage[0].place = true;
            });
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
    box-shadow: 0px 4px 8px #999999a3;
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
    box-shadow: 0px 4px 8px #999999a3;
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

/* Starting Journey Fares */
.origin li {
    position: relative;
    margin: 5px 0 0 0;
    padding: 8px 7px 8px 7px;
    font-weight: normal;
    background-color: #6481f2;
    color: white;
    border-radius: 5px;
}
.form-information-heading > div > i {
    cursor: pointer;
}
.vehicle-content-img {
    width: 100%;
}
label.single {
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
    color: #000000;
    cursor: pointer;
}
.labels {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: #6481f2; */
    color: white;
    padding: 0px 12px 0px 30px;
    border-radius: 5px;
    max-height: 40px;
    min-width: 100px;
}

@media only screen and (max-width: 1110px) {
    .vehicle-content-img {
        width: 90%;
    }
    .form-check.labels {
        min-width: 100px;
    }
}
@media only screen and (max-width: 770px) {
    .vehicle-img-div {
        display: flex;
        justify-content: center;
    }
    .vehicle-content-img {
        width: 60%;
    }
    .form-check-div {
        justify-content: center !important;
    }
    .form-check.labels {
        padding: 8px 15px 8px 35px;
        margin-left: 5px;
    }
}
/* Ending Journey Fares */
</style>
