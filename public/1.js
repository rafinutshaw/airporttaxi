(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Booking Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Booking Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      journey: [{
        start: "",
        end: "",
        via: []
      }],
      dragging: false
    };
  },
  methods: {
    add: function add() {
      this.journey[0].via.push({
        name: ""
      });
    },
    removeVia: function removeVia(index) {
      this.journey[0].via.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Booking_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Booking Form */ "./resources/js/components/Booking Form.vue");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/About */ "./resources/js/pages/About.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BookingForm: _components_Booking_Form__WEBPACK_IMPORTED_MODULE_0__["default"],
    About: _pages_About__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-group[data-v-6f060eb6] {\r\n    margin-bottom: 0rem;\n}\nlabel[data-v-6f060eb6] {\r\n    margin-bottom: 0.2rem;\n}\n.fas[data-v-6f060eb6] {\r\n    font-size: 20px;\n}\n.col-lg-4.col-md-6.header-right[data-v-6f060eb6] {\r\n    max-width: 450px;\n}\n.header-right[data-v-6f060eb6] {\r\n    background-color: #f3f3f3eb;\r\n    box-shadow: 0px 4px 8px #999999a3;\r\n    border-radius: 8px;\r\n    padding: 35px;\r\n    margin-top: 100px;\n}\n.header-right .form-control[data-v-6f060eb6] {\r\n    font-size: 14px;\r\n    padding: 0.575rem 0.75rem;\r\n    background-color: #f3f3f3eb;\r\n    box-shadow: 0px 4px 8px #999999a3;\r\n    /* border: 1px solid #ced4da; */\n}\n.bookingFormLabel[data-v-6f060eb6] {\r\n    font-weight: 600;\r\n    font-size: 15px;\n}\n.form-group[data-v-6f060eb6] {\r\n    width: 100%;\n}\r\n/* .btn-primary {\r\n    background-color: #5856d6;\r\n    border-color: #5856d6;\r\n} */\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1.text-uppercase[data-v-b3c5cf30] {\r\n    color: #e2e1ff;\n}\na.primary-btn.text-uppercase[data-v-b3c5cf30] {\r\n    color: white;\r\n    background-color: #1eacc7;\r\n    border-radius: 5px;\n}\n.limoking-item-title-wrapper .limoking-item-title[data-v-b3c5cf30] {\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\n}\n.limoking-skin-dark-skin h1[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin h2[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin h3[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin h4[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin h5[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin h6[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin .limoking-skin-title[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin .limoking-skin-title a[data-v-b3c5cf30] {\r\n    color: #ffffff;\n}\n.limoking-skin-dark-skin *[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin .limoking-skin-border[data-v-b3c5cf30] {\r\n    border-color: #ffffff;\n}\n.limoking-item-title-center-icon-divider[data-v-b3c5cf30] {\r\n    display: inline-block;\r\n    width: 80px;\r\n    vertical-align: middle;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\n}\n.limoking-item-title-wrapper.limoking-center-icon-divider[data-v-b3c5cf30] {\r\n    text-align: center;\n}\n.limoking-color-wrapper[data-v-b3c5cf30],\r\n.limoking-parallax-wrapper[data-v-b3c5cf30] {\r\n    overflow: hidden;\r\n    background-position: center 0px;\r\n    background-repeat: repeat;\r\n    position: relative;\n}\n.limoking-item-title-wrapper.limoking-center-icon-divider.limoking-large\r\n    .limoking-nav-title[data-v-b3c5cf30],\r\n.limoking-item-title-wrapper.limoking-center-icon-divider.limoking-extra-large\r\n    .limoking-nav-title[data-v-b3c5cf30] {\r\n    font-size: 24px;\n}\n.limoking-skin-dark-skin i[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin .limoking-flex-prev[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin .limoking-flex-next[data-v-b3c5cf30] {\r\n    color: #ffffff;\r\n    font-size: large;\n}\n.limoking-item-title-wrapper.limoking-large .limoking-item-title-caption[data-v-b3c5cf30],\r\n.limoking-item-title-wrapper.limoking-large .limoking-item-title-link[data-v-b3c5cf30] {\r\n    word-spacing: 2px;\r\n    font-size: 18px;\r\n    font-weight: lighter;\n}\n.limoking-skin-dark-skin .limoking-skin-info[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin .limoking-skin-info a[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin .limoking-skin-info a[data-v-b3c5cf30]:hover {\r\n    color: #ffffff;\n}\n.limoking-item-title-wrapper .limoking-item-title-caption[data-v-b3c5cf30] {\r\n    margin-top: 12px;\n}\n.limoking-skin-dark-skin *[data-v-b3c5cf30],\r\n.limoking-skin-dark-skin .limoking-skin-border[data-v-b3c5cf30] {\r\n    border-color: #ffffff;\n}\n.row.section-title[data-v-b3c5cf30] {\r\n    flex-direction: column;\n}\nimg.card-img-top[data-v-b3c5cf30] {\r\n    max-height: 250px;\r\n    min-height: 250px;\r\n    /* border-radius: 10px 10px 0px 0px; */\r\n    background-size: cover;\r\n    background-position: center center;\r\n    position: relative;\n}\r\n\r\n/* Car Service */\n.ppb_car_type_grid.one.nopadding[data-v-b3c5cf30] {\r\n    margin-bottom: 60px;\r\n    width: 100%;\n}\n.page_content_wrapper[data-v-b3c5cf30] {\r\n    width: 100%;\n}\n.standard_wrapper[data-v-b3c5cf30] {\r\n    max-width: 1425px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    margin: auto;\r\n    padding: 0 90px;\n}\n.element.grid.classic3_cols.animated1[data-v-b3c5cf30] {\r\n    width: calc(33.33% - 20px);\r\n    margin-right: 30px;\r\n    margin-bottom: 30px;\r\n    box-sizing: border-box;\r\n    float: left;\n}\n.one_third.gallery3.grid.static.filterable.portfolio_type.themeborder[data-v-b3c5cf30] {\r\n    /* background-image: url(\"../../../public/img/Cars/Executive Car.jpg\"); */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\n}\r\n\r\n/* Image Card For Car Services  */\n.grow[data-v-b3c5cf30] {\r\n    transition: all 0.2s ease-in-out;\n}\n.grow[data-v-b3c5cf30]:hover {\r\n    transform: scale(1.05);\n}\n.card[data-v-b3c5cf30] {\r\n    justify-content: space-evenly;\r\n    border: 0.2px solid #f9f3f3;\r\n    min-height: 500px;\r\n    max-height: 500px;\r\n    margin-bottom: 60px;\r\n    transition: all 0.2s ease-in-out;\n}\n.card[data-v-b3c5cf30]:hover {\r\n    transform: translateY(-10px) scale(1.02);\r\n    box-shadow: 1px 5px 8px 2px #dee2e6;\n}\n.card-body[data-v-b3c5cf30] {\r\n    min-height: 250px;\n}\n.card .text-white[data-v-b3c5cf30] {\r\n    margin: 20px;\n}\n.card-img[data-v-b3c5cf30] {\r\n    min-height: 300px;\r\n    min-width: 206px;\r\n    border-radius: 5px;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    position: relative;\r\n    background-color: #f9f9f9;\n}\r\n/* Car Service  */\r\n\r\n/* Best Expericnce  */\n.limoking-skin-darkblue[data-v-b3c5cf30],\r\n.limoking-skin-darkblue .limoking-skin-content[data-v-b3c5cf30] {\r\n    color: #c9c9c9;\n}\n.limoking-skin-darkblue *[data-v-b3c5cf30],\r\n.limoking-skin-darkblue .limoking-skin-border[data-v-b3c5cf30] {\r\n    border-color: #1eacc7;\n}\n.six[data-v-b3c5cf30] {\r\n    width: 50%;\n}\n.limoking-item[data-v-b3c5cf30] {\r\n    margin: 0px 15px 20px;\r\n    min-height: 1px;\n}\n.limoking-about-us-item.limoking-with-divider .about-us-title[data-v-b3c5cf30] {\r\n    font-size: 35px;\r\n    margin-bottom: 24px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\n}\n.limoking-skin-darkblue h1[data-v-b3c5cf30],\r\n.limoking-skin-darkblue h2[data-v-b3c5cf30],\r\n.limoking-skin-darkblue h3[data-v-b3c5cf30],\r\n.limoking-skin-darkblue h4[data-v-b3c5cf30],\r\n.limoking-skin-darkblue h5[data-v-b3c5cf30],\r\n.limoking-skin-darkblue h6[data-v-b3c5cf30],\r\n.limoking-skin-darkblue .limoking-skin-title[data-v-b3c5cf30],\r\n.limoking-skin-darkblue .limoking-skin-title a[data-v-b3c5cf30] {\r\n    color: #ffffff;\n}\n.limoking-about-us-item.limoking-with-divider .about-us-title-divider[data-v-b3c5cf30] {\r\n    max-width: 100%;\r\n    width: 135px;\r\n    border-bottom-width: 0px;\r\n    border-style: solid;\r\n    margin-bottom: 30px;\n}\n.limoking-skin-darkblue *[data-v-b3c5cf30],\r\n.limoking-skin-darkblue .limoking-skin-border[data-v-b3c5cf30] {\r\n    border-color: #1eacc7;\n}\n.limoking-skin-darkblue[data-v-b3c5cf30],\r\n.limoking-skin-darkblue .limoking-skin-content[data-v-b3c5cf30] {\r\n    color: #c9c9c9;\n}\n.limoking-about-us-item.limoking-with-divider .limoking-button[data-v-b3c5cf30] {\r\n    margin-top: 9px;\r\n    border-radius: 4px;\n}\n.limoking-skin-darkblue .limoking-button[data-v-b3c5cf30],\r\n.limoking-skin-darkblue .limoking-button[data-v-b3c5cf30]:hover,\r\n.limoking-skin-darkblue input[type=\"button\"][data-v-b3c5cf30],\r\n.limoking-skin-darkblue input[type=\"submit\"][data-v-b3c5cf30] {\r\n    color: #ffffff;\r\n    background-color: #1eacc7;\n}\n.limoking-button.large[data-v-b3c5cf30] {\r\n    font-size: 15px;\r\n    padding: 15px 28px;\n}\r\n\r\n/* Price Range  */\n.limoking-stunning-item.limoking-item[data-v-b3c5cf30] {\r\n    display: table;\r\n    width: 100%;\r\n    margin-bottom: 0px;\r\n    margin: 30px 0px 20px 0px;\r\n    justify-content: space-evenly;\n}\n.limoking-stunning-item .stunning-item-content[data-v-b3c5cf30] {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    color: white;\n}\n.limoking-stunning-item .stunning-item-title[data-v-b3c5cf30] {\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n    margin-right: 20px;\r\n    display: inline;\n}\n.stunning-item-content.col-md-10[data-v-b3c5cf30] {\r\n    padding-bottom: 20px;\r\n    padding-left: 0px;\r\n    left: -15px;\n}\n.stunning-item-button.limoking-info-font[data-v-b3c5cf30] {\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    line-height: 42px;\r\n    display: table-cell;\r\n    font-size: 16px;\r\n    border-radius: 4px;\n}\r\n/* .stunning-item-button.limoking-info-font:hover {\r\n    background-color: #06c4ea;\r\n    color: white;\r\n    border: 1px solid #05badd;\r\n} */\r\n/* Our Services  */\n.limoking-title-item .limoking-item-title-wrapper.limoking-item[data-v-b3c5cf30] {\r\n    margin-bottom: 0px;\n}\n.limoking-item-title-wrapper.limoking-center-divider[data-v-b3c5cf30] {\r\n    text-align: center;\n}\n.limoking-item-title-wrapper.limoking-item[data-v-b3c5cf30] {\r\n    margin-bottom: 30px;\r\n    position: relative;\n}\n.limoking-item-title-wrapper.limoking-center-divider\r\n    .limoking-item-title-head-inner[data-v-b3c5cf30] {\r\n    position: relative;\n}\n.limoking-item-title-center-divider.limoking-left[data-v-b3c5cf30] {\r\n    right: 50%;\r\n    margin-left: 25px;\n}\n.limoking-item-title-center-divider[data-v-b3c5cf30] {\r\n    position: absolute;\r\n    top: 50%;\r\n    display: none;\r\n    width: 80px;\r\n    border-bottom: 0px;\r\n    border-bottom-color: currentcolor;\r\n    border-bottom-style: none;\r\n    border-style: solid;\n}\n.limoking-item-title-wrapper.limoking-center-divider .limoking-item-title[data-v-b3c5cf30] {\r\n    display: inline-block;\n}\n.limoking-item-title-center-divider.limoking-right[data-v-b3c5cf30] {\r\n    left: 50%;\r\n    margin-right: 25px;\n}\n.limoking-item-title-wrapper.limoking-medium .limoking-item-title[data-v-b3c5cf30] {\r\n    font-size: 26px;\r\n    line-height: 34px;\n}\n.four[data-v-b3c5cf30] {\r\n    width: 33.333%;\n}\n.limoking-item[data-v-b3c5cf30] {\r\n    margin: 0px 15px 20px;\r\n    margin-bottom: 20px;\r\n    min-height: 1px;\n}\n.limoking-column-service-item.limoking-medium .column-service-image[data-v-b3c5cf30] {\r\n    max-width: 50px;\n}\n.limoking-column-service-item .column-service-image[data-v-b3c5cf30] {\r\n    float: left;\r\n    margin-right: 32px;\n}\n.limoking-column-service-item .column-service-content-wrapper[data-v-b3c5cf30] {\r\n    overflow: hidden;\n}\n.limoking-column-service-item.limoking-medium .column-service-title[data-v-b3c5cf30] {\r\n    font-size: 17px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\n}\n.limoking-column-service-item .column-service-title[data-v-b3c5cf30] {\r\n    margin-bottom: 25px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 20px;\n}\n.column-service-title[data-v-b3c5cf30] {\r\n    color: #444444;\n}\n.column-service-content[data-v-b3c5cf30] {\r\n    color: #909090;\n}\n@media only screen and (max-width: 335px) {\n#book-now[data-v-b3c5cf30] {\r\n        display: table;\r\n        max-width: 50px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Booking Form.vue?vue&type=template&id=6f060eb6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Booking Form.vue?vue&type=template&id=6f060eb6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "header-right" }, [
    _c("h4", { staticClass: "pb-10" }, [_vm._v("BOOK ONLINE")]),
    _vm._v(" "),
    _c("div", { staticStyle: { "text-align": "left" } }, [
      _c(
        "form",
        { staticClass: "container", attrs: { id: "bookingForm" } },
        [
          _vm._l(_vm.journey, function(item, index) {
            return _c("div", { key: index }, [
              _c("div", { staticClass: "mb-2" }, [
                _c(
                  "label",
                  { staticClass: "bookingFormLabel", attrs: { for: "Start" } },
                  [_vm._v("Start")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group input-group" }, [
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.start,
                        expression: "item.start"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "Start",
                      id: "Start",
                      "aria-describedby": "helpId",
                      placeholder: "e.g. Heathrow Airport or AA11AA"
                    },
                    domProps: { value: item.start },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(item, "start", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !index && item.via.length > 0,
                      expression: "!index && item.via.length > 0"
                    }
                  ],
                  staticClass: "form-group input-group"
                },
                [
                  _c(
                    "draggable",
                    {
                      staticClass: "form-group",
                      attrs: { tag: "div", list: item.via, handle: ".handle" }
                    },
                    _vm._l(item.via, function(viaItem, viaIndex) {
                      return _c("div", { key: viaIndex }, [
                        _c("div", { staticClass: "mb-2" }, [
                          _c(
                            "label",
                            {
                              staticClass: "bookingFormLabel",
                              attrs: { for: "Via" }
                            },
                            [_vm._v("Via")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group input-group" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c("div", { staticClass: "input-group-text" }, [
                                _c("i", {
                                  staticClass: "fa fa-align-justify handle"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: viaItem.name,
                                  expression: "viaItem.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "Via",
                                id: "Via",
                                placeholder:
                                  "e.g. InterContinental London Park Lane",
                                "aria-describedby": "helpId"
                              },
                              domProps: { value: viaItem.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(viaItem, "name", $event.target.value)
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-danger",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.removeVia(viaIndex)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Remove\n                            "
                            )
                          ]
                        )
                      ])
                    }),
                    0
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c(
                  "label",
                  { staticClass: "bookingFormLabel", attrs: { for: "End" } },
                  [_vm._v("End")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group input-group" }, [
                  _vm._m(1, true),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: item.end,
                        expression: "item.end"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "End",
                      id: "End",
                      placeholder: "e.g. AA11AA or Heathrow Airport",
                      "aria-describedby": "helpId"
                    },
                    domProps: { value: item.end },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(item, "end", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ])
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary mt-2",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.add($event)
                }
              }
            },
            [_vm._v("\n                Add\n            ")]
          )
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fas fa-map-marker-alt" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fas fa-map-marker-alt" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "section",
        { staticClass: "banner-area relative", attrs: { id: "home" } },
        [
          _c("div", { staticClass: "overlay overlay-bg" }),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                staticClass:
                  "row fullscreen d-flex align-items-center justify-content-between",
                staticStyle: { height: "966px" }
              },
              [
                _c(
                  "div",
                  { staticClass: "col-lg-5 col-md-6" },
                  [_c("booking-form")],
                  1
                ),
                _vm._v(" "),
                _vm._m(0)
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("about"),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-content col-lg-4 col-md-5" }, [
      _c("h6", { staticClass: "text-white " }, [
        _vm._v("Need a ride? just call")
      ]),
      _vm._v(" "),
      _c("h1", { staticClass: "text-uppercase" }, [
        _vm._v("\n                        911 999 911\n                    ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "pt-10 pb-10 text-white" }, [
        _vm._v(
          "\n                        Whether you enjoy city breaks or extended holidays\n                        in the sun, you can always improve your travel\n                        experiences by staying in a small.\n                    "
        )
      ]),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "primary-btn text-uppercase", attrs: { href: "#" } },
        [_vm._v("Call for taxi")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "services-area pb-50 pt-50" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row section-title" }, [
          _c("h1", [_vm._v("Find Car by Type")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                    We offer professional car rental services in our range\n                    of high-end vehicles.\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6 col-lg-4" }, [
            _c(
              "div",
              { staticClass: "card-deck border-0 transform-on-hover" },
              [
                _c("div", { staticClass: "card" }, [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! ../../../public/img/Cars/Saloon Car.jpeg */ "./public/img/Cars/Saloon Car.jpeg"),
                      alt: "..."
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("Saloon Car")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "\n                                    Ford Mondeo, VW Passat or similar. These\n                                    can accommodate up to 3 passengers plus\n                                    3 suitcases (20kg max) or 4 passengers\n                                    plus hand luggage. Any more luggage than\n                                    this will require a larger vehicle.\n                                "
                      )
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-4" }, [
            _c(
              "div",
              { staticClass: "card-deck border-0 transform-on-hover" },
              [
                _c("div", { staticClass: "card" }, [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! ../../../public/img/Cars/Estate Car.jpg */ "./public/img/Cars/Estate Car.jpg"),
                      alt: "..."
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("Estate Car")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "\n                                    Volvo Estate, VW Passat or similar.\n                                    These can accommodate up to 4 passengers\n                                    plus 4 suitcases (20kg max). Any more\n                                    luggage than this will require a larger\n                                    vehicle.\n                                "
                      )
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-4" }, [
            _c(
              "div",
              { staticClass: "card-deck border-0 transform-on-hover" },
              [
                _c("div", { staticClass: "card" }, [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! ../../../public/img/Cars/People Carrier.jpg */ "./public/img/Cars/People Carrier.jpg"),
                      alt: "..."
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("People Carrier")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "\n                                    VW Sharan, Ford Galaxy or similar. These\n                                    can accommodate up to 5 passengers plus\n                                    5 suitcases (20kg max) or 6 passengers\n                                    plus hand luggage. Any more luggage than\n                                    this will require a larger vehicle.\n                                "
                      )
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-4" }, [
            _c(
              "div",
              { staticClass: "card-deck border-0 transform-on-hover" },
              [
                _c("div", { staticClass: "card" }, [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! ../../../public/img/Cars/Executive Car.jpg */ "./public/img/Cars/Executive Car.jpg"),
                      alt: "..."
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("Executive Car")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "\n                                    E Class Mercedes or similar. These can\n                                    accommodate up to 3 passengers plus 3\n                                    suitcases (20kg max) or 4 passengers\n                                    plus hand luggage. Any more luggage than\n                                    this will require a larger vehicle.\n                                "
                      )
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-4" }, [
            _c(
              "div",
              { staticClass: "card-deck border-0 transform-on-hover" },
              [
                _c("div", { staticClass: "card" }, [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! ../../../public/img/Cars/Executive People Carrier.jpg */ "./public/img/Cars/Executive People Carrier.jpg"),
                      alt: "..."
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v(
                        "\n                                    Executive People Carrier\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "\n                                    Mercedes Viano or similar. These can\n                                    accommodate up to 5 passengers plus 5\n                                    suitcases (20kg max) or 6 passengers\n                                    plus hand luggage. Any more luggage than\n                                    this will require a larger vehicle.\n                                "
                      )
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-4" }, [
            _c(
              "div",
              { staticClass: "card-deck border-0 transform-on-hover" },
              [
                _c("div", { staticClass: "card" }, [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! ../../../public/img/Cars/8 Seater Minibus.jpg */ "./public/img/Cars/8 Seater Minibus.jpg"),
                      alt: "..."
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("8 Seater Minibus")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "\n                                    VW Transporter or similar. These can\n                                    accommodate 8 passengers plus up to 8\n                                    suitcases (20kg max). Any more luggage\n                                    than this will require a larger vehicle.\n                                "
                      )
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("section", { attrs: { id: "content-section-4" } }, [
        _c(
          "div",
          {
            staticClass:
              "limoking-parallax-wrapper limoking-background-image gdlr-show-all limoking-skin-darkblue",
            staticStyle: {
              "background-image": "url('img/asset 46.jpeg')",
              "padding-top": "95px",
              "padding-bottom": "50px"
            },
            attrs: { id: "limoking-parallax-wrapper-2", "data-bgspeed": "0" }
          },
          [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "six columns" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "limoking-item limoking-about-us-item limoking-with-divider"
                  },
                  [
                    _c("div", { staticClass: "about-us-title-wrapper" }, [
                      _c("h3", { staticClass: "about-us-title" }, [
                        _vm._v(
                          "\n                                    We promise, you will have the best\n                                    experience\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "about-us-title-divider" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "about-us-content-wrapper" }, [
                      _c(
                        "div",
                        {
                          staticClass: "about-us-content limoking-skin-content"
                        },
                        [
                          _c("p", { staticClass: "mb-50" }, [
                            _vm._v(
                              "\n                                        Sed posuere consectetur est at\n                                        lobortis. Cum sociis natoque\n                                        penatibus et magnis dis parturient\n                                        montes, nascetur ridiculus mus.\n                                        Nullam quis risus eget urna mollis\n                                        ornare vel eu leo. Cras mattis\n                                        consectetur purus sit amet\n                                        fermentum.\n                                    "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "primary-btn",
                          attrs: { id: "book-now", href: "contact-page.html" }
                        },
                        [_vm._v("Book Now")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "clear" })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "clear" })
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "clear" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { attrs: { id: "content-section-5" } }, [
      _c(
        "div",
        {
          staticClass:
            "limoking-color-wrapper  gdlr-show-all limoking-skin-dark-skin",
          staticStyle: {
            "background-color": "#1eacc7",
            "padding-top": "0px",
            "padding-bottom": "0px"
          }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                staticClass:
                  "limoking-item limoking-stunning-item row d-flex justify-content-between"
              },
              [
                _c("div", { staticClass: "stunning-item-content col-md-8" }, [
                  _c("h2", { staticClass: "stunning-item-title" }, [
                    _vm._v(
                      "\n                            What about pricing?\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "stunning-item-caption limoking-skin-content"
                    },
                    [
                      _vm._v(
                        "\n                            Don’t worry. We provide very nice deals and the\n                            most competative price just for you!\n                        "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-4 d-flex justify-content-center" },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "stunning-item-button limoking-info-font align-self-center",
                        staticStyle: { color: "#fff", background: "#009fbd" },
                        attrs: { href: "service-rates.html" }
                      },
                      [_vm._v("Check Rates")]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "clear" }),
            _vm._v(" "),
            _c("div", { staticClass: "clear" })
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "clear" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "our-services" }, [
      _c(
        "div",
        {
          staticClass:
            "limoking-parallax-wrapper limoking-background-image gdlr-show-all limoking-skin-dark-skin pb-40",
          staticStyle: {
            "background-image": "url('img/asset 47.jpeg')",
            "padding-top": "70px"
          },
          attrs: { id: "limoking-parallax-wrapper-3", "data-bgspeed": "0" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "limoking-title-item" }, [
              _c(
                "div",
                {
                  staticClass:
                    "limoking-item-title-wrapper limoking-item  limoking-center-divider limoking-medium "
                },
                [
                  _c(
                    "div",
                    { staticClass: "limoking-item-title-container container" },
                    [
                      _c(
                        "div",
                        { staticClass: "limoking-item-title-head-inner" },
                        [
                          _c("div", {
                            staticClass:
                              "limoking-item-title-center-divider limoking-left",
                            staticStyle: {
                              display: "block",
                              "margin-right": "126.5px"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "h3",
                            {
                              staticClass:
                                "limoking-item-title limoking-skin-title limoking-skin-border"
                            },
                            [
                              _vm._v(
                                "\n                                    Our Services\n                                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass:
                              "limoking-item-title-center-divider limoking-right",
                            staticStyle: {
                              display: "block",
                              "margin-left": "126.5px"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "limoking-item-title-caption limoking-skin-info"
                        },
                        [
                          _vm._v(
                            "\n                                What Services we offer to our clients\n                            "
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "clear" }),
            _vm._v(" "),
            _c("div", { staticClass: "clear" })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "limoking-color-wrapper  gdlr-show-all no-skin d-flex justify-content-center",
          staticStyle: {
            "background-color": "#ffffff",
            "padding-top": "70px",
            "padding-bottom": "20px"
          }
        },
        [
          _c("div", { staticClass: "container row" }, [
            _c("div", { staticClass: "four columns col-md-4 col-12" }, [
              _c("div", { staticClass: "limoking-ux column-service-ux" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "limoking-item limoking-column-service-item limoking-medium",
                    staticStyle: { "margin-bottom": "40px" }
                  },
                  [
                    _c("div", { staticClass: "column-service-image" }, [
                      _c("img", {
                        attrs: {
                          src: "img/asset 18.png",
                          alt: "",
                          width: "41",
                          height: "46"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column-service-content-wrapper" },
                      [
                        _c("h3", { staticClass: "column-service-title" }, [
                          _vm._v(
                            "\n                                    Night Parties\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "column-service-content limoking-skin-content"
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "\n                                        Limos King offers superb lim service\n                                        in New York and Manhatatan.  We\n                                        are the most popular and has been\n                                        chosen by many important people. We\n                                        also provide premier service to the\n                                        airport, wedding, casino, sport\n                                        event, proms etc.\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "four columns col-md-4 col-12" }, [
              _c("div", { staticClass: "limoking-ux column-service-ux" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "limoking-item limoking-column-service-item limoking-medium",
                    staticStyle: { "margin-bottom": "40px" }
                  },
                  [
                    _c("div", { staticClass: "column-service-image" }, [
                      _c("img", {
                        attrs: {
                          src: "img/asset 19.png",
                          alt: "",
                          width: "41",
                          height: "46"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column-service-content-wrapper" },
                      [
                        _c("h3", { staticClass: "column-service-title" }, [
                          _vm._v(
                            "\n                                    Weddings\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "column-service-content limoking-skin-content"
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "\n                                        Limos King offers superb lim service\n                                        in New York and Manhatatan.  We\n                                        are the most popular and has been\n                                        chosen by many important people. We\n                                        also provide premier service to the\n                                        airport, wedding, casino, sport\n                                        event, proms etc.\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "four columns col-md-4 col-12" }, [
              _c("div", { staticClass: "limoking-ux column-service-ux" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "limoking-item limoking-column-service-item limoking-medium",
                    staticStyle: { "margin-bottom": "40px" }
                  },
                  [
                    _c("div", { staticClass: "column-service-image" }, [
                      _c("img", {
                        attrs: {
                          src: "img/asset 20.png",
                          alt: "",
                          width: "41",
                          height: "46"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column-service-content-wrapper" },
                      [
                        _c("h3", { staticClass: "column-service-title" }, [
                          _vm._v(
                            "\n                                    Casinos\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "column-service-content limoking-skin-content"
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "\n                                        Limos King offers superb lim service\n                                        in New York and Manhatatan. We are\n                                        the most popular and has been chosen\n                                        by many important people. We also\n                                        provide premier service to the\n                                        airport, wedding, casino, sport\n                                        event, proms etc.\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "clear" }),
            _vm._v(" "),
            _c("div", { staticClass: "four columns col-md-4 col-12" }, [
              _c("div", { staticClass: "limoking-ux column-service-ux" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "limoking-item limoking-column-service-item limoking-medium",
                    staticStyle: { "margin-bottom": "40px" }
                  },
                  [
                    _c("div", { staticClass: "column-service-image" }, [
                      _c("img", {
                        attrs: {
                          src: "img/asset 21.png",
                          alt: "",
                          width: "41",
                          height: "46"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column-service-content-wrapper" },
                      [
                        _c("h3", { staticClass: "column-service-title" }, [
                          _vm._v(
                            "\n                                    Birthdays\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "column-service-content limoking-skin-content"
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "\n                                        Limos King offers superb lim service\n                                        in New York and Manhatatan.  We\n                                        are the most popular and has been\n                                        chosen by many important people. We\n                                        also provide premier service to the\n                                        airport, wedding, casino, sport\n                                        event, proms etc.\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "four columns col-md-4 col-12" }, [
              _c("div", { staticClass: "limoking-ux column-service-ux" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "limoking-item limoking-column-service-item limoking-medium",
                    staticStyle: { "margin-bottom": "40px" }
                  },
                  [
                    _c("div", { staticClass: "column-service-image" }, [
                      _c("img", {
                        attrs: {
                          src: "img/asset 22.png",
                          alt: "",
                          width: "41",
                          height: "46"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column-service-content-wrapper" },
                      [
                        _c("h3", { staticClass: "column-service-title" }, [
                          _vm._v("Proms")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "column-service-content limoking-skin-content"
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "\n                                        Limos King offers superb lim service\n                                        in New York and Manhatatan.  We\n                                        are the most popular and has been\n                                        chosen by many important people. We\n                                        also provide premier service to the\n                                        airport, wedding, casino, sport\n                                        event, proms etc.\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "four columns col-md-4 col-12" }, [
              _c("div", { staticClass: "limoking-ux column-service-ux" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "limoking-item limoking-column-service-item limoking-medium",
                    staticStyle: { "margin-bottom": "40px" }
                  },
                  [
                    _c("div", { staticClass: "column-service-image" }, [
                      _c("img", {
                        attrs: {
                          src: "img/asset 23.png",
                          alt: "",
                          width: "41",
                          height: "46"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "column-service-content-wrapper" },
                      [
                        _c("h3", { staticClass: "column-service-title" }, [
                          _vm._v(
                            "\n                                    Airport Transfers\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "column-service-content limoking-skin-content"
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "\n                                        Limos King offers superb lim service\n                                        in New York and Manhatatan.  We\n                                        are the most popular and has been\n                                        chosen by many important people. We\n                                        also provide premier service to the\n                                        airport, wedding, casino, sport\n                                        event, proms etc.\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "clear" })
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./public/img/Cars/8 Seater Minibus.jpg":
/*!**********************************************!*\
  !*** ./public/img/Cars/8 Seater Minibus.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/8 Seater Minibus.jpg?f6b8da640632560afbabd44adec74a6a";

/***/ }),

/***/ "./public/img/Cars/Estate Car.jpg":
/*!****************************************!*\
  !*** ./public/img/Cars/Estate Car.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Estate Car.jpg?102d706044d609dd6c39edf207fadadf";

/***/ }),

/***/ "./public/img/Cars/Executive Car.jpg":
/*!*******************************************!*\
  !*** ./public/img/Cars/Executive Car.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Executive Car.jpg?bfa29af7796fbc742ec20f01134c7d24";

/***/ }),

/***/ "./public/img/Cars/Executive People Carrier.jpg":
/*!******************************************************!*\
  !*** ./public/img/Cars/Executive People Carrier.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Executive People Carrier.jpg?9c53cacffcacc23385f0a30d7e28c109";

/***/ }),

/***/ "./public/img/Cars/People Carrier.jpg":
/*!********************************************!*\
  !*** ./public/img/Cars/People Carrier.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/People Carrier.jpg?3254032cd15019df67082007f254d3a6";

/***/ }),

/***/ "./public/img/Cars/Saloon Car.jpeg":
/*!*****************************************!*\
  !*** ./public/img/Cars/Saloon Car.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Saloon Car.jpeg?0d16731b3518e2f10e511c24c2d059d3";

/***/ }),

/***/ "./resources/js/components/Booking Form.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Booking Form.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Booking_Form_vue_vue_type_template_id_6f060eb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking Form.vue?vue&type=template&id=6f060eb6&scoped=true& */ "./resources/js/components/Booking Form.vue?vue&type=template&id=6f060eb6&scoped=true&");
/* harmony import */ var _Booking_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Booking Form.vue?vue&type=script&lang=js& */ "./resources/js/components/Booking Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Booking_Form_vue_vue_type_style_index_0_id_6f060eb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css& */ "./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Booking_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Booking_Form_vue_vue_type_template_id_6f060eb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Booking_Form_vue_vue_type_template_id_6f060eb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f060eb6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Booking Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Booking Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Booking Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Booking Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Booking Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_style_index_0_id_6f060eb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Booking Form.vue?vue&type=style&index=0&id=6f060eb6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_style_index_0_id_6f060eb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_style_index_0_id_6f060eb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_style_index_0_id_6f060eb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_style_index_0_id_6f060eb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_style_index_0_id_6f060eb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Booking Form.vue?vue&type=template&id=6f060eb6&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Booking Form.vue?vue&type=template&id=6f060eb6&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_template_id_6f060eb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Booking Form.vue?vue&type=template&id=6f060eb6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Booking Form.vue?vue&type=template&id=6f060eb6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_template_id_6f060eb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_Form_vue_vue_type_template_id_6f060eb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30&scoped=true& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& */ "./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b3c5cf30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);