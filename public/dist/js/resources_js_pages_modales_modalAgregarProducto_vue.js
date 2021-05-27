(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_modales_modalAgregarProducto_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//const axios = require('axios');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.getProducts(), this.getBodegas();
  },
  components: {
    modal: function modal() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_modal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/modal.vue */ "./resources/js/components/modal.vue"));
    }
  },
  data: function data() {
    return {
      value: '',
      productsData: '',
      bodegasData: '',
      idProducto: '',
      idBodega: '',
      cantidad: 0,
      respons: '',
      DataInventary: {
        'id_bodega': '',
        'cantidad': '',
        'id_producto': ''
      }
    };
  },
  computed: {
    total: function total() {
      return Number(this.cantidad);
    }
  },
  methods: {
    toggle: function toggle() {
      this.$refs.agregarProducto.toggle(), this.getProducts(), this.getBodegas();
    },
    getProducts: function getProducts() {
      var _this = this;

      //this.productsData = '';
      var urlProducts = 'api/products';
      axios.get(urlProducts).then(function (response) {
        _this.productsData = response.data.tasks.data;
      });
    },
    getBodegas: function getBodegas() {
      var _this2 = this;

      //this.bodegasData = '';
      var urlProducts = 'api/bodegas';
      axios.get(urlProducts).then(function (response) {
        _this2.bodegasData = response.data.Data.data;
      });
    },
    AddInventario: function AddInventario() {
      var _this3 = this;

      var url = '/inventario';
      this.DataInventary.cantidad = this.cantidad;
      this.DataInventary.id_bodega = this.idBodega;
      this.DataInventary.id_producto = this.idProducto;
      axios.post(url, {
        cantidad: this.cantidad,
        id_bodega: this.idBodega,
        id_producto: this.idProducto
      }).then(function (response) {
        _this3.respons = response.data.Config;
      })["catch"](function (error) {
        _this3.errors = error.response.data;
      });
      this.Review();
    },
    Review: function Review() {
      this.$refs.agregarProducto.toggle();
      this.getBodegas();
      this.cantidad = 0;
      this.idBodega = '';
      this.idProducto = '';
      this.errors = [];
      console.log('has come ', this.respons);

      if (this.respons === 'error-data') {
        alert('Possible Error');
        this.respons = '';
      } else {
        alert('Successfull');
        this.respons = '';
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/modales/modalAgregarProducto.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/modales/modalAgregarProducto.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalAgregarProducto_vue_vue_type_template_id_3170d1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalAgregarProducto.vue?vue&type=template&id=3170d1cf&scoped=true& */ "./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=template&id=3170d1cf&scoped=true&");
/* harmony import */ var _modalAgregarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAgregarProducto.vue?vue&type=script&lang=js& */ "./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _modalAgregarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _modalAgregarProducto_vue_vue_type_template_id_3170d1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _modalAgregarProducto_vue_vue_type_template_id_3170d1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3170d1cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/modales/modalAgregarProducto.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAgregarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modalAgregarProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAgregarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=template&id=3170d1cf&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=template&id=3170d1cf&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAgregarProducto_vue_vue_type_template_id_3170d1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAgregarProducto_vue_vue_type_template_id_3170d1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAgregarProducto_vue_vue_type_template_id_3170d1cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modalAgregarProducto.vue?vue&type=template&id=3170d1cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=template&id=3170d1cf&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=template&id=3170d1cf&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalAgregarProducto.vue?vue&type=template&id=3170d1cf&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    {
      ref: "agregarProducto",
      attrs: { titulo: "Agregar producto", tamano: "modal-lg" }
    },
    [
      _c("div", { staticClass: "row mx-0 my-3" }, [
        _c(
          "div",
          { staticClass: "col-5" },
          [
            _c("label", [_vm._v("Bodega")]),
            _vm._v(" "),
            _c(
              "el-select",
              {
                staticClass: "w-100",
                attrs: { placeholder: "Select" },
                model: {
                  value: _vm.idBodega,
                  callback: function($$v) {
                    _vm.idBodega = $$v
                  },
                  expression: "idBodega"
                }
              },
              _vm._l(_vm.bodegasData, function(bodegaIn) {
                return bodegaIn.EstadoBodegas === 1
                  ? _c("el-option", {
                      attrs: {
                        label: bodegaIn.nombre,
                        value: bodegaIn.BodegaId
                      }
                    })
                  : _vm._e()
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-5" },
          [
            _c("label", [_vm._v("Producto")]),
            _vm._v(" "),
            _c(
              "el-select",
              {
                staticClass: "w-100",
                attrs: { placeholder: "Select" },
                model: {
                  value: _vm.idProducto,
                  callback: function($$v) {
                    _vm.idProducto = $$v
                  },
                  expression: "idProducto"
                }
              },
              _vm._l(_vm.productsData, function(productIn) {
                return productIn.estado === 1
                  ? _c("el-option", {
                      attrs: { label: productIn.nombre, value: productIn.id }
                    })
                  : _vm._e()
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-2" }, [
          _c("label", [_vm._v("Cantidad")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.number",
                value: _vm.cantidad,
                expression: "cantidad",
                modifiers: { number: true }
              }
            ],
            staticClass: "form-control",
            attrs: { type: "number", name: "", value: "" },
            domProps: { value: _vm.cantidad },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.cantidad = _vm._n($event.target.value)
              },
              blur: function($event) {
                return _vm.$forceUpdate()
              }
            }
          }),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c("input", {
            staticClass: "btn btn-danger",
            attrs: { type: "button", name: "", value: "Guardar" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.AddInventario()
              }
            }
          })
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);