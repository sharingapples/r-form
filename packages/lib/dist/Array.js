"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Group = require("./Group");

var _createInput = _interopRequireDefault(require("./createInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ArrayComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ArrayComponent, _Component);

  function ArrayComponent() {
    var _this;

    _classCallCheck(this, ArrayComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayComponent).call(this));
    _this.nodes = [];
    return _this;
  }

  _createClass(ArrayComponent, [{
    key: "update",
    value: function update(name, text) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          auto = _this$props.auto;
      var updatedValue = value ? value.map(function (v, idx) {
        if (name === idx) {
          return text;
        }

        return v;
      }) : [text];

      if (value && name === value.length) {
        updatedValue = updatedValue.concat(text);
      }

      if (auto && !updatedValue.some(function (v) {
        return v === '' || v === {} || v === null || v === undefined;
      })) {
        onChange(updatedValue.concat([null]));
      } else {
        onChange(updatedValue);
      }
    }
  }, {
    key: "get",
    value: function get(idx) {
      var value = this.props.value;
      return value && value[idx];
    }
  }, {
    key: "register",
    value: function register(name, node) {
      if (node === null) {
        this.nodes = this.nodes.filter(function (n) {
          return n.name === name;
        });
      } else {
        this.nodes = this.nodes.concat({
          name: name,
          node: node
        });
      }
    }
  }, {
    key: "insert",
    value: function insert(idx) {
      var _this2 = this;

      return function () {
        var after = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _this2$props = _this2.props,
            value = _this2$props.value,
            onChange = _this2$props.onChange,
            auto = _this2$props.auto;
        var updatedValue = after ? _toConsumableArray(value.slice(0, idx + 1)).concat([null], _toConsumableArray(value.slice(idx + 1))) : _toConsumableArray(value.slice(0, idx)).concat([null], _toConsumableArray(value.slice(idx)));

        if (value.length === 0) {
          updatedValue = auto && updatedValue.concat(null);
        }

        onChange(updatedValue);
      };
    }
  }, {
    key: "remove",
    value: function remove(idx) {
      var _this3 = this;

      return function () {
        var _this3$props = _this3.props,
            value = _this3$props.value,
            onChange = _this3$props.onChange;

        var updatedValue = _toConsumableArray(value.slice(0, idx)).concat(_toConsumableArray(value.slice(idx + 1)));

        onChange(updatedValue);
      };
    }
  }, {
    key: "validate",
    value: function validate(value) {
      var _this$props2 = this.props,
          validator = _this$props2.validator,
          state = _this$props2.state;
      this.nodes.forEach(function (iNode) {
        var node = iNode.node,
            name = iNode.name;
        node.validate(value && value[name]);
      });
      var validationValue = value;

      if (validator) {
        if (Array.isArray(validator)) {
          validator.forEach(function (v) {
            return v(validationValue, state);
          });
        } else {
          validator(validationValue, state);
        }
      }

      return value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          auto = _this$props3.auto,
          children = _this$props3.children,
          value = _this$props3.value,
          other = _objectWithoutProperties(_this$props3, ["auto", "children", "value"]);

      var adjusted = auto && value.length === 0 ? [null] : value;
      return adjusted.map(function (n, idx) {
        var arrayOwner = {
          get: function get(name) {
            return _this4.get(idx);
          },
          update: function update(name, text) {
            return _this4.update(idx, text);
          },
          register: function register(name, node) {
            return _this4.register(idx, node);
          }
        };
        return _react.default.createElement(_Group.Provider, _extends({
          key: idx,
          value: {
            owner: arrayOwner,
            state: value
          }
        }, other), children({
          value: value,
          insert: _this4.insert(idx),
          remove: _this4.remove(idx)
        }));
      });
    }
  }]);

  return ArrayComponent;
}(_react.Component);

var createProps = function createProps(owner, _ref) {
  var value = _ref.value,
      defaultValue = _ref.defaultValue;
  return {
    onChange: function onChange(v) {
      return owner.update(v);
    },
    value: value || defaultValue || []
  };
};

var _default = (0, _createInput.default)(createProps)(ArrayComponent);

exports.default = _default;