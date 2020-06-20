<template>
    <div class="header-right">
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
                    <div class="mb-2 pickup-point">
                        <div class="row">
                            <div class="form-group input-group col-sm-11 pr-0">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                </div>
                                <v-select
                                    label="text_en"
                                    placeholder="Enter your pickup point"
                                    class="form-control d-flex flex-column justify-content-center style-chooser"
                                    v-model="item.origin"
                                    :filterable="false"
                                    :options="options"
                                    @search="onSearch"
                                    :closeOnSelect="true"
                                >
                                    <template slot="no-options">
                                        type to search Places..
                                    </template>
                                    <template slot="option" slot-scope="option">
                                        <div class="d-center">
                                            {{ option.text_en }}
                                        </div>
                                    </template>
                                    <template
                                        slot="selected-option"
                                        slot-scope="option"
                                    >
                                        <div class="selected d-center">
                                            {{ option.text_en }}
                                        </div>
                                    </template>

                                    <!-- Loading Spinner -->
                                    <template #spinner="{ loading }">
                                        <div
                                            v-if="loading"
                                            style="border-left-color: rgba(88,151,251,0.71)"
                                            class="vs__spinner"
                                        ></div>
                                    </template>
                                </v-select>
                            </div>
                            <div
                                class="col-sm-1 pl-0 pr-0 align-self-center booking-form-icon-wrapper"
                            >
                                <i
                                    class="fa fa-plus-circle d-flex justify-content-center booking-form-icon"
                                    aria-hidden="true"
                                    style=";"
                                    @click.prevent="add"
                                ></i>
                            </div>
                        </div>
                    </div>
                    <div
                        class="form-group input-group via-route"
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
                                <div class="mb-2 mt-2">
                                    <div class="row justify-content-end">
                                        <div
                                            class="form-group input-group col-sm-10 pr-0"
                                        >
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i
                                                        class="fa fa-align-justify handle"
                                                    ></i>
                                                </div>
                                            </div>
                                            <v-select
                                                label="text_en"
                                                placeholder="Enter your Via Route point"
                                                class="form-control d-flex flex-column justify-content-center style-chooser"
                                                v-model="viaItem.route"
                                                :filterable="false"
                                                :options="options"
                                                @search="onSearch"
                                                :closeOnSelect="true"
                                            >
                                                <template slot="no-options">
                                                    type to search Places..
                                                </template>
                                                <template
                                                    slot="option"
                                                    slot-scope="option"
                                                >
                                                    <div class="d-center">
                                                        {{ option.text_en }}
                                                    </div>
                                                </template>
                                                <template
                                                    slot="selected-option"
                                                    slot-scope="option"
                                                >
                                                    <div
                                                        class="selected d-center"
                                                    >
                                                        {{ option.text_en }}
                                                    </div>
                                                </template>

                                                <!-- Loading Spinner -->
                                                <template
                                                    #spinner="{ loading }"
                                                >
                                                    <div
                                                        v-if="loading"
                                                        style="border-left-color: rgba(88,151,251,0.71)"
                                                        class="vs__spinner"
                                                    ></div>
                                                </template>
                                            </v-select>
                                        </div>
                                        <div
                                            class="col-sm-1 pl-0 pr-0 align-self-center booking-form-icon-wrapper"
                                        >
                                            <i
                                                class="fas fa-times-circle d-flex justify-content-center booking-form-icon"
                                                aria-hidden="true"
                                                @click.prevent="
                                                    removeVia(viaIndex)
                                                "
                                            ></i>
                                            <!-- <i class="fas fa-times-circle"></i> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </draggable>
                    </div>
                    <div class="row">
                        <div class="mt-2 dropoff-point col-sm-11 pr-0">
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                </div>
                                <v-select
                                    label="text_en"
                                    placeholder="Enter your Drop off point"
                                    class="form-control d-flex flex-column justify-content-center style-chooser"
                                    v-model="item.destination"
                                    :filterable="false"
                                    :options="options"
                                    @search="onSearch"
                                    :clearSearchOnSelect="true"
                                >
                                    <template slot="no-options">
                                        type to search Places..
                                    </template>
                                    <template slot="option" slot-scope="option">
                                        <div class="d-center">
                                            {{ option.text_en }}
                                        </div>
                                    </template>
                                    <template
                                        slot="selected-option"
                                        slot-scope="option"
                                    >
                                        <div class="selected d-center">
                                            {{ option.text_en }}
                                        </div>
                                    </template>

                                    <!-- Loading Spinner -->
                                    <template #spinner="{ loading }">
                                        <div
                                            v-if="loading"
                                            style="border-left-color: rgba(88,151,251,0.71)"
                                            class="vs__spinner"
                                        ></div>
                                    </template>
                                </v-select>
                            </div>

                            <!-- Starting Map Error -->
                            <div v-if="mapData.errors.length > 0">
                                <div
                                    class="mt-4 alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                >
                                    {{ mapData.errors }}
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
                            <!-- Ending Map Error -->
                        </div>
                    </div>

                    <div class="row">
                        <!-- <div class="d-flex justify-content-end mt-2 col-sm-10 pr-0">
                            <i class="fas fa-exchange-alt return-booking" style='font-size: 15px'> Return Booking?</i>
                        </div> -->
                        <!-- <div class="d-flex justify-content-end mt-2 col-sm-4 pr-0">
                            <i class="fas fa-exchange-alt return-booking" style='font-size: 15px'></i>
                        </div>
                        <div class="d-flex justify-content-end mt-2 col-sm-4 pr-0">
                            <p class="text-left">Return Booking?</p>
                        </div> -->
                    </div>
                    <div class="row container-fluid justify-content-end mt-2">
                        <div class="row" @click.prevent="returnBooking">
                            <!-- <i
                                class="fas fa-exchange-alt d-flex align-self-center"
                                style="font-size: 15px"
                            ></i> -->
                            <p class="text-left mb-0 ml-2 text-black">Return Booking?</p>
                        </div>
                    </div>

                    <!-- /*
                    ? Return Booking
                    */ -->
                    <div v-if="journey[0].return" class="mt-2 mb-3">
                        <div class="mb-2 pickup-point">
                            <div class="row">
                                <div
                                    class="form-group input-group col-sm-11 pr-0"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i
                                                class="fas fa-map-marker-alt"
                                            ></i>
                                        </div>
                                    </div>
                                    <v-select
                                        label="text_en"
                                        placeholder="Return pickup point"
                                        class="form-control d-flex flex-column justify-content-center style-chooser"
                                        v-model="item.destination"
                                        :filterable="false"
                                        :options="options"
                                        :disabled="true"
                                        :closeOnSelect="true"
                                    >
                                        <template slot="no-options">
                                            type to search Places..
                                        </template>
                                        <template
                                            slot="option"
                                            slot-scope="option"
                                        >
                                            <div class="d-center">
                                                {{ option.text_en }}
                                            </div>
                                        </template>
                                        <template
                                            slot="selected-option"
                                            slot-scope="option"
                                        >
                                            <div class="selected d-center">
                                                {{ option.text_en }}
                                            </div>
                                        </template>

                                        <!-- Loading Spinner -->
                                        <template #spinner="{ loading }">
                                            <div
                                                v-if="loading"
                                                style="border-left-color: rgba(88,151,251,0.71)"
                                                class="vs__spinner"
                                            ></div>
                                        </template>
                                    </v-select>
                                </div>
                                <div
                                    class="col-sm-1 pl-0 pr-0 align-self-center booking-form-icon-wrapper"
                                >
                                    <i
                                        class="fa fa-plus-circle d-flex justify-content-center booking-form-icon"
                                        aria-hidden="true"
                                        @click.prevent="addReturnVia"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div
                            class="form-group input-group via-route"
                            v-show="!index && item.returnVia.length > 0"
                        >
                            <draggable
                                tag="div"
                                :list="item.returnVia"
                                class="form-group"
                                handle=".handle"
                            >
                                <div
                                    v-for="(viaItem,
                                    viaIndex) in item.returnVia"
                                    :key="viaIndex"
                                >
                                    <div class="mb-2 mt-2">
                                        <div class="row justify-content-end">
                                            <div
                                                class="form-group input-group col-sm-10 pr-0"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <div
                                                        class="input-group-text"
                                                    >
                                                        <i
                                                            class="fa fa-align-justify handle"
                                                        ></i>
                                                    </div>
                                                </div>
                                                <v-select
                                                    label="text_en"
                                                    placeholder="Enter your Via Route point"
                                                    class="form-control d-flex flex-column justify-content-center style-chooser"
                                                    v-model="viaItem.route"
                                                    :filterable="false"
                                                    :options="options"
                                                    @search="onSearch"
                                                    :closeOnSelect="true"
                                                >
                                                    <template slot="no-options">
                                                        type to search Places..
                                                    </template>
                                                    <template
                                                        slot="option"
                                                        slot-scope="option"
                                                    >
                                                        <div class="d-center">
                                                            {{ option.text_en }}
                                                        </div>
                                                    </template>
                                                    <template
                                                        slot="selected-option"
                                                        slot-scope="option"
                                                    >
                                                        <div
                                                            class="selected d-center"
                                                        >
                                                            {{ option.text_en }}
                                                        </div>
                                                    </template>

                                                    <!-- Loading Spinner -->
                                                    <template
                                                        #spinner="{ loading }"
                                                    >
                                                        <div
                                                            v-if="loading"
                                                            style="border-left-color: rgba(88,151,251,0.71)"
                                                            class="vs__spinner"
                                                        ></div>
                                                    </template>
                                                </v-select>
                                            </div>
                                            <div
                                                class="col-sm-1 pl-0 pr-0 align-self-center booking-form-icon-wrapper"
                                            >
                                                <i
                                                    class="fas fa-times-circle d-flex justify-content-center booking-form-icon"
                                                    aria-hidden="true"
                                                    @click.prevent="
                                                        removeReturnVia(
                                                            viaIndex
                                                        )
                                                    "
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </draggable>
                        </div>
                        <div class="row">
                            <div class="mt-2 dropoff-point col-sm-11 pr-0">
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i
                                                class="fas fa-map-marker-alt"
                                            ></i>
                                        </div>
                                    </div>
                                    <v-select
                                        label="text_en"
                                        placeholder="Return Drop off point"
                                        class="form-control d-flex flex-column justify-content-center style-chooser"
                                        v-model="item.origin"
                                        :filterable="false"
                                        :options="options"
                                        :disabled="true"
                                        :clearSearchOnSelect="true"
                                    >
                                        <template slot="no-options">
                                            type to search Places..
                                        </template>
                                        <template
                                            slot="option"
                                            slot-scope="option"
                                        >
                                            <div class="d-center">
                                                {{ option.text_en }}
                                            </div>
                                        </template>
                                        <template
                                            slot="selected-option"
                                            slot-scope="option"
                                        >
                                            <div class="selected d-center">
                                                {{ option.text_en }}
                                            </div>
                                        </template>

                                        <!-- Loading Spinner -->
                                        <template #spinner="{ loading }">
                                            <div
                                                v-if="loading"
                                                style="border-left-color: rgba(88,151,251,0.71)"
                                                class="vs__spinner"
                                            ></div>
                                        </template>
                                    </v-select>
                                </div>

                                <!-- Starting Map Error -->
                                <div v-if="mapData.errors.length > 0">
                                    <div
                                        class="mt-4 alert alert-danger alert-dismissible fade show"
                                        role="alert"
                                    >
                                        {{ mapData.errors }}
                                        <button
                                            type="button"
                                            class="close"
                                            data-dismiss="alert"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true"
                                                >&times;</span
                                            >
                                        </button>
                                    </div>
                                </div>
                                <!-- Ending Map Error -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-11 pl-0 pr-0 booking-form-btn">
                    <button
                        class="btn btn-block btn-primary mt-2"
                        style="border-radius: 0px; width: 104%"
                        :disabled="!validateQuote"
                        @click.prevent="submitQuote"
                    >
                        Book Now
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
                    <span class="d-flex">
                        <p class="mb-0 mr-1"><strong>Start: </strong></p>
                        {{ journey[0].origin.text }}
                    </span>
                </li>
                <div v-if="journey[0].via.length > 0">
                    <li>
                        <span class="d-flex">
                            <p class="mb-0 mr-1"><strong>Via: </strong></p>
                            {{ journey[0].viaRouteNames }}
                        </span>
                    </li>
                </div>
                <li>
                    <span class="d-flex">
                        <p class="mb-0 mr-2"><strong>End: </strong></p>
                        {{ journey[0].destination.text }}
                    </span>
                </li>
            </ul>
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
            <div id="map">
                <Mapbox
                    access-token="pk.eyJ1IjoicmFmaW4wMCIsImEiOiJja2FmaWw1enIwY3prMnJwbncyd2drdHFkIn0.PaCcWFNkUB6qq0M2aCHRrg"
                    :map-options="{
                        container: 'map',
                        style: 'mapbox://styles/mapbox/streets-v11',
                        center: mapData.center,
                        zoom: 13
                    }"
                    :geolocate-control="{
                        show: true,
                        position: 'top-left'
                    }"
                    :fullscreen-control="{
                        show: true,
                        position: 'top-left'
                    }"
                    @map-load="loaded"
                />
            </div>
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

            <!-- <div class="group-vehicle row d-flex ml-0 mr-0"
                v-for="price in priceList[0]" :key="price.id"> -->
            <div class="group-vehicle row d-flex ml-0 mr-0">
                <!-- Saloon Car -->
                <!-- <div class="group vehicle">
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
                                Fare £{{ priceList[0].price }}
                                <input
                                    type="radio"
                                    name="vehicle"
                                    :value="priceList[0].id"
                                    v-model="journey[0].priceId"
                                />
                            </label>
                        </div>
                    </div>
                </div> -->

                <div class="group vehicle row d-flex align-items-center">
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-2 price-section car-img"
                    >
                        <img
                            class="mr-0 ml-1"
                            src="../../../../public/img/Cars/Cars SVG/Black Color/Saloon Car black.svg"
                            alt="Saloon Car"
                            style="max-width: 5.5rem;"
                        />
                    </div>
                    <div
                        class="d-flex flex-column align-items-center col-sm-6 pl-2 pr-0 price-section car-details"
                    >
                        <div class="row container-fluid">
                            <h6>Saloon Car</h6>
                        </div>
                        <div class="row container-fluid">
                            <p>
                                <span class="pr-2"
                                    ><i class="fas fa-male pr-1"></i>x3</span
                                >
                                <span
                                    ><i class="fas fa-suitcase pr-1"></i
                                    >x3</span
                                >
                            </p>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-0 price-section fare-price"
                    >
                        <label class="single">
                            £{{ priceList[0].price }}
                            <input
                                type="radio"
                                name="vehicle"
                                class="ml-2 price-list"
                                    :value="priceList[0].id"
                                    v-model="journey[0].priceId"
                            />
                        </label>
                    </div>
                </div>

                <!-- Estate Car -->
                <!-- <div class="group vehicle">
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
                                Fare £{{ priceList[1].price }}
                                <input
                                    type="radio"
                                    name="vehicle"
                                    :value="priceList[1].id"
                                    v-model="journey[0].priceId"
                                />
                            </label>
                        </div>
                    </div>
                </div> -->

                <div class="group vehicle row d-flex align-items-center">
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-2 price-section car-img"
                    >
                        <img
                            class="mr-0 ml-1"
                            src="../../../../public/img/Cars/Cars SVG/Black Color/Estate Car black.svg"
                            alt="Estate Car"
                            style="max-width: 5.5rem;"
                        />
                    </div>
                    <div
                        class="d-flex flex-column align-items-center col-sm-6 pl-2 pr-0 price-section car-details"
                    >
                        <div class="row container-fluid">
                            <h6>Estate Car</h6>
                        </div>
                        <div class="row container-fluid">
                            <p>
                                <span class="pr-2"
                                    ><i class="fas fa-male pr-1"></i>x4</span
                                >
                                <span
                                    ><i class="fas fa-suitcase pr-1"></i
                                    >x4</span
                                >
                            </p>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-0 price-section fare-price"
                    >
                        <label class="single">
                            £{{ priceList[1].price }}
                            <input
                                type="radio"
                                name="vehicle"
                                class="ml-2 price-list"
                                    :value="priceList[1].id"
                                    v-model="journey[0].priceId"
                            />
                        </label>
                    </div>
                </div>

                <!-- People Carrier -->
                <!-- <div class="group vehicle">
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
                                Fare £{{ priceList[2].price }}
                                <input
                                    type="radio"
                                    name="vehicle"
                                    :value="priceList[2].id"
                                    v-model="journey[0].priceId"
                                />
                            </label>
                        </div>
                    </div>
                </div> -->

                <div class="group vehicle row d-flex align-items-center">
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-2 price-section car-img"
                    >
                        <img
                            class="mr-0 ml-1"
                            src="../../../../public/img/Cars/Cars SVG/Black Color/People Carrier black.svg"
                            alt="People Carrier"
                            style="max-width: 5.5rem;"
                        />
                    </div>
                    <div
                        class="d-flex flex-column align-items-center col-sm-6 pl-2 pr-0 price-section car-details"
                    >
                        <div class="row container-fluid">
                            <h6>People Carrier</h6>
                        </div>
                        <div class="row container-fluid">
                            <p>
                                <span class="pr-2"
                                    ><i class="fas fa-male pr-1"></i>x5</span
                                >
                                <span
                                    ><i class="fas fa-suitcase pr-1"></i
                                    >x5</span
                                >
                            </p>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-0 price-section fare-price"
                    >
                        <label class="single">
                            £{{ priceList[2].price }}
                            <input
                                type="radio"
                                name="vehicle"
                                class="ml-2 price-list"
                                    :value="priceList[2].id"
                                    v-model="journey[0].priceId"
                            />
                        </label>
                    </div>
                </div>

                <!-- Executive Car -->
                <!-- <div class="group vehicle">
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
                                Fare £{{ priceList[3].price }}
                                <input
                                    type="radio"
                                    name="vehicle"
                                    :value="priceList[3].id"
                                    v-model="journey[0].priceId"
                                />
                            </label>
                        </div>
                    </div>
                </div> -->

                <div class="group vehicle row d-flex align-items-center">
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-2 price-section car-img"
                    >
                        <img
                            class="mr-0 ml-1"
                            src="../../../../public/img/Cars/Cars SVG/Black Color/Executive Car black.svg"
                            alt="Executive Car"
                            style="max-width: 5.5rem;"
                        />
                    </div>
                    <div
                        class="d-flex flex-column align-items-center col-sm-6 pl-2 pr-0 price-section car-details"
                    >
                        <div class="row container-fluid">
                            <h6>Executive Car</h6>
                        </div>
                        <div class="row container-fluid">
                            <p>
                                <span class="pr-2"
                                    ><i class="fas fa-male pr-1"></i>x3</span
                                >
                                <span
                                    ><i class="fas fa-suitcase pr-1"></i
                                    >x3</span
                                >
                            </p>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-0 price-section fare-price"
                    >
                        <label class="single">
                            £{{ priceList[3].price }}
                            <input
                                type="radio"
                                name="vehicle"
                                class="ml-2 price-list"
                                    :value="priceList[3].id"
                                    v-model="journey[0].priceId"
                            />
                        </label>
                    </div>
                </div>

                <!-- Executive People Carrier -->
                <!-- <div class="group vehicle">
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
                                Fare £{{ priceList[4].price }}
                                <input
                                    type="radio"
                                    name="vehicle"
                                    :value="priceList[4].id"
                                    v-model="journey[0].priceId"
                                />
                            </label>
                        </div>
                    </div>
                </div> -->

                <div class="group vehicle row d-flex align-items-center">
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-2 price-section car-img"
                    >
                        <img
                            class="mr-0 ml-1"
                            src="../../../../public/img/Cars/Cars SVG/Black Color/Executive People Carrier black.svg"
                            alt="Executive People Carrier"
                            style="max-width: 5.5rem;"
                        />
                    </div>
                    <div
                        class="d-flex flex-column align-items-center col-sm-6 pl-2 pr-0 price-section car-details"
                    >
                        <div class="row container-fluid">
                            <h6>Executive People Carrier</h6>
                        </div>
                        <div class="row container-fluid">
                            <p>
                                <span class="pr-2"
                                    ><i class="fas fa-male pr-1"></i>x5</span
                                >
                                <span
                                    ><i class="fas fa-suitcase pr-1"></i
                                    >x5</span
                                >
                            </p>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-0 price-section fare-price"
                    >
                        <label class="single">
                            £{{ priceList[4].price }}
                            <input
                                type="radio"
                                name="vehicle"
                                class="ml-2 price-list"
                                    :value="priceList[4].id"
                                    v-model="journey[0].priceId"
                            />
                        </label>
                    </div>
                </div>

                <!-- 8 Seater Minibus -->
                <!-- <div class="group vehicle">
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
                                Fare £{{ priceList[5].price }}
                                <input
                                    type="radio"
                                    name="vehicle"
                                    :value="priceList[5].id"
                                    v-model="journey[0].priceId"
                                />
                            </label>
                        </div>
                    </div>
                </div> -->

                <div class="group vehicle row d-flex align-items-center">
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-2 price-section car-img"
                    >
                        <img
                            class="mr-0 ml-1"
                            src="../../../../public/img/Cars/Cars SVG/Black Color/8 Seater Minibus black.svg"
                            alt="8 Seater Minibus"
                            style="max-width: 5.5rem;"
                        />
                    </div>
                    <div
                        class="d-flex flex-column align-items-center col-sm-6 pl-2 pr-0 price-section car-details"
                    >
                        <div class="row container-fluid">
                            <h6>8 Seater Minibus</h6>
                        </div>
                        <div class="row container-fluid">
                            <p>
                                <span class="pr-2"
                                    ><i class="fas fa-male pr-1"></i>x8</span
                                >
                                <span
                                    ><i class="fas fa-suitcase pr-1"></i
                                    >x8</span
                                >
                            </p>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-0 price-section fare-price"
                    >
                        <label class="single">
                            £{{ priceList[5].price }}
                            <input
                                type="radio"
                                name="vehicle"
                                class="ml-2 price-list"
                                    :value="priceList[5].id"
                                    v-model="journey[0].priceId"
                            />
                        </label>
                    </div>
                </div>

                <!-- 14 Seater Minibus -->
                <!-- <div class="group vehicle">
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
                                Fare £{{ priceList[6].price }}
                                <input
                                    type="radio"
                                    name="vehicle"
                                    :value="priceList[6].id"
                                    v-model="journey[0].priceId"
                                />
                            </label>
                        </div>
                    </div>
                </div> -->

                <div class="group vehicle row d-flex align-items-center">
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-2 price-section car-img"
                    >
                        <img
                            class="mr-0 ml-1"
                            src="../../../../public/img/Cars/Cars SVG/Black Color/14 Seater Minibus black.svg"
                            alt="14 Seater Minibus"
                            style="max-width: 5.5rem;"
                        />
                    </div>
                    <div
                        class="d-flex flex-column align-items-center col-sm-6 pl-2 pr-0 price-section car-details"
                    >
                        <div class="row container-fluid">
                            <h6>14 Seater Minibus</h6>
                        </div>
                        <div class="row container-fluid">
                            <p>
                                <span class="pr-2"
                                    ><i class="fas fa-male pr-1"></i>x14</span
                                >
                                <span
                                    ><i class="fas fa-suitcase pr-1"></i
                                    >x8</span
                                >
                            </p>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center col-sm-3 pl-0 pr-0 price-section fare-price"
                    >
                        <label class="single">
                            £{{ priceList[6].price }}
                            <input
                                type="radio"
                                name="vehicle"
                                class="ml-2 price-list"
                                    :value="priceList[6].id"
                                    v-model="journey[0].priceId"
                            />
                        </label>
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
                        Back
                        <i class="fa fa-angle-left ml-1" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="submitFare"
                        :disabled="journey[0].priceId === null"
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
                                        placeholder="---"
                                        v-model="quoteDetails.name"
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
                                        placeholder="---"
                                        v-model="quoteDetails.mobile"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-show="
                            journey[0].originType == 'airport' ||
                                journey[0].originType == 'terminal'
                        "
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
                                        placeholder="---"
                                        v-model="quoteDetails.passport"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label>Flight Number</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Flight Number"
                                    v-model="quoteDetails.flightNumber"
                                />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>Flight Origin</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Flight Origin"
                                    v-model="quoteDetails.flightOrigin"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="col-md-5 mb-3">
                            <label>Passengers</label>
                            <select
                                class="custom-select"
                                required
                                v-model="quoteDetails.passengers"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div class="col-md-7 mb-3">
                            <label>Luggage</label>
                            <select
                                class="custom-select"
                                required
                                v-model="quoteDetails.luggage"
                            >
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
                                            readonly
                                            placeholder="---"
                                            v-model="quoteDetails.journeyDate"
                                            type="datetime"
                                            format="YYYY-MM-DD HH:mm"
                                            value-type="YYYY-MM-DD HH:mm:ss"
                                            :disabled-date="notBeforeToday"
                                        >
                                        </date-picker>
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
                            Back
                        <i class="fa fa-angle-left ml-1" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="">
                        <button
                            type="button"
                            class="btn btn-primary"
                            :disabled="checkPassengerDetails"
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
                                Pick up at {{ quoteDetails.journeyDate }} for
                                {{ quoteDetails.passengers }} Passenger with
                                {{ quoteDetails.luggage }}
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
                        <strong>£{{ quoteDetails.fare }}</strong>
                    </div>
                </div>

                <div class="mt-2 width-100">
                    <label>Enter Your Email to get e-ticekt</label>
                    <div class="form-row align-items-center">
                        <div class="col">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    class="form-control"
                                    placeholder="Ex: john@example.com"
                                    v-model="quoteDetails.email"
                                />
                            </div>
                        </div>
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
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="payNow"
                            :disabled="quoteDetails.email === ''"
                        >
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

import _ from "lodash";

import mapboxgl from "mapbox-gl";
import Mapbox from "mapbox-gl-vue";
import qs from "qs";

export default {
    components: {
        draggable,
        vSelect,
        DatePicker,
        mapboxgl,
        Mapbox
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
                    via: [],
                    returnVia: [],
                    return: false,
                    viaRouteNames: "",
                    priceId: null,
                    fare: null
                }
            ],

            priceList: [],

            quoteDetails: {
                // Journey Details
                originName: "",
                originType: "",
                destinationName: "",
                viaRouteNames: "",
                journeyDate: null,
                fare: null,

                // Passenger Details
                name: "",
                email: "",
                mobile: "",
                passport: "",
                flightNumber: "",
                flightOrigin: "",
                meetAndGreetService: "",
                passengers: null,
                luggage: "",

                coupon_id: "",
                price_id: "",
                discount: null,
                totalPrice: null
            },

            formStage: [
                {
                    place: true,
                    details: false,
                    journeyFare: false,
                    basket: false
                }
            ],
            // Ending Journey Details Form

            // Starting Journey Fares
            guidance: false,
            // Ending Journey Fares

            // Starting Journey Guidance
            passengerGuidance: false,
            pickupDate: false,
            // Ending Journey Guidance

            options: [],

            mapBox: {
                mapStyle: "mapbox://styles/mapbox/streets-v11",
                accessToken:
                    "pk.eyJ1IjoicmFmaW4wMCIsImEiOiJja2FmaWw1enIwY3prMnJwbncyd2drdHFkIn0.PaCcWFNkUB6qq0M2aCHRrg",
                postUrl:
                    "https://api.mapbox.com/directions/v5/mapbox/driving?access_token=pk.eyJ1IjoicmFmaW4wMCIsImEiOiJja2FmaWw1enIwY3prMnJwbncyd2drdHFkIn0.PaCcWFNkUB6qq0M2aCHRrg"
            },

            mapData: {
                // To submit a post request to mapdata api, we need full route list and so we'll store full route list in mapData.fullRoutes
                fullRoutes: "",

                // After submitting post request to mapbox api and getting coordinates, we'll store the coordinates to mapData.coordinates
                coordinates: [],
                center: [],
                start: "",
                end: "",
                responseCode: "",
                errors: ""
            }
        };
    },
    mounted() {
        if (localStorage.getItem("loggedIn") !== null) {
            this.quoteDetails.name = localStorage.getItem("authUsername");
            this.quoteDetails.email = localStorage.getItem("authEmail");

            if (localStorage.getItem("authMobile"))
                this.quoteDetails.mobile = localStorage.getItem("authMobile");
        }

        // Getting the price list from database
        axios.get("/price-list").then(response => {
            this.priceList = response.data;
        });
    },
    methods: {
        // Adding a via route
        add() {
            this.journey[0].via.push({
                // route: ""
            });
        },

        // Remove a via route
        removeVia(index) {
            this.journey[0].via.splice(index, 1);
        },

        // Adding a Return via route
        addReturnVia() {
            this.journey[0].returnVia.push({});
        },

        // Remove a Return via route
        removeReturnVia(index) {
            this.journey[0].returnVia.splice(index, 1);
        },

        returnBooking() {
            this.journey[0].return = !this.journey[0].return;
            this.journey[0].returnVia = [...this.journey[0].via];
        },
        // Function to search a place
        onSearch(search, loading) {
            loading(true);
            this.search(loading, search, this);
        },

        // Searching a place
        search: _.debounce((loading, search, vm) => {
            if (search.length > 0) {
                axios
                    .get(
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=pk.eyJ1IjoicmFmaW4wMCIsImEiOiJja2FmaWw1enIwY3prMnJwbncyd2drdHFkIn0.PaCcWFNkUB6qq0M2aCHRrg&country=gb&language=en&limit=5&types=address,poi`
                    )
                    .then(response => {
                        vm.options = response.data.features;
                    });
            }
            loading(false);
        }, 1000),

        // Creating a MapBox
        loaded(map) {
            map.addSource("route", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            properties: {},
                            geometry: {
                                type: "LineString",
                                coordinates: this.mapData.coordinates
                            }
                        }
                    ]
                }
            });
            map.addLayer({
                id: "route",
                type: "line",
                source: "route",
                layout: {
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": "#888",
                    "line-width": 8
                }
            });
            new mapboxgl.Marker()
                .setLngLat(this.mapData.coordinates[0])
                .addTo(map);

            new mapboxgl.Marker()
                .setLngLat(
                    this.mapData.coordinates[
                        this.mapData.coordinates.length - 1
                    ]
                )
                .addTo(map);

            var places = {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: {
                            description: this.mapData.start
                        },
                        geometry: {
                            type: "Point",
                            coordinates: this.mapData.coordinates[0]
                        }
                    },
                    {
                        type: "Feature",
                        properties: {
                            description: this.mapData.end
                        },
                        geometry: {
                            type: "Point",
                            coordinates: this.mapData.coordinates[
                                this.mapData.coordinates.length - 1
                            ]
                        }
                    }
                ]
            };

            map.addSource("places", {
                type: "geojson",
                data: places
            });
            map.addLayer({
                id: "poi-labels",
                type: "symbol",
                source: "places",
                layout: {
                    "text-field": ["get", "description"],
                    "text-variable-anchor": ["top", "bottom", "left", "right"],
                    "text-radial-offset": 0.5,
                    "text-justify": "auto",
                    "icon-image": ["concat", ["get", "icon"], "-15"]
                }
            });
        },

        // Posting a request to  MapBox Api
        mapBoxPostRequest() {
            return new Promise((resolve, reject) => {
                // Storing the starting point
                this.mapData.fullRoutes +=
                    this.journey[0].origin.geometry.coordinates.join(",") + ";";

                // Checking is there is any via route
                if (this.journey[0].via.length) {
                    let viaRoutes = this.journey[0].via;

                    for (let i = 0; i < viaRoutes.length; i++) {
                        // Checking if user adds a route field and input something or not
                        if (_.isEmpty(viaRoutes)) i++;

                        // Storing via route names so that we can show those name later
                        this.journey[0].viaRouteNames +=
                            viaRoutes[i].route.text + ", ";

                        // If there is any via route then concate it with mapData.fullRoutes
                        this.mapData.fullRoutes +=
                            viaRoutes[i].route.geometry.coordinates.join(",") +
                            ";";
                    }

                    // Checking if via routes are there and if so then delete last two words
                    // Because last two words of this string are "," & " "
                    if (this.journey[0].viaRouteNames.length) {
                        this.journey[0].viaRouteNames = this.journey[0].viaRouteNames.slice(
                            0,
                            -2
                        );
                    }
                }

                // Getting the origin / pickup point type
                if (this.journey[0].origin.properties.maki) {
                    this.journey[0].originType = this.journey[0].origin.properties.maki;
                }

                // Storing the ending point
                this.mapData.fullRoutes += this.journey[0].destination.geometry.coordinates.join(
                    ","
                );

                const data = qs.stringify({
                    // coordinates:
                    //     this.journey[0].origin["center"].join(",") +
                    //     ";" +
                    //     this.journey[0].destination["center"].join(","),
                    coordinates: this.mapData.fullRoutes,
                    geometries: "geojson",
                    overview: "full",
                    steps: false
                });

                axios({
                    method: "post",
                    url: this.mapBox.postUrl,
                    data,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                    .then(response => {
                        if (
                            response.data.code != "Ok" &&
                            response.status != 200 &&
                            (!this.journey[0].origin ||
                                !this.journey[0].destination)
                        )
                            reject(false);
                        else if (
                            response.data.code === "NoRoute" &&
                            response.status == 200
                        ) {
                            this.mapData.errors =
                                "There was no route found for the given places.";
                            console.log(this.mapData.errors);
                            reject(false);
                        } else if (
                            response.data.code === "NoSegment" &&
                            response.status == 200
                        ) {
                            this.mapData.errors =
                                "No road segment could be matched for one or more coordinates within the supplied radiuses. Check for coordinates that are too far away from a road.";
                            console.log(this.mapData.errors);
                            reject(false);
                        } else {
                            // Getting sesponse code from mapbox api
                            this.mapData.responseCode = response.data.code;

                            // Storing coordinates as array from mapbox api
                            this.mapData.coordinates =
                                response.data.routes[0].geometry.coordinates;

                            this.mapData.center = this.mapData.coordinates[0];

                            this.mapData.start =
                                response.data.waypoints[0].name;
                            this.mapData.end =
                                response.data.waypoints[
                                    response.data.waypoints.length - 1
                                ].name;

                            this.quoteDetails.originName = this.journey[0].origin.text;
                            this.quoteDetails.originType = this.journey[0].originType;

                            this.quoteDetails.destinationName = this.journey[0].destination.text;
                            this.quoteDetails.viaRouteNames = this.journey[0].viaRouteNames;
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        this.mapData.errors = "The given input was not valid.";
                        console.log(this.mapData.errors);
                        console.log(error.status);

                        reject(false);
                    });
            });
        },

        // Used before
        submittedQuote() {
            return new Promise((resolve, reject) => {
                // setTimeout(() => {
                //     if (!this.journey[0].origin || !this.journey[0].destination)
                //         reject(false);
                //     else resolve(true);
                // }, 1000);
                this.mapBoxPostRequest(resolve, reject);
            });
        },

        // After submitting MapBox Api request change formStage Value
        submitQuote() {
            // this.submittedQuote().then(() => {
            //     this.formStage[0].place = false;
            //     this.formStage[0].journeyFare = true;
            // });

            this.mapBoxPostRequest().then(() => {
                this.formStage[0].place = false;
                this.formStage[0].journeyFare = true;
            });
        },

        backToBooking() {
            this.formStage[0].place = true;
            this.formStage[0].journeyFare = false;

            this.mapData.fullRoutes = this.mapData.start = this.mapData.end = this.mapData.responseCode = this.mapData.errors =
                "";
            this.mapData.coordinates = this.mapData.center = [];
            this.journey[0].viaRouteNames = "";

            this.quoteDetails.originName = "";
            this.quoteDetails.originType = "";

            this.quoteDetails.destinationName = "";
            this.quoteDetails.viaRouteNames = "";

            $("html,body").scrollTop(0);
        },

        submitFare() {
            this.formStage[0].journeyFare = false;
            this.formStage[0].details = true;

            this.quoteDetails.priceId = this.journey[0].priceId;

            axios
                .post("/get-price", {
                    price_id: this.journey[0].priceId
                })
                .then(response => {
                    this.quoteDetails.fare = response.data;
                });

            $("html,body").scrollTop(0);
        },

        backToFare() {
            this.formStage[0].journeyFare = true;
            this.formStage[0].details = false;

            this.quoteDetails.priceId = null;

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
        },

        payNow() {
            this.data = {
                name: this.quoteDetails.name,
                email: this.quoteDetails.email,
                mobile: this.quoteDetails.mobile,
                from: this.quoteDetails.originName,
                via: this.quoteDetails.viaRouteNames,
                to: this.quoteDetails.destinationName,
                journey_date: this.quoteDetails.journeyDate,
                passengers: this.quoteDetails.passengers,
                luggage: this.quoteDetails.luggage,
                // coupon_id: this.quoteDetails.coupon_id,
                price_id: this.journey[0].priceId,
                discount: this.quoteDetails.discount,
                total_price: parseFloat(this.quoteDetails.fare),
                passport: this.quoteDetails.passport,
                flight_number: this.quoteDetails.flightNumber,
                flight_origin: this.quoteDetails.flightOrigin,
                meet_and_greet_service: this.quoteDetails.meetAndGreetService,
                booking_status_id: 0
            };

            axios.post("/submit-booking", this.data).then(response => {
                Swal.fire({
                    icon: "success",
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location = "/";
            });
        }
    },
    computed: {
        validateQuote() {
            if (!this.journey[0].origin || !this.journey[0].destination)
                return false;
            else return true;
        },

        // getValidation() {
        //     if (
        //         this.quoteValidation().then(result => {
        //             result === true ? true : false;
        //         })
        //     )
        //         return true;
        //     else return false;
        // }

        checkPassengerDetails() {
            if (
                this.journey[0].originType == "airport" ||
                this.journey[0].originType == "terminal"
            ) {
                if (
                    this.quoteDetails.name === "" ||
                    this.quoteDetails.mobile === "" ||
                    this.quoteDetails.passport === "" ||
                    this.quoteDetails.flightNumber === "" ||
                    this.quoteDetails.flightOrigin === "" ||
                    this.quoteDetails.passengers === null ||
                    this.quoteDetails.luggage === "" ||
                    this.quoteDetails.journeyDate === null
                )
                    return true;
                else return false;
            } else {
                if (
                    this.quoteDetails.name === "" ||
                    this.quoteDetails.mobile === "" ||
                    this.quoteDetails.passengers === null ||
                    this.quoteDetails.luggage === "" ||
                    this.quoteDetails.journeyDate === null
                )
                    return true;
                else return false;
            }
        }
    }
};
</script>

<style scoped>
#map {
    position: relative;
    top: 0;
    bottom: 0;
    width: 376px;
    height: 250px;
    margin-bottom: 35px;
}

/* Starting V-Select */
.input-group-text {
    border-radius: 0px;
}
img {
    height: auto;
    max-width: 2.5rem;
    margin-right: 1rem;
}

.d-center {
    display: flex;
    align-items: center;
}

.selected img {
    width: auto;
    max-height: 23px;
    margin-right: 0.5rem;
}

.v-select .dropdown li {
    border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

.v-select .dropdown li:last-child {
    border-bottom: none;
}

.v-select .dropdown li a {
    padding: 10px 20px;
    width: 100%;
    font-size: 1.25em;
    color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
    color: #fff;
}
/* Ending V-Select */
.booking-form-icon {
    font-size: 20px;
    color: #2b2b2b;
}
.booking-form-icon:hover {
    color: black;
}
.booking-form-icon-wrapper {
    left: 5px;
}
.price-section {
}
@media only screen and (max-width: 575px) {
    .booking-form-icon-wrapper {
        margin-top: 15px;
        margin-bottom: 15px;
        left: 0px;
    }
    .pickup-point,
    .via-route,
    .dropoff-point {
        margin: 0px !important;
    }
    .return-booking {
        justify-content: center !important;
        padding-left: 5rem !important;
    }
    .header-right {
        min-width: 430px !important;
    }
    .price-section.car-img {
        flex-direction: column !important;
        width: min-content !important;
    }
    .price-section.car-details {
        flex-direction: column !important;
        width: 50%;
    }
    .price-section.car-details div.row {
        padding: 0px;
        margin: 0px;
    }
    .price-section.fare-price {
        width: max-content !important;
    }
}
@media only screen and (max-width: 450px) {
    .group-vehicle div.group.vehicle {
        padding-right: 8px !important;
    }
    .price-section.car-img img {
        max-width: 2.5rem !important;
    }
}

.return-booking {
    /* padding-right: 35px; */
}
.return-booking > .row:hover {
    cursor: pointer;
}

.input-group-prepend {
    cursor: grab;
}

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
    /* background-color: #f3f3f3eb; */
    background-color: #ffffff8f;
    /* box-shadow: 0px 4px 8px #999999a3; */
    box-shadow: 0px 2px 10px #999999a3;
    border-radius: 8px;
    max-width: 450px;
    padding: 35px;
    margin-top: 100px;
    margin-bottom: 50px;
}

@media only screen and (max-width: 575px) {
    .header-right {
        min-width: 430px !important;
    }
}
@media only screen and (max-width: 450px) {
    .header-right {
        min-width: 320px !important;
        max-width: 320px !important;
    }
}
@media only screen and (max-width: 375px) {
    .header-right {
        min-width: 270px !important;
        max-width: 270px !important;
    }
}
.header-right .form-control {
    font-size: 15px;
    padding: 0.575rem 0.75rem;
    background-color: #ffff;
    /* background-color: #f3f3f3eb; */
    /* box-shadow: 0px 4px 8px #999999a3; */
    /* box-shadow: 0px 2px 10px #999999a3; */
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
    .header-right {
        min-width: 320px !important;
        max-width: 320px !important;
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
    width: 100%;
}

/* Ending Passenger Details */
</style>
