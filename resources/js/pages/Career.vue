<template>
    <div>
        <section class="banner-area relative join-us" id="home">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div
                    class="row d-flex align-items-center justify-content-center"
                >
                    <div class="about-content col-lg-12">
                        <h1 class="text-white">
                            Join Us
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="container col-md-6 mt-5 mb-5">
            <div class="container">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="Ex: Harry"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Ex: Potter"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Mobile No.</label>
                        <input type="text" class="form-control" placeholder="Ex: +44 7911 123456"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Passport No.</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Driving License</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Work Permit</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-group">
                    <label>Address </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Apartment, studio, or floor"
                    />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Ex: Bath"
                        />
                    </div>
                    <div class="form-group col-md-4">
                        <label>State</label>
                        <select class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label>Zip</label>
                        <input type="text" class="form-control" placeholder="Ex: 72046"/>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-secondary mr-2">
                    Cancel
                </button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.join-us {
    background: url("../../../public/img/join-us.jpg") center;
    background-size: cover;
}
</style>
