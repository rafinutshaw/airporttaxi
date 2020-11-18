<template>
    <div>
        <h3 class="bg-white text-center mb-0 pb-4">Our Partners</h3>
        <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
        >
            <ol class="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li>
            </ol>
            <div class="carousel-inner">
                <div
                    v-for="(partner, index) in partners"
                    :key="index"
                    class="carousel-item"
                    :class="{ active: index == 0 }"
                >
                    <img :src="partner.photo" class="d-block w-100" alt="..." />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            partners: null
        };
    },
    mounted() {
        console.log(process.env.MIX_ADMIN_APP_URL);
        axios.get("/partners").then(response => {
            this.partners = response.data;
        });
    }
};
</script>

<style scoped>
.carousel-item img {
    height: 200px !important;
}
</style>
