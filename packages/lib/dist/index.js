"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input.default;
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
});
Object.defineProperty(exports, "Array", {
  enumerable: true,
  get: function get() {
    return _Array.default;
  }
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _Select.default;
  }
});
exports.default = void 0;

var _Form = _interopRequireDefault(require("./Form"));

var _Input = _interopRequireDefault(require("./Input"));

var _Group = _interopRequireDefault(require("./Group"));

var _Array = _interopRequireDefault(require("./Array"));

var _Select = _interopRequireDefault(require("./Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Form.default.Input = _Input.default;
_Form.default.Group = _Group.default;
_Form.default.Array = _Array.default;
_Form.default.Select = _Select.default;
var _default = _Form.default;
exports.default = _default;