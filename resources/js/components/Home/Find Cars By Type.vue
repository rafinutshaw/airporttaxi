<template>
    <div class="banner-content col-lg-6 col-md-10 col-sm-12">
        <div class="row justify-content-center">
            <h2 class="text-white font-weight-bold">
                Find Cars by type
            </h2>
        </div>
        <!-- Saloon Car -->
        <div class="row mt-3 car-div">
            <div class="col-md-3 d-flex justify-content-center mb-2">
                <img
                    class="car-img"
                    src="../../../../public/img/Cars/Cars SVG/Saloon Car.svg"
                    alt=""
                />
            </div>
            <div class="col-md-9 text-white" style="text-align: justify;">
                <strong>Saloon Car:</strong> Up to 3 passengers plus 3 suitcases
                (20kg max) or 4 passengers plus hand luggage. Any more luggage
                than this will require a larger vehicle.
            </div>
        </div>
        <!-- Estate Car -->
        <div class="row mt-3 car-div">
            <div class="col-md-3 d-flex justify-content-center mb-2">
                <img
                    class="car-img"
                    src="../../../../public/img/Cars/Cars SVG/Estate Car.svg"
                    alt=""
                />
            </div>
            <div class="col-md-9 text-white" style="text-align: justify;">
                <strong>Estate Car:</strong> Up to 4 passengers plus 4 suitcases
                (20kg max). Any more luggage than this will require a larger
                vehicle.
            </div>
        </div>
        <!-- People Carrier -->
        <div class="row mt-3 car-div">
            <div class="col-md-3 d-flex justify-content-center mb-2">
                <img
                    class="car-img"
                    src="../../../../public/img/Cars/Cars SVG/People Carrier.svg"
                    alt=""
                />
            </div>
            <div class="col-md-9 text-white" style="text-align: justify;">
                <strong>People Carrier:</strong> Up to 5 passengers plus 5
                suitcases (20kg max) or 6 passengers plus hand luggage. Any more
                luggage than this will require a larger vehicle.
            </div>
        </div>
        <!-- Executive Car -->
        <div class="row mt-3 car-div">
            <div class="col-md-3 d-flex justify-content-center mb-2">
                <img
                    class="car-img"
                    src="../../../../public/img/Cars/Cars SVG/Executive Car.svg"
                    alt=""
                />
            </div>
            <div class="col-md-9 text-white" style="text-align: justify;">
                <strong>Executive Car:</strong> Up to 3 passengers plus 3
                suitcases (20kg max) or 4 passengers plus hand luggage. Any more
                luggage than this will require a larger vehicle.
            </div>
        </div>
        <!-- Executive People Carrier -->
        <div class="row mt-3 car-div">
            <div class="col-md-3 d-flex justify-content-center mb-2">
                <img
                    class="car-img"
                    src="../../../../public/img/Cars/Cars SVG/Executive People Carrier.svg"
                    alt=""
                />
            </div>
            <div class="col-md-9 text-white" style="text-align: justify;">
                <strong>Executive People Carrier:</strong> Up to 5 passengers
                plus 5 suitcases (20kg max) or 6 passengers plus hand luggage.
                Any more luggage than this will require a larger vehicle.
            </div>
        </div>
        <!-- 8 Seater Minibus -->
        <div class="row mt-3 car-div">
            <div class="col-md-3 d-flex justify-content-center mb-2">
                <img
                    class="car-img"
                    src="../../../../public/img/Cars/Cars SVG/8 Seater Minibus.svg"
                    alt=""
                />
            </div>
            <div class="col-md-9 text-white" style="text-align: justify;">
                <strong>Saloon Car:</strong> 8 passengers plus up to 8 suitcases
                (20kg max). Any more luggage than this will require a larger
                vehicle.
            </div>
        </div>
        <!-- 14 Seater Minibus -->
        <div class="row mt-3 car-div">
            <div class="col-md-3 d-flex justify-content-center mb-2">
                <img
                    class="car-img"
                    src="../../../../public/img/Cars/Cars SVG/14 Seater Minibus.svg"
                    alt=""
                />
            </div>
            <div class="col-md-9 text-white" style="text-align: justify;">
                <strong>14 Seater Minibus:</strong> 12 passengers plus up to 12
                suitcases (20kg max) or 16 passengers with hand luggage. Any
                more luggage than this will require a larger vehicle.
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>

.banner-content {
    right: 8%;
    margin-top: 10%;
    margin-bottom: 5%;
}
.car-img {
    width: 80%;
}
@media only screen and (max-width: 1700px) {
    .banner-content {
        right: 5%;
    }
}

@media only screen and (max-width: 1400px) {
    .banner-content {
        right: 5%;
    }
}

@media only screen and (max-width: 1025px) {
    .banner-content {
        right: 2%;
        margin-top: 12%;
        margin-bottom: 5%;
    }
}

@media only screen and (max-width: 990px) {
    .banner-content {
        right: 0%;
        left: 8%;
        margin-top: 2%;
    }
}

@media only screen and (max-width: 840px) {
    .banner-content {
        right: 0%;
        top: 1%;
        margin-bottom: 2%;
    }
}

@media only screen and (max-width: 760px) {
    .banner-content {
        display: flex;
        flex-direction: column;
        right: 0;
        left: 0%;
        padding-top: 3%;
        margin-bottom: 5%;
    }
    .car-img {
        width: 30%;
        margin-bottom: 2%;
    }
    .car-div {
        margin-top: 2.5rem !important;
    }
}
</style>
