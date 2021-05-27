(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_modales_modalTransferirProducto_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    //this.getProducts(),
    this.getBodegas();
  },
  components: {
    modal: function modal() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_modal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/modal.vue */ "./resources/js/components/modal.vue"));
    }
  },
  data: function data() {
    return {
      errors: [],
      value: 0,
      max: '',
      bodegasData: '',
      BodegaSalida: '',
      BodegaDestino: '',
      InventariosData: '',
      CantidadMovil: '',
      CantidadTotal: 0,
      DataTransfers: {
        'id_bodega_origen': '',
        'id_bodega_destino': '',
        'id_inventario': '',
        'cantidad': '',
        'sobrante': '',
        'id_producto': ''
      },
      DataComplete: []
    };
  },
  methods: {
    CreateTraspaso: function CreateTraspaso() {
      var _this = this;

      if (this.BodegaSalida === '' || this.BodegaDestino === '') {
        alert('Tiene Campos Vacios');
      } else if (this.value === 0) {
        alert('Seleccione Producto');
      } else if (this.CantidadTotal === 0) {
        alert('Ingrese Cantidad');
      } else {
        if (confirm('Estas seguro de que deseas hacer el traspaso')) {
          var urlUpdate = 'api/inventario_update';
          this.DataComplete[1] = parseInt(this.DataComplete[1]);
          this.CantidadTotal = parseInt(this.CantidadTotal);
          var sobrante = this.DataComplete[1] - this.CantidadTotal;
          this.DataTransfers.id_bodega_origen = this.BodegaSalida;
          this.DataTransfers.id_bodega_destino = this.BodegaDestino;
          this.DataTransfers.id_inventario = this.DataComplete[0];
          this.DataTransfers.cantidad = this.CantidadTotal;
          this.DataTransfers.sobrante = sobrante;
          this.DataTransfers.id_producto = this.DataComplete[2]; //console.log('esto se va ', this.DataTransfers);

          axios.get(urlUpdate, {
            params: {
              id_bodega_origen: this.DataTransfers.id_bodega_origen,
              id_bodega_destino: this.DataTransfers.id_bodega_destino,
              id_inventario: this.DataTransfers.id_inventario,
              cantidad: this.DataTransfers.cantidad,
              sobrante: this.DataTransfers.sobrante,
              id_producto: this.DataTransfers.id_producto
            }
          }).then(function (response) {
            _this.BodegaSalida = '';
            _this.BodegaDestino = '';
            _this.CantidadTotal = 0;
            _this.DataComplete = [];
            _this.value = 0;
            _this.UpdateState = {
              'id_bodega_origen': '',
              'id_bodega_destino': '',
              'id_inventario': '',
              'cantidad': '',
              'sobrante': '',
              'id_producto': ''
            };
            _this.errors = [];
            alert('Transferencia echa');

            _this.$refs.TransferirProducto.toggle();
          })["catch"](function (error) {
            _this.errors = 'Corrija para poder editar con éxito';
          });
        }
      } /// FINAL ELSE VERIFICATION

    },
    getCapacidad: function getCapacidad() {
      if (this.CantidadTotal != 0) {
        var cap = event.target.getAttribute('data-num');
        cap = parseInt(cap);
        this.CantidadTotal = parseInt(this.CantidadTotal);

        if (this.CantidadTotal > cap) {
          this.CantidadTotal = cap;
        }
      } ///END

    },
    getCantidadDinamic: function getCantidadDinamic(info) {
      //console.log('llego a dinamic ',this.DataComplete);
      this.value = 1;
      this.CantidadTotal = 0;
      this.CantidadMovil = this.DataComplete[1];
      this.max = this.CantidadMovil;
    },
    getBodegas: function getBodegas() {
      var _this2 = this;

      var UrlBodegas = 'api/bodegas';
      axios.get(UrlBodegas).then(function (response) {
        _this2.bodegasData = response.data.Data.data;
      });
    },
    getProductosDisponibles: function getProductosDisponibles() {
      var _this3 = this;

      var urlInventarios = 'api/inventario_data';
      axios.get(urlInventarios, {
        params: {
          idBodega: this.BodegaSalida
        }
      }).then(function (response) {
        _this3.InventariosData = response.data.inventarios.data;
      });
      console.log('this come ', this.InventariosData);
    },
    toggle: function toggle() {
      this.$refs.TransferirProducto.toggle();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/modales/modalTransferirProducto.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/modales/modalTransferirProducto.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalTransferirProducto_vue_vue_type_template_id_2d053c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalTransferirProducto.vue?vue&type=template&id=2d053c94&scoped=true& */ "./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=template&id=2d053c94&scoped=true&");
/* harmony import */ var _modalTransferirProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalTransferirProducto.vue?vue&type=script&lang=js& */ "./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _modalTransferirProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _modalTransferirProducto_vue_vue_type_template_id_2d053c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _modalTransferirProducto_vue_vue_type_template_id_2d053c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2d053c94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/modales/modalTransferirProducto.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTransferirProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modalTransferirProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTransferirProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=template&id=2d053c94&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=template&id=2d053c94&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTransferirProducto_vue_vue_type_template_id_2d053c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTransferirProducto_vue_vue_type_template_id_2d053c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTransferirProducto_vue_vue_type_template_id_2d053c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modalTransferirProducto.vue?vue&type=template&id=2d053c94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=template&id=2d053c94&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=template&id=2d053c94&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/modales/modalTransferirProducto.vue?vue&type=template&id=2d053c94&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
      ref: "TransferirProducto",
      attrs: { titulo: "Agregar producto", tamano: "modal-lg" }
    },
    [
      _c("div", { staticClass: "row mx-0 my-3" }, [
        _c(
          "div",
          { staticClass: "col-6" },
          [
            _c("label", [_vm._v("Bodega origen")]),
            _vm._v(" "),
            _c(
              "el-select",
              {
                staticClass: "w-100",
                attrs: { placeholder: "Select" },
                on: { change: _vm.getProductosDisponibles },
                model: {
                  value: _vm.BodegaSalida,
                  callback: function($$v) {
                    _vm.BodegaSalida = $$v
                  },
                  expression: "BodegaSalida"
                }
              },
              _vm._l(_vm.bodegasData, function(item) {
                return item.EstadoBodegas === 1 &&
                  item.BodegaId != _vm.BodegaDestino
                  ? _c("el-option", {
                      attrs: { label: item.nombre, value: item.BodegaId }
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
          { staticClass: "col-6" },
          [
            _c("label", [_vm._v("Bodega destino")]),
            _vm._v(" "),
            _c(
              "el-select",
              {
                staticClass: "w-100",
                attrs: { placeholder: "Select" },
                model: {
                  value: _vm.BodegaDestino,
                  callback: function($$v) {
                    _vm.BodegaDestino = $$v
                  },
                  expression: "BodegaDestino"
                }
              },
              _vm._l(_vm.bodegasData, function(bodegaIn) {
                return bodegaIn.EstadoBodegas === 1 &&
                  bodegaIn.BodegaId != _vm.BodegaSalida
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
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mx-0 my-3" }, [
        _c(
          "div",
          { staticClass: "col-6" },
          [
            _c("label", [_vm._v("Producto")]),
            _vm._v(" "),
            _c(
              "el-select",
              {
                staticClass: "w-100",
                attrs: { placeholder: "Select" },
                on: {
                  change: function($event) {
                    return _vm.getCantidadDinamic()
                  }
                },
                model: {
                  value: _vm.DataComplete,
                  callback: function($$v) {
                    _vm.DataComplete = $$v
                  },
                  expression: "DataComplete"
                }
              },
              _vm._l(_vm.InventariosData, function(item) {
                return _c("el-option", {
                  key: item.inventariosItem,
                  attrs: {
                    label: item.NombreProducto,
                    value: [
                      item.inventariosItem,
                      item.cantidad,
                      item.IdProducto
                    ]
                  }
                })
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-2" }, [
          _c("label", [_vm._v("Cantidad")]),
          _c("br"),
          _vm._v(" "),
          _c("label", [_vm._v("Max " + _vm._s(this.max) + " ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.CantidadTotal,
                expression: "CantidadTotal"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "number",
              max: _vm.CantidadMovil,
              "data-num": _vm.CantidadMovil,
              name: "",
              value: ""
            },
            domProps: { value: _vm.CantidadTotal },
            on: {
              keyup: function($event) {
                return _vm.getCapacidad()
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.CantidadTotal = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-2" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              on: {
                click: function($event) {
                  return _vm.CreateTraspaso()
                }
              }
            },
            [_vm._v("\n                Enviar\n            ")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);