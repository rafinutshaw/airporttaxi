(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      // FlatPickr Config
      config: {
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
      bookingId: 218,
      email: "sezansarker@gmail.com",
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
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("MMMM Do YYYY, h:mm:ss a");
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
        _this.vehicles = response.data;
      }); // Getting the price list from database

      axios.post("/search-booking", {
        bookingId: this.bookingId,
        email: this.email
      }).then(function (response) {
        _this.booking = response.data.booking;

        _this.vehicles.forEach(function (element) {
          if (element.id === _this.booking.vehicle_id) {
            console.log(element.type);
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
        _this.booking.flight_origin !== "" && _this.booking.flight_origin !== null ? _this.booking.hasFlightOrigin = true : false; // this.vehicle = this.vehicles.find(element => element.id == this.booking.vehicle_id);
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
      this.temporaryBooking = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(this.booking);
    },
    cancelEdit: function cancelEdit() {
      this.allowEdit = false;
      this.booking = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(this.temporaryBooking);
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
                                : _c("flat-pickr", {
                                    staticClass: "flat-datepicker form-control",
                                    attrs: {
                                      name: "journey_date",
                                      config: _vm.config,
                                      placeholder: "Select date (BST)"
                                    },
                                    model: {
                                      value: _vm.booking.journey_date,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.booking,
                                          "journey_date",
                                          $$v
                                        )
                                      },
                                      expression: "booking.journey_date"
                                    }
                                  })
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
                                    : _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.booking.flight_number,
                                            expression: "booking.flight_number"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          required: "",
                                          placeholder: "Flight Number",
                                          "aria-label": "Flight Number",
                                          "aria-describedby": "basic-addon1"
                                        },
                                        domProps: {
                                          value: _vm.booking.flight_number
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.booking,
                                              "flight_number",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                ]
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