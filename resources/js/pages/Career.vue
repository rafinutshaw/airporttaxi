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
            <form
                @submit.prevent="onSubmit"
                method="post"
                enctype="multipart/form-data"
            >
                <div class="container">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>First Name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Ex: Harry"
                                autofocus
                                v-model="form.firstName"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Ex: Potter"
                                v-model="form.lastName"
                            />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Email</label>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Ex: john@example.com"
                                v-model="form.email"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Mobile No.</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Ex: +44 7911 123456"
                                v-model="form.mobile"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Address </label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Apartment, studio, or floor"
                            v-model="form.address"
                        />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Driving License</label>
                            <div class="custom-file">
                                <input
                                    type="file"
                                    name="drivingLicense"
                                    class="custom-file-input"
                                    v-on:change="onDrivingLicenseChange"
                                />
                                <label class="custom-file-label"
                                    >Select an img/pdf file</label
                                >
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Private Hire Certificate</label>
                            <div class="custom-file">
                                <input
                                    type="file"
                                    name="privateHireCertificate"
                                    class="custom-file-input"
                                    v-on:change="onPrivateHireCertificateChange"
                                />
                                <label class="custom-file-label"
                                    >Select an img/pdf file</label
                                >
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Proof of Address</label>
                            <div class="custom-file">
                                <input
                                    type="file"
                                    name="proofOfAddress"
                                    class="custom-file-input"
                                    v-on:change="onProofOfAddressChange"
                                />
                                <label class="custom-file-label"
                                    >Select an img/pdf file</label
                                >
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Insurance Document</label>
                            <div class="custom-file">
                                <input
                                    type="file"
                                    name="insuranceDocument"
                                    class="custom-file-input"
                                    v-on:change="onInsuranceDocumentChange"
                                />
                                <label class="custom-file-label"
                                    >Select an img/pdf file</label
                                >
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Personal Photo (Ratio 1:1)</label>
                        <div class="custom-file">
                            <input
                                type="file"
                                name="photo"
                                class="custom-file-input"
                                v-on:change="onPhotoChange"
                            />
                            <label class="custom-file-label"
                                >Select an img file</label
                            >
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn btn-outline-secondary mr-2"
                    >
                        Cancel
                    </button>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
$(document).ready(function() {
    $(".custom-file-input").change(function() {
        var fileName = $(this).val();
        if (fileName.length) {
            fileName = fileName.replace("C:\\fakepath\\", "");
            if (fileName.length > 14) {
                fileName = fileName.substring(0, 14) + "...";
            }
            $(this)
                .next(".custom-file-label")
                .html(fileName);
        } else {
            $(this)
                .next(".custom-file-label")
                .html("Choose Image");
        }
    });
});
export default {
    data() {
        return {
            form: {
                firstName: null,
                lastName: null,
                email: null,
                mobile: null,
                address: null,
                drivingLicense: null,
                privateHireCertificate: null,
                proofOfAddress: null,
                insuranceDocument: null,
                photo: null
            },
            tempFile: null,
            errors: null
        };
    },
    methods: {
        onDrivingLicenseChange(e) {
            this.form.drivingLicense = e.target.files[0];
        },
        onPrivateHireCertificateChange(e) {
            this.form.privateHireCertificate = e.target.files[0];
        },
        onProofOfAddressChange(e) {
            this.form.proofOfAddress = e.target.files[0];
        },
        onInsuranceDocumentChange(e) {
            this.form.insuranceDocument = e.target.files[0];
        },
        onPhotoChange(e) {
            this.form.photo = e.target.files[0];
        },
        onSubmit() {
            this.errors = null;
            const config = {
                headers: { "content-type": "multipart/form-data" }
            };

            // this.form.drivingLicense = new FormData();
            // this.form.drivingLicense.append("file", this.tempFile);
            // axios
            //     .post("/file/store", this.form, config)
            //     .then(response => {
            //         console.log(response);
            //     })
            //     .catch(errors => {});

            const data = new FormData();
            data.append("drivingLicense", this.form.drivingLicense);
            data.append("privateHireCertificate", this.form.privateHireCertificate);
            data.append("proofOfAddress", this.form.proofOfAddress);
            data.append("insuranceDocument", this.form.insuranceDocument);
            data.append("photo", this.form.photo);
            axios.post("/file/store", data);
        }
    },
    created() {
        $("html,body").scrollTop(0);
    }
};
</script>

<style scoped>
.join-us {
    background: url("../../../public/img/join-us.jpg") center;
    background-size: cover;
}
</style>
