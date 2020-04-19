<template>
    <div class="header-right">
        <h4 class="pb-10">BOOK ONLINE</h4>
        <div style="text-align: left;">
            <form class="container" id="bookingForm">
                <div v-for="(item, index) in journey" :key="index">
                    <div class="mb-2">
                        <label class="bookingFormLabel" for="Start"
                            >Start</label
                        >
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fas fa-map-marker-alt"></i>
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
                                        <input
                                            v-model="viaItem.name"
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
                                    @click.prevent="removeVia(viaIndex)"
                                >
                                    Remove
                                </button>
                            </div>
                        </draggable>
                    </div>
                    <div class="mt-2">
                        <label class="bookingFormLabel" for="End">End</label>
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="fas fa-map-marker-alt"></i>
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
</template>

<script>
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

<style scoped>.form-group {
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
    margin-top: 100px;
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
/* .btn-primary {
    background-color: #5856d6;
    border-color: #5856d6;
} */
</style>
