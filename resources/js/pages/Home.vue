<template>
    <div>
        <!-- start banner Area -->
        <section class="banner-area relative" id="home">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div
                    class="row fullscreen d-flex align-items-center justify-content-between"
                    style="height: 966px;"
                >
                    <div class="banner-content col-lg-6 col-md-5 ">
                        <h6 class="text-white ">Need a ride? just call</h6>
                        <h1 class="text-uppercase">
                            911 999 911
                        </h1>
                        <p class="pt-10 pb-10 text-white">
                            Whether you enjoy city breaks or extended holidays
                            in the sun, you can always improve your travel
                            experiences by staying in a small.
                        </p>
                        <a href="#" class="primary-btn text-uppercase"
                            >Call for taxi</a
                        >
                    </div>
                    <div class="col-lg-5 col-md-6 header-right">
                        <h4 class="pb-10">BOOK ONLINE</h4>
                        <div style="text-align: left;">
                            <form class="container" id="bookingForm">
                                <div
                                    v-for="(item, index) in journey"
                                    :key="index"
                                >
                                    <div class="mb-2">
                                        <label
                                            class="bookingFormLabel"
                                            for="Start"
                                            >Start</label
                                        >
                                        <div class="form-group input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i
                                                        class="fas fa-map-marker-alt"
                                                    ></i>
                                                </div>
                                            </div>
                                            <input
                                                v-model="item.start"
                                                type="text"
                                                name="Start"
                                                id="Start"
                                                class="form-control"
                                                aria-describedby="helpId"
                                                placeholder="e.g. Heathrow Airport or AA11AA"
                                            />
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
                                                v-for="(viaItem,
                                                viaIndex) in item.via"
                                                :key="viaIndex"
                                            >
                                                <div class="mb-2">
                                                    <label
                                                        class="bookingFormLabel"
                                                        for="Via"
                                                        >Via</label
                                                    >
                                                    <div
                                                        class="form-group input-group"
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
                                                        <input
                                                            v-model="
                                                                viaItem.name
                                                            "
                                                            type="text"
                                                            name="Via"
                                                            id="Via"
                                                            class="form-control"
                                                            placeholder="e.g. InterContinental London Park Lane"
                                                            aria-describedby="helpId"
                                                        />
                                                        <!-- <i
                                                            class="fa fa-times close ml-2 mt-1"
                                                            @click="
                                                                removeVia(
                                                                    viaIndex
                                                                )
                                                            "
                                                        ></i> -->
                                                    </div>
                                                </div>

                                                <button
                                                    class="btn btn-sm btn-danger"
                                                    @click.prevent="
                                                        removeVia(viaIndex)
                                                    "
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </draggable>
                                    </div>
                                    <div class="mt-2">
                                        <label
                                            class="bookingFormLabel"
                                            for="End"
                                            >End</label
                                        >
                                        <div class="form-group input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i
                                                        class="fas fa-map-marker-alt"
                                                    ></i>
                                                </div>
                                            </div>
                                            <input
                                                v-model="item.end"
                                                type="text"
                                                name="End"
                                                id="End"
                                                class="form-control"
                                                placeholder="e.g. AA11AA or Heathrow Airport"
                                                aria-describedby="helpId"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    class="btn btn-sm btn-primary mt-2"
                                    @click.prevent="add"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End banner Area -->

        <!-- Start home-about Area -->
        <section class="home-about-area section-gap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 about-left">
                        <img
                            class="img-fluid"
                            src="../../../public/img/about-img.jpg"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-6 about-right">
                        <h1>Globally Connected by Large Network</h1>
                        <h4>
                            We are here to listen from you deliver exellence
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.Ut enim ad minim. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor.
                        </p>
                        <a class="text-uppercase primary-btn" href="#"
                            >Get Details</a
                        >
                    </div>
                </div>
            </div>
        </section>
        <!-- End home-about Area -->

        <!-- Start services Area -->
        <section class="services-area pb-120">
            <div class="container">
                <div class="row section-title">
                    <h1>What Services we offer to our clients</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 single-service">
                        <span class="lnr lnr-car"></span>
                        <a href="#">
                            <h4>Taxi Service</h4>
                        </a>
                        <p>
                            Usage of the Internet is becoming more common due to
                            rapid advancement of technology and power.
                        </p>
                    </div>
                    <div class="col-lg-4 single-service">
                        <span class="lnr lnr-briefcase"></span>
                        <a href="#">
                            <h4>Office Pick-ups</h4>
                        </a>
                        <p>
                            Usage of the Internet is becoming more common due to
                            rapid advancement of technology and power.
                        </p>
                    </div>
                    <div class="col-lg-4 single-service">
                        <span class="lnr lnr-bus"></span>
                        <a href="#">
                            <h4>Event Transportation</h4>
                        </a>
                        <p>
                            Usage of the Internet is becoming more common due to
                            rapid advancement of technology and power.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End services Area -->

        <!-- Start image-gallery Area -->
        <section class="image-gallery-area section-gap">
            <div class="container">
                <div class="row section-title">
                    <h1>Image Gallery that we like to share</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 single-gallery">
                        <a href="img/g1.jpg" class="img-gal"
                            ><img
                                class="img-fluid"
                                src="../../../public/img/g1.jpg"
                                alt=""
                        /></a>

                        <a href="img/g4.jpg" class="img-gal"
                            ><img
                                class="img-fluid"
                                src="../../../public/img/g4.jpg"
                                alt=""
                        /></a>
                    </div>
                    <div class="col-lg-4 single-gallery">
                        <a href="img/g2.jpg" class="img-gal"
                            ><img
                                class="img-fluid"
                                src="../../../public/img/g2.jpg"
                                alt=""
                        /></a>

                        <a href="img/g5.jpg" class="img-gal"
                            ><img
                                class="img-fluid"
                                src="../../../public/img/g5.jpg"
                                alt=""
                        /></a>
                    </div>
                    <div class="col-lg-4 single-gallery">
                        <a href="img/g3.jpg" class="img-gal"
                            ><img
                                class="img-fluid"
                                src="../../../public/img/g3.jpg"
                                alt=""
                        /></a>

                        <a href="img/g6.jpg" class="img-gal"
                            ><img
                                class="img-fluid"
                                src="../../../public/img/g6.jpg"
                                alt=""
                        /></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- End image-gallery Area -->

        <!-- Start reviews Area -->
        <section class="reviews-area section-gap">
            <div class="container">
                <div class="row section-title">
                    <h1>Client’s Reviews</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-review">
                            <h4>Cody Hines</h4>
                            <p>
                                Accessories Here you can find the best computer
                                accessory for your laptop, monitor, printer,
                                scanner, speaker.
                            </p>
                            <div class="star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-review">
                            <h4>Chad Herrera</h4>
                            <p>
                                Accessories Here you can find the best computer
                                accessory for your laptop, monitor, printer,
                                scanner, speaker.
                            </p>
                            <div class="star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-review">
                            <h4>Andre Gonzalez</h4>
                            <p>
                                Accessories Here you can find the best computer
                                accessory for your laptop, monitor, printer,
                                scanner, speaker.
                            </p>
                            <div class="star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-review">
                            <h4>Jon Banks</h4>
                            <p>
                                Accessories Here you can find the best computer
                                accessory for your laptop, monitor, printer,
                                scanner, speaker.
                            </p>
                            <div class="star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-review">
                            <h4>Landon Houston</h4>
                            <p>
                                Accessories Here you can find the best computer
                                accessory for your laptop, monitor, printer,
                                scanner, speaker.
                            </p>
                            <div class="star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-review">
                            <h4>Nelle Wade</h4>
                            <p>
                                Accessories Here you can find the best computer
                                accessory for your laptop, monitor, printer,
                                scanner, speaker.
                            </p>
                            <div class="star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End reviews Area -->

        <!-- Start home-calltoaction Area -->
        <section class="home-calltoaction-area relative">
            <div class="container">
                <div class="overlay overlay-bg"></div>
                <div class="row align-items-center section-gap">
                    <div class="col-lg-8">
                        <h1>Experience Great Support</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                        </p>
                    </div>
                    <div class="col-lg-4 btn-left">
                        <a href="#" class="primary-btn"
                            >Reach Our Support Team</a
                        >
                    </div>
                </div>
            </div>
        </section>
        <!-- End home-calltoaction Area -->

        <!-- Start latest-blog Area -->
        <section class="latest-blog-area section-gap">
            <div class="container">
                <div class="row section-title">
                    <h1>Latest News from our Blog</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="single-latest-blog">
                            <div class="thumb">
                                <img
                                    class="img-fluid"
                                    src="../../../public/img/b1.jpg"
                                    alt=""
                                />
                            </div>
                            <ul class="tags">
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Life Style</a></li>
                            </ul>
                            <a href="#">
                                <h4>Portable latest Fashion for young women</h4>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                            <p class="date">31st January, 2018</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="single-latest-blog">
                            <div class="thumb">
                                <img
                                    class="img-fluid"
                                    src="../../../public/img/b2.jpg"
                                    alt=""
                                />
                            </div>
                            <ul class="tags">
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Life Style</a></li>
                            </ul>
                            <a href="#">
                                <h4>Portable latest Fashion for young women</h4>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                            <p class="date">31st January, 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End latest-blog Area -->
    </div>
</template>

<script>
let id = 2;
import draggable from "vuedraggable";
export default {
    components: {
        draggable
    },
    data() {
        return {
            journey: [
                {
                    start: "",
                    end: "",
                    via: []
                }
            ],
            dragging: false
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
        }
    }
};
</script>

<style scoped>
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
    padding: 35px;
}

.header-right .form-control {
    font-size: 14px;
    padding: 0.575rem 0.75rem;
    background-color: #f3f3f3eb;
    box-shadow: 0px 4px 8px #999999a3;
    /* border: 1px solid #ced4da; */
}

.bookingFormLabel {
    font-weight: 600;
    font-size: 15px;
}
.form-group {
    width: 100%;
}
/* #bookingForm {
    padding: 0;
}
input#Start {
    max-width: 230px;
}
input#Via {
    min-width: 230px;
}
input#End {
    max-width: 230px;
} */
</style>
