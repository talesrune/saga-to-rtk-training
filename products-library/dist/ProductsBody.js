"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Product = _interopRequireDefault(require("./Product"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProductsBody = function ProductsBody(_ref) {
  var products = _ref.products,
    redirectionEdition = _ref.redirectionEdition,
    confirmDeleteProduct = _ref.confirmDeleteProduct;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, products.length === 0 ? 'No products yet.' : products.map(function (product) {
    return /*#__PURE__*/_react["default"].createElement(_Product["default"], {
      key: product.id,
      name: product.name,
      price: product.price,
      id: product.id,
      redirectionEdition: redirectionEdition,
      confirmDeleteProduct: confirmDeleteProduct
    });
  }));
};
var _default = exports["default"] = ProductsBody;