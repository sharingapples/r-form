"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Group = require("./Group");

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var _Array =
/*#__PURE__*/
function (_Component) {
  _inherits(Array, _Component);

  function Array() {
    var _this;

    _classCallCheck(this, Array);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Array).call(this));
    _this.state = {};
    return _this;
  }

  _createClass(Array, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          auto = _this$props.auto,
          children = _this$props.children,
          defaultValue = _this$props.defaultValue,
          other = _objectWithoutProperties(_this$props, ["name", "auto", "children", "defaultValue"]);

      return _react.default.createElement(_Input.default, _extends({
        name: name
      }, other), function (form) {
        var nodes = [];
        var state = form.get() || defaultValue || auto && [null] || [];
        var tmp = {
          get: function get(id) {
            return function () {
              return state[id];
            };
          },
          update: function update(id) {
            return function (text) {
              var newState = state.map(function (v, idx) {
                if (id === idx) {
                  return text;
                }

                return v;
              });
              form.update(newState);
            };
          },
          next: function next(id) {
            return function () {
              var idx = id + 1;

              if (idx < nodes.length) {
                nodes[idx].node.focus();
              }
            };
          },
          register: function register(id) {
            return function (node) {
              if (node === null) {
                nodes = nodes.filter(function (n) {
                  return n.id === id;
                });
              } else {
                nodes = nodes.concat({
                  id: id,
                  node: node
                });
              }
            };
          }
        };

        var insert = function insert(idx) {
          return function () {
            var newState = _toConsumableArray(state.slice(0, idx)).concat([null], _toConsumableArray(state.slice(idx))); // console.log('Array:',state, newState, idx);


            form.update(newState);
          };
        };

        var remove = function remove(idx) {
          return function () {
            var newState = _toConsumableArray(state.slice(0, idx)).concat(_toConsumableArray(state.slice(idx + 1))); // console.log(idx, newState)


            form.update(newState);
          };
        };

        return _react.default.createElement(_Group.Provider, {
          value: {
            form: tmp,
            state: state
          }
        }, state && state.map(function (n, idx) {
          return children({
            name: idx,
            value: state,
            insert: insert(idx),
            remove: remove(idx)
          });
        }));
      });
    }
  }]);

  return Array;
}(_react.Component);

var _default = _Array;
exports.default = _default;