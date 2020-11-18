(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Manage Bookings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Manage Bookings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_plugins_confirmDate_confirmDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/plugins/confirmDate/confirmDate.js */ "./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.js");
/* harmony import */ var flatpickr_dist_plugins_confirmDate_confirmDate_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_plugins_confirmDate_confirmDate_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flatpickr_dist_plugins_confirmDate_confirmDate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/plugins/confirmDate/confirmDate.css */ "./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css");
/* harmony import */ var flatpickr_dist_plugins_confirmDate_confirmDate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_plugins_confirmDate_confirmDate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      // FlatPickr Config
      config: {
        plugins: [new flatpickr_dist_plugins_confirmDate_confirmDate_js__WEBPACK_IMPORTED_MODULE_2___default.a()],
        confirmIcon: "<i class='fa fa-check'></i>",
        // your icon's html, if you wish to override
        confirmText: "Select",
        showAlways: false,
        theme: "light",
        wrap: false,
        // set wrap to true only when using 'input-group'
        altFormat: "M j, Y h:i K",
        altInput: true,
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        closeOnSelect: true
      },
      isLoading: false,
      bookingId: null,
      email: "",
      booking: {
        booking_status_id: null,
        journey_date: null,
        updated_at: null,
        hasFlightNumber: false,
        hasFlightOrigin: false,
        vehicle: {
          type: "asd",
          maxPassenger: null,
          luggage: null
        }
      },
      temporaryBooking: {},
      bookingStatus: ["Unpaid", "Pending", "Approved", "Ongoing", "Completed", "Canceled"],
      showBooking: false,
      allowEdit: false,
      errorTypes: {
        editNotPossible: false,
        bookingNotFound: false
      },
      error: {
        data: {
          message: ""
        }
      },
      updated: null,
      updateError: null,
      vehicles: null,
      vehicle: {},
      maxPassengerArray: [],
      maxLuggageArray: []
    };
  },
  filters: {
    moment: function moment(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("MMM DD, YYYY h:mm:ss a");
    }
  },
  methods: {
    onSearchSubmit: function onSearchSubmit() {
      var _this = this;

      this.allowEdit = false, this.maxPassengerArray = [];
      this.maxLuggageArray = [];
      this.isLoading = true;
      this.booking = {
        booking_status_id: null,
        journey_date: null,
        updated_at: null
      };
      this.errorTypes = {
        editNotPossible: false,
        bookingNotFound: false
      };
      this.showBooking = false;
      this.error = {
        data: {
          message: ""
        }
      };
      this.updated = null;
      this.updateError = null;
      this.errorTypes.editNotPossible = false;
      axios.get("/price-list").then(function (response) {
        _this.vehicles = response.data; // Getting the price list from database

        axios.post("/search-booking", {
          bookingId: _this.bookingId,
          email: _this.email
        }).then(function (response) {
          _this.booking = response.data.booking;

          _this.vehicles.forEach(function (element) {
            if (element.id === _this.booking.vehicle_id) {
              _this.vehicle = JSON.parse(JSON.stringify(element));
            }
          });

          for (var i = 1; i <= _this.vehicle.maxPassenger; i++) {
            _this.maxPassengerArray.push(i);
          }

          for (var _i = 1; _i <= _this.vehicle.luggage; _i++) {
            _this.maxLuggageArray.push(_i);
          }

          _this.showBooking = true;
          _this.booking.flight_number !== "" && _this.booking.flight_number !== null ? _this.booking.hasFlightNumber = true : false;
          _this.booking.hasFlightNumber == true ? _this.booking.hasFlightOrigin = true : _this.booking.flight_origin = false; // this.vehicle = this.vehicles.find(element => element.id == this.booking.vehicle_id);
        })["catch"](function (error) {
          if (error.response) {
            if (error.response.status === 403) {
              _this.showBooking = true;
              _this.booking = error.response.data.booking;
              _this.errorTypes.editNotPossible = true;
            } else if (error.response.status === 404) {
              _this.errorTypes.bookingNotFound == true;
            }

            _this.error = error.response;
          }
        })["finally"](function () {
          _this.isLoading = false;
        });
      });
    },
    onUpdate: function onUpdate() {
      var _this2 = this;

      this.isLoading = true;
      this.updated = null;
      this.updateError = null;
      axios.post("/update-booking", {
        bookingId: this.booking.id,
        journey_date: this.booking.journey_date,
        flight_number: this.booking.flight_number,
        flight_origin: this.booking.flight_origin
      }).then(function (response) {
        _this2.updated = response.data.message;
        _this2.errorTypes.editNotPossible = true;
        _this2.error.data.message = "Sorry you can't not edit this booking right now.";
      })["catch"](function (error) {
        _this2.updateError = error.response.data.message;

        if (error.response.data.errors.journey_date) {
          _this2.updateError = error.response.data.errors.journey_date[0];
        }
      })["finally"](function () {
        _this2.isLoading = false;
        _this2.allowEdit = false;
      });
    },
    onEdit: function onEdit() {
      this.allowEdit = true;
      this.temporaryBooking = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.cloneDeep(this.booking);
    },
    cancelEdit: function cancelEdit() {
      this.allowEdit = false;
      this.booking = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.cloneDeep(this.temporaryBooking);
    }
  },
  computed: {
    validateUpdate: function validateUpdate() {
      if (this.booking.journey_date !== "" && this.booking.flight_number) {
        return true;
      } else return false; // if (
      //     moment(
      //         this.booking.journey_date,
      //         "dddd, MMMM Do YYYY, h:mm:ss a",
      //         true
      //     ).isValid()
      // ) {
      //     return true;
      // } else return false;

    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.booking-data[data-v-6f93c2bc] {\r\n    display: block;\r\n    width: 100%;\r\n    height: calc(1.6em + 0.75rem + 2px);\r\n\r\n    font-size: 0.9rem;\r\n    font-weight: 400;\r\n    line-height: 1.6;\r\n    color: #5a5a5a;\r\n    background-color: #fff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Manage Bookings.vue?vue&type=template&id=6f93c2bc&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Manage Bookings.vue?vue&type=template&id=6f93c2bc&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container mt-3" },
    [
      _c("loader", { attrs: { "is-loading": _vm.isLoading } }),
      _vm._v(" "),
      _c("h2", { staticClass: "text-center" }, [_vm._v("Manage Bookings")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "container d-flex flex-row justify-content-center mb-2"
        },
        [
          _c(
            "form",
            {
              staticClass: "d-flex flex-column",
              attrs: { method: "POST" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSearchSubmit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("label", [_vm._v("Enter your booking id")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.bookingId,
                        expression: "bookingId"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Ex: 123" },
                    domProps: { value: _vm.bookingId },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.bookingId = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("label", [_vm._v("Your email")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "exampleInputEmail1",
                      "aria-describedby": "emailHelp",
                      placeholder: "Ex: example@mail.com"
                    },
                    domProps: { value: _vm.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Search")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mt-4 justify-content-center" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _vm.error.data.message != ""
                ? _c("div", { staticClass: "col-md-10 col-sm-12" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "alert alert-dismissible alert-danger fade show",
                        attrs: { role: "alert" }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.error.data.message) +
                            "\n                            "
                        ),
                        _vm._m(1)
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.updated || _vm.updateError
                ? _c("div", { staticClass: "col-md-10 col-sm-12" }, [
                    _vm.updated || _vm.updateError
                      ? _c(
                          "div",
                          {
                            staticClass: "alert alert-dismissible fade show",
                            class: {
                              "alert-success": _vm.updated,
                              "alert-danger": _vm.updateError
                            },
                            attrs: { role: "alert" }
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.updated ? _vm.updated : _vm.updateError
                                ) +
                                "\n                            "
                            ),
                            _vm._m(2)
                          ]
                        )
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.showBooking
                ? _c("div", { staticClass: "col-md-10 col-sm-12" }, [
                    _c("div", { staticClass: "card mt-2" }, [
                      _c("div", { staticClass: "card-header" }, [
                        _c("h3", { staticClass: "card-title text-dark" }, [
                          _vm._v(
                            "\n                                    Booking Id #" +
                              _vm._s(_vm.booking.id) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        !_vm.errorTypes.editNotPossible && !_vm.allowEdit
                          ? _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-sm btn-primary card-tool ml-3",
                                attrs: { id: "edit", type: "button" },
                                on: { click: _vm.onEdit }
                              },
                              [
                                _vm._v(
                                  "\n                                    Edit "
                                ),
                                _c("i", { staticClass: "fas fa-edit ml-1" })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.errorTypes.editNotPossible && _vm.allowEdit
                          ? _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-sm btn-danger card-tool ml-3",
                                attrs: { id: "cancel-edit", type: "button" },
                                on: { click: _vm.cancelEdit }
                              },
                              [
                                _vm._v(
                                  "\n                                    Cancel\n                                    "
                                ),
                                _c("i", {
                                  staticClass: "fas fa-window-close ml-1"
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-tools" }, [
                          _c(
                            "p",
                            {
                              staticClass: "mb-0 badge font-weight-bold",
                              staticStyle: { "font-size": "1rem" }
                            },
                            [
                              _vm._v(
                                "\n                                        Status:\n                                        " +
                                  _vm._s(
                                    _vm.bookingStatus[
                                      _vm.booking.booking_status_id - 1
                                    ]
                                  ) +
                                  "\n                                    "
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "form-row" }, [
                          _c("div", { staticClass: "form-group col-md-4" }, [
                            _c("label", [_vm._v("From")]),
                            _vm._v(" "),
                            _c("p", { staticClass: "booking-data" }, [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.booking.from) +
                                  "\n                                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-4" }, [
                            _c("label", [_vm._v("To")]),
                            _vm._v(" "),
                            _c("p", { staticClass: "booking-data" }, [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.booking.to) +
                                  "\n                                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm.booking.via
                            ? _c(
                                "div",
                                { staticClass: "form-group col-md-4" },
                                [
                                  _c("label", [_vm._v("Via Route")]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "booking-data" }, [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(_vm.booking.via) +
                                        "\n                                        "
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-4" },
                            [
                              _c(
                                "label",
                                { class: { required: _vm.allowEdit } },
                                [_vm._v("Journey Date")]
                              ),
                              _vm._v(" "),
                              !_vm.allowEdit
                                ? _c("p", { staticClass: "booking-data" }, [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(
                                          _vm._f("moment")(
                                            _vm.booking.journey_date
                                          )
                                        ) +
                                        "\n                                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.allowEdit
                                ? _c("ValidationProvider", {
                                    attrs: {
                                      vid: "journey_date",
                                      name: "Journey Date",
                                      rules: "required"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("flat-pickr", {
                                                staticClass:
                                                  "flat-datepicker form-control",
                                                attrs: {
                                                  name: "journey_date",
                                                  config: _vm.config,
                                                  placeholder:
                                                    "Select date (BST)"
                                                },
                                                model: {
                                                  value:
                                                    _vm.booking.journey_date,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.booking,
                                                      "journey_date",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "\n                                                    booking.journey_date\n                                                "
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-danger font-italic"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(errors[0]) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      694061947
                                    )
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-4" }, [
                            _c("label", [_vm._v("Journey Type")]),
                            _vm._v(" "),
                            _c("p", { staticClass: "booking-data" }, [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.booking.journey_type) +
                                  "\n                                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-4" }, [
                            _c("label", [_vm._v("Vehicle")]),
                            _vm._v(" "),
                            _c("p", { staticClass: "booking-data" }, [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.vehicle.type) +
                                  "\n                                        "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.booking.hasFlightNumber
                          ? _c("div", { staticClass: "form-row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-4" },
                                [
                                  _c(
                                    "label",
                                    { class: { required: _vm.allowEdit } },
                                    [_vm._v("Flight Number")]
                                  ),
                                  _vm._v(" "),
                                  !_vm.allowEdit
                                    ? _c("p", { staticClass: "booking-data" }, [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(_vm.booking.flight_number) +
                                            "\n                                        "
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.allowEdit
                                    ? _c("ValidationProvider", {
                                        attrs: {
                                          vid: "flightNumber",
                                          name: "Flight Number",
                                          rules: "required"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.booking
                                                            .flight_number,
                                                        expression:
                                                          "\n                                                    booking.flight_number\n                                                "
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      type: "text",
                                                      required: "",
                                                      placeholder:
                                                        "Flight Number",
                                                      "aria-label":
                                                        "Flight Number",
                                                      "aria-describedby":
                                                        "basic-addon1"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.booking
                                                          .flight_number
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.booking,
                                                          "flight_number",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger font-italic"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(errors[0]) +
                                                          "\n                                            "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          656218323
                                        )
                                      })
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.booking.hasFlightOrigin
                                ? _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c("label", [_vm._v("Flight Origin")]),
                                      _vm._v(" "),
                                      !_vm.allowEdit
                                        ? _c(
                                            "p",
                                            { staticClass: "booking-data" },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    _vm.booking.flight_origin
                                                  ) +
                                                  "\n                                        "
                                              )
                                            ]
                                          )
                                        : _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.booking.flight_origin,
                                                expression:
                                                  "booking.flight_origin"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Flight Origin",
                                              "aria-label": "Flight Origin",
                                              "aria-describedby": "basic-addon1"
                                            },
                                            domProps: {
                                              value: _vm.booking.flight_origin
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.booking,
                                                  "flight_origin",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                    ]
                                  )
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-row" }, [
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", [_vm._v("Passengers")]),
                            _vm._v(" "),
                            !_vm.allowEdit
                              ? _c("p", { staticClass: "booking-data" }, [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(_vm.booking.passengers) +
                                      "\n                                        "
                                  )
                                ])
                              : _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.booking.passengers,
                                        expression: "booking.passengers"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.booking,
                                          "passengers",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.maxPassengerArray, function(
                                    passengers
                                  ) {
                                    return _c("option", { key: passengers }, [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(passengers) +
                                          "\n                                            "
                                      )
                                    ])
                                  }),
                                  0
                                )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", [_vm._v("Luggage")]),
                            _vm._v(" "),
                            !_vm.allowEdit
                              ? _c("p", { staticClass: "booking-data" }, [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(_vm.booking.luggage) +
                                      "\n                                        "
                                  )
                                ])
                              : _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.booking.luggage,
                                        expression: "booking.luggage"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.booking,
                                          "luggage",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", [_vm._v("None")]),
                                    _vm._v(" "),
                                    _vm._l(_vm.maxLuggageArray, function(
                                      luggage
                                    ) {
                                      return _c("option", { key: luggage }, [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(luggage) +
                                            " luggage\n                                            "
                                        )
                                      ])
                                    })
                                  ],
                                  2
                                )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12 text-right" },
                            [
                              _c("label", [_vm._v("Total price")]),
                              _vm._v(" "),
                              _c("p", { staticClass: "booking-data" }, [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s("₤ " + _vm.booking.total_price) +
                                    "\n                                        "
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        !_vm.errorTypes.editNotPossible
                          ? _c(
                              "p",
                              {
                                staticClass: "info-section border-left-danger"
                              },
                              [
                                _vm._v(
                                  "\n                                    You can only update your journey once.\n                                "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.error && _vm.error.data && _vm.error.data.message
                          ? _c(
                              "p",
                              {
                                staticClass: "info-section border-left-danger"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(_vm.error.data.message) +
                                    "\n                                "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.errorTypes.editNotPossible
                          ? _c("div", [
                              _vm.allowEdit
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: !_vm.validateUpdate
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.onUpdate($event)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Update\n                                    "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Manage Bookings.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/Manage Bookings.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manage_Bookings_vue_vue_type_template_id_6f93c2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manage Bookings.vue?vue&type=template&id=6f93c2bc&scoped=true& */ "./resources/js/pages/Manage Bookings.vue?vue&type=template&id=6f93c2bc&scoped=true&");
/* harmony import */ var _Manage_Bookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manage Bookings.vue?vue&type=script&lang=js& */ "./resources/js/pages/Manage Bookings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Manage_Bookings_vue_vue_type_style_index_0_id_6f93c2bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css& */ "./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Manage_Bookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Manage_Bookings_vue_vue_type_template_id_6f93c2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Manage_Bookings_vue_vue_type_template_id_6f93c2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f93c2bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Manage Bookings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Manage Bookings.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Manage Bookings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Manage Bookings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Manage Bookings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_style_index_0_id_6f93c2bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Manage Bookings.vue?vue&type=style&index=0&id=6f93c2bc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_style_index_0_id_6f93c2bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_style_index_0_id_6f93c2bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_style_index_0_id_6f93c2bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_style_index_0_id_6f93c2bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_style_index_0_id_6f93c2bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Manage Bookings.vue?vue&type=template&id=6f93c2bc&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/Manage Bookings.vue?vue&type=template&id=6f93c2bc&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_template_id_6f93c2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Manage Bookings.vue?vue&type=template&id=6f93c2bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Manage Bookings.vue?vue&type=template&id=6f93c2bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_template_id_6f93c2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_Bookings_vue_vue_type_template_id_6f93c2bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);