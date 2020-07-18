<template>
    <div class="header-right">
        <!-- /**
        * TODO:     Stage 1
        * ? Starting Origin-Destination Place Form
        */ -->
        <div
            class="origin-destination-place-form"
            style="text-align: left;"
            v-if="formStage.place && formStage.journeyFare == false"
        >
            <div id="bookingForm">
                <div v-for="(item, index) in journey" :key="index">
                    <div class="mb-2 pickup-point">
                        <div class="row pl-3 pr-3">
                            <div
                                class="form-group input-group col-sm-12 pl-0 pr-0"
                                style="background-color: white"
                            >
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
                                <div
                                    class="pl-0 pr-0 align-self-center booking-form-icon-wrapper"
                                    style="background-color: white"
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
                                    <div
                                        class="row pl-3 pr-3 justify-content-end"
                                    >
                                        <div
                                            class="form-group input-group col-sm-11 pl-0 pr-0 bg-white"
                                        >
                                            <div
                                                class="input-group-prepend grab"
                                            >
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </draggable>
                    </div>
                    <div class="row">
                        <div class="mt-2 dropoff-point col-sm-12">
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

                    <!-- Pick-up Date & Time -->
                    <div
                        class="row d-flex text-left justify-content-between ml-0 mr-0 mt-3"
                    >
                        <div class="width-100">
                            <!-- <label>Pick-up Date & Time</label> -->
                            <div class="form-row align-items-center">
                                <div class="col">
                                    <div class="form-group input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i
                                                    class="far fa-calendar-alt"
                                                ></i>
                                            </div>
                                        </div>

                                        <date-picker
                                            class="form-control d-flex flex-column justify-content-center"
                                            readonly
                                            placeholder="Pick-up Date & Time"
                                            v-model="quoteDetails.journeyDate.Details"
                                            type="datetime"
                                            format="YYYY-MM-DD HH:mm"
                                            value-type="YYYY-MM-DD HH:mm:ss"
                                            :disabled-date="notBeforeToday"
                                            :editable="false"
                                        >
                                        </date-picker>
                                    </div>
                                </div>
                            </div>
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
                            <p class="text-left mb-0 ml-2 text-black">
                                Return Booking?
                            </p>
                        </div>
                    </div>

                    <!-- /*
                    ? Return Booking
                    */ -->
                    <div
                        v-if="journey[0].return && validateQuote"
                        class="mt-2 mb-3"
                    >
                        <div class="mb-2 pickup-point">
                            <div class="row pl-3 pr-3">
                                <div
                                    class="form-group input-group col-sm-12 pl-0 pr-0"
                                    style="background-color: white"
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
                                        placeholder="Enter your pickup point"
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
                                    <div
                                        class="pl-0 pr-0 align-self-center booking-form-icon-wrapper"
                                        style="background-color: white"
                                    >
                                        <i
                                            class="fa fa-plus-circle d-flex justify-content-center booking-form-icon"
                                            aria-hidden="true"
                                            style=";"
                                            @click.prevent="addReturnVia"
                                        ></i>
                                    </div>
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
                                        <div
                                            class="row pl-3 pr-3 justify-content-end"
                                        >
                                            <div
                                                class="form-group input-group col-sm-11 pl-0 pr-0 bg-white"
                                            >
                                                <div
                                                    class="input-group-prepend grab"
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
                                </div>
                            </draggable>
                        </div>
                        <div class="row">
                            <div class="mt-2 dropoff-point col-sm-12">
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
                                        placeholder="Enter your Drop off point"
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

                        <!-- Return Pick-up Date & Time -->
                        <!-- <div
                            class="row d-flex text-left justify-content-between passenger-details ml-0 mr-0 mt-3"
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
                                                    v-model="
                                                        quoteDetails.returnDate
                                                    "
                                                    type="datetime"
                                                    format="YYYY-MM-DD HH:mm"
                                                    value-type="YYYY-MM-DD HH:mm:ss"
                                                    :disabled-date="
                                                        notBeforeJourneyDate
                                                    "
                                                    :editable="false"
                                                >
                                                </date-picker>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="col-sm-12 pl-0 pr-0 booking-form-btn">
                    <button
                        class="btn btn-block btn-primary mt-2"
                        style="border-radius: 0px; width: 100%"
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
                <!-- <div class="col-sm-12 pl-0 pr-0 booking-form-btn">
                    <button
                        class="btn btn-block btn-primary mt-2"
                        style="border-radius: 0px; width: 100%"
                        @click.prevent="downloadAndSendEmail"
                    >
                        Download
                        <span
                            ><i
                                class="fa fa-arrow-right ml-1"
                                aria-hidden="true"
                            ></i
                        ></span>
                    </button>
                </div> -->
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
        <!-- <div
            v-if="
                formStage.details ||
                    formStage.journeyFare ||
                    formStage.basket
            "
            class="first-journey text-left"
        >
            <ul class="list-unstyled origin mb-1">
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
                <div v-if="journey[0].return" class="mt-2">
                    <h6>Return Journey</h6>
                    <li>
                        <span class="d-flex">
                            <p class="mb-0 mr-1"><strong>Start: </strong></p>
                            {{ journey[0].returnFrom.text }}
                        </span>
                    </li>
                    <div v-if="journey[0].returnVia.length > 0">
                        <li>
                            <span class="d-flex">
                                <p class="mb-0 mr-1"><strong>Via: </strong></p>
                                {{ journey[0].returnViaRouteNames }}
                            </span>
                        </li>
                    </div>
                    <li>
                        <span class="d-flex">
                            <p class="mb-0 mr-2"><strong>End: </strong></p>
                            {{ journey[0].returnTo.text }}
                        </span>
                    </li>
                </div>
            </ul>
        </div> -->
        <!-- /**
        * TODO:     Stage 2
        * ? Ending First Journey
        */ -->

        <!-- /**
        * TODO:     Stage 3
        * ? Starting Journey Fares
        */ -->
        <div
            v-if="formStage.details == false && formStage.journeyFare"
            class="row d-flex justify-content-between text-left form-information-heading ml-0 mr-0"
        >
            <div class="first-journey text-left width-100">
                <ul class="list-unstyled origin mb-1">
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
                    <div v-if="journey[0].return" class="mt-2">
                        <h6>Return Journey</h6>
                        <li>
                            <span class="d-flex">
                                <p class="mb-0 mr-1">
                                    <strong>Start: </strong>
                                </p>
                                {{ journey[0].returnFrom.text }}
                            </span>
                        </li>
                        <div v-if="journey[0].returnVia.length > 0">
                            <li>
                                <span class="d-flex">
                                    <p class="mb-0 mr-1">
                                        <strong>Via: </strong>
                                    </p>
                                    {{ journey[0].returnViaRouteNames }}
                                </span>
                            </li>
                        </div>
                        <li>
                            <span class="d-flex">
                                <p class="mb-0 mr-2"><strong>End: </strong></p>
                                {{ journey[0].returnTo.text }}
                            </span>
                        </li>
                    </div>
                </ul>
            </div>

            <!-- Map -->
            <div id="map">
                <Mapbox
                    access-token="pk.eyJ1IjoicmFmaW4wMCIsImEiOiJja2J6NTM4dDkwOGVzMzJtcnlvNnU0c2t2In0.Qpmm_jb0gzc16AN-UqIENA"
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

            <!-- Prices -->
            <div class="width-100" v-for="price in priceList" :key="price.id">
                <input
                    type="radio"
                    name="price"
                    :value="price.price"
                    v-model="journey[0].fare"
                />
                <div
                    class="group vehicle row d-flex align-items-center"
                    @click="selectedPrice(price)"
                >
                    <label
                        class="width-100 d-flex price-section align-items-center"
                    >
                        <div
                            class="d-flex justify-content-center col-sm-3 pl-0 pr-2 price-section car-img"
                        >
                            <img
                                class="mr-0 ml-1"
                                :src="price.image"
                                style="max-width: 5.5rem;"
                            />
                        </div>
                        <div class="container pl-0 pr-0">
                            <h6 class="mb-0">{{ price.type }}</h6>
                        </div>
                        <div class="container pl-0 pr-0">
                            <p class="mb-0">
                                <span class="pr-2"
                                    ><i
                                        class="fas fa-male pull-right icon-chevron-right"
                                        style="font"
                                    ></i>
                                    x{{ price.max_passengers }}
                                </span>
                                <span
                                    ><i class="fas fa-suitcase pr-1"></i>x{{
                                        price.luggage
                                    }}</span
                                >
                            </p>
                        </div>
                        <div class="container pl-0 pr-0">
                            <p class="mb-0">£ {{ price.price }}</p>
                        </div>
                    </label>
                </div>
            </div>
            <div
                class="container d-flex flex-row justify-content-between mt-3 pl-0 pr-0"
            >
                <div class="">
                    <button
                        @click="backToBooking"
                        type="button"
                        class="btn btn-secondary"
                    >
                        <i class="fa fa-angle-left mr-1" aria-hidden="true"></i>
                        Back
                    </button>
                </div>
                <div class="">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="submitFare"
                        :disabled="journey[0].fare === null"
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
            v-if="formStage.journeyFare == false && formStage.details"
            class="journey-details"
        >
            <!-- /**
            * ? Passenger Details
            */ -->
            <div class="row d-flex justify-content-between ml-0 mr-0">
                <div>
                    <h5>Passenger Details</h5>
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

                    <div class="mt-2 width-100">
                        <label class="text-black"
                            >Enter Your Email to get e-ticekt</label
                        >
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
                                        type="tel"
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
                                <option
                                    v-for="passengers in journey[0]
                                        .max_passengers"
                                >
                                    {{ passengers }}
                                </option>
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
                                <option v-for="luggage in journey[0].luggage">
                                    {{ luggage }} Luggage
                                </option>
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
                            class="btn btn-secondary"
                        >
                            <i
                                class="fa fa-angle-left mr-1"
                                aria-hidden="true"
                            ></i>
                            Back
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

        <div class="basket" v-if="formStage.basket" 
            style="text-align: left;">
            <div class="row continue-to-basket ml-0 mr-0">
                <div class="row continue-to-basket ml-0 mr-0 mt-2 width-100">
                    <div
                        class="d-flex after-successfull-booking-details ml-0 mr-0 mt-2"
                    >
                        <div class="width-100" style="font-size: 13px">
                            <h5 class="text-black text-left mt-2 mb-2">
                                Trip Details
                            </h5>
                            <div class="table-responsive-sm">
                                <table
                                    class="table table-striped table-sm table-hover table-bordered"
                                >
                                    <tbody>
                                        <tr>
                                            <th scope="row">Pickup</th>
                                            <td>
                                                {{
                                                    quoteDetails.originName
                                                }}
                                            </td>
                                        </tr>
                                        <tr v-if="journey[0].viaRouteNames">
                                            <th scope="row">Via</th>
                                            <td>
                                                {{
                                                    journey[0].viaRouteNames
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dropoff</th>
                                            <td>
                                                {{
                                                    journey[0].return ? 
                                                    quoteDetails.returnTo :
                                                    quoteDetails.destinationName
                                                }}
                                            </td>
                                        </tr>
                                        <tr
                                            v-if="
                                                journey[0].returnViaRouteNames
                                            "
                                        >
                                            <th scope="row">Return Via</th>
                                            <td>
                                                {{
                                                    journey[0]
                                                        .returnViaRouteNames
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Booking Type</th>
                                            <td>
                                                {{
                                                    journey[0].return ? "Return" : "One way"
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Vehicle Type</th>
                                            <td>
                                                {{
                                                    journey[0].vehicle.type
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Pick up Date</th>
                                            <td>
                                                {{
                                                    (quoteDetails.journeyDate.Day + ",")
                                                }}
                                                {{
                                                    quoteDetails.journeyDate.Date
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Pick up Time</th>
                                            <td>
                                                {{
                                                    quoteDetails.journeyDate.Time
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Passenger
                                                <span
                                                    v-if="
                                                        quoteDetails.luggage !==
                                                            'None'
                                                    "
                                                >
                                                    & Luggage
                                                </span>
                                            </th>
                                            <td>
                                                {{
                                                    quoteDetails.passengers
                                                        ? quoteDetails.passengers
                                                        : 1
                                                }}
                                                Passenger
                                                <span
                                                    v-if="
                                                        quoteDetails.luggage !==
                                                            'None'
                                                    "
                                                >
                                                    & {{ quoteDetails.luggage }}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th
                                                class="table-primary"
                                                scope="row"
                                            >
                                                Total Fare
                                            </th>
                                            <td class="table-primary">
                                                £{{
                                                    quoteDetails.fare
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="text-black text-left mb-2">
                                Passenger Details
                            </h5>
                            <div class="table-responsive-sm mt-3">
                                <table
                                    class="table table-striped table-sm table-hover table-bordered"
                                >
                                    <tbody>
                                        <tr>
                                            <th scope="row">Passenger Name</th>
                                            <td>
                                                {{
                                                    quoteDetails.name
                                                        ? quoteDetails.name
                                                        : "Sezan"
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>
                                                {{
                                                    quoteDetails.email
                                                        ? quoteDetails.email
                                                        : "sezansarker@gmail.com"
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone</th>
                                            <td>
                                                {{
                                                    quoteDetails.mobile
                                                        ? quoteDetails.mobile
                                                        : "+8801687407370"
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex passenger-details ml-0 mr-0 mt-2">
                    <div style="font-size: 12px">
                        I have read and agree to the
                        <a href="http://" target="_blank">privacy policy</a> &
                        <a href="http://" target="_blank">terms</a> of booking
                        with OTS.
                    </div>
                    <div class="d-flex align-self-center">
                        <input
                            type="checkbox"
                            class="ml-2"
                            @click="
                                quoteDetails.agreedWithTerms = !quoteDetails.agreedWithTerms
                            "
                        />
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
                            class="btn btn-secondary"
                        >
                            <i
                                class="fa fa-angle-left mr-1"
                                aria-hidden="true"
                            ></i>
                            Back
                        </button>
                    </div>
                    <div class="">
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="payNow"
                            :disabled="quoteDetails.agreedWithTerms === false"
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

        <!-- /**
        * TODO:     Stage 6
        * ? Starting After Booking Submission
        */ -->
        <div class="basket" v-if="formStage.submittedStatus"
            style="text-align: left;">
            <div class="row continue-to-basket ml-0 mr-0">
                <div class="d-flex after-successfull-booking ml-0 mr-0 mt-2">
                    <div style="font-size: 13px">
                        <h5 class="text-black text-center">
                            Booking <b>successful</b>
                            <i class="fas fa-check text-primary ml-1"></i>
                        </h5>
                        <p class="text-black-50 text-center mb-1">
                            A copy of this e-ticket has been mailed to you.
                            Please keep a copy of your e-ticket during travel.
                        </p>
                        <div class="d-flex justify-content-center mt-2">
                            <button
                                type="button"
                                class="btn btn-sm btn-primary"
                                @click="downloadBookingTicket"
                            >
                                Download Ticket
                                <i
                                    class="fas fa-ticket-alt ml-1"
                                    style="font-size: 13px"
                                ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row continue-to-basket ml-0 mr-0 mt-2">
                <div
                    class="d-flex after-successfull-booking-details ml-0 mr-0 mt-2"
                >
                    <div style="font-size: 13px">
                        <p class="text-black-50 text-center mb-1">
                            Your request to book a transport for your trip in UK
                            Airport Taxi was <b>successful</b>. Below are the
                            booking details. <br />
                            Thank you.
                        </p>

                        <div class="width-100" style="font-size: 13px">
                            <h5 class="text-black text-left mt-2 mb-2">
                                Trip Details
                            </h5>
                            <div class="table-responsive-sm">
                                <table
                                    class="table table-striped table-sm table-hover table-bordered"
                                >
                                    <tbody>
                                        <tr>
                                            <th scope="row">Pickup</th>
                                            <td>
                                                {{
                                                    quoteDetails.originName
                                                }}
                                            </td>
                                        </tr>
                                        <tr v-if="journey[0].viaRouteNames">
                                            <th scope="row">Via</th>
                                            <td>
                                                {{
                                                    journey[0].viaRouteNames
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dropoff</th>
                                            <td>
                                                {{
                                                    journey[0].return ? 
                                                    quoteDetails.returnTo :
                                                    quoteDetails.destinationName
                                                }}
                                            </td>
                                        </tr>
                                        <tr
                                            v-if="
                                                journey[0].returnViaRouteNames
                                            "
                                        >
                                            <th scope="row">Return Via</th>
                                            <td>
                                                {{
                                                    journey[0]
                                                        .returnViaRouteNames
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Booking Type</th>
                                            <td>
                                                {{
                                                    journey[0].return ? "Return" : "One way"
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Vehicle Type</th>
                                            <td>
                                                {{
                                                    journey[0].vehicle.type
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Pick up Date</th>
                                            <td>
                                                {{
                                                    (quoteDetails.journeyDate.Day + ",")
                                                }}
                                                {{
                                                    quoteDetails.journeyDate.Date
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Pick up Time</th>
                                            <td>
                                                {{
                                                    quoteDetails.journeyDate.Time
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Passenger
                                                <span
                                                    v-if="
                                                        quoteDetails.luggage !==
                                                            'None'
                                                    "
                                                >
                                                    & Luggage
                                                </span>
                                            </th>
                                            <td>
                                                {{
                                                    quoteDetails.passengers
                                                        ? quoteDetails.passengers
                                                        : 1
                                                }}
                                                Passenger
                                                <span
                                                    v-if="
                                                        quoteDetails.luggage !==
                                                            'None'
                                                    "
                                                >
                                                    & {{ quoteDetails.luggage }}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th
                                                class="table-primary"
                                                scope="row"
                                            >
                                                Total Fare
                                            </th>
                                            <td class="table-primary">
                                                £{{
                                                    quoteDetails.fare
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="text-black text-left mb-2">
                                Passenger Details
                            </h5>
                            <div class="table-responsive-sm mt-3">
                                <table
                                    class="table table-striped table-sm table-hover table-bordered"
                                >
                                    <tbody>
                                        <tr>
                                            <th scope="row">Passenger Name</th>
                                            <td>
                                                {{
                                                    quoteDetails.name
                                                        ? quoteDetails.name
                                                        : "Sezan"
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>
                                                {{
                                                    quoteDetails.email
                                                        ? quoteDetails.email
                                                        : "sezansarker@gmail.com"
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone</th>
                                            <td>
                                                {{
                                                    quoteDetails.mobile
                                                        ? quoteDetails.mobile
                                                        : "+8801687407370"
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Buttons -->
                <div
                    class="container d-flex flex-row justify-content-between mt-3 pl-0 pr-0"
                >
                    <div class="mr-2">
                        <button
                            @click="windowReload"
                            type="button"
                            class="btn btn-secondary"
                        >
                            <i
                                class="fa fa-angle-left mr-1"
                                aria-hidden="true"
                            ></i>
                            Book again
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /**
        * TODO:     Stage 6
        * ? Ending After Booking Submission
        */ -->
    </div>
</template>

<script>
import draggable from "vuedraggable";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import DatePicker from "vue2-datepicker";
// import "vue2-datepicker/index.css";

import _ from "lodash";

import mapboxgl from "mapbox-gl";
import Mapbox from "mapbox-gl-vue";
import qs from "qs";

import moment from "moment";

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
                    viaRouteNames: "",
                    return: false,
                    returnFrom: "",
                    returnTo: "",
                    returnVia: [],
                    returnViaRouteNames: "",
                    priceId: null,
                    fare: null,
                    vehicle: {
                        type: "Saloon"
                    },
                    max_passengers: [],
                    luggage: []
                }
            ],

            originShortName: "",

            priceList: [],

            quoteDetails: {
                // Journey Details
                originName: "",
                originType: "",
                destinationName: "",
                viaRouteNames: "",

                journeyDate: {
                    Details: "",
                    Day: "",
                    Date: "",
                    Time: ""
                },

                distance: null,

                // Return Values
                returnFrom: "",
                returnTo: "",
                returnVia: "",
                // returnDate: null,

                fare: null,

                // Passenger Details
                name: "",
                email: "",
                mobile: "",
                passport: "",
                flightNumber: "",
                flightOrigin: "",
                meetAndGreetService: "",
                passengers: 1,
                luggage: "None",

                agreedWithTerms: false,

                afterSubmittedBookingId: null
            },

            formStage: {
                    place: true,
                    details: false,
                    journeyFare: false,
                    basket: false,
                    submittedStatus: false
                },
            // Ending Journey Details Form

            options: [],

            mapBox: {
                mapStyle: "mapbox://styles/mapbox/streets-v11",
                accessToken:
                    "pk.eyJ1IjoicmFmaW4wMCIsImEiOiJja2J6NTM4dDkwOGVzMzJtcnlvNnU0c2t2In0.Qpmm_jb0gzc16AN-UqIENA",
                postUrl: null
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
        selectedPrice(price) {
            this.journey[0].vehicle = price;
            this.journey[0].fare = price.price;
        },
        selectOnlyThis(id) {
            var myRadioButton = document.getElementsByClassName(
                "group vehicle"
            );
            // Array.prototype.forEach.call(myRadioButton, element => {
            //     element.lastElementChild.lastElementChild.checked = false;
            // });
            // myRadioButton[id-1].lastElementChild.lastElementChild.checked = true;
        },
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
            console.log(this.journey[0].returnVia[index]);

            this.journey[0].returnVia.splice(index, 1);
        },

        returnBooking() {
            this.journey[0].return = !this.journey[0].return;
            if (this.validateArrayObject(this.journey[0].via)) {
                // console.log(`Via:`);
                // console.log(this.journey[0].via);

                this.journey[0].returnFrom = this.journey[0].destination;
                this.journey[0].returnTo = this.journey[0].origin;
                this.journey[0].returnVia = [];

                for (var i = this.journey[0].via.length - 1; i >= 0; i--) {
                    this.journey[0].returnVia.push(this.journey[0].via[i]);
                }
                // console.log(`Reverse Via:`);
                // console.log(this.journey[0].returnVia);
            }
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
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${vm.mapBox.accessToken}&country=gb&language=en&limit=5&types=address,poi`
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

                // ? Checking is there is any via route
                if (this.journey[0].via.length) {
                    let viaRoutes = this.journey[0].via;

                    for (let i = 0; i < viaRoutes.length; i++) {
                        // Checking if user adds a route field and input something or not
                        // if (_.isEmpty(viaRoutes)) i++;
                        if (_.isEmpty(viaRoutes[i].route)) continue;

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

                // Storing the ending point
                this.mapData.fullRoutes += this.journey[0].destination.geometry.coordinates.join(
                    ","
                );

                // ? Checking is there is any return via route
                if (this.journey[0].returnVia.length) {
                    this.mapData.fullRoutes += ";";

                    let returnViaRoutes = this.journey[0].returnVia;

                    for (let i = 0; i < returnViaRoutes.length; i++) {
                        // Checking if user adds a route field and input something or not
                        if (_.isEmpty(returnViaRoutes[i].route)) continue;

                        // Storing via route names so that we can show those name later
                        this.journey[0].returnViaRouteNames +=
                            returnViaRoutes[i].route.text + ", ";

                        // If there is any via route then concate it with mapData.fullRoutes
                        this.mapData.fullRoutes +=
                            returnViaRoutes[i].route.geometry.coordinates.join(
                                ","
                            ) + ";";
                    }

                    this.mapData.fullRoutes += this.journey[0].origin.geometry.coordinates.join(
                        ","
                    );

                    // Checking if via routes are there and if so then delete last two words
                    // Because last two words of this string are "," & " "
                    if (this.journey[0].returnViaRouteNames.length) {
                        this.journey[0].returnViaRouteNames = this.journey[0].returnViaRouteNames.slice(
                            0,
                            -2
                        );
                    }
                }

                // Getting the origin / pickup point type
                if (this.journey[0].origin.properties.maki) {
                    this.journey[0].originType = this.journey[0].origin.properties.maki;
                }

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

                            // Distance of the Journey in meters
                            this.quoteDetails.distance =
                                response.data.routes[0].distance;

                            // Calculating Price
                            this.priceList.map(item => {
                                item.price = parseFloat(
                                    item.price *
                                        (this.quoteDetails.distance / 1000)
                                ).toFixed(2);
                            });

                            if (this.journey[0].return == true) {
                                this.quoteDetails.returnFrom = this.journey[0].returnFrom.text;
                                this.quoteDetails.returnTo = this.journey[0].returnTo.text;
                                this.quoteDetails.returnVia = this.journey[0].returnVia;
                            }
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
            this.mapBoxPostRequest().then(() => {
                this.formStage.place = false;
                this.formStage.journeyFare = true;

                let formateDate = moment(
                    new Date(this.quoteDetails.journeyDate.Details)
                ).format("dddd, MMMM Do YYYY, h:mm:ss a");
                [
                    this.quoteDetails.journeyDate.Day,
                    this.quoteDetails.journeyDate.Date,
                    this.quoteDetails.journeyDate.Time
                ] = formateDate.split(",");
            });
        },

        backToBooking() {
            this.formStage.place = true;
            this.formStage.journeyFare = false;

            this.mapData.fullRoutes = this.mapData.start = this.mapData.end = this.mapData.responseCode = this.mapData.errors =
                "";
            this.mapData.coordinates = this.mapData.center = [];
            this.journey[0].viaRouteNames = "";

            // Return
            if (this.journey[0].return == true) {
                // this.journey[0].returnFrom = "";
                // this.journey[0].returnTo = "";
                this.journey[0].returnViaRouteNames = "";
            }

            this.quoteDetails.originName = "";
            this.quoteDetails.originType = "";

            this.quoteDetails.destinationName = "";
            this.quoteDetails.viaRouteNames = "";

            $("html,body").scrollTop(0);
        },

        submitFare() {
            this.formStage.journeyFare = false;
            this.formStage.details = true;

            this.quoteDetails.fare = this.journey[0].fare;

            for (let i = 1; i <= this.journey[0].vehicle.max_passengers; i++) {
                this.journey[0].max_passengers.push(i);
            }

            for (let i = 1; i <= this.journey[0].vehicle.luggage; i++) {
                this.journey[0].luggage.push(i);
            }

            // axios
            //     .post("/get-price", {
            //         price_id: this.journey[0].fare
            //     })
            //     .then(response => {
            //         this.quoteDetails.fare = response.data;
            //     });

            $("html,body").scrollTop(0);
        },

        backToFare() {
            this.formStage.journeyFare = true;
            this.formStage.details = false;

            this.quoteDetails.priceId = null;

            this.journey[0].max_passengers = [];
            this.journey[0].luggage = [];

            this.quoteDetails.passengers = 1;
            this.quoteDetails.luggage = "None";

            $("html,body").scrollTop(0);
        },

        continueToBasket() {
            this.formStage.details = false;
            this.formStage.basket = true;
            $("html,body").scrollTop(0);
        },

        backToBasket() {
            this.formStage.details = true;
            this.formStage.basket = false;
            this.quoteDetails.agreedWithTerms = false;
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
                journey_date: this.quoteDetails.journeyDate.Details,

                returnFrom: this.quoteDetails.returnFrom,
                returnTo: this.quoteDetails.returnTo,
                returnVia: this.journey[0].returnViaRouteNames,
                // return_journey_date: this.quoteDetails.returnDate,

                passengers: this.quoteDetails.passengers,
                luggage: this.quoteDetails.luggage,
                // coupon_id: this.quoteDetails.coupon_id,
                // price_id: this.quoteDetails.priceId,
                discount: this.quoteDetails.discount,
                total_price: parseFloat(this.quoteDetails.fare),
                passport: this.quoteDetails.passport,
                flight_number: this.quoteDetails.flightNumber,
                flight_origin: this.quoteDetails.flightOrigin,
                meet_and_greet_service: this.quoteDetails.meetAndGreetService,
                booking_status_id: 0
            };

            axios.post("/submit-booking", this.data).then(response => {
                this.formStage.basket = false;
                this.formStage.submittedStatus = true;
                this.quoteDetails.afterSubmittedBookingId = response.data.bookingId;

                // Swal.fire({
                //     icon: "success",
                //     title: response.data.success,
                //     showConfirmButton: false,
                //     timer: 2000
                // });
                // window.location = "/";
            });
        },
        validateArrayObject(...arr) {
            let check = true;

            for (var i = 0; i < arr[0].length; i++) {
                if (arr[0][i] && arr[0][i].route) {
                    check = true;
                } else {
                    check = false;
                    break;
                }
            }
            return check;
        },

        downloadBookingTicket() {
            axios({
                url: "/download-PDF",
                method: "POST",
                responseType: "blob",
                data: {
                    id: this.quoteDetails.afterSubmittedBookingId,
                    email: this.quoteDetails.email
                }
            }).then(response => {
                this.downloadFile(response.data, "booking-summery.pdf");
            });
        },

        downloadFile(blob, fileName) {
            // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
            var newBlob = new Blob([blob], { type: "application/pdf" });

            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }

            // For other browsers:
            // Create a link pointing to the ObjectURL containing the blob.
            const data = window.URL.createObjectURL(newBlob);
            var link = document.createElement("a");
            link.href = data;
            link.download = fileName;
            link.click();
            setTimeout(function() {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
            }, 100);
        },

        windowReload() {
            window.location = "/";
        },

        // downloadAndSendEmail() {
        //     axios({
        //         url: "/send-email",
        //         method: "POST",
        //         responseType: "blob",
        //         data: {
        //             id: 76,
        //             email: "sezansarker@gmail.com"
        //         }
        //     }).then(response => {
        //         console.log(response.data);
        //         // this.downloadFile(response.data, "booking-summery.pdf")
        //     });
        // }
    },
    created() {
        this.mapBox.postUrl = `https://api.mapbox.com/directions/v5/mapbox/driving?access_token=${this.mapBox.accessToken}`;
    },
    computed: {
        viaRouteChange(index) {
            // if (this.journey[0].via[index].route && this.journey[0].return) {
            //     let length = this.journey[0].via.length();
            //     this.journey[0].returnVia[length - index - 1] = this.journey[0].via[index];
            // }
            // this.journey[0].via.forEach((element, index) => {
            //     if (element.route && this.journey[0].return && viaIndex == index) {
            //         console.log(this.journey[0].via[index]);

            //     }
            //     // if (element.route && this.journey[0].return) {
            //     //     // this.journey[0].returnVia = [];
            //     //     // for (var i = this.journey[0].via.length - 1; i >= 0; i--) {
            //     //     //     this.journey[0].returnVia.push(this.journey[0].via[i]);
            //     //     // }
            //     //     console.log("viaroutechange");
            //     // }
            // });
            // console.log(index);
        },
        validateQuote() {
            if (
                this.journey[0].origin &&
                this.journey[0].destination &&
                this.quoteDetails.journeyDate.Details &&
                this.validateArrayObject(this.journey[0].via)
            ) {
                return true;
            } else return false;
        },

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
                    this.quoteDetails.journeyDate.Details === null
                )
                    return true;
                else return false;
            } else {
                if (
                    this.quoteDetails.name === "" ||
                    this.quoteDetails.mobile === "" ||
                    this.quoteDetails.passengers === null ||
                    this.quoteDetails.luggage === "" ||
                    this.quoteDetails.journeyDate.Details === null
                )
                    return true;
                else return false;
            }
        }
    },
    watch: {
        journey() {
            for (var i = this.journey[0].via.length - 1; i >= 0; i--) {
                this.journey[0].returnVia.push(this.journey[0].via[i]);
            }
        }
        // viaRouteChange() {
        //     this.journey[0].via.forEach(element => {
        //         console.log(element);
        //     });
        // },
    }
};
</script>

<style scoped>
.row.container-fluid p {
    margin-bottom: 0px !important;
}
#map {
    position: relative;
    top: 0;
    bottom: 0;
    width: 376px;
    height: 250px;
    margin-bottom: 5px;
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
    transform: translateX(1px);
    font-size: 20px;
    color: #2b2b2b;
    padding-right: 15px;
}
.booking-form-icon:hover {
    color: black;
}
.booking-form-icon-wrapper {
    /* left: 5px; */
    padding: 0.575rem 0.75rem;
}
.price-section {
}
@media only screen and (max-width: 575px) {
    .booking-form-icon-wrapper {
        /* margin-top: 15px;
        margin-bottom: 15px; */
        left: 0px;
    }
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
        /* width: 50%; */
        width: max-content;
    }
    .price-section.car-details div.row {
        padding: 0px;
        margin: 0px;
        width: max-content;
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
        max-width: 3rem !important;
    }
}

.return-booking {
    /* padding-right: 35px; */
}
.return-booking > .row:hover {
    cursor: pointer;
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

.fa.fas {
    font-size: 15px;
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
    padding: 5px 10px 5px 10px;
    color: black;
    background-color: #a8c5ec;
    border-radius: 5px;
    margin-bottom: 5px;
}

/* Starting Journey Fares */

div.vehicle {
    display: block;
    margin: 10px 0 0 0;
    padding: 8px 0 8px 10px;
    border-radius: 5px;
    font-size: 12px;
    color: black;
    background-color: #f3f3f3;
    box-shadow: 1px 5px 8px 2px #a1a5a8;
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
    background-color: #ffffffe3;
    box-shadow: 1px 5px 8px 2px #929292;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
}

/* Ending Passenger Details */

/* Starting After Booking Submission */
.after-successfull-booking {
    background-color: #ffffffe3;
    box-shadow: 1px 5px 8px 2px #929292;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    width: 100%;
    color: black;
    font-weight: 500;
    border-left: 6px solid #3acae6;
}

.after-successfull-booking-details {
    background-color: #ffffffe3;
    box-shadow: 1px 5px 8px 2px #929292;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    width: 100%;
    color: black;
    font-weight: 500;
}
/* HIDE RADIO */
[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

/* IMAGE STYLES */
[type="radio"] + div.group.vehicle,
[type="radio"] + div.group.vehicle > label {
    cursor: pointer;
}

/* CHECKED STYLES */
[type="radio"]:checked + div.group {
    border: 2px solid #3acae6;
    background-color: white;
}
</style>
