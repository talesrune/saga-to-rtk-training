"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Product.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Product = function Product(product) {
  var name = product.name,
    price = product.price,
    id = product.id,
    redirectionEdition = product.redirectionEdition,
    confirmDeleteProduct = product.confirmDeleteProduct;
  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, name), /*#__PURE__*/_react["default"].createElement("td", {
    className: "prices"
  }, price, " $"), /*#__PURE__*/_react["default"].createElement("td", {
    className: "button-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button--edit",
    type: "button",
    onClick: function onClick() {
      return redirectionEdition(product);
    }
  }, "Edit link"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button button--delete",
    type: "button",
    onClick: function onClick() {
      return confirmDeleteProduct(id);
    }
  }, "Delete")));
};
var _default = exports["default"] = Product;