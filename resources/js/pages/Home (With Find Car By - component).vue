<template>
    <!-- Here we didn't include "FindCarByType" rather than we used as inline -->
    <div>
        <!-- start banner Area -->
        <section class="banner-area relative" id="home">
            <div class="overlay overlay-bg"></div>
            <div class="container-fluid pl-5 pr-5">
                <div
                    class="row fullscreen d-flex align-items-center justify-content-between"
                >
                    <div class="col-lg-5 col-md-6 booking-form-div">
                        <booking-form></booking-form>
                    </div>
                    <find-car-by-type></find-car-by-type>
                </div>
            </div>
        </section>
        <!-- End banner Area -->

        <!-- Start home-about Area -->
        <about></about>
        <!-- End home-about Area -->

        <!-- Start Cars Area -->
        <section class="services-area pb-50 pt-50">
            <div class="container">
                <div class="row section-title">
                    <h1>Find Car by Type</h1>
                    <p>
                        We offer professional car rental services in our range
                        of high-end vehicles.
                    </p>
                </div>

                <!-- Bootstrap Card -->
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card-deck border-0 transform-on-hover">
                            <div class="card">
                                <img
                                    src="../../../public/img/Cars/Saloon Car.jpeg"
                                    class="card-img"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Saloon Car</h5>
                                    <p class="card-text">
                                        Ford Mondeo, VW Passat or similar. These
                                        can accommodate up to 3 passengers plus
                                        3 suitcases (20kg max) or 4 passengers
                                        plus hand luggage. Any more luggage than
                                        this will require a larger vehicle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card-deck border-0 transform-on-hover">
                            <div class="card">
                                <img
                                    src="../../../public/img/Cars/Estate Car.jpg"
                                    class="card-img"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Estate Car</h5>
                                    <p class="card-text">
                                        Volvo Estate, VW Passat or similar.
                                        These can accommodate up to 4 passengers
                                        plus 4 suitcases (20kg max). Any more
                                        luggage than this will require a larger
                                        vehicle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card-deck border-0 transform-on-hover">
                            <div class="card">
                                <img
                                    src="../../../public/img/Cars/People Carrier.jpg"
                                    class="card-img"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">People Carrier</h5>
                                    <p class="card-text">
                                        VW Sharan, Ford Galaxy or similar. These
                                        can accommodate up to 5 passengers plus
                                        5 suitcases (20kg max) or 6 passengers
                                        plus hand luggage. Any more luggage than
                                        this will require a larger vehicle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card-deck border-0 transform-on-hover">
                            <div class="card">
                                <img
                                    src="../../../public/img/Cars/Executive Car.jpg"
                                    class="card-img"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Executive Car</h5>
                                    <p class="card-text">
                                        E Class Mercedes or similar. These can
                                        accommodate up to 3 passengers plus 3
                                        suitcases (20kg max) or 4 passengers
                                        plus hand luggage. Any more luggage than
                                        this will require a larger vehicle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card-deck border-0 transform-on-hover">
                            <div class="card">
                                <img
                                    src="../../../public/img/Cars/Executive People Carrier.jpg"
                                    class="card-img"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Executive People Carrier
                                    </h5>
                                    <p class="card-text">
                                        Mercedes Viano or similar. These can
                                        accommodate up to 5 passengers plus 5
                                        suitcases (20kg max) or 6 passengers
                                        plus hand luggage. Any more luggage than
                                        this will require a larger vehicle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card-deck border-0 transform-on-hover">
                            <div class="card">
                                <img
                                    src="../../../public/img/Cars/8 Seater Minibus.jpg"
                                    class="card-img"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">8 Seater Minibus</h5>
                                    <p class="card-text">
                                        VW Transporter or similar. These can
                                        accommodate 8 passengers plus up to 8
                                        suitcases (20kg max). Any more luggage
                                        than this will require a larger vehicle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bootstrap Card -->
            </div>
        </section>
        <!-- End Cars Area -->

        <!-- Start Our Promise Area -->
        <section>
            <section id="content-section-4">
                <div
                    class="limoking-parallax-wrapper limoking-background-image gdlr-show-all limoking-skin-darkblue"
                    id="limoking-parallax-wrapper-2"
                    data-bgspeed="0"
                    style="background-image: url('img/asset 46.jpeg'); padding-top: 95px; padding-bottom: 50px; "
                >
                    <div class="container">
                        <div class="six columns">
                            <div
                                class="limoking-item limoking-about-us-item limoking-with-divider"
                            >
                                <div class="about-us-title-wrapper">
                                    <h3 class="about-us-title">
                                        We promise, you will have the best
                                        experience
                                    </h3>
                                    <div class="about-us-title-divider"></div>
                                </div>
                                <div class="about-us-content-wrapper">
                                    <div
                                        class="about-us-content limoking-skin-content"
                                    >
                                        <p class="mb-50">
                                            Sed posuere consectetur est at
                                            lobortis. Cum sociis natoque
                                            penatibus et magnis dis parturient
                                            montes, nascetur ridiculus mus.
                                            Nullam quis risus eget urna mollis
                                            ornare vel eu leo. Cras mattis
                                            consectetur purus sit amet
                                            fermentum.
                                        </p>
                                    </div>
                                    <a
                                        id="book-now"
                                        class="primary-btn"
                                        href="contact-page.html"
                                        >Book Now</a
                                    >
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </section>
        </section>
        <!-- End Our Promise Area -->

        <!-- Start Price Range Area -->
        <section id="content-section-5">
            <div
                class="limoking-color-wrapper  gdlr-show-all limoking-skin-dark-skin"
                style="background-color: #1eacc7; padding-top: 0px; padding-bottom: 0px; "
            >
                <div class="container">
                    <div
                        class="limoking-item limoking-stunning-item row d-flex justify-content-between"
                    >
                        <div class="stunning-item-content col-md-8">
                            <h2 class="stunning-item-title">
                                What about pricing?
                            </h2>
                            <div
                                class="stunning-item-caption limoking-skin-content"
                            >
                                Don’t worry. We provide very nice deals and the
                                most competative price just for you!
                            </div>
                        </div>
                        <div class="col-md-4 d-flex justify-content-center">
                            <a
                                class="stunning-item-button limoking-info-font align-self-center"
                                href="service-rates.html"
                                style="color: #fff;background: #009fbd;"
                                >Check Rates</a
                            >
                        </div>
                    </div>
                    <!-- <div class="limoking-stunning-item-ux limoking-ux"></div> -->
                    <div class="clear"></div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="clear"></div>
        </section>
        <!-- End Price Range Area -->

        <!-- Start Our Services Area -->
        <section class="our-services">
            <div
                class="limoking-parallax-wrapper limoking-background-image gdlr-show-all limoking-skin-dark-skin pb-40"
                id="limoking-parallax-wrapper-3"
                data-bgspeed="0"
                style="background-image: url('img/asset 47.jpeg'); padding-top: 70px; "
            >
                <div class="container">
                    <div class="limoking-title-item">
                        <div
                            class="limoking-item-title-wrapper limoking-item  limoking-center-divider limoking-medium "
                        >
                            <div
                                class="limoking-item-title-container container"
                            >
                                <div class="limoking-item-title-head-inner">
                                    <div
                                        class="limoking-item-title-center-divider limoking-left"
                                        style="display: block; margin-right: 126.5px;"
                                    ></div>
                                    <h3
                                        class="limoking-item-title limoking-skin-title limoking-skin-border"
                                    >
                                        Our Services
                                    </h3>
                                    <div
                                        class="limoking-item-title-center-divider limoking-right"
                                        style="display: block; margin-left: 126.5px;"
                                    ></div>
                                </div>
                                <div
                                    class="limoking-item-title-caption limoking-skin-info"
                                >
                                    What Services we offer to our clients
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="clear"></div>
                </div>
            </div>

            <div
                class="limoking-color-wrapper  gdlr-show-all no-skin d-flex justify-content-center"
                style="background-color: #ffffff; padding-top: 70px; padding-bottom: 20px; "
            >
                <div class="container row">
                    <div class="four columns col-md-4 col-12">
                        <div class="limoking-ux column-service-ux">
                            <div
                                class="limoking-item limoking-column-service-item limoking-medium"
                                style="margin-bottom: 40px;"
                            >
                                <div class="column-service-image">
                                    <img
                                        src="img/asset 18.png"
                                        alt=""
                                        width="41"
                                        height="46"
                                    />
                                </div>
                                <div class="column-service-content-wrapper">
                                    <h3 class="column-service-title">
                                        Night Parties
                                    </h3>
                                    <div
                                        class="column-service-content limoking-skin-content"
                                    >
                                        <p>
                                            Limos King offers superb lim service
                                            in New York and Manhatatan. &nbsp;We
                                            are the most popular and has been
                                            chosen by many important people. We
                                            also provide premier service to the
                                            airport, wedding, casino, sport
                                            event, proms etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="four columns col-md-4 col-12">
                        <div class="limoking-ux column-service-ux">
                            <div
                                class="limoking-item limoking-column-service-item limoking-medium"
                                style="margin-bottom: 40px;"
                            >
                                <div class="column-service-image">
                                    <img
                                        src="img/asset 19.png"
                                        alt=""
                                        width="41"
                                        height="46"
                                    />
                                </div>
                                <div class="column-service-content-wrapper">
                                    <h3 class="column-service-title">
                                        Weddings
                                    </h3>
                                    <div
                                        class="column-service-content limoking-skin-content"
                                    >
                                        <p>
                                            Limos King offers superb lim service
                                            in New York and Manhatatan. &nbsp;We
                                            are the most popular and has been
                                            chosen by many important people. We
                                            also provide premier service to the
                                            airport, wedding, casino, sport
                                            event, proms etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="four columns col-md-4 col-12">
                        <div class="limoking-ux column-service-ux">
                            <div
                                class="limoking-item limoking-column-service-item limoking-medium"
                                style="margin-bottom: 40px;"
                            >
                                <div class="column-service-image">
                                    <img
                                        src="img/asset 20.png"
                                        alt=""
                                        width="41"
                                        height="46"
                                    />
                                </div>
                                <div class="column-service-content-wrapper">
                                    <h3 class="column-service-title">
                                        Casinos
                                    </h3>
                                    <div
                                        class="column-service-content limoking-skin-content"
                                    >
                                        <p>
                                            Limos King offers superb lim service
                                            in New York and Manhatatan. We are
                                            the most popular and has been chosen
                                            by many important people. We also
                                            provide premier service to the
                                            airport, wedding, casino, sport
                                            event, proms etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="four columns col-md-4 col-12">
                        <div class="limoking-ux column-service-ux">
                            <div
                                class="limoking-item limoking-column-service-item limoking-medium"
                                style="margin-bottom: 40px;"
                            >
                                <div class="column-service-image">
                                    <img
                                        src="img/asset 21.png"
                                        alt=""
                                        width="41"
                                        height="46"
                                    />
                                </div>
                                <div class="column-service-content-wrapper">
                                    <h3 class="column-service-title">
                                        Birthdays
                                    </h3>
                                    <div
                                        class="column-service-content limoking-skin-content"
                                    >
                                        <p>
                                            Limos King offers superb lim service
                                            in New York and Manhatatan. &nbsp;We
                                            are the most popular and has been
                                            chosen by many important people. We
                                            also provide premier service to the
                                            airport, wedding, casino, sport
                                            event, proms etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="four columns col-md-4 col-12">
                        <div class="limoking-ux column-service-ux">
                            <div
                                class="limoking-item limoking-column-service-item limoking-medium"
                                style="margin-bottom: 40px;"
                            >
                                <div class="column-service-image">
                                    <img
                                        src="img/asset 22.png"
                                        alt=""
                                        width="41"
                                        height="46"
                                    />
                                </div>
                                <div class="column-service-content-wrapper">
                                    <h3 class="column-service-title">Proms</h3>
                                    <div
                                        class="column-service-content limoking-skin-content"
                                    >
                                        <p>
                                            Limos King offers superb lim service
                                            in New York and Manhatatan. &nbsp;We
                                            are the most popular and has been
                                            chosen by many important people. We
                                            also provide premier service to the
                                            airport, wedding, casino, sport
                                            event, proms etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="four columns col-md-4 col-12">
                        <div class="limoking-ux column-service-ux">
                            <div
                                class="limoking-item limoking-column-service-item limoking-medium"
                                style="margin-bottom: 40px;"
                            >
                                <div class="column-service-image">
                                    <img
                                        src="img/asset 23.png"
                                        alt=""
                                        width="41"
                                        height="46"
                                    />
                                </div>
                                <div class="column-service-content-wrapper">
                                    <h3 class="column-service-title">
                                        Airport Transfers
                                    </h3>
                                    <div
                                        class="column-service-content limoking-skin-content"
                                    >
                                        <p>
                                            Limos King offers superb lim service
                                            in New York and Manhatatan. &nbsp;We
                                            are the most popular and has been
                                            chosen by many important people. We
                                            also provide premier service to the
                                            airport, wedding, casino, sport
                                            event, proms etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </section>
        <!-- End Our Service  -->
    </div>
</template>

<script>
import BookingForm from "../components/Home/Booking Form";
import FindCarModal from "../components/Home/Find Car Modal";
import FindCarByType from "../components/Home/Find Cars By Type";
import About from "../pages/About";
export default {
    components: {
        BookingForm,
        FindCarModal,
        FindCarByType,
        About
    },
    methods: {
        suitableCarModal() {
            this.$root.$emit("findCarModal");
        }
    }
};
</script>

<style scoped>
h1.text-uppercase {
    color: #e2e1ff;
}

a.primary-btn.text-uppercase {
    color: white;
    background-color: #1eacc7;
    border-radius: 5px;
}

.limoking-item-title-wrapper .limoking-item-title {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0px;
}

.limoking-skin-dark-skin h1,
.limoking-skin-dark-skin h2,
.limoking-skin-dark-skin h3,
.limoking-skin-dark-skin h4,
.limoking-skin-dark-skin h5,
.limoking-skin-dark-skin h6,
.limoking-skin-dark-skin .limoking-skin-title,
.limoking-skin-dark-skin .limoking-skin-title a {
    color: #ffffff;
}

.limoking-skin-dark-skin *,
.limoking-skin-dark-skin .limoking-skin-border {
    border-color: #ffffff;
}

.limoking-item-title-center-icon-divider {
    display: inline-block;
    width: 80px;
    vertical-align: middle;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

.limoking-item-title-wrapper.limoking-center-icon-divider {
    text-align: center;
}

.limoking-color-wrapper,
.limoking-parallax-wrapper {
    overflow: hidden;
    background-position: center 0px;
    background-repeat: repeat;
    position: relative;
}

.limoking-item-title-wrapper.limoking-center-icon-divider.limoking-large
    .limoking-nav-title,
.limoking-item-title-wrapper.limoking-center-icon-divider.limoking-extra-large
    .limoking-nav-title {
    font-size: 24px;
}

.limoking-skin-dark-skin i,
.limoking-skin-dark-skin .limoking-flex-prev,
.limoking-skin-dark-skin .limoking-flex-next {
    color: #ffffff;
    font-size: large;
}

.limoking-item-title-wrapper.limoking-large .limoking-item-title-caption,
.limoking-item-title-wrapper.limoking-large .limoking-item-title-link {
    word-spacing: 2px;
    font-size: 18px;
    font-weight: lighter;
}

.limoking-skin-dark-skin .limoking-skin-info,
.limoking-skin-dark-skin .limoking-skin-info a,
.limoking-skin-dark-skin .limoking-skin-info a:hover {
    color: #ffffff;
}

.limoking-item-title-wrapper .limoking-item-title-caption {
    margin-top: 12px;
}

.limoking-skin-dark-skin *,
.limoking-skin-dark-skin .limoking-skin-border {
    border-color: #ffffff;
}

.row.section-title {
    flex-direction: column;
}

img.card-img-top {
    max-height: 250px;
    min-height: 250px;
    /* border-radius: 10px 10px 0px 0px; */
    background-size: cover;
    background-position: center center;
    position: relative;
}

/* Car Service */
.ppb_car_type_grid.one.nopadding {
    margin-bottom: 60px;
    width: 100%;
}

.page_content_wrapper {
    width: 100%;
}

.standard_wrapper {
    max-width: 1425px;
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    padding: 0 90px;
}

.element.grid.classic3_cols.animated1 {
    width: calc(33.33% - 20px);
    margin-right: 30px;
    margin-bottom: 30px;
    box-sizing: border-box;
    float: left;
}

.one_third.gallery3.grid.static.filterable.portfolio_type.themeborder {
    /* background-image: url("../../../public/img/Cars/Executive Car.jpg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* Image Card For Car Services  */
.grow {
    transition: all 0.2s ease-in-out;
}

.grow:hover {
    transform: scale(1.05);
}

.card {
    justify-content: space-evenly;
    border: 0.2px solid #f9f3f3;
    min-height: 500px;
    max-height: 500px;
    margin-bottom: 60px;
    transition: all 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 1px 5px 8px 2px #dee2e6;
}

.card-body {
    min-height: 250px;
}

.card .text-white {
    margin: 20px;
}

.card-img {
    min-height: 300px;
    min-width: 206px;
    /* height: 250px;
    width: 348px; */
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    position: relative;
    background-color: #f9f9f9;
}

/* Car Service  */

/* Best Expericnce  */
.limoking-skin-darkblue,
.limoking-skin-darkblue .limoking-skin-content {
    color: #c9c9c9;
}

.limoking-skin-darkblue *,
.limoking-skin-darkblue .limoking-skin-border {
    border-color: #1eacc7;
}

.six {
    width: 50%;
}

.limoking-item {
    margin: 0px 15px 20px;
    min-height: 1px;
}

.limoking-about-us-item.limoking-with-divider .about-us-title {
    font-size: 35px;
    margin-bottom: 24px;
    font-weight: bold;
    text-transform: uppercase;
}

.limoking-skin-darkblue h1,
.limoking-skin-darkblue h2,
.limoking-skin-darkblue h3,
.limoking-skin-darkblue h4,
.limoking-skin-darkblue h5,
.limoking-skin-darkblue h6,
.limoking-skin-darkblue .limoking-skin-title,
.limoking-skin-darkblue .limoking-skin-title a {
    color: #ffffff;
}

.limoking-about-us-item.limoking-with-divider .about-us-title-divider {
    max-width: 100%;
    width: 135px;
    border-bottom-width: 0px;
    border-style: solid;
    margin-bottom: 30px;
}

.limoking-skin-darkblue *,
.limoking-skin-darkblue .limoking-skin-border {
    border-color: #1eacc7;
}

.limoking-skin-darkblue,
.limoking-skin-darkblue .limoking-skin-content {
    color: #c9c9c9;
}

.limoking-about-us-item.limoking-with-divider .limoking-button {
    margin-top: 9px;
    border-radius: 4px;
}

.limoking-skin-darkblue .limoking-button,
.limoking-skin-darkblue .limoking-button:hover,
.limoking-skin-darkblue input[type="button"],
.limoking-skin-darkblue input[type="submit"] {
    color: #ffffff;
    background-color: #1eacc7;
}

.limoking-button.large {
    font-size: 15px;
    padding: 15px 28px;
}

/* Price Range  */
.limoking-stunning-item.limoking-item {
    display: table;
    width: 100%;
    margin-bottom: 0px;
    margin: 30px 0px 20px 0px;
    justify-content: space-evenly;
}

.limoking-stunning-item .stunning-item-content {
    display: table-cell;
    vertical-align: middle;
    color: white;
}

.limoking-stunning-item .stunning-item-title {
    font-weight: bold;
    font-size: 21px;
    text-transform: uppercase;
    /* margin-bottom: 0px; */
    margin-right: 20px;
    display: inline;
}

.stunning-item-content.col-md-10 {
    padding-bottom: 20px;
    padding-left: 0px;
    left: -15px;
}

.stunning-item-button.limoking-info-font {
    padding-left: 30px;
    padding-right: 30px;
    line-height: 42px;
    display: table-cell;
    font-size: 16px;
    border-radius: 4px;
}

/* .stunning-item-button.limoking-info-font:hover {
    background-color: #06c4ea;
    color: white;
    border: 1px solid #05badd;
} */
/* Our Services  */
.limoking-title-item .limoking-item-title-wrapper.limoking-item {
    margin-bottom: 0px;
}

.limoking-item-title-wrapper.limoking-center-divider {
    text-align: center;
}

.limoking-item-title-wrapper.limoking-item {
    margin-bottom: 30px;
    position: relative;
}

.limoking-item-title-wrapper.limoking-center-divider
    .limoking-item-title-head-inner {
    position: relative;
}

.limoking-item-title-center-divider.limoking-left {
    right: 50%;
    margin-left: 25px;
}

.limoking-item-title-center-divider {
    position: absolute;
    top: 50%;
    display: none;
    width: 80px;
    border-bottom: 0px;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-style: solid;
}

.limoking-item-title-wrapper.limoking-center-divider .limoking-item-title {
    display: inline-block;
}

.limoking-item-title-center-divider.limoking-right {
    left: 50%;
    margin-right: 25px;
}

.limoking-item-title-wrapper.limoking-medium .limoking-item-title {
    font-size: 26px;
    line-height: 34px;
}

.four {
    width: 33.333%;
}

.limoking-item {
    margin: 0px 15px 20px;
    margin-bottom: 20px;
    min-height: 1px;
}

.limoking-column-service-item.limoking-medium .column-service-image {
    max-width: 50px;
}

.limoking-column-service-item .column-service-image {
    float: left;
    margin-right: 32px;
}

.limoking-column-service-item .column-service-content-wrapper {
    overflow: hidden;
}

.limoking-column-service-item.limoking-medium .column-service-title {
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.limoking-column-service-item .column-service-title {
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
}

.column-service-title {
    color: #444444;
}

.column-service-content {
    color: #909090;
}

@media only screen and (max-width: 335px) {
    #book-now {
        display: table;
        max-width: 50px;
    }
}

/* Start Section Banner */
.col-md-9.text-white {
    color: #eaeaea !important;
    font-size: 15px;
}
.col-md-9.text-white strong {
    color: white !important;
}
.booking-form-div {
    left: 8%;
}
.fullscreen {
    height: auto;
}
@media only screen and (max-width: 1700px) {
    .booking-form-div {
        left: 5%;
    }
}

@media only screen and (max-width: 1400px) {
    .booking-form-div {
        left: 2%;
    }
}

@media only screen and (max-width: 1025px) {
    .booking-form-div {
        left: 2%;
    }
}

@media only screen and (max-width: 990px) {
    .booking-form-div {
        left: 22%;
        min-width: 500px;
    }
    .header-right {
        min-width: 450px;
    }
}

@media only screen and (max-width: 840px) {
    .booking-form-div {
        left: 17%;
    }
}

@media only screen and (max-width: 760px) {
    .booking-form-div {
        left: 0px;
        display: flex;
        justify-content: center;
    }
}
@media only screen and (max-width: 540px) {
    .header-right {
        min-width: 350px;
        margin-right: 0px;
        margin-left: 0px;
    }
    .booking-form-div {
        min-width: 350px;
        padding: 0px;
    }
}
@media only screen and (max-width: 400px) {
    .header-right {
        min-width: 200px;
        max-width: 290px;
    }
    .booking-form-div {
        min-width: 200px;
        max-width: 290px;
        margin-left: 15px;
    }
}
/* End Section Banner */
</style>
