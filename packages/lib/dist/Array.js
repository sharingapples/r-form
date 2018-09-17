"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Form = require("./Form");

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _Array = function _Array(_ref) {
  var name = _ref.name,
      value = _ref.value,
      auto = _ref.auto,
      children = _ref.children,
      defaultValue = _ref.defaultValue,
      other = _objectWithoutProperties(_ref, ["name", "value", "auto", "children", "defaultValue"]);

  return _react.default.createElement(_Input.default, _extends({
    name: name
  }, other), function (form) {
    var nodes = [];
    var state = form.get() || defaultValue || [];
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

    var insert = function insert() {
      return function () {
        var newState = _toConsumableArray(state).concat([[null]]);

        form.update(newState);
      };
    };

    var remove = function remove(idx) {
      return function () {
        var newState = _toConsumableArray(state.slice(0, idx)).concat(_toConsumableArray(state.slice(idx + 1)));

        form.update(newState);
      };
    };

    var len = state.length + 1;
    return _react.default.createElement(_Form.Provider, {
      value: {
        form: tmp,
        state: state
      }
    }, state && state.map(function (n, idx) {
      return children({
        name: idx,
        value: state,
        insert: insert(),
        remove: remove(idx)
      });
    }), auto && children({
      name: len,
      value: state,
      insert: insert(),
      remove: remove(len)
    }));
  });
};

var _default = _Array;
exports.default = _default;