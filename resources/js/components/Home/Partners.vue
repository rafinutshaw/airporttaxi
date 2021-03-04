<template>
    <div>
        <h3 class="bg-white text-center mb-0 pb-4">Our Partners</h3>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(partner, index) in partners" :key="index">
                <img :src="partner.photo" class="d-block w-100" alt="..." />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination, Autoplay  } from "swiper/core";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay ]);

// import Swiper styles
import "swiper/swiper-bundle.css";
// import "swiper/swiper.min.css";

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            partners: null,
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                loopFillGroupWithBlank: true,
                freeMode: true,
                grabCursor: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }
        };
    },
    mounted() {
        axios.get("/partners").then(response => {
            this.partners = response.data;
        });
    }
};
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
</style>
