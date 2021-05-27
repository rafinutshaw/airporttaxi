(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/New Payment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/New Payment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      journey: {
        id: parseInt(this.$route.params.id),
        customer: {
          name: null,
          email: null,
          mobile: null
        },
        from: {
          text: ""
        },
        to: {
          text: ""
        },
        total_due: 0
      },
      error: {
        data: {
          message: ""
        }
      },
      inputFieldFocused: {
        paymentDetails: {
          email: false,
          fullName: false
        }
      },
      // Payment Information Data
      csrf: document.head.querySelector('meta[name="csrf-token"]').content,
      stripe: null,
      elements: null,
      card: null,
      clientSecret: null,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
        style: {
          base: {
            color: "#32325d",
            fontFamily: '"Nunito", sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        },
        hidePostalCode: true
      },
      name_on_card: null,
      receipt_email: null,
      address: null,
      cardPayment: {
        success: false,
        error: false,
        errorText: null
      }
    };
  },
  methods: {
    // Payment Information
    // Load Stripe element and post payment intent
    getStripe: function getStripe() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__["loadStripe"])("pk_test_51HOzVPAQ30mnpxgSFDh78Spamz6dac0YkvBei15FGgEcpirejByzBRN4CtGeuJ30mYD5e5PKnxrJOxmPo7leoaqy00jvasWY5v").then(function (response) {
                  _this.stripe = response;
                  _this.elements = _this.stripe.elements();
                  _this.card = _this.elements.create("card", _this.stripeOptions); // Add an instance of the card Element into the `card-element` <div>.

                  _this.card.mount("#card-element");

                  document.getElementById("button-text").innerText = "Pay £" + _this.journey.total_due; // Handle real-time validation errors from the card Element.

                  _this.card.on("change", function (event) {
                    var displayError = document.getElementById("card-errors");

                    if (event.error) {
                      displayError.textContent = event.error.message;
                    } else if (event.complete) {
                      displayError.textContent = "";
                    } else {
                      displayError.textContent = "Card Number is incomplete/required.";
                    }
                  });
                })["finally"](function () {});

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Confirm Card Payment
    confirmCardPayment: function confirmCardPayment() {
      var _this2 = this;

      this.loading(true);
      this.isLoading = true; // Make a request to create payment intent

      axios.post("/repay-intent", {
        bookingId: this.journey.id,
        receipt_email: this.receipt_email,
        name: this.name_on_card
      }) // After creating payment intent
      .then(function (response) {
        _this2.clientSecret = response.data.client_secret;
        _this2.cardPayment = {
          success: false,
          error: false,
          errorText: null
        }; // Make a stripe request to confirm payment

        _this2.stripe.confirmCardPayment(_this2.clientSecret, {
          payment_method: {
            card: _this2.card,
            billing_details: {
              email: _this2.receipt_email,
              name: _this2.name_on_card
            }
          },
          receipt_email: _this2.receipt_email
        }).then(function (result) {
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            _this2.loading(false);

            _this2.cardPayment.error = true;
            _this2.cardPayment.errorText = result.error.message;
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === "succeeded") {
              // Update booking status from unpaid to pending
              axios.post("/confirmPayment", {
                bookingId: _this2.journey.id,
                paymentIntentId: result.paymentIntent.id
              }).then(function (response) {
                _this2.loading(false);

                _this2.cardPayment.success = true;
                Swal.fire({
                  icon: "success",
                  title: "Succeeded",
                  text: "Payment succeeded",
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "Finish"
                }).then(function (result) {
                  if (result.isConfirmed) {
                    window.location.reload();
                  }
                });
              });
            }
          }
        })["finally"](function () {
          _this2.isLoading = false;
        });
      });
    },
    // Payment button loading
    loading: function loading(isLoading) {
      if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector("#payment-submit-button").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
      } else {
        document.querySelector("#payment-submit-button").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
      }
    },

    /*
     * Validate Email using regx
     */
    validateEmail: function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  computed: {
    validatePaymentForm: function validatePaymentForm() {
      if (this.name_on_card === null || this.validateEmail(this.receipt_email) == false || this.card._complete === false) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function created() {
    var _this3 = this;

    this.isLoading = true;
    axios.post("/get-booking-info", {
      id: this.journey.id
    }).then(function (response) {
      _this3.journey = response.data;

      _this3.getStripe();
    })["catch"](function (error) {
      _this3.error.data.message = error.response.data.message;
    })["finally"](function () {
      _this3.isLoading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/New Payment.vue?vue&type=template&id=7321d56d&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/New Payment.vue?vue&type=template&id=7321d56d&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container mt-4" },
    [
      _c("loader", { attrs: { "is-loading": _vm.isLoading } }),
      _vm._v(" "),
      _c("h4", { staticClass: "text-center" }, [
        _vm._v("Please pay the remainig amount")
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm.error.data.message
        ? _c("div", { staticClass: "row d-flex justify-content-center" }, [
            _c(
              "div",
              {
                staticClass: "alert alert-dismissible alert-danger fade show",
                attrs: { role: "alert" }
              },
              [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.error.data.message) +
                    "\n            "
                ),
                _vm._m(1)
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "container d-flex flex-row justify-content-center mb-2"
        },
        [
          _vm.error.data.message == "" && _vm.journey.total_due > 0
            ? _c("div", { staticClass: "row mt-4 justify-content-center" }, [
                _c("div", { staticClass: "col-md-10 col-sm-12" }, [
                  _c("div", { staticClass: "card" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "form-group col-md-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-sm-12 col-form-label pl-0 pr-0 pl-0 pr-0"
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.journey.customer.email) +
                                "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-4" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-12 col-form-label pl-0 pr-0"
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.journey.customer.name) +
                                "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-4" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-12 col-form-label pl-0 pr-0"
                            },
                            [_vm._v("Mobile")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.journey.customer.mobile) +
                                "\n                                "
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-10 col-sm-12" }, [
                  _c("div", { staticClass: "card" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "form-group col-md-6" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-sm-12 col-form-label pl-0 pr-0 pl-0 pr-0"
                            },
                            [_vm._v("From")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(_vm._s(_vm.journey.from.text))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-6" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-12 col-form-label pl-0 pr-0"
                            },
                            [_vm._v("To")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(_vm._s(_vm.journey.to.text))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-6" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-sm-12 col-form-label text-danger font-italic pl-0 pr-0 pl-0 pr-0"
                            },
                            [_vm._v("Unpaid Amount")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "text-danger font-italic mb-0" },
                            [
                              _vm._v(
                                "\n                                    £" +
                                  _vm._s(_vm.journey.total_due) +
                                  "\n                                "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-6" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-12 col-form-label pl-0 pr-0"
                            },
                            [_vm._v("Journey Time")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  _vm._f("moment-with-time")(
                                    _vm.journey.journey_date
                                  )
                                ) +
                                "\n                                "
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-10 col-sm-12" }, [
                  _c("div", { staticClass: "card" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-row" }, [
                        _c(
                          "form",
                          {
                            staticClass: "container text-left",
                            attrs: { id: "payment-form" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.confirmCardPayment()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "payment-details" }, [
                              _c(
                                "div",
                                { staticClass: "form-group mb-2" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "required",
                                      attrs: { for: "name_on_card" }
                                    },
                                    [_vm._v("Name on Card")]
                                  ),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    attrs: {
                                      vid: "fullName",
                                      name: "Name",
                                      rules: "required"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-row align-items-center"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "col" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "input-group"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "input-group-prepend input-prepend"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "input-group-text"
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fa fa-user",
                                                                    attrs: {
                                                                      "aria-hidden":
                                                                        "true"
                                                                    }
                                                                  })
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.name_on_card,
                                                                expression:
                                                                  "\n                                                                name_on_card\n                                                            "
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-iconized",
                                                            attrs: {
                                                              type: "text",
                                                              autocomplete:
                                                                "off",
                                                              required: "",
                                                              autofocus: "",
                                                              id:
                                                                "name_on_card",
                                                              name:
                                                                "name_on_card",
                                                              placeholder:
                                                                "Ex: John",
                                                              onfocus:
                                                                "this.placeholder = ''",
                                                              onblur:
                                                                "this.placeholder = 'Ex: John'"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.name_on_card
                                                            },
                                                            on: {
                                                              blur: function(
                                                                $event
                                                              ) {
                                                                _vm.inputFieldFocused.paymentDetails.fullName = true
                                                              },
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.name_on_card =
                                                                  $event.target.value
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.inputFieldFocused
                                                .paymentDetails.fullName
                                                ? _c(
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
                                                : _vm._e()
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      262632897
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-2" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "required",
                                      attrs: { for: "receipt_email" }
                                    },
                                    [_vm._v("Email Address")]
                                  ),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    attrs: {
                                      vid: "email",
                                      name: "Email",
                                      rules: "required|email"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-row align-items-center"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "col" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "input-group"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "input-group-prepend input-prepend"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "input-group-text"
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-envelope",
                                                                    attrs: {
                                                                      "aria-hidden":
                                                                        "true"
                                                                    }
                                                                  })
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.receipt_email,
                                                                expression:
                                                                  "\n                                                                receipt_email\n                                                            "
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-iconized",
                                                            attrs: {
                                                              autocomplete:
                                                                "off",
                                                              type: "email",
                                                              required: "",
                                                              name:
                                                                "receipt_email",
                                                              id:
                                                                "receipt_email",
                                                              placeholder:
                                                                "Ex: john@example.com",
                                                              onfocus:
                                                                "this.placeholder = ''",
                                                              onblur:
                                                                "this.placeholder = 'Ex: john@example.com'"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.receipt_email
                                                            },
                                                            on: {
                                                              blur: function(
                                                                $event
                                                              ) {
                                                                _vm.inputFieldFocused.paymentDetails.email = true
                                                              },
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.receipt_email =
                                                                  $event.target.value
                                                              }
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.inputFieldFocused
                                                .paymentDetails.email
                                                ? _c(
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
                                                : _vm._e()
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      1363707689
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                attrs: { type: "hidden", name: "_token" },
                                domProps: { value: _vm.csrf }
                              }),
                              _vm._v(" "),
                              _vm._m(5),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "info-section border-left-danger my-2"
                                },
                                [
                                  _vm._v(
                                    "\n                                        Payment is non refundable.\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    id: "payment-submit-button",
                                    disabled: !_vm.validatePaymentForm
                                  }
                                },
                                [
                                  _c("div", {
                                    staticClass: "spinner hidden",
                                    attrs: { id: "spinner" }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { attrs: { id: "button-text" } })
                                ]
                              ),
                              _vm._v(" "),
                              _vm.cardPayment.error
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "alert alert-danger alert-dismissible fade show mt-2",
                                      attrs: { id: "card-error", role: "alert" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.cardPayment.errorText) +
                                          " "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticStyle: { color: "black" },
                                          attrs: {
                                            href: "#",
                                            onClick: "window.location.reload()"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                            Try again.\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "close alert-button",
                                          attrs: {
                                            type: "button",
                                            "data-dismiss": "alert",
                                            "aria-label": "Close"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.cardPayment.error = false
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              attrs: { "aria-hidden": "true" }
                                            },
                                            [_vm._v("×")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ]
      )
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title text-dark" }, [
        _vm._v(
          "\n                            Passenger Details\n                            "
        ),
        _c("i", { staticClass: "fas fa-user ml-1" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title text-dark" }, [
        _vm._v("\n                            Journey Details "),
        _c("i", { staticClass: "fas fa-car ml-1" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title text-dark" }, [
        _vm._v(
          "\n                            Payment Form\n                            "
        ),
        _c("i", { staticClass: "fas fa-credit-card ml-1" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { staticClass: "required", attrs: { for: "card-element" } }, [
        _vm._v(
          "\n                                            Credit or debit card\n                                        "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-control", attrs: { id: "card-element" } }),
      _vm._v(" "),
      _c("div", {
        staticClass: "text-danger font-italic",
        attrs: { id: "card-errors", role: "alert" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/New Payment.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/New Payment.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_Payment_vue_vue_type_template_id_7321d56d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New Payment.vue?vue&type=template&id=7321d56d&scoped=true& */ "./resources/js/pages/New Payment.vue?vue&type=template&id=7321d56d&scoped=true&");
/* harmony import */ var _New_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New Payment.vue?vue&type=script&lang=js& */ "./resources/js/pages/New Payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_Payment_vue_vue_type_template_id_7321d56d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_Payment_vue_vue_type_template_id_7321d56d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7321d56d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/New Payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/New Payment.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/New Payment.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./New Payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/New Payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/New Payment.vue?vue&type=template&id=7321d56d&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/New Payment.vue?vue&type=template&id=7321d56d&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Payment_vue_vue_type_template_id_7321d56d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./New Payment.vue?vue&type=template&id=7321d56d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/New Payment.vue?vue&type=template&id=7321d56d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Payment_vue_vue_type_template_id_7321d56d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_Payment_vue_vue_type_template_id_7321d56d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);