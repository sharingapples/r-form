"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Group = require("./Group");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function createInput(mapFormToProps) {
  return function (InputComponent) {
    var InputHelper =
    /*#__PURE__*/
    function (_Component) {
      _inherits(InputHelper, _Component);

      function InputHelper() {
        _classCallCheck(this, InputHelper);

        return _possibleConstructorReturn(this, _getPrototypeOf(InputHelper).apply(this, arguments));
      }

      _createClass(InputHelper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props = this.props,
              owner = _this$props.owner,
              name = _this$props.name;
          owner.register(name, this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this$props2 = this.props,
              owner = _this$props2.owner,
              name = _this$props2.name;
          owner.register(name, null);
        }
      }, {
        key: "validate",
        value: function validate() {
          var _this$props3 = this.props,
              validator = _this$props3.validator,
              state = _this$props3.state,
              value = _this$props3.value;

          if (this.reference && this.reference.validate) {
            this.reference.validate();
          }

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
          var _this = this;

          var _this$props4 = this.props,
              name = _this$props4.name,
              owner = _this$props4.owner,
              other = _objectWithoutProperties(_this$props4, ["name", "owner"]);

          var params = {
            update: function update(value) {
              _this.validate();

              owner.update(name, value);
              console.log(_this.props);
            }
          };

          var inputProps = _objectSpread({}, other, mapFormToProps(params, this.props));

          return _react.default.createElement(InputComponent, _extends({
            ref: function ref(node) {
              _this.reference = node;
            }
          }, inputProps, {
            name: name
          }));
        }
      }]);

      return InputHelper;
    }(_react.Component);

    return function (props) {
      return _react.default.createElement(_Group.Consumer, null, function (_ref) {
        var owner = _ref.owner,
            state = _ref.state;
        return _react.default.createElement(InputHelper, _extends({
          owner: owner,
          state: state
        }, props, {
          value: owner.get(props.name)
        }));
      });
    };
  };
}

var _default = createInput;
exports.default = _default;