var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-B49m8bie.js";
import { a as getAugmentedNamespace, r as requireReact, c as commonjsGlobal } from "./index-CHK4WJUA.js";
import { r as requireReactDom } from "./index-CvUaxwb9.js";
import { r as requireClient } from "./client-Cd3u0B9u.js";
var dist = {};
var createElement = {};
var AccessibilityUtil = {};
var isDisabled = {};
var hasRequiredIsDisabled;
function requireIsDisabled() {
  if (hasRequiredIsDisabled) return isDisabled;
  hasRequiredIsDisabled = 1;
  Object.defineProperty(isDisabled, "__esModule", {
    value: true
  });
  isDisabled.default = void 0;
  var isDisabled$1 = (props) => props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf("disabled") > -1;
  isDisabled.default = isDisabled$1;
  return isDisabled;
}
var propsToAccessibilityComponent = {};
var propsToAriaRole = {};
var hasRequiredPropsToAriaRole;
function requirePropsToAriaRole() {
  if (hasRequiredPropsToAriaRole) return propsToAriaRole;
  hasRequiredPropsToAriaRole = 1;
  Object.defineProperty(propsToAriaRole, "__esModule", {
    value: true
  });
  propsToAriaRole.default = void 0;
  var accessibilityRoleToWebRole = {
    adjustable: "slider",
    button: "button",
    header: "heading",
    image: "img",
    imagebutton: null,
    keyboardkey: null,
    label: null,
    link: "link",
    none: "presentation",
    search: "search",
    summary: "region",
    text: null
  };
  var propsToAriaRole$1 = (_ref) => {
    var accessibilityRole = _ref.accessibilityRole, role = _ref.role;
    var _role = role || accessibilityRole;
    if (_role) {
      var inferredRole = accessibilityRoleToWebRole[_role];
      if (inferredRole !== null) {
        return inferredRole || _role;
      }
    }
  };
  propsToAriaRole.default = propsToAriaRole$1;
  return propsToAriaRole;
}
var hasRequiredPropsToAccessibilityComponent;
function requirePropsToAccessibilityComponent() {
  if (hasRequiredPropsToAccessibilityComponent) return propsToAccessibilityComponent;
  hasRequiredPropsToAccessibilityComponent = 1;
  Object.defineProperty(propsToAccessibilityComponent, "__esModule", {
    value: true
  });
  propsToAccessibilityComponent.default = void 0;
  var _propsToAriaRole = _interopRequireDefault(/* @__PURE__ */ requirePropsToAriaRole());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var roleComponents = {
    article: "article",
    banner: "header",
    blockquote: "blockquote",
    button: "button",
    code: "code",
    complementary: "aside",
    contentinfo: "footer",
    deletion: "del",
    emphasis: "em",
    figure: "figure",
    insertion: "ins",
    form: "form",
    list: "ul",
    listitem: "li",
    main: "main",
    navigation: "nav",
    paragraph: "p",
    region: "section",
    strong: "strong"
  };
  var emptyObject = {};
  var propsToAccessibilityComponent$1 = function propsToAccessibilityComponent2(props) {
    if (props === void 0) {
      props = emptyObject;
    }
    var roleProp = props.role || props.accessibilityRole;
    if (roleProp === "label") {
      return "label";
    }
    var role = (0, _propsToAriaRole.default)(props);
    if (role) {
      if (role === "heading") {
        var level = props.accessibilityLevel || props["aria-level"];
        if (level != null) {
          return "h" + level;
        }
        return "h1";
      }
      return roleComponents[role];
    }
  };
  propsToAccessibilityComponent.default = propsToAccessibilityComponent$1;
  return propsToAccessibilityComponent;
}
var hasRequiredAccessibilityUtil;
function requireAccessibilityUtil() {
  if (hasRequiredAccessibilityUtil) return AccessibilityUtil;
  hasRequiredAccessibilityUtil = 1;
  Object.defineProperty(AccessibilityUtil, "__esModule", {
    value: true
  });
  AccessibilityUtil.default = void 0;
  var _isDisabled = _interopRequireDefault(/* @__PURE__ */ requireIsDisabled());
  var _propsToAccessibilityComponent = _interopRequireDefault(/* @__PURE__ */ requirePropsToAccessibilityComponent());
  var _propsToAriaRole = _interopRequireDefault(/* @__PURE__ */ requirePropsToAriaRole());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var AccessibilityUtil$1 = {
    isDisabled: _isDisabled.default,
    propsToAccessibilityComponent: _propsToAccessibilityComponent.default,
    propsToAriaRole: _propsToAriaRole.default
  };
  AccessibilityUtil.default = AccessibilityUtil$1;
  return AccessibilityUtil;
}
var createDOMProps = {};
var objectSpread2 = { exports: {} };
var defineProperty = { exports: {} };
var toPropertyKey = { exports: {} };
var _typeof$1 = { exports: {} };
var hasRequired_typeof;
function require_typeof() {
  if (hasRequired_typeof) return _typeof$1.exports;
  hasRequired_typeof = 1;
  (function(module) {
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(_typeof$1);
  return _typeof$1.exports;
}
var toPrimitive = { exports: {} };
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive.exports;
  hasRequiredToPrimitive = 1;
  (function(module) {
    var _typeof2 = require_typeof()["default"];
    function toPrimitive2(t, r) {
      if ("object" != _typeof2(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof2(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toPrimitive);
  return toPrimitive.exports;
}
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey.exports;
  hasRequiredToPropertyKey = 1;
  (function(module) {
    var _typeof2 = require_typeof()["default"];
    var toPrimitive2 = requireToPrimitive();
    function toPropertyKey2(t) {
      var i = toPrimitive2(t, "string");
      return "symbol" == _typeof2(i) ? i : i + "";
    }
    module.exports = toPropertyKey2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toPropertyKey);
  return toPropertyKey.exports;
}
var hasRequiredDefineProperty;
function requireDefineProperty() {
  if (hasRequiredDefineProperty) return defineProperty.exports;
  hasRequiredDefineProperty = 1;
  (function(module) {
    var toPropertyKey2 = requireToPropertyKey();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(defineProperty);
  return defineProperty.exports;
}
var hasRequiredObjectSpread2;
function requireObjectSpread2() {
  if (hasRequiredObjectSpread2) return objectSpread2.exports;
  hasRequiredObjectSpread2 = 1;
  (function(module) {
    var defineProperty2 = requireDefineProperty();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          defineProperty2(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectSpread2);
  return objectSpread2.exports;
}
var objectWithoutPropertiesLoose = { exports: {} };
var hasRequiredObjectWithoutPropertiesLoose;
function requireObjectWithoutPropertiesLoose() {
  if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
  hasRequiredObjectWithoutPropertiesLoose = 1;
  (function(module) {
    function _objectWithoutPropertiesLoose(r, e) {
      if (null == r) return {};
      var t = {};
      for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
      }
      return t;
    }
    module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectWithoutPropertiesLoose);
  return objectWithoutPropertiesLoose.exports;
}
var StyleSheet = {};
var compiler = {};
var createReactDOMStyle = {};
var normalizeValueWithProperty = {};
var unitlessNumbers$1 = {};
var hasRequiredUnitlessNumbers$1;
function requireUnitlessNumbers$1() {
  if (hasRequiredUnitlessNumbers$1) return unitlessNumbers$1;
  hasRequiredUnitlessNumbers$1 = 1;
  Object.defineProperty(unitlessNumbers$1, "__esModule", {
    value: true
  });
  unitlessNumbers$1.default = void 0;
  var unitlessNumbers2 = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexOrder: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    fontWeight: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowGap: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnGap: true,
    gridColumnStart: true,
    lineClamp: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    // SVG-related
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true,
    // transform types
    scale: true,
    scaleX: true,
    scaleY: true,
    scaleZ: true,
    // RN properties
    shadowOpacity: true
  };
  var prefixes2 = ["ms", "Moz", "O", "Webkit"];
  var prefixKey = (prefix, key) => {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  };
  Object.keys(unitlessNumbers2).forEach((prop) => {
    prefixes2.forEach((prefix) => {
      unitlessNumbers2[prefixKey(prefix, prop)] = unitlessNumbers2[prop];
    });
  });
  unitlessNumbers$1.default = unitlessNumbers2;
  return unitlessNumbers$1;
}
var normalizeColor = {};
var isWebColor = {};
var hasRequiredIsWebColor;
function requireIsWebColor() {
  if (hasRequiredIsWebColor) return isWebColor;
  hasRequiredIsWebColor = 1;
  Object.defineProperty(isWebColor, "__esModule", {
    value: true
  });
  isWebColor.default = void 0;
  var isWebColor$1 = (color) => color === "currentcolor" || color === "currentColor" || color === "inherit" || color.indexOf("var(") === 0;
  isWebColor.default = isWebColor$1;
  return isWebColor;
}
var processColor = {};
var normalizeColors;
var hasRequiredNormalizeColors;
function requireNormalizeColors() {
  if (hasRequiredNormalizeColors) return normalizeColors;
  hasRequiredNormalizeColors = 1;
  function normalizeColor2(color) {
    if (typeof color === "number") {
      if (color >>> 0 === color && color >= 0 && color <= 4294967295) {
        return color;
      }
      return null;
    }
    if (typeof color !== "string") {
      return null;
    }
    const matchers = getMatchers();
    let match;
    if (match = matchers.hex6.exec(color)) {
      return parseInt(match[1] + "ff", 16) >>> 0;
    }
    const colorFromKeyword = normalizeKeyword(color);
    if (colorFromKeyword != null) {
      return colorFromKeyword;
    }
    if (match = matchers.rgb.exec(color)) {
      return (parse255(match[1]) << 24 | // r
      parse255(match[2]) << 16 | // g
      parse255(match[3]) << 8 | // b
      255) >>> // a
      0;
    }
    if (match = matchers.rgba.exec(color)) {
      if (match[6] !== void 0) {
        return (parse255(match[6]) << 24 | // r
        parse255(match[7]) << 16 | // g
        parse255(match[8]) << 8 | // b
        parse1(match[9])) >>> // a
        0;
      }
      return (parse255(match[2]) << 24 | // r
      parse255(match[3]) << 16 | // g
      parse255(match[4]) << 8 | // b
      parse1(match[5])) >>> // a
      0;
    }
    if (match = matchers.hex3.exec(color)) {
      return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        "ff",
        // a
        16
      ) >>> 0;
    }
    if (match = matchers.hex8.exec(color)) {
      return parseInt(match[1], 16) >>> 0;
    }
    if (match = matchers.hex4.exec(color)) {
      return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4],
        // a
        16
      ) >>> 0;
    }
    if (match = matchers.hsl.exec(color)) {
      return (hslToRgb(
        parse360(match[1]),
        // h
        parsePercentage(match[2]),
        // s
        parsePercentage(match[3])
        // l
      ) | 255) >>> // a
      0;
    }
    if (match = matchers.hsla.exec(color)) {
      if (match[6] !== void 0) {
        return (hslToRgb(
          parse360(match[6]),
          // h
          parsePercentage(match[7]),
          // s
          parsePercentage(match[8])
          // l
        ) | parse1(match[9])) >>> // a
        0;
      }
      return (hslToRgb(
        parse360(match[2]),
        // h
        parsePercentage(match[3]),
        // s
        parsePercentage(match[4])
        // l
      ) | parse1(match[5])) >>> // a
      0;
    }
    if (match = matchers.hwb.exec(color)) {
      return (hwbToRgb(
        parse360(match[1]),
        // h
        parsePercentage(match[2]),
        // w
        parsePercentage(match[3])
        // b
      ) | 255) >>> // a
      0;
    }
    return null;
  }
  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  function hslToRgb(h, s, l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1 / 3);
    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
  }
  function hwbToRgb(h, w, b) {
    if (w + b >= 1) {
      const gray = Math.round(w * 255 / (w + b));
      return gray << 24 | gray << 16 | gray << 8;
    }
    const red = hue2rgb(0, 1, h + 1 / 3) * (1 - w - b) + w;
    const green = hue2rgb(0, 1, h) * (1 - w - b) + w;
    const blue = hue2rgb(0, 1, h - 1 / 3) * (1 - w - b) + w;
    return Math.round(red * 255) << 24 | Math.round(green * 255) << 16 | Math.round(blue * 255) << 8;
  }
  const NUMBER = "[-+]?\\d*\\.?\\d+";
  const PERCENTAGE = NUMBER + "%";
  function call(...args) {
    return "\\(\\s*(" + args.join(")\\s*,?\\s*(") + ")\\s*\\)";
  }
  function callWithSlashSeparator(...args) {
    return "\\(\\s*(" + args.slice(0, args.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + args[args.length - 1] + ")\\s*\\)";
  }
  function commaSeparatedCall(...args) {
    return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  let cachedMatchers;
  function getMatchers() {
    if (cachedMatchers === void 0) {
      cachedMatchers = {
        rgb: new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER)),
        rgba: new RegExp("rgba(" + commaSeparatedCall(NUMBER, NUMBER, NUMBER, NUMBER) + "|" + callWithSlashSeparator(NUMBER, NUMBER, NUMBER, NUMBER) + ")"),
        hsl: new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
        hsla: new RegExp("hsla(" + commaSeparatedCall(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + "|" + callWithSlashSeparator(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + ")"),
        hwb: new RegExp("hwb" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
        hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#([0-9a-fA-F]{6})$/,
        hex8: /^#([0-9a-fA-F]{8})$/
      };
    }
    return cachedMatchers;
  }
  function parse255(str) {
    const int = parseInt(str, 10);
    if (int < 0) {
      return 0;
    }
    if (int > 255) {
      return 255;
    }
    return int;
  }
  function parse360(str) {
    const int = parseFloat(str);
    return (int % 360 + 360) % 360 / 360;
  }
  function parse1(str) {
    const num = parseFloat(str);
    if (num < 0) {
      return 0;
    }
    if (num > 1) {
      return 255;
    }
    return Math.round(num * 255);
  }
  function parsePercentage(str) {
    const int = parseFloat(str);
    if (int < 0) {
      return 0;
    }
    if (int > 100) {
      return 1;
    }
    return int / 100;
  }
  function normalizeKeyword(name) {
    switch (name) {
      case "transparent":
        return 0;
      // http://www.w3.org/TR/css3-color/#svg-color
      case "aliceblue":
        return 4042850303;
      case "antiquewhite":
        return 4209760255;
      case "aqua":
        return 16777215;
      case "aquamarine":
        return 2147472639;
      case "azure":
        return 4043309055;
      case "beige":
        return 4126530815;
      case "bisque":
        return 4293182719;
      case "black":
        return 255;
      case "blanchedalmond":
        return 4293643775;
      case "blue":
        return 65535;
      case "blueviolet":
        return 2318131967;
      case "brown":
        return 2771004159;
      case "burlywood":
        return 3736635391;
      case "burntsienna":
        return 3934150143;
      case "cadetblue":
        return 1604231423;
      case "chartreuse":
        return 2147418367;
      case "chocolate":
        return 3530104575;
      case "coral":
        return 4286533887;
      case "cornflowerblue":
        return 1687547391;
      case "cornsilk":
        return 4294499583;
      case "crimson":
        return 3692313855;
      case "cyan":
        return 16777215;
      case "darkblue":
        return 35839;
      case "darkcyan":
        return 9145343;
      case "darkgoldenrod":
        return 3095792639;
      case "darkgray":
        return 2846468607;
      case "darkgreen":
        return 6553855;
      case "darkgrey":
        return 2846468607;
      case "darkkhaki":
        return 3182914559;
      case "darkmagenta":
        return 2332068863;
      case "darkolivegreen":
        return 1433087999;
      case "darkorange":
        return 4287365375;
      case "darkorchid":
        return 2570243327;
      case "darkred":
        return 2332033279;
      case "darksalmon":
        return 3918953215;
      case "darkseagreen":
        return 2411499519;
      case "darkslateblue":
        return 1211993087;
      case "darkslategray":
        return 793726975;
      case "darkslategrey":
        return 793726975;
      case "darkturquoise":
        return 13554175;
      case "darkviolet":
        return 2483082239;
      case "deeppink":
        return 4279538687;
      case "deepskyblue":
        return 12582911;
      case "dimgray":
        return 1768516095;
      case "dimgrey":
        return 1768516095;
      case "dodgerblue":
        return 512819199;
      case "firebrick":
        return 2988581631;
      case "floralwhite":
        return 4294635775;
      case "forestgreen":
        return 579543807;
      case "fuchsia":
        return 4278255615;
      case "gainsboro":
        return 3705462015;
      case "ghostwhite":
        return 4177068031;
      case "gold":
        return 4292280575;
      case "goldenrod":
        return 3668254975;
      case "gray":
        return 2155905279;
      case "green":
        return 8388863;
      case "greenyellow":
        return 2919182335;
      case "grey":
        return 2155905279;
      case "honeydew":
        return 4043305215;
      case "hotpink":
        return 4285117695;
      case "indianred":
        return 3445382399;
      case "indigo":
        return 1258324735;
      case "ivory":
        return 4294963455;
      case "khaki":
        return 4041641215;
      case "lavender":
        return 3873897215;
      case "lavenderblush":
        return 4293981695;
      case "lawngreen":
        return 2096890111;
      case "lemonchiffon":
        return 4294626815;
      case "lightblue":
        return 2916673279;
      case "lightcoral":
        return 4034953471;
      case "lightcyan":
        return 3774873599;
      case "lightgoldenrodyellow":
        return 4210742015;
      case "lightgray":
        return 3553874943;
      case "lightgreen":
        return 2431553791;
      case "lightgrey":
        return 3553874943;
      case "lightpink":
        return 4290167295;
      case "lightsalmon":
        return 4288707327;
      case "lightseagreen":
        return 548580095;
      case "lightskyblue":
        return 2278488831;
      case "lightslategray":
        return 2005441023;
      case "lightslategrey":
        return 2005441023;
      case "lightsteelblue":
        return 2965692159;
      case "lightyellow":
        return 4294959359;
      case "lime":
        return 16711935;
      case "limegreen":
        return 852308735;
      case "linen":
        return 4210091775;
      case "magenta":
        return 4278255615;
      case "maroon":
        return 2147483903;
      case "mediumaquamarine":
        return 1724754687;
      case "mediumblue":
        return 52735;
      case "mediumorchid":
        return 3126187007;
      case "mediumpurple":
        return 2473647103;
      case "mediumseagreen":
        return 1018393087;
      case "mediumslateblue":
        return 2070474495;
      case "mediumspringgreen":
        return 16423679;
      case "mediumturquoise":
        return 1221709055;
      case "mediumvioletred":
        return 3340076543;
      case "midnightblue":
        return 421097727;
      case "mintcream":
        return 4127193855;
      case "mistyrose":
        return 4293190143;
      case "moccasin":
        return 4293178879;
      case "navajowhite":
        return 4292783615;
      case "navy":
        return 33023;
      case "oldlace":
        return 4260751103;
      case "olive":
        return 2155872511;
      case "olivedrab":
        return 1804477439;
      case "orange":
        return 4289003775;
      case "orangered":
        return 4282712319;
      case "orchid":
        return 3664828159;
      case "palegoldenrod":
        return 4008225535;
      case "palegreen":
        return 2566625535;
      case "paleturquoise":
        return 2951671551;
      case "palevioletred":
        return 3681588223;
      case "papayawhip":
        return 4293907967;
      case "peachpuff":
        return 4292524543;
      case "peru":
        return 3448061951;
      case "pink":
        return 4290825215;
      case "plum":
        return 3718307327;
      case "powderblue":
        return 2967529215;
      case "purple":
        return 2147516671;
      case "rebeccapurple":
        return 1714657791;
      case "red":
        return 4278190335;
      case "rosybrown":
        return 3163525119;
      case "royalblue":
        return 1097458175;
      case "saddlebrown":
        return 2336560127;
      case "salmon":
        return 4202722047;
      case "sandybrown":
        return 4104413439;
      case "seagreen":
        return 780883967;
      case "seashell":
        return 4294307583;
      case "sienna":
        return 2689740287;
      case "silver":
        return 3233857791;
      case "skyblue":
        return 2278484991;
      case "slateblue":
        return 1784335871;
      case "slategray":
        return 1887473919;
      case "slategrey":
        return 1887473919;
      case "snow":
        return 4294638335;
      case "springgreen":
        return 16744447;
      case "steelblue":
        return 1182971135;
      case "tan":
        return 3535047935;
      case "teal":
        return 8421631;
      case "thistle":
        return 3636451583;
      case "tomato":
        return 4284696575;
      case "turquoise":
        return 1088475391;
      case "violet":
        return 4001558271;
      case "wheat":
        return 4125012991;
      case "white":
        return 4294967295;
      case "whitesmoke":
        return 4126537215;
      case "yellow":
        return 4294902015;
      case "yellowgreen":
        return 2597139199;
    }
    return null;
  }
  normalizeColors = normalizeColor2;
  return normalizeColors;
}
var hasRequiredProcessColor;
function requireProcessColor() {
  if (hasRequiredProcessColor) return processColor;
  hasRequiredProcessColor = 1;
  Object.defineProperty(processColor, "__esModule", {
    value: true
  });
  processColor.default = void 0;
  var _normalizeColors = _interopRequireDefault(requireNormalizeColors());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var processColor$1 = (color) => {
    if (color === void 0 || color === null) {
      return color;
    }
    var int32Color = (0, _normalizeColors.default)(color);
    if (int32Color === void 0 || int32Color === null) {
      return void 0;
    }
    int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
    return int32Color;
  };
  processColor.default = processColor$1;
  return processColor;
}
var hasRequiredNormalizeColor;
function requireNormalizeColor() {
  if (hasRequiredNormalizeColor) return normalizeColor;
  hasRequiredNormalizeColor = 1;
  Object.defineProperty(normalizeColor, "__esModule", {
    value: true
  });
  normalizeColor.default = void 0;
  var _isWebColor = _interopRequireDefault(/* @__PURE__ */ requireIsWebColor());
  var _processColor = _interopRequireDefault(/* @__PURE__ */ requireProcessColor());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var normalizeColor$1 = function normalizeColor2(color, opacity) {
    if (opacity === void 0) {
      opacity = 1;
    }
    if (color == null) return;
    if (typeof color === "string" && (0, _isWebColor.default)(color)) {
      return color;
    }
    var colorInt = (0, _processColor.default)(color);
    if (colorInt != null) {
      var r = colorInt >> 16 & 255;
      var g = colorInt >> 8 & 255;
      var b = colorInt & 255;
      var a = (colorInt >> 24 & 255) / 255;
      var alpha = (a * opacity).toFixed(2);
      return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    }
  };
  normalizeColor.default = normalizeColor$1;
  return normalizeColor;
}
var hasRequiredNormalizeValueWithProperty;
function requireNormalizeValueWithProperty() {
  if (hasRequiredNormalizeValueWithProperty) return normalizeValueWithProperty;
  hasRequiredNormalizeValueWithProperty = 1;
  Object.defineProperty(normalizeValueWithProperty, "__esModule", {
    value: true
  });
  normalizeValueWithProperty.default = normalizeValueWithProperty$1;
  var _unitlessNumbers = _interopRequireDefault(/* @__PURE__ */ requireUnitlessNumbers$1());
  var _normalizeColor = _interopRequireDefault(/* @__PURE__ */ requireNormalizeColor());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var colorProps = {
    backgroundColor: true,
    borderColor: true,
    borderTopColor: true,
    borderRightColor: true,
    borderBottomColor: true,
    borderLeftColor: true,
    color: true,
    shadowColor: true,
    textDecorationColor: true,
    textShadowColor: true
  };
  function normalizeValueWithProperty$1(value, property) {
    var returnValue = value;
    if ((property == null || !_unitlessNumbers.default[property]) && typeof value === "number") {
      returnValue = value + "px";
    } else if (property != null && colorProps[property]) {
      returnValue = (0, _normalizeColor.default)(value);
    }
    return returnValue;
  }
  return normalizeValueWithProperty;
}
var canUseDom = {};
var hasRequiredCanUseDom;
function requireCanUseDom() {
  if (hasRequiredCanUseDom) return canUseDom;
  hasRequiredCanUseDom = 1;
  Object.defineProperty(canUseDom, "__esModule", {
    value: true
  });
  canUseDom.default = void 0;
  var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
  canUseDom.default = canUseDOM;
  return canUseDom;
}
var hasRequiredCreateReactDOMStyle;
function requireCreateReactDOMStyle() {
  if (hasRequiredCreateReactDOMStyle) return createReactDOMStyle;
  hasRequiredCreateReactDOMStyle = 1;
  Object.defineProperty(createReactDOMStyle, "__esModule", {
    value: true
  });
  createReactDOMStyle.default = void 0;
  var _normalizeValueWithProperty = _interopRequireDefault(/* @__PURE__ */ requireNormalizeValueWithProperty());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var emptyObject = {};
  var supportsCSS3TextDecoration = !_canUseDom.default || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none"));
  var MONOSPACE_FONT_STACK = "monospace,monospace";
  var SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
  var STYLE_SHORT_FORM_EXPANSIONS = {
    borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
    borderBlockColor: ["borderTopColor", "borderBottomColor"],
    borderInlineColor: ["borderRightColor", "borderLeftColor"],
    borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
    borderStyle: ["borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"],
    borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
    borderInlineStyle: ["borderRightStyle", "borderLeftStyle"],
    borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
    borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
    borderInlineWidth: ["borderRightWidth", "borderLeftWidth"],
    insetBlock: ["top", "bottom"],
    insetInline: ["left", "right"],
    marginBlock: ["marginTop", "marginBottom"],
    marginInline: ["marginRight", "marginLeft"],
    paddingBlock: ["paddingTop", "paddingBottom"],
    paddingInline: ["paddingRight", "paddingLeft"],
    overflow: ["overflowX", "overflowY"],
    overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
    borderBlockStartColor: ["borderTopColor"],
    borderBlockStartStyle: ["borderTopStyle"],
    borderBlockStartWidth: ["borderTopWidth"],
    borderBlockEndColor: ["borderBottomColor"],
    borderBlockEndStyle: ["borderBottomStyle"],
    borderBlockEndWidth: ["borderBottomWidth"],
    //borderInlineStartColor: ['borderLeftColor'],
    //borderInlineStartStyle: ['borderLeftStyle'],
    //borderInlineStartWidth: ['borderLeftWidth'],
    //borderInlineEndColor: ['borderRightColor'],
    //borderInlineEndStyle: ['borderRightStyle'],
    //borderInlineEndWidth: ['borderRightWidth'],
    borderEndStartRadius: ["borderBottomLeftRadius"],
    borderEndEndRadius: ["borderBottomRightRadius"],
    borderStartStartRadius: ["borderTopLeftRadius"],
    borderStartEndRadius: ["borderTopRightRadius"],
    insetBlockEnd: ["bottom"],
    insetBlockStart: ["top"],
    //insetInlineEnd: ['right'],
    //insetInlineStart: ['left'],
    marginBlockStart: ["marginTop"],
    marginBlockEnd: ["marginBottom"],
    //marginInlineStart: ['marginLeft'],
    //marginInlineEnd: ['marginRight'],
    paddingBlockStart: ["paddingTop"],
    paddingBlockEnd: ["paddingBottom"]
    //paddingInlineStart: ['marginLeft'],
    //paddingInlineEnd: ['marginRight'],
  };
  var createReactDOMStyle$1 = (style, isInline) => {
    if (!style) {
      return emptyObject;
    }
    var resolvedStyle = {};
    var _loop = function _loop2() {
      var value = style[prop];
      if (
        // Ignore everything with a null value
        value == null
      ) {
        return "continue";
      }
      if (prop === "backgroundClip") {
        if (value === "text") {
          resolvedStyle.backgroundClip = value;
          resolvedStyle.WebkitBackgroundClip = value;
        }
      } else if (prop === "flex") {
        if (value === -1) {
          resolvedStyle.flexGrow = 0;
          resolvedStyle.flexShrink = 1;
          resolvedStyle.flexBasis = "auto";
        } else {
          resolvedStyle.flex = value;
        }
      } else if (prop === "font") {
        resolvedStyle[prop] = value.replace("System", SYSTEM_FONT_STACK);
      } else if (prop === "fontFamily") {
        if (value.indexOf("System") > -1) {
          var stack = value.split(/,\s*/);
          stack[stack.indexOf("System")] = SYSTEM_FONT_STACK;
          resolvedStyle[prop] = stack.join(",");
        } else if (value === "monospace") {
          resolvedStyle[prop] = MONOSPACE_FONT_STACK;
        } else {
          resolvedStyle[prop] = value;
        }
      } else if (prop === "textDecorationLine") {
        if (!supportsCSS3TextDecoration) {
          resolvedStyle.textDecoration = value;
        } else {
          resolvedStyle.textDecorationLine = value;
        }
      } else if (prop === "writingDirection") {
        resolvedStyle.direction = value;
      } else {
        var _value = (0, _normalizeValueWithProperty.default)(style[prop], prop);
        var longFormProperties = STYLE_SHORT_FORM_EXPANSIONS[prop];
        if (isInline && prop === "inset") {
          if (style.insetInline == null) {
            resolvedStyle.left = _value;
            resolvedStyle.right = _value;
          }
          if (style.insetBlock == null) {
            resolvedStyle.top = _value;
            resolvedStyle.bottom = _value;
          }
        } else if (isInline && prop === "margin") {
          if (style.marginInline == null) {
            resolvedStyle.marginLeft = _value;
            resolvedStyle.marginRight = _value;
          }
          if (style.marginBlock == null) {
            resolvedStyle.marginTop = _value;
            resolvedStyle.marginBottom = _value;
          }
        } else if (isInline && prop === "padding") {
          if (style.paddingInline == null) {
            resolvedStyle.paddingLeft = _value;
            resolvedStyle.paddingRight = _value;
          }
          if (style.paddingBlock == null) {
            resolvedStyle.paddingTop = _value;
            resolvedStyle.paddingBottom = _value;
          }
        } else if (longFormProperties) {
          longFormProperties.forEach((longForm, i) => {
            if (style[longForm] == null) {
              resolvedStyle[longForm] = _value;
            }
          });
        } else {
          resolvedStyle[prop] = _value;
        }
      }
    };
    for (var prop in style) {
      var _ret = _loop();
      if (_ret === "continue") continue;
    }
    return resolvedStyle;
  };
  createReactDOMStyle.default = createReactDOMStyle$1;
  return createReactDOMStyle;
}
var hash = {};
var hasRequiredHash;
function requireHash() {
  if (hasRequiredHash) return hash;
  hasRequiredHash = 1;
  Object.defineProperty(hash, "__esModule", {
    value: true
  });
  hash.default = void 0;
  function murmurhash2_32_gc(str, seed) {
    var l = str.length, h = seed ^ l, i = 0, k;
    while (l >= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
      k ^= k >>> 24;
      k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16) ^ k;
      l -= 4;
      ++i;
    }
    switch (l) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
    }
    h ^= h >>> 13;
    h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
    h ^= h >>> 15;
    return h >>> 0;
  }
  var hash$1 = (str) => murmurhash2_32_gc(str, 1).toString(36);
  hash.default = hash$1;
  return hash;
}
var hyphenateStyleName$2 = {};
var hasRequiredHyphenateStyleName;
function requireHyphenateStyleName() {
  if (hasRequiredHyphenateStyleName) return hyphenateStyleName$2;
  hasRequiredHyphenateStyleName = 1;
  Object.defineProperty(hyphenateStyleName$2, "__esModule", {
    value: true
  });
  hyphenateStyleName$2.default = void 0;
  var uppercasePattern2 = /[A-Z]/g;
  var msPattern2 = /^ms-/;
  var cache2 = {};
  function toHyphenLower2(match) {
    return "-" + match.toLowerCase();
  }
  function hyphenateStyleName2(name) {
    if (name in cache2) {
      return cache2[name];
    }
    var hName = name.replace(uppercasePattern2, toHyphenLower2);
    return cache2[name] = msPattern2.test(hName) ? "-" + hName : hName;
  }
  hyphenateStyleName$2.default = hyphenateStyleName2;
  return hyphenateStyleName$2;
}
var prefixStyles = {};
var createPrefixer = {};
var prefixProperty = {};
var capitalizeString = {};
var hasRequiredCapitalizeString;
function requireCapitalizeString() {
  if (hasRequiredCapitalizeString) return capitalizeString;
  hasRequiredCapitalizeString = 1;
  Object.defineProperty(capitalizeString, "__esModule", {
    value: true
  });
  capitalizeString.default = capitalizeString$1;
  function capitalizeString$1(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return capitalizeString;
}
var hasRequiredPrefixProperty;
function requirePrefixProperty() {
  if (hasRequiredPrefixProperty) return prefixProperty;
  hasRequiredPrefixProperty = 1;
  Object.defineProperty(prefixProperty, "__esModule", {
    value: true
  });
  prefixProperty.default = prefixProperty$1;
  var _capitalizeString = requireCapitalizeString();
  var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function prefixProperty$1(prefixProperties, property, style) {
    var requiredPrefixes = prefixProperties[property];
    if (requiredPrefixes && style.hasOwnProperty(property)) {
      var capitalizedProperty = (0, _capitalizeString2.default)(property);
      for (var i = 0; i < requiredPrefixes.length; ++i) {
        var prefixedProperty = requiredPrefixes[i] + capitalizedProperty;
        if (!style[prefixedProperty]) {
          style[prefixedProperty] = style[property];
        }
      }
    }
    return style;
  }
  return prefixProperty;
}
var prefixValue = {};
var hasRequiredPrefixValue;
function requirePrefixValue() {
  if (hasRequiredPrefixValue) return prefixValue;
  hasRequiredPrefixValue = 1;
  Object.defineProperty(prefixValue, "__esModule", {
    value: true
  });
  prefixValue.default = prefixValue$1;
  function prefixValue$1(plugins, property, value, style, metaData) {
    for (var i = 0, len = plugins.length; i < len; ++i) {
      var processedValue = plugins[i](property, value, style, metaData);
      if (processedValue) {
        return processedValue;
      }
    }
  }
  return prefixValue;
}
var addNewValuesOnly = {};
var hasRequiredAddNewValuesOnly;
function requireAddNewValuesOnly() {
  if (hasRequiredAddNewValuesOnly) return addNewValuesOnly;
  hasRequiredAddNewValuesOnly = 1;
  Object.defineProperty(addNewValuesOnly, "__esModule", {
    value: true
  });
  addNewValuesOnly.default = addNewValuesOnly$1;
  function addIfNew(list, value) {
    if (list.indexOf(value) === -1) {
      list.push(value);
    }
  }
  function addNewValuesOnly$1(list, values) {
    if (Array.isArray(values)) {
      for (var i = 0, len = values.length; i < len; ++i) {
        addIfNew(list, values[i]);
      }
    } else {
      addIfNew(list, values);
    }
  }
  return addNewValuesOnly;
}
var isObject = {};
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject;
  hasRequiredIsObject = 1;
  Object.defineProperty(isObject, "__esModule", {
    value: true
  });
  isObject.default = isObject$1;
  function isObject$1(value) {
    return value instanceof Object && !Array.isArray(value);
  }
  return isObject;
}
var hasRequiredCreatePrefixer;
function requireCreatePrefixer() {
  if (hasRequiredCreatePrefixer) return createPrefixer;
  hasRequiredCreatePrefixer = 1;
  Object.defineProperty(createPrefixer, "__esModule", {
    value: true
  });
  createPrefixer.default = createPrefixer$1;
  var _prefixProperty = requirePrefixProperty();
  var _prefixProperty2 = _interopRequireDefault(_prefixProperty);
  var _prefixValue = requirePrefixValue();
  var _prefixValue2 = _interopRequireDefault(_prefixValue);
  var _addNewValuesOnly = requireAddNewValuesOnly();
  var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);
  var _isObject = requireIsObject();
  var _isObject2 = _interopRequireDefault(_isObject);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function createPrefixer$1(_ref) {
    var prefixMap = _ref.prefixMap, plugins = _ref.plugins;
    return function prefix(style) {
      for (var property in style) {
        var value = style[property];
        if ((0, _isObject2.default)(value)) {
          style[property] = prefix(value);
        } else if (Array.isArray(value)) {
          var combinedValue = [];
          for (var i = 0, len = value.length; i < len; ++i) {
            var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
            (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
          }
          if (combinedValue.length > 0) {
            style[property] = combinedValue;
          }
        } else {
          var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);
          if (_processedValue) {
            style[property] = _processedValue;
          }
          style = (0, _prefixProperty2.default)(prefixMap, property, style);
        }
      }
      return style;
    };
  }
  return createPrefixer;
}
var _static = {};
var backgroundClip = {};
var hasRequiredBackgroundClip;
function requireBackgroundClip() {
  if (hasRequiredBackgroundClip) return backgroundClip;
  hasRequiredBackgroundClip = 1;
  Object.defineProperty(backgroundClip, "__esModule", {
    value: true
  });
  backgroundClip.default = backgroundClip$1;
  function backgroundClip$1() {
    return null;
  }
  return backgroundClip;
}
var crossFade = {};
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function filterUniqueArray(arr) {
  return arr.filter(function(val, index) {
    return arr.lastIndexOf(val) === index;
  });
}
function assignStyle(base) {
  for (var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; ++i) {
    var style = i + 1 < 1 || arguments.length <= i + 1 ? void 0 : arguments[i + 1];
    for (var property in style) {
      var value = style[property];
      var baseValue = base[property];
      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value));
          continue;
        }
        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue].concat(_toConsumableArray(value)));
          continue;
        }
        if (_typeof(value) === "object") {
          base[property] = assignStyle({}, baseValue, value);
          continue;
        }
      }
      base[property] = value;
    }
  }
  return base;
}
var DASH = /-([a-z])/g;
var MS = /^Ms/g;
var cache$1 = {};
function toUpper(match) {
  return match[1].toUpperCase();
}
function camelCaseProperty(property) {
  if (cache$1.hasOwnProperty(property)) {
    return cache$1[property];
  }
  var camelProp = property.replace(DASH, toUpper).replace(MS, "ms");
  cache$1[property] = camelProp;
  return camelProp;
}
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
const hyphenateStyleName$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hyphenateStyleName
}, Symbol.toStringTag, { value: "Module" }));
function hyphenateProperty$1(property) {
  return hyphenateStyleName(property);
}
function cssifyDeclaration(property, value) {
  return hyphenateProperty$1(property) + ":" + value;
}
function cssifyObject(style) {
  var css = "";
  for (var property in style) {
    var value = style[property];
    if (typeof value !== "string" && typeof value !== "number") {
      continue;
    }
    if (css) {
      css += ";";
    }
    css += cssifyDeclaration(property, value);
  }
  return css;
}
var RE$3 = /^(Webkit|Moz|O|ms)/;
function isPrefixedProperty(property) {
  return RE$3.test(property);
}
var RE$2 = /-webkit-|-moz-|-ms-/;
function isPrefixedValue$1(value) {
  return typeof value === "string" && RE$2.test(value);
}
var unitlessProperties = {
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixedUnitlessProperties = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"];
var prefixes = ["Webkit", "ms", "Moz", "O"];
function getPrefixedProperty(prefix, property) {
  return prefix + property.charAt(0).toUpperCase() + property.slice(1);
}
for (var i = 0, len = prefixedUnitlessProperties.length; i < len; ++i) {
  var property = prefixedUnitlessProperties[i];
  unitlessProperties[property] = true;
  for (var j = 0, jLen = prefixes.length; j < jLen; ++j) {
    unitlessProperties[getPrefixedProperty(prefixes[j], property)] = true;
  }
}
for (var _property in unitlessProperties) {
  unitlessProperties[hyphenateProperty$1(_property)] = true;
}
function isUnitlessProperty(property) {
  return unitlessProperties.hasOwnProperty(property);
}
var RE$1 = /^(ms|Webkit|Moz|O)/;
function unprefixProperty(property) {
  var propertyWithoutPrefix = property.replace(RE$1, "");
  return propertyWithoutPrefix.charAt(0).toLowerCase() + propertyWithoutPrefix.slice(1);
}
function normalizeProperty(property) {
  return unprefixProperty(camelCaseProperty(property));
}
function resolveArrayValue(property, value) {
  return value.join(";" + hyphenateProperty$1(property) + ":");
}
var RE = /(-ms-|-webkit-|-moz-|-o-)/g;
function unprefixValue(value) {
  if (typeof value === "string") {
    return value.replace(RE, "");
  }
  return value;
}
const es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignStyle,
  camelCaseProperty,
  cssifyDeclaration,
  cssifyObject,
  hyphenateProperty: hyphenateProperty$1,
  isPrefixedProperty,
  isPrefixedValue: isPrefixedValue$1,
  isUnitlessProperty,
  normalizeProperty,
  resolveArrayValue,
  unprefixProperty,
  unprefixValue
}, Symbol.toStringTag, { value: "Module" }));
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(es);
var hasRequiredCrossFade;
function requireCrossFade() {
  if (hasRequiredCrossFade) return crossFade;
  hasRequiredCrossFade = 1;
  Object.defineProperty(crossFade, "__esModule", {
    value: true
  });
  crossFade.default = crossFade$1;
  var _cssInJsUtils = require$$0$1;
  var CROSS_FADE_REGEX = /cross-fade\(/g;
  var prefixes2 = ["-webkit-", ""];
  function crossFade$1(property, value) {
    if (typeof value === "string" && !(0, _cssInJsUtils.isPrefixedValue)(value) && value.indexOf("cross-fade(") !== -1) {
      return prefixes2.map(function(prefix) {
        return value.replace(CROSS_FADE_REGEX, prefix + "cross-fade(");
      });
    }
  }
  return crossFade;
}
var cursor = {};
var hasRequiredCursor;
function requireCursor() {
  if (hasRequiredCursor) return cursor;
  hasRequiredCursor = 1;
  Object.defineProperty(cursor, "__esModule", {
    value: true
  });
  cursor.default = cursor$1;
  var prefixes2 = ["-webkit-", "-moz-", ""];
  var values = {
    "zoom-in": true,
    "zoom-out": true,
    grab: true,
    grabbing: true
  };
  function cursor$1(property, value) {
    if (property === "cursor" && values.hasOwnProperty(value)) {
      return prefixes2.map(function(prefix) {
        return prefix + value;
      });
    }
  }
  return cursor;
}
var filter = {};
var hasRequiredFilter;
function requireFilter() {
  if (hasRequiredFilter) return filter;
  hasRequiredFilter = 1;
  Object.defineProperty(filter, "__esModule", {
    value: true
  });
  filter.default = filter$1;
  var _cssInJsUtils = require$$0$1;
  var FILTER_REGEX = /filter\(/g;
  var prefixes2 = ["-webkit-", ""];
  function filter$1(property, value) {
    if (typeof value === "string" && !(0, _cssInJsUtils.isPrefixedValue)(value) && value.indexOf("filter(") !== -1) {
      return prefixes2.map(function(prefix) {
        return value.replace(FILTER_REGEX, prefix + "filter(");
      });
    }
  }
  return filter;
}
var imageSet = {};
var isPrefixedValue = {};
var hasRequiredIsPrefixedValue;
function requireIsPrefixedValue() {
  if (hasRequiredIsPrefixedValue) return isPrefixedValue;
  hasRequiredIsPrefixedValue = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = isPrefixedValue2;
    var RE2 = /-webkit-|-moz-|-ms-/;
    function isPrefixedValue2(value) {
      return typeof value === "string" && RE2.test(value);
    }
  })(isPrefixedValue);
  return isPrefixedValue;
}
var hasRequiredImageSet;
function requireImageSet() {
  if (hasRequiredImageSet) return imageSet;
  hasRequiredImageSet = 1;
  Object.defineProperty(imageSet, "__esModule", {
    value: true
  });
  imageSet.default = imageSet$1;
  var _isPrefixedValue = /* @__PURE__ */ requireIsPrefixedValue();
  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var prefixes2 = ["-webkit-", ""];
  function imageSet$1(property, value) {
    if (typeof value === "string" && !(0, _isPrefixedValue2.default)(value) && value.indexOf("image-set(") > -1) {
      return prefixes2.map(function(prefix) {
        return value.replace(/image-set\(/g, prefix + "image-set(");
      });
    }
  }
  return imageSet;
}
var logical = {};
var hasRequiredLogical;
function requireLogical() {
  if (hasRequiredLogical) return logical;
  hasRequiredLogical = 1;
  Object.defineProperty(logical, "__esModule", {
    value: true
  });
  logical.default = logical$1;
  var alternativeProps = {
    marginBlockStart: ["WebkitMarginBefore"],
    marginBlockEnd: ["WebkitMarginAfter"],
    marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
    marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
    paddingBlockStart: ["WebkitPaddingBefore"],
    paddingBlockEnd: ["WebkitPaddingAfter"],
    paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
    paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
    borderBlockStart: ["WebkitBorderBefore"],
    borderBlockStartColor: ["WebkitBorderBeforeColor"],
    borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
    borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
    borderBlockEnd: ["WebkitBorderAfter"],
    borderBlockEndColor: ["WebkitBorderAfterColor"],
    borderBlockEndStyle: ["WebkitBorderAfterStyle"],
    borderBlockEndWidth: ["WebkitBorderAfterWidth"],
    borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
    borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
    borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
    borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
    borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
    borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
    borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
    borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
  };
  function logical$1(property, value, style) {
    if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
      var alternativePropList = alternativeProps[property];
      for (var i = 0, len = alternativePropList.length; i < len; ++i) {
        style[alternativePropList[i]] = value;
      }
    }
  }
  return logical;
}
var position = {};
var hasRequiredPosition$1;
function requirePosition$1() {
  if (hasRequiredPosition$1) return position;
  hasRequiredPosition$1 = 1;
  Object.defineProperty(position, "__esModule", {
    value: true
  });
  position.default = position$1;
  function position$1(property, value) {
    if (property === "position" && value === "sticky") {
      return ["-webkit-sticky", "sticky"];
    }
  }
  return position;
}
var sizing = {};
var hasRequiredSizing;
function requireSizing() {
  if (hasRequiredSizing) return sizing;
  hasRequiredSizing = 1;
  Object.defineProperty(sizing, "__esModule", {
    value: true
  });
  sizing.default = sizing$1;
  var prefixes2 = ["-webkit-", "-moz-", ""];
  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values = {
    "min-content": true,
    "max-content": true,
    "fill-available": true,
    "fit-content": true,
    "contain-floats": true
  };
  function sizing$1(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return prefixes2.map(function(prefix) {
        return prefix + value;
      });
    }
  }
  return sizing;
}
var transition = {};
var hyphenateProperty = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(hyphenateStyleName$1);
var hasRequiredHyphenateProperty;
function requireHyphenateProperty() {
  if (hasRequiredHyphenateProperty) return hyphenateProperty;
  hasRequiredHyphenateProperty = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = hyphenateProperty2;
    var _hyphenateStyleName = require$$0;
    var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function hyphenateProperty2(property) {
      return (0, _hyphenateStyleName2["default"])(property);
    }
  })(hyphenateProperty);
  return hyphenateProperty;
}
var hasRequiredTransition;
function requireTransition() {
  if (hasRequiredTransition) return transition;
  hasRequiredTransition = 1;
  Object.defineProperty(transition, "__esModule", {
    value: true
  });
  transition.default = transition$1;
  var _hyphenateProperty = /* @__PURE__ */ requireHyphenateProperty();
  var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
  var _isPrefixedValue = /* @__PURE__ */ requireIsPrefixedValue();
  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
  var _capitalizeString = requireCapitalizeString();
  var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };
  var prefixMapping = {
    Webkit: "-webkit-",
    Moz: "-moz-",
    ms: "-ms-"
  };
  function prefixValue2(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) {
      return value;
    }
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];
      for (var property in propertyPrefixMap) {
        var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
        if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== "order") {
          var prefixes2 = propertyPrefixMap[property];
          for (var j = 0, pLen = prefixes2.length; j < pLen; ++j) {
            values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes2[j]] + dashCaseProperty));
          }
        }
      }
      multipleValues[i] = values.join(",");
    }
    return multipleValues.join(",");
  }
  function transition$1(property, value, style, propertyPrefixMap) {
    if (typeof value === "string" && properties.hasOwnProperty(property)) {
      var outputValue = prefixValue2(value, propertyPrefixMap);
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
        return !/-moz-|-ms-/.test(val);
      }).join(",");
      if (property.indexOf("Webkit") > -1) {
        return webkitOutput;
      }
      var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
        return !/-webkit-|-ms-/.test(val);
      }).join(",");
      if (property.indexOf("Moz") > -1) {
        return mozOutput;
      }
      style["Webkit" + (0, _capitalizeString2.default)(property)] = webkitOutput;
      style["Moz" + (0, _capitalizeString2.default)(property)] = mozOutput;
      return outputValue;
    }
  }
  return transition;
}
var hasRequired_static;
function require_static() {
  if (hasRequired_static) return _static;
  hasRequired_static = 1;
  Object.defineProperty(_static, "__esModule", {
    value: true
  });
  _static.default = void 0;
  var _backgroundClip = _interopRequireDefault(requireBackgroundClip());
  var _crossFade = _interopRequireDefault(requireCrossFade());
  var _cursor = _interopRequireDefault(requireCursor());
  var _filter = _interopRequireDefault(requireFilter());
  var _imageSet = _interopRequireDefault(requireImageSet());
  var _logical = _interopRequireDefault(requireLogical());
  var _position = _interopRequireDefault(requirePosition$1());
  var _sizing = _interopRequireDefault(requireSizing());
  var _transition = _interopRequireDefault(requireTransition());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var w = ["Webkit"];
  var m = ["Moz"];
  var wm = ["Webkit", "Moz"];
  var wms = ["Webkit", "ms"];
  var wmms = ["Webkit", "Moz", "ms"];
  _static.default = {
    plugins: [_backgroundClip.default, _crossFade.default, _cursor.default, _filter.default, _imageSet.default, _logical.default, _position.default, _sizing.default, _transition.default],
    prefixMap: {
      appearance: wmms,
      userSelect: wm,
      textEmphasisPosition: wms,
      textEmphasis: wms,
      textEmphasisStyle: wms,
      textEmphasisColor: wms,
      boxDecorationBreak: wms,
      clipPath: w,
      maskImage: wms,
      maskMode: wms,
      maskRepeat: wms,
      maskPosition: wms,
      maskClip: wms,
      maskOrigin: wms,
      maskSize: wms,
      maskComposite: wms,
      mask: wms,
      maskBorderSource: wms,
      maskBorderMode: wms,
      maskBorderSlice: wms,
      maskBorderWidth: wms,
      maskBorderOutset: wms,
      maskBorderRepeat: wms,
      maskBorder: wms,
      maskType: wms,
      textDecorationStyle: w,
      textDecorationSkip: w,
      textDecorationLine: w,
      textDecorationColor: w,
      filter: w,
      breakAfter: w,
      breakBefore: w,
      breakInside: w,
      columnCount: w,
      columnFill: w,
      columnGap: w,
      columnRule: w,
      columnRuleColor: w,
      columnRuleStyle: w,
      columnRuleWidth: w,
      columns: w,
      columnSpan: w,
      columnWidth: w,
      backdropFilter: w,
      hyphens: w,
      flowInto: w,
      flowFrom: w,
      regionFragment: w,
      textOrientation: w,
      tabSize: m,
      fontKerning: w,
      textSizeAdjust: w
    }
  };
  return _static;
}
var hasRequiredPrefixStyles;
function requirePrefixStyles() {
  if (hasRequiredPrefixStyles) return prefixStyles;
  hasRequiredPrefixStyles = 1;
  Object.defineProperty(prefixStyles, "__esModule", {
    value: true
  });
  prefixStyles.default = void 0;
  var _createPrefixer = _interopRequireDefault(requireCreatePrefixer());
  var _static2 = _interopRequireDefault(/* @__PURE__ */ require_static());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var prefixAll = (0, _createPrefixer.default)(_static2.default);
  prefixStyles.default = prefixAll;
  return prefixStyles;
}
var hasRequiredCompiler;
function requireCompiler() {
  if (hasRequiredCompiler) return compiler;
  hasRequiredCompiler = 1;
  Object.defineProperty(compiler, "__esModule", {
    value: true
  });
  compiler.atomic = atomic;
  compiler.classic = classic;
  compiler.inline = inline;
  compiler.stringifyValueWithProperty = stringifyValueWithProperty;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _createReactDOMStyle = _interopRequireDefault(/* @__PURE__ */ requireCreateReactDOMStyle());
  var _hash = _interopRequireDefault(/* @__PURE__ */ requireHash());
  var _hyphenateStyleName = _interopRequireDefault(/* @__PURE__ */ requireHyphenateStyleName());
  var _normalizeValueWithProperty = _interopRequireDefault(/* @__PURE__ */ requireNormalizeValueWithProperty());
  var _prefixStyles = _interopRequireDefault(/* @__PURE__ */ requirePrefixStyles());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["animationKeyframes"];
  var cache2 = /* @__PURE__ */ new Map();
  var emptyObject = {};
  var classicGroup = 1;
  var atomicGroup = 3;
  var customGroup = {
    borderColor: 2,
    borderRadius: 2,
    borderStyle: 2,
    borderWidth: 2,
    display: 2,
    flex: 2,
    inset: 2,
    margin: 2,
    overflow: 2,
    overscrollBehavior: 2,
    padding: 2,
    insetBlock: 2.1,
    insetInline: 2.1,
    marginInline: 2.1,
    marginBlock: 2.1,
    paddingInline: 2.1,
    paddingBlock: 2.1,
    borderBlockStartColor: 2.2,
    borderBlockStartStyle: 2.2,
    borderBlockStartWidth: 2.2,
    borderBlockEndColor: 2.2,
    borderBlockEndStyle: 2.2,
    borderBlockEndWidth: 2.2,
    borderInlineStartColor: 2.2,
    borderInlineStartStyle: 2.2,
    borderInlineStartWidth: 2.2,
    borderInlineEndColor: 2.2,
    borderInlineEndStyle: 2.2,
    borderInlineEndWidth: 2.2,
    borderEndStartRadius: 2.2,
    borderEndEndRadius: 2.2,
    borderStartStartRadius: 2.2,
    borderStartEndRadius: 2.2,
    insetBlockEnd: 2.2,
    insetBlockStart: 2.2,
    insetInlineEnd: 2.2,
    insetInlineStart: 2.2,
    marginBlockStart: 2.2,
    marginBlockEnd: 2.2,
    marginInlineStart: 2.2,
    marginInlineEnd: 2.2,
    paddingBlockStart: 2.2,
    paddingBlockEnd: 2.2,
    paddingInlineStart: 2.2,
    paddingInlineEnd: 2.2
  };
  var borderTopLeftRadius = "borderTopLeftRadius";
  var borderTopRightRadius = "borderTopRightRadius";
  var borderBottomLeftRadius = "borderBottomLeftRadius";
  var borderBottomRightRadius = "borderBottomRightRadius";
  var borderLeftColor = "borderLeftColor";
  var borderLeftStyle = "borderLeftStyle";
  var borderLeftWidth = "borderLeftWidth";
  var borderRightColor = "borderRightColor";
  var borderRightStyle = "borderRightStyle";
  var borderRightWidth = "borderRightWidth";
  var right = "right";
  var marginLeft = "marginLeft";
  var marginRight = "marginRight";
  var paddingLeft = "paddingLeft";
  var paddingRight = "paddingRight";
  var left = "left";
  var PROPERTIES_FLIP = {
    [borderTopLeftRadius]: borderTopRightRadius,
    [borderTopRightRadius]: borderTopLeftRadius,
    [borderBottomLeftRadius]: borderBottomRightRadius,
    [borderBottomRightRadius]: borderBottomLeftRadius,
    [borderLeftColor]: borderRightColor,
    [borderLeftStyle]: borderRightStyle,
    [borderLeftWidth]: borderRightWidth,
    [borderRightColor]: borderLeftColor,
    [borderRightStyle]: borderLeftStyle,
    [borderRightWidth]: borderLeftWidth,
    [left]: right,
    [marginLeft]: marginRight,
    [marginRight]: marginLeft,
    [paddingLeft]: paddingRight,
    [paddingRight]: paddingLeft,
    [right]: left
  };
  var PROPERTIES_I18N = {
    borderStartStartRadius: borderTopLeftRadius,
    borderStartEndRadius: borderTopRightRadius,
    borderEndStartRadius: borderBottomLeftRadius,
    borderEndEndRadius: borderBottomRightRadius,
    borderInlineStartColor: borderLeftColor,
    borderInlineStartStyle: borderLeftStyle,
    borderInlineStartWidth: borderLeftWidth,
    borderInlineEndColor: borderRightColor,
    borderInlineEndStyle: borderRightStyle,
    borderInlineEndWidth: borderRightWidth,
    insetInlineEnd: right,
    insetInlineStart: left,
    marginInlineStart: marginLeft,
    marginInlineEnd: marginRight,
    paddingInlineStart: paddingLeft,
    paddingInlineEnd: paddingRight
  };
  var PROPERTIES_VALUE = ["clear", "float", "textAlign"];
  function atomic(style) {
    var compiledStyle = {
      $$css: true
    };
    var compiledRules = [];
    function atomicCompile(srcProp, prop, value) {
      var valueString = stringifyValueWithProperty(value, prop);
      var cacheKey = prop + valueString;
      var cachedResult = cache2.get(cacheKey);
      var identifier;
      if (cachedResult != null) {
        identifier = cachedResult[0];
        compiledRules.push(cachedResult[1]);
      } else {
        var v = srcProp !== prop ? cacheKey : valueString;
        identifier = createIdentifier("r", srcProp, v);
        var order = customGroup[srcProp] || atomicGroup;
        var rules = createAtomicRules(identifier, prop, value);
        var orderedRules = [rules, order];
        compiledRules.push(orderedRules);
        cache2.set(cacheKey, [identifier, orderedRules]);
      }
      return identifier;
    }
    Object.keys(style).sort().forEach((srcProp) => {
      var value = style[srcProp];
      if (value != null) {
        var localizeableValue;
        if (PROPERTIES_VALUE.indexOf(srcProp) > -1) {
          var _left = atomicCompile(srcProp, srcProp, "left");
          var _right = atomicCompile(srcProp, srcProp, "right");
          if (value === "start") {
            localizeableValue = [_left, _right];
          } else if (value === "end") {
            localizeableValue = [_right, _left];
          }
        }
        var propPolyfill = PROPERTIES_I18N[srcProp];
        if (propPolyfill != null) {
          var ltr = atomicCompile(srcProp, propPolyfill, value);
          var rtl = atomicCompile(srcProp, PROPERTIES_FLIP[propPolyfill], value);
          localizeableValue = [ltr, rtl];
        }
        if (srcProp === "transitionProperty") {
          var values = Array.isArray(value) ? value : [value];
          var polyfillIndices = [];
          for (var i = 0; i < values.length; i++) {
            var val = values[i];
            if (typeof val === "string" && PROPERTIES_I18N[val] != null) {
              polyfillIndices.push(i);
            }
          }
          if (polyfillIndices.length > 0) {
            var ltrPolyfillValues = [...values];
            var rtlPolyfillValues = [...values];
            polyfillIndices.forEach((i2) => {
              var ltrVal = ltrPolyfillValues[i2];
              if (typeof ltrVal === "string") {
                var ltrPolyfill = PROPERTIES_I18N[ltrVal];
                var rtlPolyfill = PROPERTIES_FLIP[ltrPolyfill];
                ltrPolyfillValues[i2] = ltrPolyfill;
                rtlPolyfillValues[i2] = rtlPolyfill;
                var _ltr = atomicCompile(srcProp, srcProp, ltrPolyfillValues);
                var _rtl = atomicCompile(srcProp, srcProp, rtlPolyfillValues);
                localizeableValue = [_ltr, _rtl];
              }
            });
          }
        }
        if (localizeableValue == null) {
          localizeableValue = atomicCompile(srcProp, srcProp, value);
        } else {
          compiledStyle["$$css$localize"] = true;
        }
        compiledStyle[srcProp] = localizeableValue;
      }
    });
    return [compiledStyle, compiledRules];
  }
  function classic(style, name) {
    var compiledStyle = {
      $$css: true
    };
    var compiledRules = [];
    var animationKeyframes = style.animationKeyframes, rest = (0, _objectWithoutPropertiesLoose2.default)(style, _excluded);
    var identifier = createIdentifier("css", name, JSON.stringify(style));
    var selector = "." + identifier;
    var animationName;
    if (animationKeyframes != null) {
      var _processKeyframesValu = processKeyframesValue(animationKeyframes), animationNames = _processKeyframesValu[0], keyframesRules = _processKeyframesValu[1];
      animationName = animationNames.join(",");
      compiledRules.push(...keyframesRules);
    }
    var block = createDeclarationBlock((0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
      animationName
    }));
    compiledRules.push("" + selector + block);
    compiledStyle[identifier] = identifier;
    return [compiledStyle, [[compiledRules, classicGroup]]];
  }
  function inline(originalStyle, isRTL) {
    var style = originalStyle || emptyObject;
    var frozenProps = {};
    var nextStyle = {};
    var _loop = function _loop2() {
      var originalValue = style[originalProp];
      var prop = originalProp;
      var value = originalValue;
      if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
        return "continue";
      }
      if (PROPERTIES_VALUE.indexOf(originalProp) > -1) {
        if (originalValue === "start") {
          value = isRTL ? "right" : "left";
        } else if (originalValue === "end") {
          value = isRTL ? "left" : "right";
        }
      }
      var propPolyfill = PROPERTIES_I18N[originalProp];
      if (propPolyfill != null) {
        prop = isRTL ? PROPERTIES_FLIP[propPolyfill] : propPolyfill;
      }
      if (originalProp === "transitionProperty") {
        var originalValues = Array.isArray(originalValue) ? originalValue : [originalValue];
        originalValues.forEach((val, i) => {
          if (typeof val === "string") {
            var valuePolyfill = PROPERTIES_I18N[val];
            if (valuePolyfill != null) {
              originalValues[i] = isRTL ? PROPERTIES_FLIP[valuePolyfill] : valuePolyfill;
              value = originalValues.join(" ");
            }
          }
        });
      }
      if (!frozenProps[prop]) {
        nextStyle[prop] = value;
      }
      if (prop === originalProp) {
        frozenProps[prop] = true;
      }
    };
    for (var originalProp in style) {
      var _ret = _loop();
      if (_ret === "continue") continue;
    }
    return (0, _createReactDOMStyle.default)(nextStyle, true);
  }
  function stringifyValueWithProperty(value, property) {
    var normalizedValue = (0, _normalizeValueWithProperty.default)(value, property);
    return typeof normalizedValue !== "string" ? JSON.stringify(normalizedValue || "") : normalizedValue;
  }
  function createAtomicRules(identifier, property, value) {
    var rules = [];
    var selector = "." + identifier;
    switch (property) {
      case "animationKeyframes": {
        var _processKeyframesValu2 = processKeyframesValue(value), animationNames = _processKeyframesValu2[0], keyframesRules = _processKeyframesValu2[1];
        var block = createDeclarationBlock({
          animationName: animationNames.join(",")
        });
        rules.push("" + selector + block, ...keyframesRules);
        break;
      }
      // Equivalent to using '::placeholder'
      case "placeholderTextColor": {
        var _block = createDeclarationBlock({
          color: value,
          opacity: 1
        });
        rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
        break;
      }
      // Polyfill for additional 'pointer-events' values
      // See d13f78622b233a0afc0c7a200c0a0792c8ca9e58
      case "pointerEvents": {
        var finalValue = value;
        if (value === "auto" || value === "box-only") {
          finalValue = "auto!important";
          if (value === "box-only") {
            var _block2 = createDeclarationBlock({
              pointerEvents: "none"
            });
            rules.push(selector + ">*" + _block2);
          }
        } else if (value === "none" || value === "box-none") {
          finalValue = "none!important";
          if (value === "box-none") {
            var _block3 = createDeclarationBlock({
              pointerEvents: "auto"
            });
            rules.push(selector + ">*" + _block3);
          }
        }
        var _block4 = createDeclarationBlock({
          pointerEvents: finalValue
        });
        rules.push("" + selector + _block4);
        break;
      }
      // Polyfill for draft spec
      // https://drafts.csswg.org/css-scrollbars-1/
      case "scrollbarWidth": {
        if (value === "none") {
          rules.push(selector + "::-webkit-scrollbar{display:none}");
        }
        var _block5 = createDeclarationBlock({
          scrollbarWidth: value
        });
        rules.push("" + selector + _block5);
        break;
      }
      default: {
        var _block6 = createDeclarationBlock({
          [property]: value
        });
        rules.push("" + selector + _block6);
        break;
      }
    }
    return rules;
  }
  function createDeclarationBlock(style) {
    var domStyle = (0, _prefixStyles.default)((0, _createReactDOMStyle.default)(style));
    var declarationsString = Object.keys(domStyle).map((property) => {
      var value = domStyle[property];
      var prop = (0, _hyphenateStyleName.default)(property);
      if (Array.isArray(value)) {
        return value.map((v) => prop + ":" + v).join(";");
      } else {
        return prop + ":" + value;
      }
    }).sort().join(";");
    return "{" + declarationsString + ";}";
  }
  function createIdentifier(prefix, name, key) {
    var hashedString = (0, _hash.default)(name + key);
    return prefix + "-" + hashedString;
  }
  function createKeyframes(keyframes) {
    var prefixes2 = ["-webkit-", ""];
    var identifier = createIdentifier("r", "animation", JSON.stringify(keyframes));
    var steps = "{" + Object.keys(keyframes).map((stepName) => {
      var rule = keyframes[stepName];
      var block = createDeclarationBlock(rule);
      return "" + stepName + block;
    }).join("") + "}";
    var rules = prefixes2.map((prefix) => {
      return "@" + prefix + "keyframes " + identifier + steps;
    });
    return [identifier, rules];
  }
  function processKeyframesValue(keyframesValue) {
    if (typeof keyframesValue === "number") {
      throw new Error("Invalid CSS keyframes type: " + typeof keyframesValue);
    }
    var animationNames = [];
    var rules = [];
    var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
    value.forEach((keyframes) => {
      if (typeof keyframes === "string") {
        animationNames.push(keyframes);
      } else {
        var _createKeyframes = createKeyframes(keyframes), identifier = _createKeyframes[0], keyframesRules = _createKeyframes[1];
        animationNames.push(identifier);
        rules.push(...keyframesRules);
      }
    });
    return [animationNames, rules];
  }
  return compiler;
}
var dom = {};
var createCSSStyleSheet = {};
var hasRequiredCreateCSSStyleSheet;
function requireCreateCSSStyleSheet() {
  if (hasRequiredCreateCSSStyleSheet) return createCSSStyleSheet;
  hasRequiredCreateCSSStyleSheet = 1;
  Object.defineProperty(createCSSStyleSheet, "__esModule", {
    value: true
  });
  createCSSStyleSheet.default = createCSSStyleSheet$1;
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function createCSSStyleSheet$1(id, rootNode, textContent) {
    if (_canUseDom.default) {
      var root = rootNode != null ? rootNode : document;
      var element = root.getElementById(id);
      if (element == null) {
        element = document.createElement("style");
        element.setAttribute("id", id);
        if (typeof textContent === "string") {
          element.appendChild(document.createTextNode(textContent));
        }
        if (root instanceof ShadowRoot) {
          root.insertBefore(element, root.firstChild);
        } else {
          var head = root.head;
          if (head) {
            head.insertBefore(element, head.firstChild);
          }
        }
      }
      return element.sheet;
    } else {
      return null;
    }
  }
  return createCSSStyleSheet;
}
var createOrderedCSSStyleSheet = {};
var hasRequiredCreateOrderedCSSStyleSheet;
function requireCreateOrderedCSSStyleSheet() {
  if (hasRequiredCreateOrderedCSSStyleSheet) return createOrderedCSSStyleSheet;
  hasRequiredCreateOrderedCSSStyleSheet = 1;
  Object.defineProperty(createOrderedCSSStyleSheet, "__esModule", {
    value: true
  });
  createOrderedCSSStyleSheet.default = createOrderedCSSStyleSheet$1;
  var slice = Array.prototype.slice;
  function createOrderedCSSStyleSheet$1(sheet) {
    var groups = {};
    var selectors = {};
    if (sheet != null) {
      var group;
      slice.call(sheet.cssRules).forEach((cssRule, i) => {
        var cssText = cssRule.cssText;
        if (cssText.indexOf("stylesheet-group") > -1) {
          group = decodeGroupRule(cssRule);
          groups[group] = {
            start: i,
            rules: [cssText]
          };
        } else {
          var selectorText = getSelectorText(cssText);
          if (selectorText != null) {
            selectors[selectorText] = true;
            groups[group].rules.push(cssText);
          }
        }
      });
    }
    function sheetInsert(sheet2, group2, text) {
      var orderedGroups = getOrderedGroups(groups);
      var groupIndex = orderedGroups.indexOf(group2);
      var nextGroupIndex = groupIndex + 1;
      var nextGroup = orderedGroups[nextGroupIndex];
      var position2 = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet2.cssRules.length;
      var isInserted = insertRuleAt(sheet2, text, position2);
      if (isInserted) {
        if (groups[group2].start == null) {
          groups[group2].start = position2;
        }
        for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
          var groupNumber = orderedGroups[i];
          var previousStart = groups[groupNumber].start || 0;
          groups[groupNumber].start = previousStart + 1;
        }
      }
      return isInserted;
    }
    var OrderedCSSStyleSheet = {
      /**
       * The textContent of the style sheet.
       */
      getTextContent() {
        return getOrderedGroups(groups).map((group2) => {
          var rules = groups[group2].rules;
          var marker = rules.shift();
          rules.sort();
          rules.unshift(marker);
          return rules.join("\n");
        }).join("\n");
      },
      /**
       * Insert a rule into the style sheet
       */
      insert(cssText, groupValue) {
        var group2 = Number(groupValue);
        if (groups[group2] == null) {
          var markerRule = encodeGroupRule(group2);
          groups[group2] = {
            start: null,
            rules: [markerRule]
          };
          if (sheet != null) {
            sheetInsert(sheet, group2, markerRule);
          }
        }
        var selectorText = getSelectorText(cssText);
        if (selectorText != null && selectors[selectorText] == null) {
          selectors[selectorText] = true;
          groups[group2].rules.push(cssText);
          if (sheet != null) {
            var isInserted = sheetInsert(sheet, group2, cssText);
            if (!isInserted) {
              groups[group2].rules.pop();
            }
          }
        }
      }
    };
    return OrderedCSSStyleSheet;
  }
  function encodeGroupRule(group) {
    return '[stylesheet-group="' + group + '"]{}';
  }
  var groupPattern = /["']/g;
  function decodeGroupRule(cssRule) {
    return Number(cssRule.selectorText.split(groupPattern)[1]);
  }
  function getOrderedGroups(obj) {
    return Object.keys(obj).map(Number).sort((a, b) => a > b ? 1 : -1);
  }
  var selectorPattern = /\s*([,])\s*/g;
  function getSelectorText(cssText) {
    var selector = cssText.split("{")[0].trim();
    return selector !== "" ? selector.replace(selectorPattern, "$1") : null;
  }
  function insertRuleAt(root, cssText, position2) {
    try {
      root.insertRule(cssText, position2);
      return true;
    } catch (e) {
      return false;
    }
  }
  return createOrderedCSSStyleSheet;
}
var hasRequiredDom;
function requireDom() {
  if (hasRequiredDom) return dom;
  hasRequiredDom = 1;
  Object.defineProperty(dom, "__esModule", {
    value: true
  });
  dom.createSheet = createSheet;
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  var _createCSSStyleSheet = _interopRequireDefault(/* @__PURE__ */ requireCreateCSSStyleSheet());
  var _createOrderedCSSStyleSheet = _interopRequireDefault(/* @__PURE__ */ requireCreateOrderedCSSStyleSheet());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var defaultId = "react-native-stylesheet";
  var roots = /* @__PURE__ */ new WeakMap();
  var sheets = [];
  var initialRules = [
    // minimal top-level reset
    "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
    "body{margin:0;}",
    // minimal form pseudo-element reset
    "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
    "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
  ];
  function createSheet(root, id) {
    if (id === void 0) {
      id = defaultId;
    }
    var sheet;
    if (_canUseDom.default) {
      var rootNode = root != null ? root.getRootNode() : document;
      if (sheets.length === 0) {
        sheet = (0, _createOrderedCSSStyleSheet.default)((0, _createCSSStyleSheet.default)(id));
        initialRules.forEach((rule) => {
          sheet.insert(rule, 0);
        });
        roots.set(rootNode, sheets.length);
        sheets.push(sheet);
      } else {
        var index = roots.get(rootNode);
        if (index == null) {
          var initialSheet = sheets[0];
          var textContent = initialSheet != null ? initialSheet.getTextContent() : "";
          sheet = (0, _createOrderedCSSStyleSheet.default)((0, _createCSSStyleSheet.default)(id, rootNode, textContent));
          roots.set(rootNode, sheets.length);
          sheets.push(sheet);
        } else {
          sheet = sheets[index];
        }
      }
    } else {
      if (sheets.length === 0) {
        sheet = (0, _createOrderedCSSStyleSheet.default)((0, _createCSSStyleSheet.default)(id));
        initialRules.forEach((rule) => {
          sheet.insert(rule, 0);
        });
        sheets.push(sheet);
      } else {
        sheet = sheets[0];
      }
    }
    return {
      getTextContent() {
        return sheet.getTextContent();
      },
      id,
      insert(cssText, groupValue) {
        sheets.forEach((s) => {
          s.insert(cssText, groupValue);
        });
      }
    };
  }
  return dom;
}
var transformLocalizeStyle$1 = {};
var hasRequiredTransformLocalizeStyle$1;
function requireTransformLocalizeStyle$1() {
  if (hasRequiredTransformLocalizeStyle$1) return transformLocalizeStyle$1;
  hasRequiredTransformLocalizeStyle$1 = 1;
  Object.defineProperty(transformLocalizeStyle$1, "__esModule", {
    value: true
  });
  transformLocalizeStyle$1.localizeStyle = localizeStyle;
  var cache2 = /* @__PURE__ */ new WeakMap();
  var markerProp = "$$css$localize";
  function compileStyle(style, isRTL) {
    var compiledStyle = {};
    for (var prop in style) {
      if (prop !== markerProp) {
        var value = style[prop];
        if (Array.isArray(value)) {
          compiledStyle[prop] = isRTL ? value[1] : value[0];
        } else {
          compiledStyle[prop] = value;
        }
      }
    }
    return compiledStyle;
  }
  function localizeStyle(style, isRTL) {
    if (style[markerProp] != null) {
      var compiledStyleIndex = isRTL ? 1 : 0;
      if (cache2.has(style)) {
        var _cachedStyles = cache2.get(style);
        var _compiledStyle = _cachedStyles[compiledStyleIndex];
        if (_compiledStyle == null) {
          _compiledStyle = compileStyle(style, isRTL);
          _cachedStyles[compiledStyleIndex] = _compiledStyle;
          cache2.set(style, _cachedStyles);
        }
        return _compiledStyle;
      }
      var compiledStyle = compileStyle(style, isRTL);
      var cachedStyles = new Array(2);
      cachedStyles[compiledStyleIndex] = compiledStyle;
      cache2.set(style, cachedStyles);
      return compiledStyle;
    }
    return style;
  }
  return transformLocalizeStyle$1;
}
var transformLocalizeStyle;
var hasRequiredTransformLocalizeStyle;
function requireTransformLocalizeStyle() {
  if (hasRequiredTransformLocalizeStyle) return transformLocalizeStyle;
  hasRequiredTransformLocalizeStyle = 1;
  transformLocalizeStyle = /* @__PURE__ */ requireTransformLocalizeStyle$1();
  return transformLocalizeStyle;
}
var preprocess = {};
var warnOnce = {};
var hasRequiredWarnOnce;
function requireWarnOnce() {
  if (hasRequiredWarnOnce) return warnOnce;
  hasRequiredWarnOnce = 1;
  Object.defineProperty(warnOnce, "__esModule", {
    value: true
  });
  warnOnce.warnOnce = warnOnce$1;
  function warnOnce$1(key, message) {
  }
  return warnOnce;
}
var hasRequiredPreprocess;
function requirePreprocess() {
  if (hasRequiredPreprocess) return preprocess;
  hasRequiredPreprocess = 1;
  Object.defineProperty(preprocess, "__esModule", {
    value: true
  });
  preprocess.preprocess = preprocess.default = preprocess.createTransformValue = preprocess.createTextShadowValue = preprocess.createBoxShadowValue = void 0;
  var _normalizeColor = _interopRequireDefault(/* @__PURE__ */ requireNormalizeColor());
  var _normalizeValueWithProperty = _interopRequireDefault(/* @__PURE__ */ requireNormalizeValueWithProperty());
  var _warnOnce = /* @__PURE__ */ requireWarnOnce();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var emptyObject = {};
  var defaultOffset = {
    height: 0,
    width: 0
  };
  var createBoxShadowValue = (style) => {
    var shadowColor = style.shadowColor, shadowOffset = style.shadowOffset, shadowOpacity = style.shadowOpacity, shadowRadius = style.shadowRadius;
    var _ref = shadowOffset || defaultOffset, height = _ref.height, width = _ref.width;
    var offsetX = (0, _normalizeValueWithProperty.default)(width);
    var offsetY = (0, _normalizeValueWithProperty.default)(height);
    var blurRadius = (0, _normalizeValueWithProperty.default)(shadowRadius || 0);
    var color = (0, _normalizeColor.default)(shadowColor || "black", shadowOpacity);
    if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
      return offsetX + " " + offsetY + " " + blurRadius + " " + color;
    }
  };
  preprocess.createBoxShadowValue = createBoxShadowValue;
  var createTextShadowValue = (style) => {
    var textShadowColor = style.textShadowColor, textShadowOffset = style.textShadowOffset, textShadowRadius = style.textShadowRadius;
    var _ref2 = textShadowOffset || defaultOffset, height = _ref2.height, width = _ref2.width;
    var radius = textShadowRadius || 0;
    var offsetX = (0, _normalizeValueWithProperty.default)(width);
    var offsetY = (0, _normalizeValueWithProperty.default)(height);
    var blurRadius = (0, _normalizeValueWithProperty.default)(radius);
    var color = (0, _normalizeValueWithProperty.default)(textShadowColor, "textShadowColor");
    if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
      return offsetX + " " + offsetY + " " + blurRadius + " " + color;
    }
  };
  preprocess.createTextShadowValue = createTextShadowValue;
  var mapTransform = (transform) => {
    var type = Object.keys(transform)[0];
    var value = transform[type];
    if (type === "matrix" || type === "matrix3d") {
      return type + "(" + value.join(",") + ")";
    } else {
      var normalizedValue = (0, _normalizeValueWithProperty.default)(value, type);
      return type + "(" + normalizedValue + ")";
    }
  };
  var createTransformValue = (value) => {
    return value.map(mapTransform).join(" ");
  };
  preprocess.createTransformValue = createTransformValue;
  var PROPERTIES_STANDARD = {
    borderBottomEndRadius: "borderEndEndRadius",
    borderBottomStartRadius: "borderEndStartRadius",
    borderTopEndRadius: "borderStartEndRadius",
    borderTopStartRadius: "borderStartStartRadius",
    borderEndColor: "borderInlineEndColor",
    borderEndStyle: "borderInlineEndStyle",
    borderEndWidth: "borderInlineEndWidth",
    borderStartColor: "borderInlineStartColor",
    borderStartStyle: "borderInlineStartStyle",
    borderStartWidth: "borderInlineStartWidth",
    end: "insetInlineEnd",
    marginEnd: "marginInlineEnd",
    marginHorizontal: "marginInline",
    marginStart: "marginInlineStart",
    marginVertical: "marginBlock",
    paddingEnd: "paddingInlineEnd",
    paddingHorizontal: "paddingInline",
    paddingStart: "paddingInlineStart",
    paddingVertical: "paddingBlock",
    start: "insetInlineStart"
  };
  var ignoredProps = {
    elevation: true,
    overlayColor: true,
    resizeMode: true,
    tintColor: true
  };
  var preprocess$1 = preprocess.preprocess = function preprocess2(originalStyle, options) {
    if (options === void 0) {
      options = {};
    }
    var style = originalStyle || emptyObject;
    var nextStyle = {};
    if (options.shadow === true, style.shadowColor != null || style.shadowOffset != null || style.shadowOpacity != null || style.shadowRadius != null) {
      (0, _warnOnce.warnOnce)("shadowStyles", '"shadow*" style props are deprecated. Use "boxShadow".');
      var boxShadowValue = createBoxShadowValue(style);
      if (boxShadowValue != null && nextStyle.boxShadow == null) {
        var boxShadow = style.boxShadow;
        var value = boxShadow ? boxShadow + ", " + boxShadowValue : boxShadowValue;
        nextStyle.boxShadow = value;
      }
    }
    if (options.textShadow === true, style.textShadowColor != null || style.textShadowOffset != null || style.textShadowRadius != null) {
      (0, _warnOnce.warnOnce)("textShadowStyles", '"textShadow*" style props are deprecated. Use "textShadow".');
      var textShadowValue = createTextShadowValue(style);
      if (textShadowValue != null && nextStyle.textShadow == null) {
        var textShadow = style.textShadow;
        var _value = textShadow ? textShadow + ", " + textShadowValue : textShadowValue;
        nextStyle.textShadow = _value;
      }
    }
    for (var originalProp in style) {
      if (
        // Ignore some React Native styles
        ignoredProps[originalProp] != null || originalProp === "shadowColor" || originalProp === "shadowOffset" || originalProp === "shadowOpacity" || originalProp === "shadowRadius" || originalProp === "textShadowColor" || originalProp === "textShadowOffset" || originalProp === "textShadowRadius"
      ) {
        continue;
      }
      var originalValue = style[originalProp];
      var prop = PROPERTIES_STANDARD[originalProp] || originalProp;
      var _value2 = originalValue;
      if (!Object.prototype.hasOwnProperty.call(style, originalProp) || prop !== originalProp && style[prop] != null) {
        continue;
      }
      if (prop === "aspectRatio" && typeof _value2 === "number") {
        nextStyle[prop] = _value2.toString();
      } else if (prop === "fontVariant") {
        if (Array.isArray(_value2) && _value2.length > 0) {
          _value2 = _value2.join(" ");
        }
        nextStyle[prop] = _value2;
      } else if (prop === "textAlignVertical") {
        if (style.verticalAlign == null) {
          nextStyle.verticalAlign = _value2 === "center" ? "middle" : _value2;
        }
      } else if (prop === "transform") {
        if (Array.isArray(_value2)) {
          _value2 = createTransformValue(_value2);
        }
        nextStyle.transform = _value2;
      } else {
        nextStyle[prop] = _value2;
      }
    }
    return nextStyle;
  };
  preprocess.default = preprocess$1;
  return preprocess;
}
var styleq = {};
var hasRequiredStyleq;
function requireStyleq() {
  if (hasRequiredStyleq) return styleq;
  hasRequiredStyleq = 1;
  Object.defineProperty(styleq, "__esModule", {
    value: true
  });
  styleq.styleq = void 0;
  var cache2 = /* @__PURE__ */ new WeakMap();
  var compiledKey = "$$css";
  function createStyleq(options) {
    var disableCache;
    var disableMix;
    var transform;
    if (options != null) {
      disableCache = options.disableCache === true;
      disableMix = options.disableMix === true;
      transform = options.transform;
    }
    return function styleq2() {
      var definedProperties = [];
      var className = "";
      var inlineStyle = null;
      var nextCache = disableCache ? null : cache2;
      var styles2 = new Array(arguments.length);
      for (var i = 0; i < arguments.length; i++) {
        styles2[i] = arguments[i];
      }
      while (styles2.length > 0) {
        var possibleStyle = styles2.pop();
        if (possibleStyle == null || possibleStyle === false) {
          continue;
        }
        if (Array.isArray(possibleStyle)) {
          for (var _i = 0; _i < possibleStyle.length; _i++) {
            styles2.push(possibleStyle[_i]);
          }
          continue;
        }
        var style = transform != null ? transform(possibleStyle) : possibleStyle;
        if (style.$$css) {
          var classNameChunk = "";
          if (nextCache != null && nextCache.has(style)) {
            var cacheEntry = nextCache.get(style);
            if (cacheEntry != null) {
              classNameChunk = cacheEntry[0];
              definedProperties.push.apply(definedProperties, cacheEntry[1]);
              nextCache = cacheEntry[2];
            }
          } else {
            var definedPropertiesChunk = [];
            for (var prop in style) {
              var value = style[prop];
              if (prop === compiledKey) continue;
              if (typeof value === "string" || value === null) {
                if (!definedProperties.includes(prop)) {
                  definedProperties.push(prop);
                  if (nextCache != null) {
                    definedPropertiesChunk.push(prop);
                  }
                  if (typeof value === "string") {
                    classNameChunk += classNameChunk ? " " + value : value;
                  }
                }
              } else {
                console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
              }
            }
            if (nextCache != null) {
              var weakMap = /* @__PURE__ */ new WeakMap();
              nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
              nextCache = weakMap;
            }
          }
          if (classNameChunk) {
            className = className ? classNameChunk + " " + className : classNameChunk;
          }
        } else {
          if (disableMix) {
            if (inlineStyle == null) {
              inlineStyle = {};
            }
            inlineStyle = Object.assign({}, style, inlineStyle);
          } else {
            var subStyle = null;
            for (var _prop in style) {
              var _value = style[_prop];
              if (_value !== void 0) {
                if (!definedProperties.includes(_prop)) {
                  if (_value != null) {
                    if (inlineStyle == null) {
                      inlineStyle = {};
                    }
                    if (subStyle == null) {
                      subStyle = {};
                    }
                    subStyle[_prop] = _value;
                  }
                  definedProperties.push(_prop);
                  nextCache = null;
                }
              }
            }
            if (subStyle != null) {
              inlineStyle = Object.assign(subStyle, inlineStyle);
            }
          }
        }
      }
      var styleProps = [className, inlineStyle];
      return styleProps;
    };
  }
  var styleq$1 = createStyleq();
  styleq.styleq = styleq$1;
  styleq$1.factory = createStyleq;
  return styleq;
}
var hasRequiredStyleSheet;
function requireStyleSheet() {
  if (hasRequiredStyleSheet) return StyleSheet;
  hasRequiredStyleSheet = 1;
  Object.defineProperty(StyleSheet, "__esModule", {
    value: true
  });
  StyleSheet.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _compiler = /* @__PURE__ */ requireCompiler();
  var _dom = /* @__PURE__ */ requireDom();
  var _transformLocalizeStyle = /* @__PURE__ */ requireTransformLocalizeStyle();
  var _preprocess = /* @__PURE__ */ requirePreprocess();
  var _styleq = /* @__PURE__ */ requireStyleq();
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["writingDirection"];
  var staticStyleMap = /* @__PURE__ */ new WeakMap();
  var sheet = (0, _dom.createSheet)();
  var defaultPreprocessOptions = {
    shadow: true,
    textShadow: true
  };
  function customStyleq(styles2, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, writingDirection = _options.writingDirection, preprocessOptions = (0, _objectWithoutPropertiesLoose2.default)(_options, _excluded);
    var isRTL = writingDirection === "rtl";
    return _styleq.styleq.factory({
      transform(style) {
        var compiledStyle = staticStyleMap.get(style);
        if (compiledStyle != null) {
          return (0, _transformLocalizeStyle.localizeStyle)(compiledStyle, isRTL);
        }
        return (0, _preprocess.preprocess)(style, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultPreprocessOptions), preprocessOptions));
      }
    })(styles2);
  }
  function insertRules(compiledOrderedRules) {
    compiledOrderedRules.forEach((_ref) => {
      var rules = _ref[0], order = _ref[1];
      if (sheet != null) {
        rules.forEach((rule) => {
          sheet.insert(rule, order);
        });
      }
    });
  }
  function compileAndInsertAtomic(style) {
    var _atomic = (0, _compiler.atomic)((0, _preprocess.preprocess)(style, defaultPreprocessOptions)), compiledStyle = _atomic[0], compiledOrderedRules = _atomic[1];
    insertRules(compiledOrderedRules);
    return compiledStyle;
  }
  function compileAndInsertReset(style, key) {
    var _classic = (0, _compiler.classic)(style, key), compiledStyle = _classic[0], compiledOrderedRules = _classic[1];
    insertRules(compiledOrderedRules);
    return compiledStyle;
  }
  var absoluteFillObject = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  var absoluteFill = create({
    x: (0, _objectSpread2.default)({}, absoluteFillObject)
  }).x;
  function create(styles2) {
    Object.keys(styles2).forEach((key) => {
      var styleObj = styles2[key];
      if (styleObj != null && styleObj.$$css !== true) {
        var compiledStyles;
        if (key.indexOf("$raw") > -1) {
          compiledStyles = compileAndInsertReset(styleObj, key.split("$raw")[0]);
        } else {
          compiledStyles = compileAndInsertAtomic(styleObj);
        }
        staticStyleMap.set(styleObj, compiledStyles);
      }
    });
    return styles2;
  }
  function compose(style1, style2) {
    return [style1, style2];
  }
  function flatten() {
    for (var _len = arguments.length, styles2 = new Array(_len), _key = 0; _key < _len; _key++) {
      styles2[_key] = arguments[_key];
    }
    var flatArray = styles2.flat(Infinity);
    var result = {};
    for (var i = 0; i < flatArray.length; i++) {
      var style = flatArray[i];
      if (style != null && typeof style === "object") {
        Object.assign(result, style);
      }
    }
    return result;
  }
  function getSheet() {
    return {
      id: sheet.id,
      textContent: sheet.getTextContent()
    };
  }
  function StyleSheet$1(styles2, options) {
    if (options === void 0) {
      options = {};
    }
    var isRTL = options.writingDirection === "rtl";
    var styleProps = customStyleq(styles2, options);
    if (Array.isArray(styleProps) && styleProps[1] != null) {
      styleProps[1] = (0, _compiler.inline)(styleProps[1], isRTL);
    }
    return styleProps;
  }
  StyleSheet$1.absoluteFill = absoluteFill;
  StyleSheet$1.absoluteFillObject = absoluteFillObject;
  StyleSheet$1.create = create;
  StyleSheet$1.compose = compose;
  StyleSheet$1.flatten = flatten;
  StyleSheet$1.getSheet = getSheet;
  StyleSheet$1.hairlineWidth = 1;
  if (_canUseDom.default && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet$1.flatten;
  }
  var stylesheet = StyleSheet$1;
  StyleSheet.default = stylesheet;
  return StyleSheet;
}
var hasRequiredCreateDOMProps;
function requireCreateDOMProps() {
  if (hasRequiredCreateDOMProps) return createDOMProps;
  hasRequiredCreateDOMProps = 1;
  Object.defineProperty(createDOMProps, "__esModule", {
    value: true
  });
  createDOMProps.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _AccessibilityUtil = _interopRequireDefault(/* @__PURE__ */ requireAccessibilityUtil());
  var _StyleSheet2 = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _warnOnce = /* @__PURE__ */ requireWarnOnce();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"];
  var emptyObject = {};
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  var uppercasePattern2 = /[A-Z]/g;
  function toHyphenLower2(match) {
    return "-" + match.toLowerCase();
  }
  function hyphenateString(str) {
    return str.replace(uppercasePattern2, toHyphenLower2);
  }
  function processIDRefList(idRefList) {
    return isArray(idRefList) ? idRefList.join(" ") : idRefList;
  }
  var pointerEventsStyles = _StyleSheet2.default.create({
    auto: {
      pointerEvents: "auto"
    },
    "box-none": {
      pointerEvents: "box-none"
    },
    "box-only": {
      pointerEvents: "box-only"
    },
    none: {
      pointerEvents: "none"
    }
  });
  var createDOMProps$1 = (elementType, props, options) => {
    if (!props) {
      props = emptyObject;
    }
    var _props = props, ariaActiveDescendant = _props["aria-activedescendant"], accessibilityActiveDescendant = _props.accessibilityActiveDescendant, ariaAtomic = _props["aria-atomic"], accessibilityAtomic = _props.accessibilityAtomic, ariaAutoComplete = _props["aria-autocomplete"], accessibilityAutoComplete = _props.accessibilityAutoComplete, ariaBusy = _props["aria-busy"], accessibilityBusy = _props.accessibilityBusy, ariaChecked = _props["aria-checked"], accessibilityChecked = _props.accessibilityChecked, ariaColumnCount = _props["aria-colcount"], accessibilityColumnCount = _props.accessibilityColumnCount, ariaColumnIndex = _props["aria-colindex"], accessibilityColumnIndex = _props.accessibilityColumnIndex, ariaColumnSpan = _props["aria-colspan"], accessibilityColumnSpan = _props.accessibilityColumnSpan, ariaControls = _props["aria-controls"], accessibilityControls = _props.accessibilityControls, ariaCurrent = _props["aria-current"], accessibilityCurrent = _props.accessibilityCurrent, ariaDescribedBy = _props["aria-describedby"], accessibilityDescribedBy = _props.accessibilityDescribedBy, ariaDetails = _props["aria-details"], accessibilityDetails = _props.accessibilityDetails, ariaDisabled = _props["aria-disabled"], accessibilityDisabled = _props.accessibilityDisabled, ariaErrorMessage = _props["aria-errormessage"], accessibilityErrorMessage = _props.accessibilityErrorMessage, ariaExpanded = _props["aria-expanded"], accessibilityExpanded = _props.accessibilityExpanded, ariaFlowTo = _props["aria-flowto"], accessibilityFlowTo = _props.accessibilityFlowTo, ariaHasPopup = _props["aria-haspopup"], accessibilityHasPopup = _props.accessibilityHasPopup, ariaHidden = _props["aria-hidden"], accessibilityHidden = _props.accessibilityHidden, ariaInvalid = _props["aria-invalid"], accessibilityInvalid = _props.accessibilityInvalid, ariaKeyShortcuts = _props["aria-keyshortcuts"], accessibilityKeyShortcuts = _props.accessibilityKeyShortcuts, ariaLabel = _props["aria-label"], accessibilityLabel = _props.accessibilityLabel, ariaLabelledBy = _props["aria-labelledby"], accessibilityLabelledBy = _props.accessibilityLabelledBy, ariaLevel = _props["aria-level"], accessibilityLevel = _props.accessibilityLevel, ariaLive = _props["aria-live"], accessibilityLiveRegion = _props.accessibilityLiveRegion, ariaModal = _props["aria-modal"], accessibilityModal = _props.accessibilityModal, ariaMultiline = _props["aria-multiline"], accessibilityMultiline = _props.accessibilityMultiline, ariaMultiSelectable = _props["aria-multiselectable"], accessibilityMultiSelectable = _props.accessibilityMultiSelectable, ariaOrientation = _props["aria-orientation"], accessibilityOrientation = _props.accessibilityOrientation, ariaOwns = _props["aria-owns"], accessibilityOwns = _props.accessibilityOwns, ariaPlaceholder = _props["aria-placeholder"], accessibilityPlaceholder = _props.accessibilityPlaceholder, ariaPosInSet = _props["aria-posinset"], accessibilityPosInSet = _props.accessibilityPosInSet, ariaPressed = _props["aria-pressed"], accessibilityPressed = _props.accessibilityPressed, ariaReadOnly = _props["aria-readonly"], accessibilityReadOnly = _props.accessibilityReadOnly, ariaRequired = _props["aria-required"], accessibilityRequired = _props.accessibilityRequired;
    _props.role;
    _props.accessibilityRole;
    var ariaRoleDescription = _props["aria-roledescription"], accessibilityRoleDescription = _props.accessibilityRoleDescription, ariaRowCount = _props["aria-rowcount"], accessibilityRowCount = _props.accessibilityRowCount, ariaRowIndex = _props["aria-rowindex"], accessibilityRowIndex = _props.accessibilityRowIndex, ariaRowSpan = _props["aria-rowspan"], accessibilityRowSpan = _props.accessibilityRowSpan, ariaSelected = _props["aria-selected"], accessibilitySelected = _props.accessibilitySelected, ariaSetSize = _props["aria-setsize"], accessibilitySetSize = _props.accessibilitySetSize, ariaSort = _props["aria-sort"], accessibilitySort = _props.accessibilitySort, ariaValueMax = _props["aria-valuemax"], accessibilityValueMax = _props.accessibilityValueMax, ariaValueMin = _props["aria-valuemin"], accessibilityValueMin = _props.accessibilityValueMin, ariaValueNow = _props["aria-valuenow"], accessibilityValueNow = _props.accessibilityValueNow, ariaValueText = _props["aria-valuetext"], accessibilityValueText = _props.accessibilityValueText, dataSet = _props.dataSet, focusable = _props.focusable, id = _props.id, nativeID = _props.nativeID, pointerEvents = _props.pointerEvents, style = _props.style, tabIndex = _props.tabIndex, testID = _props.testID, domProps = (0, _objectWithoutPropertiesLoose2.default)(_props, _excluded);
    var disabled = ariaDisabled || accessibilityDisabled;
    var role = _AccessibilityUtil.default.propsToAriaRole(props);
    var _ariaActiveDescendant = ariaActiveDescendant != null ? ariaActiveDescendant : accessibilityActiveDescendant;
    if (_ariaActiveDescendant != null) {
      domProps["aria-activedescendant"] = _ariaActiveDescendant;
    }
    var _ariaAtomic = ariaAtomic != null ? ariaActiveDescendant : accessibilityAtomic;
    if (_ariaAtomic != null) {
      domProps["aria-atomic"] = _ariaAtomic;
    }
    var _ariaAutoComplete = ariaAutoComplete != null ? ariaAutoComplete : accessibilityAutoComplete;
    if (_ariaAutoComplete != null) {
      domProps["aria-autocomplete"] = _ariaAutoComplete;
    }
    var _ariaBusy = ariaBusy != null ? ariaBusy : accessibilityBusy;
    if (_ariaBusy != null) {
      domProps["aria-busy"] = _ariaBusy;
    }
    var _ariaChecked = ariaChecked != null ? ariaChecked : accessibilityChecked;
    if (_ariaChecked != null) {
      domProps["aria-checked"] = _ariaChecked;
    }
    var _ariaColumnCount = ariaColumnCount != null ? ariaColumnCount : accessibilityColumnCount;
    if (_ariaColumnCount != null) {
      domProps["aria-colcount"] = _ariaColumnCount;
    }
    var _ariaColumnIndex = ariaColumnIndex != null ? ariaColumnIndex : accessibilityColumnIndex;
    if (_ariaColumnIndex != null) {
      domProps["aria-colindex"] = _ariaColumnIndex;
    }
    var _ariaColumnSpan = ariaColumnSpan != null ? ariaColumnSpan : accessibilityColumnSpan;
    if (_ariaColumnSpan != null) {
      domProps["aria-colspan"] = _ariaColumnSpan;
    }
    var _ariaControls = ariaControls != null ? ariaControls : accessibilityControls;
    if (_ariaControls != null) {
      domProps["aria-controls"] = processIDRefList(_ariaControls);
    }
    var _ariaCurrent = ariaCurrent != null ? ariaCurrent : accessibilityCurrent;
    if (_ariaCurrent != null) {
      domProps["aria-current"] = _ariaCurrent;
    }
    var _ariaDescribedBy = ariaDescribedBy != null ? ariaDescribedBy : accessibilityDescribedBy;
    if (_ariaDescribedBy != null) {
      domProps["aria-describedby"] = processIDRefList(_ariaDescribedBy);
    }
    var _ariaDetails = ariaDetails != null ? ariaDetails : accessibilityDetails;
    if (_ariaDetails != null) {
      domProps["aria-details"] = _ariaDetails;
    }
    if (disabled === true) {
      domProps["aria-disabled"] = true;
      if (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") {
        domProps.disabled = true;
      }
    }
    var _ariaErrorMessage = ariaErrorMessage != null ? ariaErrorMessage : accessibilityErrorMessage;
    if (_ariaErrorMessage != null) {
      domProps["aria-errormessage"] = _ariaErrorMessage;
    }
    var _ariaExpanded = ariaExpanded != null ? ariaExpanded : accessibilityExpanded;
    if (_ariaExpanded != null) {
      domProps["aria-expanded"] = _ariaExpanded;
    }
    var _ariaFlowTo = ariaFlowTo != null ? ariaFlowTo : accessibilityFlowTo;
    if (_ariaFlowTo != null) {
      domProps["aria-flowto"] = processIDRefList(_ariaFlowTo);
    }
    var _ariaHasPopup = ariaHasPopup != null ? ariaHasPopup : accessibilityHasPopup;
    if (_ariaHasPopup != null) {
      domProps["aria-haspopup"] = _ariaHasPopup;
    }
    var _ariaHidden = ariaHidden != null ? ariaHidden : accessibilityHidden;
    if (_ariaHidden === true) {
      domProps["aria-hidden"] = _ariaHidden;
    }
    var _ariaInvalid = ariaInvalid != null ? ariaInvalid : accessibilityInvalid;
    if (_ariaInvalid != null) {
      domProps["aria-invalid"] = _ariaInvalid;
    }
    var _ariaKeyShortcuts = ariaKeyShortcuts != null ? ariaKeyShortcuts : accessibilityKeyShortcuts;
    if (_ariaKeyShortcuts != null) {
      domProps["aria-keyshortcuts"] = processIDRefList(_ariaKeyShortcuts);
    }
    var _ariaLabel = ariaLabel != null ? ariaLabel : accessibilityLabel;
    if (_ariaLabel != null) {
      domProps["aria-label"] = _ariaLabel;
    }
    var _ariaLabelledBy = ariaLabelledBy != null ? ariaLabelledBy : accessibilityLabelledBy;
    if (_ariaLabelledBy != null) {
      domProps["aria-labelledby"] = processIDRefList(_ariaLabelledBy);
    }
    var _ariaLevel = ariaLevel != null ? ariaLevel : accessibilityLevel;
    if (_ariaLevel != null) {
      domProps["aria-level"] = _ariaLevel;
    }
    var _ariaLive = ariaLive != null ? ariaLive : accessibilityLiveRegion;
    if (_ariaLive != null) {
      domProps["aria-live"] = _ariaLive === "none" ? "off" : _ariaLive;
    }
    var _ariaModal = ariaModal != null ? ariaModal : accessibilityModal;
    if (_ariaModal != null) {
      domProps["aria-modal"] = _ariaModal;
    }
    var _ariaMultiline = ariaMultiline != null ? ariaMultiline : accessibilityMultiline;
    if (_ariaMultiline != null) {
      domProps["aria-multiline"] = _ariaMultiline;
    }
    var _ariaMultiSelectable = ariaMultiSelectable != null ? ariaMultiSelectable : accessibilityMultiSelectable;
    if (_ariaMultiSelectable != null) {
      domProps["aria-multiselectable"] = _ariaMultiSelectable;
    }
    var _ariaOrientation = ariaOrientation != null ? ariaOrientation : accessibilityOrientation;
    if (_ariaOrientation != null) {
      domProps["aria-orientation"] = _ariaOrientation;
    }
    var _ariaOwns = ariaOwns != null ? ariaOwns : accessibilityOwns;
    if (_ariaOwns != null) {
      domProps["aria-owns"] = processIDRefList(_ariaOwns);
    }
    var _ariaPlaceholder = ariaPlaceholder != null ? ariaPlaceholder : accessibilityPlaceholder;
    if (_ariaPlaceholder != null) {
      domProps["aria-placeholder"] = _ariaPlaceholder;
    }
    var _ariaPosInSet = ariaPosInSet != null ? ariaPosInSet : accessibilityPosInSet;
    if (_ariaPosInSet != null) {
      domProps["aria-posinset"] = _ariaPosInSet;
    }
    var _ariaPressed = ariaPressed != null ? ariaPressed : accessibilityPressed;
    if (_ariaPressed != null) {
      domProps["aria-pressed"] = _ariaPressed;
    }
    var _ariaReadOnly = ariaReadOnly != null ? ariaReadOnly : accessibilityReadOnly;
    if (_ariaReadOnly != null) {
      domProps["aria-readonly"] = _ariaReadOnly;
      if (elementType === "input" || elementType === "select" || elementType === "textarea") {
        domProps.readOnly = true;
      }
    }
    var _ariaRequired = ariaRequired != null ? ariaRequired : accessibilityRequired;
    if (_ariaRequired != null) {
      domProps["aria-required"] = _ariaRequired;
      if (elementType === "input" || elementType === "select" || elementType === "textarea") {
        domProps.required = accessibilityRequired;
      }
    }
    if (role != null) {
      domProps["role"] = role === "none" ? "presentation" : role;
    }
    var _ariaRoleDescription = ariaRoleDescription != null ? ariaRoleDescription : accessibilityRoleDescription;
    if (_ariaRoleDescription != null) {
      domProps["aria-roledescription"] = _ariaRoleDescription;
    }
    var _ariaRowCount = ariaRowCount != null ? ariaRowCount : accessibilityRowCount;
    if (_ariaRowCount != null) {
      domProps["aria-rowcount"] = _ariaRowCount;
    }
    var _ariaRowIndex = ariaRowIndex != null ? ariaRowIndex : accessibilityRowIndex;
    if (_ariaRowIndex != null) {
      domProps["aria-rowindex"] = _ariaRowIndex;
    }
    var _ariaRowSpan = ariaRowSpan != null ? ariaRowSpan : accessibilityRowSpan;
    if (_ariaRowSpan != null) {
      domProps["aria-rowspan"] = _ariaRowSpan;
    }
    var _ariaSelected = ariaSelected != null ? ariaSelected : accessibilitySelected;
    if (_ariaSelected != null) {
      domProps["aria-selected"] = _ariaSelected;
    }
    var _ariaSetSize = ariaSetSize != null ? ariaSetSize : accessibilitySetSize;
    if (_ariaSetSize != null) {
      domProps["aria-setsize"] = _ariaSetSize;
    }
    var _ariaSort = ariaSort != null ? ariaSort : accessibilitySort;
    if (_ariaSort != null) {
      domProps["aria-sort"] = _ariaSort;
    }
    var _ariaValueMax = ariaValueMax != null ? ariaValueMax : accessibilityValueMax;
    if (_ariaValueMax != null) {
      domProps["aria-valuemax"] = _ariaValueMax;
    }
    var _ariaValueMin = ariaValueMin != null ? ariaValueMin : accessibilityValueMin;
    if (_ariaValueMin != null) {
      domProps["aria-valuemin"] = _ariaValueMin;
    }
    var _ariaValueNow = ariaValueNow != null ? ariaValueNow : accessibilityValueNow;
    if (_ariaValueNow != null) {
      domProps["aria-valuenow"] = _ariaValueNow;
    }
    var _ariaValueText = ariaValueText != null ? ariaValueText : accessibilityValueText;
    if (_ariaValueText != null) {
      domProps["aria-valuetext"] = _ariaValueText;
    }
    if (dataSet != null) {
      for (var dataProp in dataSet) {
        if (hasOwnProperty.call(dataSet, dataProp)) {
          var dataName = hyphenateString(dataProp);
          var dataValue = dataSet[dataProp];
          if (dataValue != null) {
            domProps["data-" + dataName] = dataValue;
          }
        }
      }
    }
    if (tabIndex === 0 || tabIndex === "0" || tabIndex === -1 || tabIndex === "-1") {
      domProps.tabIndex = tabIndex;
    } else {
      if (focusable === false) {
        domProps.tabIndex = "-1";
      }
      if (
        // These native elements are keyboard focusable by default
        elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea"
      ) {
        if (focusable === false || accessibilityDisabled === true) {
          domProps.tabIndex = "-1";
        }
      } else if (
        // These roles are made keyboard focusable by default
        role === "button" || role === "checkbox" || role === "link" || role === "radio" || role === "textbox" || role === "switch"
      ) {
        if (focusable !== false) {
          domProps.tabIndex = "0";
        }
      } else {
        if (focusable === true) {
          domProps.tabIndex = "0";
        }
      }
    }
    if (pointerEvents != null) {
      (0, _warnOnce.warnOnce)("pointerEvents", "props.pointerEvents is deprecated. Use style.pointerEvents");
    }
    var _StyleSheet = (0, _StyleSheet2.default)([style, pointerEvents && pointerEventsStyles[pointerEvents]], (0, _objectSpread2.default)({
      writingDirection: "ltr"
    }, options)), className = _StyleSheet[0], inlineStyle = _StyleSheet[1];
    if (className) {
      domProps.className = className;
    }
    if (inlineStyle) {
      domProps.style = inlineStyle;
    }
    var _id = id != null ? id : nativeID;
    if (_id != null) {
      domProps.id = _id;
    }
    if (testID != null) {
      domProps["data-testid"] = testID;
    }
    if (domProps.type == null && elementType === "button") {
      domProps.type = "button";
    }
    return domProps;
  };
  createDOMProps.default = createDOMProps$1;
  return createDOMProps;
}
var useLocale = {};
var isLocaleRTL = {};
var hasRequiredIsLocaleRTL;
function requireIsLocaleRTL() {
  if (hasRequiredIsLocaleRTL) return isLocaleRTL;
  hasRequiredIsLocaleRTL = 1;
  Object.defineProperty(isLocaleRTL, "__esModule", {
    value: true
  });
  isLocaleRTL.isLocaleRTL = isLocaleRTL$1;
  var rtlScripts = /* @__PURE__ */ new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
  var rtlLangs = /* @__PURE__ */ new Set([
    "ae",
    // Avestan
    "ar",
    // Arabic
    "arc",
    // Aramaic
    "bcc",
    // Southern Balochi
    "bqi",
    // Bakthiari
    "ckb",
    // Sorani
    "dv",
    // Dhivehi
    "fa",
    "far",
    // Persian
    "glk",
    // Gilaki
    "he",
    "iw",
    // Hebrew
    "khw",
    // Khowar
    "ks",
    // Kashmiri
    "ku",
    // Kurdish
    "mzn",
    // Mazanderani
    "nqo",
    // N'Ko
    "pnb",
    // Western Punjabi
    "ps",
    // Pashto
    "sd",
    // Sindhi
    "ug",
    // Uyghur
    "ur",
    // Urdu
    "yi"
    // Yiddish
  ]);
  var cache2 = /* @__PURE__ */ new Map();
  function isLocaleRTL$1(locale) {
    var cachedRTL = cache2.get(locale);
    if (cachedRTL) {
      return cachedRTL;
    }
    var isRTL = false;
    if (Intl.Locale) {
      try {
        var script = new Intl.Locale(locale).maximize().script;
        isRTL = rtlScripts.has(script);
      } catch (_unused) {
        var lang = locale.split("-")[0];
        isRTL = rtlLangs.has(lang);
      }
    } else {
      var _lang = locale.split("-")[0];
      isRTL = rtlLangs.has(_lang);
    }
    cache2.set(locale, isRTL);
    return isRTL;
  }
  return isLocaleRTL;
}
var hasRequiredUseLocale;
function requireUseLocale() {
  if (hasRequiredUseLocale) return useLocale;
  hasRequiredUseLocale = 1;
  Object.defineProperty(useLocale, "__esModule", {
    value: true
  });
  useLocale.LocaleProvider = LocaleProvider;
  useLocale.getLocaleDirection = getLocaleDirection;
  useLocale.useLocaleContext = useLocaleContext2;
  var _react = _interopRequireWildcard(requireReact());
  var _isLocaleRTL = /* @__PURE__ */ requireIsLocaleRTL();
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var defaultLocale = {
    direction: "ltr",
    locale: "en-US"
  };
  var LocaleContext = /* @__PURE__ */ (0, _react.createContext)(defaultLocale);
  function getLocaleDirection(locale) {
    return (0, _isLocaleRTL.isLocaleRTL)(locale) ? "rtl" : "ltr";
  }
  function LocaleProvider(props) {
    var direction = props.direction, locale = props.locale, children = props.children;
    var needsContext = direction || locale;
    return needsContext ? /* @__PURE__ */ _react.default.createElement(LocaleContext.Provider, {
      children,
      value: {
        direction: locale ? getLocaleDirection(locale) : direction,
        locale
      }
    }) : children;
  }
  function useLocaleContext2() {
    return (0, _react.useContext)(LocaleContext);
  }
  return useLocale;
}
var hasRequiredCreateElement;
function requireCreateElement() {
  if (hasRequiredCreateElement) return createElement;
  hasRequiredCreateElement = 1;
  Object.defineProperty(createElement, "__esModule", {
    value: true
  });
  createElement.default = void 0;
  var _AccessibilityUtil = _interopRequireDefault(/* @__PURE__ */ requireAccessibilityUtil());
  var _createDOMProps = _interopRequireDefault(/* @__PURE__ */ requireCreateDOMProps());
  var _react = _interopRequireDefault(requireReact());
  var _useLocale = /* @__PURE__ */ requireUseLocale();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var createElement$1 = (component, props, options) => {
    var accessibilityComponent;
    if (component && component.constructor === String) {
      accessibilityComponent = _AccessibilityUtil.default.propsToAccessibilityComponent(props);
    }
    var Component = accessibilityComponent || component;
    var domProps = (0, _createDOMProps.default)(Component, props, options);
    var element = /* @__PURE__ */ _react.default.createElement(Component, domProps);
    var elementWithLocaleProvider = domProps.dir ? /* @__PURE__ */ _react.default.createElement(_useLocale.LocaleProvider, {
      children: element,
      direction: domProps.dir,
      locale: domProps.lang
    }) : element;
    return elementWithLocaleProvider;
  };
  createElement.default = createElement$1;
  return createElement;
}
var findNodeHandle = {};
var hasRequiredFindNodeHandle;
function requireFindNodeHandle() {
  if (hasRequiredFindNodeHandle) return findNodeHandle;
  hasRequiredFindNodeHandle = 1;
  Object.defineProperty(findNodeHandle, "__esModule", {
    value: true
  });
  findNodeHandle.default = void 0;
  var _reactDom = requireReactDom();
  var findNodeHandle$1 = (component) => {
    var node;
    try {
      node = (0, _reactDom.findDOMNode)(component);
    } catch (e) {
    }
    return node;
  };
  findNodeHandle.default = findNodeHandle$1;
  return findNodeHandle;
}
var render = {};
var unmountComponentAtNode = {};
var hasRequiredUnmountComponentAtNode;
function requireUnmountComponentAtNode() {
  if (hasRequiredUnmountComponentAtNode) return unmountComponentAtNode;
  hasRequiredUnmountComponentAtNode = 1;
  Object.defineProperty(unmountComponentAtNode, "__esModule", {
    value: true
  });
  unmountComponentAtNode.default = void 0;
  var _reactDom = requireReactDom();
  unmountComponentAtNode.default = _reactDom.unmountComponentAtNode;
  return unmountComponentAtNode;
}
var hasRequiredRender;
function requireRender() {
  if (hasRequiredRender) return render;
  hasRequiredRender = 1;
  Object.defineProperty(render, "__esModule", {
    value: true
  });
  render.default = renderLegacy;
  render.hydrate = hydrate;
  render.hydrateLegacy = hydrateLegacy;
  render.render = render$1;
  var _reactDom = requireReactDom();
  var _client = requireClient();
  var _unmountComponentAtNode = _interopRequireDefault(/* @__PURE__ */ requireUnmountComponentAtNode());
  var _dom = /* @__PURE__ */ requireDom();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function hydrate(element, root) {
    (0, _dom.createSheet)(root);
    return (0, _client.hydrateRoot)(root, element);
  }
  function render$1(element, root) {
    (0, _dom.createSheet)(root);
    var reactRoot = (0, _client.createRoot)(root);
    reactRoot.render(element);
    return reactRoot;
  }
  function hydrateLegacy(element, root, callback) {
    (0, _dom.createSheet)(root);
    (0, _reactDom.hydrate)(element, root, callback);
    return {
      unmount: function unmount() {
        return (0, _unmountComponentAtNode.default)(root);
      }
    };
  }
  function renderLegacy(element, root, callback) {
    (0, _dom.createSheet)(root);
    (0, _reactDom.render)(element, root, callback);
    return {
      unmount: function unmount() {
        return (0, _unmountComponentAtNode.default)(root);
      }
    };
  }
  return render;
}
var NativeModules = {};
var UIManager = {};
var getBoundingClientRect = {};
var hasRequiredGetBoundingClientRect;
function requireGetBoundingClientRect() {
  if (hasRequiredGetBoundingClientRect) return getBoundingClientRect;
  hasRequiredGetBoundingClientRect = 1;
  Object.defineProperty(getBoundingClientRect, "__esModule", {
    value: true
  });
  getBoundingClientRect.default = void 0;
  var getBoundingClientRect$1 = (node) => {
    if (node != null) {
      var isElement = node.nodeType === 1;
      if (isElement && typeof node.getBoundingClientRect === "function") {
        return node.getBoundingClientRect();
      }
    }
  };
  getBoundingClientRect.default = getBoundingClientRect$1;
  return getBoundingClientRect;
}
var setValueForStyles = {};
var dangerousStyleValue = {};
var unitlessNumbers = {};
var hasRequiredUnitlessNumbers;
function requireUnitlessNumbers() {
  if (hasRequiredUnitlessNumbers) return unitlessNumbers;
  hasRequiredUnitlessNumbers = 1;
  Object.defineProperty(unitlessNumbers, "__esModule", {
    value: true
  });
  unitlessNumbers.default = void 0;
  var unitlessNumbers$12 = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexOrder: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    fontWeight: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowGap: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnGap: true,
    gridColumnStart: true,
    lineClamp: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    // SVG-related
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true,
    // transform types
    scale: true,
    scaleX: true,
    scaleY: true,
    scaleZ: true,
    // RN properties
    shadowOpacity: true
  };
  var prefixes2 = ["ms", "Moz", "O", "Webkit"];
  var prefixKey = (prefix, key) => {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  };
  Object.keys(unitlessNumbers$12).forEach((prop) => {
    prefixes2.forEach((prefix) => {
      unitlessNumbers$12[prefixKey(prefix, prop)] = unitlessNumbers$12[prop];
    });
  });
  unitlessNumbers.default = unitlessNumbers$12;
  return unitlessNumbers;
}
var hasRequiredDangerousStyleValue;
function requireDangerousStyleValue() {
  if (hasRequiredDangerousStyleValue) return dangerousStyleValue;
  hasRequiredDangerousStyleValue = 1;
  Object.defineProperty(dangerousStyleValue, "__esModule", {
    value: true
  });
  dangerousStyleValue.default = void 0;
  var _unitlessNumbers = _interopRequireDefault(/* @__PURE__ */ requireUnitlessNumbers());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function dangerousStyleValue$1(name, value, isCustomProperty) {
    var isEmpty = value == null || typeof value === "boolean" || value === "";
    if (isEmpty) {
      return "";
    }
    if (!isCustomProperty && typeof value === "number" && value !== 0 && !(_unitlessNumbers.default.hasOwnProperty(name) && _unitlessNumbers.default[name])) {
      return value + "px";
    }
    return ("" + value).trim();
  }
  dangerousStyleValue.default = dangerousStyleValue$1;
  return dangerousStyleValue;
}
var hasRequiredSetValueForStyles;
function requireSetValueForStyles() {
  if (hasRequiredSetValueForStyles) return setValueForStyles;
  hasRequiredSetValueForStyles = 1;
  Object.defineProperty(setValueForStyles, "__esModule", {
    value: true
  });
  setValueForStyles.default = void 0;
  var _dangerousStyleValue = _interopRequireDefault(/* @__PURE__ */ requireDangerousStyleValue());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function setValueForStyles$1(node, styles2) {
    var style = node.style;
    for (var styleName in styles2) {
      if (!styles2.hasOwnProperty(styleName)) {
        continue;
      }
      var isCustomProperty = styleName.indexOf("--") === 0;
      var styleValue = (0, _dangerousStyleValue.default)(styleName, styles2[styleName], isCustomProperty);
      if (styleName === "float") {
        styleName = "cssFloat";
      }
      if (isCustomProperty) {
        style.setProperty(styleName, styleValue);
      } else {
        style[styleName] = styleValue;
      }
    }
  }
  setValueForStyles.default = setValueForStyles$1;
  return setValueForStyles;
}
var hasRequiredUIManager;
function requireUIManager() {
  if (hasRequiredUIManager) return UIManager;
  hasRequiredUIManager = 1;
  Object.defineProperty(UIManager, "__esModule", {
    value: true
  });
  UIManager.default = void 0;
  var _getBoundingClientRect = _interopRequireDefault(/* @__PURE__ */ requireGetBoundingClientRect());
  var _setValueForStyles = _interopRequireDefault(/* @__PURE__ */ requireSetValueForStyles());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var getRect = (node) => {
    var height = node.offsetHeight;
    var width = node.offsetWidth;
    var left = node.offsetLeft;
    var top = node.offsetTop;
    node = node.offsetParent;
    while (node && node.nodeType === 1) {
      left += node.offsetLeft + node.clientLeft - node.scrollLeft;
      top += node.offsetTop + node.clientTop - node.scrollTop;
      node = node.offsetParent;
    }
    top -= window.scrollY;
    left -= window.scrollX;
    return {
      width,
      height,
      top,
      left
    };
  };
  var measureLayout = (node, relativeToNativeNode, callback) => {
    var relativeNode = relativeToNativeNode || node && node.parentNode;
    if (node && relativeNode) {
      setTimeout(() => {
        if (node.isConnected && relativeNode.isConnected) {
          var relativeRect = getRect(relativeNode);
          var _getRect = getRect(node), height = _getRect.height, left = _getRect.left, top = _getRect.top, width = _getRect.width;
          var x = left - relativeRect.left;
          var y = top - relativeRect.top;
          callback(x, y, width, height, left, top);
        }
      }, 0);
    }
  };
  var elementsToIgnore = {
    A: true,
    BODY: true,
    INPUT: true,
    SELECT: true,
    TEXTAREA: true
  };
  var UIManager$1 = {
    blur(node) {
      try {
        node.blur();
      } catch (err) {
      }
    },
    focus(node) {
      try {
        var name = node.nodeName;
        if (node.getAttribute("tabIndex") == null && node.isContentEditable !== true && elementsToIgnore[name] == null) {
          node.setAttribute("tabIndex", "-1");
        }
        node.focus();
      } catch (err) {
      }
    },
    measure(node, callback) {
      measureLayout(node, null, callback);
    },
    measureInWindow(node, callback) {
      if (node) {
        setTimeout(() => {
          var _getBoundingClientRec = (0, _getBoundingClientRect.default)(node), height = _getBoundingClientRec.height, left = _getBoundingClientRec.left, top = _getBoundingClientRec.top, width = _getBoundingClientRec.width;
          callback(left, top, width, height);
        }, 0);
      }
    },
    measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
      measureLayout(node, relativeToNativeNode, onSuccess);
    },
    updateView(node, props) {
      for (var prop in props) {
        if (!Object.prototype.hasOwnProperty.call(props, prop)) {
          continue;
        }
        var value = props[prop];
        switch (prop) {
          case "style": {
            (0, _setValueForStyles.default)(node, value);
            break;
          }
          case "class":
          case "className": {
            node.setAttribute("class", value);
            break;
          }
          case "text":
          case "value":
            node.value = value;
            break;
          default:
            node.setAttribute(prop, value);
        }
      }
    },
    configureNextLayoutAnimation(config, onAnimationDidEnd) {
      onAnimationDidEnd();
    },
    // mocks
    setLayoutAnimationEnabledExperimental() {
    }
  };
  UIManager.default = UIManager$1;
  return UIManager;
}
var hasRequiredNativeModules;
function requireNativeModules() {
  if (hasRequiredNativeModules) return NativeModules;
  hasRequiredNativeModules = 1;
  Object.defineProperty(NativeModules, "__esModule", {
    value: true
  });
  NativeModules.default = void 0;
  var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var NativeModules$1 = {
    UIManager: _UIManager.default
  };
  NativeModules.default = NativeModules$1;
  return NativeModules;
}
var AccessibilityInfo = {};
var hasRequiredAccessibilityInfo;
function requireAccessibilityInfo() {
  if (hasRequiredAccessibilityInfo) return AccessibilityInfo;
  hasRequiredAccessibilityInfo = 1;
  Object.defineProperty(AccessibilityInfo, "__esModule", {
    value: true
  });
  AccessibilityInfo.default = void 0;
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function isScreenReaderEnabled() {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
  var prefersReducedMotionMedia = _canUseDom.default && typeof window.matchMedia === "function" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  function isReduceMotionEnabled() {
    return new Promise((resolve, reject) => {
      resolve(prefersReducedMotionMedia ? prefersReducedMotionMedia.matches : true);
    });
  }
  function addChangeListener(fn) {
    if (prefersReducedMotionMedia != null) {
      prefersReducedMotionMedia.addEventListener != null ? prefersReducedMotionMedia.addEventListener("change", fn) : prefersReducedMotionMedia.addListener(fn);
    }
  }
  function removeChangeListener(fn) {
    if (prefersReducedMotionMedia != null) {
      prefersReducedMotionMedia.removeEventListener != null ? prefersReducedMotionMedia.removeEventListener("change", fn) : prefersReducedMotionMedia.removeListener(fn);
    }
  }
  var handlers = {};
  var AccessibilityInfo$1 = {
    /**
     * Query whether a screen reader is currently enabled.
     *
     * Returns a promise which resolves to a boolean.
     * The result is `true` when a screen reader is enabled and `false` otherwise.
     */
    isScreenReaderEnabled,
    /**
     * Query whether the user prefers reduced motion.
     *
     * Returns a promise which resolves to a boolean.
     * The result is `true` when a screen reader is enabled and `false` otherwise.
     */
    isReduceMotionEnabled,
    /**
     * Deprecated
     */
    fetch: isScreenReaderEnabled,
    /**
     * Add an event handler. Supported events: reduceMotionChanged
     */
    addEventListener: function addEventListener2(eventName, handler) {
      if (eventName === "reduceMotionChanged") {
        if (!prefersReducedMotionMedia) {
          return;
        }
        var listener = (event) => {
          handler(event.matches);
        };
        addChangeListener(listener);
        handlers[handler] = listener;
      }
      return {
        remove: () => AccessibilityInfo$1.removeEventListener(eventName, handler)
      };
    },
    /**
     * Set accessibility focus to a react component.
     */
    setAccessibilityFocus: function setAccessibilityFocus(reactTag) {
    },
    /**
     * Post a string to be announced by the screen reader.
     */
    announceForAccessibility: function announceForAccessibility(announcement) {
    },
    /**
     * Remove an event handler.
     */
    removeEventListener: function removeEventListener(eventName, handler) {
      if (eventName === "reduceMotionChanged") {
        var listener = handlers[handler];
        if (!listener || !prefersReducedMotionMedia) {
          return;
        }
        removeChangeListener(listener);
      }
      return;
    }
  };
  AccessibilityInfo.default = AccessibilityInfo$1;
  return AccessibilityInfo;
}
var Alert = {};
var hasRequiredAlert;
function requireAlert() {
  if (hasRequiredAlert) return Alert;
  hasRequiredAlert = 1;
  Object.defineProperty(Alert, "__esModule", {
    value: true
  });
  Alert.default = void 0;
  let Alert$1 = class Alert {
    static alert() {
    }
  };
  Alert.default = Alert$1;
  return Alert;
}
var Animated$1 = {};
var Animated = {};
var Platform$1 = {};
var hasRequiredPlatform$1;
function requirePlatform$1() {
  if (hasRequiredPlatform$1) return Platform$1;
  hasRequiredPlatform$1 = 1;
  Object.defineProperty(Platform$1, "__esModule", {
    value: true
  });
  Platform$1.default = void 0;
  var Platform2 = {
    OS: "web",
    select: (obj) => "web" in obj ? obj.web : obj.default,
    get isTesting() {
      return false;
    }
  };
  Platform$1.default = Platform2;
  return Platform$1;
}
var AnimatedFlatList = {};
var _extends = { exports: {} };
var hasRequired_extends;
function require_extends() {
  if (hasRequired_extends) return _extends.exports;
  hasRequired_extends = 1;
  (function(module) {
    function _extends2() {
      return module.exports = _extends2 = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends2.apply(null, arguments);
    }
    module.exports = _extends2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(_extends);
  return _extends.exports;
}
var FlatList$1 = {};
var FlatList = {};
var View = {};
var forwardedProps = {};
var hasRequiredForwardedProps;
function requireForwardedProps() {
  if (hasRequiredForwardedProps) return forwardedProps;
  hasRequiredForwardedProps = 1;
  Object.defineProperty(forwardedProps, "__esModule", {
    value: true
  });
  forwardedProps.touchProps = forwardedProps.styleProps = forwardedProps.mouseProps = forwardedProps.keyboardProps = forwardedProps.focusProps = forwardedProps.defaultProps = forwardedProps.clickProps = forwardedProps.accessibilityProps = void 0;
  forwardedProps.defaultProps = {
    children: true,
    dataSet: true,
    dir: true,
    id: true,
    ref: true,
    suppressHydrationWarning: true,
    tabIndex: true,
    testID: true,
    // @deprecated
    focusable: true,
    nativeID: true
  };
  forwardedProps.accessibilityProps = {
    "aria-activedescendant": true,
    "aria-atomic": true,
    "aria-autocomplete": true,
    "aria-busy": true,
    "aria-checked": true,
    "aria-colcount": true,
    "aria-colindex": true,
    "aria-colspan": true,
    "aria-controls": true,
    "aria-current": true,
    "aria-describedby": true,
    "aria-details": true,
    "aria-disabled": true,
    "aria-errormessage": true,
    "aria-expanded": true,
    "aria-flowto": true,
    "aria-haspopup": true,
    "aria-hidden": true,
    "aria-invalid": true,
    "aria-keyshortcuts": true,
    "aria-label": true,
    "aria-labelledby": true,
    "aria-level": true,
    "aria-live": true,
    "aria-modal": true,
    "aria-multiline": true,
    "aria-multiselectable": true,
    "aria-orientation": true,
    "aria-owns": true,
    "aria-placeholder": true,
    "aria-posinset": true,
    "aria-pressed": true,
    "aria-readonly": true,
    "aria-required": true,
    role: true,
    "aria-roledescription": true,
    "aria-rowcount": true,
    "aria-rowindex": true,
    "aria-rowspan": true,
    "aria-selected": true,
    "aria-setsize": true,
    "aria-sort": true,
    "aria-valuemax": true,
    "aria-valuemin": true,
    "aria-valuenow": true,
    "aria-valuetext": true,
    // @deprecated
    accessibilityActiveDescendant: true,
    accessibilityAtomic: true,
    accessibilityAutoComplete: true,
    accessibilityBusy: true,
    accessibilityChecked: true,
    accessibilityColumnCount: true,
    accessibilityColumnIndex: true,
    accessibilityColumnSpan: true,
    accessibilityControls: true,
    accessibilityCurrent: true,
    accessibilityDescribedBy: true,
    accessibilityDetails: true,
    accessibilityDisabled: true,
    accessibilityErrorMessage: true,
    accessibilityExpanded: true,
    accessibilityFlowTo: true,
    accessibilityHasPopup: true,
    accessibilityHidden: true,
    accessibilityInvalid: true,
    accessibilityKeyShortcuts: true,
    accessibilityLabel: true,
    accessibilityLabelledBy: true,
    accessibilityLevel: true,
    accessibilityLiveRegion: true,
    accessibilityModal: true,
    accessibilityMultiline: true,
    accessibilityMultiSelectable: true,
    accessibilityOrientation: true,
    accessibilityOwns: true,
    accessibilityPlaceholder: true,
    accessibilityPosInSet: true,
    accessibilityPressed: true,
    accessibilityReadOnly: true,
    accessibilityRequired: true,
    accessibilityRole: true,
    accessibilityRoleDescription: true,
    accessibilityRowCount: true,
    accessibilityRowIndex: true,
    accessibilityRowSpan: true,
    accessibilitySelected: true,
    accessibilitySetSize: true,
    accessibilitySort: true,
    accessibilityValueMax: true,
    accessibilityValueMin: true,
    accessibilityValueNow: true,
    accessibilityValueText: true
  };
  forwardedProps.clickProps = {
    onClick: true,
    onAuxClick: true,
    onContextMenu: true,
    onGotPointerCapture: true,
    onLostPointerCapture: true,
    onPointerCancel: true,
    onPointerDown: true,
    onPointerEnter: true,
    onPointerMove: true,
    onPointerLeave: true,
    onPointerOut: true,
    onPointerOver: true,
    onPointerUp: true
  };
  forwardedProps.focusProps = {
    onBlur: true,
    onFocus: true
  };
  forwardedProps.keyboardProps = {
    onKeyDown: true,
    onKeyDownCapture: true,
    onKeyUp: true,
    onKeyUpCapture: true
  };
  forwardedProps.mouseProps = {
    onMouseDown: true,
    onMouseEnter: true,
    onMouseLeave: true,
    onMouseMove: true,
    onMouseOver: true,
    onMouseOut: true,
    onMouseUp: true
  };
  forwardedProps.touchProps = {
    onTouchCancel: true,
    onTouchCancelCapture: true,
    onTouchEnd: true,
    onTouchEndCapture: true,
    onTouchMove: true,
    onTouchMoveCapture: true,
    onTouchStart: true,
    onTouchStartCapture: true
  };
  forwardedProps.styleProps = {
    style: true
  };
  return forwardedProps;
}
var pick = {};
var hasRequiredPick;
function requirePick() {
  if (hasRequiredPick) return pick;
  hasRequiredPick = 1;
  Object.defineProperty(pick, "__esModule", {
    value: true
  });
  pick.default = pick$1;
  function pick$1(obj, list) {
    var nextObj = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (list[key] === true) {
          nextObj[key] = obj[key];
        }
      }
    }
    return nextObj;
  }
  return pick;
}
var useElementLayout = {};
var useLayoutEffect = {};
var hasRequiredUseLayoutEffect;
function requireUseLayoutEffect() {
  if (hasRequiredUseLayoutEffect) return useLayoutEffect;
  hasRequiredUseLayoutEffect = 1;
  Object.defineProperty(useLayoutEffect, "__esModule", {
    value: true
  });
  useLayoutEffect.default = void 0;
  var _react = requireReact();
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var useLayoutEffectImpl = _canUseDom.default ? _react.useLayoutEffect : _react.useEffect;
  useLayoutEffect.default = useLayoutEffectImpl;
  return useLayoutEffect;
}
var hasRequiredUseElementLayout;
function requireUseElementLayout() {
  if (hasRequiredUseElementLayout) return useElementLayout;
  hasRequiredUseElementLayout = 1;
  Object.defineProperty(useElementLayout, "__esModule", {
    value: true
  });
  useElementLayout.default = useElementLayout$1;
  var _useLayoutEffect = _interopRequireDefault(/* @__PURE__ */ requireUseLayoutEffect());
  var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var DOM_LAYOUT_HANDLER_NAME = "__reactLayoutHandler";
  !_canUseDom.default;
  var resizeObserver = null;
  function getResizeObserver() {
    if (_canUseDom.default && typeof window.ResizeObserver !== "undefined") {
      if (resizeObserver == null) {
        resizeObserver = new window.ResizeObserver(function(entries) {
          entries.forEach((entry) => {
            var node = entry.target;
            var onLayout = node[DOM_LAYOUT_HANDLER_NAME];
            if (typeof onLayout === "function") {
              _UIManager.default.measure(node, (x, y, width, height, left, top) => {
                var event = {
                  // $FlowFixMe
                  nativeEvent: {
                    layout: {
                      x,
                      y,
                      width,
                      height,
                      left,
                      top
                    }
                  },
                  timeStamp: Date.now()
                };
                Object.defineProperty(event.nativeEvent, "target", {
                  enumerable: true,
                  get: () => entry.target
                });
                onLayout(event);
              });
            }
          });
        });
      }
    }
    return resizeObserver;
  }
  function useElementLayout$1(ref, onLayout) {
    var observer = getResizeObserver();
    (0, _useLayoutEffect.default)(() => {
      var node = ref.current;
      if (node != null) {
        node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
      }
    }, [ref, onLayout]);
    (0, _useLayoutEffect.default)(() => {
      var node = ref.current;
      if (node != null && observer != null) {
        if (typeof node[DOM_LAYOUT_HANDLER_NAME] === "function") {
          observer.observe(node);
        } else {
          observer.unobserve(node);
        }
      }
      return () => {
        if (node != null && observer != null) {
          observer.unobserve(node);
        }
      };
    }, [ref, observer]);
  }
  return useElementLayout;
}
var useMergeRefs$1 = {};
var mergeRefs = {};
var hasRequiredMergeRefs;
function requireMergeRefs() {
  if (hasRequiredMergeRefs) return mergeRefs;
  hasRequiredMergeRefs = 1;
  Object.defineProperty(mergeRefs, "__esModule", {
    value: true
  });
  mergeRefs.default = mergeRefs$1;
  _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function mergeRefs$1() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return function forwardRef(node) {
      args.forEach((ref) => {
        if (ref == null) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
          return;
        }
        if (typeof ref === "object") {
          ref.current = node;
          return;
        }
        console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(ref));
      });
    };
  }
  return mergeRefs;
}
var hasRequiredUseMergeRefs$1;
function requireUseMergeRefs$1() {
  if (hasRequiredUseMergeRefs$1) return useMergeRefs$1;
  hasRequiredUseMergeRefs$1 = 1;
  Object.defineProperty(useMergeRefs$1, "__esModule", {
    value: true
  });
  useMergeRefs$1.default = useMergeRefs2;
  var React = _interopRequireWildcard(requireReact());
  var _mergeRefs = _interopRequireDefault(/* @__PURE__ */ requireMergeRefs());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function useMergeRefs2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return React.useMemo(
      () => (0, _mergeRefs.default)(...args),
      // eslint-disable-next-line
      [...args]
    );
  }
  return useMergeRefs$1;
}
var usePlatformMethods = {};
var useStable = {};
var hasRequiredUseStable;
function requireUseStable() {
  if (hasRequiredUseStable) return useStable;
  hasRequiredUseStable = 1;
  Object.defineProperty(useStable, "__esModule", {
    value: true
  });
  useStable.default = useStable$1;
  var React = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var UNINITIALIZED = typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : Object.freeze({});
  function useStable$1(getInitialValue) {
    var ref = React.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
      ref.current = getInitialValue();
    }
    return ref.current;
  }
  return useStable;
}
var hasRequiredUsePlatformMethods;
function requireUsePlatformMethods() {
  if (hasRequiredUsePlatformMethods) return usePlatformMethods;
  hasRequiredUsePlatformMethods = 1;
  Object.defineProperty(usePlatformMethods, "__esModule", {
    value: true
  });
  usePlatformMethods.default = usePlatformMethods$1;
  var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
  var _useStable = _interopRequireDefault(/* @__PURE__ */ requireUseStable());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function usePlatformMethods$1(_ref) {
    _ref.pointerEvents;
    _ref.style;
    var ref = (0, _useStable.default)(() => (hostNode) => {
      if (hostNode != null) {
        hostNode.measure = (callback) => _UIManager.default.measure(hostNode, callback);
        hostNode.measureLayout = (relativeToNode, success, failure) => _UIManager.default.measureLayout(hostNode, relativeToNode, failure, success);
        hostNode.measureInWindow = (callback) => _UIManager.default.measureInWindow(hostNode, callback);
      }
    });
    return ref;
  }
  return usePlatformMethods;
}
var useResponderEvents = {};
var ResponderSystem = {};
var createResponderEvent = {};
var hasRequiredCreateResponderEvent;
function requireCreateResponderEvent() {
  if (hasRequiredCreateResponderEvent) return createResponderEvent;
  hasRequiredCreateResponderEvent = 1;
  Object.defineProperty(createResponderEvent, "__esModule", {
    value: true
  });
  createResponderEvent.default = createResponderEvent$1;
  var _getBoundingClientRect = _interopRequireDefault(/* @__PURE__ */ requireGetBoundingClientRect());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var emptyFunction = () => {
  };
  var emptyObject = {};
  var emptyArray = [];
  function normalizeIdentifier(identifier) {
    return identifier > 20 ? identifier % 20 : identifier;
  }
  function createResponderEvent$1(domEvent, responderTouchHistoryStore) {
    var rect;
    var propagationWasStopped = false;
    var changedTouches;
    var touches;
    var domEventChangedTouches = domEvent.changedTouches;
    var domEventType = domEvent.type;
    var metaKey = domEvent.metaKey === true;
    var shiftKey = domEvent.shiftKey === true;
    var force = domEventChangedTouches && domEventChangedTouches[0].force || 0;
    var identifier = normalizeIdentifier(domEventChangedTouches && domEventChangedTouches[0].identifier || 0);
    var clientX = domEventChangedTouches && domEventChangedTouches[0].clientX || domEvent.clientX;
    var clientY = domEventChangedTouches && domEventChangedTouches[0].clientY || domEvent.clientY;
    var pageX = domEventChangedTouches && domEventChangedTouches[0].pageX || domEvent.pageX;
    var pageY = domEventChangedTouches && domEventChangedTouches[0].pageY || domEvent.pageY;
    var preventDefault = typeof domEvent.preventDefault === "function" ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
    var timestamp = domEvent.timeStamp;
    function normalizeTouches(touches2) {
      return Array.prototype.slice.call(touches2).map((touch) => {
        return {
          force: touch.force,
          identifier: normalizeIdentifier(touch.identifier),
          get locationX() {
            return locationX(touch.clientX);
          },
          get locationY() {
            return locationY(touch.clientY);
          },
          pageX: touch.pageX,
          pageY: touch.pageY,
          target: touch.target,
          timestamp
        };
      });
    }
    if (domEventChangedTouches != null) {
      changedTouches = normalizeTouches(domEventChangedTouches);
      touches = normalizeTouches(domEvent.touches);
    } else {
      var emulatedTouches = [{
        force,
        identifier,
        get locationX() {
          return locationX(clientX);
        },
        get locationY() {
          return locationY(clientY);
        },
        pageX,
        pageY,
        target: domEvent.target,
        timestamp
      }];
      changedTouches = emulatedTouches;
      touches = domEventType === "mouseup" || domEventType === "dragstart" ? emptyArray : emulatedTouches;
    }
    var responderEvent = {
      bubbles: true,
      cancelable: true,
      // `currentTarget` is set before dispatch
      currentTarget: null,
      defaultPrevented: domEvent.defaultPrevented,
      dispatchConfig: emptyObject,
      eventPhase: domEvent.eventPhase,
      isDefaultPrevented() {
        return domEvent.defaultPrevented;
      },
      isPropagationStopped() {
        return propagationWasStopped;
      },
      isTrusted: domEvent.isTrusted,
      nativeEvent: {
        altKey: false,
        ctrlKey: false,
        metaKey,
        shiftKey,
        changedTouches,
        force,
        identifier,
        get locationX() {
          return locationX(clientX);
        },
        get locationY() {
          return locationY(clientY);
        },
        pageX,
        pageY,
        target: domEvent.target,
        timestamp,
        touches,
        type: domEventType
      },
      persist: emptyFunction,
      preventDefault,
      stopPropagation() {
        propagationWasStopped = true;
      },
      target: domEvent.target,
      timeStamp: timestamp,
      touchHistory: responderTouchHistoryStore.touchHistory
    };
    function locationX(x) {
      rect = rect || (0, _getBoundingClientRect.default)(responderEvent.currentTarget);
      if (rect) {
        return x - rect.left;
      }
    }
    function locationY(y) {
      rect = rect || (0, _getBoundingClientRect.default)(responderEvent.currentTarget);
      if (rect) {
        return y - rect.top;
      }
    }
    return responderEvent;
  }
  return createResponderEvent;
}
var ResponderEventTypes = {};
var hasRequiredResponderEventTypes;
function requireResponderEventTypes() {
  if (hasRequiredResponderEventTypes) return ResponderEventTypes;
  hasRequiredResponderEventTypes = 1;
  Object.defineProperty(ResponderEventTypes, "__esModule", {
    value: true
  });
  ResponderEventTypes.TOUCH_START = ResponderEventTypes.TOUCH_MOVE = ResponderEventTypes.TOUCH_END = ResponderEventTypes.TOUCH_CANCEL = ResponderEventTypes.SELECTION_CHANGE = ResponderEventTypes.SELECT = ResponderEventTypes.SCROLL = ResponderEventTypes.MOUSE_UP = ResponderEventTypes.MOUSE_MOVE = ResponderEventTypes.MOUSE_DOWN = ResponderEventTypes.MOUSE_CANCEL = ResponderEventTypes.FOCUS_OUT = ResponderEventTypes.CONTEXT_MENU = ResponderEventTypes.BLUR = void 0;
  ResponderEventTypes.isCancelish = isCancelish;
  ResponderEventTypes.isEndish = isEndish;
  ResponderEventTypes.isMoveish = isMoveish;
  ResponderEventTypes.isScroll = isScroll;
  ResponderEventTypes.isSelectionChange = isSelectionChange;
  ResponderEventTypes.isStartish = isStartish;
  ResponderEventTypes.BLUR = "blur";
  ResponderEventTypes.CONTEXT_MENU = "contextmenu";
  ResponderEventTypes.FOCUS_OUT = "focusout";
  var MOUSE_DOWN = ResponderEventTypes.MOUSE_DOWN = "mousedown";
  var MOUSE_MOVE = ResponderEventTypes.MOUSE_MOVE = "mousemove";
  var MOUSE_UP = ResponderEventTypes.MOUSE_UP = "mouseup";
  var MOUSE_CANCEL = ResponderEventTypes.MOUSE_CANCEL = "dragstart";
  var TOUCH_START = ResponderEventTypes.TOUCH_START = "touchstart";
  var TOUCH_MOVE = ResponderEventTypes.TOUCH_MOVE = "touchmove";
  var TOUCH_END = ResponderEventTypes.TOUCH_END = "touchend";
  var TOUCH_CANCEL = ResponderEventTypes.TOUCH_CANCEL = "touchcancel";
  var SCROLL = ResponderEventTypes.SCROLL = "scroll";
  var SELECT = ResponderEventTypes.SELECT = "select";
  var SELECTION_CHANGE = ResponderEventTypes.SELECTION_CHANGE = "selectionchange";
  function isStartish(eventType) {
    return eventType === TOUCH_START || eventType === MOUSE_DOWN;
  }
  function isMoveish(eventType) {
    return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
  }
  function isEndish(eventType) {
    return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
  }
  function isCancelish(eventType) {
    return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
  }
  function isScroll(eventType) {
    return eventType === SCROLL;
  }
  function isSelectionChange(eventType) {
    return eventType === SELECT || eventType === SELECTION_CHANGE;
  }
  return ResponderEventTypes;
}
var utils = {};
var isSelectionValid = {};
var hasRequiredIsSelectionValid;
function requireIsSelectionValid() {
  if (hasRequiredIsSelectionValid) return isSelectionValid;
  hasRequiredIsSelectionValid = 1;
  Object.defineProperty(isSelectionValid, "__esModule", {
    value: true
  });
  isSelectionValid.default = isSelectionValid$1;
  function isSelectionValid$1() {
    var selection = window.getSelection();
    var string = selection.toString();
    var anchorNode = selection.anchorNode;
    var focusNode = selection.focusNode;
    var isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
    return string.length >= 1 && string !== "\n" && isTextNode;
  }
  return isSelectionValid;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  Object.defineProperty(utils, "__esModule", {
    value: true
  });
  utils.getLowestCommonAncestor = getLowestCommonAncestor;
  utils.getResponderPaths = getResponderPaths;
  utils.hasTargetTouches = hasTargetTouches;
  utils.hasValidSelection = hasValidSelection;
  utils.isPrimaryPointerDown = isPrimaryPointerDown;
  utils.setResponderId = setResponderId;
  var _isSelectionValid = _interopRequireDefault(/* @__PURE__ */ requireIsSelectionValid());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var keyName = "__reactResponderId";
  function getEventPath(domEvent) {
    if (domEvent.type === "selectionchange") {
      var target = window.getSelection().anchorNode;
      return composedPathFallback(target);
    } else {
      var path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
      return path;
    }
  }
  function composedPathFallback(target) {
    var path = [];
    while (target != null && target !== document.body) {
      path.push(target);
      target = target.parentNode;
    }
    return path;
  }
  function getResponderId(node) {
    if (node != null) {
      return node[keyName];
    }
    return null;
  }
  function setResponderId(node, id) {
    if (node != null) {
      node[keyName] = id;
    }
  }
  function getResponderPaths(domEvent) {
    var idPath = [];
    var nodePath = [];
    var eventPath = getEventPath(domEvent);
    for (var i = 0; i < eventPath.length; i++) {
      var node = eventPath[i];
      var id = getResponderId(node);
      if (id != null) {
        idPath.push(id);
        nodePath.push(node);
      }
    }
    return {
      idPath,
      nodePath
    };
  }
  function getLowestCommonAncestor(pathA, pathB) {
    var pathALength = pathA.length;
    var pathBLength = pathB.length;
    if (
      // If either path is empty
      pathALength === 0 || pathBLength === 0 || // If the last elements aren't the same there can't be a common ancestor
      // that is connected to the responder system
      pathA[pathALength - 1] !== pathB[pathBLength - 1]
    ) {
      return null;
    }
    var itemA = pathA[0];
    var indexA = 0;
    var itemB = pathB[0];
    var indexB = 0;
    if (pathALength - pathBLength > 0) {
      indexA = pathALength - pathBLength;
      itemA = pathA[indexA];
      pathALength = pathBLength;
    }
    if (pathBLength - pathALength > 0) {
      indexB = pathBLength - pathALength;
      itemB = pathB[indexB];
      pathBLength = pathALength;
    }
    var depth = pathALength;
    while (depth--) {
      if (itemA === itemB) {
        return itemA;
      }
      itemA = pathA[indexA++];
      itemB = pathB[indexB++];
    }
    return null;
  }
  function hasTargetTouches(target, touches) {
    if (!touches || touches.length === 0) {
      return false;
    }
    for (var i = 0; i < touches.length; i++) {
      var node = touches[i].target;
      if (node != null) {
        if (target.contains(node)) {
          return true;
        }
      }
    }
    return false;
  }
  function hasValidSelection(domEvent) {
    if (domEvent.type === "selectionchange") {
      return (0, _isSelectionValid.default)();
    }
    return domEvent.type === "select";
  }
  function isPrimaryPointerDown(domEvent) {
    var altKey = domEvent.altKey, button = domEvent.button, buttons = domEvent.buttons, ctrlKey = domEvent.ctrlKey, type = domEvent.type;
    var isTouch = type === "touchstart" || type === "touchmove";
    var isPrimaryMouseDown = type === "mousedown" && (button === 0 || buttons === 1);
    var isPrimaryMouseMove = type === "mousemove" && buttons === 1;
    var noModifiers = altKey === false && ctrlKey === false;
    if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
      return true;
    }
    return false;
  }
  return utils;
}
var ResponderTouchHistoryStore = {};
var hasRequiredResponderTouchHistoryStore;
function requireResponderTouchHistoryStore() {
  if (hasRequiredResponderTouchHistoryStore) return ResponderTouchHistoryStore;
  hasRequiredResponderTouchHistoryStore = 1;
  Object.defineProperty(ResponderTouchHistoryStore, "__esModule", {
    value: true
  });
  ResponderTouchHistoryStore.ResponderTouchHistoryStore = void 0;
  var _ResponderEventTypes = /* @__PURE__ */ requireResponderEventTypes();
  var MAX_TOUCH_BANK = 20;
  function timestampForTouch(touch) {
    return touch.timeStamp || touch.timestamp;
  }
  function createTouchRecord(touch) {
    return {
      touchActive: true,
      startPageX: touch.pageX,
      startPageY: touch.pageY,
      startTimeStamp: timestampForTouch(touch),
      currentPageX: touch.pageX,
      currentPageY: touch.pageY,
      currentTimeStamp: timestampForTouch(touch),
      previousPageX: touch.pageX,
      previousPageY: touch.pageY,
      previousTimeStamp: timestampForTouch(touch)
    };
  }
  function resetTouchRecord(touchRecord, touch) {
    touchRecord.touchActive = true;
    touchRecord.startPageX = touch.pageX;
    touchRecord.startPageY = touch.pageY;
    touchRecord.startTimeStamp = timestampForTouch(touch);
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchRecord.previousPageX = touch.pageX;
    touchRecord.previousPageY = touch.pageY;
    touchRecord.previousTimeStamp = timestampForTouch(touch);
  }
  function getTouchIdentifier(_ref) {
    var identifier = _ref.identifier;
    if (identifier == null) {
      console.error("Touch object is missing identifier.");
    }
    return identifier;
  }
  function recordTouchStart(touch, touchHistory) {
    var identifier = getTouchIdentifier(touch);
    var touchRecord = touchHistory.touchBank[identifier];
    if (touchRecord) {
      resetTouchRecord(touchRecord, touch);
    } else {
      touchHistory.touchBank[identifier] = createTouchRecord(touch);
    }
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  }
  function recordTouchMove(touch, touchHistory) {
    var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
    if (touchRecord) {
      touchRecord.touchActive = true;
      touchRecord.previousPageX = touchRecord.currentPageX;
      touchRecord.previousPageY = touchRecord.currentPageY;
      touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
      touchRecord.currentPageX = touch.pageX;
      touchRecord.currentPageY = touch.pageY;
      touchRecord.currentTimeStamp = timestampForTouch(touch);
      touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
    } else {
      console.warn("Cannot record touch move without a touch start.\n", "Touch Move: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
    }
  }
  function recordTouchEnd(touch, touchHistory) {
    var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
    if (touchRecord) {
      touchRecord.touchActive = false;
      touchRecord.previousPageX = touchRecord.currentPageX;
      touchRecord.previousPageY = touchRecord.currentPageY;
      touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
      touchRecord.currentPageX = touch.pageX;
      touchRecord.currentPageY = touch.pageY;
      touchRecord.currentTimeStamp = timestampForTouch(touch);
      touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
    } else {
      console.warn("Cannot record touch end without a touch start.\n", "Touch End: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
    }
  }
  function printTouch(touch) {
    return JSON.stringify({
      identifier: touch.identifier,
      pageX: touch.pageX,
      pageY: touch.pageY,
      timestamp: timestampForTouch(touch)
    });
  }
  function printTouchBank(touchHistory) {
    var touchBank = touchHistory.touchBank;
    var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
    if (touchBank.length > MAX_TOUCH_BANK) {
      printed += " (original size: " + touchBank.length + ")";
    }
    return printed;
  }
  let ResponderTouchHistoryStore$1 = class ResponderTouchHistoryStore {
    constructor() {
      this._touchHistory = {
        touchBank: [],
        //Array<TouchRecord>
        numberActiveTouches: 0,
        // If there is only one active touch, we remember its location. This prevents
        // us having to loop through all of the touches all the time in the most
        // common case.
        indexOfSingleActiveTouch: -1,
        mostRecentTimeStamp: 0
      };
    }
    recordTouchTrack(topLevelType, nativeEvent) {
      var touchHistory = this._touchHistory;
      if ((0, _ResponderEventTypes.isMoveish)(topLevelType)) {
        nativeEvent.changedTouches.forEach((touch) => recordTouchMove(touch, touchHistory));
      } else if ((0, _ResponderEventTypes.isStartish)(topLevelType)) {
        nativeEvent.changedTouches.forEach((touch) => recordTouchStart(touch, touchHistory));
        touchHistory.numberActiveTouches = nativeEvent.touches.length;
        if (touchHistory.numberActiveTouches === 1) {
          touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
        }
      } else if ((0, _ResponderEventTypes.isEndish)(topLevelType)) {
        nativeEvent.changedTouches.forEach((touch) => recordTouchEnd(touch, touchHistory));
        touchHistory.numberActiveTouches = nativeEvent.touches.length;
        if (touchHistory.numberActiveTouches === 1) {
          var touchBank = touchHistory.touchBank;
          for (var i = 0; i < touchBank.length; i++) {
            var touchTrackToCheck = touchBank[i];
            if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
              touchHistory.indexOfSingleActiveTouch = i;
              break;
            }
          }
        }
      }
    }
    get touchHistory() {
      return this._touchHistory;
    }
  };
  ResponderTouchHistoryStore.ResponderTouchHistoryStore = ResponderTouchHistoryStore$1;
  return ResponderTouchHistoryStore;
}
var hasRequiredResponderSystem;
function requireResponderSystem() {
  if (hasRequiredResponderSystem) return ResponderSystem;
  hasRequiredResponderSystem = 1;
  Object.defineProperty(ResponderSystem, "__esModule", {
    value: true
  });
  ResponderSystem.addNode = addNode;
  ResponderSystem.attachListeners = attachListeners;
  ResponderSystem.getResponderNode = getResponderNode;
  ResponderSystem.removeNode = removeNode;
  ResponderSystem.terminateResponder = terminateResponder;
  var _createResponderEvent = _interopRequireDefault(/* @__PURE__ */ requireCreateResponderEvent());
  var _ResponderEventTypes = /* @__PURE__ */ requireResponderEventTypes();
  var _utils = /* @__PURE__ */ requireUtils();
  var _ResponderTouchHistoryStore = /* @__PURE__ */ requireResponderTouchHistoryStore();
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var emptyObject = {};
  var startRegistration = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
    bubbles: true
  }];
  var moveRegistration = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
    bubbles: true
  }];
  var scrollRegistration = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
    bubbles: false
  }];
  var shouldSetResponderEvents = {
    touchstart: startRegistration,
    mousedown: startRegistration,
    touchmove: moveRegistration,
    mousemove: moveRegistration,
    scroll: scrollRegistration
  };
  var emptyResponder = {
    id: null,
    idPath: null,
    node: null
  };
  var responderListenersMap = /* @__PURE__ */ new Map();
  var isEmulatingMouseEvents = false;
  var trackedTouchCount = 0;
  var currentResponder = {
    id: null,
    node: null,
    idPath: null
  };
  var responderTouchHistoryStore = new _ResponderTouchHistoryStore.ResponderTouchHistoryStore();
  function changeCurrentResponder(responder) {
    currentResponder = responder;
  }
  function getResponderConfig(id) {
    var config = responderListenersMap.get(id);
    return config != null ? config : emptyObject;
  }
  function eventListener(domEvent) {
    var eventType = domEvent.type;
    var eventTarget = domEvent.target;
    if (eventType === "touchstart") {
      isEmulatingMouseEvents = true;
    }
    if (eventType === "touchmove" || trackedTouchCount > 1) {
      isEmulatingMouseEvents = false;
    }
    if (
      // Ignore browser emulated mouse events
      eventType === "mousedown" && isEmulatingMouseEvents || eventType === "mousemove" && isEmulatingMouseEvents || // Ignore mousemove if a mousedown didn't occur first
      eventType === "mousemove" && trackedTouchCount < 1
    ) {
      return;
    }
    if (isEmulatingMouseEvents && eventType === "mouseup") {
      if (trackedTouchCount === 0) {
        isEmulatingMouseEvents = false;
      }
      return;
    }
    var isStartEvent = (0, _ResponderEventTypes.isStartish)(eventType) && (0, _utils.isPrimaryPointerDown)(domEvent);
    var isMoveEvent = (0, _ResponderEventTypes.isMoveish)(eventType);
    var isEndEvent = (0, _ResponderEventTypes.isEndish)(eventType);
    var isScrollEvent = (0, _ResponderEventTypes.isScroll)(eventType);
    var isSelectionChangeEvent = (0, _ResponderEventTypes.isSelectionChange)(eventType);
    var responderEvent = (0, _createResponderEvent.default)(domEvent, responderTouchHistoryStore);
    if (isStartEvent || isMoveEvent || isEndEvent) {
      if (domEvent.touches) {
        trackedTouchCount = domEvent.touches.length;
      } else {
        if (isStartEvent) {
          trackedTouchCount = 1;
        } else if (isEndEvent) {
          trackedTouchCount = 0;
        }
      }
      responderTouchHistoryStore.recordTouchTrack(eventType, responderEvent.nativeEvent);
    }
    var eventPaths = (0, _utils.getResponderPaths)(domEvent);
    var wasNegotiated = false;
    var wantsResponder;
    if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
      var currentResponderIdPath = currentResponder.idPath;
      var eventIdPath = eventPaths.idPath;
      if (currentResponderIdPath != null && eventIdPath != null) {
        var lowestCommonAncestor = (0, _utils.getLowestCommonAncestor)(currentResponderIdPath, eventIdPath);
        if (lowestCommonAncestor != null) {
          var indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
          var index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
          eventPaths = {
            idPath: eventIdPath.slice(index),
            nodePath: eventPaths.nodePath.slice(index)
          };
        } else {
          eventPaths = null;
        }
      }
      if (eventPaths != null) {
        wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);
        if (wantsResponder != null) {
          attemptTransfer(responderEvent, wantsResponder);
          wasNegotiated = true;
        }
      }
    }
    if (currentResponder.id != null && currentResponder.node != null) {
      var _currentResponder = currentResponder, id = _currentResponder.id, node = _currentResponder.node;
      var _getResponderConfig = getResponderConfig(id), onResponderStart = _getResponderConfig.onResponderStart, onResponderMove = _getResponderConfig.onResponderMove, onResponderEnd = _getResponderConfig.onResponderEnd, onResponderRelease = _getResponderConfig.onResponderRelease, onResponderTerminate = _getResponderConfig.onResponderTerminate, onResponderTerminationRequest = _getResponderConfig.onResponderTerminationRequest;
      responderEvent.bubbles = false;
      responderEvent.cancelable = false;
      responderEvent.currentTarget = node;
      if (isStartEvent) {
        if (onResponderStart != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderStart";
          onResponderStart(responderEvent);
        }
      } else if (isMoveEvent) {
        if (onResponderMove != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderMove";
          onResponderMove(responderEvent);
        }
      } else {
        var isTerminateEvent = (0, _ResponderEventTypes.isCancelish)(eventType) || // native context menu
        eventType === "contextmenu" || // window blur
        eventType === "blur" && eventTarget === window || // responder (or ancestors) blur
        eventType === "blur" && eventTarget.contains(node) && domEvent.relatedTarget !== node || // native scroll without using a pointer
        isScrollEvent && trackedTouchCount === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
        isScrollEvent && eventTarget.contains(node) && eventTarget !== node || // native select/selectionchange on node
        isSelectionChangeEvent && (0, _utils.hasValidSelection)(domEvent);
        var isReleaseEvent = isEndEvent && !isTerminateEvent && !(0, _utils.hasTargetTouches)(node, domEvent.touches);
        if (isEndEvent) {
          if (onResponderEnd != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderEnd";
            onResponderEnd(responderEvent);
          }
        }
        if (isReleaseEvent) {
          if (onResponderRelease != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderRelease";
            onResponderRelease(responderEvent);
          }
          changeCurrentResponder(emptyResponder);
        }
        if (isTerminateEvent) {
          var shouldTerminate = true;
          if (eventType === "contextmenu" || eventType === "scroll" || eventType === "selectionchange") {
            if (wasNegotiated) {
              shouldTerminate = false;
            } else if (onResponderTerminationRequest != null) {
              responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
              if (onResponderTerminationRequest(responderEvent) === false) {
                shouldTerminate = false;
              }
            }
          }
          if (shouldTerminate) {
            if (onResponderTerminate != null) {
              responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
              onResponderTerminate(responderEvent);
            }
            changeCurrentResponder(emptyResponder);
            isEmulatingMouseEvents = false;
            trackedTouchCount = 0;
          }
        }
      }
    }
  }
  function findWantsResponder(eventPaths, domEvent, responderEvent) {
    var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];
    if (shouldSetCallbacks != null) {
      var idPath = eventPaths.idPath, nodePath = eventPaths.nodePath;
      var shouldSetCallbackCaptureName = shouldSetCallbacks[0];
      var shouldSetCallbackBubbleName = shouldSetCallbacks[1];
      var bubbles = shouldSetCallbacks[2].bubbles;
      var check = function check2(id2, node2, callbackName) {
        var config = getResponderConfig(id2);
        var shouldSetCallback = config[callbackName];
        if (shouldSetCallback != null) {
          responderEvent.currentTarget = node2;
          if (shouldSetCallback(responderEvent) === true) {
            var prunedIdPath = idPath.slice(idPath.indexOf(id2));
            return {
              id: id2,
              node: node2,
              idPath: prunedIdPath
            };
          }
        }
      };
      for (var i = idPath.length - 1; i >= 0; i--) {
        var id = idPath[i];
        var node = nodePath[i];
        var result = check(id, node, shouldSetCallbackCaptureName);
        if (result != null) {
          return result;
        }
        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
      if (bubbles) {
        for (var _i = 0; _i < idPath.length; _i++) {
          var _id = idPath[_i];
          var _node = nodePath[_i];
          var _result = check(_id, _node, shouldSetCallbackBubbleName);
          if (_result != null) {
            return _result;
          }
          if (responderEvent.isPropagationStopped() === true) {
            return;
          }
        }
      } else {
        var _id2 = idPath[0];
        var _node2 = nodePath[0];
        var target = domEvent.target;
        if (target === _node2) {
          return check(_id2, _node2, shouldSetCallbackBubbleName);
        }
      }
    }
  }
  function attemptTransfer(responderEvent, wantsResponder) {
    var _currentResponder2 = currentResponder, currentId = _currentResponder2.id, currentNode = _currentResponder2.node;
    var id = wantsResponder.id, node = wantsResponder.node;
    var _getResponderConfig2 = getResponderConfig(id), onResponderGrant = _getResponderConfig2.onResponderGrant, onResponderReject = _getResponderConfig2.onResponderReject;
    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;
    if (currentId == null) {
      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderGrant";
        onResponderGrant(responderEvent);
      }
      changeCurrentResponder(wantsResponder);
    } else {
      var _getResponderConfig3 = getResponderConfig(currentId), onResponderTerminate = _getResponderConfig3.onResponderTerminate, onResponderTerminationRequest = _getResponderConfig3.onResponderTerminationRequest;
      var allowTransfer = true;
      if (onResponderTerminationRequest != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
        if (onResponderTerminationRequest(responderEvent) === false) {
          allowTransfer = false;
        }
      }
      if (allowTransfer) {
        if (onResponderTerminate != null) {
          responderEvent.currentTarget = currentNode;
          responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
          onResponderTerminate(responderEvent);
        }
        if (onResponderGrant != null) {
          responderEvent.currentTarget = node;
          responderEvent.dispatchConfig.registrationName = "onResponderGrant";
          onResponderGrant(responderEvent);
        }
        changeCurrentResponder(wantsResponder);
      } else {
        if (onResponderReject != null) {
          responderEvent.currentTarget = node;
          responderEvent.dispatchConfig.registrationName = "onResponderReject";
          onResponderReject(responderEvent);
        }
      }
    }
  }
  var documentEventsCapturePhase = ["blur", "scroll"];
  var documentEventsBubblePhase = [
    // mouse
    "mousedown",
    "mousemove",
    "mouseup",
    "dragstart",
    // touch
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    // other
    "contextmenu",
    "select",
    "selectionchange"
  ];
  function attachListeners() {
    if (_canUseDom.default && window.__reactResponderSystemActive == null) {
      window.addEventListener("blur", eventListener);
      documentEventsBubblePhase.forEach((eventType) => {
        document.addEventListener(eventType, eventListener);
      });
      documentEventsCapturePhase.forEach((eventType) => {
        document.addEventListener(eventType, eventListener, true);
      });
      window.__reactResponderSystemActive = true;
    }
  }
  function addNode(id, node, config) {
    (0, _utils.setResponderId)(node, id);
    responderListenersMap.set(id, config);
  }
  function removeNode(id) {
    if (currentResponder.id === id) {
      terminateResponder();
    }
    if (responderListenersMap.has(id)) {
      responderListenersMap.delete(id);
    }
  }
  function terminateResponder() {
    var _currentResponder3 = currentResponder, id = _currentResponder3.id, node = _currentResponder3.node;
    if (id != null && node != null) {
      var _getResponderConfig4 = getResponderConfig(id), onResponderTerminate = _getResponderConfig4.onResponderTerminate;
      if (onResponderTerminate != null) {
        var event = (0, _createResponderEvent.default)({}, responderTouchHistoryStore);
        event.currentTarget = node;
        onResponderTerminate(event);
      }
      changeCurrentResponder(emptyResponder);
    }
    isEmulatingMouseEvents = false;
    trackedTouchCount = 0;
  }
  function getResponderNode() {
    return currentResponder.node;
  }
  return ResponderSystem;
}
var hasRequiredUseResponderEvents;
function requireUseResponderEvents() {
  if (hasRequiredUseResponderEvents) return useResponderEvents;
  hasRequiredUseResponderEvents = 1;
  Object.defineProperty(useResponderEvents, "__esModule", {
    value: true
  });
  useResponderEvents.default = useResponderEvents$1;
  var React = _interopRequireWildcard(requireReact());
  var ResponderSystem2 = _interopRequireWildcard(/* @__PURE__ */ requireResponderSystem());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var emptyObject = {};
  var idCounter = 0;
  function useStable2(getInitialValue) {
    var ref = React.useRef(null);
    if (ref.current == null) {
      ref.current = getInitialValue();
    }
    return ref.current;
  }
  function useResponderEvents$1(hostRef, config) {
    if (config === void 0) {
      config = emptyObject;
    }
    var id = useStable2(() => idCounter++);
    var isAttachedRef = React.useRef(false);
    React.useEffect(() => {
      ResponderSystem2.attachListeners();
      return () => {
        ResponderSystem2.removeNode(id);
      };
    }, [id]);
    React.useEffect(() => {
      var _config = config, onMoveShouldSetResponder = _config.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = _config.onMoveShouldSetResponderCapture, onScrollShouldSetResponder = _config.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = _config.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = _config.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = _config.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = _config.onStartShouldSetResponder, onStartShouldSetResponderCapture = _config.onStartShouldSetResponderCapture;
      var requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
      var node = hostRef.current;
      if (requiresResponderSystem) {
        ResponderSystem2.addNode(id, node, config);
        isAttachedRef.current = true;
      } else if (isAttachedRef.current) {
        ResponderSystem2.removeNode(id);
        isAttachedRef.current = false;
      }
    }, [config, hostRef, id]);
    React.useDebugValue({
      isResponder: hostRef.current === ResponderSystem2.getResponderNode()
    });
    React.useDebugValue(config);
  }
  return useResponderEvents;
}
var TextAncestorContext = {};
var hasRequiredTextAncestorContext;
function requireTextAncestorContext() {
  if (hasRequiredTextAncestorContext) return TextAncestorContext;
  hasRequiredTextAncestorContext = 1;
  Object.defineProperty(TextAncestorContext, "__esModule", {
    value: true
  });
  TextAncestorContext.default = void 0;
  var _react = requireReact();
  var TextAncestorContext$1 = /* @__PURE__ */ (0, _react.createContext)(false);
  TextAncestorContext.default = TextAncestorContext$1;
  return TextAncestorContext;
}
var hasRequiredView;
function requireView() {
  if (hasRequiredView) return View;
  hasRequiredView = 1;
  Object.defineProperty(View, "__esModule", {
    value: true
  });
  View.default = void 0;
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  var forwardedProps2 = _interopRequireWildcard(/* @__PURE__ */ requireForwardedProps());
  var _pick = _interopRequireDefault(/* @__PURE__ */ requirePick());
  var _useElementLayout = _interopRequireDefault(/* @__PURE__ */ requireUseElementLayout());
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  var _usePlatformMethods = _interopRequireDefault(/* @__PURE__ */ requireUsePlatformMethods());
  var _useResponderEvents = _interopRequireDefault(/* @__PURE__ */ requireUseResponderEvents());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _TextAncestorContext = _interopRequireDefault(/* @__PURE__ */ requireTextAncestorContext());
  var _useLocale = /* @__PURE__ */ requireUseLocale();
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"];
  var forwardPropsList = Object.assign({}, forwardedProps2.defaultProps, forwardedProps2.accessibilityProps, forwardedProps2.clickProps, forwardedProps2.focusProps, forwardedProps2.keyboardProps, forwardedProps2.mouseProps, forwardedProps2.touchProps, forwardedProps2.styleProps, {
    href: true,
    lang: true,
    onScroll: true,
    onWheel: true,
    pointerEvents: true
  });
  var pickProps = (props) => (0, _pick.default)(props, forwardPropsList);
  var View$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var hrefAttrs = props.hrefAttrs, onLayout = props.onLayout, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderMove = props.onResponderMove, onResponderReject = props.onResponderReject, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminate = props.onResponderTerminate, onResponderTerminationRequest = props.onResponderTerminationRequest, onScrollShouldSetResponder = props.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = props.onStartShouldSetResponder, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var hasTextAncestor = React.useContext(_TextAncestorContext.default);
    var hostRef = React.useRef(null);
    var _useLocaleContext = (0, _useLocale.useLocaleContext)(), contextDirection = _useLocaleContext.direction;
    (0, _useElementLayout.default)(hostRef, onLayout);
    (0, _useResponderEvents.default)(hostRef, {
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onResponderEnd,
      onResponderGrant,
      onResponderMove,
      onResponderReject,
      onResponderRelease,
      onResponderStart,
      onResponderTerminate,
      onResponderTerminationRequest,
      onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture
    });
    var component = "div";
    var langDirection = props.lang != null ? (0, _useLocale.getLocaleDirection)(props.lang) : null;
    var componentDirection = props.dir || langDirection;
    var writingDirection = componentDirection || contextDirection;
    var supportedProps = pickProps(rest);
    supportedProps.dir = componentDirection;
    supportedProps.style = [styles2.view$raw, hasTextAncestor && styles2.inline, props.style];
    if (props.href != null) {
      component = "a";
      if (hrefAttrs != null) {
        var download = hrefAttrs.download, rel = hrefAttrs.rel, target = hrefAttrs.target;
        if (download != null) {
          supportedProps.download = download;
        }
        if (rel != null) {
          supportedProps.rel = rel;
        }
        if (typeof target === "string") {
          supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
        }
      }
    }
    var platformMethodsRef = (0, _usePlatformMethods.default)(supportedProps);
    var setRef = (0, _useMergeRefs.default)(hostRef, platformMethodsRef, forwardedRef);
    supportedProps.ref = setRef;
    return (0, _createElement.default)(component, supportedProps, {
      writingDirection
    });
  });
  View$1.displayName = "View";
  var styles2 = _StyleSheet.default.create({
    view$raw: {
      alignItems: "stretch",
      backgroundColor: "transparent",
      border: "0 solid black",
      boxSizing: "border-box",
      display: "flex",
      flexBasis: "auto",
      flexDirection: "column",
      flexShrink: 0,
      listStyle: "none",
      margin: 0,
      minHeight: 0,
      minWidth: 0,
      padding: 0,
      position: "relative",
      textDecoration: "none",
      zIndex: 0
    },
    inline: {
      display: "inline-flex"
    }
  });
  View.default = View$1;
  return View;
}
var deepDiffer = {};
var hasRequiredDeepDiffer;
function requireDeepDiffer() {
  if (hasRequiredDeepDiffer) return deepDiffer;
  hasRequiredDeepDiffer = 1;
  Object.defineProperty(deepDiffer, "__esModule", {
    value: true
  });
  deepDiffer.default = void 0;
  var deepDiffer$1 = function deepDiffer2(one, two, maxDepth) {
    if (maxDepth === void 0) {
      maxDepth = -1;
    }
    if (maxDepth === 0) {
      return true;
    }
    if (one === two) {
      return false;
    }
    if (typeof one === "function" && typeof two === "function") {
      return false;
    }
    if (typeof one !== "object" || one === null) {
      return one !== two;
    }
    if (typeof two !== "object" || two === null) {
      return true;
    }
    if (one.constructor !== two.constructor) {
      return true;
    }
    if (Array.isArray(one)) {
      var len = one.length;
      if (two.length !== len) {
        return true;
      }
      for (var ii = 0; ii < len; ii++) {
        if (deepDiffer2(one[ii], two[ii], maxDepth - 1)) {
          return true;
        }
      }
    } else {
      for (var key in one) {
        if (deepDiffer2(one[key], two[key], maxDepth - 1)) {
          return true;
        }
      }
      for (var twoKey in two) {
        if (one[twoKey] === void 0 && two[twoKey] !== void 0) {
          return true;
        }
      }
    }
    return false;
  };
  deepDiffer.default = deepDiffer$1;
  return deepDiffer;
}
var invariant_1;
var hasRequiredInvariant;
function requireInvariant() {
  if (hasRequiredInvariant) return invariant_1;
  hasRequiredInvariant = 1;
  function invariant(condition, format) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    if (!condition) {
      var error;
      if (format === void 0) {
        error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function() {
          return String(args[argIndex++]);
        }));
        error.name = "Invariant Violation";
      }
      error.framesToPop = 1;
      throw error;
    }
  }
  invariant_1 = invariant;
  return invariant_1;
}
var VirtualizedList$1 = {};
var createForOfIteratorHelperLoose = { exports: {} };
var unsupportedIterableToArray = { exports: {} };
var arrayLikeToArray = { exports: {} };
var hasRequiredArrayLikeToArray;
function requireArrayLikeToArray() {
  if (hasRequiredArrayLikeToArray) return arrayLikeToArray.exports;
  hasRequiredArrayLikeToArray = 1;
  (function(module) {
    function _arrayLikeToArray2(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    module.exports = _arrayLikeToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(arrayLikeToArray);
  return arrayLikeToArray.exports;
}
var hasRequiredUnsupportedIterableToArray;
function requireUnsupportedIterableToArray() {
  if (hasRequiredUnsupportedIterableToArray) return unsupportedIterableToArray.exports;
  hasRequiredUnsupportedIterableToArray = 1;
  (function(module) {
    var arrayLikeToArray2 = requireArrayLikeToArray();
    function _unsupportedIterableToArray2(r, a) {
      if (r) {
        if ("string" == typeof r) return arrayLikeToArray2(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray2(r, a) : void 0;
      }
    }
    module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(unsupportedIterableToArray);
  return unsupportedIterableToArray.exports;
}
var hasRequiredCreateForOfIteratorHelperLoose;
function requireCreateForOfIteratorHelperLoose() {
  if (hasRequiredCreateForOfIteratorHelperLoose) return createForOfIteratorHelperLoose.exports;
  hasRequiredCreateForOfIteratorHelperLoose = 1;
  (function(module) {
    var unsupportedIterableToArray2 = requireUnsupportedIterableToArray();
    function _createForOfIteratorHelperLoose(r, e) {
      var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (t) return (t = t.call(r)).next.bind(t);
      if (Array.isArray(r) || (t = unsupportedIterableToArray2(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var o = 0;
        return function() {
          return o >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[o++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _createForOfIteratorHelperLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(createForOfIteratorHelperLoose);
  return createForOfIteratorHelperLoose.exports;
}
var RefreshControl = {};
var hasRequiredRefreshControl;
function requireRefreshControl() {
  if (hasRequiredRefreshControl) return RefreshControl;
  hasRequiredRefreshControl = 1;
  Object.defineProperty(RefreshControl, "__esModule", {
    value: true
  });
  RefreshControl.default = void 0;
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _react = _interopRequireDefault(requireReact());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["colors", "enabled", "onRefresh", "progressBackgroundColor", "progressViewOffset", "refreshing", "size", "tintColor", "title", "titleColor"];
  function RefreshControl$1(props) {
    props.colors;
    props.enabled;
    props.onRefresh;
    props.progressBackgroundColor;
    props.progressViewOffset;
    props.refreshing;
    props.size;
    props.tintColor;
    props.title;
    props.titleColor;
    var rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    return /* @__PURE__ */ _react.default.createElement(_View.default, rest);
  }
  RefreshControl.default = RefreshControl$1;
  return RefreshControl;
}
var ScrollView = {};
var Dimensions = {};
var hasRequiredDimensions;
function requireDimensions() {
  if (hasRequiredDimensions) return Dimensions;
  hasRequiredDimensions = 1;
  Object.defineProperty(Dimensions, "__esModule", {
    value: true
  });
  Dimensions.default = void 0;
  var _invariant = _interopRequireDefault(requireInvariant());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var dimensions = {
    window: {
      fontScale: 1,
      height: 0,
      scale: 1,
      width: 0
    },
    screen: {
      fontScale: 1,
      height: 0,
      scale: 1,
      width: 0
    }
  };
  var listeners = {};
  var shouldInit = _canUseDom.default;
  function update() {
    if (!_canUseDom.default) {
      return;
    }
    var win = window;
    var height;
    var width;
    if (win.visualViewport) {
      var visualViewport = win.visualViewport;
      height = Math.round(visualViewport.height * visualViewport.scale);
      width = Math.round(visualViewport.width * visualViewport.scale);
    } else {
      var docEl = win.document.documentElement;
      height = docEl.clientHeight;
      width = docEl.clientWidth;
    }
    dimensions.window = {
      fontScale: 1,
      height,
      scale: win.devicePixelRatio || 1,
      width
    };
    dimensions.screen = {
      fontScale: 1,
      height: win.screen.height,
      scale: win.devicePixelRatio || 1,
      width: win.screen.width
    };
  }
  function handleResize() {
    update();
    if (Array.isArray(listeners["change"])) {
      listeners["change"].forEach((handler) => handler(dimensions));
    }
  }
  let Dimensions$1 = class Dimensions {
    static get(dimension) {
      if (shouldInit) {
        shouldInit = false;
        update();
      }
      (0, _invariant.default)(dimensions[dimension], "No dimension set for key " + dimension);
      return dimensions[dimension];
    }
    static set(initialDimensions) {
      if (initialDimensions) {
        if (_canUseDom.default) {
          (0, _invariant.default)(false, "Dimensions cannot be set in the browser");
        } else {
          if (initialDimensions.screen != null) {
            dimensions.screen = initialDimensions.screen;
          }
          if (initialDimensions.window != null) {
            dimensions.window = initialDimensions.window;
          }
        }
      }
    }
    static addEventListener(type, handler) {
      listeners[type] = listeners[type] || [];
      listeners[type].push(handler);
      return {
        remove: () => {
          this.removeEventListener(type, handler);
        }
      };
    }
    static removeEventListener(type, handler) {
      if (Array.isArray(listeners[type])) {
        listeners[type] = listeners[type].filter((_handler) => _handler !== handler);
      }
    }
  };
  Dimensions.default = Dimensions$1;
  if (_canUseDom.default) {
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize, false);
    } else {
      window.addEventListener("resize", handleResize, false);
    }
  }
  return Dimensions;
}
var dismissKeyboard = {};
var TextInputState = {};
var hasRequiredTextInputState;
function requireTextInputState() {
  if (hasRequiredTextInputState) return TextInputState;
  hasRequiredTextInputState = 1;
  Object.defineProperty(TextInputState, "__esModule", {
    value: true
  });
  TextInputState.default = void 0;
  var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var TextInputState$1 = {
    /**
     * Internal state
     */
    _currentlyFocusedNode: null,
    /**
     * Returns the ID of the currently focused text field, if one exists
     * If no text field is focused it returns null
     */
    currentlyFocusedField() {
      if (document.activeElement !== this._currentlyFocusedNode) {
        this._currentlyFocusedNode = null;
      }
      return this._currentlyFocusedNode;
    },
    /**
     * @param {Object} TextInputID id of the text field to focus
     * Focuses the specified text field
     * noop if the text field was already focused
     */
    focusTextInput(textFieldNode) {
      if (textFieldNode !== null) {
        this._currentlyFocusedNode = textFieldNode;
        if (document.activeElement !== textFieldNode) {
          _UIManager.default.focus(textFieldNode);
        }
      }
    },
    /**
     * @param {Object} textFieldNode id of the text field to focus
     * Unfocuses the specified text field
     * noop if it wasn't focused
     */
    blurTextInput(textFieldNode) {
      if (textFieldNode !== null) {
        this._currentlyFocusedNode = null;
        if (document.activeElement === textFieldNode) {
          _UIManager.default.blur(textFieldNode);
        }
      }
    }
  };
  TextInputState.default = TextInputState$1;
  return TextInputState;
}
var hasRequiredDismissKeyboard;
function requireDismissKeyboard() {
  if (hasRequiredDismissKeyboard) return dismissKeyboard;
  hasRequiredDismissKeyboard = 1;
  Object.defineProperty(dismissKeyboard, "__esModule", {
    value: true
  });
  dismissKeyboard.default = void 0;
  var _TextInputState = _interopRequireDefault(/* @__PURE__ */ requireTextInputState());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var dismissKeyboard$1 = () => {
    _TextInputState.default.blurTextInput(_TextInputState.default.currentlyFocusedField());
  };
  dismissKeyboard.default = dismissKeyboard$1;
  return dismissKeyboard;
}
var ScrollViewBase = {};
var hasRequiredScrollViewBase;
function requireScrollViewBase() {
  if (hasRequiredScrollViewBase) return ScrollViewBase;
  hasRequiredScrollViewBase = 1;
  Object.defineProperty(ScrollViewBase, "__esModule", {
    value: true
  });
  ScrollViewBase.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["onScroll", "onTouchMove", "onWheel", "scrollEnabled", "scrollEventThrottle", "showsHorizontalScrollIndicator", "showsVerticalScrollIndicator", "style"];
  function normalizeScrollEvent(e) {
    return {
      nativeEvent: {
        contentOffset: {
          get x() {
            return e.target.scrollLeft;
          },
          get y() {
            return e.target.scrollTop;
          }
        },
        contentSize: {
          get height() {
            return e.target.scrollHeight;
          },
          get width() {
            return e.target.scrollWidth;
          }
        },
        layoutMeasurement: {
          get height() {
            return e.target.offsetHeight;
          },
          get width() {
            return e.target.offsetWidth;
          }
        }
      },
      timeStamp: Date.now()
    };
  }
  function shouldEmitScrollEvent(lastTick, eventThrottle) {
    var timeSinceLastTick = Date.now() - lastTick;
    return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
  }
  var ScrollViewBase$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var onScroll = props.onScroll, onTouchMove = props.onTouchMove, onWheel = props.onWheel, _props$scrollEnabled = props.scrollEnabled, scrollEnabled = _props$scrollEnabled === void 0 ? true : _props$scrollEnabled, _props$scrollEventThr = props.scrollEventThrottle, scrollEventThrottle = _props$scrollEventThr === void 0 ? 0 : _props$scrollEventThr, showsHorizontalScrollIndicator = props.showsHorizontalScrollIndicator, showsVerticalScrollIndicator = props.showsVerticalScrollIndicator, style = props.style, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var scrollState = React.useRef({
      isScrolling: false,
      scrollLastTick: 0
    });
    var scrollTimeout = React.useRef(null);
    var scrollRef = React.useRef(null);
    function createPreventableScrollHandler(handler) {
      return (e) => {
        if (scrollEnabled) {
          if (handler) {
            handler(e);
          }
        }
      };
    }
    function handleScroll(e) {
      e.stopPropagation();
      if (e.target === scrollRef.current) {
        e.persist();
        if (scrollTimeout.current != null) {
          clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
          handleScrollEnd(e);
        }, 100);
        if (scrollState.current.isScrolling) {
          if (shouldEmitScrollEvent(scrollState.current.scrollLastTick, scrollEventThrottle)) {
            handleScrollTick(e);
          }
        } else {
          handleScrollStart(e);
        }
      }
    }
    function handleScrollStart(e) {
      scrollState.current.isScrolling = true;
      handleScrollTick(e);
    }
    function handleScrollTick(e) {
      scrollState.current.scrollLastTick = Date.now();
      if (onScroll) {
        onScroll(normalizeScrollEvent(e));
      }
    }
    function handleScrollEnd(e) {
      scrollState.current.isScrolling = false;
      if (onScroll) {
        onScroll(normalizeScrollEvent(e));
      }
    }
    var hideScrollbar = showsHorizontalScrollIndicator === false || showsVerticalScrollIndicator === false;
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, rest, {
      onScroll: handleScroll,
      onTouchMove: createPreventableScrollHandler(onTouchMove),
      onWheel: createPreventableScrollHandler(onWheel),
      ref: (0, _useMergeRefs.default)(scrollRef, forwardedRef),
      style: [style, !scrollEnabled && styles2.scrollDisabled, hideScrollbar && styles2.hideScrollbar]
    }));
  });
  var styles2 = _StyleSheet.default.create({
    scrollDisabled: {
      overflowX: "hidden",
      overflowY: "hidden",
      touchAction: "none"
    },
    hideScrollbar: {
      scrollbarWidth: "none"
    }
  });
  ScrollViewBase.default = ScrollViewBase$1;
  return ScrollViewBase;
}
var emptyFunction_1;
var hasRequiredEmptyFunction;
function requireEmptyFunction() {
  if (hasRequiredEmptyFunction) return emptyFunction_1;
  hasRequiredEmptyFunction = 1;
  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }
  var emptyFunction = function emptyFunction2() {
  };
  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function() {
    return this;
  };
  emptyFunction.thatReturnsArgument = function(arg) {
    return arg;
  };
  emptyFunction_1 = emptyFunction;
  return emptyFunction_1;
}
var warning_1;
var hasRequiredWarning;
function requireWarning() {
  if (hasRequiredWarning) return warning_1;
  hasRequiredWarning = 1;
  var emptyFunction = requireEmptyFunction();
  var warning = emptyFunction;
  warning_1 = warning;
  return warning_1;
}
var hasRequiredScrollView;
function requireScrollView() {
  if (hasRequiredScrollView) return ScrollView;
  hasRequiredScrollView = 1;
  Object.defineProperty(ScrollView, "__esModule", {
    value: true
  });
  ScrollView.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _Dimensions = _interopRequireDefault(/* @__PURE__ */ requireDimensions());
  var _dismissKeyboard = _interopRequireDefault(/* @__PURE__ */ requireDismissKeyboard());
  var _invariant = _interopRequireDefault(requireInvariant());
  var _mergeRefs = _interopRequireDefault(/* @__PURE__ */ requireMergeRefs());
  var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform$1());
  var _ScrollViewBase = _interopRequireDefault(/* @__PURE__ */ requireScrollViewBase());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _TextInputState = _interopRequireDefault(/* @__PURE__ */ requireTextInputState());
  var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _react = _interopRequireDefault(requireReact());
  var _warning = _interopRequireDefault(requireWarning());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["contentContainerStyle", "horizontal", "onContentSizeChange", "refreshControl", "stickyHeaderIndices", "pagingEnabled", "forwardedRef", "keyboardDismissMode", "onScroll", "centerContent"];
  var emptyObject = {};
  var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
  let ScrollView$1 = class ScrollView extends _react.default.Component {
    constructor() {
      super(...arguments);
      this._scrollNodeRef = null;
      this._innerViewRef = null;
      this.isTouching = false;
      this.lastMomentumScrollBeginTime = 0;
      this.lastMomentumScrollEndTime = 0;
      this.observedScrollSinceBecomingResponder = false;
      this.becameResponderWhileAnimating = false;
      this.scrollResponderHandleScrollShouldSetResponder = () => {
        return this.isTouching;
      };
      this.scrollResponderHandleStartShouldSetResponderCapture = (e) => {
        return this.scrollResponderIsAnimating();
      };
      this.scrollResponderHandleTerminationRequest = () => {
        return !this.observedScrollSinceBecomingResponder;
      };
      this.scrollResponderHandleTouchEnd = (e) => {
        var nativeEvent = e.nativeEvent;
        this.isTouching = nativeEvent.touches.length !== 0;
        this.props.onTouchEnd && this.props.onTouchEnd(e);
      };
      this.scrollResponderHandleResponderRelease = (e) => {
        this.props.onResponderRelease && this.props.onResponderRelease(e);
        var currentlyFocusedTextInput = _TextInputState.default.currentlyFocusedField();
        if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.observedScrollSinceBecomingResponder && !this.becameResponderWhileAnimating) {
          this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
          _TextInputState.default.blurTextInput(currentlyFocusedTextInput);
        }
      };
      this.scrollResponderHandleScroll = (e) => {
        this.observedScrollSinceBecomingResponder = true;
        this.props.onScroll && this.props.onScroll(e);
      };
      this.scrollResponderHandleResponderGrant = (e) => {
        this.observedScrollSinceBecomingResponder = false;
        this.props.onResponderGrant && this.props.onResponderGrant(e);
        this.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
      };
      this.scrollResponderHandleScrollBeginDrag = (e) => {
        this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
      };
      this.scrollResponderHandleScrollEndDrag = (e) => {
        this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
      };
      this.scrollResponderHandleMomentumScrollBegin = (e) => {
        this.lastMomentumScrollBeginTime = Date.now();
        this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
      };
      this.scrollResponderHandleMomentumScrollEnd = (e) => {
        this.lastMomentumScrollEndTime = Date.now();
        this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
      };
      this.scrollResponderHandleTouchStart = (e) => {
        this.isTouching = true;
        this.props.onTouchStart && this.props.onTouchStart(e);
      };
      this.scrollResponderHandleTouchMove = (e) => {
        this.props.onTouchMove && this.props.onTouchMove(e);
      };
      this.scrollResponderIsAnimating = () => {
        var now = Date.now();
        var timeSinceLastMomentumScrollEnd = now - this.lastMomentumScrollEndTime;
        var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.lastMomentumScrollEndTime < this.lastMomentumScrollBeginTime;
        return isAnimating;
      };
      this.scrollResponderScrollTo = (x, y, animated) => {
        if (typeof x === "number") {
          console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");
        } else {
          var _ref = x || emptyObject;
          x = _ref.x;
          y = _ref.y;
          animated = _ref.animated;
        }
        var node = this.getScrollableNode();
        var left = x || 0;
        var top = y || 0;
        if (node != null) {
          if (typeof node.scroll === "function") {
            node.scroll({
              top,
              left,
              behavior: !animated ? "auto" : "smooth"
            });
          } else {
            node.scrollLeft = left;
            node.scrollTop = top;
          }
        }
      };
      this.scrollResponderZoomTo = (rect, animated) => {
        if (_Platform.default.OS !== "ios") {
          (0, _invariant.default)("zoomToRect is not implemented");
        }
      };
      this.scrollResponderScrollNativeHandleToKeyboard = (nodeHandle, additionalOffset, preventNegativeScrollOffset) => {
        this.additionalScrollOffset = additionalOffset || 0;
        this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
        _UIManager.default.measureLayout(nodeHandle, this.getInnerViewNode(), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
      };
      this.scrollResponderInputMeasureAndScrollToKeyboard = (left, top, width, height) => {
        var keyboardScreenY = _Dimensions.default.get("window").height;
        if (this.keyboardWillOpenTo) {
          keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
        }
        var scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;
        if (this.preventNegativeScrollOffset) {
          scrollOffsetY = Math.max(0, scrollOffsetY);
        }
        this.scrollResponderScrollTo({
          x: 0,
          y: scrollOffsetY,
          animated: true
        });
        this.additionalOffset = 0;
        this.preventNegativeScrollOffset = false;
      };
      this.scrollResponderKeyboardWillShow = (e) => {
        this.keyboardWillOpenTo = e;
        this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
      };
      this.scrollResponderKeyboardWillHide = (e) => {
        this.keyboardWillOpenTo = null;
        this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
      };
      this.scrollResponderKeyboardDidShow = (e) => {
        if (e) {
          this.keyboardWillOpenTo = e;
        }
        this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
      };
      this.scrollResponderKeyboardDidHide = (e) => {
        this.keyboardWillOpenTo = null;
        this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
      };
      this.flashScrollIndicators = () => {
        this.scrollResponderFlashScrollIndicators();
      };
      this.getScrollResponder = () => {
        return this;
      };
      this.getScrollableNode = () => {
        return this._scrollNodeRef;
      };
      this.getInnerViewRef = () => {
        return this._innerViewRef;
      };
      this.getInnerViewNode = () => {
        return this._innerViewRef;
      };
      this.getNativeScrollRef = () => {
        return this._scrollNodeRef;
      };
      this.scrollTo = (y, x, animated) => {
        if (typeof y === "number") {
          console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");
        } else {
          var _ref2 = y || emptyObject;
          x = _ref2.x;
          y = _ref2.y;
          animated = _ref2.animated;
        }
        this.scrollResponderScrollTo({
          x: x || 0,
          y: y || 0,
          animated: animated !== false
        });
      };
      this.scrollToEnd = (options) => {
        var animated = (options && options.animated) !== false;
        var horizontal = this.props.horizontal;
        var scrollResponderNode = this.getScrollableNode();
        var x = horizontal ? scrollResponderNode.scrollWidth : 0;
        var y = horizontal ? 0 : scrollResponderNode.scrollHeight;
        this.scrollResponderScrollTo({
          x,
          y,
          animated
        });
      };
      this._handleContentOnLayout = (e) => {
        var _e$nativeEvent$layout = e.nativeEvent.layout, width = _e$nativeEvent$layout.width, height = _e$nativeEvent$layout.height;
        this.props.onContentSizeChange(width, height);
      };
      this._handleScroll = (e) => {
        if (this.props.keyboardDismissMode === "on-drag") {
          (0, _dismissKeyboard.default)();
        }
        this.scrollResponderHandleScroll(e);
      };
      this._setInnerViewRef = (node) => {
        this._innerViewRef = node;
      };
      this._setScrollNodeRef = (node) => {
        this._scrollNodeRef = node;
        if (node != null) {
          node.getScrollResponder = this.getScrollResponder;
          node.getInnerViewNode = this.getInnerViewNode;
          node.getInnerViewRef = this.getInnerViewRef;
          node.getNativeScrollRef = this.getNativeScrollRef;
          node.getScrollableNode = this.getScrollableNode;
          node.scrollTo = this.scrollTo;
          node.scrollToEnd = this.scrollToEnd;
          node.flashScrollIndicators = this.flashScrollIndicators;
          node.scrollResponderZoomTo = this.scrollResponderZoomTo;
          node.scrollResponderScrollNativeHandleToKeyboard = this.scrollResponderScrollNativeHandleToKeyboard;
        }
        var ref = (0, _mergeRefs.default)(this.props.forwardedRef);
        ref(node);
      };
    }
    /**
     * ------------------------------------------------------
     * START SCROLLRESPONDER
     * ------------------------------------------------------
     */
    // Reset to false every time becomes responder. This is used to:
    // - Determine if the scroll view has been scrolled and therefore should
    // refuse to give up its responder lock.
    // - Determine if releasing should dismiss the keyboard when we are in
    // tap-to-dismiss mode (!this.props.keyboardShouldPersistTaps).
    /**
     * Invoke this from an `onScroll` event.
     */
    /**
     * Merely touch starting is not sufficient for a scroll view to become the
     * responder. Being the "responder" means that the very next touch move/end
     * event will result in an action/movement.
     *
     * Invoke this from an `onStartShouldSetResponder` event.
     *
     * `onStartShouldSetResponder` is used when the next move/end will trigger
     * some UI movement/action, but when you want to yield priority to views
     * nested inside of the view.
     *
     * There may be some cases where scroll views actually should return `true`
     * from `onStartShouldSetResponder`: Any time we are detecting a standard tap
     * that gives priority to nested views.
     *
     * - If a single tap on the scroll view triggers an action such as
     *   recentering a map style view yet wants to give priority to interaction
     *   views inside (such as dropped pins or labels), then we would return true
     *   from this method when there is a single touch.
     *
     * - Similar to the previous case, if a two finger "tap" should trigger a
     *   zoom, we would check the `touches` count, and if `>= 2`, we would return
     *   true.
     *
     */
    scrollResponderHandleStartShouldSetResponder() {
      return false;
    }
    /**
     * There are times when the scroll view wants to become the responder
     * (meaning respond to the next immediate `touchStart/touchEnd`), in a way
     * that *doesn't* give priority to nested views (hence the capture phase):
     *
     * - Currently animating.
     * - Tapping anywhere that is not the focused input, while the keyboard is
     *   up (which should dismiss the keyboard).
     *
     * Invoke this from an `onStartShouldSetResponderCapture` event.
     */
    /**
     * Invoke this from an `onResponderReject` event.
     *
     * Some other element is not yielding its role as responder. Normally, we'd
     * just disable the `UIScrollView`, but a touch has already began on it, the
     * `UIScrollView` will not accept being disabled after that. The easiest
     * solution for now is to accept the limitation of disallowing this
     * altogether. To improve this, find a way to disable the `UIScrollView` after
     * a touch has already started.
     */
    scrollResponderHandleResponderReject() {
      (0, _warning.default)(false, "ScrollView doesn't take rejection well - scrolls anyway");
    }
    /**
     * We will allow the scroll view to give up its lock iff it acquired the lock
     * during an animation. This is a very useful default that happens to satisfy
     * many common user experiences.
     *
     * - Stop a scroll on the left edge, then turn that into an outer view's
     *   backswipe.
     * - Stop a scroll mid-bounce at the top, continue pulling to have the outer
     *   view dismiss.
     * - However, without catching the scroll view mid-bounce (while it is
     *   motionless), if you drag far enough for the scroll view to become
     *   responder (and therefore drag the scroll view a bit), any backswipe
     *   navigation of a swipe gesture higher in the view hierarchy, should be
     *   rejected.
     */
    /**
     * Invoke this from an `onTouchEnd` event.
     *
     * @param {SyntheticEvent} e Event.
     */
    /**
     * Invoke this from an `onResponderRelease` event.
     */
    /**
     * Invoke this from an `onResponderGrant` event.
     */
    /**
     * Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
     * animation, and there's not an easy way to distinguish a drag vs. stopping
     * momentum.
     *
     * Invoke this from an `onScrollBeginDrag` event.
     */
    /**
     * Invoke this from an `onScrollEndDrag` event.
     */
    /**
     * Invoke this from an `onMomentumScrollBegin` event.
     */
    /**
     * Invoke this from an `onMomentumScrollEnd` event.
     */
    /**
     * Invoke this from an `onTouchStart` event.
     *
     * Since we know that the `SimpleEventPlugin` occurs later in the plugin
     * order, after `ResponderEventPlugin`, we can detect that we were *not*
     * permitted to be the responder (presumably because a contained view became
     * responder). The `onResponderReject` won't fire in that case - it only
     * fires when a *current* responder rejects our request.
     *
     * @param {SyntheticEvent} e Touch Start event.
     */
    /**
     * Invoke this from an `onTouchMove` event.
     *
     * Since we know that the `SimpleEventPlugin` occurs later in the plugin
     * order, after `ResponderEventPlugin`, we can detect that we were *not*
     * permitted to be the responder (presumably because a contained view became
     * responder). The `onResponderReject` won't fire in that case - it only
     * fires when a *current* responder rejects our request.
     *
     * @param {SyntheticEvent} e Touch Start event.
     */
    /**
     * A helper function for this class that lets us quickly determine if the
     * view is currently animating. This is particularly useful to know when
     * a touch has just started or ended.
     */
    /**
     * A helper function to scroll to a specific point in the scrollview.
     * This is currently used to help focus on child textviews, but can also
     * be used to quickly scroll to any element we want to focus. Syntax:
     *
     * scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
     *
     * Note: The weird argument signature is due to the fact that, for historical reasons,
     * the function also accepts separate arguments as as alternative to the options object.
     * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
     */
    /**
     * A helper function to zoom to a specific rect in the scrollview. The argument has the shape
     * {x: number; y: number; width: number; height: number; animated: boolean = true}
     *
     * @platform ios
     */
    /**
     * Displays the scroll indicators momentarily.
     */
    scrollResponderFlashScrollIndicators() {
    }
    /**
     * This method should be used as the callback to onFocus in a TextInputs'
     * parent view. Note that any module using this mixin needs to return
     * the parent view's ref in getScrollViewRef() in order to use this method.
     * @param {any} nodeHandle The TextInput node handle
     * @param {number} additionalOffset The scroll view's top "contentInset".
     *        Default is 0.
     * @param {bool} preventNegativeScrolling Whether to allow pulling the content
     *        down to make it meet the keyboard's top. Default is false.
     */
    /**
     * The calculations performed here assume the scroll view takes up the entire
     * screen - even if has some content inset. We then measure the offsets of the
     * keyboard, and compensate both for the scroll view's "contentInset".
     *
     * @param {number} left Position of input w.r.t. table view.
     * @param {number} top Position of input w.r.t. table view.
     * @param {number} width Width of the text input.
     * @param {number} height Height of the text input.
     */
    scrollResponderTextInputFocusError(e) {
      console.error("Error measuring text field: ", e);
    }
    /**
     * Warning, this may be called several times for a single keyboard opening.
     * It's best to store the information in this method and then take any action
     * at a later point (either in `keyboardDidShow` or other).
     *
     * Here's the order that events occur in:
     * - focus
     * - willShow {startCoordinates, endCoordinates} several times
     * - didShow several times
     * - blur
     * - willHide {startCoordinates, endCoordinates} several times
     * - didHide several times
     *
     * The `ScrollResponder` providesModule callbacks for each of these events.
     * Even though any user could have easily listened to keyboard events
     * themselves, using these `props` callbacks ensures that ordering of events
     * is consistent - and not dependent on the order that the keyboard events are
     * subscribed to. This matters when telling the scroll view to scroll to where
     * the keyboard is headed - the scroll responder better have been notified of
     * the keyboard destination before being instructed to scroll to where the
     * keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
     * will work.
     *
     * WARNING: These callbacks will fire even if a keyboard is displayed in a
     * different navigation pane. Filter out the events to determine if they are
     * relevant to you. (For example, only if you receive these callbacks after
     * you had explicitly focused a node etc).
     */
    /**
     * ------------------------------------------------------
     * END SCROLLRESPONDER
     * ------------------------------------------------------
     */
    /**
     * Returns a reference to the underlying scroll responder, which supports
     * operations like `scrollTo`. All ScrollView-like components should
     * implement this method so that they can be composed while providing access
     * to the underlying scroll responder's methods.
     */
    /**
     * Scrolls to a given x, y offset, either immediately or with a smooth animation.
     * Syntax:
     *
     * scrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
     *
     * Note: The weird argument signature is due to the fact that, for historical reasons,
     * the function also accepts separate arguments as as alternative to the options object.
     * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
     */
    /**
     * If this is a vertical ScrollView scrolls to the bottom.
     * If this is a horizontal ScrollView scrolls to the right.
     *
     * Use `scrollToEnd({ animated: true })` for smooth animated scrolling,
     * `scrollToEnd({ animated: false })` for immediate scrolling.
     * If no options are passed, `animated` defaults to true.
     */
    render() {
      var _this$props = this.props, contentContainerStyle = _this$props.contentContainerStyle, horizontal = _this$props.horizontal, onContentSizeChange = _this$props.onContentSizeChange, refreshControl = _this$props.refreshControl, stickyHeaderIndices = _this$props.stickyHeaderIndices, pagingEnabled = _this$props.pagingEnabled;
      _this$props.forwardedRef;
      _this$props.keyboardDismissMode;
      _this$props.onScroll;
      var centerContent = _this$props.centerContent, other = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
      var contentSizeChangeProps = {};
      if (onContentSizeChange) {
        contentSizeChangeProps = {
          onLayout: this._handleContentOnLayout
        };
      }
      var hasStickyHeaderIndices = !horizontal && Array.isArray(stickyHeaderIndices);
      var children = hasStickyHeaderIndices || pagingEnabled ? _react.default.Children.map(this.props.children, (child, i) => {
        var isSticky = hasStickyHeaderIndices && stickyHeaderIndices.indexOf(i) > -1;
        if (child != null && (isSticky || pagingEnabled)) {
          return /* @__PURE__ */ _react.default.createElement(_View.default, {
            style: [isSticky && styles2.stickyHeader, pagingEnabled && styles2.pagingEnabledChild]
          }, child);
        } else {
          return child;
        }
      }) : this.props.children;
      var contentContainer = /* @__PURE__ */ _react.default.createElement(_View.default, (0, _extends2.default)({}, contentSizeChangeProps, {
        children,
        collapsable: false,
        ref: this._setInnerViewRef,
        style: [horizontal && styles2.contentContainerHorizontal, centerContent && styles2.contentContainerCenterContent, contentContainerStyle]
      }));
      var baseStyle = horizontal ? styles2.baseHorizontal : styles2.baseVertical;
      var pagingEnabledStyle = horizontal ? styles2.pagingEnabledHorizontal : styles2.pagingEnabledVertical;
      var props = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, other), {}, {
        style: [baseStyle, pagingEnabled && pagingEnabledStyle, this.props.style],
        onTouchStart: this.scrollResponderHandleTouchStart,
        onTouchMove: this.scrollResponderHandleTouchMove,
        onTouchEnd: this.scrollResponderHandleTouchEnd,
        onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
        onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
        onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
        onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
        onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
        onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
        onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder,
        onScroll: this._handleScroll,
        onResponderGrant: this.scrollResponderHandleResponderGrant,
        onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
        onResponderTerminate: this.scrollResponderHandleTerminate,
        onResponderRelease: this.scrollResponderHandleResponderRelease,
        onResponderReject: this.scrollResponderHandleResponderReject
      });
      var ScrollViewClass = _ScrollViewBase.default;
      (0, _invariant.default)(ScrollViewClass !== void 0, "ScrollViewClass must not be undefined");
      var scrollView = /* @__PURE__ */ _react.default.createElement(ScrollViewClass, (0, _extends2.default)({}, props, {
        ref: this._setScrollNodeRef
      }), contentContainer);
      if (refreshControl) {
        return /* @__PURE__ */ _react.default.cloneElement(refreshControl, {
          style: props.style
        }, scrollView);
      }
      return scrollView;
    }
  };
  var commonStyle = {
    flexGrow: 1,
    flexShrink: 1,
    // Enable hardware compositing in modern browsers.
    // Creates a new layer with its own backing surface that can significantly
    // improve scroll performance.
    transform: "translateZ(0)",
    // iOS native scrolling
    WebkitOverflowScrolling: "touch"
  };
  var styles2 = _StyleSheet.default.create({
    baseVertical: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonStyle), {}, {
      flexDirection: "column",
      overflowX: "hidden",
      overflowY: "auto"
    }),
    baseHorizontal: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonStyle), {}, {
      flexDirection: "row",
      overflowX: "auto",
      overflowY: "hidden"
    }),
    contentContainerHorizontal: {
      flexDirection: "row"
    },
    contentContainerCenterContent: {
      justifyContent: "center",
      flexGrow: 1
    },
    stickyHeader: {
      position: "sticky",
      top: 0,
      zIndex: 10
    },
    pagingEnabledHorizontal: {
      scrollSnapType: "x mandatory"
    },
    pagingEnabledVertical: {
      scrollSnapType: "y mandatory"
    },
    pagingEnabledChild: {
      scrollSnapAlign: "start"
    }
  });
  var ForwardedScrollView = /* @__PURE__ */ _react.default.forwardRef((props, forwardedRef) => {
    return /* @__PURE__ */ _react.default.createElement(ScrollView$1, (0, _extends2.default)({}, props, {
      forwardedRef
    }));
  });
  ForwardedScrollView.displayName = "ScrollView";
  ScrollView.default = ForwardedScrollView;
  return ScrollView;
}
var Batchinator = {};
var InteractionManager = {};
var TaskQueue = {};
var hasRequiredTaskQueue;
function requireTaskQueue() {
  if (hasRequiredTaskQueue) return TaskQueue;
  hasRequiredTaskQueue = 1;
  Object.defineProperty(TaskQueue, "__esModule", {
    value: true
  });
  TaskQueue.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let TaskQueue$1 = class TaskQueue {
    constructor(_ref) {
      var onMoreTasks = _ref.onMoreTasks;
      this._onMoreTasks = onMoreTasks;
      this._queueStack = [{
        tasks: [],
        popable: true
      }];
    }
    enqueue(task) {
      this._getCurrentQueue().push(task);
    }
    enqueueTasks(tasks) {
      tasks.forEach((task) => this.enqueue(task));
    }
    cancelTasks(tasksToCancel) {
      this._queueStack = this._queueStack.map((queue) => (0, _objectSpread2.default)((0, _objectSpread2.default)({}, queue), {}, {
        tasks: queue.tasks.filter((task) => tasksToCancel.indexOf(task) === -1)
      })).filter((queue, idx) => queue.tasks.length > 0 || idx === 0);
    }
    hasTasksToProcess() {
      return this._getCurrentQueue().length > 0;
    }
    /**
     * Executes the next task in the queue.
     */
    processNext() {
      var queue = this._getCurrentQueue();
      if (queue.length) {
        var task = queue.shift();
        try {
          if (typeof task === "object" && task.gen) {
            this._genPromise(task);
          } else if (typeof task === "object" && task.run) {
            task.run();
          } else {
            (0, _invariant.default)(typeof task === "function", "Expected Function, SimpleTask, or PromiseTask, but got:\n" + JSON.stringify(task, null, 2));
            task();
          }
        } catch (e) {
          e.message = "TaskQueue: Error with task " + (task.name || "") + ": " + e.message;
          throw e;
        }
      }
    }
    _getCurrentQueue() {
      var stackIdx = this._queueStack.length - 1;
      var queue = this._queueStack[stackIdx];
      if (queue.popable && queue.tasks.length === 0 && stackIdx > 0) {
        this._queueStack.pop();
        return this._getCurrentQueue();
      } else {
        return queue.tasks;
      }
    }
    _genPromise(task) {
      var length = this._queueStack.push({
        tasks: [],
        popable: false
      });
      var stackIdx = length - 1;
      var stackItem = this._queueStack[stackIdx];
      task.gen().then(() => {
        stackItem.popable = true;
        this.hasTasksToProcess() && this._onMoreTasks();
      }).catch((ex) => {
        setTimeout(() => {
          ex.message = "TaskQueue: Error resolving Promise in task " + task.name + ": " + ex.message;
          throw ex;
        }, 0);
      });
    }
  };
  TaskQueue.default = TaskQueue$1;
  return TaskQueue;
}
var EventEmitter = {};
var hasRequiredEventEmitter;
function requireEventEmitter() {
  if (hasRequiredEventEmitter) return EventEmitter;
  hasRequiredEventEmitter = 1;
  Object.defineProperty(EventEmitter, "__esModule", {
    value: true
  });
  EventEmitter.default = void 0;
  let EventEmitter$1 = class EventEmitter {
    constructor() {
      this._registry = {};
    }
    /**
     * Registers a listener that is called when the supplied event is emitted.
     * Returns a subscription that has a `remove` method to undo registration.
     */
    addListener(eventType, listener, context) {
      var registrations = allocate(this._registry, eventType);
      var registration = {
        context,
        listener,
        remove() {
          registrations.delete(registration);
        }
      };
      registrations.add(registration);
      return registration;
    }
    /**
     * Emits the supplied event. Additional arguments supplied to `emit` will be
     * passed through to each of the registered listeners.
     *
     * If a listener modifies the listeners registered for the same event, those
     * changes will not be reflected in the current invocation of `emit`.
     */
    emit(eventType) {
      var registrations = this._registry[eventType];
      if (registrations != null) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        for (var _i = 0, _arr = [...registrations]; _i < _arr.length; _i++) {
          var registration = _arr[_i];
          registration.listener.apply(registration.context, args);
        }
      }
    }
    /**
     * Removes all registered listeners.
     */
    removeAllListeners(eventType) {
      if (eventType == null) {
        this._registry = {};
      } else {
        delete this._registry[eventType];
      }
    }
    /**
     * Returns the number of registered listeners for the supplied event.
     */
    listenerCount(eventType) {
      var registrations = this._registry[eventType];
      return registrations == null ? 0 : registrations.size;
    }
  };
  EventEmitter.default = EventEmitter$1;
  function allocate(registry, eventType) {
    var registrations = registry[eventType];
    if (registrations == null) {
      registrations = /* @__PURE__ */ new Set();
      registry[eventType] = registrations;
    }
    return registrations;
  }
  return EventEmitter;
}
var requestIdleCallback = {};
var hasRequiredRequestIdleCallback;
function requireRequestIdleCallback() {
  if (hasRequiredRequestIdleCallback) return requestIdleCallback;
  hasRequiredRequestIdleCallback = 1;
  Object.defineProperty(requestIdleCallback, "__esModule", {
    value: true
  });
  requestIdleCallback.default = requestIdleCallback.cancelIdleCallback = void 0;
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _requestIdleCallback = function _requestIdleCallback2(cb, options) {
    return setTimeout(() => {
      var start = Date.now();
      cb({
        didTimeout: false,
        timeRemaining() {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  };
  var _cancelIdleCallback = function _cancelIdleCallback2(id) {
    clearTimeout(id);
  };
  var isSupported = _canUseDom.default && typeof window.requestIdleCallback !== "undefined";
  var requestIdleCallback$1 = isSupported ? window.requestIdleCallback : _requestIdleCallback;
  requestIdleCallback.cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
  requestIdleCallback.default = requestIdleCallback$1;
  return requestIdleCallback;
}
var hasRequiredInteractionManager;
function requireInteractionManager() {
  if (hasRequiredInteractionManager) return InteractionManager;
  hasRequiredInteractionManager = 1;
  Object.defineProperty(InteractionManager, "__esModule", {
    value: true
  });
  InteractionManager.default = void 0;
  var _invariant = _interopRequireDefault(requireInvariant());
  var _TaskQueue = _interopRequireDefault(/* @__PURE__ */ requireTaskQueue());
  var _EventEmitter = _interopRequireDefault(/* @__PURE__ */ requireEventEmitter());
  var _requestIdleCallback = _interopRequireDefault(/* @__PURE__ */ requireRequestIdleCallback());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _emitter = new _EventEmitter.default();
  var InteractionManager$1 = {
    Events: {
      interactionStart: "interactionStart",
      interactionComplete: "interactionComplete"
    },
    /**
     * Schedule a function to run after all interactions have completed.
     */
    runAfterInteractions(task) {
      var tasks = [];
      var promise = new Promise((resolve) => {
        _scheduleUpdate();
        if (task) {
          tasks.push(task);
        }
        tasks.push({
          run: resolve,
          name: "resolve " + (task && task.name || "?")
        });
        _taskQueue.enqueueTasks(tasks);
      });
      return {
        then: promise.then.bind(promise),
        done: promise.then.bind(promise),
        cancel: () => {
          _taskQueue.cancelTasks(tasks);
        }
      };
    },
    /**
     * Notify manager that an interaction has started.
     */
    createInteractionHandle() {
      _scheduleUpdate();
      var handle = ++_inc;
      _addInteractionSet.add(handle);
      return handle;
    },
    /**
     * Notify manager that an interaction has completed.
     */
    clearInteractionHandle(handle) {
      (0, _invariant.default)(!!handle, "Must provide a handle to clear.");
      _scheduleUpdate();
      _addInteractionSet.delete(handle);
      _deleteInteractionSet.add(handle);
    },
    addListener: _emitter.addListener.bind(_emitter),
    /**
     *
     * @param deadline
     */
    setDeadline(deadline) {
      _deadline = deadline;
    }
  };
  var _interactionSet = /* @__PURE__ */ new Set();
  var _addInteractionSet = /* @__PURE__ */ new Set();
  var _deleteInteractionSet = /* @__PURE__ */ new Set();
  var _taskQueue = new _TaskQueue.default({
    onMoreTasks: _scheduleUpdate
  });
  var _nextUpdateHandle = 0;
  var _inc = 0;
  var _deadline = -1;
  function _scheduleUpdate() {
    if (!_nextUpdateHandle) {
      if (_deadline > 0) {
        _nextUpdateHandle = setTimeout(_processUpdate);
      } else {
        _nextUpdateHandle = (0, _requestIdleCallback.default)(_processUpdate);
      }
    }
  }
  function _processUpdate() {
    _nextUpdateHandle = 0;
    var interactionCount = _interactionSet.size;
    _addInteractionSet.forEach((handle) => _interactionSet.add(handle));
    _deleteInteractionSet.forEach((handle) => _interactionSet.delete(handle));
    var nextInteractionCount = _interactionSet.size;
    if (interactionCount !== 0 && nextInteractionCount === 0) {
      _emitter.emit(InteractionManager$1.Events.interactionComplete);
    } else if (interactionCount === 0 && nextInteractionCount !== 0) {
      _emitter.emit(InteractionManager$1.Events.interactionStart);
    }
    if (nextInteractionCount === 0) {
      var begin = Date.now();
      while (_taskQueue.hasTasksToProcess()) {
        _taskQueue.processNext();
        if (_deadline > 0 && Date.now() - begin >= _deadline) {
          _scheduleUpdate();
          break;
        }
      }
    }
    _addInteractionSet.clear();
    _deleteInteractionSet.clear();
  }
  InteractionManager.default = InteractionManager$1;
  return InteractionManager;
}
var hasRequiredBatchinator;
function requireBatchinator() {
  if (hasRequiredBatchinator) return Batchinator;
  hasRequiredBatchinator = 1;
  Object.defineProperty(Batchinator, "__esModule", {
    value: true
  });
  Batchinator.default = void 0;
  var _InteractionManager = _interopRequireDefault(/* @__PURE__ */ requireInteractionManager());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let Batchinator$1 = class Batchinator {
    constructor(callback, delayMS) {
      this._delay = delayMS;
      this._callback = callback;
    }
    /*
     * Cleanup any pending tasks.
     *
     * By default, if there is a pending task the callback is run immediately. Set the option abort to
     * true to not call the callback if it was pending.
     */
    dispose(options) {
      if (options === void 0) {
        options = {
          abort: false
        };
      }
      if (this._taskHandle) {
        this._taskHandle.cancel();
        if (!options.abort) {
          this._callback();
        }
        this._taskHandle = null;
      }
    }
    schedule() {
      if (this._taskHandle) {
        return;
      }
      var timeoutHandle = setTimeout(() => {
        this._taskHandle = _InteractionManager.default.runAfterInteractions(() => {
          this._taskHandle = null;
          this._callback();
        });
      }, this._delay);
      this._taskHandle = {
        cancel: () => clearTimeout(timeoutHandle)
      };
    }
  };
  Batchinator.default = Batchinator$1;
  return Batchinator;
}
var clamp = {};
var hasRequiredClamp;
function requireClamp() {
  if (hasRequiredClamp) return clamp;
  hasRequiredClamp = 1;
  Object.defineProperty(clamp, "__esModule", {
    value: true
  });
  clamp.default = void 0;
  function clamp$1(min, value, max) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }
  clamp.default = clamp$1;
  return clamp;
}
var infoLog = {};
var hasRequiredInfoLog;
function requireInfoLog() {
  if (hasRequiredInfoLog) return infoLog;
  hasRequiredInfoLog = 1;
  Object.defineProperty(infoLog, "__esModule", {
    value: true
  });
  infoLog.default = void 0;
  function infoLog$1() {
    return console.log(...arguments);
  }
  infoLog.default = infoLog$1;
  return infoLog;
}
var CellRenderMask = {};
var hasRequiredCellRenderMask;
function requireCellRenderMask() {
  if (hasRequiredCellRenderMask) return CellRenderMask;
  hasRequiredCellRenderMask = 1;
  Object.defineProperty(CellRenderMask, "__esModule", {
    value: true
  });
  CellRenderMask.CellRenderMask = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let CellRenderMask$1 = class CellRenderMask {
    constructor(numCells) {
      (0, _invariant.default)(numCells >= 0, "CellRenderMask must contain a non-negative number os cells");
      this._numCells = numCells;
      if (numCells === 0) {
        this._regions = [];
      } else {
        this._regions = [{
          first: 0,
          last: numCells - 1,
          isSpacer: true
        }];
      }
    }
    enumerateRegions() {
      return this._regions;
    }
    addCells(cells) {
      (0, _invariant.default)(cells.first >= 0 && cells.first < this._numCells && cells.last >= -1 && cells.last < this._numCells && cells.last >= cells.first - 1, "CellRenderMask.addCells called with invalid cell range");
      if (cells.last < cells.first) {
        return;
      }
      var _this$_findRegion = this._findRegion(cells.first), firstIntersect = _this$_findRegion[0], firstIntersectIdx = _this$_findRegion[1];
      var _this$_findRegion2 = this._findRegion(cells.last), lastIntersect = _this$_findRegion2[0], lastIntersectIdx = _this$_findRegion2[1];
      if (firstIntersectIdx === lastIntersectIdx && !firstIntersect.isSpacer) {
        return;
      }
      var newLeadRegion = [];
      var newTailRegion = [];
      var newMainRegion = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, cells), {}, {
        isSpacer: false
      });
      if (firstIntersect.first < newMainRegion.first) {
        if (firstIntersect.isSpacer) {
          newLeadRegion.push({
            first: firstIntersect.first,
            last: newMainRegion.first - 1,
            isSpacer: true
          });
        } else {
          newMainRegion.first = firstIntersect.first;
        }
      }
      if (lastIntersect.last > newMainRegion.last) {
        if (lastIntersect.isSpacer) {
          newTailRegion.push({
            first: newMainRegion.last + 1,
            last: lastIntersect.last,
            isSpacer: true
          });
        } else {
          newMainRegion.last = lastIntersect.last;
        }
      }
      var replacementRegions = [...newLeadRegion, newMainRegion, ...newTailRegion];
      var numRegionsToDelete = lastIntersectIdx - firstIntersectIdx + 1;
      this._regions.splice(firstIntersectIdx, numRegionsToDelete, ...replacementRegions);
    }
    numCells() {
      return this._numCells;
    }
    equals(other) {
      return this._numCells === other._numCells && this._regions.length === other._regions.length && this._regions.every((region, i) => region.first === other._regions[i].first && region.last === other._regions[i].last && region.isSpacer === other._regions[i].isSpacer);
    }
    _findRegion(cellIdx) {
      var firstIdx = 0;
      var lastIdx = this._regions.length - 1;
      while (firstIdx <= lastIdx) {
        var middleIdx = Math.floor((firstIdx + lastIdx) / 2);
        var middleRegion = this._regions[middleIdx];
        if (cellIdx >= middleRegion.first && cellIdx <= middleRegion.last) {
          return [middleRegion, middleIdx];
        } else if (cellIdx < middleRegion.first) {
          lastIdx = middleIdx - 1;
        } else if (cellIdx > middleRegion.last) {
          firstIdx = middleIdx + 1;
        }
      }
      (0, _invariant.default)(false, "A region was not found containing cellIdx " + cellIdx);
    }
  };
  CellRenderMask.CellRenderMask = CellRenderMask$1;
  return CellRenderMask;
}
var ChildListCollection = {};
var hasRequiredChildListCollection;
function requireChildListCollection() {
  if (hasRequiredChildListCollection) return ChildListCollection;
  hasRequiredChildListCollection = 1;
  Object.defineProperty(ChildListCollection, "__esModule", {
    value: true
  });
  ChildListCollection.default = void 0;
  var _createForOfIteratorHelperLoose2 = _interopRequireDefault(requireCreateForOfIteratorHelperLoose());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let ChildListCollection$1 = class ChildListCollection {
    constructor() {
      this._cellKeyToChildren = /* @__PURE__ */ new Map();
      this._childrenToCellKey = /* @__PURE__ */ new Map();
    }
    add(list, cellKey) {
      var _this$_cellKeyToChild;
      (0, _invariant.default)(!this._childrenToCellKey.has(list), "Trying to add already present child list");
      var cellLists = (_this$_cellKeyToChild = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild !== void 0 ? _this$_cellKeyToChild : /* @__PURE__ */ new Set();
      cellLists.add(list);
      this._cellKeyToChildren.set(cellKey, cellLists);
      this._childrenToCellKey.set(list, cellKey);
    }
    remove(list) {
      var cellKey = this._childrenToCellKey.get(list);
      (0, _invariant.default)(cellKey != null, "Trying to remove non-present child list");
      this._childrenToCellKey.delete(list);
      var cellLists = this._cellKeyToChildren.get(cellKey);
      (0, _invariant.default)(cellLists, "_cellKeyToChildren should contain cellKey");
      cellLists.delete(list);
      if (cellLists.size === 0) {
        this._cellKeyToChildren.delete(cellKey);
      }
    }
    forEach(fn) {
      for (var _iterator = (0, _createForOfIteratorHelperLoose2.default)(this._cellKeyToChildren.values()), _step; !(_step = _iterator()).done; ) {
        var listSet = _step.value;
        for (var _iterator2 = (0, _createForOfIteratorHelperLoose2.default)(listSet), _step2; !(_step2 = _iterator2()).done; ) {
          var list = _step2.value;
          fn(list);
        }
      }
    }
    forEachInCell(cellKey, fn) {
      var _this$_cellKeyToChild2;
      var listSet = (_this$_cellKeyToChild2 = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild2 !== void 0 ? _this$_cellKeyToChild2 : [];
      for (var _iterator3 = (0, _createForOfIteratorHelperLoose2.default)(listSet), _step3; !(_step3 = _iterator3()).done; ) {
        var list = _step3.value;
        fn(list);
      }
    }
    anyInCell(cellKey, fn) {
      var _this$_cellKeyToChild3;
      var listSet = (_this$_cellKeyToChild3 = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild3 !== void 0 ? _this$_cellKeyToChild3 : [];
      for (var _iterator4 = (0, _createForOfIteratorHelperLoose2.default)(listSet), _step4; !(_step4 = _iterator4()).done; ) {
        var list = _step4.value;
        if (fn(list)) {
          return true;
        }
      }
      return false;
    }
    size() {
      return this._childrenToCellKey.size;
    }
  };
  ChildListCollection.default = ChildListCollection$1;
  return ChildListCollection;
}
var FillRateHelper = {};
var hasRequiredFillRateHelper;
function requireFillRateHelper() {
  if (hasRequiredFillRateHelper) return FillRateHelper;
  hasRequiredFillRateHelper = 1;
  Object.defineProperty(FillRateHelper, "__esModule", {
    value: true
  });
  FillRateHelper.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  class Info {
    constructor() {
      this.any_blank_count = 0;
      this.any_blank_ms = 0;
      this.any_blank_speed_sum = 0;
      this.mostly_blank_count = 0;
      this.mostly_blank_ms = 0;
      this.pixels_blank = 0;
      this.pixels_sampled = 0;
      this.pixels_scrolled = 0;
      this.total_time_spent = 0;
      this.sample_count = 0;
    }
  }
  var _listeners = [];
  var _minSampleCount = 10;
  var _sampleRate = null;
  let FillRateHelper$1 = class FillRateHelper {
    static addListener(callback) {
      if (_sampleRate === null) {
        console.warn("Call `FillRateHelper.setSampleRate` before `addListener`.");
      }
      _listeners.push(callback);
      return {
        remove: () => {
          _listeners = _listeners.filter((listener) => callback !== listener);
        }
      };
    }
    static setSampleRate(sampleRate) {
      _sampleRate = sampleRate;
    }
    static setMinSampleCount(minSampleCount) {
      _minSampleCount = minSampleCount;
    }
    constructor(getFrameMetrics) {
      this._anyBlankStartTime = null;
      this._enabled = false;
      this._info = new Info();
      this._mostlyBlankStartTime = null;
      this._samplesStartTime = null;
      this._getFrameMetrics = getFrameMetrics;
      this._enabled = (_sampleRate || 0) > Math.random();
      this._resetData();
    }
    activate() {
      if (this._enabled && this._samplesStartTime == null) {
        this._samplesStartTime = commonjsGlobal.performance.now();
      }
    }
    deactivateAndFlush() {
      if (!this._enabled) {
        return;
      }
      var start = this._samplesStartTime;
      if (start == null) {
        return;
      }
      if (this._info.sample_count < _minSampleCount) {
        this._resetData();
        return;
      }
      var total_time_spent = commonjsGlobal.performance.now() - start;
      var info = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this._info), {}, {
        total_time_spent
      });
      _listeners.forEach((listener) => listener(info));
      this._resetData();
    }
    computeBlankness(props, cellsAroundViewport, scrollMetrics) {
      if (!this._enabled || props.getItemCount(props.data) === 0 || cellsAroundViewport.last < cellsAroundViewport.first || this._samplesStartTime == null) {
        return 0;
      }
      var dOffset = scrollMetrics.dOffset, offset = scrollMetrics.offset, velocity = scrollMetrics.velocity, visibleLength = scrollMetrics.visibleLength;
      this._info.sample_count++;
      this._info.pixels_sampled += Math.round(visibleLength);
      this._info.pixels_scrolled += Math.round(Math.abs(dOffset));
      var scrollSpeed = Math.round(Math.abs(velocity) * 1e3);
      var now = commonjsGlobal.performance.now();
      if (this._anyBlankStartTime != null) {
        this._info.any_blank_ms += now - this._anyBlankStartTime;
      }
      this._anyBlankStartTime = null;
      if (this._mostlyBlankStartTime != null) {
        this._info.mostly_blank_ms += now - this._mostlyBlankStartTime;
      }
      this._mostlyBlankStartTime = null;
      var blankTop = 0;
      var first = cellsAroundViewport.first;
      var firstFrame = this._getFrameMetrics(first, props);
      while (first <= cellsAroundViewport.last && (!firstFrame || !firstFrame.inLayout)) {
        firstFrame = this._getFrameMetrics(first, props);
        first++;
      }
      if (firstFrame && first > 0) {
        blankTop = Math.min(visibleLength, Math.max(0, firstFrame.offset - offset));
      }
      var blankBottom = 0;
      var last = cellsAroundViewport.last;
      var lastFrame = this._getFrameMetrics(last, props);
      while (last >= cellsAroundViewport.first && (!lastFrame || !lastFrame.inLayout)) {
        lastFrame = this._getFrameMetrics(last, props);
        last--;
      }
      if (lastFrame && last < props.getItemCount(props.data) - 1) {
        var bottomEdge = lastFrame.offset + lastFrame.length;
        blankBottom = Math.min(visibleLength, Math.max(0, offset + visibleLength - bottomEdge));
      }
      var pixels_blank = Math.round(blankTop + blankBottom);
      var blankness = pixels_blank / visibleLength;
      if (blankness > 0) {
        this._anyBlankStartTime = now;
        this._info.any_blank_speed_sum += scrollSpeed;
        this._info.any_blank_count++;
        this._info.pixels_blank += pixels_blank;
        if (blankness > 0.5) {
          this._mostlyBlankStartTime = now;
          this._info.mostly_blank_count++;
        }
      } else if (scrollSpeed < 0.01 || Math.abs(dOffset) < 1) {
        this.deactivateAndFlush();
      }
      return blankness;
    }
    enabled() {
      return this._enabled;
    }
    _resetData() {
      this._anyBlankStartTime = null;
      this._info = new Info();
      this._mostlyBlankStartTime = null;
      this._samplesStartTime = null;
    }
  };
  FillRateHelper.default = FillRateHelper$1;
  return FillRateHelper;
}
var StateSafePureComponent = {};
var hasRequiredStateSafePureComponent;
function requireStateSafePureComponent() {
  if (hasRequiredStateSafePureComponent) return StateSafePureComponent;
  hasRequiredStateSafePureComponent = 1;
  Object.defineProperty(StateSafePureComponent, "__esModule", {
    value: true
  });
  StateSafePureComponent.default = void 0;
  var _invariant = _interopRequireDefault(requireInvariant());
  var React = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let StateSafePureComponent$1 = class StateSafePureComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this._inAsyncStateUpdate = false;
      this._installSetStateHooks();
    }
    setState(partialState, callback) {
      if (typeof partialState === "function") {
        super.setState((state, props) => {
          this._inAsyncStateUpdate = true;
          var ret;
          try {
            ret = partialState(state, props);
          } catch (err) {
            throw err;
          } finally {
            this._inAsyncStateUpdate = false;
          }
          return ret;
        }, callback);
      } else {
        super.setState(partialState, callback);
      }
    }
    _installSetStateHooks() {
      var that = this;
      var props = this.props, state = this.state;
      Object.defineProperty(this, "props", {
        get() {
          (0, _invariant.default)(!that._inAsyncStateUpdate, '"this.props" should not be accessed during state updates');
          return props;
        },
        set(newProps) {
          props = newProps;
        }
      });
      Object.defineProperty(this, "state", {
        get() {
          (0, _invariant.default)(!that._inAsyncStateUpdate, '"this.state" should not be acceessed during state updates');
          return state;
        },
        set(newState) {
          state = newState;
        }
      });
    }
  };
  StateSafePureComponent.default = StateSafePureComponent$1;
  return StateSafePureComponent;
}
var ViewabilityHelper = {};
var hasRequiredViewabilityHelper;
function requireViewabilityHelper() {
  if (hasRequiredViewabilityHelper) return ViewabilityHelper;
  hasRequiredViewabilityHelper = 1;
  Object.defineProperty(ViewabilityHelper, "__esModule", {
    value: true
  });
  ViewabilityHelper.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _createForOfIteratorHelperLoose2 = _interopRequireDefault(requireCreateForOfIteratorHelperLoose());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let ViewabilityHelper$1 = class ViewabilityHelper {
    constructor(config) {
      if (config === void 0) {
        config = {
          viewAreaCoveragePercentThreshold: 0
        };
      }
      this._hasInteracted = false;
      this._timers = /* @__PURE__ */ new Set();
      this._viewableIndices = [];
      this._viewableItems = /* @__PURE__ */ new Map();
      this._config = config;
    }
    /**
     * Cleanup, e.g. on unmount. Clears any pending timers.
     */
    dispose() {
      this._timers.forEach(clearTimeout);
    }
    /**
     * Determines which items are viewable based on the current metrics and config.
     */
    computeViewableItems(props, scrollOffset, viewportHeight, getFrameMetrics, renderRange) {
      var itemCount = props.getItemCount(props.data);
      var _this$_config = this._config, itemVisiblePercentThreshold = _this$_config.itemVisiblePercentThreshold, viewAreaCoveragePercentThreshold = _this$_config.viewAreaCoveragePercentThreshold;
      var viewAreaMode = viewAreaCoveragePercentThreshold != null;
      var viewablePercentThreshold = viewAreaMode ? viewAreaCoveragePercentThreshold : itemVisiblePercentThreshold;
      (0, _invariant.default)(viewablePercentThreshold != null && itemVisiblePercentThreshold != null !== (viewAreaCoveragePercentThreshold != null), "Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");
      var viewableIndices = [];
      if (itemCount === 0) {
        return viewableIndices;
      }
      var firstVisible = -1;
      var _ref = renderRange || {
        first: 0,
        last: itemCount - 1
      }, first = _ref.first, last = _ref.last;
      if (last >= itemCount) {
        console.warn("Invalid render range computing viewability " + JSON.stringify({
          renderRange,
          itemCount
        }));
        return [];
      }
      for (var idx = first; idx <= last; idx++) {
        var metrics = getFrameMetrics(idx, props);
        if (!metrics) {
          continue;
        }
        var top = metrics.offset - scrollOffset;
        var bottom = top + metrics.length;
        if (top < viewportHeight && bottom > 0) {
          firstVisible = idx;
          if (_isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, metrics.length)) {
            viewableIndices.push(idx);
          }
        } else if (firstVisible >= 0) {
          break;
        }
      }
      return viewableIndices;
    }
    /**
     * Figures out which items are viewable and how that has changed from before and calls
     * `onViewableItemsChanged` as appropriate.
     */
    onUpdate(props, scrollOffset, viewportHeight, getFrameMetrics, createViewToken, onViewableItemsChanged, renderRange) {
      var itemCount = props.getItemCount(props.data);
      if (this._config.waitForInteraction && !this._hasInteracted || itemCount === 0 || !getFrameMetrics(0, props)) {
        return;
      }
      var viewableIndices = [];
      if (itemCount) {
        viewableIndices = this.computeViewableItems(props, scrollOffset, viewportHeight, getFrameMetrics, renderRange);
      }
      if (this._viewableIndices.length === viewableIndices.length && this._viewableIndices.every((v, ii) => v === viewableIndices[ii])) {
        return;
      }
      this._viewableIndices = viewableIndices;
      if (this._config.minimumViewTime) {
        var handle = setTimeout(() => {
          this._timers.delete(handle);
          this._onUpdateSync(props, viewableIndices, onViewableItemsChanged, createViewToken);
        }, this._config.minimumViewTime);
        this._timers.add(handle);
      } else {
        this._onUpdateSync(props, viewableIndices, onViewableItemsChanged, createViewToken);
      }
    }
    /**
     * clean-up cached _viewableIndices to evaluate changed items on next update
     */
    resetViewableIndices() {
      this._viewableIndices = [];
    }
    /**
     * Records that an interaction has happened even if there has been no scroll.
     */
    recordInteraction() {
      this._hasInteracted = true;
    }
    _onUpdateSync(props, viewableIndicesToCheck, onViewableItemsChanged, createViewToken) {
      viewableIndicesToCheck = viewableIndicesToCheck.filter((ii) => this._viewableIndices.includes(ii));
      var prevItems = this._viewableItems;
      var nextItems = new Map(viewableIndicesToCheck.map((ii) => {
        var viewable2 = createViewToken(ii, true, props);
        return [viewable2.key, viewable2];
      }));
      var changed = [];
      for (var _iterator = (0, _createForOfIteratorHelperLoose2.default)(nextItems), _step; !(_step = _iterator()).done; ) {
        var _step$value = _step.value, key = _step$value[0], viewable = _step$value[1];
        if (!prevItems.has(key)) {
          changed.push(viewable);
        }
      }
      for (var _iterator2 = (0, _createForOfIteratorHelperLoose2.default)(prevItems), _step2; !(_step2 = _iterator2()).done; ) {
        var _step2$value = _step2.value, _key = _step2$value[0], _viewable = _step2$value[1];
        if (!nextItems.has(_key)) {
          changed.push((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _viewable), {}, {
            isViewable: false
          }));
        }
      }
      if (changed.length > 0) {
        this._viewableItems = nextItems;
        onViewableItemsChanged({
          viewableItems: Array.from(nextItems.values()),
          changed,
          viewabilityConfig: this._config
        });
      }
    }
  };
  function _isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, itemLength) {
    if (_isEntirelyVisible(top, bottom, viewportHeight)) {
      return true;
    } else {
      var pixels = _getPixelsVisible(top, bottom, viewportHeight);
      var percent = 100 * (viewAreaMode ? pixels / viewportHeight : pixels / itemLength);
      return percent >= viewablePercentThreshold;
    }
  }
  function _getPixelsVisible(top, bottom, viewportHeight) {
    var visibleHeight = Math.min(bottom, viewportHeight) - Math.max(top, 0);
    return Math.max(0, visibleHeight);
  }
  function _isEntirelyVisible(top, bottom, viewportHeight) {
    return top >= 0 && bottom <= viewportHeight && bottom > top;
  }
  ViewabilityHelper.default = ViewabilityHelper$1;
  return ViewabilityHelper;
}
var VirtualizedListCellRenderer = {};
var VirtualizedListContext = {};
var hasRequiredVirtualizedListContext;
function requireVirtualizedListContext() {
  if (hasRequiredVirtualizedListContext) return VirtualizedListContext;
  hasRequiredVirtualizedListContext = 1;
  Object.defineProperty(VirtualizedListContext, "__esModule", {
    value: true
  });
  VirtualizedListContext.VirtualizedListCellContextProvider = VirtualizedListCellContextProvider;
  VirtualizedListContext.VirtualizedListContext = void 0;
  VirtualizedListContext.VirtualizedListContextProvider = VirtualizedListContextProvider;
  VirtualizedListContext.VirtualizedListContextResetter = VirtualizedListContextResetter;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _react = _interopRequireWildcard(requireReact());
  var React = _react;
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var VirtualizedListContext$1 = VirtualizedListContext.VirtualizedListContext = /* @__PURE__ */ React.createContext(null);
  function VirtualizedListContextResetter(_ref) {
    var children = _ref.children;
    return /* @__PURE__ */ React.createElement(VirtualizedListContext$1.Provider, {
      value: null
    }, children);
  }
  function VirtualizedListContextProvider(_ref2) {
    var children = _ref2.children, value = _ref2.value;
    var context = (0, _react.useMemo)(() => ({
      cellKey: null,
      getScrollMetrics: value.getScrollMetrics,
      horizontal: value.horizontal,
      getOutermostParentListRef: value.getOutermostParentListRef,
      registerAsNestedChild: value.registerAsNestedChild,
      unregisterAsNestedChild: value.unregisterAsNestedChild
    }), [value.getScrollMetrics, value.horizontal, value.getOutermostParentListRef, value.registerAsNestedChild, value.unregisterAsNestedChild]);
    return /* @__PURE__ */ React.createElement(VirtualizedListContext$1.Provider, {
      value: context
    }, children);
  }
  function VirtualizedListCellContextProvider(_ref3) {
    var cellKey = _ref3.cellKey, children = _ref3.children;
    var currContext = (0, _react.useContext)(VirtualizedListContext$1);
    var context = (0, _react.useMemo)(() => currContext == null ? null : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, currContext), {}, {
      cellKey
    }), [currContext, cellKey]);
    return /* @__PURE__ */ React.createElement(VirtualizedListContext$1.Provider, {
      value: context
    }, children);
  }
  return VirtualizedListContext;
}
var hasRequiredVirtualizedListCellRenderer;
function requireVirtualizedListCellRenderer() {
  if (hasRequiredVirtualizedListCellRenderer) return VirtualizedListCellRenderer;
  hasRequiredVirtualizedListCellRenderer = 1;
  Object.defineProperty(VirtualizedListCellRenderer, "__esModule", {
    value: true
  });
  VirtualizedListCellRenderer.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _VirtualizedListContext = /* @__PURE__ */ requireVirtualizedListContext();
  var _invariant = _interopRequireDefault(requireInvariant());
  var React = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  class CellRenderer extends React.Component {
    constructor() {
      super(...arguments);
      this.state = {
        separatorProps: {
          highlighted: false,
          leadingItem: this.props.item
        }
      };
      this._separators = {
        highlight: () => {
          var _this$props = this.props, cellKey = _this$props.cellKey, prevCellKey = _this$props.prevCellKey;
          this.props.onUpdateSeparators([cellKey, prevCellKey], {
            highlighted: true
          });
        },
        unhighlight: () => {
          var _this$props2 = this.props, cellKey = _this$props2.cellKey, prevCellKey = _this$props2.prevCellKey;
          this.props.onUpdateSeparators([cellKey, prevCellKey], {
            highlighted: false
          });
        },
        updateProps: (select, newProps) => {
          var _this$props3 = this.props, cellKey = _this$props3.cellKey, prevCellKey = _this$props3.prevCellKey;
          this.props.onUpdateSeparators([select === "leading" ? prevCellKey : cellKey], newProps);
        }
      };
      this._onLayout = (nativeEvent) => {
        this.props.onCellLayout && this.props.onCellLayout(nativeEvent, this.props.cellKey, this.props.index);
      };
    }
    static getDerivedStateFromProps(props, prevState) {
      return {
        separatorProps: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, prevState.separatorProps), {}, {
          leadingItem: props.item
        })
      };
    }
    // TODO: consider factoring separator stuff out of VirtualizedList into FlatList since it's not
    // reused by SectionList and we can keep VirtualizedList simpler.
    // $FlowFixMe[missing-local-annot]
    updateSeparatorProps(newProps) {
      this.setState((state) => ({
        separatorProps: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state.separatorProps), newProps)
      }));
    }
    componentWillUnmount() {
      this.props.onUnmount(this.props.cellKey);
    }
    _renderElement(renderItem, ListItemComponent, item, index) {
      if (renderItem && ListItemComponent) {
        console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.");
      }
      if (ListItemComponent) {
        return /* @__PURE__ */ React.createElement(ListItemComponent, {
          item,
          index,
          separators: this._separators
        });
      }
      if (renderItem) {
        return renderItem({
          item,
          index,
          separators: this._separators
        });
      }
      (0, _invariant.default)(false, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
    }
    render() {
      var _this$props4 = this.props, CellRendererComponent = _this$props4.CellRendererComponent, ItemSeparatorComponent = _this$props4.ItemSeparatorComponent, ListItemComponent = _this$props4.ListItemComponent, cellKey = _this$props4.cellKey, horizontal = _this$props4.horizontal, item = _this$props4.item, index = _this$props4.index, inversionStyle = _this$props4.inversionStyle, onCellFocusCapture = _this$props4.onCellFocusCapture, onCellLayout = _this$props4.onCellLayout, renderItem = _this$props4.renderItem;
      var element = this._renderElement(renderItem, ListItemComponent, item, index);
      var itemSeparator = /* @__PURE__ */ React.isValidElement(ItemSeparatorComponent) ? (
        // $FlowFixMe[incompatible-type]
        ItemSeparatorComponent
      ) : (
        // $FlowFixMe[incompatible-type]
        ItemSeparatorComponent && /* @__PURE__ */ React.createElement(ItemSeparatorComponent, this.state.separatorProps)
      );
      var cellStyle = inversionStyle ? horizontal ? [styles2.rowReverse, inversionStyle] : [styles2.columnReverse, inversionStyle] : horizontal ? [styles2.row, inversionStyle] : inversionStyle;
      var result = !CellRendererComponent ? /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({
        style: cellStyle,
        onFocusCapture: onCellFocusCapture
      }, onCellLayout && {
        onLayout: this._onLayout
      }), element, itemSeparator) : /* @__PURE__ */ React.createElement(CellRendererComponent, (0, _extends2.default)({
        cellKey,
        index,
        item,
        style: cellStyle,
        onFocusCapture: onCellFocusCapture
      }, onCellLayout && {
        onLayout: this._onLayout
      }), element, itemSeparator);
      return /* @__PURE__ */ React.createElement(_VirtualizedListContext.VirtualizedListCellContextProvider, {
        cellKey: this.props.cellKey
      }, result);
    }
  }
  VirtualizedListCellRenderer.default = CellRenderer;
  var styles2 = _StyleSheet.default.create({
    row: {
      flexDirection: "row"
    },
    rowReverse: {
      flexDirection: "row-reverse"
    },
    columnReverse: {
      flexDirection: "column-reverse"
    }
  });
  return VirtualizedListCellRenderer;
}
var VirtualizeUtils = {};
var hasRequiredVirtualizeUtils;
function requireVirtualizeUtils() {
  if (hasRequiredVirtualizeUtils) return VirtualizeUtils;
  hasRequiredVirtualizeUtils = 1;
  Object.defineProperty(VirtualizeUtils, "__esModule", {
    value: true
  });
  VirtualizeUtils.computeWindowedRenderLimits = computeWindowedRenderLimits;
  VirtualizeUtils.elementsThatOverlapOffsets = elementsThatOverlapOffsets;
  VirtualizeUtils.keyExtractor = keyExtractor;
  VirtualizeUtils.newRangeCount = newRangeCount;
  function elementsThatOverlapOffsets(offsets, props, getFrameMetrics, zoomScale) {
    if (zoomScale === void 0) {
      zoomScale = 1;
    }
    var itemCount = props.getItemCount(props.data);
    var result = [];
    for (var offsetIndex = 0; offsetIndex < offsets.length; offsetIndex++) {
      var currentOffset = offsets[offsetIndex];
      var left = 0;
      var right = itemCount - 1;
      while (left <= right) {
        var mid = left + (right - left >>> 1);
        var frame = getFrameMetrics(mid, props);
        var scaledOffsetStart = frame.offset * zoomScale;
        var scaledOffsetEnd = (frame.offset + frame.length) * zoomScale;
        if (mid === 0 && currentOffset < scaledOffsetStart || mid !== 0 && currentOffset <= scaledOffsetStart) {
          right = mid - 1;
        } else if (currentOffset > scaledOffsetEnd) {
          left = mid + 1;
        } else {
          result[offsetIndex] = mid;
          break;
        }
      }
    }
    return result;
  }
  function newRangeCount(prev, next) {
    return next.last - next.first + 1 - Math.max(0, 1 + Math.min(next.last, prev.last) - Math.max(next.first, prev.first));
  }
  function computeWindowedRenderLimits(props, maxToRenderPerBatch, windowSize, prev, getFrameMetricsApprox, scrollMetrics) {
    var itemCount = props.getItemCount(props.data);
    if (itemCount === 0) {
      return {
        first: 0,
        last: -1
      };
    }
    var offset = scrollMetrics.offset, velocity = scrollMetrics.velocity, visibleLength = scrollMetrics.visibleLength, _scrollMetrics$zoomSc = scrollMetrics.zoomScale, zoomScale = _scrollMetrics$zoomSc === void 0 ? 1 : _scrollMetrics$zoomSc;
    var visibleBegin = Math.max(0, offset);
    var visibleEnd = visibleBegin + visibleLength;
    var overscanLength = (windowSize - 1) * visibleLength;
    var leadFactor = 0.5;
    var fillPreference = velocity > 1 ? "after" : velocity < -1 ? "before" : "none";
    var overscanBegin = Math.max(0, visibleBegin - (1 - leadFactor) * overscanLength);
    var overscanEnd = Math.max(0, visibleEnd + leadFactor * overscanLength);
    var lastItemOffset = getFrameMetricsApprox(itemCount - 1, props).offset * zoomScale;
    if (lastItemOffset < overscanBegin) {
      return {
        first: Math.max(0, itemCount - 1 - maxToRenderPerBatch),
        last: itemCount - 1
      };
    }
    var _elementsThatOverlapO = elementsThatOverlapOffsets([overscanBegin, visibleBegin, visibleEnd, overscanEnd], props, getFrameMetricsApprox, zoomScale), overscanFirst = _elementsThatOverlapO[0], first = _elementsThatOverlapO[1], last = _elementsThatOverlapO[2], overscanLast = _elementsThatOverlapO[3];
    overscanFirst = overscanFirst == null ? 0 : overscanFirst;
    first = first == null ? Math.max(0, overscanFirst) : first;
    overscanLast = overscanLast == null ? itemCount - 1 : overscanLast;
    last = last == null ? Math.min(overscanLast, first + maxToRenderPerBatch - 1) : last;
    var visible = {
      first,
      last
    };
    var newCellCount = newRangeCount(prev, visible);
    while (true) {
      if (first <= overscanFirst && last >= overscanLast) {
        break;
      }
      var maxNewCells = newCellCount >= maxToRenderPerBatch;
      var firstWillAddMore = first <= prev.first || first > prev.last;
      var firstShouldIncrement = first > overscanFirst && (!maxNewCells || !firstWillAddMore);
      var lastWillAddMore = last >= prev.last || last < prev.first;
      var lastShouldIncrement = last < overscanLast && (!maxNewCells || !lastWillAddMore);
      if (maxNewCells && !firstShouldIncrement && !lastShouldIncrement) {
        break;
      }
      if (firstShouldIncrement && !(fillPreference === "after" && lastShouldIncrement && lastWillAddMore)) {
        if (firstWillAddMore) {
          newCellCount++;
        }
        first--;
      }
      if (lastShouldIncrement && !(fillPreference === "before" && firstShouldIncrement && firstWillAddMore)) {
        if (lastWillAddMore) {
          newCellCount++;
        }
        last++;
      }
    }
    if (!(last >= first && first >= 0 && last < itemCount && first >= overscanFirst && last <= overscanLast && first <= visible.first && last >= visible.last)) {
      throw new Error("Bad window calculation " + JSON.stringify({
        first,
        last,
        itemCount,
        overscanFirst,
        overscanLast,
        visible
      }));
    }
    return {
      first,
      last
    };
  }
  function keyExtractor(item, index) {
    if (typeof item === "object" && (item == null ? void 0 : item.key) != null) {
      return item.key;
    }
    if (typeof item === "object" && (item == null ? void 0 : item.id) != null) {
      return item.id;
    }
    return String(index);
  }
  return VirtualizeUtils;
}
var nullthrows = { exports: {} };
var hasRequiredNullthrows;
function requireNullthrows() {
  if (hasRequiredNullthrows) return nullthrows.exports;
  hasRequiredNullthrows = 1;
  function nullthrows$1(x, message) {
    if (x != null) {
      return x;
    }
    var error = new Error(message !== void 0 ? message : "Got unexpected " + x);
    error.framesToPop = 1;
    throw error;
  }
  nullthrows.exports = nullthrows$1;
  nullthrows.exports.default = nullthrows$1;
  Object.defineProperty(nullthrows.exports, "__esModule", { value: true });
  return nullthrows.exports;
}
var hasRequiredVirtualizedList$1;
function requireVirtualizedList$1() {
  if (hasRequiredVirtualizedList$1) return VirtualizedList$1;
  hasRequiredVirtualizedList$1 = 1;
  Object.defineProperty(VirtualizedList$1, "__esModule", {
    value: true
  });
  VirtualizedList$1.default = void 0;
  var _createForOfIteratorHelperLoose2 = _interopRequireDefault(requireCreateForOfIteratorHelperLoose());
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _RefreshControl = _interopRequireDefault(/* @__PURE__ */ requireRefreshControl());
  var _ScrollView = _interopRequireDefault(/* @__PURE__ */ requireScrollView());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  _interopRequireDefault(/* @__PURE__ */ requireFindNodeHandle());
  var _Batchinator = _interopRequireDefault(/* @__PURE__ */ requireBatchinator());
  var _clamp = _interopRequireDefault(/* @__PURE__ */ requireClamp());
  var _infoLog = _interopRequireDefault(/* @__PURE__ */ requireInfoLog());
  var _CellRenderMask = /* @__PURE__ */ requireCellRenderMask();
  var _ChildListCollection = _interopRequireDefault(/* @__PURE__ */ requireChildListCollection());
  var _FillRateHelper = _interopRequireDefault(/* @__PURE__ */ requireFillRateHelper());
  var _StateSafePureComponent = _interopRequireDefault(/* @__PURE__ */ requireStateSafePureComponent());
  var _ViewabilityHelper = _interopRequireDefault(/* @__PURE__ */ requireViewabilityHelper());
  var _VirtualizedListCellRenderer = _interopRequireDefault(/* @__PURE__ */ requireVirtualizedListCellRenderer());
  var _VirtualizedListContext = /* @__PURE__ */ requireVirtualizedListContext();
  var _VirtualizeUtils = /* @__PURE__ */ requireVirtualizeUtils();
  var _invariant = _interopRequireDefault(requireInvariant());
  var _nullthrows = _interopRequireDefault(requireNullthrows());
  var React = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var ON_EDGE_REACHED_EPSILON = 1e-3;
  var _usedIndexForKey = false;
  var _keylessItemComponentName = "";
  function horizontalOrDefault(horizontal) {
    return horizontal !== null && horizontal !== void 0 ? horizontal : false;
  }
  function initialNumToRenderOrDefault(initialNumToRender) {
    return initialNumToRender !== null && initialNumToRender !== void 0 ? initialNumToRender : 10;
  }
  function maxToRenderPerBatchOrDefault(maxToRenderPerBatch) {
    return maxToRenderPerBatch !== null && maxToRenderPerBatch !== void 0 ? maxToRenderPerBatch : 10;
  }
  function onStartReachedThresholdOrDefault(onStartReachedThreshold) {
    return onStartReachedThreshold !== null && onStartReachedThreshold !== void 0 ? onStartReachedThreshold : 2;
  }
  function onEndReachedThresholdOrDefault(onEndReachedThreshold) {
    return onEndReachedThreshold !== null && onEndReachedThreshold !== void 0 ? onEndReachedThreshold : 2;
  }
  function getScrollingThreshold(threshold, visibleLength) {
    return threshold * visibleLength / 2;
  }
  function scrollEventThrottleOrDefault(scrollEventThrottle) {
    return scrollEventThrottle !== null && scrollEventThrottle !== void 0 ? scrollEventThrottle : 50;
  }
  function windowSizeOrDefault(windowSize) {
    return windowSize !== null && windowSize !== void 0 ? windowSize : 21;
  }
  function findLastWhere(arr, predicate) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (predicate(arr[i])) {
        return arr[i];
      }
    }
    return null;
  }
  class VirtualizedList2 extends _StateSafePureComponent.default {
    // scrollToEnd may be janky without getItemLayout prop
    scrollToEnd(params) {
      var animated = params ? params.animated : true;
      var veryLast = this.props.getItemCount(this.props.data) - 1;
      if (veryLast < 0) {
        return;
      }
      var frame = this.__getFrameMetricsApprox(veryLast, this.props);
      var offset = Math.max(0, frame.offset + frame.length + this._footerLength - this._scrollMetrics.visibleLength);
      if (this._scrollRef == null) {
        return;
      }
      if (this._scrollRef.scrollTo == null) {
        console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
        return;
      }
      this._scrollRef.scrollTo(horizontalOrDefault(this.props.horizontal) ? {
        x: offset,
        animated
      } : {
        y: offset,
        animated
      });
    }
    // scrollToIndex may be janky without getItemLayout prop
    scrollToIndex(params) {
      var _this$props = this.props, data = _this$props.data, horizontal = _this$props.horizontal, getItemCount = _this$props.getItemCount, getItemLayout = _this$props.getItemLayout, onScrollToIndexFailed = _this$props.onScrollToIndexFailed;
      var animated = params.animated, index = params.index, viewOffset = params.viewOffset, viewPosition = params.viewPosition;
      (0, _invariant.default)(index >= 0, "scrollToIndex out of range: requested index " + index + " but minimum is 0");
      (0, _invariant.default)(getItemCount(data) >= 1, "scrollToIndex out of range: item length " + getItemCount(data) + " but minimum is 1");
      (0, _invariant.default)(index < getItemCount(data), "scrollToIndex out of range: requested index " + index + " is out of 0 to " + (getItemCount(data) - 1));
      if (!getItemLayout && index > this._highestMeasuredFrameIndex) {
        (0, _invariant.default)(!!onScrollToIndexFailed, "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.");
        onScrollToIndexFailed({
          averageItemLength: this._averageCellLength,
          highestMeasuredFrameIndex: this._highestMeasuredFrameIndex,
          index
        });
        return;
      }
      var frame = this.__getFrameMetricsApprox(Math.floor(index), this.props);
      var offset = Math.max(0, this._getOffsetApprox(index, this.props) - (viewPosition || 0) * (this._scrollMetrics.visibleLength - frame.length)) - (viewOffset || 0);
      if (this._scrollRef == null) {
        return;
      }
      if (this._scrollRef.scrollTo == null) {
        console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
        return;
      }
      this._scrollRef.scrollTo(horizontal ? {
        x: offset,
        animated
      } : {
        y: offset,
        animated
      });
    }
    // scrollToItem may be janky without getItemLayout prop. Required linear scan through items -
    // use scrollToIndex instead if possible.
    scrollToItem(params) {
      var item = params.item;
      var _this$props2 = this.props, data = _this$props2.data, getItem = _this$props2.getItem, getItemCount = _this$props2.getItemCount;
      var itemCount = getItemCount(data);
      for (var _index = 0; _index < itemCount; _index++) {
        if (getItem(data, _index) === item) {
          this.scrollToIndex((0, _objectSpread2.default)((0, _objectSpread2.default)({}, params), {}, {
            index: _index
          }));
          break;
        }
      }
    }
    /**
     * Scroll to a specific content pixel offset in the list.
     *
     * Param `offset` expects the offset to scroll to.
     * In case of `horizontal` is true, the offset is the x-value,
     * in any other case the offset is the y-value.
     *
     * Param `animated` (`true` by default) defines whether the list
     * should do an animation while scrolling.
     */
    scrollToOffset(params) {
      var animated = params.animated, offset = params.offset;
      if (this._scrollRef == null) {
        return;
      }
      if (this._scrollRef.scrollTo == null) {
        console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
        return;
      }
      this._scrollRef.scrollTo(horizontalOrDefault(this.props.horizontal) ? {
        x: offset,
        animated
      } : {
        y: offset,
        animated
      });
    }
    recordInteraction() {
      this._nestedChildLists.forEach((childList) => {
        childList.recordInteraction();
      });
      this._viewabilityTuples.forEach((t) => {
        t.viewabilityHelper.recordInteraction();
      });
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
    }
    flashScrollIndicators() {
      if (this._scrollRef == null) {
        return;
      }
      this._scrollRef.flashScrollIndicators();
    }
    /**
     * Provides a handle to the underlying scroll responder.
     * Note that `this._scrollRef` might not be a `ScrollView`, so we
     * need to check that it responds to `getScrollResponder` before calling it.
     */
    getScrollResponder() {
      if (this._scrollRef && this._scrollRef.getScrollResponder) {
        return this._scrollRef.getScrollResponder();
      }
    }
    getScrollableNode() {
      if (this._scrollRef && this._scrollRef.getScrollableNode) {
        return this._scrollRef.getScrollableNode();
      } else {
        return this._scrollRef;
      }
    }
    getScrollRef() {
      if (this._scrollRef && this._scrollRef.getScrollRef) {
        return this._scrollRef.getScrollRef();
      } else {
        return this._scrollRef;
      }
    }
    _getCellKey() {
      var _this$context;
      return ((_this$context = this.context) == null ? void 0 : _this$context.cellKey) || "rootList";
    }
    // $FlowFixMe[missing-local-annot]
    hasMore() {
      return this._hasMore;
    }
    // $FlowFixMe[missing-local-annot]
    // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
    constructor(_props) {
      var _this$props$updateCel;
      super(_props);
      this._getScrollMetrics = () => {
        return this._scrollMetrics;
      };
      this._getOutermostParentListRef = () => {
        if (this._isNestedWithSameOrientation()) {
          return this.context.getOutermostParentListRef();
        } else {
          return this;
        }
      };
      this._registerAsNestedChild = (childList) => {
        this._nestedChildLists.add(childList.ref, childList.cellKey);
        if (this._hasInteracted) {
          childList.ref.recordInteraction();
        }
      };
      this._unregisterAsNestedChild = (childList) => {
        this._nestedChildLists.remove(childList.ref);
      };
      this._onUpdateSeparators = (keys, newProps) => {
        keys.forEach((key) => {
          var ref = key != null && this._cellRefs[key];
          ref && ref.updateSeparatorProps(newProps);
        });
      };
      this._getSpacerKey = (isVertical) => isVertical ? "height" : "width";
      this._averageCellLength = 0;
      this._cellRefs = {};
      this._frames = {};
      this._footerLength = 0;
      this._hasTriggeredInitialScrollToIndex = false;
      this._hasInteracted = false;
      this._hasMore = false;
      this._hasWarned = {};
      this._headerLength = 0;
      this._hiPriInProgress = false;
      this._highestMeasuredFrameIndex = 0;
      this._indicesToKeys = /* @__PURE__ */ new Map();
      this._lastFocusedCellKey = null;
      this._nestedChildLists = new _ChildListCollection.default();
      this._offsetFromParentVirtualizedList = 0;
      this._prevParentOffset = 0;
      this._scrollMetrics = {
        contentLength: 0,
        dOffset: 0,
        dt: 10,
        offset: 0,
        timestamp: 0,
        velocity: 0,
        visibleLength: 0,
        zoomScale: 1
      };
      this._scrollRef = null;
      this._sentStartForContentLength = 0;
      this._sentEndForContentLength = 0;
      this._totalCellLength = 0;
      this._totalCellsMeasured = 0;
      this._viewabilityTuples = [];
      this._captureScrollRef = (ref) => {
        this._scrollRef = ref;
      };
      this._defaultRenderScrollComponent = (props) => {
        var onRefresh = props.onRefresh;
        if (this._isNestedWithSameOrientation()) {
          return /* @__PURE__ */ React.createElement(_View.default, props);
        } else if (onRefresh) {
          var _props$refreshing;
          (0, _invariant.default)(typeof props.refreshing === "boolean", "`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `" + JSON.stringify((_props$refreshing = props.refreshing) !== null && _props$refreshing !== void 0 ? _props$refreshing : "undefined") + "`");
          return (
            // $FlowFixMe[prop-missing] Invalid prop usage
            // $FlowFixMe[incompatible-use]
            /* @__PURE__ */ React.createElement(_ScrollView.default, (0, _extends2.default)({}, props, {
              refreshControl: props.refreshControl == null ? /* @__PURE__ */ React.createElement(
                _RefreshControl.default,
                {
                  refreshing: props.refreshing,
                  onRefresh,
                  progressViewOffset: props.progressViewOffset
                }
              ) : props.refreshControl
            }))
          );
        } else {
          return /* @__PURE__ */ React.createElement(_ScrollView.default, props);
        }
      };
      this._onCellLayout = (e, cellKey, index) => {
        var layout = e.nativeEvent.layout;
        var next = {
          offset: this._selectOffset(layout),
          length: this._selectLength(layout),
          index,
          inLayout: true
        };
        var curr = this._frames[cellKey];
        if (!curr || next.offset !== curr.offset || next.length !== curr.length || index !== curr.index) {
          this._totalCellLength += next.length - (curr ? curr.length : 0);
          this._totalCellsMeasured += curr ? 0 : 1;
          this._averageCellLength = this._totalCellLength / this._totalCellsMeasured;
          this._frames[cellKey] = next;
          this._highestMeasuredFrameIndex = Math.max(this._highestMeasuredFrameIndex, index);
          this._scheduleCellsToRenderUpdate();
        } else {
          this._frames[cellKey].inLayout = true;
        }
        this._triggerRemeasureForChildListsInCell(cellKey);
        this._computeBlankness();
        this._updateViewableItems(this.props, this.state.cellsAroundViewport);
      };
      this._onCellUnmount = (cellKey) => {
        delete this._cellRefs[cellKey];
        var curr = this._frames[cellKey];
        if (curr) {
          this._frames[cellKey] = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, curr), {}, {
            inLayout: false
          });
        }
      };
      this._onLayout = (e) => {
        if (this._isNestedWithSameOrientation()) {
          this.measureLayoutRelativeToContainingList();
        } else {
          this._scrollMetrics.visibleLength = this._selectLength(e.nativeEvent.layout);
        }
        this.props.onLayout && this.props.onLayout(e);
        this._scheduleCellsToRenderUpdate();
        this._maybeCallOnEdgeReached();
      };
      this._onLayoutEmpty = (e) => {
        this.props.onLayout && this.props.onLayout(e);
      };
      this._onLayoutFooter = (e) => {
        this._triggerRemeasureForChildListsInCell(this._getFooterCellKey());
        this._footerLength = this._selectLength(e.nativeEvent.layout);
      };
      this._onLayoutHeader = (e) => {
        this._headerLength = this._selectLength(e.nativeEvent.layout);
      };
      this._onContentSizeChange = (width, height) => {
        if (width > 0 && height > 0 && this.props.initialScrollIndex != null && this.props.initialScrollIndex > 0 && !this._hasTriggeredInitialScrollToIndex) {
          if (this.props.contentOffset == null) {
            if (this.props.initialScrollIndex < this.props.getItemCount(this.props.data)) {
              this.scrollToIndex({
                animated: false,
                index: (0, _nullthrows.default)(this.props.initialScrollIndex)
              });
            } else {
              this.scrollToEnd({
                animated: false
              });
            }
          }
          this._hasTriggeredInitialScrollToIndex = true;
        }
        if (this.props.onContentSizeChange) {
          this.props.onContentSizeChange(width, height);
        }
        this._scrollMetrics.contentLength = this._selectLength({
          height,
          width
        });
        this._scheduleCellsToRenderUpdate();
        this._maybeCallOnEdgeReached();
      };
      this._convertParentScrollMetrics = (metrics) => {
        var offset = metrics.offset - this._offsetFromParentVirtualizedList;
        var visibleLength = metrics.visibleLength;
        var dOffset = offset - this._scrollMetrics.offset;
        var contentLength = this._scrollMetrics.contentLength;
        return {
          visibleLength,
          contentLength,
          offset,
          dOffset
        };
      };
      this._onScroll = (e) => {
        this._nestedChildLists.forEach((childList) => {
          childList._onScroll(e);
        });
        if (this.props.onScroll) {
          this.props.onScroll(e);
        }
        var timestamp = e.timeStamp;
        var visibleLength = this._selectLength(e.nativeEvent.layoutMeasurement);
        var contentLength = this._selectLength(e.nativeEvent.contentSize);
        var offset = this._selectOffset(e.nativeEvent.contentOffset);
        var dOffset = offset - this._scrollMetrics.offset;
        if (this._isNestedWithSameOrientation()) {
          if (this._scrollMetrics.contentLength === 0) {
            return;
          }
          var _this$_convertParentS = this._convertParentScrollMetrics({
            visibleLength,
            offset
          });
          visibleLength = _this$_convertParentS.visibleLength;
          contentLength = _this$_convertParentS.contentLength;
          offset = _this$_convertParentS.offset;
          dOffset = _this$_convertParentS.dOffset;
        }
        var dt = this._scrollMetrics.timestamp ? Math.max(1, timestamp - this._scrollMetrics.timestamp) : 1;
        var velocity = dOffset / dt;
        if (dt > 500 && this._scrollMetrics.dt > 500 && contentLength > 5 * visibleLength && !this._hasWarned.perf) {
          (0, _infoLog.default)("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.", {
            dt,
            prevDt: this._scrollMetrics.dt,
            contentLength
          });
          this._hasWarned.perf = true;
        }
        var zoomScale = e.nativeEvent.zoomScale < 0 ? 1 : e.nativeEvent.zoomScale;
        this._scrollMetrics = {
          contentLength,
          dt,
          dOffset,
          offset,
          timestamp,
          velocity,
          visibleLength,
          zoomScale
        };
        this._updateViewableItems(this.props, this.state.cellsAroundViewport);
        if (!this.props) {
          return;
        }
        this._maybeCallOnEdgeReached();
        if (velocity !== 0) {
          this._fillRateHelper.activate();
        }
        this._computeBlankness();
        this._scheduleCellsToRenderUpdate();
      };
      this._onScrollBeginDrag = (e) => {
        this._nestedChildLists.forEach((childList) => {
          childList._onScrollBeginDrag(e);
        });
        this._viewabilityTuples.forEach((tuple) => {
          tuple.viewabilityHelper.recordInteraction();
        });
        this._hasInteracted = true;
        this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
      };
      this._onScrollEndDrag = (e) => {
        this._nestedChildLists.forEach((childList) => {
          childList._onScrollEndDrag(e);
        });
        var velocity = e.nativeEvent.velocity;
        if (velocity) {
          this._scrollMetrics.velocity = this._selectOffset(velocity);
        }
        this._computeBlankness();
        this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
      };
      this._onMomentumScrollBegin = (e) => {
        this._nestedChildLists.forEach((childList) => {
          childList._onMomentumScrollBegin(e);
        });
        this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
      };
      this._onMomentumScrollEnd = (e) => {
        this._nestedChildLists.forEach((childList) => {
          childList._onMomentumScrollEnd(e);
        });
        this._scrollMetrics.velocity = 0;
        this._computeBlankness();
        this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
      };
      this._updateCellsToRender = () => {
        this._updateViewableItems(this.props, this.state.cellsAroundViewport);
        this.setState((state, props) => {
          var cellsAroundViewport = this._adjustCellsAroundViewport(props, state.cellsAroundViewport);
          var renderMask = VirtualizedList2._createRenderMask(props, cellsAroundViewport, this._getNonViewportRenderRegions(props));
          if (cellsAroundViewport.first === state.cellsAroundViewport.first && cellsAroundViewport.last === state.cellsAroundViewport.last && renderMask.equals(state.renderMask)) {
            return null;
          }
          return {
            cellsAroundViewport,
            renderMask
          };
        });
      };
      this._createViewToken = (index, isViewable, props) => {
        var data = props.data, getItem = props.getItem;
        var item = getItem(data, index);
        return {
          index,
          item,
          key: this._keyExtractor(item, index, props),
          isViewable
        };
      };
      this._getOffsetApprox = (index, props) => {
        if (Number.isInteger(index)) {
          return this.__getFrameMetricsApprox(index, props).offset;
        } else {
          var frameMetrics = this.__getFrameMetricsApprox(Math.floor(index), props);
          var remainder = index - Math.floor(index);
          return frameMetrics.offset + remainder * frameMetrics.length;
        }
      };
      this.__getFrameMetricsApprox = (index, props) => {
        var frame = this._getFrameMetrics(index, props);
        if (frame && frame.index === index) {
          return frame;
        } else {
          var data = props.data, getItemCount = props.getItemCount, getItemLayout = props.getItemLayout;
          (0, _invariant.default)(index >= 0 && index < getItemCount(data), "Tried to get frame for out of range index " + index);
          (0, _invariant.default)(!getItemLayout, "Should not have to estimate frames when a measurement metrics function is provided");
          return {
            length: this._averageCellLength,
            offset: this._averageCellLength * index
          };
        }
      };
      this._getFrameMetrics = (index, props) => {
        var data = props.data, getItem = props.getItem, getItemCount = props.getItemCount, getItemLayout = props.getItemLayout;
        (0, _invariant.default)(index >= 0 && index < getItemCount(data), "Tried to get frame for out of range index " + index);
        var item = getItem(data, index);
        var frame = this._frames[this._keyExtractor(item, index, props)];
        if (!frame || frame.index !== index) {
          if (getItemLayout) {
            return getItemLayout(data, index);
          }
        }
        return frame;
      };
      this._getNonViewportRenderRegions = (props) => {
        if (!(this._lastFocusedCellKey && this._cellRefs[this._lastFocusedCellKey])) {
          return [];
        }
        var lastFocusedCellRenderer = this._cellRefs[this._lastFocusedCellKey];
        var focusedCellIndex = lastFocusedCellRenderer.props.index;
        var itemCount = props.getItemCount(props.data);
        if (focusedCellIndex >= itemCount || this._keyExtractor(props.getItem(props.data, focusedCellIndex), focusedCellIndex, props) !== this._lastFocusedCellKey) {
          return [];
        }
        var first = focusedCellIndex;
        var heightOfCellsBeforeFocused = 0;
        for (var i = first - 1; i >= 0 && heightOfCellsBeforeFocused < this._scrollMetrics.visibleLength; i--) {
          first--;
          heightOfCellsBeforeFocused += this.__getFrameMetricsApprox(i, props).length;
        }
        var last = focusedCellIndex;
        var heightOfCellsAfterFocused = 0;
        for (var _i = last + 1; _i < itemCount && heightOfCellsAfterFocused < this._scrollMetrics.visibleLength; _i++) {
          last++;
          heightOfCellsAfterFocused += this.__getFrameMetricsApprox(_i, props).length;
        }
        return [{
          first,
          last
        }];
      };
      this._checkProps(_props);
      this._fillRateHelper = new _FillRateHelper.default(this._getFrameMetrics);
      this._updateCellsToRenderBatcher = new _Batchinator.default(this._updateCellsToRender, (_this$props$updateCel = this.props.updateCellsBatchingPeriod) !== null && _this$props$updateCel !== void 0 ? _this$props$updateCel : 50);
      if (this.props.viewabilityConfigCallbackPairs) {
        this._viewabilityTuples = this.props.viewabilityConfigCallbackPairs.map((pair) => ({
          viewabilityHelper: new _ViewabilityHelper.default(pair.viewabilityConfig),
          onViewableItemsChanged: pair.onViewableItemsChanged
        }));
      } else {
        var _this$props3 = this.props, onViewableItemsChanged = _this$props3.onViewableItemsChanged, viewabilityConfig = _this$props3.viewabilityConfig;
        if (onViewableItemsChanged) {
          this._viewabilityTuples.push({
            viewabilityHelper: new _ViewabilityHelper.default(viewabilityConfig),
            onViewableItemsChanged
          });
        }
      }
      var initialRenderRegion = VirtualizedList2._initialRenderRegion(_props);
      this.state = {
        cellsAroundViewport: initialRenderRegion,
        renderMask: VirtualizedList2._createRenderMask(_props, initialRenderRegion)
      };
      this.invertedWheelEventHandler = (ev) => {
        var scrollOffset = this.props.horizontal ? ev.target.scrollLeft : ev.target.scrollTop;
        var scrollLength = this.props.horizontal ? ev.target.scrollWidth : ev.target.scrollHeight;
        var clientLength = this.props.horizontal ? ev.target.clientWidth : ev.target.clientHeight;
        var isEventTargetScrollable = scrollLength > clientLength;
        var delta = this.props.horizontal ? ev.deltaX || ev.wheelDeltaX : ev.deltaY || ev.wheelDeltaY;
        var leftoverDelta = delta;
        if (isEventTargetScrollable) {
          leftoverDelta = delta < 0 ? Math.min(delta + scrollOffset, 0) : Math.max(delta - (scrollLength - clientLength - scrollOffset), 0);
        }
        var targetDelta = delta - leftoverDelta;
        if (this.props.inverted && this._scrollRef && this._scrollRef.getScrollableNode) {
          var node = this._scrollRef.getScrollableNode();
          if (this.props.horizontal) {
            ev.target.scrollLeft += targetDelta;
            var nextScrollLeft = node.scrollLeft - leftoverDelta;
            node.scrollLeft = !this.props.getItemLayout ? Math.min(nextScrollLeft, this._totalCellLength) : nextScrollLeft;
          } else {
            ev.target.scrollTop += targetDelta;
            var nextScrollTop = node.scrollTop - leftoverDelta;
            node.scrollTop = !this.props.getItemLayout ? Math.min(nextScrollTop, this._totalCellLength) : nextScrollTop;
          }
          ev.preventDefault();
        }
      };
    }
    _checkProps(props) {
      var onScroll = props.onScroll, windowSize = props.windowSize, getItemCount = props.getItemCount, data = props.data, initialScrollIndex = props.initialScrollIndex;
      (0, _invariant.default)(
        // $FlowFixMe[prop-missing]
        !onScroll || !onScroll.__isNative,
        "Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver"
      );
      (0, _invariant.default)(windowSizeOrDefault(windowSize) > 0, "VirtualizedList: The windowSize prop must be present and set to a value greater than 0.");
      (0, _invariant.default)(getItemCount, 'VirtualizedList: The "getItemCount" prop must be provided');
      var itemCount = getItemCount(data);
      if (initialScrollIndex != null && !this._hasTriggeredInitialScrollToIndex && (initialScrollIndex < 0 || itemCount > 0 && initialScrollIndex >= itemCount) && !this._hasWarned.initialScrollIndex) {
        console.warn('initialScrollIndex "' + initialScrollIndex + '" is not valid (list has ' + itemCount + " items)");
        this._hasWarned.initialScrollIndex = true;
      }
    }
    static _createRenderMask(props, cellsAroundViewport, additionalRegions) {
      var itemCount = props.getItemCount(props.data);
      (0, _invariant.default)(cellsAroundViewport.first >= 0 && cellsAroundViewport.last >= cellsAroundViewport.first - 1 && cellsAroundViewport.last < itemCount, 'Invalid cells around viewport "[' + cellsAroundViewport.first + ", " + cellsAroundViewport.last + ']" was passed to VirtualizedList._createRenderMask');
      var renderMask = new _CellRenderMask.CellRenderMask(itemCount);
      if (itemCount > 0) {
        var allRegions = [cellsAroundViewport, ...additionalRegions !== null && additionalRegions !== void 0 ? additionalRegions : []];
        for (var _i2 = 0, _allRegions = allRegions; _i2 < _allRegions.length; _i2++) {
          var region = _allRegions[_i2];
          renderMask.addCells(region);
        }
        if (props.initialScrollIndex == null || props.initialScrollIndex <= 0) {
          var initialRegion = VirtualizedList2._initialRenderRegion(props);
          renderMask.addCells(initialRegion);
        }
        var stickyIndicesSet = new Set(props.stickyHeaderIndices);
        VirtualizedList2._ensureClosestStickyHeader(props, stickyIndicesSet, renderMask, cellsAroundViewport.first);
      }
      return renderMask;
    }
    static _initialRenderRegion(props) {
      var _props$initialScrollI;
      var itemCount = props.getItemCount(props.data);
      var firstCellIndex = Math.max(0, Math.min(itemCount - 1, Math.floor((_props$initialScrollI = props.initialScrollIndex) !== null && _props$initialScrollI !== void 0 ? _props$initialScrollI : 0)));
      var lastCellIndex = Math.min(itemCount, firstCellIndex + initialNumToRenderOrDefault(props.initialNumToRender)) - 1;
      return {
        first: firstCellIndex,
        last: lastCellIndex
      };
    }
    static _ensureClosestStickyHeader(props, stickyIndicesSet, renderMask, cellIdx) {
      var stickyOffset = props.ListHeaderComponent ? 1 : 0;
      for (var itemIdx = cellIdx - 1; itemIdx >= 0; itemIdx--) {
        if (stickyIndicesSet.has(itemIdx + stickyOffset)) {
          renderMask.addCells({
            first: itemIdx,
            last: itemIdx
          });
          break;
        }
      }
    }
    _adjustCellsAroundViewport(props, cellsAroundViewport) {
      var data = props.data, getItemCount = props.getItemCount;
      var onEndReachedThreshold = onEndReachedThresholdOrDefault(props.onEndReachedThreshold);
      var _this$_scrollMetrics = this._scrollMetrics, contentLength = _this$_scrollMetrics.contentLength, offset = _this$_scrollMetrics.offset, visibleLength = _this$_scrollMetrics.visibleLength;
      var distanceFromEnd = contentLength - visibleLength - offset;
      if (visibleLength <= 0 || contentLength <= 0) {
        return cellsAroundViewport.last >= getItemCount(data) ? VirtualizedList2._constrainToItemCount(cellsAroundViewport, props) : cellsAroundViewport;
      }
      var newCellsAroundViewport;
      if (props.disableVirtualization) {
        var renderAhead = distanceFromEnd < onEndReachedThreshold * visibleLength ? maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch) : 0;
        newCellsAroundViewport = {
          first: 0,
          last: Math.min(cellsAroundViewport.last + renderAhead, getItemCount(data) - 1)
        };
      } else {
        if (props.initialScrollIndex && !this._scrollMetrics.offset && Math.abs(distanceFromEnd) >= Number.EPSILON) {
          return cellsAroundViewport.last >= getItemCount(data) ? VirtualizedList2._constrainToItemCount(cellsAroundViewport, props) : cellsAroundViewport;
        }
        newCellsAroundViewport = (0, _VirtualizeUtils.computeWindowedRenderLimits)(props, maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch), windowSizeOrDefault(props.windowSize), cellsAroundViewport, this.__getFrameMetricsApprox, this._scrollMetrics);
        (0, _invariant.default)(newCellsAroundViewport.last < getItemCount(data), "computeWindowedRenderLimits() should return range in-bounds");
      }
      if (this._nestedChildLists.size() > 0) {
        var childIdx = this._findFirstChildWithMore(newCellsAroundViewport.first, newCellsAroundViewport.last);
        newCellsAroundViewport.last = childIdx !== null && childIdx !== void 0 ? childIdx : newCellsAroundViewport.last;
      }
      return newCellsAroundViewport;
    }
    _findFirstChildWithMore(first, last) {
      for (var ii = first; ii <= last; ii++) {
        var cellKeyForIndex = this._indicesToKeys.get(ii);
        if (cellKeyForIndex != null && this._nestedChildLists.anyInCell(cellKeyForIndex, (childList) => childList.hasMore())) {
          return ii;
        }
      }
      return null;
    }
    componentDidMount() {
      if (this._isNestedWithSameOrientation()) {
        this.context.registerAsNestedChild({
          ref: this,
          cellKey: this.context.cellKey
        });
      }
      this.setupWebWheelHandler();
    }
    componentWillUnmount() {
      if (this._isNestedWithSameOrientation()) {
        this.context.unregisterAsNestedChild({
          ref: this
        });
      }
      this._updateCellsToRenderBatcher.dispose({
        abort: true
      });
      this._viewabilityTuples.forEach((tuple) => {
        tuple.viewabilityHelper.dispose();
      });
      this._fillRateHelper.deactivateAndFlush();
      this.teardownWebWheelHandler();
    }
    // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
    setupWebWheelHandler() {
      if (this._scrollRef && this._scrollRef.getScrollableNode) {
        this._scrollRef.getScrollableNode().addEventListener("wheel", this.invertedWheelEventHandler);
      } else {
        setTimeout(() => this.setupWebWheelHandler(), 50);
        return;
      }
    }
    // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
    teardownWebWheelHandler() {
      if (this._scrollRef && this._scrollRef.getScrollableNode) {
        this._scrollRef.getScrollableNode().removeEventListener("wheel", this.invertedWheelEventHandler);
      }
    }
    static getDerivedStateFromProps(newProps, prevState) {
      var itemCount = newProps.getItemCount(newProps.data);
      if (itemCount === prevState.renderMask.numCells()) {
        return prevState;
      }
      var constrainedCells = VirtualizedList2._constrainToItemCount(prevState.cellsAroundViewport, newProps);
      return {
        cellsAroundViewport: constrainedCells,
        renderMask: VirtualizedList2._createRenderMask(newProps, constrainedCells)
      };
    }
    _pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, first, last, inversionStyle) {
      var _this = this;
      var _this$props4 = this.props, CellRendererComponent = _this$props4.CellRendererComponent, ItemSeparatorComponent = _this$props4.ItemSeparatorComponent, ListHeaderComponent = _this$props4.ListHeaderComponent, ListItemComponent = _this$props4.ListItemComponent, data = _this$props4.data, debug = _this$props4.debug, getItem = _this$props4.getItem, getItemCount = _this$props4.getItemCount, getItemLayout = _this$props4.getItemLayout, horizontal = _this$props4.horizontal, renderItem = _this$props4.renderItem;
      var stickyOffset = ListHeaderComponent ? 1 : 0;
      var end = getItemCount(data) - 1;
      var prevCellKey;
      last = Math.min(end, last);
      var _loop = function _loop2() {
        var item = getItem(data, ii);
        var key = _this._keyExtractor(item, ii, _this.props);
        _this._indicesToKeys.set(ii, key);
        if (stickyIndicesFromProps.has(ii + stickyOffset)) {
          stickyHeaderIndices.push(cells.length);
        }
        var shouldListenForLayout = getItemLayout == null || debug || _this._fillRateHelper.enabled();
        cells.push(/* @__PURE__ */ React.createElement(_VirtualizedListCellRenderer.default, (0, _extends2.default)({
          CellRendererComponent,
          ItemSeparatorComponent: ii < end ? ItemSeparatorComponent : void 0,
          ListItemComponent,
          cellKey: key,
          horizontal,
          index: ii,
          inversionStyle,
          item,
          key,
          prevCellKey,
          onUpdateSeparators: _this._onUpdateSeparators,
          onCellFocusCapture: (e) => _this._onCellFocusCapture(key),
          onUnmount: _this._onCellUnmount,
          ref: (_ref) => {
            _this._cellRefs[key] = _ref;
          },
          renderItem
        }, shouldListenForLayout && {
          onCellLayout: _this._onCellLayout
        })));
        prevCellKey = key;
      };
      for (var ii = first; ii <= last; ii++) {
        _loop();
      }
    }
    static _constrainToItemCount(cells, props) {
      var itemCount = props.getItemCount(props.data);
      var last = Math.min(itemCount - 1, cells.last);
      var maxToRenderPerBatch = maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch);
      return {
        first: (0, _clamp.default)(0, itemCount - 1 - maxToRenderPerBatch, cells.first),
        last
      };
    }
    _isNestedWithSameOrientation() {
      var nestedContext = this.context;
      return !!(nestedContext && !!nestedContext.horizontal === horizontalOrDefault(this.props.horizontal));
    }
    _keyExtractor(item, index, props) {
      if (props.keyExtractor != null) {
        return props.keyExtractor(item, index);
      }
      var key = (0, _VirtualizeUtils.keyExtractor)(item, index);
      if (key === String(index)) {
        _usedIndexForKey = true;
        if (item.type && item.type.displayName) {
          _keylessItemComponentName = item.type.displayName;
        }
      }
      return key;
    }
    render() {
      this._checkProps(this.props);
      var _this$props5 = this.props, ListEmptyComponent = _this$props5.ListEmptyComponent, ListFooterComponent = _this$props5.ListFooterComponent, ListHeaderComponent = _this$props5.ListHeaderComponent;
      var _this$props6 = this.props, data = _this$props6.data, horizontal = _this$props6.horizontal;
      var inversionStyle = this.props.inverted ? horizontalOrDefault(this.props.horizontal) ? styles2.horizontallyInverted : styles2.verticallyInverted : null;
      var cells = [];
      var stickyIndicesFromProps = new Set(this.props.stickyHeaderIndices);
      var stickyHeaderIndices = [];
      if (ListHeaderComponent) {
        if (stickyIndicesFromProps.has(0)) {
          stickyHeaderIndices.push(0);
        }
        var _element = /* @__PURE__ */ React.isValidElement(ListHeaderComponent) ? ListHeaderComponent : (
          // $FlowFixMe[not-a-component]
          // $FlowFixMe[incompatible-type-arg]
          /* @__PURE__ */ React.createElement(ListHeaderComponent, null)
        );
        cells.push(/* @__PURE__ */ React.createElement(_VirtualizedListContext.VirtualizedListCellContextProvider, {
          cellKey: this._getCellKey() + "-header",
          key: "$header"
        }, /* @__PURE__ */ React.createElement(
          _View.default,
          {
            onLayout: this._onLayoutHeader,
            style: [inversionStyle, this.props.ListHeaderComponentStyle]
          },
          // $FlowFixMe[incompatible-type] - Typing ReactNativeComponent revealed errors
          _element
        )));
      }
      var itemCount = this.props.getItemCount(data);
      if (itemCount === 0 && ListEmptyComponent) {
        var _element2 = /* @__PURE__ */ React.isValidElement(ListEmptyComponent) ? ListEmptyComponent : (
          // $FlowFixMe[not-a-component]
          // $FlowFixMe[incompatible-type-arg]
          /* @__PURE__ */ React.createElement(ListEmptyComponent, null)
        );
        cells.push(/* @__PURE__ */ React.createElement(_VirtualizedListContext.VirtualizedListCellContextProvider, {
          cellKey: this._getCellKey() + "-empty",
          key: "$empty"
        }, /* @__PURE__ */ React.cloneElement(_element2, {
          onLayout: (event) => {
            this._onLayoutEmpty(event);
            if (_element2.props.onLayout) {
              _element2.props.onLayout(event);
            }
          },
          style: [inversionStyle, _element2.props.style]
        })));
      }
      if (itemCount > 0) {
        _usedIndexForKey = false;
        _keylessItemComponentName = "";
        var spacerKey = this._getSpacerKey(!horizontal);
        var renderRegions = this.state.renderMask.enumerateRegions();
        var lastSpacer = findLastWhere(renderRegions, (r) => r.isSpacer);
        for (var _iterator = (0, _createForOfIteratorHelperLoose2.default)(renderRegions), _step; !(_step = _iterator()).done; ) {
          var section = _step.value;
          if (section.isSpacer) {
            if (this.props.disableVirtualization) {
              continue;
            }
            var isLastSpacer = section === lastSpacer;
            var constrainToMeasured = isLastSpacer && !this.props.getItemLayout;
            var last = constrainToMeasured ? (0, _clamp.default)(section.first - 1, section.last, this._highestMeasuredFrameIndex) : section.last;
            var firstMetrics = this.__getFrameMetricsApprox(section.first, this.props);
            var lastMetrics = this.__getFrameMetricsApprox(last, this.props);
            var spacerSize = lastMetrics.offset + lastMetrics.length - firstMetrics.offset;
            cells.push(/* @__PURE__ */ React.createElement(_View.default, {
              key: "$spacer-" + section.first,
              style: {
                [spacerKey]: spacerSize
              }
            }));
          } else {
            this._pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, section.first, section.last, inversionStyle);
          }
        }
        if (!this._hasWarned.keys && _usedIndexForKey) {
          console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.", _keylessItemComponentName);
          this._hasWarned.keys = true;
        }
      }
      if (ListFooterComponent) {
        var _element3 = /* @__PURE__ */ React.isValidElement(ListFooterComponent) ? ListFooterComponent : (
          // $FlowFixMe[not-a-component]
          // $FlowFixMe[incompatible-type-arg]
          /* @__PURE__ */ React.createElement(ListFooterComponent, null)
        );
        cells.push(/* @__PURE__ */ React.createElement(_VirtualizedListContext.VirtualizedListCellContextProvider, {
          cellKey: this._getFooterCellKey(),
          key: "$footer"
        }, /* @__PURE__ */ React.createElement(
          _View.default,
          {
            onLayout: this._onLayoutFooter,
            style: [inversionStyle, this.props.ListFooterComponentStyle]
          },
          // $FlowFixMe[incompatible-type] - Typing ReactNativeComponent revealed errors
          _element3
        )));
      }
      var scrollProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.props), {}, {
        onContentSizeChange: this._onContentSizeChange,
        onLayout: this._onLayout,
        onScroll: this._onScroll,
        onScrollBeginDrag: this._onScrollBeginDrag,
        onScrollEndDrag: this._onScrollEndDrag,
        onMomentumScrollBegin: this._onMomentumScrollBegin,
        onMomentumScrollEnd: this._onMomentumScrollEnd,
        scrollEventThrottle: scrollEventThrottleOrDefault(this.props.scrollEventThrottle),
        // TODO: Android support
        invertStickyHeaders: this.props.invertStickyHeaders !== void 0 ? this.props.invertStickyHeaders : this.props.inverted,
        stickyHeaderIndices,
        style: inversionStyle ? [inversionStyle, this.props.style] : this.props.style
      });
      this._hasMore = this.state.cellsAroundViewport.last < itemCount - 1;
      var innerRet = /* @__PURE__ */ React.createElement(_VirtualizedListContext.VirtualizedListContextProvider, {
        value: {
          cellKey: null,
          getScrollMetrics: this._getScrollMetrics,
          horizontal: horizontalOrDefault(this.props.horizontal),
          getOutermostParentListRef: this._getOutermostParentListRef,
          registerAsNestedChild: this._registerAsNestedChild,
          unregisterAsNestedChild: this._unregisterAsNestedChild
        }
      }, /* @__PURE__ */ React.cloneElement((this.props.renderScrollComponent || this._defaultRenderScrollComponent)(scrollProps), {
        ref: this._captureScrollRef
      }, cells));
      var ret = innerRet;
      if (this.props.debug) {
        return /* @__PURE__ */ React.createElement(_View.default, {
          style: styles2.debug
        }, ret, this._renderDebugOverlay());
      } else {
        return ret;
      }
    }
    componentDidUpdate(prevProps) {
      var _this$props7 = this.props, data = _this$props7.data, extraData = _this$props7.extraData;
      if (data !== prevProps.data || extraData !== prevProps.extraData) {
        this._viewabilityTuples.forEach((tuple) => {
          tuple.viewabilityHelper.resetViewableIndices();
        });
      }
      var hiPriInProgress = this._hiPriInProgress;
      this._scheduleCellsToRenderUpdate();
      if (hiPriInProgress) {
        this._hiPriInProgress = false;
      }
    }
    // Used for preventing scrollToIndex from being called multiple times for initialScrollIndex
    // flag to prevent infinite hiPri cell limit update
    // $FlowFixMe[missing-local-annot]
    /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
     * LTI update could not be added via codemod */
    _computeBlankness() {
      this._fillRateHelper.computeBlankness(this.props, this.state.cellsAroundViewport, this._scrollMetrics);
    }
    /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
     * LTI update could not be added via codemod */
    _onCellFocusCapture(cellKey) {
      this._lastFocusedCellKey = cellKey;
      this._updateCellsToRender();
    }
    _triggerRemeasureForChildListsInCell(cellKey) {
      this._nestedChildLists.forEachInCell(cellKey, (childList) => {
        childList.measureLayoutRelativeToContainingList();
      });
    }
    measureLayoutRelativeToContainingList() {
      try {
        if (!this._scrollRef) {
          return;
        }
        this._scrollRef.measureLayout(this.context.getOutermostParentListRef().getScrollRef(), (x, y, width, height) => {
          this._offsetFromParentVirtualizedList = this._selectOffset({
            x,
            y
          });
          this._scrollMetrics.contentLength = this._selectLength({
            width,
            height
          });
          var scrollMetrics = this._convertParentScrollMetrics(this.context.getScrollMetrics());
          var metricsChanged = this._scrollMetrics.visibleLength !== scrollMetrics.visibleLength || this._scrollMetrics.offset !== scrollMetrics.offset;
          if (metricsChanged) {
            this._scrollMetrics.visibleLength = scrollMetrics.visibleLength;
            this._scrollMetrics.offset = scrollMetrics.offset;
            this._nestedChildLists.forEach((childList) => {
              childList.measureLayoutRelativeToContainingList();
            });
          }
        }, (error) => {
          console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.");
        });
      } catch (error) {
        console.warn("measureLayoutRelativeToContainingList threw an error", error.stack);
      }
    }
    _getFooterCellKey() {
      return this._getCellKey() + "-footer";
    }
    // $FlowFixMe[missing-local-annot]
    _renderDebugOverlay() {
      var normalize = this._scrollMetrics.visibleLength / (this._scrollMetrics.contentLength || 1);
      var framesInLayout = [];
      var itemCount = this.props.getItemCount(this.props.data);
      for (var ii = 0; ii < itemCount; ii++) {
        var frame = this.__getFrameMetricsApprox(ii, this.props);
        if (frame.inLayout) {
          framesInLayout.push(frame);
        }
      }
      var windowTop = this.__getFrameMetricsApprox(this.state.cellsAroundViewport.first, this.props).offset;
      var frameLast = this.__getFrameMetricsApprox(this.state.cellsAroundViewport.last, this.props);
      var windowLen = frameLast.offset + frameLast.length - windowTop;
      var visTop = this._scrollMetrics.offset;
      var visLen = this._scrollMetrics.visibleLength;
      return /* @__PURE__ */ React.createElement(_View.default, {
        style: [styles2.debugOverlayBase, styles2.debugOverlay]
      }, framesInLayout.map((f, ii2) => /* @__PURE__ */ React.createElement(_View.default, {
        key: "f" + ii2,
        style: [styles2.debugOverlayBase, styles2.debugOverlayFrame, {
          top: f.offset * normalize,
          height: f.length * normalize
        }]
      })), /* @__PURE__ */ React.createElement(_View.default, {
        style: [styles2.debugOverlayBase, styles2.debugOverlayFrameLast, {
          top: windowTop * normalize,
          height: windowLen * normalize
        }]
      }), /* @__PURE__ */ React.createElement(_View.default, {
        style: [styles2.debugOverlayBase, styles2.debugOverlayFrameVis, {
          top: visTop * normalize,
          height: visLen * normalize
        }]
      }));
    }
    _selectLength(metrics) {
      return !horizontalOrDefault(this.props.horizontal) ? metrics.height : metrics.width;
    }
    _selectOffset(metrics) {
      return !horizontalOrDefault(this.props.horizontal) ? metrics.y : metrics.x;
    }
    _maybeCallOnEdgeReached() {
      var _this$props8 = this.props, data = _this$props8.data, getItemCount = _this$props8.getItemCount, onStartReached = _this$props8.onStartReached, onStartReachedThreshold = _this$props8.onStartReachedThreshold, onEndReached = _this$props8.onEndReached, onEndReachedThreshold = _this$props8.onEndReachedThreshold, initialScrollIndex = _this$props8.initialScrollIndex;
      var _this$_scrollMetrics2 = this._scrollMetrics, contentLength = _this$_scrollMetrics2.contentLength, visibleLength = _this$_scrollMetrics2.visibleLength, offset = _this$_scrollMetrics2.offset;
      var distanceFromStart = offset;
      var distanceFromEnd = contentLength - visibleLength - offset;
      if (distanceFromStart < ON_EDGE_REACHED_EPSILON) {
        distanceFromStart = 0;
      }
      if (distanceFromEnd < ON_EDGE_REACHED_EPSILON) {
        distanceFromEnd = 0;
      }
      var DEFAULT_THRESHOLD_PX = 2;
      var startThreshold = onStartReachedThreshold != null ? onStartReachedThreshold * visibleLength : DEFAULT_THRESHOLD_PX;
      var endThreshold = onEndReachedThreshold != null ? onEndReachedThreshold * visibleLength : DEFAULT_THRESHOLD_PX;
      var isWithinStartThreshold = distanceFromStart <= startThreshold;
      var isWithinEndThreshold = distanceFromEnd <= endThreshold;
      if (onEndReached && this.state.cellsAroundViewport.last === getItemCount(data) - 1 && isWithinEndThreshold && this._scrollMetrics.contentLength !== this._sentEndForContentLength) {
        this._sentEndForContentLength = this._scrollMetrics.contentLength;
        onEndReached({
          distanceFromEnd
        });
      } else if (onStartReached != null && this.state.cellsAroundViewport.first === 0 && isWithinStartThreshold && this._scrollMetrics.contentLength !== this._sentStartForContentLength) {
        if (!initialScrollIndex || this._scrollMetrics.timestamp !== 0) {
          this._sentStartForContentLength = this._scrollMetrics.contentLength;
          onStartReached({
            distanceFromStart
          });
        }
      } else {
        this._sentStartForContentLength = isWithinStartThreshold ? this._sentStartForContentLength : 0;
        this._sentEndForContentLength = isWithinEndThreshold ? this._sentEndForContentLength : 0;
      }
    }
    /* Translates metrics from a scroll event in a parent VirtualizedList into
     * coordinates relative to the child list.
     */
    _scheduleCellsToRenderUpdate() {
      var _this$state$cellsArou = this.state.cellsAroundViewport, first = _this$state$cellsArou.first, last = _this$state$cellsArou.last;
      var _this$_scrollMetrics3 = this._scrollMetrics, offset = _this$_scrollMetrics3.offset, visibleLength = _this$_scrollMetrics3.visibleLength, velocity = _this$_scrollMetrics3.velocity;
      var itemCount = this.props.getItemCount(this.props.data);
      var hiPri = false;
      var onStartReachedThreshold = onStartReachedThresholdOrDefault(this.props.onStartReachedThreshold);
      var onEndReachedThreshold = onEndReachedThresholdOrDefault(this.props.onEndReachedThreshold);
      if (first > 0) {
        var distTop = offset - this.__getFrameMetricsApprox(first, this.props).offset;
        hiPri = distTop < 0 || velocity < -2 && distTop < getScrollingThreshold(onStartReachedThreshold, visibleLength);
      }
      if (!hiPri && last >= 0 && last < itemCount - 1) {
        var distBottom = this.__getFrameMetricsApprox(last, this.props).offset - (offset + visibleLength);
        hiPri = distBottom < 0 || velocity > 2 && distBottom < getScrollingThreshold(onEndReachedThreshold, visibleLength);
      }
      if (hiPri && (this._averageCellLength || this.props.getItemLayout) && !this._hiPriInProgress) {
        this._hiPriInProgress = true;
        this._updateCellsToRenderBatcher.dispose({
          abort: true
        });
        this._updateCellsToRender();
        return;
      } else {
        this._updateCellsToRenderBatcher.schedule();
      }
    }
    /**
     * Gets an approximate offset to an item at a given index. Supports
     * fractional indices.
     */
    _updateViewableItems(props, cellsAroundViewport) {
      this._viewabilityTuples.forEach((tuple) => {
        tuple.viewabilityHelper.onUpdate(props, this._scrollMetrics.offset, this._scrollMetrics.visibleLength, this._getFrameMetrics, this._createViewToken, tuple.onViewableItemsChanged, cellsAroundViewport);
      });
    }
  }
  VirtualizedList2.contextType = _VirtualizedListContext.VirtualizedListContext;
  var styles2 = _StyleSheet.default.create({
    verticallyInverted: {
      transform: "scaleY(-1)"
    },
    horizontallyInverted: {
      transform: "scaleX(-1)"
    },
    debug: {
      flex: 1
    },
    debugOverlayBase: {
      position: "absolute",
      top: 0,
      right: 0
    },
    debugOverlay: {
      bottom: 0,
      width: 20,
      borderColor: "blue",
      borderWidth: 1
    },
    debugOverlayFrame: {
      left: 0,
      backgroundColor: "orange"
    },
    debugOverlayFrameLast: {
      left: 0,
      borderColor: "green",
      borderWidth: 2
    },
    debugOverlayFrameVis: {
      left: 0,
      borderColor: "red",
      borderWidth: 2
    }
  });
  VirtualizedList$1.default = VirtualizedList2;
  return VirtualizedList$1;
}
var memoizeOne_esm = {};
var hasRequiredMemoizeOne_esm;
function requireMemoizeOne_esm() {
  if (hasRequiredMemoizeOne_esm) return memoizeOne_esm;
  hasRequiredMemoizeOne_esm = 1;
  Object.defineProperty(memoizeOne_esm, "__esModule", {
    value: true
  });
  memoizeOne_esm.default = memoizeOne;
  var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === "number" && value !== value;
  };
  function isEqual(first, second) {
    if (first === second) {
      return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
      return true;
    }
    return false;
  }
  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
      if (!isEqual(newInputs[i], lastInputs[i])) {
        return false;
      }
    }
    return true;
  }
  function memoizeOne(resultFn, isEqual2) {
    if (isEqual2 === void 0) {
      isEqual2 = areInputsEqual;
    }
    var cache2 = null;
    function memoized() {
      var newArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        newArgs[_i] = arguments[_i];
      }
      if (cache2 && cache2.lastThis === this && isEqual2(newArgs, cache2.lastArgs)) {
        return cache2.lastResult;
      }
      var lastResult = resultFn.apply(this, newArgs);
      cache2 = {
        lastResult,
        lastArgs: newArgs,
        lastThis: this
      };
      return lastResult;
    }
    memoized.clear = function clear() {
      cache2 = null;
    };
    return memoized;
  }
  return memoizeOne_esm;
}
var hasRequiredFlatList$1;
function requireFlatList$1() {
  if (hasRequiredFlatList$1) return FlatList;
  hasRequiredFlatList$1 = 1;
  Object.defineProperty(FlatList, "__esModule", {
    value: true
  });
  FlatList.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _deepDiffer = _interopRequireDefault(/* @__PURE__ */ requireDeepDiffer());
  var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform$1());
  var _invariant = _interopRequireDefault(requireInvariant());
  var React = _interopRequireWildcard(requireReact());
  var _VirtualizedList = _interopRequireDefault(/* @__PURE__ */ requireVirtualizedList$1());
  var _VirtualizeUtils = /* @__PURE__ */ requireVirtualizeUtils();
  var _memoizeOne = _interopRequireDefault(/* @__PURE__ */ requireMemoizeOne_esm());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["numColumns", "columnWrapperStyle", "removeClippedSubviews", "strictMode"];
  function removeClippedSubviewsOrDefault(removeClippedSubviews) {
    return removeClippedSubviews !== null && removeClippedSubviews !== void 0 ? removeClippedSubviews : _Platform.default.OS === "android";
  }
  function numColumnsOrDefault(numColumns) {
    return numColumns !== null && numColumns !== void 0 ? numColumns : 1;
  }
  function isArrayLike(data) {
    return typeof Object(data).length === "number";
  }
  let FlatList$12 = class FlatList extends React.PureComponent {
    /**
     * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
     */
    scrollToEnd(params) {
      if (this._listRef) {
        this._listRef.scrollToEnd(params);
      }
    }
    /**
     * Scrolls to the item at the specified index such that it is positioned in the viewable area
     * such that `viewPosition` 0 places it at the top, 1 at the bottom, and 0.5 centered in the
     * middle. `viewOffset` is a fixed number of pixels to offset the final target position.
     *
     * Note: cannot scroll to locations outside the render window without specifying the
     * `getItemLayout` prop.
     */
    scrollToIndex(params) {
      if (this._listRef) {
        this._listRef.scrollToIndex(params);
      }
    }
    /**
     * Requires linear scan through data - use `scrollToIndex` instead if possible.
     *
     * Note: cannot scroll to locations outside the render window without specifying the
     * `getItemLayout` prop.
     */
    scrollToItem(params) {
      if (this._listRef) {
        this._listRef.scrollToItem(params);
      }
    }
    /**
     * Scroll to a specific content pixel offset in the list.
     *
     * Check out [scrollToOffset](docs/virtualizedlist.html#scrolltooffset) of VirtualizedList
     */
    scrollToOffset(params) {
      if (this._listRef) {
        this._listRef.scrollToOffset(params);
      }
    }
    /**
     * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
     * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
     * taps on items or by navigation actions.
     */
    recordInteraction() {
      if (this._listRef) {
        this._listRef.recordInteraction();
      }
    }
    /**
     * Displays the scroll indicators momentarily.
     *
     * @platform ios
     */
    flashScrollIndicators() {
      if (this._listRef) {
        this._listRef.flashScrollIndicators();
      }
    }
    /**
     * Provides a handle to the underlying scroll responder.
     */
    getScrollResponder() {
      if (this._listRef) {
        return this._listRef.getScrollResponder();
      }
    }
    /**
     * Provides a reference to the underlying host component
     */
    getNativeScrollRef() {
      if (this._listRef) {
        return this._listRef.getScrollRef();
      }
    }
    getScrollableNode() {
      if (this._listRef) {
        return this._listRef.getScrollableNode();
      }
    }
    constructor(_props) {
      super(_props);
      this._virtualizedListPairs = [];
      this._captureRef = (ref) => {
        this._listRef = ref;
      };
      this._getItem = (data, index) => {
        var numColumns = numColumnsOrDefault(this.props.numColumns);
        if (numColumns > 1) {
          var ret = [];
          for (var kk = 0; kk < numColumns; kk++) {
            var itemIndex = index * numColumns + kk;
            if (itemIndex < data.length) {
              var _item = data[itemIndex];
              ret.push(_item);
            }
          }
          return ret;
        } else {
          return data[index];
        }
      };
      this._getItemCount = (data) => {
        if (data != null && isArrayLike(data)) {
          var numColumns = numColumnsOrDefault(this.props.numColumns);
          return numColumns > 1 ? Math.ceil(data.length / numColumns) : data.length;
        } else {
          return 0;
        }
      };
      this._keyExtractor = (items, index) => {
        var _this$props$keyExtrac;
        var numColumns = numColumnsOrDefault(this.props.numColumns);
        var keyExtractor = (_this$props$keyExtrac = this.props.keyExtractor) !== null && _this$props$keyExtrac !== void 0 ? _this$props$keyExtrac : _VirtualizeUtils.keyExtractor;
        if (numColumns > 1) {
          (0, _invariant.default)(Array.isArray(items), "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.", numColumns);
          return items.map((item, kk) => keyExtractor(item, index * numColumns + kk)).join(":");
        }
        return keyExtractor(items, index);
      };
      this._renderer = (ListItemComponent, renderItem, columnWrapperStyle, numColumns, extraData) => {
        var cols = numColumnsOrDefault(numColumns);
        var render2 = (props) => {
          if (ListItemComponent) {
            return /* @__PURE__ */ React.createElement(ListItemComponent, props);
          } else if (renderItem) {
            return renderItem(props);
          } else {
            return null;
          }
        };
        var renderProp = (info) => {
          if (cols > 1) {
            var _item2 = info.item, _index = info.index;
            (0, _invariant.default)(Array.isArray(_item2), "Expected array of items with numColumns > 1");
            return /* @__PURE__ */ React.createElement(_View.default, {
              style: [styles2.row, columnWrapperStyle]
            }, _item2.map((it, kk) => {
              var element = render2({
                // $FlowFixMe[incompatible-call]
                item: it,
                index: _index * cols + kk,
                separators: info.separators
              });
              return element != null ? /* @__PURE__ */ React.createElement(React.Fragment, {
                key: kk
              }, element) : null;
            }));
          } else {
            return render2(info);
          }
        };
        return ListItemComponent ? {
          ListItemComponent: renderProp
        } : {
          renderItem: renderProp
        };
      };
      this._memoizedRenderer = (0, _memoizeOne.default)(this._renderer);
      this._checkProps(this.props);
      if (this.props.viewabilityConfigCallbackPairs) {
        this._virtualizedListPairs = this.props.viewabilityConfigCallbackPairs.map((pair) => ({
          viewabilityConfig: pair.viewabilityConfig,
          onViewableItemsChanged: this._createOnViewableItemsChanged(pair.onViewableItemsChanged)
        }));
      } else if (this.props.onViewableItemsChanged) {
        this._virtualizedListPairs.push({
          /* $FlowFixMe[incompatible-call] (>=0.63.0 site=react_native_fb) This
           * comment suppresses an error found when Flow v0.63 was deployed. To
           * see the error delete this comment and run Flow. */
          viewabilityConfig: this.props.viewabilityConfig,
          onViewableItemsChanged: this._createOnViewableItemsChanged(this.props.onViewableItemsChanged)
        });
      }
    }
    // $FlowFixMe[missing-local-annot]
    componentDidUpdate(prevProps) {
      (0, _invariant.default)(prevProps.numColumns === this.props.numColumns, "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.");
      (0, _invariant.default)(prevProps.onViewableItemsChanged === this.props.onViewableItemsChanged, "Changing onViewableItemsChanged on the fly is not supported");
      (0, _invariant.default)(!(0, _deepDiffer.default)(prevProps.viewabilityConfig, this.props.viewabilityConfig), "Changing viewabilityConfig on the fly is not supported");
      (0, _invariant.default)(prevProps.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, "Changing viewabilityConfigCallbackPairs on the fly is not supported");
      this._checkProps(this.props);
    }
    // $FlowFixMe[missing-local-annot]
    _checkProps(props) {
      var getItem = props.getItem, getItemCount = props.getItemCount, horizontal = props.horizontal, columnWrapperStyle = props.columnWrapperStyle, onViewableItemsChanged = props.onViewableItemsChanged, viewabilityConfigCallbackPairs = props.viewabilityConfigCallbackPairs;
      var numColumns = numColumnsOrDefault(this.props.numColumns);
      (0, _invariant.default)(!getItem && !getItemCount, "FlatList does not support custom data formats.");
      if (numColumns > 1) {
        (0, _invariant.default)(!horizontal, "numColumns does not support horizontal.");
      } else {
        (0, _invariant.default)(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists");
      }
      (0, _invariant.default)(!(onViewableItemsChanged && viewabilityConfigCallbackPairs), "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.");
    }
    _pushMultiColumnViewable(arr, v) {
      var _this$props$keyExtrac2;
      var numColumns = numColumnsOrDefault(this.props.numColumns);
      var keyExtractor = (_this$props$keyExtrac2 = this.props.keyExtractor) !== null && _this$props$keyExtrac2 !== void 0 ? _this$props$keyExtrac2 : _VirtualizeUtils.keyExtractor;
      v.item.forEach((item, ii) => {
        (0, _invariant.default)(v.index != null, "Missing index!");
        var index = v.index * numColumns + ii;
        arr.push((0, _objectSpread2.default)((0, _objectSpread2.default)({}, v), {}, {
          item,
          key: keyExtractor(item, index),
          index
        }));
      });
    }
    _createOnViewableItemsChanged(onViewableItemsChanged) {
      return (info) => {
        var numColumns = numColumnsOrDefault(this.props.numColumns);
        if (onViewableItemsChanged) {
          if (numColumns > 1) {
            var changed = [];
            var viewableItems = [];
            info.viewableItems.forEach((v) => this._pushMultiColumnViewable(viewableItems, v));
            info.changed.forEach((v) => this._pushMultiColumnViewable(changed, v));
            onViewableItemsChanged({
              viewableItems,
              changed
            });
          } else {
            onViewableItemsChanged(info);
          }
        }
      };
    }
    // $FlowFixMe[missing-local-annot]
    render() {
      var _this$props = this.props, numColumns = _this$props.numColumns, columnWrapperStyle = _this$props.columnWrapperStyle, _removeClippedSubviews = _this$props.removeClippedSubviews, _this$props$strictMod = _this$props.strictMode, strictMode = _this$props$strictMod === void 0 ? false : _this$props$strictMod, restProps = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
      var renderer = strictMode ? this._memoizedRenderer : this._renderer;
      return (
        // $FlowFixMe[incompatible-exact] - `restProps` (`Props`) is inexact.
        /* @__PURE__ */ React.createElement(_VirtualizedList.default, (0, _extends2.default)({}, restProps, {
          getItem: this._getItem,
          getItemCount: this._getItemCount,
          keyExtractor: this._keyExtractor,
          ref: this._captureRef,
          viewabilityConfigCallbackPairs: this._virtualizedListPairs,
          removeClippedSubviews: removeClippedSubviewsOrDefault(_removeClippedSubviews)
        }, renderer(this.props.ListItemComponent, this.props.renderItem, columnWrapperStyle, numColumns, this.props.extraData)))
      );
    }
  };
  var styles2 = _StyleSheet.default.create({
    row: {
      flexDirection: "row"
    }
  });
  FlatList.default = FlatList$12;
  return FlatList;
}
var hasRequiredFlatList;
function requireFlatList() {
  if (hasRequiredFlatList) return FlatList$1;
  hasRequiredFlatList = 1;
  Object.defineProperty(FlatList$1, "__esModule", {
    value: true
  });
  FlatList$1.default = void 0;
  var _FlatList = _interopRequireDefault(/* @__PURE__ */ requireFlatList$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  FlatList$1.default = _FlatList.default;
  return FlatList$1;
}
var createAnimatedComponent = {};
var useAnimatedProps = {};
var AnimatedProps = {};
var AnimatedEvent = {};
var AnimatedValue = {};
var AnimatedInterpolation = {};
var AnimatedWithChildren = {};
var AnimatedNode = {};
var NativeAnimatedHelper = {};
var NativeAnimatedModule = {};
var TurboModuleRegistry = {};
var hasRequiredTurboModuleRegistry;
function requireTurboModuleRegistry() {
  if (hasRequiredTurboModuleRegistry) return TurboModuleRegistry;
  hasRequiredTurboModuleRegistry = 1;
  Object.defineProperty(TurboModuleRegistry, "__esModule", {
    value: true
  });
  TurboModuleRegistry.get = get;
  TurboModuleRegistry.getEnforcing = getEnforcing;
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function get(name) {
    return null;
  }
  function getEnforcing(name) {
    var module = get();
    (0, _invariant.default)(module != null, "TurboModuleRegistry.getEnforcing(...): '" + name + "' could not be found. Verify that a module by this name is registered in the native binary.");
    return module;
  }
  return TurboModuleRegistry;
}
var hasRequiredNativeAnimatedModule;
function requireNativeAnimatedModule() {
  if (hasRequiredNativeAnimatedModule) return NativeAnimatedModule;
  hasRequiredNativeAnimatedModule = 1;
  Object.defineProperty(NativeAnimatedModule, "__esModule", {
    value: true
  });
  NativeAnimatedModule.default = void 0;
  var TurboModuleRegistry2 = _interopRequireWildcard(/* @__PURE__ */ requireTurboModuleRegistry());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  NativeAnimatedModule.default = TurboModuleRegistry2.get("NativeAnimatedModule");
  return NativeAnimatedModule;
}
var NativeAnimatedTurboModule = {};
var hasRequiredNativeAnimatedTurboModule;
function requireNativeAnimatedTurboModule() {
  if (hasRequiredNativeAnimatedTurboModule) return NativeAnimatedTurboModule;
  hasRequiredNativeAnimatedTurboModule = 1;
  Object.defineProperty(NativeAnimatedTurboModule, "__esModule", {
    value: true
  });
  NativeAnimatedTurboModule.default = void 0;
  var TurboModuleRegistry2 = _interopRequireWildcard(/* @__PURE__ */ requireTurboModuleRegistry());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  NativeAnimatedTurboModule.default = TurboModuleRegistry2.get("NativeAnimatedTurboModule");
  return NativeAnimatedTurboModule;
}
var NativeEventEmitter$1 = {};
var RCTDeviceEventEmitter = {};
var hasRequiredRCTDeviceEventEmitter;
function requireRCTDeviceEventEmitter() {
  if (hasRequiredRCTDeviceEventEmitter) return RCTDeviceEventEmitter;
  hasRequiredRCTDeviceEventEmitter = 1;
  Object.defineProperty(RCTDeviceEventEmitter, "__esModule", {
    value: true
  });
  RCTDeviceEventEmitter.default = void 0;
  var _EventEmitter = _interopRequireDefault(/* @__PURE__ */ requireEventEmitter());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  RCTDeviceEventEmitter.default = new _EventEmitter.default();
  return RCTDeviceEventEmitter;
}
var hasRequiredNativeEventEmitter$1;
function requireNativeEventEmitter$1() {
  if (hasRequiredNativeEventEmitter$1) return NativeEventEmitter$1;
  hasRequiredNativeEventEmitter$1 = 1;
  Object.defineProperty(NativeEventEmitter$1, "__esModule", {
    value: true
  });
  NativeEventEmitter$1.default = void 0;
  var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform$1());
  var _RCTDeviceEventEmitter = _interopRequireDefault(/* @__PURE__ */ requireRCTDeviceEventEmitter());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  class NativeEventEmitter2 {
    constructor(nativeModule) {
      if (_Platform.default.OS === "ios") {
        (0, _invariant.default)(nativeModule != null, "`new NativeEventEmitter()` requires a non-null argument.");
        this._nativeModule = nativeModule;
      }
    }
    addListener(eventType, listener, context) {
      var _this$_nativeModule;
      (_this$_nativeModule = this._nativeModule) == null ? void 0 : _this$_nativeModule.addListener(eventType);
      var subscription = _RCTDeviceEventEmitter.default.addListener(eventType, listener, context);
      return {
        remove: () => {
          if (subscription != null) {
            var _this$_nativeModule2;
            (_this$_nativeModule2 = this._nativeModule) == null ? void 0 : _this$_nativeModule2.removeListeners(1);
            subscription.remove();
            subscription = null;
          }
        }
      };
    }
    /**
     * @deprecated Use `remove` on the EventSubscription from `addListener`.
     */
    removeListener(eventType, listener) {
      var _this$_nativeModule3;
      (_this$_nativeModule3 = this._nativeModule) == null ? void 0 : _this$_nativeModule3.removeListeners(1);
      _RCTDeviceEventEmitter.default.removeListener(eventType, listener);
    }
    emit(eventType) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      _RCTDeviceEventEmitter.default.emit(eventType, ...args);
    }
    removeAllListeners(eventType) {
      var _this$_nativeModule4;
      (0, _invariant.default)(eventType != null, "`NativeEventEmitter.removeAllListener()` requires a non-null argument.");
      (_this$_nativeModule4 = this._nativeModule) == null ? void 0 : _this$_nativeModule4.removeListeners(this.listenerCount(eventType));
      _RCTDeviceEventEmitter.default.removeAllListeners(eventType);
    }
    listenerCount(eventType) {
      return _RCTDeviceEventEmitter.default.listenerCount(eventType);
    }
  }
  NativeEventEmitter$1.default = NativeEventEmitter2;
  return NativeEventEmitter$1;
}
var Platform = {};
var hasRequiredPlatform;
function requirePlatform() {
  if (hasRequiredPlatform) return Platform;
  hasRequiredPlatform = 1;
  Object.defineProperty(Platform, "__esModule", {
    value: true
  });
  Platform.default = void 0;
  var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  Platform.default = _Platform.default;
  return Platform;
}
var ReactNativeFeatureFlags = {};
var hasRequiredReactNativeFeatureFlags;
function requireReactNativeFeatureFlags() {
  if (hasRequiredReactNativeFeatureFlags) return ReactNativeFeatureFlags;
  hasRequiredReactNativeFeatureFlags = 1;
  Object.defineProperty(ReactNativeFeatureFlags, "__esModule", {
    value: true
  });
  ReactNativeFeatureFlags.default = void 0;
  var ReactNativeFeatureFlags$1 = {
    isLayoutAnimationEnabled: () => true,
    shouldEmitW3CPointerEvents: () => false,
    shouldPressibilityUseW3CPointerEventsForHover: () => false,
    animatedShouldDebounceQueueFlush: () => false,
    animatedShouldUseSingleOp: () => false
  };
  ReactNativeFeatureFlags.default = ReactNativeFeatureFlags$1;
  return ReactNativeFeatureFlags;
}
var hasRequiredNativeAnimatedHelper;
function requireNativeAnimatedHelper() {
  if (hasRequiredNativeAnimatedHelper) return NativeAnimatedHelper;
  hasRequiredNativeAnimatedHelper = 1;
  Object.defineProperty(NativeAnimatedHelper, "__esModule", {
    value: true
  });
  NativeAnimatedHelper.API = void 0;
  NativeAnimatedHelper.addWhitelistedInterpolationParam = addWhitelistedInterpolationParam;
  NativeAnimatedHelper.addWhitelistedStyleProp = addWhitelistedStyleProp;
  NativeAnimatedHelper.addWhitelistedTransformProp = addWhitelistedTransformProp;
  NativeAnimatedHelper.assertNativeAnimatedModule = assertNativeAnimatedModule;
  NativeAnimatedHelper.default = void 0;
  NativeAnimatedHelper.generateNewAnimationId = generateNewAnimationId;
  NativeAnimatedHelper.generateNewNodeTag = generateNewNodeTag;
  NativeAnimatedHelper.isSupportedColorStyleProp = isSupportedColorStyleProp;
  NativeAnimatedHelper.isSupportedInterpolationParam = isSupportedInterpolationParam;
  NativeAnimatedHelper.isSupportedStyleProp = isSupportedStyleProp;
  NativeAnimatedHelper.isSupportedTransformProp = isSupportedTransformProp;
  NativeAnimatedHelper.shouldUseNativeDriver = shouldUseNativeDriver;
  NativeAnimatedHelper.transformDataType = transformDataType;
  NativeAnimatedHelper.validateInterpolation = validateInterpolation;
  NativeAnimatedHelper.validateStyles = validateStyles;
  NativeAnimatedHelper.validateTransform = validateTransform;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _NativeAnimatedModule = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedModule());
  var _NativeAnimatedTurboModule = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedTurboModule());
  var _NativeEventEmitter = _interopRequireDefault(/* @__PURE__ */ requireNativeEventEmitter$1());
  var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform());
  var _ReactNativeFeatureFlags = _interopRequireDefault(/* @__PURE__ */ requireReactNativeFeatureFlags());
  var _invariant = _interopRequireDefault(requireInvariant());
  _interopRequireDefault(/* @__PURE__ */ requireRCTDeviceEventEmitter());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var NativeAnimatedModule2 = _Platform.default.OS === "ios" && commonjsGlobal.RN$Bridgeless === true ? _NativeAnimatedTurboModule.default : _NativeAnimatedModule.default;
  var __nativeAnimatedNodeTagCount = 1;
  var __nativeAnimationIdCount = 1;
  var nativeEventEmitter;
  var waitingForQueuedOperations = /* @__PURE__ */ new Set();
  var queueOperations = false;
  var queue = [];
  _Platform.default.OS === "android" && !!(NativeAnimatedModule2 != null && NativeAnimatedModule2.queueAndExecuteBatchedOperations) && _ReactNativeFeatureFlags.default.animatedShouldUseSingleOp();
  var flushQueueTimeout = null;
  var nativeOps = NativeAnimatedModule2;
  var API = NativeAnimatedHelper.API = {
    getValue: function getValue(tag, saveValueCallback) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      {
        API.queueOperation(nativeOps.getValue, tag, saveValueCallback);
      }
    },
    setWaitingForIdentifier: function setWaitingForIdentifier(id) {
      waitingForQueuedOperations.add(id);
      queueOperations = true;
      if (_ReactNativeFeatureFlags.default.animatedShouldDebounceQueueFlush() && flushQueueTimeout) {
        clearTimeout(flushQueueTimeout);
      }
    },
    unsetWaitingForIdentifier: function unsetWaitingForIdentifier(id) {
      waitingForQueuedOperations.delete(id);
      if (waitingForQueuedOperations.size === 0) {
        queueOperations = false;
        API.disableQueue();
      }
    },
    disableQueue: function disableQueue() {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      if (_ReactNativeFeatureFlags.default.animatedShouldDebounceQueueFlush()) {
        var prevTimeout = flushQueueTimeout;
        clearImmediate(prevTimeout);
        flushQueueTimeout = setImmediate(API.flushQueue);
      } else {
        API.flushQueue();
      }
    },
    flushQueue: function flushQueue() {
    },
    queueOperation: function queueOperation(fn) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (queueOperations || queue.length !== 0) {
        queue.push(() => fn(...args));
      } else {
        fn(...args);
      }
    },
    createAnimatedNode: function createAnimatedNode(tag, config) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.createAnimatedNode, tag, config);
    },
    updateAnimatedNodeConfig: function updateAnimatedNodeConfig(tag, config) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
    },
    startListeningToAnimatedNodeValue: function startListeningToAnimatedNodeValue(tag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.startListeningToAnimatedNodeValue, tag);
    },
    stopListeningToAnimatedNodeValue: function stopListeningToAnimatedNodeValue(tag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.stopListeningToAnimatedNodeValue, tag);
    },
    connectAnimatedNodes: function connectAnimatedNodes(parentTag, childTag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.connectAnimatedNodes, parentTag, childTag);
    },
    disconnectAnimatedNodes: function disconnectAnimatedNodes(parentTag, childTag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.disconnectAnimatedNodes, parentTag, childTag);
    },
    startAnimatingNode: function startAnimatingNode(animationId, nodeTag, config, endCallback) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      {
        API.queueOperation(nativeOps.startAnimatingNode, animationId, nodeTag, config, endCallback);
      }
    },
    stopAnimation: function stopAnimation(animationId) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.stopAnimation, animationId);
    },
    setAnimatedNodeValue: function setAnimatedNodeValue(nodeTag, value) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.setAnimatedNodeValue, nodeTag, value);
    },
    setAnimatedNodeOffset: function setAnimatedNodeOffset(nodeTag, offset) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.setAnimatedNodeOffset, nodeTag, offset);
    },
    flattenAnimatedNodeOffset: function flattenAnimatedNodeOffset(nodeTag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.flattenAnimatedNodeOffset, nodeTag);
    },
    extractAnimatedNodeOffset: function extractAnimatedNodeOffset(nodeTag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.extractAnimatedNodeOffset, nodeTag);
    },
    connectAnimatedNodeToView: function connectAnimatedNodeToView(nodeTag, viewTag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.connectAnimatedNodeToView, nodeTag, viewTag);
    },
    disconnectAnimatedNodeFromView: function disconnectAnimatedNodeFromView(nodeTag, viewTag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.disconnectAnimatedNodeFromView, nodeTag, viewTag);
    },
    restoreDefaultValues: function restoreDefaultValues(nodeTag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      if (nativeOps.restoreDefaultValues != null) {
        API.queueOperation(nativeOps.restoreDefaultValues, nodeTag);
      }
    },
    dropAnimatedNode: function dropAnimatedNode(tag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.dropAnimatedNode, tag);
    },
    addAnimatedEventToView: function addAnimatedEventToView(viewTag, eventName, eventMapping) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.addAnimatedEventToView, viewTag, eventName, eventMapping);
    },
    removeAnimatedEventFromView(viewTag, eventName, animatedNodeTag) {
      (0, _invariant.default)(nativeOps, "Native animated module is not available");
      API.queueOperation(nativeOps.removeAnimatedEventFromView, viewTag, eventName, animatedNodeTag);
    }
  };
  var SUPPORTED_COLOR_STYLES = {
    backgroundColor: true,
    borderBottomColor: true,
    borderColor: true,
    borderEndColor: true,
    borderLeftColor: true,
    borderRightColor: true,
    borderStartColor: true,
    borderTopColor: true,
    color: true,
    tintColor: true
  };
  var SUPPORTED_STYLES = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, SUPPORTED_COLOR_STYLES), {}, {
    borderBottomEndRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderBottomStartRadius: true,
    borderRadius: true,
    borderTopEndRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderTopStartRadius: true,
    elevation: true,
    opacity: true,
    transform: true,
    zIndex: true,
    /* ios styles */
    shadowOpacity: true,
    shadowRadius: true,
    /* legacy android transform properties */
    scaleX: true,
    scaleY: true,
    translateX: true,
    translateY: true
  });
  var SUPPORTED_TRANSFORMS = {
    translateX: true,
    translateY: true,
    scale: true,
    scaleX: true,
    scaleY: true,
    rotate: true,
    rotateX: true,
    rotateY: true,
    rotateZ: true,
    perspective: true
  };
  var SUPPORTED_INTERPOLATION_PARAMS = {
    inputRange: true,
    outputRange: true,
    extrapolate: true,
    extrapolateRight: true,
    extrapolateLeft: true
  };
  function addWhitelistedStyleProp(prop) {
    SUPPORTED_STYLES[prop] = true;
  }
  function addWhitelistedTransformProp(prop) {
    SUPPORTED_TRANSFORMS[prop] = true;
  }
  function addWhitelistedInterpolationParam(param) {
    SUPPORTED_INTERPOLATION_PARAMS[param] = true;
  }
  function isSupportedColorStyleProp(prop) {
    return SUPPORTED_COLOR_STYLES.hasOwnProperty(prop);
  }
  function isSupportedStyleProp(prop) {
    return SUPPORTED_STYLES.hasOwnProperty(prop);
  }
  function isSupportedTransformProp(prop) {
    return SUPPORTED_TRANSFORMS.hasOwnProperty(prop);
  }
  function isSupportedInterpolationParam(param) {
    return SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(param);
  }
  function validateTransform(configs) {
    configs.forEach((config) => {
      if (!isSupportedTransformProp(config.property)) {
        throw new Error("Property '" + config.property + "' is not supported by native animated module");
      }
    });
  }
  function validateStyles(styles2) {
    for (var _key2 in styles2) {
      if (!isSupportedStyleProp(_key2)) {
        throw new Error("Style property '" + _key2 + "' is not supported by native animated module");
      }
    }
  }
  function validateInterpolation(config) {
    for (var _key3 in config) {
      if (!isSupportedInterpolationParam(_key3)) {
        throw new Error("Interpolation property '" + _key3 + "' is not supported by native animated module");
      }
    }
  }
  function generateNewNodeTag() {
    return __nativeAnimatedNodeTagCount++;
  }
  function generateNewAnimationId() {
    return __nativeAnimationIdCount++;
  }
  function assertNativeAnimatedModule() {
    (0, _invariant.default)(NativeAnimatedModule2, "Native animated module is not available");
  }
  var _warnedMissingNativeAnimated = false;
  function shouldUseNativeDriver(config) {
    if (config.useNativeDriver == null) {
      console.warn("Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`");
    }
    if (config.useNativeDriver === true && !NativeAnimatedModule2) {
      if (!_warnedMissingNativeAnimated) {
        console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md");
        _warnedMissingNativeAnimated = true;
      }
      return false;
    }
    return config.useNativeDriver || false;
  }
  function transformDataType(value) {
    if (typeof value !== "string") {
      return value;
    }
    if (/deg$/.test(value)) {
      var degrees = parseFloat(value) || 0;
      var radians = degrees * Math.PI / 180;
      return radians;
    } else {
      return value;
    }
  }
  NativeAnimatedHelper.default = {
    API,
    isSupportedColorStyleProp,
    isSupportedStyleProp,
    isSupportedTransformProp,
    isSupportedInterpolationParam,
    addWhitelistedStyleProp,
    addWhitelistedTransformProp,
    addWhitelistedInterpolationParam,
    validateStyles,
    validateTransform,
    validateInterpolation,
    generateNewNodeTag,
    generateNewAnimationId,
    assertNativeAnimatedModule,
    shouldUseNativeDriver,
    transformDataType,
    // $FlowExpectedError[unsafe-getters-setters] - unsafe getter lint suppresion
    // $FlowExpectedError[missing-type-arg] - unsafe getter lint suppresion
    get nativeEventEmitter() {
      if (!nativeEventEmitter) {
        nativeEventEmitter = new _NativeEventEmitter.default(
          // T88715063: NativeEventEmitter only used this parameter on iOS. Now it uses it on all platforms, so this code was modified automatically to preserve its behavior
          // If you want to use the native module on other platforms, please remove this condition and test its behavior
          _Platform.default.OS !== "ios" ? null : NativeAnimatedModule2
        );
      }
      return nativeEventEmitter;
    }
  };
  return NativeAnimatedHelper;
}
var hasRequiredAnimatedNode;
function requireAnimatedNode() {
  if (hasRequiredAnimatedNode) return AnimatedNode;
  hasRequiredAnimatedNode = 1;
  Object.defineProperty(AnimatedNode, "__esModule", {
    value: true
  });
  AnimatedNode.default = void 0;
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var NativeAnimatedAPI = _NativeAnimatedHelper.default.API;
  var _uniqueId = 1;
  let AnimatedNode$1 = class AnimatedNode {
    __attach() {
    }
    __detach() {
      if (this.__isNative && this.__nativeTag != null) {
        _NativeAnimatedHelper.default.API.dropAnimatedNode(this.__nativeTag);
        this.__nativeTag = void 0;
      }
    }
    __getValue() {
    }
    __getAnimatedValue() {
      return this.__getValue();
    }
    __addChild(child) {
    }
    __removeChild(child) {
    }
    __getChildren() {
      return [];
    }
    /* Methods and props used by native Animated impl */
    constructor() {
      this._listeners = {};
    }
    __makeNative(platformConfig) {
      if (!this.__isNative) {
        throw new Error('This node cannot be made a "native" animated node');
      }
      this._platformConfig = platformConfig;
      if (this.hasListeners()) {
        this._startListeningToNativeValueUpdates();
      }
    }
    /**
     * Adds an asynchronous listener to the value so you can observe updates from
     * animations.  This is useful because there is no way to
     * synchronously read the value because it might be driven natively.
     *
     * See https://reactnative.dev/docs/animatedvalue#addlistener
     */
    addListener(callback) {
      var id = String(_uniqueId++);
      this._listeners[id] = callback;
      if (this.__isNative) {
        this._startListeningToNativeValueUpdates();
      }
      return id;
    }
    /**
     * Unregister a listener. The `id` param shall match the identifier
     * previously returned by `addListener()`.
     *
     * See https://reactnative.dev/docs/animatedvalue#removelistener
     */
    removeListener(id) {
      delete this._listeners[id];
      if (this.__isNative && !this.hasListeners()) {
        this._stopListeningForNativeValueUpdates();
      }
    }
    /**
     * Remove all registered listeners.
     *
     * See https://reactnative.dev/docs/animatedvalue#removealllisteners
     */
    removeAllListeners() {
      this._listeners = {};
      if (this.__isNative) {
        this._stopListeningForNativeValueUpdates();
      }
    }
    hasListeners() {
      return !!Object.keys(this._listeners).length;
    }
    _startListeningToNativeValueUpdates() {
      if (this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) {
        return;
      }
      if (this.__shouldUpdateListenersForNewNativeTag) {
        this.__shouldUpdateListenersForNewNativeTag = false;
        this._stopListeningForNativeValueUpdates();
      }
      NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());
      this.__nativeAnimatedValueListener = _NativeAnimatedHelper.default.nativeEventEmitter.addListener("onAnimatedValueUpdate", (data) => {
        if (data.tag !== this.__getNativeTag()) {
          return;
        }
        this.__onAnimatedValueUpdateReceived(data.value);
      });
    }
    __onAnimatedValueUpdateReceived(value) {
      this.__callListeners(value);
    }
    __callListeners(value) {
      for (var _key in this._listeners) {
        this._listeners[_key]({
          value
        });
      }
    }
    _stopListeningForNativeValueUpdates() {
      if (!this.__nativeAnimatedValueListener) {
        return;
      }
      this.__nativeAnimatedValueListener.remove();
      this.__nativeAnimatedValueListener = null;
      NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());
    }
    __getNativeTag() {
      var _this$__nativeTag;
      _NativeAnimatedHelper.default.assertNativeAnimatedModule();
      (0, _invariant.default)(this.__isNative, 'Attempt to get native tag from node not marked as "native"');
      var nativeTag = (_this$__nativeTag = this.__nativeTag) !== null && _this$__nativeTag !== void 0 ? _this$__nativeTag : _NativeAnimatedHelper.default.generateNewNodeTag();
      if (this.__nativeTag == null) {
        this.__nativeTag = nativeTag;
        var config = this.__getNativeConfig();
        if (this._platformConfig) {
          config.platformConfig = this._platformConfig;
        }
        _NativeAnimatedHelper.default.API.createAnimatedNode(nativeTag, config);
        this.__shouldUpdateListenersForNewNativeTag = true;
      }
      return nativeTag;
    }
    __getNativeConfig() {
      throw new Error("This JS animated node type cannot be used as native animated node");
    }
    toJSON() {
      return this.__getValue();
    }
    __getPlatformConfig() {
      return this._platformConfig;
    }
    __setPlatformConfig(platformConfig) {
      this._platformConfig = platformConfig;
    }
  };
  AnimatedNode.default = AnimatedNode$1;
  return AnimatedNode;
}
var hasRequiredAnimatedWithChildren;
function requireAnimatedWithChildren() {
  if (hasRequiredAnimatedWithChildren) return AnimatedWithChildren;
  hasRequiredAnimatedWithChildren = 1;
  Object.defineProperty(AnimatedWithChildren, "__esModule", {
    value: true
  });
  AnimatedWithChildren.default = void 0;
  var _createForOfIteratorHelperLoose2 = _interopRequireDefault(requireCreateForOfIteratorHelperLoose());
  var _AnimatedNode = _interopRequireDefault(/* @__PURE__ */ requireAnimatedNode());
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedWithChildren$1 = class AnimatedWithChildren extends _AnimatedNode.default {
    constructor() {
      super();
      this._children = [];
    }
    __makeNative(platformConfig) {
      if (!this.__isNative) {
        this.__isNative = true;
        for (var _iterator = (0, _createForOfIteratorHelperLoose2.default)(this._children), _step; !(_step = _iterator()).done; ) {
          var child = _step.value;
          child.__makeNative(platformConfig);
          _NativeAnimatedHelper.default.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
        }
      }
      super.__makeNative(platformConfig);
    }
    __addChild(child) {
      if (this._children.length === 0) {
        this.__attach();
      }
      this._children.push(child);
      if (this.__isNative) {
        child.__makeNative(this.__getPlatformConfig());
        _NativeAnimatedHelper.default.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
      }
    }
    __removeChild(child) {
      var index = this._children.indexOf(child);
      if (index === -1) {
        console.warn("Trying to remove a child that doesn't exist");
        return;
      }
      if (this.__isNative && child.__isNative) {
        _NativeAnimatedHelper.default.API.disconnectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
      }
      this._children.splice(index, 1);
      if (this._children.length === 0) {
        this.__detach();
      }
    }
    __getChildren() {
      return this._children;
    }
    __callListeners(value) {
      super.__callListeners(value);
      if (!this.__isNative) {
        for (var _iterator2 = (0, _createForOfIteratorHelperLoose2.default)(this._children), _step2; !(_step2 = _iterator2()).done; ) {
          var child = _step2.value;
          if (child.__getValue) {
            child.__callListeners(child.__getValue());
          }
        }
      }
    }
  };
  AnimatedWithChildren.default = AnimatedWithChildren$1;
  return AnimatedWithChildren;
}
var hasRequiredAnimatedInterpolation;
function requireAnimatedInterpolation() {
  if (hasRequiredAnimatedInterpolation) return AnimatedInterpolation;
  hasRequiredAnimatedInterpolation = 1;
  Object.defineProperty(AnimatedInterpolation, "__esModule", {
    value: true
  });
  AnimatedInterpolation.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  var _invariant = _interopRequireDefault(requireInvariant());
  var _normalizeColors = _interopRequireDefault(requireNormalizeColors());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var linear = (t) => t;
  function createInterpolation(config) {
    if (config.outputRange && typeof config.outputRange[0] === "string") {
      return createInterpolationFromStringOutputRange(config);
    }
    var outputRange = config.outputRange;
    var inputRange = config.inputRange;
    var easing = config.easing || linear;
    var extrapolateLeft = "extend";
    if (config.extrapolateLeft !== void 0) {
      extrapolateLeft = config.extrapolateLeft;
    } else if (config.extrapolate !== void 0) {
      extrapolateLeft = config.extrapolate;
    }
    var extrapolateRight = "extend";
    if (config.extrapolateRight !== void 0) {
      extrapolateRight = config.extrapolateRight;
    } else if (config.extrapolate !== void 0) {
      extrapolateRight = config.extrapolate;
    }
    return (input) => {
      (0, _invariant.default)(typeof input === "number", "Cannot interpolation an input which is not a number");
      var range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight);
    };
  }
  function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight) {
    var result = input;
    if (result < inputMin) {
      if (extrapolateLeft === "identity") {
        return result;
      } else if (extrapolateLeft === "clamp") {
        result = inputMin;
      } else ;
    }
    if (result > inputMax) {
      if (extrapolateRight === "identity") {
        return result;
      } else if (extrapolateRight === "clamp") {
        result = inputMax;
      } else ;
    }
    if (outputMin === outputMax) {
      return outputMin;
    }
    if (inputMin === inputMax) {
      if (input <= inputMin) {
        return outputMin;
      }
      return outputMax;
    }
    if (inputMin === -Infinity) {
      result = -result;
    } else if (inputMax === Infinity) {
      result = result - inputMin;
    } else {
      result = (result - inputMin) / (inputMax - inputMin);
    }
    result = easing(result);
    if (outputMin === -Infinity) {
      result = -result;
    } else if (outputMax === Infinity) {
      result = result + outputMin;
    } else {
      result = result * (outputMax - outputMin) + outputMin;
    }
    return result;
  }
  function colorToRgba(input) {
    var normalizedColor = (0, _normalizeColors.default)(input);
    if (normalizedColor === null || typeof normalizedColor !== "number") {
      return input;
    }
    normalizedColor = normalizedColor || 0;
    var r = (normalizedColor & 4278190080) >>> 24;
    var g = (normalizedColor & 16711680) >>> 16;
    var b = (normalizedColor & 65280) >>> 8;
    var a = (normalizedColor & 255) / 255;
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  }
  var stringShapeRegex = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
  function createInterpolationFromStringOutputRange(config) {
    var outputRange = config.outputRange;
    (0, _invariant.default)(outputRange.length >= 2, "Bad output range");
    outputRange = outputRange.map(colorToRgba);
    checkPattern(outputRange);
    var outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
    outputRange.forEach((value) => {
      value.match(stringShapeRegex).forEach((number, i) => {
        outputRanges[i].push(+number);
      });
    });
    var interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
      return createInterpolation((0, _objectSpread2.default)((0, _objectSpread2.default)({}, config), {}, {
        outputRange: outputRanges[i]
      }));
    });
    var shouldRound = isRgbOrRgba(outputRange[0]);
    return (input) => {
      var i = 0;
      return outputRange[0].replace(stringShapeRegex, () => {
        var val = +interpolations[i++](input);
        if (shouldRound) {
          val = i < 4 ? Math.round(val) : Math.round(val * 1e3) / 1e3;
        }
        return String(val);
      });
    };
  }
  function isRgbOrRgba(range) {
    return typeof range === "string" && range.startsWith("rgb");
  }
  function checkPattern(arr) {
    var pattern = arr[0].replace(stringShapeRegex, "");
    for (var i = 1; i < arr.length; ++i) {
      (0, _invariant.default)(pattern === arr[i].replace(stringShapeRegex, ""), "invalid pattern " + arr[0] + " and " + arr[i]);
    }
  }
  function findRange(input, inputRange) {
    var i;
    for (i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) {
        break;
      }
    }
    return i - 1;
  }
  let AnimatedInterpolation$1 = class AnimatedInterpolation2 extends _AnimatedWithChildren.default {
    // Export for testing.
    constructor(parent, config) {
      super();
      this._parent = parent;
      this._config = config;
      this._interpolation = createInterpolation(config);
    }
    __makeNative(platformConfig) {
      this._parent.__makeNative(platformConfig);
      super.__makeNative(platformConfig);
    }
    __getValue() {
      var parentValue = this._parent.__getValue();
      (0, _invariant.default)(typeof parentValue === "number", "Cannot interpolate an input which is not a number.");
      return this._interpolation(parentValue);
    }
    interpolate(config) {
      return new AnimatedInterpolation2(this, config);
    }
    __attach() {
      this._parent.__addChild(this);
    }
    __detach() {
      this._parent.__removeChild(this);
      super.__detach();
    }
    __transformDataType(range) {
      return range.map(_NativeAnimatedHelper.default.transformDataType);
    }
    __getNativeConfig() {
      return {
        inputRange: this._config.inputRange,
        // Only the `outputRange` can contain strings so we don't need to transform `inputRange` here
        outputRange: this.__transformDataType(this._config.outputRange),
        extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || "extend",
        extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || "extend",
        type: "interpolation"
      };
    }
  };
  AnimatedInterpolation$1.__createInterpolation = createInterpolation;
  AnimatedInterpolation.default = AnimatedInterpolation$1;
  return AnimatedInterpolation;
}
var hasRequiredAnimatedValue;
function requireAnimatedValue() {
  if (hasRequiredAnimatedValue) return AnimatedValue;
  hasRequiredAnimatedValue = 1;
  Object.defineProperty(AnimatedValue, "__esModule", {
    value: true
  });
  AnimatedValue.default = void 0;
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  var _InteractionManager = _interopRequireDefault(/* @__PURE__ */ requireInteractionManager());
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var NativeAnimatedAPI = _NativeAnimatedHelper.default.API;
  function _flush(rootNode) {
    var animatedStyles = /* @__PURE__ */ new Set();
    function findAnimatedStyles(node) {
      if (typeof node.update === "function") {
        animatedStyles.add(node);
      } else {
        node.__getChildren().forEach(findAnimatedStyles);
      }
    }
    findAnimatedStyles(rootNode);
    animatedStyles.forEach((animatedStyle) => animatedStyle.update());
  }
  function _executeAsAnimatedBatch(id, operation) {
    NativeAnimatedAPI.setWaitingForIdentifier(id);
    operation();
    NativeAnimatedAPI.unsetWaitingForIdentifier(id);
  }
  let AnimatedValue$1 = class AnimatedValue extends _AnimatedWithChildren.default {
    constructor(value, config) {
      super();
      if (typeof value !== "number") {
        throw new Error("AnimatedValue: Attempting to set value to undefined");
      }
      this._startingValue = this._value = value;
      this._offset = 0;
      this._animation = null;
      if (config && config.useNativeDriver) {
        this.__makeNative();
      }
    }
    __detach() {
      if (this.__isNative) {
        NativeAnimatedAPI.getValue(this.__getNativeTag(), (value) => {
          this._value = value - this._offset;
        });
      }
      this.stopAnimation();
      super.__detach();
    }
    __getValue() {
      return this._value + this._offset;
    }
    /**
     * Directly set the value.  This will stop any animations running on the value
     * and update all the bound properties.
     *
     * See https://reactnative.dev/docs/animatedvalue#setvalue
     */
    setValue(value) {
      if (this._animation) {
        this._animation.stop();
        this._animation = null;
      }
      this._updateValue(
        value,
        !this.__isNative
        /* don't perform a flush for natively driven values */
      );
      if (this.__isNative) {
        _executeAsAnimatedBatch(this.__getNativeTag().toString(), () => NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(), value));
      }
    }
    /**
     * Sets an offset that is applied on top of whatever value is set, whether via
     * `setValue`, an animation, or `Animated.event`.  Useful for compensating
     * things like the start of a pan gesture.
     *
     * See https://reactnative.dev/docs/animatedvalue#setoffset
     */
    setOffset(offset) {
      this._offset = offset;
      if (this.__isNative) {
        NativeAnimatedAPI.setAnimatedNodeOffset(this.__getNativeTag(), offset);
      }
    }
    /**
     * Merges the offset value into the base value and resets the offset to zero.
     * The final output of the value is unchanged.
     *
     * See https://reactnative.dev/docs/animatedvalue#flattenoffset
     */
    flattenOffset() {
      this._value += this._offset;
      this._offset = 0;
      if (this.__isNative) {
        NativeAnimatedAPI.flattenAnimatedNodeOffset(this.__getNativeTag());
      }
    }
    /**
     * Sets the offset value to the base value, and resets the base value to zero.
     * The final output of the value is unchanged.
     *
     * See https://reactnative.dev/docs/animatedvalue#extractoffset
     */
    extractOffset() {
      this._offset += this._value;
      this._value = 0;
      if (this.__isNative) {
        NativeAnimatedAPI.extractAnimatedNodeOffset(this.__getNativeTag());
      }
    }
    /**
     * Stops any running animation or tracking. `callback` is invoked with the
     * final value after stopping the animation, which is useful for updating
     * state to match the animation position with layout.
     *
     * See https://reactnative.dev/docs/animatedvalue#stopanimation
     */
    stopAnimation(callback) {
      this.stopTracking();
      this._animation && this._animation.stop();
      this._animation = null;
      if (callback) {
        if (this.__isNative) {
          NativeAnimatedAPI.getValue(this.__getNativeTag(), callback);
        } else {
          callback(this.__getValue());
        }
      }
    }
    /**
     * Stops any animation and resets the value to its original.
     *
     * See https://reactnative.dev/docs/animatedvalue#resetanimation
     */
    resetAnimation(callback) {
      this.stopAnimation(callback);
      this._value = this._startingValue;
      if (this.__isNative) {
        NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(), this._startingValue);
      }
    }
    __onAnimatedValueUpdateReceived(value) {
      this._updateValue(
        value,
        false
        /*flush*/
      );
    }
    /**
     * Interpolates the value before updating the property, e.g. mapping 0-1 to
     * 0-10.
     */
    interpolate(config) {
      return new _AnimatedInterpolation.default(this, config);
    }
    /**
     * Typically only used internally, but could be used by a custom Animation
     * class.
     *
     * See https://reactnative.dev/docs/animatedvalue#animate
     */
    animate(animation, callback) {
      var handle = null;
      if (animation.__isInteraction) {
        handle = _InteractionManager.default.createInteractionHandle();
      }
      var previousAnimation = this._animation;
      this._animation && this._animation.stop();
      this._animation = animation;
      animation.start(this._value, (value) => {
        this._updateValue(
          value,
          true
          /* flush */
        );
      }, (result) => {
        this._animation = null;
        if (handle !== null) {
          _InteractionManager.default.clearInteractionHandle(handle);
        }
        callback && callback(result);
      }, previousAnimation, this);
    }
    /**
     * Typically only used internally.
     */
    stopTracking() {
      this._tracking && this._tracking.__detach();
      this._tracking = null;
    }
    /**
     * Typically only used internally.
     */
    track(tracking) {
      this.stopTracking();
      this._tracking = tracking;
      this._tracking && this._tracking.update();
    }
    _updateValue(value, flush) {
      if (value === void 0) {
        throw new Error("AnimatedValue: Attempting to set value to undefined");
      }
      this._value = value;
      if (flush) {
        _flush(this);
      }
      super.__callListeners(this.__getValue());
    }
    __getNativeConfig() {
      return {
        type: "value",
        value: this._value,
        offset: this._offset
      };
    }
  };
  AnimatedValue.default = AnimatedValue$1;
  return AnimatedValue;
}
var hasRequiredAnimatedEvent;
function requireAnimatedEvent() {
  if (hasRequiredAnimatedEvent) return AnimatedEvent;
  hasRequiredAnimatedEvent = 1;
  Object.defineProperty(AnimatedEvent, "__esModule", {
    value: true
  });
  AnimatedEvent.AnimatedEvent = void 0;
  AnimatedEvent.attachNativeEvent = attachNativeEvent;
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _NativeAnimatedHelper = _interopRequireWildcard(/* @__PURE__ */ requireNativeAnimatedHelper());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function attachNativeEvent(viewRef, eventName, argMapping) {
    var eventMappings = [];
    var traverse = (value, path) => {
      if (value instanceof _AnimatedValue.default) {
        value.__makeNative();
        eventMappings.push({
          nativeEventPath: path,
          animatedValueTag: value.__getNativeTag()
        });
      } else if (typeof value === "object") {
        for (var _key in value) {
          traverse(value[_key], path.concat(_key));
        }
      }
    };
    (0, _invariant.default)(argMapping[0] && argMapping[0].nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
    traverse(argMapping[0].nativeEvent, []);
    if (viewRef != null) {
      eventMappings.forEach((mapping) => {
        _NativeAnimatedHelper.default.API.addAnimatedEventToView(viewRef, eventName, mapping);
      });
    }
    return {
      detach() {
        if (viewRef != null) {
          eventMappings.forEach((mapping) => {
            _NativeAnimatedHelper.default.API.removeAnimatedEventFromView(
              viewRef,
              eventName,
              // $FlowFixMe[incompatible-call]
              mapping.animatedValueTag
            );
          });
        }
      }
    };
  }
  let AnimatedEvent$1 = class AnimatedEvent {
    constructor(argMapping, config) {
      this._listeners = [];
      this._argMapping = argMapping;
      if (config == null) {
        console.warn("Animated.event now requires a second argument for options");
        config = {
          useNativeDriver: false
        };
      }
      if (config.listener) {
        this.__addListener(config.listener);
      }
      this._callListeners = this._callListeners.bind(this);
      this._attachedEvent = null;
      this.__isNative = (0, _NativeAnimatedHelper.shouldUseNativeDriver)(config);
    }
    __addListener(callback) {
      this._listeners.push(callback);
    }
    __removeListener(callback) {
      this._listeners = this._listeners.filter((listener) => listener !== callback);
    }
    __attach(viewRef, eventName) {
      (0, _invariant.default)(this.__isNative, "Only native driven events need to be attached.");
      this._attachedEvent = attachNativeEvent(viewRef, eventName, this._argMapping);
    }
    __detach(viewTag, eventName) {
      (0, _invariant.default)(this.__isNative, "Only native driven events need to be detached.");
      this._attachedEvent && this._attachedEvent.detach();
    }
    __getHandler() {
      var _this = this;
      if (this.__isNative) {
        {
          return this._callListeners;
        }
      }
      return function() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
          args[_key3] = arguments[_key3];
        }
        var traverse = (recMapping, recEvt, key) => {
          if (recMapping instanceof _AnimatedValue.default) {
            if (typeof recEvt === "number") {
              recMapping.setValue(recEvt);
            }
          } else if (typeof recMapping === "object") {
            for (var mappingKey in recMapping) {
              traverse(recMapping[mappingKey], recEvt[mappingKey]);
            }
          }
        };
        _this._argMapping.forEach((mapping, idx) => {
          traverse(mapping, args[idx]);
        });
        _this._callListeners(...args);
      };
    }
    _callListeners() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this._listeners.forEach((listener) => listener(...args));
    }
  };
  AnimatedEvent.AnimatedEvent = AnimatedEvent$1;
  return AnimatedEvent;
}
var AnimatedStyle = {};
var AnimatedTransform = {};
var hasRequiredAnimatedTransform;
function requireAnimatedTransform() {
  if (hasRequiredAnimatedTransform) return AnimatedTransform;
  hasRequiredAnimatedTransform = 1;
  Object.defineProperty(AnimatedTransform, "__esModule", {
    value: true
  });
  AnimatedTransform.default = void 0;
  var _AnimatedNode = _interopRequireDefault(/* @__PURE__ */ requireAnimatedNode());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedTransform$1 = class AnimatedTransform extends _AnimatedWithChildren.default {
    constructor(transforms) {
      super();
      this._transforms = transforms;
    }
    __makeNative() {
      this._transforms.forEach((transform) => {
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof _AnimatedNode.default) {
            value.__makeNative();
          }
        }
      });
      super.__makeNative();
    }
    __getValue() {
      return this._transforms.map((transform) => {
        var result = {};
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof _AnimatedNode.default) {
            result[key] = value.__getValue();
          } else {
            result[key] = value;
          }
        }
        return result;
      });
    }
    __getAnimatedValue() {
      return this._transforms.map((transform) => {
        var result = {};
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof _AnimatedNode.default) {
            result[key] = value.__getAnimatedValue();
          } else {
            result[key] = value;
          }
        }
        return result;
      });
    }
    __attach() {
      this._transforms.forEach((transform) => {
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof _AnimatedNode.default) {
            value.__addChild(this);
          }
        }
      });
    }
    __detach() {
      this._transforms.forEach((transform) => {
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof _AnimatedNode.default) {
            value.__removeChild(this);
          }
        }
      });
      super.__detach();
    }
    __getNativeConfig() {
      var transConfigs = [];
      this._transforms.forEach((transform) => {
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof _AnimatedNode.default) {
            transConfigs.push({
              type: "animated",
              property: key,
              nodeTag: value.__getNativeTag()
            });
          } else {
            transConfigs.push({
              type: "static",
              property: key,
              value: _NativeAnimatedHelper.default.transformDataType(value)
            });
          }
        }
      });
      _NativeAnimatedHelper.default.validateTransform(transConfigs);
      return {
        type: "transform",
        transforms: transConfigs
      };
    }
  };
  AnimatedTransform.default = AnimatedTransform$1;
  return AnimatedTransform;
}
var hasRequiredAnimatedStyle;
function requireAnimatedStyle() {
  if (hasRequiredAnimatedStyle) return AnimatedStyle;
  hasRequiredAnimatedStyle = 1;
  Object.defineProperty(AnimatedStyle, "__esModule", {
    value: true
  });
  AnimatedStyle.default = void 0;
  var _AnimatedNode = _interopRequireDefault(/* @__PURE__ */ requireAnimatedNode());
  var _AnimatedTransform = _interopRequireDefault(/* @__PURE__ */ requireAnimatedTransform());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var flattenStyle = _StyleSheet.default.flatten;
  function createAnimatedStyle(inputStyle) {
    var style = flattenStyle(inputStyle);
    var animatedStyles = {};
    for (var key in style) {
      var value = style[key];
      if (key === "transform" && Array.isArray(value)) {
        animatedStyles[key] = new _AnimatedTransform.default(value);
      } else if (value instanceof _AnimatedNode.default) {
        animatedStyles[key] = value;
      } else if (value && !Array.isArray(value) && typeof value === "object") {
        animatedStyles[key] = createAnimatedStyle(value);
      }
    }
    return animatedStyles;
  }
  let AnimatedStyle$1 = class AnimatedStyle extends _AnimatedWithChildren.default {
    constructor(style) {
      super();
      this._inputStyle = style;
      this._style = createAnimatedStyle(style);
    }
    // Recursively get values for nested styles (like iOS's shadowOffset)
    _walkStyleAndGetValues(style) {
      var updatedStyle = {};
      for (var key in style) {
        var value = style[key];
        if (value instanceof _AnimatedNode.default) {
          if (!value.__isNative) {
            updatedStyle[key] = value.__getValue();
          }
        } else if (value && !Array.isArray(value) && typeof value === "object") {
          updatedStyle[key] = this._walkStyleAndGetValues(value);
        } else {
          updatedStyle[key] = value;
        }
      }
      return updatedStyle;
    }
    __getValue() {
      return [this._inputStyle, this._walkStyleAndGetValues(this._style)];
    }
    // Recursively get animated values for nested styles (like iOS's shadowOffset)
    _walkStyleAndGetAnimatedValues(style) {
      var updatedStyle = {};
      for (var key in style) {
        var value = style[key];
        if (value instanceof _AnimatedNode.default) {
          updatedStyle[key] = value.__getAnimatedValue();
        } else if (value && !Array.isArray(value) && typeof value === "object") {
          updatedStyle[key] = this._walkStyleAndGetAnimatedValues(value);
        }
      }
      return updatedStyle;
    }
    __getAnimatedValue() {
      return this._walkStyleAndGetAnimatedValues(this._style);
    }
    __attach() {
      for (var key in this._style) {
        var value = this._style[key];
        if (value instanceof _AnimatedNode.default) {
          value.__addChild(this);
        }
      }
    }
    __detach() {
      for (var key in this._style) {
        var value = this._style[key];
        if (value instanceof _AnimatedNode.default) {
          value.__removeChild(this);
        }
      }
      super.__detach();
    }
    __makeNative() {
      for (var key in this._style) {
        var value = this._style[key];
        if (value instanceof _AnimatedNode.default) {
          value.__makeNative();
        }
      }
      super.__makeNative();
    }
    __getNativeConfig() {
      var styleConfig = {};
      for (var styleKey in this._style) {
        if (this._style[styleKey] instanceof _AnimatedNode.default) {
          var style = this._style[styleKey];
          style.__makeNative();
          styleConfig[styleKey] = style.__getNativeTag();
        }
      }
      _NativeAnimatedHelper.default.validateStyles(styleConfig);
      return {
        type: "style",
        style: styleConfig
      };
    }
  };
  AnimatedStyle.default = AnimatedStyle$1;
  return AnimatedStyle;
}
var hasRequiredAnimatedProps;
function requireAnimatedProps() {
  if (hasRequiredAnimatedProps) return AnimatedProps;
  hasRequiredAnimatedProps = 1;
  Object.defineProperty(AnimatedProps, "__esModule", {
    value: true
  });
  AnimatedProps.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _AnimatedEvent = /* @__PURE__ */ requireAnimatedEvent();
  var _AnimatedNode = _interopRequireDefault(/* @__PURE__ */ requireAnimatedNode());
  var _AnimatedStyle = _interopRequireDefault(/* @__PURE__ */ requireAnimatedStyle());
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedProps$1 = class AnimatedProps extends _AnimatedNode.default {
    constructor(props, callback) {
      super();
      if (props.style) {
        props = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
          style: new _AnimatedStyle.default(props.style)
        });
      }
      this._props = props;
      this._callback = callback;
      this.__attach();
    }
    __getValue() {
      var props = {};
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof _AnimatedNode.default) {
          if (!value.__isNative || value instanceof _AnimatedStyle.default) {
            props[key] = value.__getValue();
          }
        } else if (value instanceof _AnimatedEvent.AnimatedEvent) {
          props[key] = value.__getHandler();
        } else {
          props[key] = value;
        }
      }
      return props;
    }
    __getAnimatedValue() {
      var props = {};
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof _AnimatedNode.default) {
          props[key] = value.__getAnimatedValue();
        }
      }
      return props;
    }
    __attach() {
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof _AnimatedNode.default) {
          value.__addChild(this);
        }
      }
    }
    __detach() {
      if (this.__isNative && this._animatedView) {
        this.__disconnectAnimatedView();
      }
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof _AnimatedNode.default) {
          value.__removeChild(this);
        }
      }
      super.__detach();
    }
    update() {
      this._callback();
    }
    __makeNative() {
      if (!this.__isNative) {
        this.__isNative = true;
        for (var key in this._props) {
          var value = this._props[key];
          if (value instanceof _AnimatedNode.default) {
            value.__makeNative();
          }
        }
        if (this._animatedView) {
          this.__connectAnimatedView();
        }
      }
    }
    setNativeView(animatedView) {
      if (this._animatedView === animatedView) {
        return;
      }
      this._animatedView = animatedView;
      if (this.__isNative) {
        this.__connectAnimatedView();
      }
    }
    __connectAnimatedView() {
      (0, _invariant.default)(this.__isNative, 'Expected node to be marked as "native"');
      var nativeViewTag = this._animatedView;
      (0, _invariant.default)(nativeViewTag != null, "Unable to locate attached view in the native tree");
      _NativeAnimatedHelper.default.API.connectAnimatedNodeToView(this.__getNativeTag(), nativeViewTag);
    }
    __disconnectAnimatedView() {
      (0, _invariant.default)(this.__isNative, 'Expected node to be marked as "native"');
      var nativeViewTag = this._animatedView;
      (0, _invariant.default)(nativeViewTag != null, "Unable to locate attached view in the native tree");
      _NativeAnimatedHelper.default.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), nativeViewTag);
    }
    __restoreDefaultValues() {
      if (this.__isNative) {
        _NativeAnimatedHelper.default.API.restoreDefaultValues(this.__getNativeTag());
      }
    }
    __getNativeConfig() {
      var propsConfig = {};
      for (var propKey in this._props) {
        var value = this._props[propKey];
        if (value instanceof _AnimatedNode.default) {
          value.__makeNative();
          propsConfig[propKey] = value.__getNativeTag();
        }
      }
      return {
        type: "props",
        props: propsConfig
      };
    }
  };
  AnimatedProps.default = AnimatedProps$1;
  return AnimatedProps;
}
var useRefEffect = {};
var hasRequiredUseRefEffect;
function requireUseRefEffect() {
  if (hasRequiredUseRefEffect) return useRefEffect;
  hasRequiredUseRefEffect = 1;
  Object.defineProperty(useRefEffect, "__esModule", {
    value: true
  });
  useRefEffect.default = useRefEffect$1;
  var _react = requireReact();
  function useRefEffect$1(effect) {
    var cleanupRef = (0, _react.useRef)(void 0);
    return (0, _react.useCallback)((instance) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (instance != null) {
        cleanupRef.current = effect(instance);
      }
    }, [effect]);
  }
  return useRefEffect;
}
var hasRequiredUseAnimatedProps;
function requireUseAnimatedProps() {
  if (hasRequiredUseAnimatedProps) return useAnimatedProps;
  hasRequiredUseAnimatedProps = 1;
  Object.defineProperty(useAnimatedProps, "__esModule", {
    value: true
  });
  useAnimatedProps.default = useAnimatedProps$1;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _AnimatedProps = _interopRequireDefault(/* @__PURE__ */ requireAnimatedProps());
  var _AnimatedEvent = /* @__PURE__ */ requireAnimatedEvent();
  var _useRefEffect = _interopRequireDefault(/* @__PURE__ */ requireUseRefEffect());
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  var _react = requireReact();
  var _useLayoutEffect = _interopRequireDefault(/* @__PURE__ */ requireUseLayoutEffect());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function useAnimatedProps$1(props) {
    var _useReducer = (0, _react.useReducer)((count) => count + 1, 0), scheduleUpdate = _useReducer[1];
    var onUpdateRef = (0, _react.useRef)(null);
    var node = (0, _react.useMemo)(() => new _AnimatedProps.default(props, () => onUpdateRef.current == null ? void 0 : onUpdateRef.current()), [props]);
    useAnimatedPropsLifecycle(node);
    var refEffect = (0, _react.useCallback)((instance) => {
      node.setNativeView(instance);
      onUpdateRef.current = () => {
        scheduleUpdate();
      };
      var target = getEventTarget(instance);
      var events = [];
      for (var propName in props) {
        var propValue = props[propName];
        if (propValue instanceof _AnimatedEvent.AnimatedEvent && propValue.__isNative) {
          propValue.__attach(target, propName);
          events.push([propName, propValue]);
        }
      }
      return () => {
        onUpdateRef.current = null;
        for (var _i = 0, _events = events; _i < _events.length; _i++) {
          var _events$_i = _events[_i], _propName = _events$_i[0], _propValue = _events$_i[1];
          _propValue.__detach(target, _propName);
        }
      };
    }, [props, node]);
    var callbackRef = (0, _useRefEffect.default)(refEffect);
    return [reduceAnimatedProps(node), callbackRef];
  }
  function reduceAnimatedProps(node) {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, node.__getValue()), {}, {
      collapsable: false
    });
  }
  function useAnimatedPropsLifecycle(node) {
    var prevNodeRef = (0, _react.useRef)(null);
    var isUnmountingRef = (0, _react.useRef)(false);
    (0, _react.useEffect)(() => {
      _NativeAnimatedHelper.default.API.flushQueue();
    });
    (0, _useLayoutEffect.default)(() => {
      isUnmountingRef.current = false;
      return () => {
        isUnmountingRef.current = true;
      };
    }, []);
    (0, _useLayoutEffect.default)(() => {
      node.__attach();
      if (prevNodeRef.current != null) {
        var prevNode = prevNodeRef.current;
        prevNode.__restoreDefaultValues();
        prevNode.__detach();
        prevNodeRef.current = null;
      }
      return () => {
        if (isUnmountingRef.current) {
          node.__detach();
        } else {
          prevNodeRef.current = node;
        }
      };
    }, [node]);
  }
  function getEventTarget(instance) {
    return typeof instance === "object" && typeof (instance == null ? void 0 : instance.getScrollableNode) === "function" ? (
      // $FlowFixMe[incompatible-use] - Legacy instance assumptions.
      instance.getScrollableNode()
    ) : instance;
  }
  return useAnimatedProps;
}
var useMergeRefs = {};
var hasRequiredUseMergeRefs;
function requireUseMergeRefs() {
  if (hasRequiredUseMergeRefs) return useMergeRefs;
  hasRequiredUseMergeRefs = 1;
  Object.defineProperty(useMergeRefs, "__esModule", {
    value: true
  });
  useMergeRefs.default = useMergeRefs$12;
  var _react = requireReact();
  function useMergeRefs$12() {
    for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
      refs[_key] = arguments[_key];
    }
    return (0, _react.useCallback)(
      (current) => {
        for (var _i = 0, _refs = refs; _i < _refs.length; _i++) {
          var ref = _refs[_i];
          if (ref != null) {
            if (typeof ref === "function") {
              ref(current);
            } else {
              ref.current = current;
            }
          }
        }
      },
      [...refs]
      // eslint-disable-line react-hooks/exhaustive-deps
    );
  }
  return useMergeRefs;
}
var hasRequiredCreateAnimatedComponent;
function requireCreateAnimatedComponent() {
  if (hasRequiredCreateAnimatedComponent) return createAnimatedComponent;
  hasRequiredCreateAnimatedComponent = 1;
  Object.defineProperty(createAnimatedComponent, "__esModule", {
    value: true
  });
  createAnimatedComponent.default = createAnimatedComponent$1;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _useAnimatedProps2 = _interopRequireDefault(/* @__PURE__ */ requireUseAnimatedProps());
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs());
  _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  _interopRequireDefault(/* @__PURE__ */ requireView());
  var React = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["style"];
  function createAnimatedComponent$1(Component) {
    return /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
      var _useAnimatedProps = (0, _useAnimatedProps2.default)(props), reducedProps = _useAnimatedProps[0], callbackRef = _useAnimatedProps[1];
      var ref = (0, _useMergeRefs.default)(callbackRef, forwardedRef);
      var passthroughAnimatedPropExplicitValues = reducedProps.passthroughAnimatedPropExplicitValues, style = reducedProps.style;
      var _ref = passthroughAnimatedPropExplicitValues !== null && passthroughAnimatedPropExplicitValues !== void 0 ? passthroughAnimatedPropExplicitValues : {}, passthroughStyle = _ref.style, passthroughProps = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
      var mergedStyle = [style, passthroughStyle];
      return /* @__PURE__ */ React.createElement(Component, (0, _extends2.default)({}, reducedProps, passthroughProps, {
        style: mergedStyle,
        ref
      }));
    });
  }
  return createAnimatedComponent;
}
var hasRequiredAnimatedFlatList;
function requireAnimatedFlatList() {
  if (hasRequiredAnimatedFlatList) return AnimatedFlatList;
  hasRequiredAnimatedFlatList = 1;
  Object.defineProperty(AnimatedFlatList, "__esModule", {
    value: true
  });
  AnimatedFlatList.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var React = _interopRequireWildcard(requireReact());
  var _FlatList = _interopRequireDefault(/* @__PURE__ */ requireFlatList());
  var _createAnimatedComponent = _interopRequireDefault(/* @__PURE__ */ requireCreateAnimatedComponent());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var FlatListWithEventThrottle = /* @__PURE__ */ React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement(_FlatList.default, (0, _extends2.default)({
    scrollEventThrottle: 1e-4
  }, props, {
    ref
  })));
  AnimatedFlatList.default = (0, _createAnimatedComponent.default)(FlatListWithEventThrottle);
  return AnimatedFlatList;
}
var AnimatedImage = {};
var Image = {};
var AssetRegistry = {};
var hasRequiredAssetRegistry;
function requireAssetRegistry() {
  if (hasRequiredAssetRegistry) return AssetRegistry;
  hasRequiredAssetRegistry = 1;
  Object.defineProperty(AssetRegistry, "__esModule", {
    value: true
  });
  AssetRegistry.getAssetByID = getAssetByID;
  AssetRegistry.registerAsset = registerAsset;
  var assets = [];
  function registerAsset(asset) {
    return assets.push(asset);
  }
  function getAssetByID(assetId) {
    return assets[assetId - 1];
  }
  return AssetRegistry;
}
var ImageLoader = {};
var hasRequiredImageLoader;
function requireImageLoader() {
  if (hasRequiredImageLoader) return ImageLoader;
  hasRequiredImageLoader = 1;
  Object.defineProperty(ImageLoader, "__esModule", {
    value: true
  });
  ImageLoader.default = ImageLoader.ImageUriCache = void 0;
  var dataUriPattern = /^data:/;
  class ImageUriCache {
    static has(uri) {
      var entries = ImageUriCache._entries;
      var isDataUri = dataUriPattern.test(uri);
      return isDataUri || Boolean(entries[uri]);
    }
    static add(uri) {
      var entries = ImageUriCache._entries;
      var lastUsedTimestamp = Date.now();
      if (entries[uri]) {
        entries[uri].lastUsedTimestamp = lastUsedTimestamp;
        entries[uri].refCount += 1;
      } else {
        entries[uri] = {
          lastUsedTimestamp,
          refCount: 1
        };
      }
    }
    static remove(uri) {
      var entries = ImageUriCache._entries;
      if (entries[uri]) {
        entries[uri].refCount -= 1;
      }
      ImageUriCache._cleanUpIfNeeded();
    }
    static _cleanUpIfNeeded() {
      var entries = ImageUriCache._entries;
      var imageUris = Object.keys(entries);
      if (imageUris.length + 1 > ImageUriCache._maximumEntries) {
        var leastRecentlyUsedKey;
        var leastRecentlyUsedEntry;
        imageUris.forEach((uri) => {
          var entry = entries[uri];
          if ((!leastRecentlyUsedEntry || entry.lastUsedTimestamp < leastRecentlyUsedEntry.lastUsedTimestamp) && entry.refCount === 0) {
            leastRecentlyUsedKey = uri;
            leastRecentlyUsedEntry = entry;
          }
        });
        if (leastRecentlyUsedKey) {
          delete entries[leastRecentlyUsedKey];
        }
      }
    }
  }
  ImageLoader.ImageUriCache = ImageUriCache;
  ImageUriCache._maximumEntries = 256;
  ImageUriCache._entries = {};
  var id = 0;
  var requests = {};
  var ImageLoader$1 = {
    abort(requestId) {
      var image = requests["" + requestId];
      if (image) {
        image.onerror = null;
        image.onload = null;
        image = null;
        delete requests["" + requestId];
      }
    },
    getSize(uri, success, failure) {
      var complete = false;
      var interval = setInterval(callback, 16);
      var requestId = ImageLoader$1.load(uri, callback, errorCallback);
      function callback() {
        var image = requests["" + requestId];
        if (image) {
          var naturalHeight = image.naturalHeight, naturalWidth = image.naturalWidth;
          if (naturalHeight && naturalWidth) {
            success(naturalWidth, naturalHeight);
            complete = true;
          }
        }
        if (complete) {
          ImageLoader$1.abort(requestId);
          clearInterval(interval);
        }
      }
      function errorCallback() {
        if (typeof failure === "function") {
          failure();
        }
        ImageLoader$1.abort(requestId);
        clearInterval(interval);
      }
    },
    has(uri) {
      return ImageUriCache.has(uri);
    },
    load(uri, onLoad, onError) {
      id += 1;
      var image = new window.Image();
      image.onerror = onError;
      image.onload = (e) => {
        var onDecode = () => onLoad({
          nativeEvent: e
        });
        if (typeof image.decode === "function") {
          image.decode().then(onDecode, onDecode);
        } else {
          setTimeout(onDecode, 0);
        }
      };
      image.src = uri;
      requests["" + id] = image;
      return id;
    },
    prefetch(uri) {
      return new Promise((resolve, reject) => {
        ImageLoader$1.load(uri, () => {
          ImageUriCache.add(uri);
          ImageUriCache.remove(uri);
          resolve();
        }, reject);
      });
    },
    queryCache(uris) {
      var result = {};
      uris.forEach((u) => {
        if (ImageUriCache.has(u)) {
          result[u] = "disk/memory";
        }
      });
      return Promise.resolve(result);
    }
  };
  ImageLoader.default = ImageLoader$1;
  return ImageLoader;
}
var PixelRatio = {};
var hasRequiredPixelRatio;
function requirePixelRatio() {
  if (hasRequiredPixelRatio) return PixelRatio;
  hasRequiredPixelRatio = 1;
  Object.defineProperty(PixelRatio, "__esModule", {
    value: true
  });
  PixelRatio.default = void 0;
  var _Dimensions = _interopRequireDefault(/* @__PURE__ */ requireDimensions());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let PixelRatio$1 = class PixelRatio2 {
    /**
     * Returns the device pixel density.
     */
    static get() {
      return _Dimensions.default.get("window").scale;
    }
    /**
     * No equivalent for Web
     */
    static getFontScale() {
      return _Dimensions.default.get("window").fontScale || PixelRatio2.get();
    }
    /**
     * Converts a layout size (dp) to pixel size (px).
     * Guaranteed to return an integer number.
     */
    static getPixelSizeForLayoutSize(layoutSize) {
      return Math.round(layoutSize * PixelRatio2.get());
    }
    /**
     * Rounds a layout size (dp) to the nearest layout size that corresponds to
     * an integer number of pixels. For example, on a device with a PixelRatio
     * of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to
     * exactly (8.33 * 3) = 25 pixels.
     */
    static roundToNearestPixel(layoutSize) {
      var ratio = PixelRatio2.get();
      return Math.round(layoutSize * ratio) / ratio;
    }
  };
  PixelRatio.default = PixelRatio$1;
  return PixelRatio;
}
var hasRequiredImage;
function requireImage() {
  if (hasRequiredImage) return Image;
  hasRequiredImage = 1;
  Object.defineProperty(Image, "__esModule", {
    value: true
  });
  Image.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  var _AssetRegistry = /* @__PURE__ */ requireAssetRegistry();
  var _preprocess = /* @__PURE__ */ requirePreprocess();
  var _ImageLoader = _interopRequireDefault(/* @__PURE__ */ requireImageLoader());
  var _PixelRatio = _interopRequireDefault(/* @__PURE__ */ requirePixelRatio());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _TextAncestorContext = _interopRequireDefault(/* @__PURE__ */ requireTextAncestorContext());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _warnOnce = /* @__PURE__ */ requireWarnOnce();
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["aria-label", "accessibilityLabel", "blurRadius", "defaultSource", "draggable", "onError", "onLayout", "onLoad", "onLoadEnd", "onLoadStart", "pointerEvents", "source", "style"];
  var ERRORED = "ERRORED";
  var LOADED = "LOADED";
  var LOADING = "LOADING";
  var IDLE = "IDLE";
  var _filterId = 0;
  var svgDataUriPattern = /^(data:image\/svg\+xml;utf8,)(.*)/;
  function createTintColorSVG(tintColor, id) {
    return tintColor && id != null ? /* @__PURE__ */ React.createElement("svg", {
      style: {
        position: "absolute",
        height: 0,
        visibility: "hidden",
        width: 0
      }
    }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", {
      id: "tint-" + id,
      suppressHydrationWarning: true
    }, /* @__PURE__ */ React.createElement("feFlood", {
      floodColor: "" + tintColor,
      key: tintColor
    }), /* @__PURE__ */ React.createElement("feComposite", {
      in2: "SourceAlpha",
      operator: "in"
    })))) : null;
  }
  function extractNonStandardStyleProps(style, blurRadius, filterId, tintColorProp) {
    var flatStyle = _StyleSheet.default.flatten(style);
    var filter2 = flatStyle.filter, resizeMode = flatStyle.resizeMode, shadowOffset = flatStyle.shadowOffset, tintColor = flatStyle.tintColor;
    if (flatStyle.resizeMode) {
      (0, _warnOnce.warnOnce)("Image.style.resizeMode", "Image: style.resizeMode is deprecated. Please use props.resizeMode.");
    }
    if (flatStyle.tintColor) {
      (0, _warnOnce.warnOnce)("Image.style.tintColor", "Image: style.tintColor is deprecated. Please use props.tintColor.");
    }
    var filters = [];
    var _filter = null;
    if (filter2) {
      filters.push(filter2);
    }
    if (blurRadius) {
      filters.push("blur(" + blurRadius + "px)");
    }
    if (shadowOffset) {
      var shadowString = (0, _preprocess.createBoxShadowValue)(flatStyle);
      if (shadowString) {
        filters.push("drop-shadow(" + shadowString + ")");
      }
    }
    if ((tintColorProp || tintColor) && filterId != null) {
      filters.push("url(#tint-" + filterId + ")");
    }
    if (filters.length > 0) {
      _filter = filters.join(" ");
    }
    return [resizeMode, _filter, tintColor];
  }
  function resolveAssetDimensions(source) {
    if (typeof source === "number") {
      var _getAssetByID = (0, _AssetRegistry.getAssetByID)(source), _height = _getAssetByID.height, _width = _getAssetByID.width;
      return {
        height: _height,
        width: _width
      };
    } else if (source != null && !Array.isArray(source) && typeof source === "object") {
      var _height2 = source.height, _width2 = source.width;
      return {
        height: _height2,
        width: _width2
      };
    }
  }
  function resolveAssetUri(source) {
    var uri = null;
    if (typeof source === "number") {
      var asset = (0, _AssetRegistry.getAssetByID)(source);
      if (asset == null) {
        throw new Error('Image: asset with ID "' + source + '" could not be found. Please check the image source or packager.');
      }
      var scale = asset.scales[0];
      if (asset.scales.length > 1) {
        var preferredScale = _PixelRatio.default.get();
        scale = asset.scales.reduce((prev, curr) => Math.abs(curr - preferredScale) < Math.abs(prev - preferredScale) ? curr : prev);
      }
      var scaleSuffix = scale !== 1 ? "@" + scale + "x" : "";
      uri = asset ? asset.httpServerLocation + "/" + asset.name + scaleSuffix + "." + asset.type : "";
    } else if (typeof source === "string") {
      uri = source;
    } else if (source && typeof source.uri === "string") {
      uri = source.uri;
    }
    if (uri) {
      var match = uri.match(svgDataUriPattern);
      if (match) {
        var prefix = match[1], svg = match[2];
        var encodedSvg = encodeURIComponent(svg);
        return "" + prefix + encodedSvg;
      }
    }
    return uri;
  }
  var Image$1 = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var _ariaLabel = props["aria-label"], accessibilityLabel = props.accessibilityLabel, blurRadius = props.blurRadius, defaultSource = props.defaultSource, draggable = props.draggable, onError = props.onError, onLayout = props.onLayout, onLoad = props.onLoad, onLoadEnd = props.onLoadEnd, onLoadStart = props.onLoadStart, pointerEvents = props.pointerEvents, source = props.source, style = props.style, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var ariaLabel = _ariaLabel || accessibilityLabel;
    var _React$useState = React.useState(() => {
      var uri2 = resolveAssetUri(source);
      if (uri2 != null) {
        var isLoaded = _ImageLoader.default.has(uri2);
        if (isLoaded) {
          return LOADED;
        }
      }
      return IDLE;
    }), state = _React$useState[0], updateState = _React$useState[1];
    var _React$useState2 = React.useState({}), layout = _React$useState2[0], updateLayout = _React$useState2[1];
    var hasTextAncestor = React.useContext(_TextAncestorContext.default);
    var hiddenImageRef = React.useRef(null);
    var filterRef = React.useRef(_filterId++);
    var requestRef = React.useRef(null);
    var shouldDisplaySource = state === LOADED || state === LOADING && defaultSource == null;
    var _extractNonStandardSt = extractNonStandardStyleProps(style, blurRadius, filterRef.current, props.tintColor), _resizeMode = _extractNonStandardSt[0], filter2 = _extractNonStandardSt[1], _tintColor = _extractNonStandardSt[2];
    var resizeMode = props.resizeMode || _resizeMode || "cover";
    var tintColor = props.tintColor || _tintColor;
    var selectedSource = shouldDisplaySource ? source : defaultSource;
    var displayImageUri = resolveAssetUri(selectedSource);
    var imageSizeStyle = resolveAssetDimensions(selectedSource);
    var backgroundImage = displayImageUri ? 'url("' + displayImageUri + '")' : null;
    var backgroundSize = getBackgroundSize();
    var hiddenImage = displayImageUri ? (0, _createElement.default)("img", {
      alt: ariaLabel || "",
      style: styles2.accessibilityImage$raw,
      draggable: draggable || false,
      ref: hiddenImageRef,
      src: displayImageUri
    }) : null;
    function getBackgroundSize() {
      if (hiddenImageRef.current != null && (resizeMode === "center" || resizeMode === "repeat")) {
        var _hiddenImageRef$curre = hiddenImageRef.current, naturalHeight = _hiddenImageRef$curre.naturalHeight, naturalWidth = _hiddenImageRef$curre.naturalWidth;
        var _height3 = layout.height, _width3 = layout.width;
        if (naturalHeight && naturalWidth && _height3 && _width3) {
          var scaleFactor = Math.min(1, _width3 / naturalWidth, _height3 / naturalHeight);
          var x = Math.ceil(scaleFactor * naturalWidth);
          var y = Math.ceil(scaleFactor * naturalHeight);
          return x + "px " + y + "px";
        }
      }
    }
    function handleLayout(e) {
      if (resizeMode === "center" || resizeMode === "repeat" || onLayout) {
        var _layout = e.nativeEvent.layout;
        onLayout && onLayout(e);
        updateLayout(_layout);
      }
    }
    var uri = resolveAssetUri(source);
    React.useEffect(() => {
      abortPendingRequest();
      if (uri != null) {
        updateState(LOADING);
        if (onLoadStart) {
          onLoadStart();
        }
        requestRef.current = _ImageLoader.default.load(uri, function load(e) {
          updateState(LOADED);
          if (onLoad) {
            onLoad(e);
          }
          if (onLoadEnd) {
            onLoadEnd();
          }
        }, function error() {
          updateState(ERRORED);
          if (onError) {
            onError({
              nativeEvent: {
                error: "Failed to load resource " + uri
              }
            });
          }
          if (onLoadEnd) {
            onLoadEnd();
          }
        });
      }
      function abortPendingRequest() {
        if (requestRef.current != null) {
          _ImageLoader.default.abort(requestRef.current);
          requestRef.current = null;
        }
      }
      return abortPendingRequest;
    }, [uri, requestRef, updateState, onError, onLoad, onLoadEnd, onLoadStart]);
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, rest, {
      "aria-label": ariaLabel,
      onLayout: handleLayout,
      pointerEvents,
      ref,
      style: [
        styles2.root,
        hasTextAncestor && styles2.inline,
        imageSizeStyle,
        style,
        styles2.undo,
        // TEMP: avoid deprecated shadow props regression
        // until Image refactored to use createElement.
        {
          boxShadow: null
        }
      ]
    }), /* @__PURE__ */ React.createElement(_View.default, {
      style: [styles2.image, resizeModeStyles[resizeMode], {
        backgroundImage,
        filter: filter2
      }, backgroundSize != null && {
        backgroundSize
      }],
      suppressHydrationWarning: true
    }), hiddenImage, createTintColorSVG(tintColor, filterRef.current));
  });
  Image$1.displayName = "Image";
  var ImageWithStatics = Image$1;
  ImageWithStatics.getSize = function(uri, success, failure) {
    _ImageLoader.default.getSize(uri, success, failure);
  };
  ImageWithStatics.prefetch = function(uri) {
    return _ImageLoader.default.prefetch(uri);
  };
  ImageWithStatics.queryCache = function(uris) {
    return _ImageLoader.default.queryCache(uris);
  };
  var styles2 = _StyleSheet.default.create({
    root: {
      flexBasis: "auto",
      overflow: "hidden",
      zIndex: 0
    },
    inline: {
      display: "inline-flex"
    },
    undo: {
      // These styles are converted to CSS filters applied to the
      // element displaying the background image.
      blurRadius: null,
      shadowColor: null,
      shadowOpacity: null,
      shadowOffset: null,
      shadowRadius: null,
      tintColor: null,
      // These styles are not supported
      overlayColor: null,
      resizeMode: null
    },
    image: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _StyleSheet.default.absoluteFillObject), {}, {
      backgroundColor: "transparent",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
      zIndex: -1
    }),
    accessibilityImage$raw: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _StyleSheet.default.absoluteFillObject), {}, {
      height: "100%",
      opacity: 0,
      width: "100%",
      zIndex: -1
    })
  });
  var resizeModeStyles = _StyleSheet.default.create({
    center: {
      backgroundSize: "auto"
    },
    contain: {
      backgroundSize: "contain"
    },
    cover: {
      backgroundSize: "cover"
    },
    none: {
      backgroundPosition: "0",
      backgroundSize: "auto"
    },
    repeat: {
      backgroundPosition: "0",
      backgroundRepeat: "repeat",
      backgroundSize: "auto"
    },
    stretch: {
      backgroundSize: "100% 100%"
    }
  });
  Image.default = ImageWithStatics;
  return Image;
}
var hasRequiredAnimatedImage;
function requireAnimatedImage() {
  if (hasRequiredAnimatedImage) return AnimatedImage;
  hasRequiredAnimatedImage = 1;
  Object.defineProperty(AnimatedImage, "__esModule", {
    value: true
  });
  AnimatedImage.default = void 0;
  _interopRequireWildcard(requireReact());
  var _Image = _interopRequireDefault(/* @__PURE__ */ requireImage());
  var _createAnimatedComponent = _interopRequireDefault(/* @__PURE__ */ requireCreateAnimatedComponent());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  AnimatedImage.default = (0, _createAnimatedComponent.default)(_Image.default);
  return AnimatedImage;
}
var AnimatedScrollView = {};
var hasRequiredAnimatedScrollView;
function requireAnimatedScrollView() {
  if (hasRequiredAnimatedScrollView) return AnimatedScrollView;
  hasRequiredAnimatedScrollView = 1;
  Object.defineProperty(AnimatedScrollView, "__esModule", {
    value: true
  });
  AnimatedScrollView.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var React = _interopRequireWildcard(requireReact());
  var _ScrollView = _interopRequireDefault(/* @__PURE__ */ requireScrollView());
  var _createAnimatedComponent = _interopRequireDefault(/* @__PURE__ */ requireCreateAnimatedComponent());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var ScrollViewWithEventThrottle = /* @__PURE__ */ React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement(_ScrollView.default, (0, _extends2.default)({
    scrollEventThrottle: 1e-4
  }, props, {
    ref
  })));
  AnimatedScrollView.default = (0, _createAnimatedComponent.default)(ScrollViewWithEventThrottle);
  return AnimatedScrollView;
}
var AnimatedSectionList = {};
var SectionList$1 = {};
var SectionList = {};
var VirtualizedSectionList = {};
var hasRequiredVirtualizedSectionList;
function requireVirtualizedSectionList() {
  if (hasRequiredVirtualizedSectionList) return VirtualizedSectionList;
  hasRequiredVirtualizedSectionList = 1;
  Object.defineProperty(VirtualizedSectionList, "__esModule", {
    value: true
  });
  VirtualizedSectionList.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _createForOfIteratorHelperLoose2 = _interopRequireDefault(requireCreateForOfIteratorHelperLoose());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _VirtualizedList = _interopRequireDefault(/* @__PURE__ */ requireVirtualizedList$1());
  var _VirtualizeUtils = /* @__PURE__ */ requireVirtualizeUtils();
  var _invariant = _interopRequireDefault(requireInvariant());
  var React = _interopRequireWildcard(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
  let VirtualizedSectionList$1 = class VirtualizedSectionList extends React.PureComponent {
    constructor() {
      super(...arguments);
      this._keyExtractor = (item, index) => {
        var info = this._subExtractor(index);
        return info && info.key || String(index);
      };
      this._convertViewable = (viewable) => {
        var _info$index;
        (0, _invariant.default)(viewable.index != null, "Received a broken ViewToken");
        var info = this._subExtractor(viewable.index);
        if (!info) {
          return null;
        }
        var keyExtractorWithNullableIndex = info.section.keyExtractor;
        var keyExtractorWithNonNullableIndex = this.props.keyExtractor || _VirtualizeUtils.keyExtractor;
        var key = keyExtractorWithNullableIndex != null ? keyExtractorWithNullableIndex(viewable.item, info.index) : keyExtractorWithNonNullableIndex(viewable.item, (_info$index = info.index) !== null && _info$index !== void 0 ? _info$index : 0);
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, viewable), {}, {
          index: info.index,
          key,
          section: info.section
        });
      };
      this._onViewableItemsChanged = (_ref) => {
        var viewableItems = _ref.viewableItems, changed = _ref.changed;
        var onViewableItemsChanged = this.props.onViewableItemsChanged;
        if (onViewableItemsChanged != null) {
          onViewableItemsChanged({
            viewableItems: viewableItems.map(this._convertViewable, this).filter(Boolean),
            changed: changed.map(this._convertViewable, this).filter(Boolean)
          });
        }
      };
      this._renderItem = (listItemCount) => (
        // eslint-disable-next-line react/no-unstable-nested-components
        (_ref2) => {
          var item = _ref2.item, index = _ref2.index;
          var info = this._subExtractor(index);
          if (!info) {
            return null;
          }
          var infoIndex = info.index;
          if (infoIndex == null) {
            var section = info.section;
            if (info.header === true) {
              var renderSectionHeader = this.props.renderSectionHeader;
              return renderSectionHeader ? renderSectionHeader({
                section
              }) : null;
            } else {
              var renderSectionFooter = this.props.renderSectionFooter;
              return renderSectionFooter ? renderSectionFooter({
                section
              }) : null;
            }
          } else {
            var renderItem = info.section.renderItem || this.props.renderItem;
            var SeparatorComponent = this._getSeparatorComponent(index, info, listItemCount);
            (0, _invariant.default)(renderItem, "no renderItem!");
            return /* @__PURE__ */ React.createElement(ItemWithSeparator, {
              SeparatorComponent,
              LeadingSeparatorComponent: infoIndex === 0 ? this.props.SectionSeparatorComponent : void 0,
              cellKey: info.key,
              index: infoIndex,
              item,
              leadingItem: info.leadingItem,
              leadingSection: info.leadingSection,
              prevCellKey: (this._subExtractor(index - 1) || {}).key,
              setSelfHighlightCallback: this._setUpdateHighlightFor,
              setSelfUpdatePropsCallback: this._setUpdatePropsFor,
              updateHighlightFor: this._updateHighlightFor,
              updatePropsFor: this._updatePropsFor,
              renderItem,
              section: info.section,
              trailingItem: info.trailingItem,
              trailingSection: info.trailingSection,
              inverted: !!this.props.inverted
            });
          }
        }
      );
      this._updatePropsFor = (cellKey, value) => {
        var updateProps = this._updatePropsMap[cellKey];
        if (updateProps != null) {
          updateProps(value);
        }
      };
      this._updateHighlightFor = (cellKey, value) => {
        var updateHighlight = this._updateHighlightMap[cellKey];
        if (updateHighlight != null) {
          updateHighlight(value);
        }
      };
      this._setUpdateHighlightFor = (cellKey, updateHighlightFn) => {
        if (updateHighlightFn != null) {
          this._updateHighlightMap[cellKey] = updateHighlightFn;
        } else {
          delete this._updateHighlightFor[cellKey];
        }
      };
      this._setUpdatePropsFor = (cellKey, updatePropsFn) => {
        if (updatePropsFn != null) {
          this._updatePropsMap[cellKey] = updatePropsFn;
        } else {
          delete this._updatePropsMap[cellKey];
        }
      };
      this._updateHighlightMap = {};
      this._updatePropsMap = {};
      this._captureRef = (ref) => {
        this._listRef = ref;
      };
    }
    scrollToLocation(params) {
      var index = params.itemIndex;
      for (var i = 0; i < params.sectionIndex; i++) {
        index += this.props.getItemCount(this.props.sections[i].data) + 2;
      }
      var viewOffset = params.viewOffset || 0;
      if (this._listRef == null) {
        return;
      }
      if (params.itemIndex > 0 && this.props.stickySectionHeadersEnabled) {
        var frame = this._listRef.__getFrameMetricsApprox(index - params.itemIndex, this._listRef.props);
        viewOffset += frame.length;
      }
      var toIndexParams = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, params), {}, {
        viewOffset,
        index
      });
      this._listRef.scrollToIndex(toIndexParams);
    }
    getListRef() {
      return this._listRef;
    }
    render() {
      var _this$props = this.props;
      _this$props.ItemSeparatorComponent;
      _this$props.SectionSeparatorComponent;
      _this$props.renderItem;
      _this$props.renderSectionFooter;
      _this$props.renderSectionHeader;
      _this$props.sections;
      _this$props.stickySectionHeadersEnabled;
      var passThroughProps = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
      var listHeaderOffset = this.props.ListHeaderComponent ? 1 : 0;
      var stickyHeaderIndices = this.props.stickySectionHeadersEnabled ? [] : void 0;
      var itemCount = 0;
      for (var _iterator = (0, _createForOfIteratorHelperLoose2.default)(this.props.sections), _step; !(_step = _iterator()).done; ) {
        var section = _step.value;
        if (stickyHeaderIndices != null) {
          stickyHeaderIndices.push(itemCount + listHeaderOffset);
        }
        itemCount += 2;
        itemCount += this.props.getItemCount(section.data);
      }
      var renderItem = this._renderItem(itemCount);
      return /* @__PURE__ */ React.createElement(_VirtualizedList.default, (0, _extends2.default)({}, passThroughProps, {
        keyExtractor: this._keyExtractor,
        stickyHeaderIndices,
        renderItem,
        data: this.props.sections,
        getItem: (sections, index) => this._getItem(this.props, sections, index),
        getItemCount: () => itemCount,
        onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0,
        ref: this._captureRef
      }));
    }
    _getItem(props, sections, index) {
      if (!sections) {
        return null;
      }
      var itemIdx = index - 1;
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionData = section.data;
        var itemCount = props.getItemCount(sectionData);
        if (itemIdx === -1 || itemIdx === itemCount) {
          return section;
        } else if (itemIdx < itemCount) {
          return props.getItem(sectionData, itemIdx);
        } else {
          itemIdx -= itemCount + 2;
        }
      }
      return null;
    }
    // $FlowFixMe[missing-local-annot]
    _subExtractor(index) {
      var itemIndex = index;
      var _this$props2 = this.props, getItem = _this$props2.getItem, getItemCount = _this$props2.getItemCount, keyExtractor = _this$props2.keyExtractor, sections = _this$props2.sections;
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionData = section.data;
        var key = section.key || String(i);
        itemIndex -= 1;
        if (itemIndex >= getItemCount(sectionData) + 1) {
          itemIndex -= getItemCount(sectionData) + 1;
        } else if (itemIndex === -1) {
          return {
            section,
            key: key + ":header",
            index: null,
            header: true,
            trailingSection: sections[i + 1]
          };
        } else if (itemIndex === getItemCount(sectionData)) {
          return {
            section,
            key: key + ":footer",
            index: null,
            header: false,
            trailingSection: sections[i + 1]
          };
        } else {
          var extractor = section.keyExtractor || keyExtractor || _VirtualizeUtils.keyExtractor;
          return {
            section,
            key: key + ":" + extractor(getItem(sectionData, itemIndex), itemIndex),
            index: itemIndex,
            leadingItem: getItem(sectionData, itemIndex - 1),
            leadingSection: sections[i - 1],
            trailingItem: getItem(sectionData, itemIndex + 1),
            trailingSection: sections[i + 1]
          };
        }
      }
    }
    _getSeparatorComponent(index, info, listItemCount) {
      info = info || this._subExtractor(index);
      if (!info) {
        return null;
      }
      var ItemSeparatorComponent = info.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent;
      var SectionSeparatorComponent = this.props.SectionSeparatorComponent;
      var isLastItemInList = index === listItemCount - 1;
      var isLastItemInSection = info.index === this.props.getItemCount(info.section.data) - 1;
      if (SectionSeparatorComponent && isLastItemInSection) {
        return SectionSeparatorComponent;
      }
      if (ItemSeparatorComponent && !isLastItemInSection && !isLastItemInList) {
        return ItemSeparatorComponent;
      }
      return null;
    }
  };
  function ItemWithSeparator(props) {
    var LeadingSeparatorComponent = props.LeadingSeparatorComponent, SeparatorComponent = props.SeparatorComponent, cellKey = props.cellKey, prevCellKey = props.prevCellKey, setSelfHighlightCallback = props.setSelfHighlightCallback, updateHighlightFor = props.updateHighlightFor, setSelfUpdatePropsCallback = props.setSelfUpdatePropsCallback, updatePropsFor = props.updatePropsFor, item = props.item, index = props.index, section = props.section, inverted = props.inverted;
    var _React$useState = React.useState(false), leadingSeparatorHiglighted = _React$useState[0], setLeadingSeparatorHighlighted = _React$useState[1];
    var _React$useState2 = React.useState(false), separatorHighlighted = _React$useState2[0], setSeparatorHighlighted = _React$useState2[1];
    var _React$useState3 = React.useState({
      leadingItem: props.leadingItem,
      leadingSection: props.leadingSection,
      section: props.section,
      trailingItem: props.item,
      trailingSection: props.trailingSection
    }), leadingSeparatorProps = _React$useState3[0], setLeadingSeparatorProps = _React$useState3[1];
    var _React$useState4 = React.useState({
      leadingItem: props.item,
      leadingSection: props.leadingSection,
      section: props.section,
      trailingItem: props.trailingItem,
      trailingSection: props.trailingSection
    }), separatorProps = _React$useState4[0], setSeparatorProps = _React$useState4[1];
    React.useEffect(() => {
      setSelfHighlightCallback(cellKey, setSeparatorHighlighted);
      setSelfUpdatePropsCallback(cellKey, setSeparatorProps);
      return () => {
        setSelfUpdatePropsCallback(cellKey, null);
        setSelfHighlightCallback(cellKey, null);
      };
    }, [cellKey, setSelfHighlightCallback, setSeparatorProps, setSelfUpdatePropsCallback]);
    var separators = {
      highlight: () => {
        setLeadingSeparatorHighlighted(true);
        setSeparatorHighlighted(true);
        if (prevCellKey != null) {
          updateHighlightFor(prevCellKey, true);
        }
      },
      unhighlight: () => {
        setLeadingSeparatorHighlighted(false);
        setSeparatorHighlighted(false);
        if (prevCellKey != null) {
          updateHighlightFor(prevCellKey, false);
        }
      },
      updateProps: (select, newProps) => {
        if (select === "leading") {
          if (LeadingSeparatorComponent != null) {
            setLeadingSeparatorProps((0, _objectSpread2.default)((0, _objectSpread2.default)({}, leadingSeparatorProps), newProps));
          } else if (prevCellKey != null) {
            updatePropsFor(prevCellKey, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, leadingSeparatorProps), newProps));
          }
        } else if (select === "trailing" && SeparatorComponent != null) {
          setSeparatorProps((0, _objectSpread2.default)((0, _objectSpread2.default)({}, separatorProps), newProps));
        }
      }
    };
    var element = props.renderItem({
      item,
      index,
      section,
      separators
    });
    var leadingSeparator = LeadingSeparatorComponent != null && /* @__PURE__ */ React.createElement(LeadingSeparatorComponent, (0, _extends2.default)({
      highlighted: leadingSeparatorHiglighted
    }, leadingSeparatorProps));
    var separator = SeparatorComponent != null && /* @__PURE__ */ React.createElement(SeparatorComponent, (0, _extends2.default)({
      highlighted: separatorHighlighted
    }, separatorProps));
    return leadingSeparator || separator ? /* @__PURE__ */ React.createElement(_View.default, null, inverted === false ? leadingSeparator : separator, element, inverted === false ? separator : leadingSeparator) : element;
  }
  VirtualizedSectionList.default = VirtualizedSectionList$1;
  return VirtualizedSectionList;
}
var hasRequiredSectionList$1;
function requireSectionList$1() {
  if (hasRequiredSectionList$1) return SectionList;
  hasRequiredSectionList$1 = 1;
  Object.defineProperty(SectionList, "__esModule", {
    value: true
  });
  SectionList.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform$1());
  var React = _interopRequireWildcard(requireReact());
  var _VirtualizedSectionList = _interopRequireDefault(/* @__PURE__ */ requireVirtualizedSectionList());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["stickySectionHeadersEnabled"];
  let SectionList$12 = class SectionList extends React.PureComponent {
    constructor() {
      super(...arguments);
      this._captureRef = (ref) => {
        this._wrapperListRef = ref;
      };
    }
    /**
     * Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section)
     * positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be
     * covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a
     * fixed number of pixels to offset the final target position, e.g. to compensate for sticky
     * headers.
     *
     * Note: cannot scroll to locations outside the render window without specifying the
     * `getItemLayout` prop.
     */
    scrollToLocation(params) {
      if (this._wrapperListRef != null) {
        this._wrapperListRef.scrollToLocation(params);
      }
    }
    /**
     * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
     * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
     * taps on items or by navigation actions.
     */
    recordInteraction() {
      var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
      listRef && listRef.recordInteraction();
    }
    /**
     * Displays the scroll indicators momentarily.
     *
     * @platform ios
     */
    flashScrollIndicators() {
      var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
      listRef && listRef.flashScrollIndicators();
    }
    /**
     * Provides a handle to the underlying scroll responder.
     */
    getScrollResponder() {
      var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
      if (listRef) {
        return listRef.getScrollResponder();
      }
    }
    getScrollableNode() {
      var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
      if (listRef) {
        return listRef.getScrollableNode();
      }
    }
    render() {
      var _this$props = this.props, _stickySectionHeadersEnabled = _this$props.stickySectionHeadersEnabled, restProps = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
      var stickySectionHeadersEnabled = _stickySectionHeadersEnabled !== null && _stickySectionHeadersEnabled !== void 0 ? _stickySectionHeadersEnabled : _Platform.default.OS === "ios";
      return /* @__PURE__ */ React.createElement(_VirtualizedSectionList.default, (0, _extends2.default)({}, restProps, {
        stickySectionHeadersEnabled,
        ref: this._captureRef,
        getItemCount: (items) => items.length,
        getItem: (items, index) => items[index]
      }));
    }
  };
  SectionList.default = SectionList$12;
  return SectionList;
}
var hasRequiredSectionList;
function requireSectionList() {
  if (hasRequiredSectionList) return SectionList$1;
  hasRequiredSectionList = 1;
  Object.defineProperty(SectionList$1, "__esModule", {
    value: true
  });
  SectionList$1.default = void 0;
  var _SectionList = _interopRequireDefault(/* @__PURE__ */ requireSectionList$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  SectionList$1.default = _SectionList.default;
  return SectionList$1;
}
var hasRequiredAnimatedSectionList;
function requireAnimatedSectionList() {
  if (hasRequiredAnimatedSectionList) return AnimatedSectionList;
  hasRequiredAnimatedSectionList = 1;
  Object.defineProperty(AnimatedSectionList, "__esModule", {
    value: true
  });
  AnimatedSectionList.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var React = _interopRequireWildcard(requireReact());
  var _SectionList = _interopRequireDefault(/* @__PURE__ */ requireSectionList());
  var _createAnimatedComponent = _interopRequireDefault(/* @__PURE__ */ requireCreateAnimatedComponent());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var SectionListWithEventThrottle = /* @__PURE__ */ React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement(_SectionList.default, (0, _extends2.default)({
    scrollEventThrottle: 1e-4
  }, props, {
    ref
  })));
  AnimatedSectionList.default = (0, _createAnimatedComponent.default)(SectionListWithEventThrottle);
  return AnimatedSectionList;
}
var AnimatedText = {};
var Text = {};
var hasRequiredText;
function requireText() {
  if (hasRequiredText) return Text;
  hasRequiredText = 1;
  Object.defineProperty(Text, "__esModule", {
    value: true
  });
  Text.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  var forwardedProps2 = _interopRequireWildcard(/* @__PURE__ */ requireForwardedProps());
  var _pick = _interopRequireDefault(/* @__PURE__ */ requirePick());
  var _useElementLayout = _interopRequireDefault(/* @__PURE__ */ requireUseElementLayout());
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  var _usePlatformMethods = _interopRequireDefault(/* @__PURE__ */ requireUsePlatformMethods());
  var _useResponderEvents = _interopRequireDefault(/* @__PURE__ */ requireUseResponderEvents());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _TextAncestorContext = _interopRequireDefault(/* @__PURE__ */ requireTextAncestorContext());
  var _useLocale = /* @__PURE__ */ requireUseLocale();
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["hrefAttrs", "numberOfLines", "onClick", "onLayout", "onPress", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture", "selectable"];
  var forwardPropsList = Object.assign({}, forwardedProps2.defaultProps, forwardedProps2.accessibilityProps, forwardedProps2.clickProps, forwardedProps2.focusProps, forwardedProps2.keyboardProps, forwardedProps2.mouseProps, forwardedProps2.touchProps, forwardedProps2.styleProps, {
    href: true,
    lang: true,
    pointerEvents: true
  });
  var pickProps = (props) => (0, _pick.default)(props, forwardPropsList);
  var Text$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var hrefAttrs = props.hrefAttrs, numberOfLines = props.numberOfLines, onClick = props.onClick, onLayout = props.onLayout, onPress = props.onPress, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderMove = props.onResponderMove, onResponderReject = props.onResponderReject, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminate = props.onResponderTerminate, onResponderTerminationRequest = props.onResponderTerminationRequest, onScrollShouldSetResponder = props.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = props.onStartShouldSetResponder, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, selectable = props.selectable, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var hasTextAncestor = React.useContext(_TextAncestorContext.default);
    var hostRef = React.useRef(null);
    var _useLocaleContext = (0, _useLocale.useLocaleContext)(), contextDirection = _useLocaleContext.direction;
    (0, _useElementLayout.default)(hostRef, onLayout);
    (0, _useResponderEvents.default)(hostRef, {
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onResponderEnd,
      onResponderGrant,
      onResponderMove,
      onResponderReject,
      onResponderRelease,
      onResponderStart,
      onResponderTerminate,
      onResponderTerminationRequest,
      onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture
    });
    var handleClick = React.useCallback((e) => {
      if (onClick != null) {
        onClick(e);
      } else if (onPress != null) {
        e.stopPropagation();
        onPress(e);
      }
    }, [onClick, onPress]);
    var component = hasTextAncestor ? "span" : "div";
    var langDirection = props.lang != null ? (0, _useLocale.getLocaleDirection)(props.lang) : null;
    var componentDirection = props.dir || langDirection;
    var writingDirection = componentDirection || contextDirection;
    var supportedProps = pickProps(rest);
    supportedProps.dir = componentDirection;
    if (!hasTextAncestor) {
      supportedProps.dir = componentDirection != null ? componentDirection : "auto";
    }
    if (onClick || onPress) {
      supportedProps.onClick = handleClick;
    }
    supportedProps.style = [numberOfLines != null && numberOfLines > 1 && {
      WebkitLineClamp: numberOfLines
    }, hasTextAncestor === true ? styles2.textHasAncestor$raw : styles2.text$raw, numberOfLines === 1 && styles2.textOneLine, numberOfLines != null && numberOfLines > 1 && styles2.textMultiLine, props.style, selectable === true && styles2.selectable, selectable === false && styles2.notSelectable, onPress && styles2.pressable];
    if (props.href != null) {
      component = "a";
      if (hrefAttrs != null) {
        var download = hrefAttrs.download, rel = hrefAttrs.rel, target = hrefAttrs.target;
        if (download != null) {
          supportedProps.download = download;
        }
        if (rel != null) {
          supportedProps.rel = rel;
        }
        if (typeof target === "string") {
          supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
        }
      }
    }
    var platformMethodsRef = (0, _usePlatformMethods.default)(supportedProps);
    var setRef = (0, _useMergeRefs.default)(hostRef, platformMethodsRef, forwardedRef);
    supportedProps.ref = setRef;
    var element = (0, _createElement.default)(component, supportedProps, {
      writingDirection
    });
    return hasTextAncestor ? element : /* @__PURE__ */ React.createElement(_TextAncestorContext.default.Provider, {
      value: true
    }, element);
  });
  Text$1.displayName = "Text";
  var textStyle = {
    backgroundColor: "transparent",
    border: "0 solid black",
    boxSizing: "border-box",
    color: "black",
    display: "inline",
    font: "14px System",
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    textAlign: "start",
    textDecoration: "none",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word"
  };
  var styles2 = _StyleSheet.default.create({
    text$raw: textStyle,
    textHasAncestor$raw: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, textStyle), {}, {
      color: "inherit",
      font: "inherit",
      textAlign: "inherit",
      whiteSpace: "inherit"
    }),
    textOneLine: {
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    },
    // See #13
    textMultiLine: {
      display: "-webkit-box",
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical"
    },
    notSelectable: {
      userSelect: "none"
    },
    selectable: {
      userSelect: "text"
    },
    pressable: {
      cursor: "pointer"
    }
  });
  Text.default = Text$1;
  return Text;
}
var hasRequiredAnimatedText;
function requireAnimatedText() {
  if (hasRequiredAnimatedText) return AnimatedText;
  hasRequiredAnimatedText = 1;
  Object.defineProperty(AnimatedText, "__esModule", {
    value: true
  });
  AnimatedText.default = void 0;
  _interopRequireWildcard(requireReact());
  var _Text = _interopRequireDefault(/* @__PURE__ */ requireText());
  var _createAnimatedComponent = _interopRequireDefault(/* @__PURE__ */ requireCreateAnimatedComponent());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  AnimatedText.default = (0, _createAnimatedComponent.default)(_Text.default);
  return AnimatedText;
}
var AnimatedView = {};
var hasRequiredAnimatedView;
function requireAnimatedView() {
  if (hasRequiredAnimatedView) return AnimatedView;
  hasRequiredAnimatedView = 1;
  Object.defineProperty(AnimatedView, "__esModule", {
    value: true
  });
  AnimatedView.default = void 0;
  _interopRequireWildcard(requireReact());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _createAnimatedComponent = _interopRequireDefault(/* @__PURE__ */ requireCreateAnimatedComponent());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  AnimatedView.default = (0, _createAnimatedComponent.default)(_View.default);
  return AnimatedView;
}
var AnimatedMock = {};
var AnimatedImplementation = {};
var AnimatedAddition = {};
var hasRequiredAnimatedAddition;
function requireAnimatedAddition() {
  if (hasRequiredAnimatedAddition) return AnimatedAddition;
  hasRequiredAnimatedAddition = 1;
  Object.defineProperty(AnimatedAddition, "__esModule", {
    value: true
  });
  AnimatedAddition.default = void 0;
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedAddition$1 = class AnimatedAddition extends _AnimatedWithChildren.default {
    constructor(a, b) {
      super();
      this._a = typeof a === "number" ? new _AnimatedValue.default(a) : a;
      this._b = typeof b === "number" ? new _AnimatedValue.default(b) : b;
    }
    __makeNative(platformConfig) {
      this._a.__makeNative(platformConfig);
      this._b.__makeNative(platformConfig);
      super.__makeNative(platformConfig);
    }
    __getValue() {
      return this._a.__getValue() + this._b.__getValue();
    }
    interpolate(config) {
      return new _AnimatedInterpolation.default(this, config);
    }
    __attach() {
      this._a.__addChild(this);
      this._b.__addChild(this);
    }
    __detach() {
      this._a.__removeChild(this);
      this._b.__removeChild(this);
      super.__detach();
    }
    __getNativeConfig() {
      return {
        type: "addition",
        input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
      };
    }
  };
  AnimatedAddition.default = AnimatedAddition$1;
  return AnimatedAddition;
}
var AnimatedDiffClamp = {};
var hasRequiredAnimatedDiffClamp;
function requireAnimatedDiffClamp() {
  if (hasRequiredAnimatedDiffClamp) return AnimatedDiffClamp;
  hasRequiredAnimatedDiffClamp = 1;
  Object.defineProperty(AnimatedDiffClamp, "__esModule", {
    value: true
  });
  AnimatedDiffClamp.default = void 0;
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedDiffClamp$1 = class AnimatedDiffClamp extends _AnimatedWithChildren.default {
    constructor(a, min, max) {
      super();
      this._a = a;
      this._min = min;
      this._max = max;
      this._value = this._lastValue = this._a.__getValue();
    }
    __makeNative(platformConfig) {
      this._a.__makeNative(platformConfig);
      super.__makeNative(platformConfig);
    }
    interpolate(config) {
      return new _AnimatedInterpolation.default(this, config);
    }
    __getValue() {
      var value = this._a.__getValue();
      var diff = value - this._lastValue;
      this._lastValue = value;
      this._value = Math.min(Math.max(this._value + diff, this._min), this._max);
      return this._value;
    }
    __attach() {
      this._a.__addChild(this);
    }
    __detach() {
      this._a.__removeChild(this);
      super.__detach();
    }
    __getNativeConfig() {
      return {
        type: "diffclamp",
        input: this._a.__getNativeTag(),
        min: this._min,
        max: this._max
      };
    }
  };
  AnimatedDiffClamp.default = AnimatedDiffClamp$1;
  return AnimatedDiffClamp;
}
var AnimatedDivision = {};
var hasRequiredAnimatedDivision;
function requireAnimatedDivision() {
  if (hasRequiredAnimatedDivision) return AnimatedDivision;
  hasRequiredAnimatedDivision = 1;
  Object.defineProperty(AnimatedDivision, "__esModule", {
    value: true
  });
  AnimatedDivision.default = void 0;
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedNode = _interopRequireDefault(/* @__PURE__ */ requireAnimatedNode());
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedDivision$1 = class AnimatedDivision extends _AnimatedWithChildren.default {
    constructor(a, b) {
      super();
      this._warnedAboutDivideByZero = false;
      if (b === 0 || b instanceof _AnimatedNode.default && b.__getValue() === 0) {
        console.error("Detected potential division by zero in AnimatedDivision");
      }
      this._a = typeof a === "number" ? new _AnimatedValue.default(a) : a;
      this._b = typeof b === "number" ? new _AnimatedValue.default(b) : b;
    }
    __makeNative(platformConfig) {
      this._a.__makeNative(platformConfig);
      this._b.__makeNative(platformConfig);
      super.__makeNative(platformConfig);
    }
    __getValue() {
      var a = this._a.__getValue();
      var b = this._b.__getValue();
      if (b === 0) {
        if (!this._warnedAboutDivideByZero) {
          console.error("Detected division by zero in AnimatedDivision");
          this._warnedAboutDivideByZero = true;
        }
        return 0;
      }
      this._warnedAboutDivideByZero = false;
      return a / b;
    }
    interpolate(config) {
      return new _AnimatedInterpolation.default(this, config);
    }
    __attach() {
      this._a.__addChild(this);
      this._b.__addChild(this);
    }
    __detach() {
      this._a.__removeChild(this);
      this._b.__removeChild(this);
      super.__detach();
    }
    __getNativeConfig() {
      return {
        type: "division",
        input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
      };
    }
  };
  AnimatedDivision.default = AnimatedDivision$1;
  return AnimatedDivision;
}
var AnimatedModulo = {};
var hasRequiredAnimatedModulo;
function requireAnimatedModulo() {
  if (hasRequiredAnimatedModulo) return AnimatedModulo;
  hasRequiredAnimatedModulo = 1;
  Object.defineProperty(AnimatedModulo, "__esModule", {
    value: true
  });
  AnimatedModulo.default = void 0;
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedModulo$1 = class AnimatedModulo extends _AnimatedWithChildren.default {
    constructor(a, modulus) {
      super();
      this._a = a;
      this._modulus = modulus;
    }
    __makeNative(platformConfig) {
      this._a.__makeNative(platformConfig);
      super.__makeNative(platformConfig);
    }
    __getValue() {
      return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
    }
    interpolate(config) {
      return new _AnimatedInterpolation.default(this, config);
    }
    __attach() {
      this._a.__addChild(this);
    }
    __detach() {
      this._a.__removeChild(this);
      super.__detach();
    }
    __getNativeConfig() {
      return {
        type: "modulus",
        input: this._a.__getNativeTag(),
        modulus: this._modulus
      };
    }
  };
  AnimatedModulo.default = AnimatedModulo$1;
  return AnimatedModulo;
}
var AnimatedMultiplication = {};
var hasRequiredAnimatedMultiplication;
function requireAnimatedMultiplication() {
  if (hasRequiredAnimatedMultiplication) return AnimatedMultiplication;
  hasRequiredAnimatedMultiplication = 1;
  Object.defineProperty(AnimatedMultiplication, "__esModule", {
    value: true
  });
  AnimatedMultiplication.default = void 0;
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedMultiplication$1 = class AnimatedMultiplication extends _AnimatedWithChildren.default {
    constructor(a, b) {
      super();
      this._a = typeof a === "number" ? new _AnimatedValue.default(a) : a;
      this._b = typeof b === "number" ? new _AnimatedValue.default(b) : b;
    }
    __makeNative(platformConfig) {
      this._a.__makeNative(platformConfig);
      this._b.__makeNative(platformConfig);
      super.__makeNative(platformConfig);
    }
    __getValue() {
      return this._a.__getValue() * this._b.__getValue();
    }
    interpolate(config) {
      return new _AnimatedInterpolation.default(this, config);
    }
    __attach() {
      this._a.__addChild(this);
      this._b.__addChild(this);
    }
    __detach() {
      this._a.__removeChild(this);
      this._b.__removeChild(this);
      super.__detach();
    }
    __getNativeConfig() {
      return {
        type: "multiplication",
        input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
      };
    }
  };
  AnimatedMultiplication.default = AnimatedMultiplication$1;
  return AnimatedMultiplication;
}
var AnimatedSubtraction = {};
var hasRequiredAnimatedSubtraction;
function requireAnimatedSubtraction() {
  if (hasRequiredAnimatedSubtraction) return AnimatedSubtraction;
  hasRequiredAnimatedSubtraction = 1;
  Object.defineProperty(AnimatedSubtraction, "__esModule", {
    value: true
  });
  AnimatedSubtraction.default = void 0;
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedSubtraction$1 = class AnimatedSubtraction extends _AnimatedWithChildren.default {
    constructor(a, b) {
      super();
      this._a = typeof a === "number" ? new _AnimatedValue.default(a) : a;
      this._b = typeof b === "number" ? new _AnimatedValue.default(b) : b;
    }
    __makeNative(platformConfig) {
      this._a.__makeNative(platformConfig);
      this._b.__makeNative(platformConfig);
      super.__makeNative(platformConfig);
    }
    __getValue() {
      return this._a.__getValue() - this._b.__getValue();
    }
    interpolate(config) {
      return new _AnimatedInterpolation.default(this, config);
    }
    __attach() {
      this._a.__addChild(this);
      this._b.__addChild(this);
    }
    __detach() {
      this._a.__removeChild(this);
      this._b.__removeChild(this);
      super.__detach();
    }
    __getNativeConfig() {
      return {
        type: "subtraction",
        input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
      };
    }
  };
  AnimatedSubtraction.default = AnimatedSubtraction$1;
  return AnimatedSubtraction;
}
var AnimatedTracking = {};
var hasRequiredAnimatedTracking;
function requireAnimatedTracking() {
  if (hasRequiredAnimatedTracking) return AnimatedTracking;
  hasRequiredAnimatedTracking = 1;
  Object.defineProperty(AnimatedTracking, "__esModule", {
    value: true
  });
  AnimatedTracking.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedNode = _interopRequireDefault(/* @__PURE__ */ requireAnimatedNode());
  var _NativeAnimatedHelper = /* @__PURE__ */ requireNativeAnimatedHelper();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let AnimatedTracking$1 = class AnimatedTracking extends _AnimatedNode.default {
    constructor(value, parent, animationClass, animationConfig, callback) {
      super();
      this._value = value;
      this._parent = parent;
      this._animationClass = animationClass;
      this._animationConfig = animationConfig;
      this._useNativeDriver = (0, _NativeAnimatedHelper.shouldUseNativeDriver)(animationConfig);
      this._callback = callback;
      this.__attach();
    }
    __makeNative() {
      this.__isNative = true;
      this._parent.__makeNative();
      super.__makeNative();
      this._value.__makeNative();
    }
    __getValue() {
      return this._parent.__getValue();
    }
    __attach() {
      this._parent.__addChild(this);
      if (this._useNativeDriver) {
        this.__makeNative();
      }
    }
    __detach() {
      this._parent.__removeChild(this);
      super.__detach();
    }
    update() {
      this._value.animate(new this._animationClass((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this._animationConfig), {}, {
        toValue: this._animationConfig.toValue.__getValue()
      })), this._callback);
    }
    __getNativeConfig() {
      var animation = new this._animationClass((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this._animationConfig), {}, {
        // remove toValue from the config as it's a ref to Animated.Value
        toValue: void 0
      }));
      var animationConfig = animation.__getNativeAnimationConfig();
      return {
        type: "tracking",
        animationId: (0, _NativeAnimatedHelper.generateNewAnimationId)(),
        animationConfig,
        toValue: this._parent.__getNativeTag(),
        value: this._value.__getNativeTag()
      };
    }
  };
  AnimatedTracking.default = AnimatedTracking$1;
  return AnimatedTracking;
}
var AnimatedValueXY = {};
var hasRequiredAnimatedValueXY;
function requireAnimatedValueXY() {
  if (hasRequiredAnimatedValueXY) return AnimatedValueXY;
  hasRequiredAnimatedValueXY = 1;
  Object.defineProperty(AnimatedValueXY, "__esModule", {
    value: true
  });
  AnimatedValueXY.default = void 0;
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _uniqueId = 1;
  let AnimatedValueXY$1 = class AnimatedValueXY extends _AnimatedWithChildren.default {
    constructor(valueIn) {
      super();
      var value = valueIn || {
        x: 0,
        y: 0
      };
      if (typeof value.x === "number" && typeof value.y === "number") {
        this.x = new _AnimatedValue.default(value.x);
        this.y = new _AnimatedValue.default(value.y);
      } else {
        (0, _invariant.default)(value.x instanceof _AnimatedValue.default && value.y instanceof _AnimatedValue.default, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.");
        this.x = value.x;
        this.y = value.y;
      }
      this._listeners = {};
    }
    /**
     * Directly set the value. This will stop any animations running on the value
     * and update all the bound properties.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#setvalue
     */
    setValue(value) {
      this.x.setValue(value.x);
      this.y.setValue(value.y);
    }
    /**
     * Sets an offset that is applied on top of whatever value is set, whether
     * via `setValue`, an animation, or `Animated.event`. Useful for compensating
     * things like the start of a pan gesture.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#setoffset
     */
    setOffset(offset) {
      this.x.setOffset(offset.x);
      this.y.setOffset(offset.y);
    }
    /**
     * Merges the offset value into the base value and resets the offset to zero.
     * The final output of the value is unchanged.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#flattenoffset
     */
    flattenOffset() {
      this.x.flattenOffset();
      this.y.flattenOffset();
    }
    /**
     * Sets the offset value to the base value, and resets the base value to
     * zero. The final output of the value is unchanged.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#extractoffset
     */
    extractOffset() {
      this.x.extractOffset();
      this.y.extractOffset();
    }
    __getValue() {
      return {
        x: this.x.__getValue(),
        y: this.y.__getValue()
      };
    }
    /**
     * Stops any animation and resets the value to its original.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#resetanimation
     */
    resetAnimation(callback) {
      this.x.resetAnimation();
      this.y.resetAnimation();
      callback && callback(this.__getValue());
    }
    /**
     * Stops any running animation or tracking. `callback` is invoked with the
     * final value after stopping the animation, which is useful for updating
     * state to match the animation position with layout.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#stopanimation
     */
    stopAnimation(callback) {
      this.x.stopAnimation();
      this.y.stopAnimation();
      callback && callback(this.__getValue());
    }
    /**
     * Adds an asynchronous listener to the value so you can observe updates from
     * animations.  This is useful because there is no way to synchronously read
     * the value because it might be driven natively.
     *
     * Returns a string that serves as an identifier for the listener.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#addlistener
     */
    addListener(callback) {
      var id = String(_uniqueId++);
      var jointCallback = (_ref) => {
        _ref.value;
        callback(this.__getValue());
      };
      this._listeners[id] = {
        x: this.x.addListener(jointCallback),
        y: this.y.addListener(jointCallback)
      };
      return id;
    }
    /**
     * Unregister a listener. The `id` param shall match the identifier
     * previously returned by `addListener()`.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#removelistener
     */
    removeListener(id) {
      this.x.removeListener(this._listeners[id].x);
      this.y.removeListener(this._listeners[id].y);
      delete this._listeners[id];
    }
    /**
     * Remove all registered listeners.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#removealllisteners
     */
    removeAllListeners() {
      this.x.removeAllListeners();
      this.y.removeAllListeners();
      this._listeners = {};
    }
    /**
     * Converts `{x, y}` into `{left, top}` for use in style.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#getlayout
     */
    getLayout() {
      return {
        left: this.x,
        top: this.y
      };
    }
    /**
     * Converts `{x, y}` into a useable translation transform.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html#gettranslatetransform
     */
    getTranslateTransform() {
      return [{
        translateX: this.x
      }, {
        translateY: this.y
      }];
    }
  };
  AnimatedValueXY.default = AnimatedValueXY$1;
  return AnimatedValueXY;
}
var DecayAnimation = {};
var Animation = {};
var hasRequiredAnimation;
function requireAnimation() {
  if (hasRequiredAnimation) return Animation;
  hasRequiredAnimation = 1;
  Object.defineProperty(Animation, "__esModule", {
    value: true
  });
  Animation.default = void 0;
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var startNativeAnimationNextId = 1;
  let Animation$1 = class Animation {
    start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    }
    stop() {
      if (this.__nativeId) {
        _NativeAnimatedHelper.default.API.stopAnimation(this.__nativeId);
      }
    }
    __getNativeAnimationConfig() {
      throw new Error("This animation type cannot be offloaded to native");
    }
    // Helper function for subclasses to make sure onEnd is only called once.
    __debouncedOnEnd(result) {
      var onEnd = this.__onEnd;
      this.__onEnd = null;
      onEnd && onEnd(result);
    }
    __startNativeAnimation(animatedValue) {
      var startNativeAnimationWaitId = startNativeAnimationNextId + ":startAnimation";
      startNativeAnimationNextId += 1;
      _NativeAnimatedHelper.default.API.setWaitingForIdentifier(startNativeAnimationWaitId);
      try {
        var config = this.__getNativeAnimationConfig();
        animatedValue.__makeNative(config.platformConfig);
        this.__nativeId = _NativeAnimatedHelper.default.generateNewAnimationId();
        _NativeAnimatedHelper.default.API.startAnimatingNode(
          this.__nativeId,
          animatedValue.__getNativeTag(),
          config,
          // $FlowFixMe[method-unbinding] added when improving typing for this parameters
          this.__debouncedOnEnd.bind(this)
        );
      } catch (e) {
        throw e;
      } finally {
        _NativeAnimatedHelper.default.API.unsetWaitingForIdentifier(startNativeAnimationWaitId);
      }
    }
  };
  Animation.default = Animation$1;
  return Animation;
}
var hasRequiredDecayAnimation;
function requireDecayAnimation() {
  if (hasRequiredDecayAnimation) return DecayAnimation;
  hasRequiredDecayAnimation = 1;
  Object.defineProperty(DecayAnimation, "__esModule", {
    value: true
  });
  DecayAnimation.default = void 0;
  var _Animation = _interopRequireDefault(/* @__PURE__ */ requireAnimation());
  var _NativeAnimatedHelper = /* @__PURE__ */ requireNativeAnimatedHelper();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let DecayAnimation$1 = class DecayAnimation extends _Animation.default {
    constructor(config) {
      var _config$deceleration, _config$isInteraction, _config$iterations;
      super();
      this._deceleration = (_config$deceleration = config.deceleration) !== null && _config$deceleration !== void 0 ? _config$deceleration : 0.998;
      this._velocity = config.velocity;
      this._useNativeDriver = (0, _NativeAnimatedHelper.shouldUseNativeDriver)(config);
      this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
      this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    }
    __getNativeAnimationConfig() {
      return {
        type: "decay",
        deceleration: this._deceleration,
        velocity: this._velocity,
        iterations: this.__iterations
      };
    }
    start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
      this.__active = true;
      this._lastValue = fromValue;
      this._fromValue = fromValue;
      this._onUpdate = onUpdate;
      this.__onEnd = onEnd;
      this._startTime = Date.now();
      if (this._useNativeDriver) {
        this.__startNativeAnimation(animatedValue);
      } else {
        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
      }
    }
    onUpdate() {
      var now = Date.now();
      var value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));
      this._onUpdate(value);
      if (Math.abs(this._lastValue - value) < 0.1) {
        this.__debouncedOnEnd({
          finished: true
        });
        return;
      }
      this._lastValue = value;
      if (this.__active) {
        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
      }
    }
    stop() {
      super.stop();
      this.__active = false;
      commonjsGlobal.cancelAnimationFrame(this._animationFrame);
      this.__debouncedOnEnd({
        finished: false
      });
    }
  };
  DecayAnimation.default = DecayAnimation$1;
  return DecayAnimation;
}
var SpringAnimation = {};
var SpringConfig = {};
var hasRequiredSpringConfig;
function requireSpringConfig() {
  if (hasRequiredSpringConfig) return SpringConfig;
  hasRequiredSpringConfig = 1;
  Object.defineProperty(SpringConfig, "__esModule", {
    value: true
  });
  SpringConfig.default = void 0;
  function stiffnessFromOrigamiValue(oValue) {
    return (oValue - 30) * 3.62 + 194;
  }
  function dampingFromOrigamiValue(oValue) {
    return (oValue - 8) * 3 + 25;
  }
  function fromOrigamiTensionAndFriction(tension, friction) {
    return {
      stiffness: stiffnessFromOrigamiValue(tension),
      damping: dampingFromOrigamiValue(friction)
    };
  }
  function fromBouncinessAndSpeed(bounciness, speed) {
    function normalize(value, startValue, endValue) {
      return (value - startValue) / (endValue - startValue);
    }
    function projectNormal(n, start, end) {
      return start + n * (end - start);
    }
    function linearInterpolation(t, start, end) {
      return t * end + (1 - t) * start;
    }
    function quadraticOutInterpolation(t, start, end) {
      return linearInterpolation(2 * t - t * t, start, end);
    }
    function b3Friction1(x) {
      return 7e-4 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
    }
    function b3Friction2(x) {
      return 44e-6 * Math.pow(x, 3) - 6e-3 * Math.pow(x, 2) + 0.36 * x + 2;
    }
    function b3Friction3(x) {
      return 45e-8 * Math.pow(x, 3) - 332e-6 * Math.pow(x, 2) + 0.1078 * x + 5.84;
    }
    function b3Nobounce(tension) {
      if (tension <= 18) {
        return b3Friction1(tension);
      } else if (tension > 18 && tension <= 44) {
        return b3Friction2(tension);
      } else {
        return b3Friction3(tension);
      }
    }
    var b = normalize(bounciness / 1.7, 0, 20);
    b = projectNormal(b, 0, 0.8);
    var s = normalize(speed / 1.7, 0, 20);
    var bouncyTension = projectNormal(s, 0.5, 200);
    var bouncyFriction = quadraticOutInterpolation(b, b3Nobounce(bouncyTension), 0.01);
    return {
      stiffness: stiffnessFromOrigamiValue(bouncyTension),
      damping: dampingFromOrigamiValue(bouncyFriction)
    };
  }
  SpringConfig.default = {
    fromOrigamiTensionAndFriction,
    fromBouncinessAndSpeed
  };
  return SpringConfig;
}
var AnimatedColor = {};
var hasRequiredAnimatedColor;
function requireAnimatedColor() {
  if (hasRequiredAnimatedColor) return AnimatedColor;
  hasRequiredAnimatedColor = 1;
  Object.defineProperty(AnimatedColor, "__esModule", {
    value: true
  });
  AnimatedColor.default = void 0;
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedWithChildren = _interopRequireDefault(/* @__PURE__ */ requireAnimatedWithChildren());
  var _normalizeColors = _interopRequireDefault(requireNormalizeColors());
  var _NativeAnimatedHelper = _interopRequireDefault(/* @__PURE__ */ requireNativeAnimatedHelper());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var NativeAnimatedAPI = _NativeAnimatedHelper.default.API;
  var defaultColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
  var _uniqueId = 1;
  var processColorObject = (color) => {
    return color;
  };
  function processColor2(color) {
    if (color === void 0 || color === null) {
      return null;
    }
    if (isRgbaValue(color)) {
      return color;
    }
    var normalizedColor = (0, _normalizeColors.default)(
      // $FlowIgnore[incompatible-cast] - Type is verified above
      color
    );
    if (normalizedColor === void 0 || normalizedColor === null) {
      return null;
    }
    if (typeof normalizedColor === "object") {
      var processedColorObj = processColorObject(normalizedColor);
      if (processedColorObj != null) {
        return processedColorObj;
      }
    } else if (typeof normalizedColor === "number") {
      var r = (normalizedColor & 4278190080) >>> 24;
      var g = (normalizedColor & 16711680) >>> 16;
      var b = (normalizedColor & 65280) >>> 8;
      var a = (normalizedColor & 255) / 255;
      return {
        r,
        g,
        b,
        a
      };
    }
    return null;
  }
  function isRgbaValue(value) {
    return value && typeof value.r === "number" && typeof value.g === "number" && typeof value.b === "number" && typeof value.a === "number";
  }
  function isRgbaAnimatedValue(value) {
    return value && value.r instanceof _AnimatedValue.default && value.g instanceof _AnimatedValue.default && value.b instanceof _AnimatedValue.default && value.a instanceof _AnimatedValue.default;
  }
  let AnimatedColor$1 = class AnimatedColor extends _AnimatedWithChildren.default {
    constructor(valueIn, config) {
      super();
      this._listeners = {};
      var value = valueIn !== null && valueIn !== void 0 ? valueIn : defaultColor;
      if (isRgbaAnimatedValue(value)) {
        var rgbaAnimatedValue = value;
        this.r = rgbaAnimatedValue.r;
        this.g = rgbaAnimatedValue.g;
        this.b = rgbaAnimatedValue.b;
        this.a = rgbaAnimatedValue.a;
      } else {
        var _processColor;
        var processedColor = (
          // $FlowIgnore[incompatible-cast] - Type is verified above
          (_processColor = processColor2(value)) !== null && _processColor !== void 0 ? _processColor : defaultColor
        );
        var initColor = defaultColor;
        if (isRgbaValue(processedColor)) {
          initColor = processedColor;
        } else {
          this.nativeColor = processedColor;
        }
        this.r = new _AnimatedValue.default(initColor.r);
        this.g = new _AnimatedValue.default(initColor.g);
        this.b = new _AnimatedValue.default(initColor.b);
        this.a = new _AnimatedValue.default(initColor.a);
      }
      if (this.nativeColor || config && config.useNativeDriver) {
        this.__makeNative();
      }
    }
    /**
     * Directly set the value. This will stop any animations running on the value
     * and update all the bound properties.
     */
    setValue(value) {
      var _processColor2;
      var shouldUpdateNodeConfig = false;
      if (this.__isNative) {
        var nativeTag = this.__getNativeTag();
        NativeAnimatedAPI.setWaitingForIdentifier(nativeTag.toString());
      }
      var processedColor = (_processColor2 = processColor2(value)) !== null && _processColor2 !== void 0 ? _processColor2 : defaultColor;
      if (isRgbaValue(processedColor)) {
        var rgbaValue = processedColor;
        this.r.setValue(rgbaValue.r);
        this.g.setValue(rgbaValue.g);
        this.b.setValue(rgbaValue.b);
        this.a.setValue(rgbaValue.a);
        if (this.nativeColor != null) {
          this.nativeColor = null;
          shouldUpdateNodeConfig = true;
        }
      } else {
        var nativeColor = processedColor;
        if (this.nativeColor !== nativeColor) {
          this.nativeColor = nativeColor;
          shouldUpdateNodeConfig = true;
        }
      }
      if (this.__isNative) {
        var _nativeTag = this.__getNativeTag();
        if (shouldUpdateNodeConfig) {
          NativeAnimatedAPI.updateAnimatedNodeConfig(_nativeTag, this.__getNativeConfig());
        }
        NativeAnimatedAPI.unsetWaitingForIdentifier(_nativeTag.toString());
      }
    }
    /**
     * Sets an offset that is applied on top of whatever value is set, whether
     * via `setValue`, an animation, or `Animated.event`. Useful for compensating
     * things like the start of a pan gesture.
     */
    setOffset(offset) {
      this.r.setOffset(offset.r);
      this.g.setOffset(offset.g);
      this.b.setOffset(offset.b);
      this.a.setOffset(offset.a);
    }
    /**
     * Merges the offset value into the base value and resets the offset to zero.
     * The final output of the value is unchanged.
     */
    flattenOffset() {
      this.r.flattenOffset();
      this.g.flattenOffset();
      this.b.flattenOffset();
      this.a.flattenOffset();
    }
    /**
     * Sets the offset value to the base value, and resets the base value to
     * zero. The final output of the value is unchanged.
     */
    extractOffset() {
      this.r.extractOffset();
      this.g.extractOffset();
      this.b.extractOffset();
      this.a.extractOffset();
    }
    /**
     * Adds an asynchronous listener to the value so you can observe updates from
     * animations.  This is useful because there is no way to synchronously read
     * the value because it might be driven natively.
     *
     * Returns a string that serves as an identifier for the listener.
     */
    addListener(callback) {
      var id = String(_uniqueId++);
      var jointCallback = (_ref) => {
        _ref.value;
        callback(this.__getValue());
      };
      this._listeners[id] = {
        r: this.r.addListener(jointCallback),
        g: this.g.addListener(jointCallback),
        b: this.b.addListener(jointCallback),
        a: this.a.addListener(jointCallback)
      };
      return id;
    }
    /**
     * Unregister a listener. The `id` param shall match the identifier
     * previously returned by `addListener()`.
     */
    removeListener(id) {
      this.r.removeListener(this._listeners[id].r);
      this.g.removeListener(this._listeners[id].g);
      this.b.removeListener(this._listeners[id].b);
      this.a.removeListener(this._listeners[id].a);
      delete this._listeners[id];
    }
    /**
     * Remove all registered listeners.
     */
    removeAllListeners() {
      this.r.removeAllListeners();
      this.g.removeAllListeners();
      this.b.removeAllListeners();
      this.a.removeAllListeners();
      this._listeners = {};
    }
    /**
     * Stops any running animation or tracking. `callback` is invoked with the
     * final value after stopping the animation, which is useful for updating
     * state to match the animation position with layout.
     */
    stopAnimation(callback) {
      this.r.stopAnimation();
      this.g.stopAnimation();
      this.b.stopAnimation();
      this.a.stopAnimation();
      callback && callback(this.__getValue());
    }
    /**
     * Stops any animation and resets the value to its original.
     */
    resetAnimation(callback) {
      this.r.resetAnimation();
      this.g.resetAnimation();
      this.b.resetAnimation();
      this.a.resetAnimation();
      callback && callback(this.__getValue());
    }
    __getValue() {
      if (this.nativeColor != null) {
        return this.nativeColor;
      } else {
        return "rgba(" + this.r.__getValue() + ", " + this.g.__getValue() + ", " + this.b.__getValue() + ", " + this.a.__getValue() + ")";
      }
    }
    __attach() {
      this.r.__addChild(this);
      this.g.__addChild(this);
      this.b.__addChild(this);
      this.a.__addChild(this);
      super.__attach();
    }
    __detach() {
      this.r.__removeChild(this);
      this.g.__removeChild(this);
      this.b.__removeChild(this);
      this.a.__removeChild(this);
      super.__detach();
    }
    __makeNative(platformConfig) {
      this.r.__makeNative(platformConfig);
      this.g.__makeNative(platformConfig);
      this.b.__makeNative(platformConfig);
      this.a.__makeNative(platformConfig);
      super.__makeNative(platformConfig);
    }
    __getNativeConfig() {
      return {
        type: "color",
        r: this.r.__getNativeTag(),
        g: this.g.__getNativeTag(),
        b: this.b.__getNativeTag(),
        a: this.a.__getNativeTag(),
        nativeColor: this.nativeColor
      };
    }
  };
  AnimatedColor.default = AnimatedColor$1;
  return AnimatedColor;
}
var hasRequiredSpringAnimation;
function requireSpringAnimation() {
  if (hasRequiredSpringAnimation) return SpringAnimation;
  hasRequiredSpringAnimation = 1;
  Object.defineProperty(SpringAnimation, "__esModule", {
    value: true
  });
  SpringAnimation.default = void 0;
  var _Animation = _interopRequireDefault(/* @__PURE__ */ requireAnimation());
  var _SpringConfig = _interopRequireDefault(/* @__PURE__ */ requireSpringConfig());
  var _invariant = _interopRequireDefault(requireInvariant());
  var _NativeAnimatedHelper = /* @__PURE__ */ requireNativeAnimatedHelper();
  _interopRequireDefault(/* @__PURE__ */ requireAnimatedColor());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let SpringAnimation$1 = class SpringAnimation2 extends _Animation.default {
    constructor(config) {
      var _config$overshootClam, _config$restDisplacem, _config$restSpeedThre, _config$velocity, _config$velocity2, _config$delay, _config$isInteraction, _config$iterations;
      super();
      this._overshootClamping = (_config$overshootClam = config.overshootClamping) !== null && _config$overshootClam !== void 0 ? _config$overshootClam : false;
      this._restDisplacementThreshold = (_config$restDisplacem = config.restDisplacementThreshold) !== null && _config$restDisplacem !== void 0 ? _config$restDisplacem : 1e-3;
      this._restSpeedThreshold = (_config$restSpeedThre = config.restSpeedThreshold) !== null && _config$restSpeedThre !== void 0 ? _config$restSpeedThre : 1e-3;
      this._initialVelocity = (_config$velocity = config.velocity) !== null && _config$velocity !== void 0 ? _config$velocity : 0;
      this._lastVelocity = (_config$velocity2 = config.velocity) !== null && _config$velocity2 !== void 0 ? _config$velocity2 : 0;
      this._toValue = config.toValue;
      this._delay = (_config$delay = config.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
      this._useNativeDriver = (0, _NativeAnimatedHelper.shouldUseNativeDriver)(config);
      this._platformConfig = config.platformConfig;
      this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
      this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
      if (config.stiffness !== void 0 || config.damping !== void 0 || config.mass !== void 0) {
        var _config$stiffness, _config$damping, _config$mass;
        (0, _invariant.default)(config.bounciness === void 0 && config.speed === void 0 && config.tension === void 0 && config.friction === void 0, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
        this._stiffness = (_config$stiffness = config.stiffness) !== null && _config$stiffness !== void 0 ? _config$stiffness : 100;
        this._damping = (_config$damping = config.damping) !== null && _config$damping !== void 0 ? _config$damping : 10;
        this._mass = (_config$mass = config.mass) !== null && _config$mass !== void 0 ? _config$mass : 1;
      } else if (config.bounciness !== void 0 || config.speed !== void 0) {
        var _config$bounciness, _config$speed;
        (0, _invariant.default)(config.tension === void 0 && config.friction === void 0 && config.stiffness === void 0 && config.damping === void 0 && config.mass === void 0, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
        var springConfig = _SpringConfig.default.fromBouncinessAndSpeed((_config$bounciness = config.bounciness) !== null && _config$bounciness !== void 0 ? _config$bounciness : 8, (_config$speed = config.speed) !== null && _config$speed !== void 0 ? _config$speed : 12);
        this._stiffness = springConfig.stiffness;
        this._damping = springConfig.damping;
        this._mass = 1;
      } else {
        var _config$tension, _config$friction;
        var _springConfig = _SpringConfig.default.fromOrigamiTensionAndFriction((_config$tension = config.tension) !== null && _config$tension !== void 0 ? _config$tension : 40, (_config$friction = config.friction) !== null && _config$friction !== void 0 ? _config$friction : 7);
        this._stiffness = _springConfig.stiffness;
        this._damping = _springConfig.damping;
        this._mass = 1;
      }
      (0, _invariant.default)(this._stiffness > 0, "Stiffness value must be greater than 0");
      (0, _invariant.default)(this._damping > 0, "Damping value must be greater than 0");
      (0, _invariant.default)(this._mass > 0, "Mass value must be greater than 0");
    }
    __getNativeAnimationConfig() {
      var _this$_initialVelocit;
      return {
        type: "spring",
        overshootClamping: this._overshootClamping,
        restDisplacementThreshold: this._restDisplacementThreshold,
        restSpeedThreshold: this._restSpeedThreshold,
        stiffness: this._stiffness,
        damping: this._damping,
        mass: this._mass,
        initialVelocity: (_this$_initialVelocit = this._initialVelocity) !== null && _this$_initialVelocit !== void 0 ? _this$_initialVelocit : this._lastVelocity,
        toValue: this._toValue,
        iterations: this.__iterations,
        platformConfig: this._platformConfig
      };
    }
    start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
      this.__active = true;
      this._startPosition = fromValue;
      this._lastPosition = this._startPosition;
      this._onUpdate = onUpdate;
      this.__onEnd = onEnd;
      this._lastTime = Date.now();
      this._frameTime = 0;
      if (previousAnimation instanceof SpringAnimation2) {
        var internalState = previousAnimation.getInternalState();
        this._lastPosition = internalState.lastPosition;
        this._lastVelocity = internalState.lastVelocity;
        this._initialVelocity = this._lastVelocity;
        this._lastTime = internalState.lastTime;
      }
      var start = () => {
        if (this._useNativeDriver) {
          this.__startNativeAnimation(animatedValue);
        } else {
          this.onUpdate();
        }
      };
      if (this._delay) {
        this._timeout = setTimeout(start, this._delay);
      } else {
        start();
      }
    }
    getInternalState() {
      return {
        lastPosition: this._lastPosition,
        lastVelocity: this._lastVelocity,
        lastTime: this._lastTime
      };
    }
    /**
     * This spring model is based off of a damped harmonic oscillator
     * (https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator).
     *
     * We use the closed form of the second order differential equation:
     *
     * x'' + (2ζ⍵_0)x' + ⍵^2x = 0
     *
     * where
     *    ⍵_0 = √(k / m) (undamped angular frequency of the oscillator),
     *    ζ = c / 2√mk (damping ratio),
     *    c = damping constant
     *    k = stiffness
     *    m = mass
     *
     * The derivation of the closed form is described in detail here:
     * http://planetmath.org/sites/default/files/texpdf/39745.pdf
     *
     * This algorithm happens to match the algorithm used by CASpringAnimation,
     * a QuartzCore (iOS) API that creates spring animations.
     */
    onUpdate() {
      var MAX_STEPS = 64;
      var now = Date.now();
      if (now > this._lastTime + MAX_STEPS) {
        now = this._lastTime + MAX_STEPS;
      }
      var deltaTime = (now - this._lastTime) / 1e3;
      this._frameTime += deltaTime;
      var c = this._damping;
      var m = this._mass;
      var k = this._stiffness;
      var v0 = -this._initialVelocity;
      var zeta = c / (2 * Math.sqrt(k * m));
      var omega0 = Math.sqrt(k / m);
      var omega1 = omega0 * Math.sqrt(1 - zeta * zeta);
      var x0 = this._toValue - this._startPosition;
      var position2 = 0;
      var velocity = 0;
      var t = this._frameTime;
      if (zeta < 1) {
        var envelope = Math.exp(-zeta * omega0 * t);
        position2 = this._toValue - envelope * ((v0 + zeta * omega0 * x0) / omega1 * Math.sin(omega1 * t) + x0 * Math.cos(omega1 * t));
        velocity = zeta * omega0 * envelope * (Math.sin(omega1 * t) * (v0 + zeta * omega0 * x0) / omega1 + x0 * Math.cos(omega1 * t)) - envelope * (Math.cos(omega1 * t) * (v0 + zeta * omega0 * x0) - omega1 * x0 * Math.sin(omega1 * t));
      } else {
        var _envelope = Math.exp(-omega0 * t);
        position2 = this._toValue - _envelope * (x0 + (v0 + omega0 * x0) * t);
        velocity = _envelope * (v0 * (t * omega0 - 1) + t * x0 * (omega0 * omega0));
      }
      this._lastTime = now;
      this._lastPosition = position2;
      this._lastVelocity = velocity;
      this._onUpdate(position2);
      if (!this.__active) {
        return;
      }
      var isOvershooting = false;
      if (this._overshootClamping && this._stiffness !== 0) {
        if (this._startPosition < this._toValue) {
          isOvershooting = position2 > this._toValue;
        } else {
          isOvershooting = position2 < this._toValue;
        }
      }
      var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;
      var isDisplacement = true;
      if (this._stiffness !== 0) {
        isDisplacement = Math.abs(this._toValue - position2) <= this._restDisplacementThreshold;
      }
      if (isOvershooting || isVelocity && isDisplacement) {
        if (this._stiffness !== 0) {
          this._lastPosition = this._toValue;
          this._lastVelocity = 0;
          this._onUpdate(this._toValue);
        }
        this.__debouncedOnEnd({
          finished: true
        });
        return;
      }
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
    stop() {
      super.stop();
      this.__active = false;
      clearTimeout(this._timeout);
      commonjsGlobal.cancelAnimationFrame(this._animationFrame);
      this.__debouncedOnEnd({
        finished: false
      });
    }
  };
  SpringAnimation.default = SpringAnimation$1;
  return SpringAnimation;
}
var TimingAnimation = {};
var Easing$1 = {};
var Easing = {};
var bezier = {};
var hasRequiredBezier;
function requireBezier() {
  if (hasRequiredBezier) return bezier;
  hasRequiredBezier = 1;
  Object.defineProperty(bezier, "__esModule", {
    value: true
  });
  bezier.default = bezier$1;
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 1e-3;
  var SUBDIVISION_PRECISION = 1e-7;
  var SUBDIVISION_MAX_ITERATIONS = 10;
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  var float32ArraySupported = typeof Float32Array === "function";
  function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
  }
  function binarySubdivide(aX, _aA, _aB, mX1, mX2) {
    var currentX, currentT, i = 0, aA = _aA, aB = _aB;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
    var aGuessT = _aGuessT;
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function bezier$1(mX1, mY1, mX2, mY2) {
    if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }
    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      var dist2 = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist2 * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return function BezierEasing(x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }
      if (x === 0) {
        return 0;
      }
      if (x === 1) {
        return 1;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  }
  return bezier;
}
var hasRequiredEasing$1;
function requireEasing$1() {
  if (hasRequiredEasing$1) return Easing;
  hasRequiredEasing$1 = 1;
  Object.defineProperty(Easing, "__esModule", {
    value: true
  });
  Easing.default = void 0;
  var _bezier2 = _interopRequireDefault(/* @__PURE__ */ requireBezier());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var ease;
  let Easing$12 = class Easing2 {
    /**
     * A stepping function, returns 1 for any positive value of `n`.
     */
    static step0(n) {
      return n > 0 ? 1 : 0;
    }
    /**
     * A stepping function, returns 1 if `n` is greater than or equal to 1.
     */
    static step1(n) {
      return n >= 1 ? 1 : 0;
    }
    /**
     * A linear function, `f(t) = t`. Position correlates to elapsed time one to
     * one.
     *
     * http://cubic-bezier.com/#0,0,1,1
     */
    static linear(t) {
      return t;
    }
    /**
     * A simple inertial interaction, similar to an object slowly accelerating to
     * speed.
     *
     * http://cubic-bezier.com/#.42,0,1,1
     */
    static ease(t) {
      if (!ease) {
        ease = Easing2.bezier(0.42, 0, 1, 1);
      }
      return ease(t);
    }
    /**
     * A quadratic function, `f(t) = t * t`. Position equals the square of elapsed
     * time.
     *
     * http://easings.net/#easeInQuad
     */
    static quad(t) {
      return t * t;
    }
    /**
     * A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed
     * time.
     *
     * http://easings.net/#easeInCubic
     */
    static cubic(t) {
      return t * t * t;
    }
    /**
     * A power function. Position is equal to the Nth power of elapsed time.
     *
     * n = 4: http://easings.net/#easeInQuart
     * n = 5: http://easings.net/#easeInQuint
     */
    static poly(n) {
      return (t) => Math.pow(t, n);
    }
    /**
     * A sinusoidal function.
     *
     * http://easings.net/#easeInSine
     */
    static sin(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }
    /**
     * A circular function.
     *
     * http://easings.net/#easeInCirc
     */
    static circle(t) {
      return 1 - Math.sqrt(1 - t * t);
    }
    /**
     * An exponential function.
     *
     * http://easings.net/#easeInExpo
     */
    static exp(t) {
      return Math.pow(2, 10 * (t - 1));
    }
    /**
     * A simple elastic interaction, similar to a spring oscillating back and
     * forth.
     *
     * Default bounciness is 1, which overshoots a little bit once. 0 bounciness
     * doesn't overshoot at all, and bounciness of N > 1 will overshoot about N
     * times.
     *
     * http://easings.net/#easeInElastic
     */
    static elastic(bounciness) {
      if (bounciness === void 0) {
        bounciness = 1;
      }
      var p = bounciness * Math.PI;
      return (t) => 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p);
    }
    /**
     * Use with `Animated.parallel()` to create a simple effect where the object
     * animates back slightly as the animation starts.
     *
     * Wolfram Plot:
     *
     * - http://tiny.cc/back_default (s = 1.70158, default)
     */
    static back(s) {
      if (s === void 0) {
        s = 1.70158;
      }
      return (t) => t * t * ((s + 1) * t - s);
    }
    /**
     * Provides a simple bouncing effect.
     *
     * http://easings.net/#easeInBounce
     */
    static bounce(t) {
      if (t < 1 / 2.75) {
        return 7.5625 * t * t;
      }
      if (t < 2 / 2.75) {
        var _t = t - 1.5 / 2.75;
        return 7.5625 * _t * _t + 0.75;
      }
      if (t < 2.5 / 2.75) {
        var _t2 = t - 2.25 / 2.75;
        return 7.5625 * _t2 * _t2 + 0.9375;
      }
      var t2 = t - 2.625 / 2.75;
      return 7.5625 * t2 * t2 + 0.984375;
    }
    /**
     * Provides a cubic bezier curve, equivalent to CSS Transitions'
     * `transition-timing-function`.
     *
     * A useful tool to visualize cubic bezier curves can be found at
     * http://cubic-bezier.com/
     */
    static bezier(x1, y1, x2, y2) {
      return (0, _bezier2.default)(x1, y1, x2, y2);
    }
    /**
     * Runs an easing function forwards.
     */
    static in(easing) {
      return easing;
    }
    /**
     * Runs an easing function backwards.
     */
    static out(easing) {
      return (t) => 1 - easing(1 - t);
    }
    /**
     * Makes any easing function symmetrical. The easing function will run
     * forwards for half of the duration, then backwards for the rest of the
     * duration.
     */
    static inOut(easing) {
      return (t) => {
        if (t < 0.5) {
          return easing(t * 2) / 2;
        }
        return 1 - easing((1 - t) * 2) / 2;
      };
    }
  };
  Easing.default = Easing$12;
  return Easing;
}
var hasRequiredEasing;
function requireEasing() {
  if (hasRequiredEasing) return Easing$1;
  hasRequiredEasing = 1;
  Object.defineProperty(Easing$1, "__esModule", {
    value: true
  });
  Easing$1.default = void 0;
  var _Easing = _interopRequireDefault(/* @__PURE__ */ requireEasing$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  Easing$1.default = _Easing.default;
  return Easing$1;
}
var hasRequiredTimingAnimation;
function requireTimingAnimation() {
  if (hasRequiredTimingAnimation) return TimingAnimation;
  hasRequiredTimingAnimation = 1;
  Object.defineProperty(TimingAnimation, "__esModule", {
    value: true
  });
  TimingAnimation.default = void 0;
  _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  _interopRequireDefault(/* @__PURE__ */ requireAnimatedValueXY());
  _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _Easing = _interopRequireDefault(/* @__PURE__ */ requireEasing());
  var _Animation = _interopRequireDefault(/* @__PURE__ */ requireAnimation());
  var _NativeAnimatedHelper = /* @__PURE__ */ requireNativeAnimatedHelper();
  _interopRequireDefault(/* @__PURE__ */ requireAnimatedColor());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _easeInOut;
  function easeInOut() {
    if (!_easeInOut) {
      _easeInOut = _Easing.default.inOut(_Easing.default.ease);
    }
    return _easeInOut;
  }
  let TimingAnimation$1 = class TimingAnimation extends _Animation.default {
    constructor(config) {
      var _config$easing, _config$duration, _config$delay, _config$iterations, _config$isInteraction;
      super();
      this._toValue = config.toValue;
      this._easing = (_config$easing = config.easing) !== null && _config$easing !== void 0 ? _config$easing : easeInOut();
      this._duration = (_config$duration = config.duration) !== null && _config$duration !== void 0 ? _config$duration : 500;
      this._delay = (_config$delay = config.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
      this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
      this._useNativeDriver = (0, _NativeAnimatedHelper.shouldUseNativeDriver)(config);
      this._platformConfig = config.platformConfig;
      this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
    }
    __getNativeAnimationConfig() {
      var frameDuration = 1e3 / 60;
      var frames = [];
      var numFrames = Math.round(this._duration / frameDuration);
      for (var frame = 0; frame < numFrames; frame++) {
        frames.push(this._easing(frame / numFrames));
      }
      frames.push(this._easing(1));
      return {
        type: "frames",
        frames,
        toValue: this._toValue,
        iterations: this.__iterations,
        platformConfig: this._platformConfig
      };
    }
    start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
      this.__active = true;
      this._fromValue = fromValue;
      this._onUpdate = onUpdate;
      this.__onEnd = onEnd;
      var start = () => {
        if (this._duration === 0 && !this._useNativeDriver) {
          this._onUpdate(this._toValue);
          this.__debouncedOnEnd({
            finished: true
          });
        } else {
          this._startTime = Date.now();
          if (this._useNativeDriver) {
            this.__startNativeAnimation(animatedValue);
          } else {
            this._animationFrame = requestAnimationFrame(
              // $FlowFixMe[method-unbinding] added when improving typing for this parameters
              this.onUpdate.bind(this)
            );
          }
        }
      };
      if (this._delay) {
        this._timeout = setTimeout(start, this._delay);
      } else {
        start();
      }
    }
    onUpdate() {
      var now = Date.now();
      if (now >= this._startTime + this._duration) {
        if (this._duration === 0) {
          this._onUpdate(this._toValue);
        } else {
          this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
        }
        this.__debouncedOnEnd({
          finished: true
        });
        return;
      }
      this._onUpdate(this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue));
      if (this.__active) {
        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
      }
    }
    stop() {
      super.stop();
      this.__active = false;
      clearTimeout(this._timeout);
      commonjsGlobal.cancelAnimationFrame(this._animationFrame);
      this.__debouncedOnEnd({
        finished: false
      });
    }
  };
  TimingAnimation.default = TimingAnimation$1;
  return TimingAnimation;
}
var hasRequiredAnimatedImplementation;
function requireAnimatedImplementation() {
  if (hasRequiredAnimatedImplementation) return AnimatedImplementation;
  hasRequiredAnimatedImplementation = 1;
  Object.defineProperty(AnimatedImplementation, "__esModule", {
    value: true
  });
  AnimatedImplementation.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _AnimatedEvent = /* @__PURE__ */ requireAnimatedEvent();
  var _AnimatedAddition = _interopRequireDefault(/* @__PURE__ */ requireAnimatedAddition());
  var _AnimatedDiffClamp = _interopRequireDefault(/* @__PURE__ */ requireAnimatedDiffClamp());
  var _AnimatedDivision = _interopRequireDefault(/* @__PURE__ */ requireAnimatedDivision());
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedModulo = _interopRequireDefault(/* @__PURE__ */ requireAnimatedModulo());
  var _AnimatedMultiplication = _interopRequireDefault(/* @__PURE__ */ requireAnimatedMultiplication());
  var _AnimatedNode = _interopRequireDefault(/* @__PURE__ */ requireAnimatedNode());
  _interopRequireDefault(/* @__PURE__ */ requireAnimatedProps());
  var _AnimatedSubtraction = _interopRequireDefault(/* @__PURE__ */ requireAnimatedSubtraction());
  var _AnimatedTracking = _interopRequireDefault(/* @__PURE__ */ requireAnimatedTracking());
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedValueXY = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValueXY());
  var _DecayAnimation = _interopRequireDefault(/* @__PURE__ */ requireDecayAnimation());
  var _SpringAnimation = _interopRequireDefault(/* @__PURE__ */ requireSpringAnimation());
  var _TimingAnimation = _interopRequireDefault(/* @__PURE__ */ requireTimingAnimation());
  var _createAnimatedComponent = _interopRequireDefault(/* @__PURE__ */ requireCreateAnimatedComponent());
  var _AnimatedColor = _interopRequireDefault(/* @__PURE__ */ requireAnimatedColor());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var add = function add2(a, b) {
    return new _AnimatedAddition.default(a, b);
  };
  var subtract = function subtract2(a, b) {
    return new _AnimatedSubtraction.default(a, b);
  };
  var divide = function divide2(a, b) {
    return new _AnimatedDivision.default(a, b);
  };
  var multiply = function multiply2(a, b) {
    return new _AnimatedMultiplication.default(a, b);
  };
  var modulo = function modulo2(a, modulus) {
    return new _AnimatedModulo.default(a, modulus);
  };
  var diffClamp = function diffClamp2(a, min, max) {
    return new _AnimatedDiffClamp.default(a, min, max);
  };
  var _combineCallbacks = function _combineCallbacks2(callback, config) {
    if (callback && config.onComplete) {
      return function() {
        config.onComplete && config.onComplete(...arguments);
        callback && callback(...arguments);
      };
    } else {
      return callback || config.onComplete;
    }
  };
  var maybeVectorAnim = function maybeVectorAnim2(value, config, anim) {
    if (value instanceof _AnimatedValueXY.default) {
      var configX = (0, _objectSpread2.default)({}, config);
      var configY = (0, _objectSpread2.default)({}, config);
      for (var key in config) {
        var _config$key = config[key], x = _config$key.x, y = _config$key.y;
        if (x !== void 0 && y !== void 0) {
          configX[key] = x;
          configY[key] = y;
        }
      }
      var aX = anim(value.x, configX);
      var aY = anim(value.y, configY);
      return parallel([aX, aY], {
        stopTogether: false
      });
    } else if (value instanceof _AnimatedColor.default) {
      var configR = (0, _objectSpread2.default)({}, config);
      var configG = (0, _objectSpread2.default)({}, config);
      var configB = (0, _objectSpread2.default)({}, config);
      var configA = (0, _objectSpread2.default)({}, config);
      for (var _key in config) {
        var _config$_key = config[_key], r = _config$_key.r, g = _config$_key.g, b = _config$_key.b, a = _config$_key.a;
        if (r !== void 0 && g !== void 0 && b !== void 0 && a !== void 0) {
          configR[_key] = r;
          configG[_key] = g;
          configB[_key] = b;
          configA[_key] = a;
        }
      }
      var aR = anim(value.r, configR);
      var aG = anim(value.g, configG);
      var aB = anim(value.b, configB);
      var aA = anim(value.a, configA);
      return parallel([aR, aG, aB, aA], {
        stopTogether: false
      });
    }
    return null;
  };
  var spring = function spring2(value, config) {
    var _start = function start(animatedValue, configuration, callback) {
      callback = _combineCallbacks(callback, configuration);
      var singleValue = animatedValue;
      var singleConfig = configuration;
      singleValue.stopTracking();
      if (configuration.toValue instanceof _AnimatedNode.default) {
        singleValue.track(new _AnimatedTracking.default(singleValue, configuration.toValue, _SpringAnimation.default, singleConfig, callback));
      } else {
        singleValue.animate(new _SpringAnimation.default(singleConfig), callback);
      }
    };
    return maybeVectorAnim(value, config, spring2) || {
      start: function start(callback) {
        _start(value, config, callback);
      },
      stop: function stop() {
        value.stopAnimation();
      },
      reset: function reset() {
        value.resetAnimation();
      },
      _startNativeLoop: function _startNativeLoop(iterations) {
        var singleConfig = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, config), {}, {
          iterations
        });
        _start(value, singleConfig);
      },
      _isUsingNativeDriver: function _isUsingNativeDriver() {
        return config.useNativeDriver || false;
      }
    };
  };
  var timing = function timing2(value, config) {
    var _start2 = function start(animatedValue, configuration, callback) {
      callback = _combineCallbacks(callback, configuration);
      var singleValue = animatedValue;
      var singleConfig = configuration;
      singleValue.stopTracking();
      if (configuration.toValue instanceof _AnimatedNode.default) {
        singleValue.track(new _AnimatedTracking.default(singleValue, configuration.toValue, _TimingAnimation.default, singleConfig, callback));
      } else {
        singleValue.animate(new _TimingAnimation.default(singleConfig), callback);
      }
    };
    return maybeVectorAnim(value, config, timing2) || {
      start: function start(callback) {
        _start2(value, config, callback);
      },
      stop: function stop() {
        value.stopAnimation();
      },
      reset: function reset() {
        value.resetAnimation();
      },
      _startNativeLoop: function _startNativeLoop(iterations) {
        var singleConfig = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, config), {}, {
          iterations
        });
        _start2(value, singleConfig);
      },
      _isUsingNativeDriver: function _isUsingNativeDriver() {
        return config.useNativeDriver || false;
      }
    };
  };
  var decay = function decay2(value, config) {
    var _start3 = function start(animatedValue, configuration, callback) {
      callback = _combineCallbacks(callback, configuration);
      var singleValue = animatedValue;
      var singleConfig = configuration;
      singleValue.stopTracking();
      singleValue.animate(new _DecayAnimation.default(singleConfig), callback);
    };
    return maybeVectorAnim(value, config, decay2) || {
      start: function start(callback) {
        _start3(value, config, callback);
      },
      stop: function stop() {
        value.stopAnimation();
      },
      reset: function reset() {
        value.resetAnimation();
      },
      _startNativeLoop: function _startNativeLoop(iterations) {
        var singleConfig = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, config), {}, {
          iterations
        });
        _start3(value, singleConfig);
      },
      _isUsingNativeDriver: function _isUsingNativeDriver() {
        return config.useNativeDriver || false;
      }
    };
  };
  var sequence = function sequence2(animations) {
    var current = 0;
    return {
      start: function start(callback) {
        var onComplete = function onComplete2(result) {
          if (!result.finished) {
            callback && callback(result);
            return;
          }
          current++;
          if (current === animations.length) {
            callback && callback(result);
            return;
          }
          animations[current].start(onComplete2);
        };
        if (animations.length === 0) {
          callback && callback({
            finished: true
          });
        } else {
          animations[current].start(onComplete);
        }
      },
      stop: function stop() {
        if (current < animations.length) {
          animations[current].stop();
        }
      },
      reset: function reset() {
        animations.forEach((animation, idx) => {
          if (idx <= current) {
            animation.reset();
          }
        });
        current = 0;
      },
      _startNativeLoop: function _startNativeLoop() {
        throw new Error("Loops run using the native driver cannot contain Animated.sequence animations");
      },
      _isUsingNativeDriver: function _isUsingNativeDriver() {
        return false;
      }
    };
  };
  var parallel = function parallel2(animations, config) {
    var doneCount = 0;
    var hasEnded = {};
    var stopTogether = !(config && config.stopTogether === false);
    var result = {
      start: function start(callback) {
        if (doneCount === animations.length) {
          callback && callback({
            finished: true
          });
          return;
        }
        animations.forEach((animation, idx) => {
          var cb = function cb2(endResult) {
            hasEnded[idx] = true;
            doneCount++;
            if (doneCount === animations.length) {
              doneCount = 0;
              callback && callback(endResult);
              return;
            }
            if (!endResult.finished && stopTogether) {
              result.stop();
            }
          };
          if (!animation) {
            cb({
              finished: true
            });
          } else {
            animation.start(cb);
          }
        });
      },
      stop: function stop() {
        animations.forEach((animation, idx) => {
          !hasEnded[idx] && animation.stop();
          hasEnded[idx] = true;
        });
      },
      reset: function reset() {
        animations.forEach((animation, idx) => {
          animation.reset();
          hasEnded[idx] = false;
          doneCount = 0;
        });
      },
      _startNativeLoop: function _startNativeLoop() {
        throw new Error("Loops run using the native driver cannot contain Animated.parallel animations");
      },
      _isUsingNativeDriver: function _isUsingNativeDriver() {
        return false;
      }
    };
    return result;
  };
  var delay = function delay2(time) {
    return timing(new _AnimatedValue.default(0), {
      toValue: 0,
      delay: time,
      duration: 0,
      useNativeDriver: false
    });
  };
  var stagger = function stagger2(time, animations) {
    return parallel(animations.map((animation, i) => {
      return sequence([delay(time * i), animation]);
    }));
  };
  var loop = function loop2(animation, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, _ref$iterations = _ref.iterations, iterations = _ref$iterations === void 0 ? -1 : _ref$iterations, _ref$resetBeforeItera = _ref.resetBeforeIteration, resetBeforeIteration = _ref$resetBeforeItera === void 0 ? true : _ref$resetBeforeItera;
    var isFinished = false;
    var iterationsSoFar = 0;
    return {
      start: function start(callback) {
        var restart = function restart2(result) {
          if (result === void 0) {
            result = {
              finished: true
            };
          }
          if (isFinished || iterationsSoFar === iterations || result.finished === false) {
            callback && callback(result);
          } else {
            iterationsSoFar++;
            resetBeforeIteration && animation.reset();
            animation.start(restart2);
          }
        };
        if (!animation || iterations === 0) {
          callback && callback({
            finished: true
          });
        } else {
          if (animation._isUsingNativeDriver()) {
            animation._startNativeLoop(iterations);
          } else {
            restart();
          }
        }
      },
      stop: function stop() {
        isFinished = true;
        animation.stop();
      },
      reset: function reset() {
        iterationsSoFar = 0;
        isFinished = false;
        animation.reset();
      },
      _startNativeLoop: function _startNativeLoop() {
        throw new Error("Loops run using the native driver cannot contain Animated.loop animations");
      },
      _isUsingNativeDriver: function _isUsingNativeDriver() {
        return animation._isUsingNativeDriver();
      }
    };
  };
  function forkEvent(event2, listener) {
    if (!event2) {
      return listener;
    } else if (event2 instanceof _AnimatedEvent.AnimatedEvent) {
      event2.__addListener(listener);
      return event2;
    } else {
      return function() {
        typeof event2 === "function" && event2(...arguments);
        listener(...arguments);
      };
    }
  }
  function unforkEvent(event2, listener) {
    if (event2 && event2 instanceof _AnimatedEvent.AnimatedEvent) {
      event2.__removeListener(listener);
    }
  }
  var event = function event2(argMapping, config) {
    var animatedEvent = new _AnimatedEvent.AnimatedEvent(argMapping, config);
    if (animatedEvent.__isNative) {
      return animatedEvent;
    } else {
      return animatedEvent.__getHandler();
    }
  };
  AnimatedImplementation.default = {
    /**
     * Standard value class for driving animations.  Typically initialized with
     * `new Animated.Value(0);`
     *
     * See https://reactnative.dev/docs/animated#value
     */
    Value: _AnimatedValue.default,
    /**
     * 2D value class for driving 2D animations, such as pan gestures.
     *
     * See https://reactnative.dev/docs/animatedvaluexy
     */
    ValueXY: _AnimatedValueXY.default,
    /**
     * Value class for driving color animations.
     */
    Color: _AnimatedColor.default,
    /**
     * Exported to use the Interpolation type in flow.
     *
     * See https://reactnative.dev/docs/animated#interpolation
     */
    Interpolation: _AnimatedInterpolation.default,
    /**
     * Exported for ease of type checking. All animated values derive from this
     * class.
     *
     * See https://reactnative.dev/docs/animated#node
     */
    Node: _AnimatedNode.default,
    /**
     * Animates a value from an initial velocity to zero based on a decay
     * coefficient.
     *
     * See https://reactnative.dev/docs/animated#decay
     */
    decay,
    /**
     * Animates a value along a timed easing curve. The Easing module has tons of
     * predefined curves, or you can use your own function.
     *
     * See https://reactnative.dev/docs/animated#timing
     */
    timing,
    /**
     * Animates a value according to an analytical spring model based on
     * damped harmonic oscillation.
     *
     * See https://reactnative.dev/docs/animated#spring
     */
    spring,
    /**
     * Creates a new Animated value composed from two Animated values added
     * together.
     *
     * See https://reactnative.dev/docs/animated#add
     */
    add,
    /**
     * Creates a new Animated value composed by subtracting the second Animated
     * value from the first Animated value.
     *
     * See https://reactnative.dev/docs/animated#subtract
     */
    subtract,
    /**
     * Creates a new Animated value composed by dividing the first Animated value
     * by the second Animated value.
     *
     * See https://reactnative.dev/docs/animated#divide
     */
    divide,
    /**
     * Creates a new Animated value composed from two Animated values multiplied
     * together.
     *
     * See https://reactnative.dev/docs/animated#multiply
     */
    multiply,
    /**
     * Creates a new Animated value that is the (non-negative) modulo of the
     * provided Animated value.
     *
     * See https://reactnative.dev/docs/animated#modulo
     */
    modulo,
    /**
     * Create a new Animated value that is limited between 2 values. It uses the
     * difference between the last value so even if the value is far from the
     * bounds it will start changing when the value starts getting closer again.
     *
     * See https://reactnative.dev/docs/animated#diffclamp
     */
    diffClamp,
    /**
     * Starts an animation after the given delay.
     *
     * See https://reactnative.dev/docs/animated#delay
     */
    delay,
    /**
     * Starts an array of animations in order, waiting for each to complete
     * before starting the next. If the current running animation is stopped, no
     * following animations will be started.
     *
     * See https://reactnative.dev/docs/animated#sequence
     */
    sequence,
    /**
     * Starts an array of animations all at the same time. By default, if one
     * of the animations is stopped, they will all be stopped. You can override
     * this with the `stopTogether` flag.
     *
     * See https://reactnative.dev/docs/animated#parallel
     */
    parallel,
    /**
     * Array of animations may run in parallel (overlap), but are started in
     * sequence with successive delays.  Nice for doing trailing effects.
     *
     * See https://reactnative.dev/docs/animated#stagger
     */
    stagger,
    /**
     * Loops a given animation continuously, so that each time it reaches the
     * end, it resets and begins again from the start.
     *
     * See https://reactnative.dev/docs/animated#loop
     */
    loop,
    /**
     * Takes an array of mappings and extracts values from each arg accordingly,
     * then calls `setValue` on the mapped outputs.
     *
     * See https://reactnative.dev/docs/animated#event
     */
    event,
    /**
     * Make any React component Animatable.  Used to create `Animated.View`, etc.
     *
     * See https://reactnative.dev/docs/animated#createanimatedcomponent
     */
    createAnimatedComponent: _createAnimatedComponent.default,
    /**
     * Imperative API to attach an animated value to an event on a view. Prefer
     * using `Animated.event` with `useNativeDrive: true` if possible.
     *
     * See https://reactnative.dev/docs/animated#attachnativeevent
     */
    attachNativeEvent: _AnimatedEvent.attachNativeEvent,
    /**
     * Advanced imperative API for snooping on animated events that are passed in
     * through props. Use values directly where possible.
     *
     * See https://reactnative.dev/docs/animated#forkevent
     */
    forkEvent,
    unforkEvent,
    /**
     * Expose Event class, so it can be used as a type for type checkers.
     */
    Event: _AnimatedEvent.AnimatedEvent
  };
  return AnimatedImplementation;
}
var hasRequiredAnimatedMock;
function requireAnimatedMock() {
  if (hasRequiredAnimatedMock) return AnimatedMock;
  hasRequiredAnimatedMock = 1;
  Object.defineProperty(AnimatedMock, "__esModule", {
    value: true
  });
  AnimatedMock.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _AnimatedEvent = /* @__PURE__ */ requireAnimatedEvent();
  var _AnimatedImplementation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedImplementation());
  var _AnimatedInterpolation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedInterpolation());
  var _AnimatedNode = _interopRequireDefault(/* @__PURE__ */ requireAnimatedNode());
  var _AnimatedValue = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValue());
  var _AnimatedValueXY = _interopRequireDefault(/* @__PURE__ */ requireAnimatedValueXY());
  var _createAnimatedComponent = _interopRequireDefault(/* @__PURE__ */ requireCreateAnimatedComponent());
  var _AnimatedColor = _interopRequireDefault(/* @__PURE__ */ requireAnimatedColor());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var inAnimationCallback = false;
  function mockAnimationStart(start) {
    return (callback) => {
      var guardedCallback = callback == null ? callback : function() {
        if (inAnimationCallback) {
          console.warn("Ignoring recursive animation callback when running mock animations");
          return;
        }
        inAnimationCallback = true;
        try {
          callback(...arguments);
        } finally {
          inAnimationCallback = false;
        }
      };
      start(guardedCallback);
    };
  }
  var emptyAnimation = {
    start: () => {
    },
    stop: () => {
    },
    reset: () => {
    },
    _startNativeLoop: () => {
    },
    _isUsingNativeDriver: () => {
      return false;
    }
  };
  var mockCompositeAnimation = (animations) => (0, _objectSpread2.default)((0, _objectSpread2.default)({}, emptyAnimation), {}, {
    start: mockAnimationStart((callback) => {
      animations.forEach((animation) => animation.start());
      callback == null ? void 0 : callback({
        finished: true
      });
    })
  });
  var spring = function spring2(value, config) {
    var anyValue = value;
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, emptyAnimation), {}, {
      start: mockAnimationStart((callback) => {
        anyValue.setValue(config.toValue);
        callback == null ? void 0 : callback({
          finished: true
        });
      })
    });
  };
  var timing = function timing2(value, config) {
    var anyValue = value;
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, emptyAnimation), {}, {
      start: mockAnimationStart((callback) => {
        anyValue.setValue(config.toValue);
        callback == null ? void 0 : callback({
          finished: true
        });
      })
    });
  };
  var decay = function decay2(value, config) {
    return emptyAnimation;
  };
  var sequence = function sequence2(animations) {
    return mockCompositeAnimation(animations);
  };
  var parallel = function parallel2(animations, config) {
    return mockCompositeAnimation(animations);
  };
  var delay = function delay2(time) {
    return emptyAnimation;
  };
  var stagger = function stagger2(time, animations) {
    return mockCompositeAnimation(animations);
  };
  var loop = function loop2(animation, _temp) {
    var _ref = _temp === void 0 ? {} : _temp;
    _ref.iterations;
    return emptyAnimation;
  };
  AnimatedMock.default = {
    Value: _AnimatedValue.default,
    ValueXY: _AnimatedValueXY.default,
    Color: _AnimatedColor.default,
    Interpolation: _AnimatedInterpolation.default,
    Node: _AnimatedNode.default,
    decay,
    timing,
    spring,
    add: _AnimatedImplementation.default.add,
    subtract: _AnimatedImplementation.default.subtract,
    divide: _AnimatedImplementation.default.divide,
    multiply: _AnimatedImplementation.default.multiply,
    modulo: _AnimatedImplementation.default.modulo,
    diffClamp: _AnimatedImplementation.default.diffClamp,
    delay,
    sequence,
    parallel,
    stagger,
    loop,
    event: _AnimatedImplementation.default.event,
    createAnimatedComponent: _createAnimatedComponent.default,
    attachNativeEvent: _AnimatedEvent.attachNativeEvent,
    forkEvent: _AnimatedImplementation.default.forkEvent,
    unforkEvent: _AnimatedImplementation.default.unforkEvent,
    Event: _AnimatedEvent.AnimatedEvent
  };
  return AnimatedMock;
}
var hasRequiredAnimated$1;
function requireAnimated$1() {
  if (hasRequiredAnimated$1) return Animated;
  hasRequiredAnimated$1 = 1;
  Object.defineProperty(Animated, "__esModule", {
    value: true
  });
  Animated.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform$1());
  var _AnimatedFlatList = _interopRequireDefault(/* @__PURE__ */ requireAnimatedFlatList());
  var _AnimatedImage = _interopRequireDefault(/* @__PURE__ */ requireAnimatedImage());
  var _AnimatedScrollView = _interopRequireDefault(/* @__PURE__ */ requireAnimatedScrollView());
  var _AnimatedSectionList = _interopRequireDefault(/* @__PURE__ */ requireAnimatedSectionList());
  var _AnimatedText = _interopRequireDefault(/* @__PURE__ */ requireAnimatedText());
  var _AnimatedView = _interopRequireDefault(/* @__PURE__ */ requireAnimatedView());
  var _AnimatedMock = _interopRequireDefault(/* @__PURE__ */ requireAnimatedMock());
  var _AnimatedImplementation = _interopRequireDefault(/* @__PURE__ */ requireAnimatedImplementation());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var Animated$12 = _Platform.default.isTesting ? _AnimatedMock.default : _AnimatedImplementation.default;
  Animated.default = (0, _objectSpread2.default)({
    FlatList: _AnimatedFlatList.default,
    Image: _AnimatedImage.default,
    ScrollView: _AnimatedScrollView.default,
    SectionList: _AnimatedSectionList.default,
    Text: _AnimatedText.default,
    View: _AnimatedView.default
  }, Animated$12);
  return Animated;
}
var hasRequiredAnimated;
function requireAnimated() {
  if (hasRequiredAnimated) return Animated$1;
  hasRequiredAnimated = 1;
  Object.defineProperty(Animated$1, "__esModule", {
    value: true
  });
  Animated$1.default = void 0;
  var _Animated = _interopRequireDefault(/* @__PURE__ */ requireAnimated$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  Animated$1.default = _Animated.default;
  return Animated$1;
}
var Appearance = {};
var hasRequiredAppearance;
function requireAppearance() {
  if (hasRequiredAppearance) return Appearance;
  hasRequiredAppearance = 1;
  Object.defineProperty(Appearance, "__esModule", {
    value: true
  });
  Appearance.default = void 0;
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function getQuery() {
    return _canUseDom.default && window.matchMedia != null ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  }
  var query = getQuery();
  var listenerMapping = /* @__PURE__ */ new WeakMap();
  var Appearance$1 = {
    getColorScheme() {
      return query && query.matches ? "dark" : "light";
    },
    addChangeListener(listener) {
      var mappedListener = listenerMapping.get(listener);
      if (!mappedListener) {
        mappedListener = (_ref) => {
          var matches = _ref.matches;
          listener({
            colorScheme: matches ? "dark" : "light"
          });
        };
        listenerMapping.set(listener, mappedListener);
      }
      if (query) {
        query.addListener(mappedListener);
      }
      function remove() {
        var mappedListener2 = listenerMapping.get(listener);
        if (query && mappedListener2) {
          query.removeListener(mappedListener2);
        }
        listenerMapping.delete(listener);
      }
      return {
        remove
      };
    }
  };
  Appearance.default = Appearance$1;
  return Appearance;
}
var AppRegistry = {};
var renderApplication = {};
var AppContainer = {};
var hasRequiredAppContainer;
function requireAppContainer() {
  if (hasRequiredAppContainer) return AppContainer;
  hasRequiredAppContainer = 1;
  Object.defineProperty(AppContainer, "__esModule", {
    value: true
  });
  AppContainer.default = void 0;
  var React = _interopRequireWildcard(requireReact());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var RootTagContext = /* @__PURE__ */ React.createContext(null);
  var AppContainer$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var children = props.children, WrapperComponent = props.WrapperComponent;
    var innerView = /* @__PURE__ */ React.createElement(_View.default, {
      children,
      key: 1,
      style: styles2.appContainer
    });
    if (WrapperComponent) {
      innerView = /* @__PURE__ */ React.createElement(WrapperComponent, null, innerView);
    }
    return /* @__PURE__ */ React.createElement(RootTagContext.Provider, {
      value: props.rootTag
    }, /* @__PURE__ */ React.createElement(_View.default, {
      ref: forwardedRef,
      style: styles2.appContainer
    }, innerView));
  });
  AppContainer$1.displayName = "AppContainer";
  AppContainer.default = AppContainer$1;
  var styles2 = _StyleSheet.default.create({
    appContainer: {
      flex: 1,
      pointerEvents: "box-none"
    }
  });
  return AppContainer;
}
var hasRequiredRenderApplication;
function requireRenderApplication() {
  if (hasRequiredRenderApplication) return renderApplication;
  hasRequiredRenderApplication = 1;
  Object.defineProperty(renderApplication, "__esModule", {
    value: true
  });
  renderApplication.default = renderApplication$1;
  renderApplication.getApplication = getApplication;
  var _extends2 = _interopRequireDefault(require_extends());
  var _AppContainer = _interopRequireDefault(/* @__PURE__ */ requireAppContainer());
  var _invariant = _interopRequireDefault(requireInvariant());
  var _render = _interopRequireWildcard(/* @__PURE__ */ requireRender());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _react = _interopRequireDefault(requireReact());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function renderApplication$1(RootComponent, WrapperComponent, callback, options) {
    var shouldHydrate = options.hydrate, initialProps = options.initialProps, mode = options.mode, rootTag = options.rootTag;
    var renderFn = shouldHydrate ? mode === "concurrent" ? _render.hydrate : _render.hydrateLegacy : mode === "concurrent" ? _render.render : _render.default;
    (0, _invariant.default)(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
    return renderFn(/* @__PURE__ */ _react.default.createElement(_AppContainer.default, {
      WrapperComponent,
      ref: callback,
      rootTag
    }, /* @__PURE__ */ _react.default.createElement(RootComponent, initialProps)), rootTag);
  }
  function getApplication(RootComponent, initialProps, WrapperComponent) {
    var element = /* @__PURE__ */ _react.default.createElement(_AppContainer.default, {
      WrapperComponent,
      rootTag: {}
    }, /* @__PURE__ */ _react.default.createElement(RootComponent, initialProps));
    var getStyleElement = (props) => {
      var sheet = _StyleSheet.default.getSheet();
      return /* @__PURE__ */ _react.default.createElement("style", (0, _extends2.default)({}, props, {
        dangerouslySetInnerHTML: {
          __html: sheet.textContent
        },
        id: sheet.id
      }));
    };
    return {
      element,
      getStyleElement
    };
  }
  return renderApplication;
}
var hasRequiredAppRegistry;
function requireAppRegistry() {
  if (hasRequiredAppRegistry) return AppRegistry;
  hasRequiredAppRegistry = 1;
  Object.defineProperty(AppRegistry, "__esModule", {
    value: true
  });
  AppRegistry.default = void 0;
  _interopRequireDefault(requireObjectSpread2());
  var _invariant = _interopRequireDefault(requireInvariant());
  var _unmountComponentAtNode = _interopRequireDefault(/* @__PURE__ */ requireUnmountComponentAtNode());
  var _renderApplication = _interopRequireWildcard(/* @__PURE__ */ requireRenderApplication());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var emptyObject = {};
  var runnables = {};
  var componentProviderInstrumentationHook = (component) => component();
  var wrapperComponentProvider;
  let AppRegistry$1 = class AppRegistry2 {
    static getAppKeys() {
      return Object.keys(runnables);
    }
    static getApplication(appKey, appParameters) {
      (0, _invariant.default)(runnables[appKey] && runnables[appKey].getApplication, "Application " + appKey + " has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.");
      return runnables[appKey].getApplication(appParameters);
    }
    static registerComponent(appKey, componentProvider) {
      runnables[appKey] = {
        getApplication: (appParameters) => (0, _renderApplication.getApplication)(componentProviderInstrumentationHook(componentProvider), appParameters ? appParameters.initialProps : emptyObject, wrapperComponentProvider && wrapperComponentProvider(appParameters)),
        run: (appParameters) => (0, _renderApplication.default)(componentProviderInstrumentationHook(componentProvider), wrapperComponentProvider && wrapperComponentProvider(appParameters), appParameters.callback, {
          hydrate: appParameters.hydrate || false,
          initialProps: appParameters.initialProps || emptyObject,
          mode: appParameters.mode || "concurrent",
          rootTag: appParameters.rootTag
        })
      };
      return appKey;
    }
    static registerConfig(config) {
      config.forEach((_ref) => {
        var appKey = _ref.appKey, component = _ref.component, run = _ref.run;
        if (run) {
          AppRegistry2.registerRunnable(appKey, run);
        } else {
          (0, _invariant.default)(component, "No component provider passed in");
          AppRegistry2.registerComponent(appKey, component);
        }
      });
    }
    // TODO: fix style sheet creation when using this method
    static registerRunnable(appKey, run) {
      runnables[appKey] = {
        run
      };
      return appKey;
    }
    static runApplication(appKey, appParameters) {
      (0, _invariant.default)(runnables[appKey] && runnables[appKey].run, 'Application "' + appKey + '" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
      return runnables[appKey].run(appParameters);
    }
    static setComponentProviderInstrumentationHook(hook) {
      componentProviderInstrumentationHook = hook;
    }
    static setWrapperComponentProvider(provider) {
      wrapperComponentProvider = provider;
    }
    static unmountApplicationComponentAtRootTag(rootTag) {
      (0, _unmountComponentAtNode.default)(rootTag);
    }
  };
  AppRegistry.default = AppRegistry$1;
  return AppRegistry;
}
var AppState = {};
var hasRequiredAppState;
function requireAppState() {
  if (hasRequiredAppState) return AppState;
  hasRequiredAppState = 1;
  Object.defineProperty(AppState, "__esModule", {
    value: true
  });
  AppState.default = void 0;
  var _invariant = _interopRequireDefault(requireInvariant());
  var _EventEmitter = _interopRequireDefault(/* @__PURE__ */ requireEventEmitter());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var isPrefixed = _canUseDom.default && !document.hasOwnProperty("hidden") && document.hasOwnProperty("webkitHidden");
  var EVENT_TYPES = ["change", "memoryWarning"];
  var VISIBILITY_CHANGE_EVENT = isPrefixed ? "webkitvisibilitychange" : "visibilitychange";
  var VISIBILITY_STATE_PROPERTY = isPrefixed ? "webkitVisibilityState" : "visibilityState";
  var AppStates = {
    BACKGROUND: "background",
    ACTIVE: "active"
  };
  var changeEmitter = null;
  let AppState$1 = class AppState2 {
    static get currentState() {
      if (!AppState2.isAvailable) {
        return AppStates.ACTIVE;
      }
      switch (document[VISIBILITY_STATE_PROPERTY]) {
        case "hidden":
        case "prerender":
        case "unloaded":
          return AppStates.BACKGROUND;
        default:
          return AppStates.ACTIVE;
      }
    }
    static addEventListener(type, handler) {
      if (AppState2.isAvailable) {
        (0, _invariant.default)(EVENT_TYPES.indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);
        if (type === "change") {
          if (!changeEmitter) {
            changeEmitter = new _EventEmitter.default();
            document.addEventListener(VISIBILITY_CHANGE_EVENT, () => {
              if (changeEmitter) {
                changeEmitter.emit("change", AppState2.currentState);
              }
            }, false);
          }
          return changeEmitter.addListener(type, handler);
        }
      }
    }
  };
  AppState.default = AppState$1;
  AppState$1.isAvailable = _canUseDom.default && !!document[VISIBILITY_STATE_PROPERTY];
  return AppState;
}
var BackHandler = {};
var hasRequiredBackHandler;
function requireBackHandler() {
  if (hasRequiredBackHandler) return BackHandler;
  hasRequiredBackHandler = 1;
  Object.defineProperty(BackHandler, "__esModule", {
    value: true
  });
  BackHandler.default = void 0;
  function emptyFunction() {
  }
  var BackHandler$1 = {
    exitApp: emptyFunction,
    addEventListener() {
      console.error("BackHandler is not supported on web and should not be used.");
      return {
        remove: emptyFunction
      };
    },
    removeEventListener: emptyFunction
  };
  BackHandler.default = BackHandler$1;
  return BackHandler;
}
var Clipboard = {};
var hasRequiredClipboard;
function requireClipboard() {
  if (hasRequiredClipboard) return Clipboard;
  hasRequiredClipboard = 1;
  Object.defineProperty(Clipboard, "__esModule", {
    value: true
  });
  Clipboard.default = void 0;
  var clipboardAvailable;
  let Clipboard$1 = class Clipboard {
    static isAvailable() {
      if (clipboardAvailable === void 0) {
        clipboardAvailable = typeof document.queryCommandSupported === "function" && document.queryCommandSupported("copy");
      }
      return clipboardAvailable;
    }
    static getString() {
      return Promise.resolve("");
    }
    static setString(text) {
      var success = false;
      var body = document.body;
      if (body) {
        var node = document.createElement("span");
        node.textContent = text;
        node.style.opacity = "0";
        node.style.position = "absolute";
        node.style.whiteSpace = "pre-wrap";
        node.style.userSelect = "auto";
        body.appendChild(node);
        var selection = window.getSelection();
        selection.removeAllRanges();
        var range = document.createRange();
        range.selectNodeContents(node);
        selection.addRange(range);
        try {
          document.execCommand("copy");
          success = true;
        } catch (e) {
        }
        selection.removeAllRanges();
        body.removeChild(node);
      }
      return success;
    }
  };
  Clipboard.default = Clipboard$1;
  return Clipboard;
}
var I18nManager = {};
var hasRequiredI18nManager;
function requireI18nManager() {
  if (hasRequiredI18nManager) return I18nManager;
  hasRequiredI18nManager = 1;
  Object.defineProperty(I18nManager, "__esModule", {
    value: true
  });
  I18nManager.default = void 0;
  var I18nManager$1 = {
    allowRTL() {
      return;
    },
    forceRTL() {
      return;
    },
    getConstants() {
      return {
        isRTL: false
      };
    }
  };
  I18nManager.default = I18nManager$1;
  return I18nManager;
}
var Keyboard = {};
var hasRequiredKeyboard;
function requireKeyboard() {
  if (hasRequiredKeyboard) return Keyboard;
  hasRequiredKeyboard = 1;
  Object.defineProperty(Keyboard, "__esModule", {
    value: true
  });
  Keyboard.default = void 0;
  var _dismissKeyboard = _interopRequireDefault(/* @__PURE__ */ requireDismissKeyboard());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var Keyboard$1 = {
    isVisible() {
      return false;
    },
    addListener() {
      return {
        remove: () => {
        }
      };
    },
    dismiss() {
      (0, _dismissKeyboard.default)();
    },
    removeAllListeners() {
    },
    removeListener() {
    }
  };
  Keyboard.default = Keyboard$1;
  return Keyboard;
}
var LayoutAnimation$1 = {};
var LayoutAnimation = {};
var hasRequiredLayoutAnimation$1;
function requireLayoutAnimation$1() {
  if (hasRequiredLayoutAnimation$1) return LayoutAnimation;
  hasRequiredLayoutAnimation$1 = 1;
  Object.defineProperty(LayoutAnimation, "__esModule", {
    value: true
  });
  LayoutAnimation.default = void 0;
  var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform$1());
  var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function configureNext(config, onAnimationDidEnd) {
    if (!_Platform.default.isTesting) {
      _UIManager.default.configureNextLayoutAnimation(
        config,
        onAnimationDidEnd !== null && onAnimationDidEnd !== void 0 ? onAnimationDidEnd : function() {
        },
        function() {
        }
        /* unused onError */
      );
    }
  }
  function create(duration, type, property) {
    return {
      duration,
      create: {
        type,
        property
      },
      update: {
        type
      },
      delete: {
        type,
        property
      }
    };
  }
  var Presets = {
    easeInEaseOut: create(300, "easeInEaseOut", "opacity"),
    linear: create(500, "linear", "opacity"),
    spring: {
      duration: 700,
      create: {
        type: "linear",
        property: "opacity"
      },
      update: {
        type: "spring",
        springDamping: 0.4
      },
      delete: {
        type: "linear",
        property: "opacity"
      }
    }
  };
  var LayoutAnimation$12 = {
    /**
     * Schedules an animation to happen on the next layout.
     *
     * @param config Specifies animation properties:
     *
     *   - `duration` in milliseconds
     *   - `create`, `AnimationConfig` for animating in new views
     *   - `update`, `AnimationConfig` for animating views that have been updated
     *
     * @param onAnimationDidEnd Called when the animation finished.
     * Only supported on iOS.
     * @param onError Called on error. Only supported on iOS.
     */
    configureNext,
    /**
     * Helper for creating a config for `configureNext`.
     */
    create,
    Types: Object.freeze({
      spring: "spring",
      linear: "linear",
      easeInEaseOut: "easeInEaseOut",
      easeIn: "easeIn",
      easeOut: "easeOut",
      keyboard: "keyboard"
    }),
    Properties: Object.freeze({
      opacity: "opacity",
      scaleX: "scaleX",
      scaleY: "scaleY",
      scaleXY: "scaleXY"
    }),
    checkConfig() {
      console.error("LayoutAnimation.checkConfig(...) has been disabled.");
    },
    Presets,
    easeInEaseOut: configureNext.bind(null, Presets.easeInEaseOut),
    linear: configureNext.bind(null, Presets.linear),
    spring: configureNext.bind(null, Presets.spring)
  };
  LayoutAnimation.default = LayoutAnimation$12;
  return LayoutAnimation;
}
var hasRequiredLayoutAnimation;
function requireLayoutAnimation() {
  if (hasRequiredLayoutAnimation) return LayoutAnimation$1;
  hasRequiredLayoutAnimation = 1;
  Object.defineProperty(LayoutAnimation$1, "__esModule", {
    value: true
  });
  LayoutAnimation$1.default = void 0;
  var _LayoutAnimation = _interopRequireDefault(/* @__PURE__ */ requireLayoutAnimation$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  LayoutAnimation$1.default = _LayoutAnimation.default;
  return LayoutAnimation$1;
}
var Linking = {};
var hasRequiredLinking;
function requireLinking() {
  if (hasRequiredLinking) return Linking;
  hasRequiredLinking = 1;
  Object.defineProperty(Linking, "__esModule", {
    value: true
  });
  Linking.default = void 0;
  var _invariant = _interopRequireDefault(requireInvariant());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var initialURL = _canUseDom.default ? window.location.href : "";
  let Linking$1 = class Linking {
    constructor() {
      this._eventCallbacks = {};
    }
    /**
     * An object mapping of event name
     * and all the callbacks subscribing to it
     */
    _dispatchEvent(event) {
      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }
      var listeners = this._eventCallbacks[event];
      if (listeners != null && Array.isArray(listeners)) {
        listeners.map((listener) => {
          listener(...data);
        });
      }
    }
    /**
     * Adds a event listener for the specified event. The callback will be called when the
     * said event is dispatched.
     */
    addEventListener(eventType, callback) {
      var _this = this;
      if (!_this._eventCallbacks[eventType]) {
        _this._eventCallbacks[eventType] = [callback];
      }
      _this._eventCallbacks[eventType].push(callback);
      return {
        remove() {
          var callbacks = _this._eventCallbacks[eventType];
          var filteredCallbacks = callbacks.filter((c) => c.toString() !== callback.toString());
          _this._eventCallbacks[eventType] = filteredCallbacks;
        }
      };
    }
    /**
     * Removes a previously added event listener for the specified event. The callback must
     * be the same object as the one passed to `addEventListener`.
     */
    removeEventListener(eventType, callback) {
      console.error("Linking.removeEventListener('" + eventType + "', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `Linking.addEventListener`.");
      var callbacks = this._eventCallbacks[eventType];
      var filteredCallbacks = callbacks.filter((c) => c.toString() !== callback.toString());
      this._eventCallbacks[eventType] = filteredCallbacks;
    }
    canOpenURL() {
      return Promise.resolve(true);
    }
    getInitialURL() {
      return Promise.resolve(initialURL);
    }
    /**
     * Try to open the given url in a secure fashion. The method returns a Promise object.
     * If a target is passed (including undefined) that target will be used, otherwise '_blank'.
     * If the url opens, the promise is resolved. If not, the promise is rejected.
     * Dispatches the `onOpen` event if `url` is opened successfully.
     */
    openURL(url, target) {
      if (arguments.length === 1) {
        target = "_blank";
      }
      try {
        open(url, target);
        this._dispatchEvent("onOpen", url);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    }
    _validateURL(url) {
      (0, _invariant.default)(typeof url === "string", "Invalid URL: should be a string. Was: " + url);
      (0, _invariant.default)(url, "Invalid URL: cannot be empty");
    }
  };
  var open = (url, target) => {
    if (_canUseDom.default) {
      var urlToOpen = new URL(url, window.location).toString();
      if (urlToOpen.indexOf("tel:") === 0) {
        window.location = urlToOpen;
      } else {
        window.open(urlToOpen, target, "noopener");
      }
    }
  };
  Linking.default = new Linking$1();
  return Linking;
}
var NativeEventEmitter = {};
var hasRequiredNativeEventEmitter;
function requireNativeEventEmitter() {
  if (hasRequiredNativeEventEmitter) return NativeEventEmitter;
  hasRequiredNativeEventEmitter = 1;
  Object.defineProperty(NativeEventEmitter, "__esModule", {
    value: true
  });
  NativeEventEmitter.default = void 0;
  var _NativeEventEmitter = _interopRequireDefault(/* @__PURE__ */ requireNativeEventEmitter$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  NativeEventEmitter.default = _NativeEventEmitter.default;
  return NativeEventEmitter;
}
var PanResponder$1 = {};
var PanResponder = {};
var TouchHistoryMath = {};
var hasRequiredTouchHistoryMath;
function requireTouchHistoryMath() {
  if (hasRequiredTouchHistoryMath) return TouchHistoryMath;
  hasRequiredTouchHistoryMath = 1;
  Object.defineProperty(TouchHistoryMath, "__esModule", {
    value: true
  });
  TouchHistoryMath.default = void 0;
  var TouchHistoryMath$1 = {
    /**
     * This code is optimized and not intended to look beautiful. This allows
     * computing of touch centroids that have moved after `touchesChangedAfter`
     * timeStamp. You can compute the current centroid involving all touches
     * moves after `touchesChangedAfter`, or you can compute the previous
     * centroid of all touches that were moved after `touchesChangedAfter`.
     *
     * @param {TouchHistoryMath} touchHistory Standard Responder touch track
     * data.
     * @param {number} touchesChangedAfter timeStamp after which moved touches
     * are considered "actively moving" - not just "active".
     * @param {boolean} isXAxis Consider `x` dimension vs. `y` dimension.
     * @param {boolean} ofCurrent Compute current centroid for actively moving
     * touches vs. previous centroid of now actively moving touches.
     * @return {number} value of centroid in specified dimension.
     */
    centroidDimension: function centroidDimension(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
      var touchBank = touchHistory.touchBank;
      var total = 0;
      var count = 0;
      var oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;
      if (oneTouchData !== null) {
        if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
          total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
          count = 1;
        }
      } else {
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrack = touchBank[i];
          if (touchTrack !== null && touchTrack !== void 0 && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
            var toAdd = void 0;
            if (ofCurrent && isXAxis) {
              toAdd = touchTrack.currentPageX;
            } else if (ofCurrent && !isXAxis) {
              toAdd = touchTrack.currentPageY;
            } else if (!ofCurrent && isXAxis) {
              toAdd = touchTrack.previousPageX;
            } else {
              toAdd = touchTrack.previousPageY;
            }
            total += toAdd;
            count++;
          }
        }
      }
      return count > 0 ? total / count : TouchHistoryMath$1.noCentroid;
    },
    currentCentroidXOfTouchesChangedAfter: function currentCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
      return TouchHistoryMath$1.centroidDimension(
        touchHistory,
        touchesChangedAfter,
        true,
        // isXAxis
        true
        // ofCurrent
      );
    },
    currentCentroidYOfTouchesChangedAfter: function currentCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
      return TouchHistoryMath$1.centroidDimension(
        touchHistory,
        touchesChangedAfter,
        false,
        // isXAxis
        true
        // ofCurrent
      );
    },
    previousCentroidXOfTouchesChangedAfter: function previousCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
      return TouchHistoryMath$1.centroidDimension(
        touchHistory,
        touchesChangedAfter,
        true,
        // isXAxis
        false
        // ofCurrent
      );
    },
    previousCentroidYOfTouchesChangedAfter: function previousCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
      return TouchHistoryMath$1.centroidDimension(
        touchHistory,
        touchesChangedAfter,
        false,
        // isXAxis
        false
        // ofCurrent
      );
    },
    currentCentroidX: function currentCentroidX(touchHistory) {
      return TouchHistoryMath$1.centroidDimension(
        touchHistory,
        0,
        // touchesChangedAfter
        true,
        // isXAxis
        true
        // ofCurrent
      );
    },
    currentCentroidY: function currentCentroidY(touchHistory) {
      return TouchHistoryMath$1.centroidDimension(
        touchHistory,
        0,
        // touchesChangedAfter
        false,
        // isXAxis
        true
        // ofCurrent
      );
    },
    noCentroid: -1
  };
  TouchHistoryMath.default = TouchHistoryMath$1;
  return TouchHistoryMath;
}
var hasRequiredPanResponder$1;
function requirePanResponder$1() {
  if (hasRequiredPanResponder$1) return PanResponder;
  hasRequiredPanResponder$1 = 1;
  Object.defineProperty(PanResponder, "__esModule", {
    value: true
  });
  PanResponder.default = void 0;
  var _InteractionManager = _interopRequireDefault(/* @__PURE__ */ requireInteractionManager());
  var _TouchHistoryMath = _interopRequireDefault(/* @__PURE__ */ requireTouchHistoryMath());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var currentCentroidXOfTouchesChangedAfter = _TouchHistoryMath.default.currentCentroidXOfTouchesChangedAfter;
  var currentCentroidYOfTouchesChangedAfter = _TouchHistoryMath.default.currentCentroidYOfTouchesChangedAfter;
  var previousCentroidXOfTouchesChangedAfter = _TouchHistoryMath.default.previousCentroidXOfTouchesChangedAfter;
  var previousCentroidYOfTouchesChangedAfter = _TouchHistoryMath.default.previousCentroidYOfTouchesChangedAfter;
  var currentCentroidX = _TouchHistoryMath.default.currentCentroidX;
  var currentCentroidY = _TouchHistoryMath.default.currentCentroidY;
  var PanResponder$12 = {
    /**
     *
     * A graphical explanation of the touch data flow:
     *
     * +----------------------------+             +--------------------------------+
     * | ResponderTouchHistoryStore |             |TouchHistoryMath                |
     * +----------------------------+             +----------+---------------------+
     * |Global store of touchHistory|             |Allocation-less math util       |
     * |including activeness, start |             |on touch history (centroids     |
     * |position, prev/cur position.|             |and multitouch movement etc)    |
     * |                            |             |                                |
     * +----^-----------------------+             +----^---------------------------+
     *      |                                          |
     *      | (records relevant history                |
     *      |  of touches relevant for                 |
     *      |  implementing higher level               |
     *      |  gestures)                               |
     *      |                                          |
     * +----+-----------------------+             +----|---------------------------+
     * | ResponderEventPlugin       |             |    |   Your App/Component      |
     * +----------------------------+             +----|---------------------------+
     * |Negotiates which view gets  | Low level   |    |             High level    |
     * |onResponderMove events.     | events w/   |  +-+-------+     events w/     |
     * |Also records history into   | touchHistory|  |   Pan   |     multitouch +  |
     * |ResponderTouchHistoryStore. +---------------->Responder+-----> accumulative|
     * +----------------------------+ attached to |  |         |     distance and  |
     *                                 each event |  +---------+     velocity.     |
     *                                            |                                |
     *                                            |                                |
     *                                            +--------------------------------+
     *
     *
     *
     * Gesture that calculates cumulative movement over time in a way that just
     * "does the right thing" for multiple touches. The "right thing" is very
     * nuanced. When moving two touches in opposite directions, the cumulative
     * distance is zero in each dimension. When two touches move in parallel five
     * pixels in the same direction, the cumulative distance is five, not ten. If
     * two touches start, one moves five in a direction, then stops and the other
     * touch moves fives in the same direction, the cumulative distance is ten.
     *
     * This logic requires a kind of processing of time "clusters" of touch events
     * so that two touch moves that essentially occur in parallel but move every
     * other frame respectively, are considered part of the same movement.
     *
     * Explanation of some of the non-obvious fields:
     *
     * - moveX/moveY: If no move event has been observed, then `(moveX, moveY)` is
     *   invalid. If a move event has been observed, `(moveX, moveY)` is the
     *   centroid of the most recently moved "cluster" of active touches.
     *   (Currently all move have the same timeStamp, but later we should add some
     *   threshold for what is considered to be "moving"). If a palm is
     *   accidentally counted as a touch, but a finger is moving greatly, the palm
     *   will move slightly, but we only want to count the single moving touch.
     * - x0/y0: Centroid location (non-cumulative) at the time of becoming
     *   responder.
     * - dx/dy: Cumulative touch distance - not the same thing as sum of each touch
     *   distance. Accounts for touch moves that are clustered together in time,
     *   moving the same direction. Only valid when currently responder (otherwise,
     *   it only represents the drag distance below the threshold).
     * - vx/vy: Velocity.
     */
    _initializeGestureState(gestureState) {
      gestureState.moveX = 0;
      gestureState.moveY = 0;
      gestureState.x0 = 0;
      gestureState.y0 = 0;
      gestureState.dx = 0;
      gestureState.dy = 0;
      gestureState.vx = 0;
      gestureState.vy = 0;
      gestureState.numberActiveTouches = 0;
      gestureState._accountsForMovesUpTo = 0;
    },
    /**
     * This is nuanced and is necessary. It is incorrect to continuously take all
     * active *and* recently moved touches, find the centroid, and track how that
     * result changes over time. Instead, we must take all recently moved
     * touches, and calculate how the centroid has changed just for those
     * recently moved touches, and append that change to an accumulator. This is
     * to (at least) handle the case where the user is moving three fingers, and
     * then one of the fingers stops but the other two continue.
     *
     * This is very different than taking all of the recently moved touches and
     * storing their centroid as `dx/dy`. For correctness, we must *accumulate
     * changes* in the centroid of recently moved touches.
     *
     * There is also some nuance with how we handle multiple moved touches in a
     * single event. With the way `ReactNativeEventEmitter` dispatches touches as
     * individual events, multiple touches generate two 'move' events, each of
     * them triggering `onResponderMove`. But with the way `PanResponder` works,
     * all of the gesture inference is performed on the first dispatch, since it
     * looks at all of the touches (even the ones for which there hasn't been a
     * native dispatch yet). Therefore, `PanResponder` does not call
     * `onResponderMove` passed the first dispatch. This diverges from the
     * typical responder callback pattern (without using `PanResponder`), but
     * avoids more dispatches than necessary.
     */
    _updateGestureStateOnMove(gestureState, touchHistory) {
      gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
      gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
      gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
      var movedAfter = gestureState._accountsForMovesUpTo;
      var prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
      var x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
      var prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
      var y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
      var nextDX = gestureState.dx + (x - prevX);
      var nextDY = gestureState.dy + (y - prevY);
      var dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
      gestureState.vx = (nextDX - gestureState.dx) / dt;
      gestureState.vy = (nextDY - gestureState.dy) / dt;
      gestureState.dx = nextDX;
      gestureState.dy = nextDY;
      gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
    },
    /**
     * @param {object} config Enhanced versions of all of the responder callbacks
     * that provide not only the typical `ResponderSyntheticEvent`, but also the
     * `PanResponder` gesture state.  Simply replace the word `Responder` with
     * `PanResponder` in each of the typical `onResponder*` callbacks. For
     * example, the `config` object would look like:
     *
     *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
     *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
     *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
     *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
     *  - `onPanResponderReject: (e, gestureState) => {...}`
     *  - `onPanResponderGrant: (e, gestureState) => {...}`
     *  - `onPanResponderStart: (e, gestureState) => {...}`
     *  - `onPanResponderEnd: (e, gestureState) => {...}`
     *  - `onPanResponderRelease: (e, gestureState) => {...}`
     *  - `onPanResponderMove: (e, gestureState) => {...}`
     *  - `onPanResponderTerminate: (e, gestureState) => {...}`
     *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
     *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
     *
     *  In general, for events that have capture equivalents, we update the
     *  gestureState once in the capture phase and can use it in the bubble phase
     *  as well.
     *
     *  Be careful with onStartShould* callbacks. They only reflect updated
     *  `gestureState` for start/end events that bubble/capture to the Node.
     *  Once the node is the responder, you can rely on every start/end event
     *  being processed by the gesture and `gestureState` being updated
     *  accordingly. (numberActiveTouches) may not be totally accurate unless you
     *  are the responder.
     */
    create(config) {
      var interactionState = {
        handle: null,
        shouldCancelClick: false,
        timeout: null
      };
      var gestureState = {
        // Useful for debugging
        stateID: Math.random(),
        moveX: 0,
        moveY: 0,
        x0: 0,
        y0: 0,
        dx: 0,
        dy: 0,
        vx: 0,
        vy: 0,
        numberActiveTouches: 0,
        _accountsForMovesUpTo: 0
      };
      var panHandlers = {
        onStartShouldSetResponder(event) {
          return config.onStartShouldSetPanResponder == null ? false : config.onStartShouldSetPanResponder(event, gestureState);
        },
        onMoveShouldSetResponder(event) {
          return config.onMoveShouldSetPanResponder == null ? false : config.onMoveShouldSetPanResponder(event, gestureState);
        },
        onStartShouldSetResponderCapture(event) {
          if (event.nativeEvent.touches.length === 1) {
            PanResponder$12._initializeGestureState(gestureState);
          }
          gestureState.numberActiveTouches = event.touchHistory.numberActiveTouches;
          return config.onStartShouldSetPanResponderCapture != null ? config.onStartShouldSetPanResponderCapture(event, gestureState) : false;
        },
        onMoveShouldSetResponderCapture(event) {
          var touchHistory = event.touchHistory;
          if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
            return false;
          }
          PanResponder$12._updateGestureStateOnMove(gestureState, touchHistory);
          return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(event, gestureState) : false;
        },
        onResponderGrant(event) {
          if (!interactionState.handle) {
            interactionState.handle = _InteractionManager.default.createInteractionHandle();
          }
          if (interactionState.timeout) {
            clearInteractionTimeout(interactionState);
          }
          interactionState.shouldCancelClick = true;
          gestureState.x0 = currentCentroidX(event.touchHistory);
          gestureState.y0 = currentCentroidY(event.touchHistory);
          gestureState.dx = 0;
          gestureState.dy = 0;
          if (config.onPanResponderGrant) {
            config.onPanResponderGrant(event, gestureState);
          }
          return config.onShouldBlockNativeResponder == null ? true : config.onShouldBlockNativeResponder(event, gestureState);
        },
        onResponderReject(event) {
          clearInteractionHandle(interactionState, config.onPanResponderReject, event, gestureState);
        },
        onResponderRelease(event) {
          clearInteractionHandle(interactionState, config.onPanResponderRelease, event, gestureState);
          setInteractionTimeout(interactionState);
          PanResponder$12._initializeGestureState(gestureState);
        },
        onResponderStart(event) {
          var touchHistory = event.touchHistory;
          gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
          if (config.onPanResponderStart) {
            config.onPanResponderStart(event, gestureState);
          }
        },
        onResponderMove(event) {
          var touchHistory = event.touchHistory;
          if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
            return;
          }
          PanResponder$12._updateGestureStateOnMove(gestureState, touchHistory);
          if (config.onPanResponderMove) {
            config.onPanResponderMove(event, gestureState);
          }
        },
        onResponderEnd(event) {
          var touchHistory = event.touchHistory;
          gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
          clearInteractionHandle(interactionState, config.onPanResponderEnd, event, gestureState);
        },
        onResponderTerminate(event) {
          clearInteractionHandle(interactionState, config.onPanResponderTerminate, event, gestureState);
          setInteractionTimeout(interactionState);
          PanResponder$12._initializeGestureState(gestureState);
        },
        onResponderTerminationRequest(event) {
          return config.onPanResponderTerminationRequest == null ? true : config.onPanResponderTerminationRequest(event, gestureState);
        },
        // We do not want to trigger 'click' activated gestures or native behaviors
        // on any pan target that is under a mouse cursor when it is released.
        // Browsers will natively cancel 'click' events on a target if a non-mouse
        // active pointer moves.
        onClickCapture: (event) => {
          if (interactionState.shouldCancelClick === true) {
            event.stopPropagation();
            event.preventDefault();
          }
        }
      };
      return {
        panHandlers,
        getInteractionHandle() {
          return interactionState.handle;
        }
      };
    }
  };
  function clearInteractionHandle(interactionState, callback, event, gestureState) {
    if (interactionState.handle) {
      _InteractionManager.default.clearInteractionHandle(interactionState.handle);
      interactionState.handle = null;
    }
    if (callback) {
      callback(event, gestureState);
    }
  }
  function clearInteractionTimeout(interactionState) {
    clearTimeout(interactionState.timeout);
  }
  function setInteractionTimeout(interactionState) {
    interactionState.timeout = setTimeout(() => {
      interactionState.shouldCancelClick = false;
    }, 250);
  }
  PanResponder.default = PanResponder$12;
  return PanResponder;
}
var hasRequiredPanResponder;
function requirePanResponder() {
  if (hasRequiredPanResponder) return PanResponder$1;
  hasRequiredPanResponder = 1;
  Object.defineProperty(PanResponder$1, "__esModule", {
    value: true
  });
  PanResponder$1.default = void 0;
  var _PanResponder = _interopRequireDefault(/* @__PURE__ */ requirePanResponder$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  PanResponder$1.default = _PanResponder.default;
  return PanResponder$1;
}
var Share = {};
var hasRequiredShare;
function requireShare() {
  if (hasRequiredShare) return Share;
  hasRequiredShare = 1;
  Object.defineProperty(Share, "__esModule", {
    value: true
  });
  Share.default = void 0;
  var _invariant = _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  let Share$1 = class Share {
    static share(content, options) {
      if (options === void 0) {
        options = {};
      }
      (0, _invariant.default)(typeof content === "object" && content !== null, "Content to share must be a valid object");
      (0, _invariant.default)(typeof content.url === "string" || typeof content.message === "string", "At least one of URL and message is required");
      (0, _invariant.default)(typeof options === "object" && options !== null, "Options must be a valid object");
      (0, _invariant.default)(!content.title || typeof content.title === "string", "Invalid title: title should be a string.");
      if (window.navigator.share !== void 0) {
        return window.navigator.share({
          title: content.title,
          text: content.message,
          url: content.url
        });
      } else {
        return Promise.reject(new Error("Share is not supported in this browser"));
      }
    }
    /**
     * The content was successfully shared.
     */
    static get sharedAction() {
      return "sharedAction";
    }
    /**
     * The dialog has been dismissed.
     * @platform ios
     */
    static get dismissedAction() {
      return "dismissedAction";
    }
  };
  Share.default = Share$1;
  return Share;
}
var Vibration = {};
var hasRequiredVibration;
function requireVibration() {
  if (hasRequiredVibration) return Vibration;
  hasRequiredVibration = 1;
  Object.defineProperty(Vibration, "__esModule", {
    value: true
  });
  Vibration.default = void 0;
  var vibrate = (pattern) => {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(pattern);
    }
  };
  var Vibration$1 = {
    cancel() {
      vibrate(0);
    },
    vibrate(pattern) {
      if (pattern === void 0) {
        pattern = 400;
      }
      vibrate(pattern);
    }
  };
  Vibration.default = Vibration$1;
  return Vibration;
}
var ActivityIndicator = {};
var hasRequiredActivityIndicator;
function requireActivityIndicator() {
  if (hasRequiredActivityIndicator) return ActivityIndicator;
  hasRequiredActivityIndicator = 1;
  Object.defineProperty(ActivityIndicator, "__esModule", {
    value: true
  });
  ActivityIndicator.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["animating", "color", "hidesWhenStopped", "size", "style"];
  var createSvgCircle = (style) => /* @__PURE__ */ React.createElement("circle", {
    cx: "16",
    cy: "16",
    fill: "none",
    r: "14",
    strokeWidth: "4",
    style
  });
  var ActivityIndicator$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var _props$animating = props.animating, animating = _props$animating === void 0 ? true : _props$animating, _props$color = props.color, color = _props$color === void 0 ? "#1976D2" : _props$color, _props$hidesWhenStopp = props.hidesWhenStopped, hidesWhenStopped = _props$hidesWhenStopp === void 0 ? true : _props$hidesWhenStopp, _props$size = props.size, size = _props$size === void 0 ? "small" : _props$size, style = props.style, other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var svg = /* @__PURE__ */ React.createElement("svg", {
      height: "100%",
      viewBox: "0 0 32 32",
      width: "100%"
    }, createSvgCircle({
      stroke: color,
      opacity: 0.2
    }), createSvgCircle({
      stroke: color,
      strokeDasharray: 80,
      strokeDashoffset: 60
    }));
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, other, {
      "aria-valuemax": 1,
      "aria-valuemin": 0,
      ref: forwardedRef,
      role: "progressbar",
      style: [styles2.container, style]
    }), /* @__PURE__ */ React.createElement(_View.default, {
      children: svg,
      style: [typeof size === "number" ? {
        height: size,
        width: size
      } : indicatorSizes[size], styles2.animation, !animating && styles2.animationPause, !animating && hidesWhenStopped && styles2.hidesWhenStopped]
    }));
  });
  ActivityIndicator$1.displayName = "ActivityIndicator";
  var styles2 = _StyleSheet.default.create({
    container: {
      alignItems: "center",
      justifyContent: "center"
    },
    hidesWhenStopped: {
      visibility: "hidden"
    },
    animation: {
      animationDuration: "0.75s",
      animationKeyframes: [{
        "0%": {
          transform: "rotate(0deg)"
        },
        "100%": {
          transform: "rotate(360deg)"
        }
      }],
      animationTimingFunction: "linear",
      animationIterationCount: "infinite"
    },
    animationPause: {
      animationPlayState: "paused"
    }
  });
  var indicatorSizes = _StyleSheet.default.create({
    small: {
      width: 20,
      height: 20
    },
    large: {
      width: 36,
      height: 36
    }
  });
  ActivityIndicator.default = ActivityIndicator$1;
  return ActivityIndicator;
}
var Button$1 = {};
var TouchableOpacity = {};
var usePressEvents = {};
var PressResponder = {};
var hasRequiredPressResponder;
function requirePressResponder() {
  if (hasRequiredPressResponder) return PressResponder;
  hasRequiredPressResponder = 1;
  Object.defineProperty(PressResponder, "__esModule", {
    value: true
  });
  PressResponder.default = void 0;
  var DELAY = "DELAY";
  var ERROR = "ERROR";
  var LONG_PRESS_DETECTED = "LONG_PRESS_DETECTED";
  var NOT_RESPONDER = "NOT_RESPONDER";
  var RESPONDER_ACTIVE_LONG_PRESS_START = "RESPONDER_ACTIVE_LONG_PRESS_START";
  var RESPONDER_ACTIVE_PRESS_START = "RESPONDER_ACTIVE_PRESS_START";
  var RESPONDER_INACTIVE_PRESS_START = "RESPONDER_INACTIVE_PRESS_START";
  var RESPONDER_GRANT = "RESPONDER_GRANT";
  var RESPONDER_RELEASE = "RESPONDER_RELEASE";
  var RESPONDER_TERMINATED = "RESPONDER_TERMINATED";
  var Transitions = Object.freeze({
    NOT_RESPONDER: {
      DELAY: ERROR,
      RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
      RESPONDER_RELEASE: ERROR,
      RESPONDER_TERMINATED: ERROR,
      LONG_PRESS_DETECTED: ERROR
    },
    RESPONDER_INACTIVE_PRESS_START: {
      DELAY: RESPONDER_ACTIVE_PRESS_START,
      RESPONDER_GRANT: ERROR,
      RESPONDER_RELEASE: NOT_RESPONDER,
      RESPONDER_TERMINATED: NOT_RESPONDER,
      LONG_PRESS_DETECTED: ERROR
    },
    RESPONDER_ACTIVE_PRESS_START: {
      DELAY: ERROR,
      RESPONDER_GRANT: ERROR,
      RESPONDER_RELEASE: NOT_RESPONDER,
      RESPONDER_TERMINATED: NOT_RESPONDER,
      LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
    },
    RESPONDER_ACTIVE_LONG_PRESS_START: {
      DELAY: ERROR,
      RESPONDER_GRANT: ERROR,
      RESPONDER_RELEASE: NOT_RESPONDER,
      RESPONDER_TERMINATED: NOT_RESPONDER,
      LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
    },
    ERROR: {
      DELAY: NOT_RESPONDER,
      RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
      RESPONDER_RELEASE: NOT_RESPONDER,
      RESPONDER_TERMINATED: NOT_RESPONDER,
      LONG_PRESS_DETECTED: NOT_RESPONDER
    }
  });
  var getElementRole = (element) => element.getAttribute("role");
  var getElementType = (element) => element.tagName.toLowerCase();
  var isActiveSignal = (signal) => signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
  var isButtonRole = (element) => getElementRole(element) === "button";
  var isPressStartSignal = (signal) => signal === RESPONDER_INACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
  var isTerminalSignal = (signal) => signal === RESPONDER_TERMINATED || signal === RESPONDER_RELEASE;
  var isValidKeyPress = (event) => {
    var key = event.key, target = event.target;
    var isSpacebar = key === " " || key === "Spacebar";
    var isButtonish = getElementType(target) === "button" || isButtonRole(target);
    return key === "Enter" || isSpacebar && isButtonish;
  };
  var DEFAULT_LONG_PRESS_DELAY_MS = 450;
  var DEFAULT_PRESS_DELAY_MS = 50;
  let PressResponder$1 = class PressResponder {
    constructor(config) {
      this._eventHandlers = null;
      this._isPointerTouch = false;
      this._longPressDelayTimeout = null;
      this._longPressDispatched = false;
      this._pressDelayTimeout = null;
      this._pressOutDelayTimeout = null;
      this._touchState = NOT_RESPONDER;
      this._responderElement = null;
      this.configure(config);
    }
    configure(config) {
      this._config = config;
    }
    /**
     * Resets any pending timers. This should be called on unmount.
     */
    reset() {
      this._cancelLongPressDelayTimeout();
      this._cancelPressDelayTimeout();
      this._cancelPressOutDelayTimeout();
    }
    /**
     * Returns a set of props to spread into the interactive element.
     */
    getEventHandlers() {
      if (this._eventHandlers == null) {
        this._eventHandlers = this._createEventHandlers();
      }
      return this._eventHandlers;
    }
    _createEventHandlers() {
      var start = (event, shouldDelay) => {
        event.persist();
        this._cancelPressOutDelayTimeout();
        this._longPressDispatched = false;
        this._selectionTerminated = false;
        this._touchState = NOT_RESPONDER;
        this._isPointerTouch = event.nativeEvent.type === "touchstart";
        this._receiveSignal(RESPONDER_GRANT, event);
        var delayPressStart = normalizeDelay(this._config.delayPressStart, 0, DEFAULT_PRESS_DELAY_MS);
        if (shouldDelay !== false && delayPressStart > 0) {
          this._pressDelayTimeout = setTimeout(() => {
            this._receiveSignal(DELAY, event);
          }, delayPressStart);
        } else {
          this._receiveSignal(DELAY, event);
        }
        var delayLongPress = normalizeDelay(this._config.delayLongPress, 10, DEFAULT_LONG_PRESS_DELAY_MS);
        this._longPressDelayTimeout = setTimeout(() => {
          this._handleLongPress(event);
        }, delayLongPress + delayPressStart);
      };
      var end = (event) => {
        this._receiveSignal(RESPONDER_RELEASE, event);
      };
      var keyupHandler = (event) => {
        var onPress = this._config.onPress;
        var target = event.target;
        if (this._touchState !== NOT_RESPONDER && isValidKeyPress(event)) {
          end(event);
          document.removeEventListener("keyup", keyupHandler);
          var role = target.getAttribute("role");
          var elementType = getElementType(target);
          var isNativeInteractiveElement = role === "link" || elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea";
          var isActiveElement = this._responderElement === target;
          if (onPress != null && !isNativeInteractiveElement && isActiveElement) {
            onPress(event);
          }
          this._responderElement = null;
        }
      };
      return {
        onStartShouldSetResponder: (event) => {
          var disabled = this._config.disabled;
          if (disabled && isButtonRole(event.currentTarget)) {
            event.stopPropagation();
          }
          if (disabled == null) {
            return true;
          }
          return !disabled;
        },
        onKeyDown: (event) => {
          var disabled = this._config.disabled;
          var key = event.key, target = event.target;
          if (!disabled && isValidKeyPress(event)) {
            if (this._touchState === NOT_RESPONDER) {
              start(event, false);
              this._responderElement = target;
              document.addEventListener("keyup", keyupHandler);
            }
            var isSpacebarKey = key === " " || key === "Spacebar";
            var role = getElementRole(target);
            var isButtonLikeRole = role === "button" || role === "menuitem";
            if (isSpacebarKey && isButtonLikeRole && getElementType(target) !== "button") {
              event.preventDefault();
            }
            event.stopPropagation();
          }
        },
        onResponderGrant: (event) => start(event),
        onResponderMove: (event) => {
          if (this._config.onPressMove != null) {
            this._config.onPressMove(event);
          }
          var touch = getTouchFromResponderEvent(event);
          if (this._touchActivatePosition != null) {
            var deltaX = this._touchActivatePosition.pageX - touch.pageX;
            var deltaY = this._touchActivatePosition.pageY - touch.pageY;
            if (Math.hypot(deltaX, deltaY) > 10) {
              this._cancelLongPressDelayTimeout();
            }
          }
        },
        onResponderRelease: (event) => end(event),
        onResponderTerminate: (event) => {
          if (event.nativeEvent.type === "selectionchange") {
            this._selectionTerminated = true;
          }
          this._receiveSignal(RESPONDER_TERMINATED, event);
        },
        onResponderTerminationRequest: (event) => {
          var _this$_config = this._config, cancelable = _this$_config.cancelable, disabled = _this$_config.disabled, onLongPress = _this$_config.onLongPress;
          if (!disabled && onLongPress != null && this._isPointerTouch && event.nativeEvent.type === "contextmenu") {
            return false;
          }
          if (cancelable == null) {
            return true;
          }
          return cancelable;
        },
        // NOTE: this diverges from react-native in 3 significant ways:
        // * The `onPress` callback is not connected to the responder system (the native
        //  `click` event must be used but is dispatched in many scenarios where no pointers
        //   are on the screen.) Therefore, it's possible for `onPress` to be called without
        //   `onPress{Start,End}` being called first.
        // * The `onPress` callback is only be called on the first ancestor of the native
        //   `click` target that is using the PressResponder.
        // * The event's `nativeEvent` is a `MouseEvent` not a `TouchEvent`.
        onClick: (event) => {
          var _this$_config2 = this._config, disabled = _this$_config2.disabled, onPress = _this$_config2.onPress;
          if (!disabled) {
            event.stopPropagation();
            if (this._longPressDispatched || this._selectionTerminated) {
              event.preventDefault();
            } else if (onPress != null && event.altKey === false) {
              onPress(event);
            }
          } else {
            if (isButtonRole(event.currentTarget)) {
              event.stopPropagation();
            }
          }
        },
        // If `onLongPress` is provided and a touch pointer is being used, prevent the
        // default context menu from opening.
        onContextMenu: (event) => {
          var _this$_config3 = this._config, disabled = _this$_config3.disabled, onLongPress = _this$_config3.onLongPress;
          if (!disabled) {
            if (onLongPress != null && this._isPointerTouch && !event.defaultPrevented) {
              event.preventDefault();
              event.stopPropagation();
            }
          } else {
            if (isButtonRole(event.currentTarget)) {
              event.stopPropagation();
            }
          }
        }
      };
    }
    /**
     * Receives a state machine signal, performs side effects of the transition
     * and stores the new state. Validates the transition as well.
     */
    _receiveSignal(signal, event) {
      var prevState = this._touchState;
      var nextState = null;
      if (Transitions[prevState] != null) {
        nextState = Transitions[prevState][signal];
      }
      if (this._touchState === NOT_RESPONDER && signal === RESPONDER_RELEASE) {
        return;
      }
      if (nextState == null || nextState === ERROR) {
        console.error("PressResponder: Invalid signal " + signal + " for state " + prevState + " on responder");
      } else if (prevState !== nextState) {
        this._performTransitionSideEffects(prevState, nextState, signal, event);
        this._touchState = nextState;
      }
    }
    /**
     * Performs a transition between touchable states and identify any activations
     * or deactivations (and callback invocations).
     */
    _performTransitionSideEffects(prevState, nextState, signal, event) {
      if (isTerminalSignal(signal)) {
        setTimeout(() => {
          this._isPointerTouch = false;
        }, 0);
        this._touchActivatePosition = null;
        this._cancelLongPressDelayTimeout();
      }
      if (isPressStartSignal(prevState) && signal === LONG_PRESS_DETECTED) {
        var onLongPress = this._config.onLongPress;
        if (onLongPress != null && event.nativeEvent.key == null) {
          onLongPress(event);
          this._longPressDispatched = true;
        }
      }
      var isPrevActive = isActiveSignal(prevState);
      var isNextActive = isActiveSignal(nextState);
      if (!isPrevActive && isNextActive) {
        this._activate(event);
      } else if (isPrevActive && !isNextActive) {
        this._deactivate(event);
      }
      if (isPressStartSignal(prevState) && signal === RESPONDER_RELEASE) {
        var _this$_config4 = this._config, _onLongPress = _this$_config4.onLongPress, onPress = _this$_config4.onPress;
        if (onPress != null) {
          var isPressCanceledByLongPress = _onLongPress != null && prevState === RESPONDER_ACTIVE_LONG_PRESS_START;
          if (!isPressCanceledByLongPress) {
            if (!isNextActive && !isPrevActive) {
              this._activate(event);
              this._deactivate(event);
            }
          }
        }
      }
      this._cancelPressDelayTimeout();
    }
    _activate(event) {
      var _this$_config5 = this._config, onPressChange = _this$_config5.onPressChange, onPressStart = _this$_config5.onPressStart;
      var touch = getTouchFromResponderEvent(event);
      this._touchActivatePosition = {
        pageX: touch.pageX,
        pageY: touch.pageY
      };
      if (onPressStart != null) {
        onPressStart(event);
      }
      if (onPressChange != null) {
        onPressChange(true);
      }
    }
    _deactivate(event) {
      var _this$_config6 = this._config, onPressChange = _this$_config6.onPressChange, onPressEnd = _this$_config6.onPressEnd;
      function end() {
        if (onPressEnd != null) {
          onPressEnd(event);
        }
        if (onPressChange != null) {
          onPressChange(false);
        }
      }
      var delayPressEnd = normalizeDelay(this._config.delayPressEnd);
      if (delayPressEnd > 0) {
        this._pressOutDelayTimeout = setTimeout(() => {
          end();
        }, delayPressEnd);
      } else {
        end();
      }
    }
    _handleLongPress(event) {
      if (this._touchState === RESPONDER_ACTIVE_PRESS_START || this._touchState === RESPONDER_ACTIVE_LONG_PRESS_START) {
        this._receiveSignal(LONG_PRESS_DETECTED, event);
      }
    }
    _cancelLongPressDelayTimeout() {
      if (this._longPressDelayTimeout != null) {
        clearTimeout(this._longPressDelayTimeout);
        this._longPressDelayTimeout = null;
      }
    }
    _cancelPressDelayTimeout() {
      if (this._pressDelayTimeout != null) {
        clearTimeout(this._pressDelayTimeout);
        this._pressDelayTimeout = null;
      }
    }
    _cancelPressOutDelayTimeout() {
      if (this._pressOutDelayTimeout != null) {
        clearTimeout(this._pressOutDelayTimeout);
        this._pressOutDelayTimeout = null;
      }
    }
  };
  PressResponder.default = PressResponder$1;
  function normalizeDelay(delay, min, fallback) {
    if (min === void 0) {
      min = 0;
    }
    if (fallback === void 0) {
      fallback = 0;
    }
    return Math.max(min, delay !== null && delay !== void 0 ? delay : fallback);
  }
  function getTouchFromResponderEvent(event) {
    var _event$nativeEvent = event.nativeEvent, changedTouches = _event$nativeEvent.changedTouches, touches = _event$nativeEvent.touches;
    if (touches != null && touches.length > 0) {
      return touches[0];
    }
    if (changedTouches != null && changedTouches.length > 0) {
      return changedTouches[0];
    }
    return event.nativeEvent;
  }
  return PressResponder;
}
var hasRequiredUsePressEvents;
function requireUsePressEvents() {
  if (hasRequiredUsePressEvents) return usePressEvents;
  hasRequiredUsePressEvents = 1;
  Object.defineProperty(usePressEvents, "__esModule", {
    value: true
  });
  usePressEvents.default = usePressEvents$1;
  var _PressResponder = _interopRequireDefault(/* @__PURE__ */ requirePressResponder());
  var _react = requireReact();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function usePressEvents$1(hostRef, config) {
    var pressResponderRef = (0, _react.useRef)(null);
    if (pressResponderRef.current == null) {
      pressResponderRef.current = new _PressResponder.default(config);
    }
    var pressResponder = pressResponderRef.current;
    (0, _react.useEffect)(() => {
      pressResponder.configure(config);
    }, [config, pressResponder]);
    (0, _react.useEffect)(() => {
      return () => {
        pressResponder.reset();
      };
    }, [pressResponder]);
    (0, _react.useDebugValue)(config);
    return pressResponder.getEventHandlers();
  }
  return usePressEvents;
}
var hasRequiredTouchableOpacity;
function requireTouchableOpacity() {
  if (hasRequiredTouchableOpacity) return TouchableOpacity;
  hasRequiredTouchableOpacity = 1;
  Object.defineProperty(TouchableOpacity, "__esModule", {
    value: true
  });
  TouchableOpacity.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _react = _interopRequireWildcard(requireReact());
  var React = _react;
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  var _usePressEvents = _interopRequireDefault(/* @__PURE__ */ requireUsePressEvents());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["activeOpacity", "delayPressIn", "delayPressOut", "delayLongPress", "disabled", "focusable", "onLongPress", "onPress", "onPressIn", "onPressOut", "rejectResponderTermination", "style"];
  function TouchableOpacity$1(props, forwardedRef) {
    var activeOpacity = props.activeOpacity, delayPressIn = props.delayPressIn, delayPressOut = props.delayPressOut, delayLongPress = props.delayLongPress, disabled = props.disabled, focusable = props.focusable, onLongPress = props.onLongPress, onPress = props.onPress, onPressIn = props.onPressIn, onPressOut = props.onPressOut, rejectResponderTermination = props.rejectResponderTermination, style = props.style, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var hostRef = (0, _react.useRef)(null);
    var setRef = (0, _useMergeRefs.default)(forwardedRef, hostRef);
    var _useState = (0, _react.useState)("0s"), duration = _useState[0], setDuration = _useState[1];
    var _useState2 = (0, _react.useState)(null), opacityOverride = _useState2[0], setOpacityOverride = _useState2[1];
    var setOpacityTo = (0, _react.useCallback)((value, duration2) => {
      setOpacityOverride(value);
      setDuration(duration2 ? duration2 / 1e3 + "s" : "0s");
    }, [setOpacityOverride, setDuration]);
    var setOpacityActive = (0, _react.useCallback)((duration2) => {
      setOpacityTo(activeOpacity !== null && activeOpacity !== void 0 ? activeOpacity : 0.2, duration2);
    }, [activeOpacity, setOpacityTo]);
    var setOpacityInactive = (0, _react.useCallback)((duration2) => {
      setOpacityTo(null, duration2);
    }, [setOpacityTo]);
    var pressConfig = (0, _react.useMemo)(() => ({
      cancelable: !rejectResponderTermination,
      disabled,
      delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress,
      onPress,
      onPressStart(event) {
        var isGrant = event.dispatchConfig != null ? event.dispatchConfig.registrationName === "onResponderGrant" : event.type === "keydown";
        setOpacityActive(isGrant ? 0 : 150);
        if (onPressIn != null) {
          onPressIn(event);
        }
      },
      onPressEnd(event) {
        setOpacityInactive(250);
        if (onPressOut != null) {
          onPressOut(event);
        }
      }
    }), [delayLongPress, delayPressIn, delayPressOut, disabled, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination, setOpacityActive, setOpacityInactive]);
    var pressEventHandlers = (0, _usePressEvents.default)(hostRef, pressConfig);
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, rest, pressEventHandlers, {
      accessibilityDisabled: disabled,
      focusable: !disabled && focusable !== false,
      pointerEvents: disabled ? "box-none" : void 0,
      ref: setRef,
      style: [styles2.root, !disabled && styles2.actionable, style, opacityOverride != null && {
        opacity: opacityOverride
      }, {
        transitionDuration: duration
      }]
    }));
  }
  var styles2 = _StyleSheet.default.create({
    root: {
      transitionProperty: "opacity",
      transitionDuration: "0.15s",
      userSelect: "none"
    },
    actionable: {
      cursor: "pointer",
      touchAction: "manipulation"
    }
  });
  var MemoedTouchableOpacity = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(TouchableOpacity$1));
  MemoedTouchableOpacity.displayName = "TouchableOpacity";
  TouchableOpacity.default = MemoedTouchableOpacity;
  return TouchableOpacity;
}
var hasRequiredButton;
function requireButton() {
  if (hasRequiredButton) return Button$1;
  hasRequiredButton = 1;
  Object.defineProperty(Button$1, "__esModule", {
    value: true
  });
  Button$1.default = void 0;
  var React = _interopRequireWildcard(requireReact());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _TouchableOpacity = _interopRequireDefault(/* @__PURE__ */ requireTouchableOpacity());
  var _Text = _interopRequireDefault(/* @__PURE__ */ requireText());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var Button2 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var accessibilityLabel = props.accessibilityLabel, color = props.color, disabled = props.disabled, onPress = props.onPress, testID = props.testID, title = props.title;
    return /* @__PURE__ */ React.createElement(_TouchableOpacity.default, {
      accessibilityLabel,
      accessibilityRole: "button",
      disabled,
      focusable: !disabled,
      onPress,
      ref: forwardedRef,
      style: [styles2.button, color && {
        backgroundColor: color
      }, disabled && styles2.buttonDisabled],
      testID
    }, /* @__PURE__ */ React.createElement(_Text.default, {
      style: [styles2.text, disabled && styles2.textDisabled]
    }, title));
  });
  Button2.displayName = "Button";
  var styles2 = _StyleSheet.default.create({
    button: {
      backgroundColor: "#2196F3",
      borderRadius: 2
    },
    text: {
      color: "#fff",
      fontWeight: "500",
      padding: 8,
      textAlign: "center",
      textTransform: "uppercase"
    },
    buttonDisabled: {
      backgroundColor: "#dfdfdf"
    },
    textDisabled: {
      color: "#a1a1a1"
    }
  });
  Button$1.default = Button2;
  return Button$1;
}
var CheckBox = {};
var hasRequiredCheckBox;
function requireCheckBox() {
  if (hasRequiredCheckBox) return CheckBox;
  hasRequiredCheckBox = 1;
  Object.defineProperty(CheckBox, "__esModule", {
    value: true
  });
  CheckBox.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["aria-readonly", "color", "disabled", "onChange", "onValueChange", "readOnly", "style", "value"];
  var CheckBox$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var ariaReadOnly = props["aria-readonly"], color = props.color, disabled = props.disabled, onChange = props.onChange, onValueChange = props.onValueChange, readOnly = props.readOnly, style = props.style, value = props.value, other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    function handleChange(event) {
      var value2 = event.nativeEvent.target.checked;
      event.nativeEvent.value = value2;
      onChange && onChange(event);
      onValueChange && onValueChange(value2);
    }
    var fakeControl = /* @__PURE__ */ React.createElement(_View.default, {
      style: [
        styles2.fakeControl,
        value && styles2.fakeControlChecked,
        // custom color
        value && color && {
          backgroundColor: color,
          borderColor: color
        },
        disabled && styles2.fakeControlDisabled,
        value && disabled && styles2.fakeControlCheckedAndDisabled
      ]
    });
    var nativeControl = (0, _createElement.default)("input", {
      checked: value,
      disabled,
      onChange: handleChange,
      readOnly: readOnly === true || ariaReadOnly === true || other.accessibilityReadOnly === true,
      ref: forwardedRef,
      style: [styles2.nativeControl, styles2.cursorInherit],
      type: "checkbox"
    });
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, other, {
      "aria-disabled": disabled,
      "aria-readonly": ariaReadOnly,
      style: [styles2.root, style, disabled && styles2.cursorDefault]
    }), fakeControl, nativeControl);
  });
  CheckBox$1.displayName = "CheckBox";
  var styles2 = _StyleSheet.default.create({
    root: {
      cursor: "pointer",
      height: 16,
      userSelect: "none",
      width: 16
    },
    cursorDefault: {
      cursor: "default"
    },
    cursorInherit: {
      cursor: "inherit"
    },
    fakeControl: {
      alignItems: "center",
      backgroundColor: "#fff",
      borderColor: "#657786",
      borderRadius: 2,
      borderStyle: "solid",
      borderWidth: 2,
      height: "100%",
      justifyContent: "center",
      width: "100%"
    },
    fakeControlChecked: {
      backgroundColor: "#009688",
      backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',
      backgroundRepeat: "no-repeat",
      borderColor: "#009688"
    },
    fakeControlDisabled: {
      borderColor: "#CCD6DD"
    },
    fakeControlCheckedAndDisabled: {
      backgroundColor: "#AAB8C2",
      borderColor: "#AAB8C2"
    },
    nativeControl: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _StyleSheet.default.absoluteFillObject), {}, {
      height: "100%",
      margin: 0,
      appearance: "none",
      padding: 0,
      width: "100%"
    })
  });
  CheckBox.default = CheckBox$1;
  return CheckBox;
}
var ImageBackground = {};
var hasRequiredImageBackground;
function requireImageBackground() {
  if (hasRequiredImageBackground) return ImageBackground;
  hasRequiredImageBackground = 1;
  Object.defineProperty(ImageBackground, "__esModule", {
    value: true
  });
  ImageBackground.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _react = _interopRequireWildcard(requireReact());
  var React = _react;
  var _Image = _interopRequireDefault(/* @__PURE__ */ requireImage());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["children", "style", "imageStyle", "imageRef"];
  var emptyObject = {};
  var ImageBackground$1 = /* @__PURE__ */ (0, _react.forwardRef)((props, forwardedRef) => {
    var children = props.children, _props$style = props.style, style = _props$style === void 0 ? emptyObject : _props$style, imageStyle = props.imageStyle, imageRef = props.imageRef, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var _StyleSheet$flatten = _StyleSheet.default.flatten(style), height = _StyleSheet$flatten.height, width = _StyleSheet$flatten.width;
    return /* @__PURE__ */ React.createElement(_View.default, {
      ref: forwardedRef,
      style
    }, /* @__PURE__ */ React.createElement(_Image.default, (0, _extends2.default)({}, rest, {
      ref: imageRef,
      style: [{
        // Temporary Workaround:
        // Current (imperfect yet) implementation of <Image> overwrites width and height styles
        // (which is not quite correct), and these styles conflict with explicitly set styles
        // of <ImageBackground> and with our internal layout model here.
        // So, we have to proxy/reapply these styles explicitly for actual <Image> component.
        // This workaround should be removed after implementing proper support of
        // intrinsic content size of the <Image>.
        width,
        height,
        zIndex: -1
      }, _StyleSheet.default.absoluteFill, imageStyle]
    })), children);
  });
  ImageBackground$1.displayName = "ImageBackground";
  ImageBackground.default = ImageBackground$1;
  return ImageBackground;
}
var KeyboardAvoidingView = {};
var hasRequiredKeyboardAvoidingView;
function requireKeyboardAvoidingView() {
  if (hasRequiredKeyboardAvoidingView) return KeyboardAvoidingView;
  hasRequiredKeyboardAvoidingView = 1;
  Object.defineProperty(KeyboardAvoidingView, "__esModule", {
    value: true
  });
  KeyboardAvoidingView.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["behavior", "contentContainerStyle", "keyboardVerticalOffset"];
  let KeyboardAvoidingView$1 = class KeyboardAvoidingView extends React.Component {
    constructor() {
      super(...arguments);
      this.frame = null;
      this.onLayout = (event) => {
        this.frame = event.nativeEvent.layout;
      };
    }
    relativeKeyboardHeight(keyboardFrame) {
      var frame = this.frame;
      if (!frame || !keyboardFrame) {
        return 0;
      }
      var keyboardY = keyboardFrame.screenY - (this.props.keyboardVerticalOffset || 0);
      return Math.max(frame.y + frame.height - keyboardY, 0);
    }
    onKeyboardChange(event) {
    }
    render() {
      var _this$props = this.props;
      _this$props.behavior;
      _this$props.contentContainerStyle;
      _this$props.keyboardVerticalOffset;
      var rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
      return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({
        onLayout: this.onLayout
      }, rest));
    }
  };
  KeyboardAvoidingView.default = KeyboardAvoidingView$1;
  return KeyboardAvoidingView;
}
var Modal = {};
var ModalPortal = {};
var hasRequiredModalPortal;
function requireModalPortal() {
  if (hasRequiredModalPortal) return ModalPortal;
  hasRequiredModalPortal = 1;
  Object.defineProperty(ModalPortal, "__esModule", {
    value: true
  });
  ModalPortal.default = void 0;
  var React = _interopRequireWildcard(requireReact());
  var _reactDom = _interopRequireDefault(requireReactDom());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function ModalPortal$1(props) {
    var children = props.children;
    var elementRef = React.useRef(null);
    if (_canUseDom.default && !elementRef.current) {
      var element = document.createElement("div");
      if (element && document.body) {
        document.body.appendChild(element);
        elementRef.current = element;
      }
    }
    React.useEffect(() => {
      if (_canUseDom.default) {
        return () => {
          if (document.body && elementRef.current) {
            document.body.removeChild(elementRef.current);
            elementRef.current = null;
          }
        };
      }
    }, []);
    return elementRef.current && _canUseDom.default ? /* @__PURE__ */ _reactDom.default.createPortal(children, elementRef.current) : null;
  }
  ModalPortal.default = ModalPortal$1;
  return ModalPortal;
}
var ModalAnimation = {};
var hasRequiredModalAnimation;
function requireModalAnimation() {
  if (hasRequiredModalAnimation) return ModalAnimation;
  hasRequiredModalAnimation = 1;
  Object.defineProperty(ModalAnimation, "__esModule", {
    value: true
  });
  ModalAnimation.default = void 0;
  var React = _interopRequireWildcard(requireReact());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var ANIMATION_DURATION = 300;
  function getAnimationStyle(animationType, visible) {
    if (animationType === "slide") {
      return visible ? animatedSlideInStyles : animatedSlideOutStyles;
    }
    if (animationType === "fade") {
      return visible ? animatedFadeInStyles : animatedFadeOutStyles;
    }
    return visible ? styles2.container : styles2.hidden;
  }
  function ModalAnimation$1(props) {
    var animationType = props.animationType, children = props.children, onDismiss = props.onDismiss, onShow = props.onShow, visible = props.visible;
    var _React$useState = React.useState(false), isRendering = _React$useState[0], setIsRendering = _React$useState[1];
    var wasVisible = React.useRef(false);
    var wasRendering = React.useRef(false);
    var isAnimated = animationType && animationType !== "none";
    var animationEndCallback = React.useCallback((e) => {
      if (e && e.currentTarget !== e.target) {
        return;
      }
      if (visible) {
        if (onShow) {
          onShow();
        }
      } else {
        setIsRendering(false);
      }
    }, [onShow, visible]);
    React.useEffect(() => {
      if (wasRendering.current && !isRendering && onDismiss) {
        onDismiss();
      }
      wasRendering.current = isRendering;
    }, [isRendering, onDismiss]);
    React.useEffect(() => {
      if (visible) {
        setIsRendering(true);
      }
      if (visible !== wasVisible.current && !isAnimated) {
        animationEndCallback();
      }
      wasVisible.current = visible;
    }, [isAnimated, visible, animationEndCallback]);
    return isRendering || visible ? (0, _createElement.default)("div", {
      style: isRendering ? getAnimationStyle(animationType, visible) : styles2.hidden,
      onAnimationEnd: animationEndCallback,
      children
    }) : null;
  }
  var styles2 = _StyleSheet.default.create({
    container: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999
    },
    animatedIn: {
      animationDuration: ANIMATION_DURATION + "ms",
      animationTimingFunction: "ease-in"
    },
    animatedOut: {
      pointerEvents: "none",
      animationDuration: ANIMATION_DURATION + "ms",
      animationTimingFunction: "ease-out"
    },
    fadeIn: {
      opacity: 1,
      animationKeyframes: {
        "0%": {
          opacity: 0
        },
        "100%": {
          opacity: 1
        }
      }
    },
    fadeOut: {
      opacity: 0,
      animationKeyframes: {
        "0%": {
          opacity: 1
        },
        "100%": {
          opacity: 0
        }
      }
    },
    slideIn: {
      transform: "translateY(0%)",
      animationKeyframes: {
        "0%": {
          transform: "translateY(100%)"
        },
        "100%": {
          transform: "translateY(0%)"
        }
      }
    },
    slideOut: {
      transform: "translateY(100%)",
      animationKeyframes: {
        "0%": {
          transform: "translateY(0%)"
        },
        "100%": {
          transform: "translateY(100%)"
        }
      }
    },
    hidden: {
      opacity: 0
    }
  });
  var animatedSlideInStyles = [styles2.container, styles2.animatedIn, styles2.slideIn];
  var animatedSlideOutStyles = [styles2.container, styles2.animatedOut, styles2.slideOut];
  var animatedFadeInStyles = [styles2.container, styles2.animatedIn, styles2.fadeIn];
  var animatedFadeOutStyles = [styles2.container, styles2.animatedOut, styles2.fadeOut];
  ModalAnimation.default = ModalAnimation$1;
  return ModalAnimation;
}
var ModalContent = {};
var hasRequiredModalContent;
function requireModalContent() {
  if (hasRequiredModalContent) return ModalContent;
  hasRequiredModalContent = 1;
  Object.defineProperty(ModalContent, "__esModule", {
    value: true
  });
  ModalContent.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["active", "children", "onRequestClose", "transparent"];
  var ModalContent$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var active = props.active, children = props.children, onRequestClose = props.onRequestClose, transparent = props.transparent, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    React.useEffect(() => {
      if (_canUseDom.default) {
        var closeOnEscape = (e) => {
          if (active && e.key === "Escape") {
            e.stopPropagation();
            if (onRequestClose) {
              onRequestClose();
            }
          }
        };
        document.addEventListener("keyup", closeOnEscape, false);
        return () => document.removeEventListener("keyup", closeOnEscape, false);
      }
    }, [active, onRequestClose]);
    var style = React.useMemo(() => {
      return [styles2.modal, transparent ? styles2.modalTransparent : styles2.modalOpaque];
    }, [transparent]);
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, rest, {
      "aria-modal": true,
      ref: forwardedRef,
      role: active ? "dialog" : null,
      style
    }), /* @__PURE__ */ React.createElement(_View.default, {
      style: styles2.container
    }, children));
  });
  var styles2 = _StyleSheet.default.create({
    modal: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    modalTransparent: {
      backgroundColor: "transparent"
    },
    modalOpaque: {
      backgroundColor: "white"
    },
    container: {
      top: 0,
      flex: 1
    }
  });
  ModalContent.default = ModalContent$1;
  return ModalContent;
}
var ModalFocusTrap = {};
var hasRequiredModalFocusTrap;
function requireModalFocusTrap() {
  if (hasRequiredModalFocusTrap) return ModalFocusTrap;
  hasRequiredModalFocusTrap = 1;
  Object.defineProperty(ModalFocusTrap, "__esModule", {
    value: true
  });
  ModalFocusTrap.default = void 0;
  var React = _interopRequireWildcard(requireReact());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var FocusBracket = () => {
    return (0, _createElement.default)("div", {
      role: "none",
      tabIndex: 0,
      style: styles2.focusBracket
    });
  };
  function attemptFocus(element) {
    if (!_canUseDom.default) {
      return false;
    }
    try {
      element.focus();
    } catch (e) {
    }
    return document.activeElement === element;
  }
  function focusFirstDescendant(element) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];
      if (attemptFocus(child) || focusFirstDescendant(child)) {
        return true;
      }
    }
    return false;
  }
  function focusLastDescendant(element) {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
      var child = element.childNodes[i];
      if (attemptFocus(child) || focusLastDescendant(child)) {
        return true;
      }
    }
    return false;
  }
  var ModalFocusTrap$1 = (_ref) => {
    var active = _ref.active, children = _ref.children;
    var trapElementRef = React.useRef();
    var focusRef = React.useRef({
      trapFocusInProgress: false,
      lastFocusedElement: null
    });
    React.useEffect(() => {
      if (_canUseDom.default) {
        var trapFocus = () => {
          if (trapElementRef.current == null || focusRef.current.trapFocusInProgress || !active) {
            return;
          }
          try {
            focusRef.current.trapFocusInProgress = true;
            if (document.activeElement instanceof Node && !trapElementRef.current.contains(document.activeElement)) {
              var hasFocused = focusFirstDescendant(trapElementRef.current);
              if (focusRef.current.lastFocusedElement === document.activeElement) {
                hasFocused = focusLastDescendant(trapElementRef.current);
              }
              if (!hasFocused && trapElementRef.current != null && document.activeElement) {
                _UIManager.default.focus(trapElementRef.current);
              }
            }
          } finally {
            focusRef.current.trapFocusInProgress = false;
          }
          focusRef.current.lastFocusedElement = document.activeElement;
        };
        trapFocus();
        document.addEventListener("focus", trapFocus, true);
        return () => document.removeEventListener("focus", trapFocus, true);
      }
    }, [active]);
    React.useEffect(function() {
      if (_canUseDom.default) {
        var lastFocusedElementOutsideTrap = document.activeElement;
        return function() {
          if (lastFocusedElementOutsideTrap && document.contains(lastFocusedElementOutsideTrap)) {
            _UIManager.default.focus(lastFocusedElementOutsideTrap);
          }
        };
      }
    }, []);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FocusBracket, null), /* @__PURE__ */ React.createElement(_View.default, {
      ref: trapElementRef
    }, children), /* @__PURE__ */ React.createElement(FocusBracket, null));
  };
  ModalFocusTrap.default = ModalFocusTrap$1;
  var styles2 = _StyleSheet.default.create({
    focusBracket: {
      outlineStyle: "none"
    }
  });
  return ModalFocusTrap;
}
var hasRequiredModal;
function requireModal() {
  if (hasRequiredModal) return Modal;
  hasRequiredModal = 1;
  Object.defineProperty(Modal, "__esModule", {
    value: true
  });
  Modal.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _ModalPortal = _interopRequireDefault(/* @__PURE__ */ requireModalPortal());
  var _ModalAnimation = _interopRequireDefault(/* @__PURE__ */ requireModalAnimation());
  var _ModalContent = _interopRequireDefault(/* @__PURE__ */ requireModalContent());
  var _ModalFocusTrap = _interopRequireDefault(/* @__PURE__ */ requireModalFocusTrap());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["animationType", "children", "onDismiss", "onRequestClose", "onShow", "transparent", "visible"];
  var uniqueModalIdentifier = 0;
  var activeModalStack = [];
  var activeModalListeners = {};
  function notifyActiveModalListeners() {
    if (activeModalStack.length === 0) {
      return;
    }
    var activeModalId = activeModalStack[activeModalStack.length - 1];
    activeModalStack.forEach((modalId) => {
      if (modalId in activeModalListeners) {
        activeModalListeners[modalId](modalId === activeModalId);
      }
    });
  }
  function removeActiveModal(modalId) {
    if (modalId in activeModalListeners) {
      activeModalListeners[modalId](false);
      delete activeModalListeners[modalId];
    }
    var index = activeModalStack.indexOf(modalId);
    if (index !== -1) {
      activeModalStack.splice(index, 1);
      notifyActiveModalListeners();
    }
  }
  function addActiveModal(modalId, listener) {
    removeActiveModal(modalId);
    activeModalStack.push(modalId);
    activeModalListeners[modalId] = listener;
    notifyActiveModalListeners();
  }
  var Modal$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var animationType = props.animationType, children = props.children, onDismiss = props.onDismiss, onRequestClose = props.onRequestClose, onShow = props.onShow, transparent = props.transparent, _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var modalId = React.useMemo(() => uniqueModalIdentifier++, []);
    var _React$useState = React.useState(false), isActive = _React$useState[0], setIsActive = _React$useState[1];
    var onDismissCallback = React.useCallback(() => {
      removeActiveModal(modalId);
      if (onDismiss) {
        onDismiss();
      }
    }, [modalId, onDismiss]);
    var onShowCallback = React.useCallback(() => {
      addActiveModal(modalId, setIsActive);
      if (onShow) {
        onShow();
      }
    }, [modalId, onShow]);
    React.useEffect(() => {
      return () => removeActiveModal(modalId);
    }, [modalId]);
    return /* @__PURE__ */ React.createElement(_ModalPortal.default, null, /* @__PURE__ */ React.createElement(_ModalAnimation.default, {
      animationType,
      onDismiss: onDismissCallback,
      onShow: onShowCallback,
      visible
    }, /* @__PURE__ */ React.createElement(_ModalFocusTrap.default, {
      active: isActive
    }, /* @__PURE__ */ React.createElement(_ModalContent.default, (0, _extends2.default)({}, rest, {
      active: isActive,
      onRequestClose,
      ref: forwardedRef,
      transparent
    }), children))));
  });
  Modal.default = Modal$1;
  return Modal;
}
var Picker = {};
var PickerItem = {};
var hasRequiredPickerItem;
function requirePickerItem() {
  if (hasRequiredPickerItem) return PickerItem;
  hasRequiredPickerItem = 1;
  Object.defineProperty(PickerItem, "__esModule", {
    value: true
  });
  PickerItem.default = PickerItem$1;
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function PickerItem$1(props) {
    var color = props.color, label = props.label, testID = props.testID, value = props.value;
    var style = {
      color
    };
    return (0, _createElement.default)("option", {
      children: label,
      style,
      testID,
      value
    });
  }
  return PickerItem;
}
var hasRequiredPicker;
function requirePicker() {
  if (hasRequiredPicker) return Picker;
  hasRequiredPicker = 1;
  Object.defineProperty(Picker, "__esModule", {
    value: true
  });
  Picker.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  var _usePlatformMethods = _interopRequireDefault(/* @__PURE__ */ requireUsePlatformMethods());
  var _PickerItem = _interopRequireDefault(/* @__PURE__ */ requirePickerItem());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["children", "enabled", "onValueChange", "selectedValue", "style", "testID", "itemStyle", "mode", "prompt"];
  var Picker$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var children = props.children, enabled = props.enabled, onValueChange = props.onValueChange, selectedValue = props.selectedValue, style = props.style, testID = props.testID;
    props.itemStyle;
    props.mode;
    props.prompt;
    var other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var hostRef = React.useRef(null);
    function handleChange(e) {
      var _e$target = e.target, selectedIndex = _e$target.selectedIndex, value = _e$target.value;
      if (onValueChange) {
        onValueChange(value, selectedIndex);
      }
    }
    var supportedProps = (0, _objectSpread2.default)({
      children,
      disabled: enabled === false ? true : void 0,
      onChange: handleChange,
      style: [styles2.initial, style],
      testID,
      value: selectedValue
    }, other);
    var platformMethodsRef = (0, _usePlatformMethods.default)(supportedProps);
    var setRef = (0, _useMergeRefs.default)(hostRef, platformMethodsRef, forwardedRef);
    supportedProps.ref = setRef;
    return (0, _createElement.default)("select", supportedProps);
  });
  Picker$1.Item = _PickerItem.default;
  var styles2 = _StyleSheet.default.create({
    initial: {
      fontFamily: "System",
      fontSize: "inherit",
      margin: 0
    }
  });
  Picker.default = Picker$1;
  return Picker;
}
var Pressable = {};
var useHover = {};
var modality = {};
var addEventListener = {};
var hasRequiredAddEventListener;
function requireAddEventListener() {
  if (hasRequiredAddEventListener) return addEventListener;
  hasRequiredAddEventListener = 1;
  Object.defineProperty(addEventListener, "__esModule", {
    value: true
  });
  addEventListener.addEventListener = addEventListener$1;
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var emptyFunction = () => {
  };
  function supportsPassiveEvents() {
    var supported = false;
    if (_canUseDom.default) {
      try {
        var options = {};
        Object.defineProperty(options, "passive", {
          get() {
            supported = true;
            return false;
          }
        });
        window.addEventListener("test", null, options);
        window.removeEventListener("test", null, options);
      } catch (e) {
      }
    }
    return supported;
  }
  var canUsePassiveEvents = supportsPassiveEvents();
  function getOptions(options) {
    if (options == null) {
      return false;
    }
    return canUsePassiveEvents ? options : Boolean(options.capture);
  }
  function isPropagationStopped() {
    return this.cancelBubble;
  }
  function isDefaultPrevented() {
    return this.defaultPrevented;
  }
  function normalizeEvent(event) {
    event.nativeEvent = event;
    event.persist = emptyFunction;
    event.isDefaultPrevented = isDefaultPrevented;
    event.isPropagationStopped = isPropagationStopped;
    return event;
  }
  function addEventListener$1(target, type, listener, options) {
    var opts = getOptions(options);
    var compatListener = (e) => listener(normalizeEvent(e));
    target.addEventListener(type, compatListener, opts);
    return function removeEventListener() {
      if (target != null) {
        target.removeEventListener(type, compatListener, opts);
      }
    };
  }
  return addEventListener;
}
var hasRequiredModality;
function requireModality() {
  if (hasRequiredModality) return modality;
  hasRequiredModality = 1;
  Object.defineProperty(modality, "__esModule", {
    value: true
  });
  modality.addModalityListener = addModalityListener;
  modality.getActiveModality = getActiveModality;
  modality.getModality = getModality;
  modality.testOnly_resetActiveModality = testOnly_resetActiveModality;
  var _addEventListener = /* @__PURE__ */ requireAddEventListener();
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var supportsPointerEvent = () => !!(typeof window !== "undefined" && window.PointerEvent != null);
  var activeModality = "keyboard";
  var modality$1 = "keyboard";
  var previousModality;
  var previousActiveModality;
  var isEmulatingMouseEvents = false;
  var listeners = /* @__PURE__ */ new Set();
  var KEYBOARD = "keyboard";
  var MOUSE = "mouse";
  var TOUCH = "touch";
  var BLUR = "blur";
  var CONTEXTMENU = "contextmenu";
  var FOCUS = "focus";
  var KEYDOWN = "keydown";
  var MOUSEDOWN = "mousedown";
  var MOUSEMOVE = "mousemove";
  var MOUSEUP = "mouseup";
  var POINTERDOWN = "pointerdown";
  var POINTERMOVE = "pointermove";
  var SCROLL = "scroll";
  var SELECTIONCHANGE = "selectionchange";
  var TOUCHCANCEL = "touchcancel";
  var TOUCHMOVE = "touchmove";
  var TOUCHSTART = "touchstart";
  var VISIBILITYCHANGE = "visibilitychange";
  var bubbleOptions = {
    passive: true
  };
  var captureOptions = {
    capture: true,
    passive: true
  };
  function restoreModality() {
    if (previousModality != null || previousActiveModality != null) {
      if (previousModality != null) {
        modality$1 = previousModality;
        previousModality = null;
      }
      if (previousActiveModality != null) {
        activeModality = previousActiveModality;
        previousActiveModality = null;
      }
      callListeners();
    }
  }
  function onBlurWindow() {
    previousModality = modality$1;
    previousActiveModality = activeModality;
    activeModality = KEYBOARD;
    modality$1 = KEYBOARD;
    callListeners();
    isEmulatingMouseEvents = false;
  }
  function onFocusWindow() {
    restoreModality();
  }
  function onKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }
    if (modality$1 !== KEYBOARD) {
      modality$1 = KEYBOARD;
      activeModality = KEYBOARD;
      callListeners();
    }
  }
  function onVisibilityChange() {
    if (document.visibilityState !== "hidden") {
      restoreModality();
    }
  }
  function onPointerish(event) {
    var eventType = event.type;
    if (supportsPointerEvent()) {
      if (eventType === POINTERDOWN) {
        if (activeModality !== event.pointerType) {
          modality$1 = event.pointerType;
          activeModality = event.pointerType;
          callListeners();
        }
        return;
      }
      if (eventType === POINTERMOVE) {
        if (modality$1 !== event.pointerType) {
          modality$1 = event.pointerType;
          callListeners();
        }
        return;
      }
    } else {
      if (!isEmulatingMouseEvents) {
        if (eventType === MOUSEDOWN) {
          if (activeModality !== MOUSE) {
            modality$1 = MOUSE;
            activeModality = MOUSE;
            callListeners();
          }
        }
        if (eventType === MOUSEMOVE) {
          if (modality$1 !== MOUSE) {
            modality$1 = MOUSE;
            callListeners();
          }
        }
      }
      if (eventType === TOUCHSTART) {
        isEmulatingMouseEvents = true;
        if (event.touches && event.touches.length > 1) {
          isEmulatingMouseEvents = false;
        }
        if (activeModality !== TOUCH) {
          modality$1 = TOUCH;
          activeModality = TOUCH;
          callListeners();
        }
        return;
      }
      if (eventType === CONTEXTMENU || eventType === MOUSEUP || eventType === SELECTIONCHANGE || eventType === SCROLL || eventType === TOUCHCANCEL || eventType === TOUCHMOVE) {
        isEmulatingMouseEvents = false;
      }
    }
  }
  if (_canUseDom.default) {
    (0, _addEventListener.addEventListener)(window, BLUR, onBlurWindow, bubbleOptions);
    (0, _addEventListener.addEventListener)(window, FOCUS, onFocusWindow, bubbleOptions);
    (0, _addEventListener.addEventListener)(document, KEYDOWN, onKeyDown, captureOptions);
    (0, _addEventListener.addEventListener)(document, VISIBILITYCHANGE, onVisibilityChange, captureOptions);
    (0, _addEventListener.addEventListener)(document, POINTERDOWN, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, POINTERMOVE, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, CONTEXTMENU, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, MOUSEDOWN, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, MOUSEMOVE, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, MOUSEUP, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, TOUCHCANCEL, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, TOUCHMOVE, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, TOUCHSTART, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, SELECTIONCHANGE, onPointerish, captureOptions);
    (0, _addEventListener.addEventListener)(document, SCROLL, onPointerish, captureOptions);
  }
  function callListeners() {
    var value = {
      activeModality,
      modality: modality$1
    };
    listeners.forEach((listener) => {
      listener(value);
    });
  }
  function getActiveModality() {
    return activeModality;
  }
  function getModality() {
    return modality$1;
  }
  function addModalityListener(listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }
  function testOnly_resetActiveModality() {
    isEmulatingMouseEvents = false;
    activeModality = KEYBOARD;
    modality$1 = KEYBOARD;
  }
  return modality;
}
var useEvent = {};
var hasRequiredUseEvent;
function requireUseEvent() {
  if (hasRequiredUseEvent) return useEvent;
  hasRequiredUseEvent = 1;
  Object.defineProperty(useEvent, "__esModule", {
    value: true
  });
  useEvent.default = useEvent$1;
  var _addEventListener = /* @__PURE__ */ requireAddEventListener();
  var _useLayoutEffect = _interopRequireDefault(/* @__PURE__ */ requireUseLayoutEffect());
  var _useStable = _interopRequireDefault(/* @__PURE__ */ requireUseStable());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function useEvent$1(eventType, options) {
    var targetListeners = (0, _useStable.default)(() => /* @__PURE__ */ new Map());
    var addListener = (0, _useStable.default)(() => {
      return (target, callback) => {
        var removeTargetListener = targetListeners.get(target);
        if (removeTargetListener != null) {
          removeTargetListener();
        }
        if (callback == null) {
          targetListeners.delete(target);
          callback = () => {
          };
        }
        var removeEventListener = (0, _addEventListener.addEventListener)(target, eventType, callback, options);
        targetListeners.set(target, removeEventListener);
        return removeEventListener;
      };
    });
    (0, _useLayoutEffect.default)(() => {
      return () => {
        targetListeners.forEach((removeListener) => {
          removeListener();
        });
        targetListeners.clear();
      };
    }, [targetListeners]);
    return addListener;
  }
  return useEvent;
}
var hasRequiredUseHover;
function requireUseHover() {
  if (hasRequiredUseHover) return useHover;
  hasRequiredUseHover = 1;
  Object.defineProperty(useHover, "__esModule", {
    value: true
  });
  useHover.default = useHover$1;
  var _modality = /* @__PURE__ */ requireModality();
  var _useEvent = _interopRequireDefault(/* @__PURE__ */ requireUseEvent());
  var _useLayoutEffect = _interopRequireDefault(/* @__PURE__ */ requireUseLayoutEffect());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var emptyObject = {};
  var opts = {
    passive: true
  };
  var lockEventType = "react-gui:hover:lock";
  var unlockEventType = "react-gui:hover:unlock";
  var supportsPointerEvent = () => !!(typeof window !== "undefined" && window.PointerEvent != null);
  function dispatchCustomEvent(target, type, payload) {
    var event = document.createEvent("CustomEvent");
    var _ref = emptyObject, _ref$bubbles = _ref.bubbles, bubbles = _ref$bubbles === void 0 ? true : _ref$bubbles, _ref$cancelable = _ref.cancelable, cancelable = _ref$cancelable === void 0 ? true : _ref$cancelable, detail = _ref.detail;
    event.initCustomEvent(type, bubbles, cancelable, detail);
    target.dispatchEvent(event);
  }
  function getPointerType(event) {
    var pointerType = event.pointerType;
    return pointerType != null ? pointerType : (0, _modality.getModality)();
  }
  function useHover$1(targetRef, config) {
    var contain = config.contain, disabled = config.disabled, onHoverStart = config.onHoverStart, onHoverChange = config.onHoverChange, onHoverUpdate = config.onHoverUpdate, onHoverEnd = config.onHoverEnd;
    var canUsePE = supportsPointerEvent();
    var addMoveListener = (0, _useEvent.default)(canUsePE ? "pointermove" : "mousemove", opts);
    var addEnterListener = (0, _useEvent.default)(canUsePE ? "pointerenter" : "mouseenter", opts);
    var addLeaveListener = (0, _useEvent.default)(canUsePE ? "pointerleave" : "mouseleave", opts);
    var addLockListener = (0, _useEvent.default)(lockEventType, opts);
    var addUnlockListener = (0, _useEvent.default)(unlockEventType, opts);
    (0, _useLayoutEffect.default)(() => {
      var target = targetRef.current;
      if (target !== null) {
        var hoverEnd = function hoverEnd2(e) {
          if (onHoverEnd != null) {
            onHoverEnd(e);
          }
          if (onHoverChange != null) {
            onHoverChange(false);
          }
          addMoveListener(target, null);
          addLeaveListener(target, null);
        };
        var leaveListener = function leaveListener2(e) {
          var target2 = targetRef.current;
          if (target2 != null && getPointerType(e) !== "touch") {
            if (contain) {
              dispatchCustomEvent(target2, unlockEventType);
            }
            hoverEnd(e);
          }
        };
        var moveListener = function moveListener2(e) {
          if (getPointerType(e) !== "touch") {
            if (onHoverUpdate != null) {
              if (e.x == null) {
                e.x = e.clientX;
              }
              if (e.y == null) {
                e.y = e.clientY;
              }
              onHoverUpdate(e);
            }
          }
        };
        var hoverStart = function hoverStart2(e) {
          if (onHoverStart != null) {
            onHoverStart(e);
          }
          if (onHoverChange != null) {
            onHoverChange(true);
          }
          if (onHoverUpdate != null) {
            addMoveListener(target, !disabled ? moveListener : null);
          }
          addLeaveListener(target, !disabled ? leaveListener : null);
        };
        var enterListener = function enterListener2(e) {
          var target2 = targetRef.current;
          if (target2 != null && getPointerType(e) !== "touch") {
            if (contain) {
              dispatchCustomEvent(target2, lockEventType);
            }
            hoverStart(e);
            var lockListener = function lockListener2(lockEvent) {
              if (lockEvent.target !== target2) {
                hoverEnd(e);
              }
            };
            var unlockListener = function unlockListener2(lockEvent) {
              if (lockEvent.target !== target2) {
                hoverStart(e);
              }
            };
            addLockListener(target2, !disabled ? lockListener : null);
            addUnlockListener(target2, !disabled ? unlockListener : null);
          }
        };
        addEnterListener(target, !disabled ? enterListener : null);
      }
    }, [addEnterListener, addMoveListener, addLeaveListener, addLockListener, addUnlockListener, contain, disabled, onHoverStart, onHoverChange, onHoverUpdate, onHoverEnd, targetRef]);
  }
  return useHover;
}
var hasRequiredPressable;
function requirePressable() {
  if (hasRequiredPressable) return Pressable;
  hasRequiredPressable = 1;
  Object.defineProperty(Pressable, "__esModule", {
    value: true
  });
  Pressable.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _react = _interopRequireWildcard(requireReact());
  var React = _react;
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  var _useHover = _interopRequireDefault(/* @__PURE__ */ requireUseHover());
  var _usePressEvents = _interopRequireDefault(/* @__PURE__ */ requireUsePressEvents());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["children", "delayLongPress", "delayPressIn", "delayPressOut", "disabled", "onBlur", "onContextMenu", "onFocus", "onHoverIn", "onHoverOut", "onKeyDown", "onLongPress", "onPress", "onPressMove", "onPressIn", "onPressOut", "style", "tabIndex", "testOnly_hovered", "testOnly_pressed"];
  function Pressable$1(props, forwardedRef) {
    var children = props.children, delayLongPress = props.delayLongPress, delayPressIn = props.delayPressIn, delayPressOut = props.delayPressOut, disabled = props.disabled, onBlur = props.onBlur, onContextMenu = props.onContextMenu, onFocus = props.onFocus, onHoverIn = props.onHoverIn, onHoverOut = props.onHoverOut, onKeyDown = props.onKeyDown, onLongPress = props.onLongPress, onPress = props.onPress, onPressMove = props.onPressMove, onPressIn = props.onPressIn, onPressOut = props.onPressOut, style = props.style, tabIndex = props.tabIndex, testOnly_hovered = props.testOnly_hovered, testOnly_pressed = props.testOnly_pressed, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var _useForceableState = useForceableState(testOnly_hovered === true), hovered = _useForceableState[0], setHovered = _useForceableState[1];
    var _useForceableState2 = useForceableState(false), focused = _useForceableState2[0], setFocused = _useForceableState2[1];
    var _useForceableState3 = useForceableState(testOnly_pressed === true), pressed = _useForceableState3[0], setPressed = _useForceableState3[1];
    var hostRef = (0, _react.useRef)(null);
    var setRef = (0, _useMergeRefs.default)(forwardedRef, hostRef);
    var pressConfig = (0, _react.useMemo)(() => ({
      delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      disabled,
      onLongPress,
      onPress,
      onPressChange: setPressed,
      onPressStart: onPressIn,
      onPressMove,
      onPressEnd: onPressOut
    }), [delayLongPress, delayPressIn, delayPressOut, disabled, onLongPress, onPress, onPressIn, onPressMove, onPressOut, setPressed]);
    var pressEventHandlers = (0, _usePressEvents.default)(hostRef, pressConfig);
    var onContextMenuPress = pressEventHandlers.onContextMenu, onKeyDownPress = pressEventHandlers.onKeyDown;
    (0, _useHover.default)(hostRef, {
      contain: true,
      disabled,
      onHoverChange: setHovered,
      onHoverStart: onHoverIn,
      onHoverEnd: onHoverOut
    });
    var interactionState = {
      hovered,
      focused,
      pressed
    };
    var blurHandler = React.useCallback((e) => {
      if (e.nativeEvent.target === hostRef.current) {
        setFocused(false);
        if (onBlur != null) {
          onBlur(e);
        }
      }
    }, [hostRef, setFocused, onBlur]);
    var focusHandler = React.useCallback((e) => {
      if (e.nativeEvent.target === hostRef.current) {
        setFocused(true);
        if (onFocus != null) {
          onFocus(e);
        }
      }
    }, [hostRef, setFocused, onFocus]);
    var contextMenuHandler = React.useCallback((e) => {
      if (onContextMenuPress != null) {
        onContextMenuPress(e);
      }
      if (onContextMenu != null) {
        onContextMenu(e);
      }
    }, [onContextMenu, onContextMenuPress]);
    var keyDownHandler = React.useCallback((e) => {
      if (onKeyDownPress != null) {
        onKeyDownPress(e);
      }
      if (onKeyDown != null) {
        onKeyDown(e);
      }
    }, [onKeyDown, onKeyDownPress]);
    var _tabIndex;
    if (tabIndex !== void 0) {
      _tabIndex = tabIndex;
    } else {
      _tabIndex = disabled ? -1 : 0;
    }
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, rest, pressEventHandlers, {
      "aria-disabled": disabled,
      onBlur: blurHandler,
      onContextMenu: contextMenuHandler,
      onFocus: focusHandler,
      onKeyDown: keyDownHandler,
      ref: setRef,
      style: [disabled ? styles2.disabled : styles2.active, typeof style === "function" ? style(interactionState) : style],
      tabIndex: _tabIndex
    }), typeof children === "function" ? children(interactionState) : children);
  }
  function useForceableState(forced) {
    var _useState = (0, _react.useState)(false), bool = _useState[0], setBool = _useState[1];
    return [bool || forced, setBool];
  }
  var styles2 = _StyleSheet.default.create({
    active: {
      cursor: "pointer",
      touchAction: "manipulation"
    },
    disabled: {
      pointerEvents: "box-none"
    }
  });
  var MemoedPressable = /* @__PURE__ */ (0, _react.memo)(/* @__PURE__ */ (0, _react.forwardRef)(Pressable$1));
  MemoedPressable.displayName = "Pressable";
  Pressable.default = MemoedPressable;
  return Pressable;
}
var ProgressBar = {};
var hasRequiredProgressBar;
function requireProgressBar() {
  if (hasRequiredProgressBar) return ProgressBar;
  hasRequiredProgressBar = 1;
  Object.defineProperty(ProgressBar, "__esModule", {
    value: true
  });
  ProgressBar.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["color", "indeterminate", "progress", "trackColor", "style"];
  var ProgressBar$1 = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var _props$color = props.color, color = _props$color === void 0 ? "#1976D2" : _props$color, _props$indeterminate = props.indeterminate, indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate, _props$progress = props.progress, progress = _props$progress === void 0 ? 0 : _props$progress, _props$trackColor = props.trackColor, trackColor = _props$trackColor === void 0 ? "transparent" : _props$trackColor, style = props.style, other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var percentageProgress = progress * 100;
    var width = indeterminate ? "25%" : percentageProgress + "%";
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, other, {
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": indeterminate ? null : percentageProgress,
      ref,
      role: "progressbar",
      style: [styles2.track, style, {
        backgroundColor: trackColor
      }]
    }), /* @__PURE__ */ React.createElement(_View.default, {
      style: [{
        backgroundColor: color,
        width
      }, styles2.progress, indeterminate && styles2.animation]
    }));
  });
  ProgressBar$1.displayName = "ProgressBar";
  var styles2 = _StyleSheet.default.create({
    track: {
      forcedColorAdjust: "none",
      height: 5,
      overflow: "hidden",
      userSelect: "none",
      zIndex: 0
    },
    progress: {
      forcedColorAdjust: "none",
      height: "100%",
      zIndex: -1
    },
    animation: {
      animationDuration: "1s",
      animationKeyframes: [{
        "0%": {
          transform: "translateX(-100%)"
        },
        "100%": {
          transform: "translateX(400%)"
        }
      }],
      animationTimingFunction: "linear",
      animationIterationCount: "infinite"
    }
  });
  ProgressBar.default = ProgressBar$1;
  return ProgressBar;
}
var SafeAreaView = {};
var hasRequiredSafeAreaView;
function requireSafeAreaView() {
  if (hasRequiredSafeAreaView) return SafeAreaView;
  hasRequiredSafeAreaView = 1;
  Object.defineProperty(SafeAreaView, "__esModule", {
    value: true
  });
  SafeAreaView.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _canUseDom = _interopRequireDefault(/* @__PURE__ */ requireCanUseDom());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["style"];
  var cssFunction = function() {
    if (_canUseDom.default && window.CSS && window.CSS.supports && window.CSS.supports("top: constant(safe-area-inset-top)")) {
      return "constant";
    }
    return "env";
  }();
  var SafeAreaView$1 = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var style = props.style, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, rest, {
      ref,
      style: [styles2.root, style]
    }));
  });
  SafeAreaView$1.displayName = "SafeAreaView";
  var styles2 = _StyleSheet.default.create({
    root: {
      paddingTop: cssFunction + "(safe-area-inset-top)",
      paddingRight: cssFunction + "(safe-area-inset-right)",
      paddingBottom: cssFunction + "(safe-area-inset-bottom)",
      paddingLeft: cssFunction + "(safe-area-inset-left)"
    }
  });
  SafeAreaView.default = SafeAreaView$1;
  return SafeAreaView;
}
var StatusBar = {};
var hasRequiredStatusBar;
function requireStatusBar() {
  if (hasRequiredStatusBar) return StatusBar;
  hasRequiredStatusBar = 1;
  Object.defineProperty(StatusBar, "__esModule", {
    value: true
  });
  StatusBar.default = void 0;
  var emptyFunction = () => {
  };
  function StatusBar$1() {
    return null;
  }
  StatusBar$1.setBackgroundColor = emptyFunction;
  StatusBar$1.setBarStyle = emptyFunction;
  StatusBar$1.setHidden = emptyFunction;
  StatusBar$1.setNetworkActivityIndicatorVisible = emptyFunction;
  StatusBar$1.setTranslucent = emptyFunction;
  StatusBar.default = StatusBar$1;
  return StatusBar;
}
var Switch = {};
var multiplyStyleLengthValue = {};
var hasRequiredMultiplyStyleLengthValue;
function requireMultiplyStyleLengthValue() {
  if (hasRequiredMultiplyStyleLengthValue) return multiplyStyleLengthValue;
  hasRequiredMultiplyStyleLengthValue = 1;
  Object.defineProperty(multiplyStyleLengthValue, "__esModule", {
    value: true
  });
  multiplyStyleLengthValue.default = void 0;
  var CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
  var getUnit = (str) => str.match(CSS_UNIT_RE)[1];
  var isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  var multiplyStyleLengthValue$1 = (value, multiple) => {
    if (typeof value === "string") {
      var number = parseFloat(value) * multiple;
      var unit = getUnit(value);
      return "" + number + unit;
    } else if (isNumeric(value)) {
      return value * multiple;
    }
  };
  multiplyStyleLengthValue.default = multiplyStyleLengthValue$1;
  return multiplyStyleLengthValue;
}
var hasRequiredSwitch;
function requireSwitch() {
  if (hasRequiredSwitch) return Switch;
  hasRequiredSwitch = 1;
  Object.defineProperty(Switch, "__esModule", {
    value: true
  });
  Switch.default = void 0;
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var React = _interopRequireWildcard(requireReact());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  var _multiplyStyleLengthValue = _interopRequireDefault(/* @__PURE__ */ requireMultiplyStyleLengthValue());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["aria-label", "accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"];
  var emptyObject = {};
  var thumbDefaultBoxShadow = "0px 1px 3px rgba(0,0,0,0.5)";
  var thumbFocusedBoxShadow = thumbDefaultBoxShadow + ", 0 0 0 10px rgba(0,0,0,0.1)";
  var defaultActiveTrackColor = "#A3D3CF";
  var defaultTrackColor = "#939393";
  var defaultDisabledTrackColor = "#D5D5D5";
  var defaultActiveThumbColor = "#009688";
  var defaultThumbColor = "#FAFAFA";
  var defaultDisabledThumbColor = "#BDBDBD";
  var Switch$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var ariaLabel = props["aria-label"], accessibilityLabel = props.accessibilityLabel, activeThumbColor = props.activeThumbColor, activeTrackColor = props.activeTrackColor, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, onValueChange = props.onValueChange, _props$style = props.style, style = _props$style === void 0 ? emptyObject : _props$style, thumbColor = props.thumbColor, trackColor = props.trackColor, _props$value = props.value, value = _props$value === void 0 ? false : _props$value, other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var thumbRef = React.useRef(null);
    function handleChange(event) {
      if (onValueChange != null) {
        onValueChange(event.nativeEvent.target.checked);
      }
    }
    function handleFocusState(event) {
      var isFocused = event.nativeEvent.type === "focus";
      var boxShadow = isFocused ? thumbFocusedBoxShadow : thumbDefaultBoxShadow;
      if (thumbRef.current != null) {
        thumbRef.current.style.boxShadow = boxShadow;
      }
    }
    var _StyleSheet$flatten = _StyleSheet.default.flatten(style), styleHeight = _StyleSheet$flatten.height, styleWidth = _StyleSheet$flatten.width;
    var height = styleHeight || "20px";
    var minWidth = (0, _multiplyStyleLengthValue.default)(height, 2);
    var width = styleWidth > minWidth ? styleWidth : minWidth;
    var trackBorderRadius = (0, _multiplyStyleLengthValue.default)(height, 0.5);
    var trackCurrentColor = function() {
      if (value === true) {
        if (trackColor != null && typeof trackColor === "object") {
          return trackColor.true;
        } else {
          return activeTrackColor !== null && activeTrackColor !== void 0 ? activeTrackColor : defaultActiveTrackColor;
        }
      } else {
        if (trackColor != null && typeof trackColor === "object") {
          return trackColor.false;
        } else {
          return trackColor !== null && trackColor !== void 0 ? trackColor : defaultTrackColor;
        }
      }
    }();
    var thumbCurrentColor = value ? activeThumbColor !== null && activeThumbColor !== void 0 ? activeThumbColor : defaultActiveThumbColor : thumbColor !== null && thumbColor !== void 0 ? thumbColor : defaultThumbColor;
    var thumbHeight = height;
    var thumbWidth = thumbHeight;
    var rootStyle = [styles2.root, style, disabled && styles2.cursorDefault, {
      height,
      width
    }];
    var disabledTrackColor = function() {
      if (value === true) {
        if (typeof activeTrackColor === "string" && activeTrackColor != null || typeof trackColor === "object" && trackColor != null && trackColor.true) {
          return trackCurrentColor;
        } else {
          return defaultDisabledTrackColor;
        }
      } else {
        if (typeof trackColor === "string" && trackColor != null || typeof trackColor === "object" && trackColor != null && trackColor.false) {
          return trackCurrentColor;
        } else {
          return defaultDisabledTrackColor;
        }
      }
    }();
    var disabledThumbColor = function() {
      if (value === true) {
        if (activeThumbColor == null) {
          return defaultDisabledThumbColor;
        } else {
          return thumbCurrentColor;
        }
      } else {
        if (thumbColor == null) {
          return defaultDisabledThumbColor;
        } else {
          return thumbCurrentColor;
        }
      }
    }();
    var trackStyle = [styles2.track, {
      backgroundColor: disabled ? disabledTrackColor : trackCurrentColor,
      borderRadius: trackBorderRadius
    }];
    var thumbStyle = [styles2.thumb, value && styles2.thumbActive, {
      backgroundColor: disabled ? disabledThumbColor : thumbCurrentColor,
      height: thumbHeight,
      marginStart: value ? (0, _multiplyStyleLengthValue.default)(thumbWidth, -1) : 0,
      width: thumbWidth
    }];
    var nativeControl = (0, _createElement.default)("input", {
      "aria-label": ariaLabel || accessibilityLabel,
      checked: value,
      disabled,
      onBlur: handleFocusState,
      onChange: handleChange,
      onFocus: handleFocusState,
      ref: forwardedRef,
      style: [styles2.nativeControl, styles2.cursorInherit],
      type: "checkbox",
      role: "switch"
    });
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, other, {
      style: rootStyle
    }), /* @__PURE__ */ React.createElement(_View.default, {
      style: trackStyle
    }), /* @__PURE__ */ React.createElement(_View.default, {
      ref: thumbRef,
      style: thumbStyle
    }), nativeControl);
  });
  Switch$1.displayName = "Switch";
  var styles2 = _StyleSheet.default.create({
    root: {
      cursor: "pointer",
      userSelect: "none"
    },
    cursorDefault: {
      cursor: "default"
    },
    cursorInherit: {
      cursor: "inherit"
    },
    track: (0, _objectSpread2.default)((0, _objectSpread2.default)({
      forcedColorAdjust: "none"
    }, _StyleSheet.default.absoluteFillObject), {}, {
      height: "70%",
      margin: "auto",
      transitionDuration: "0.1s",
      width: "100%"
    }),
    thumb: {
      forcedColorAdjust: "none",
      alignSelf: "flex-start",
      borderRadius: "100%",
      boxShadow: thumbDefaultBoxShadow,
      start: "0%",
      transform: "translateZ(0)",
      transitionDuration: "0.1s"
    },
    thumbActive: {
      insetInlineStart: "100%"
    },
    nativeControl: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _StyleSheet.default.absoluteFillObject), {}, {
      height: "100%",
      margin: 0,
      appearance: "none",
      padding: 0,
      width: "100%"
    })
  });
  Switch.default = Switch$1;
  return Switch;
}
var TextInput = {};
var hasRequiredTextInput;
function requireTextInput() {
  if (hasRequiredTextInput) return TextInput;
  hasRequiredTextInput = 1;
  Object.defineProperty(TextInput, "__esModule", {
    value: true
  });
  TextInput.default = void 0;
  var React = _interopRequireWildcard(requireReact());
  var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
  var forwardedProps2 = _interopRequireWildcard(/* @__PURE__ */ requireForwardedProps());
  var _pick = _interopRequireDefault(/* @__PURE__ */ requirePick());
  var _useElementLayout = _interopRequireDefault(/* @__PURE__ */ requireUseElementLayout());
  var _useLayoutEffect = _interopRequireDefault(/* @__PURE__ */ requireUseLayoutEffect());
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  var _usePlatformMethods = _interopRequireDefault(/* @__PURE__ */ requireUsePlatformMethods());
  var _useResponderEvents = _interopRequireDefault(/* @__PURE__ */ requireUseResponderEvents());
  var _useLocale = /* @__PURE__ */ requireUseLocale();
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _TextInputState = _interopRequireDefault(/* @__PURE__ */ requireTextInputState());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var isSelectionStale = (node, selection) => {
    var selectionEnd = node.selectionEnd, selectionStart = node.selectionStart;
    var start = selection.start, end = selection.end;
    return start !== selectionStart || end !== selectionEnd;
  };
  var setSelection = (node, selection) => {
    if (isSelectionStale(node, selection)) {
      var start = selection.start, end = selection.end;
      try {
        node.setSelectionRange(start, end || start);
      } catch (e) {
      }
    }
  };
  var forwardPropsList = Object.assign({}, forwardedProps2.defaultProps, forwardedProps2.accessibilityProps, forwardedProps2.clickProps, forwardedProps2.focusProps, forwardedProps2.keyboardProps, forwardedProps2.mouseProps, forwardedProps2.touchProps, forwardedProps2.styleProps, {
    autoCapitalize: true,
    autoComplete: true,
    autoCorrect: true,
    autoFocus: true,
    defaultValue: true,
    disabled: true,
    lang: true,
    maxLength: true,
    onChange: true,
    onScroll: true,
    placeholder: true,
    pointerEvents: true,
    readOnly: true,
    rows: true,
    spellCheck: true,
    value: true,
    type: true
  });
  var pickProps = (props) => (0, _pick.default)(props, forwardPropsList);
  function isEventComposing(nativeEvent) {
    return nativeEvent.isComposing || nativeEvent.keyCode === 229;
  }
  var focusTimeout = null;
  var TextInput$1 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var _props$autoCapitalize = props.autoCapitalize, autoCapitalize = _props$autoCapitalize === void 0 ? "sentences" : _props$autoCapitalize, autoComplete = props.autoComplete, autoCompleteType = props.autoCompleteType, _props$autoCorrect = props.autoCorrect, autoCorrect = _props$autoCorrect === void 0 ? true : _props$autoCorrect, blurOnSubmit = props.blurOnSubmit, caretHidden = props.caretHidden, clearTextOnFocus = props.clearTextOnFocus, dir = props.dir, editable = props.editable, enterKeyHint = props.enterKeyHint, inputMode = props.inputMode, keyboardType = props.keyboardType, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, numberOfLines = props.numberOfLines, onBlur = props.onBlur, onChange = props.onChange, onChangeText = props.onChangeText, onContentSizeChange = props.onContentSizeChange, onFocus = props.onFocus, onKeyPress = props.onKeyPress, onLayout = props.onLayout, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderMove = props.onResponderMove, onResponderReject = props.onResponderReject, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminate = props.onResponderTerminate, onResponderTerminationRequest = props.onResponderTerminationRequest, onScrollShouldSetResponder = props.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture, onSelectionChange = props.onSelectionChange, onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = props.onStartShouldSetResponder, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, onSubmitEditing = props.onSubmitEditing, placeholderTextColor = props.placeholderTextColor, _props$readOnly = props.readOnly, readOnly = _props$readOnly === void 0 ? false : _props$readOnly, returnKeyType = props.returnKeyType, rows = props.rows, _props$secureTextEntr = props.secureTextEntry, secureTextEntry = _props$secureTextEntr === void 0 ? false : _props$secureTextEntr, selection = props.selection, selectTextOnFocus = props.selectTextOnFocus, showSoftInputOnFocus = props.showSoftInputOnFocus, spellCheck = props.spellCheck;
    var type;
    var _inputMode;
    if (inputMode != null) {
      _inputMode = inputMode;
      if (inputMode === "email") {
        type = "email";
      } else if (inputMode === "tel") {
        type = "tel";
      } else if (inputMode === "search") {
        type = "search";
      } else if (inputMode === "url") {
        type = "url";
      } else {
        type = "text";
      }
    } else if (keyboardType != null) {
      switch (keyboardType) {
        case "email-address":
          type = "email";
          break;
        case "number-pad":
        case "numeric":
          _inputMode = "numeric";
          break;
        case "decimal-pad":
          _inputMode = "decimal";
          break;
        case "phone-pad":
          type = "tel";
          break;
        case "search":
        case "web-search":
          type = "search";
          break;
        case "url":
          type = "url";
          break;
        default:
          type = "text";
      }
    }
    if (secureTextEntry) {
      type = "password";
    }
    var dimensions = React.useRef({
      height: null,
      width: null
    });
    var hostRef = React.useRef(null);
    var prevSelection = React.useRef(null);
    var prevSecureTextEntry = React.useRef(false);
    React.useEffect(() => {
      if (hostRef.current && prevSelection.current) {
        setSelection(hostRef.current, prevSelection.current);
      }
      prevSecureTextEntry.current = secureTextEntry;
    }, [secureTextEntry]);
    var handleContentSizeChange = React.useCallback((hostNode) => {
      if (multiline && onContentSizeChange && hostNode != null) {
        var newHeight = hostNode.scrollHeight;
        var newWidth = hostNode.scrollWidth;
        if (newHeight !== dimensions.current.height || newWidth !== dimensions.current.width) {
          dimensions.current.height = newHeight;
          dimensions.current.width = newWidth;
          onContentSizeChange({
            nativeEvent: {
              contentSize: {
                height: dimensions.current.height,
                width: dimensions.current.width
              }
            }
          });
        }
      }
    }, [multiline, onContentSizeChange]);
    var imperativeRef = React.useMemo(() => (hostNode) => {
      if (hostNode != null) {
        hostNode.clear = function() {
          if (hostNode != null) {
            hostNode.value = "";
          }
        };
        hostNode.isFocused = function() {
          return hostNode != null && _TextInputState.default.currentlyFocusedField() === hostNode;
        };
        handleContentSizeChange(hostNode);
      }
    }, [handleContentSizeChange]);
    function handleBlur(e) {
      _TextInputState.default._currentlyFocusedNode = null;
      if (onBlur) {
        e.nativeEvent.text = e.target.value;
        onBlur(e);
      }
    }
    function handleChange(e) {
      var hostNode = e.target;
      var text = hostNode.value;
      e.nativeEvent.text = text;
      handleContentSizeChange(hostNode);
      if (onChange) {
        onChange(e);
      }
      if (onChangeText) {
        onChangeText(text);
      }
    }
    function handleFocus(e) {
      var hostNode = e.target;
      if (onFocus) {
        e.nativeEvent.text = hostNode.value;
        onFocus(e);
      }
      if (hostNode != null) {
        _TextInputState.default._currentlyFocusedNode = hostNode;
        if (clearTextOnFocus) {
          hostNode.value = "";
        }
        if (selectTextOnFocus) {
          if (focusTimeout != null) {
            clearTimeout(focusTimeout);
          }
          focusTimeout = setTimeout(() => {
            if (hostNode != null && document.activeElement === hostNode) {
              hostNode.select();
            }
          }, 0);
        }
      }
    }
    function handleKeyDown(e) {
      var hostNode = e.target;
      e.stopPropagation();
      var blurOnSubmitDefault = !multiline;
      var shouldBlurOnSubmit = blurOnSubmit == null ? blurOnSubmitDefault : blurOnSubmit;
      var nativeEvent = e.nativeEvent;
      var isComposing = isEventComposing(nativeEvent);
      if (onKeyPress) {
        onKeyPress(e);
      }
      if (e.key === "Enter" && !e.shiftKey && // Do not call submit if composition is occuring.
      !isComposing && !e.isDefaultPrevented()) {
        if ((blurOnSubmit || !multiline) && onSubmitEditing) {
          e.preventDefault();
          nativeEvent.text = e.target.value;
          onSubmitEditing(e);
        }
        if (shouldBlurOnSubmit && hostNode != null) {
          setTimeout(() => hostNode.blur(), 0);
        }
      }
    }
    function handleSelectionChange(e) {
      try {
        var _e$target = e.target, selectionStart = _e$target.selectionStart, selectionEnd = _e$target.selectionEnd;
        var _selection = {
          start: selectionStart,
          end: selectionEnd
        };
        if (onSelectionChange) {
          e.nativeEvent.selection = _selection;
          e.nativeEvent.text = e.target.value;
          onSelectionChange(e);
        }
        if (prevSecureTextEntry.current === secureTextEntry) {
          prevSelection.current = _selection;
        }
      } catch (e2) {
      }
    }
    (0, _useLayoutEffect.default)(() => {
      var node = hostRef.current;
      if (node != null && selection != null) {
        setSelection(node, selection);
      }
      if (document.activeElement === node) {
        _TextInputState.default._currentlyFocusedNode = node;
      }
    }, [hostRef, selection]);
    var component = multiline ? "textarea" : "input";
    (0, _useElementLayout.default)(hostRef, onLayout);
    (0, _useResponderEvents.default)(hostRef, {
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onResponderEnd,
      onResponderGrant,
      onResponderMove,
      onResponderReject,
      onResponderRelease,
      onResponderStart,
      onResponderTerminate,
      onResponderTerminationRequest,
      onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture
    });
    var _useLocaleContext = (0, _useLocale.useLocaleContext)(), contextDirection = _useLocaleContext.direction;
    var supportedProps = pickProps(props);
    supportedProps.autoCapitalize = autoCapitalize;
    supportedProps.autoComplete = autoComplete || autoCompleteType || "on";
    supportedProps.autoCorrect = autoCorrect ? "on" : "off";
    supportedProps.dir = dir !== void 0 ? dir : "auto";
    supportedProps.enterKeyHint = enterKeyHint || returnKeyType;
    supportedProps.inputMode = _inputMode;
    supportedProps.onBlur = handleBlur;
    supportedProps.onChange = handleChange;
    supportedProps.onFocus = handleFocus;
    supportedProps.onKeyDown = handleKeyDown;
    supportedProps.onSelect = handleSelectionChange;
    supportedProps.readOnly = readOnly === true || editable === false;
    supportedProps.rows = multiline ? rows != null ? rows : numberOfLines : 1;
    supportedProps.spellCheck = spellCheck != null ? spellCheck : autoCorrect;
    supportedProps.style = [{
      "--placeholderTextColor": placeholderTextColor
    }, styles2.textinput$raw, styles2.placeholder, props.style, caretHidden && styles2.caretHidden];
    supportedProps.type = multiline ? void 0 : type;
    supportedProps.virtualkeyboardpolicy = showSoftInputOnFocus === false ? "manual" : "auto";
    var platformMethodsRef = (0, _usePlatformMethods.default)(supportedProps);
    var setRef = (0, _useMergeRefs.default)(hostRef, platformMethodsRef, imperativeRef, forwardedRef);
    supportedProps.ref = setRef;
    var langDirection = props.lang != null ? (0, _useLocale.getLocaleDirection)(props.lang) : null;
    var componentDirection = props.dir || langDirection;
    var writingDirection = componentDirection || contextDirection;
    var element = (0, _createElement.default)(component, supportedProps, {
      writingDirection
    });
    return element;
  });
  TextInput$1.displayName = "TextInput";
  TextInput$1.State = _TextInputState.default;
  var styles2 = _StyleSheet.default.create({
    textinput$raw: {
      MozAppearance: "textfield",
      WebkitAppearance: "none",
      backgroundColor: "transparent",
      border: "0 solid black",
      borderRadius: 0,
      boxSizing: "border-box",
      font: "14px System",
      margin: 0,
      padding: 0,
      resize: "none"
    },
    placeholder: {
      placeholderTextColor: "var(--placeholderTextColor)"
    },
    caretHidden: {
      caretColor: "transparent"
    }
  });
  TextInput.default = TextInput$1;
  return TextInput;
}
var Touchable = {};
var BoundingDimensions = {};
var PooledClass = {};
var hasRequiredPooledClass;
function requirePooledClass() {
  if (hasRequiredPooledClass) return PooledClass;
  hasRequiredPooledClass = 1;
  Object.defineProperty(PooledClass, "__esModule", {
    value: true
  });
  PooledClass.default = void 0;
  _interopRequireDefault(requireInvariant());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var twoArgumentPooler = function twoArgumentPooler2(a1, a2) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2);
      return instance;
    } else {
      return new Klass(a1, a2);
    }
  };
  var standardReleaser = function standardReleaser2(instance) {
    var Klass = this;
    instance.destructor();
    if (Klass.instancePool.length < Klass.poolSize) {
      Klass.instancePool.push(instance);
    }
  };
  var DEFAULT_POOL_SIZE = 10;
  var DEFAULT_POOLER = twoArgumentPooler;
  var addPoolingTo = function addPoolingTo2(CopyConstructor, pooler) {
    var NewKlass = CopyConstructor;
    NewKlass.instancePool = [];
    NewKlass.getPooled = pooler || DEFAULT_POOLER;
    if (!NewKlass.poolSize) {
      NewKlass.poolSize = DEFAULT_POOL_SIZE;
    }
    NewKlass.release = standardReleaser;
    return NewKlass;
  };
  var PooledClass$1 = {
    addPoolingTo,
    twoArgumentPooler
  };
  PooledClass.default = PooledClass$1;
  return PooledClass;
}
var hasRequiredBoundingDimensions;
function requireBoundingDimensions() {
  if (hasRequiredBoundingDimensions) return BoundingDimensions;
  hasRequiredBoundingDimensions = 1;
  Object.defineProperty(BoundingDimensions, "__esModule", {
    value: true
  });
  BoundingDimensions.default = void 0;
  var _PooledClass = _interopRequireDefault(/* @__PURE__ */ requirePooledClass());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var twoArgumentPooler = _PooledClass.default.twoArgumentPooler;
  function BoundingDimensions$1(width, height) {
    this.width = width;
    this.height = height;
  }
  BoundingDimensions$1.prototype.destructor = function() {
    this.width = null;
    this.height = null;
  };
  BoundingDimensions$1.getPooledFromElement = function(element) {
    return BoundingDimensions$1.getPooled(element.offsetWidth, element.offsetHeight);
  };
  _PooledClass.default.addPoolingTo(BoundingDimensions$1, twoArgumentPooler);
  BoundingDimensions.default = BoundingDimensions$1;
  return BoundingDimensions;
}
var Position = {};
var hasRequiredPosition;
function requirePosition() {
  if (hasRequiredPosition) return Position;
  hasRequiredPosition = 1;
  Object.defineProperty(Position, "__esModule", {
    value: true
  });
  Position.default = void 0;
  var _PooledClass = _interopRequireDefault(/* @__PURE__ */ requirePooledClass());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var twoArgumentPooler = _PooledClass.default.twoArgumentPooler;
  function Position$1(left, top) {
    this.left = left;
    this.top = top;
  }
  Position$1.prototype.destructor = function() {
    this.left = null;
    this.top = null;
  };
  _PooledClass.default.addPoolingTo(Position$1, twoArgumentPooler);
  Position.default = Position$1;
  return Position;
}
var hasRequiredTouchable;
function requireTouchable() {
  if (hasRequiredTouchable) return Touchable;
  hasRequiredTouchable = 1;
  Object.defineProperty(Touchable, "__esModule", {
    value: true
  });
  Touchable.default = void 0;
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _objectSpread2 = _interopRequireDefault(requireObjectSpread2());
  var _AccessibilityUtil = _interopRequireDefault(/* @__PURE__ */ requireAccessibilityUtil());
  var _BoundingDimensions = _interopRequireDefault(/* @__PURE__ */ requireBoundingDimensions());
  var _normalizeColors = _interopRequireDefault(requireNormalizeColors());
  var _Position = _interopRequireDefault(/* @__PURE__ */ requirePosition());
  var _react = _interopRequireDefault(requireReact());
  var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _warnOnce = /* @__PURE__ */ requireWarnOnce();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var extractSingleTouch = (nativeEvent) => {
    var touches = nativeEvent.touches;
    var changedTouches = nativeEvent.changedTouches;
    var hasTouches = touches && touches.length > 0;
    var hasChangedTouches = changedTouches && changedTouches.length > 0;
    return !hasTouches && hasChangedTouches ? changedTouches[0] : hasTouches ? touches[0] : nativeEvent;
  };
  var States = {
    NOT_RESPONDER: "NOT_RESPONDER",
    // Not the responder
    RESPONDER_INACTIVE_PRESS_IN: "RESPONDER_INACTIVE_PRESS_IN",
    // Responder, inactive, in the `PressRect`
    RESPONDER_INACTIVE_PRESS_OUT: "RESPONDER_INACTIVE_PRESS_OUT",
    // Responder, inactive, out of `PressRect`
    RESPONDER_ACTIVE_PRESS_IN: "RESPONDER_ACTIVE_PRESS_IN",
    // Responder, active, in the `PressRect`
    RESPONDER_ACTIVE_PRESS_OUT: "RESPONDER_ACTIVE_PRESS_OUT",
    // Responder, active, out of `PressRect`
    RESPONDER_ACTIVE_LONG_PRESS_IN: "RESPONDER_ACTIVE_LONG_PRESS_IN",
    // Responder, active, in the `PressRect`, after long press threshold
    RESPONDER_ACTIVE_LONG_PRESS_OUT: "RESPONDER_ACTIVE_LONG_PRESS_OUT",
    // Responder, active, out of `PressRect`, after long press threshold
    ERROR: "ERROR"
  };
  var baseStatesConditions = {
    NOT_RESPONDER: false,
    RESPONDER_INACTIVE_PRESS_IN: false,
    RESPONDER_INACTIVE_PRESS_OUT: false,
    RESPONDER_ACTIVE_PRESS_IN: false,
    RESPONDER_ACTIVE_PRESS_OUT: false,
    RESPONDER_ACTIVE_LONG_PRESS_IN: false,
    RESPONDER_ACTIVE_LONG_PRESS_OUT: false,
    ERROR: false
  };
  var IsActive = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseStatesConditions), {}, {
    RESPONDER_ACTIVE_PRESS_OUT: true,
    RESPONDER_ACTIVE_PRESS_IN: true
  });
  var IsPressingIn = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseStatesConditions), {}, {
    RESPONDER_INACTIVE_PRESS_IN: true,
    RESPONDER_ACTIVE_PRESS_IN: true,
    RESPONDER_ACTIVE_LONG_PRESS_IN: true
  });
  var IsLongPressingIn = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseStatesConditions), {}, {
    RESPONDER_ACTIVE_LONG_PRESS_IN: true
  });
  var Signals = {
    DELAY: "DELAY",
    RESPONDER_GRANT: "RESPONDER_GRANT",
    RESPONDER_RELEASE: "RESPONDER_RELEASE",
    RESPONDER_TERMINATED: "RESPONDER_TERMINATED",
    ENTER_PRESS_RECT: "ENTER_PRESS_RECT",
    LEAVE_PRESS_RECT: "LEAVE_PRESS_RECT",
    LONG_PRESS_DETECTED: "LONG_PRESS_DETECTED"
  };
  var Transitions = {
    NOT_RESPONDER: {
      DELAY: States.ERROR,
      RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
      RESPONDER_RELEASE: States.ERROR,
      RESPONDER_TERMINATED: States.ERROR,
      ENTER_PRESS_RECT: States.ERROR,
      LEAVE_PRESS_RECT: States.ERROR,
      LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_INACTIVE_PRESS_IN: {
      DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
      RESPONDER_GRANT: States.ERROR,
      RESPONDER_RELEASE: States.NOT_RESPONDER,
      RESPONDER_TERMINATED: States.NOT_RESPONDER,
      ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
      LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
      LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_INACTIVE_PRESS_OUT: {
      DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
      RESPONDER_GRANT: States.ERROR,
      RESPONDER_RELEASE: States.NOT_RESPONDER,
      RESPONDER_TERMINATED: States.NOT_RESPONDER,
      ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
      LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
      LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_ACTIVE_PRESS_IN: {
      DELAY: States.ERROR,
      RESPONDER_GRANT: States.ERROR,
      RESPONDER_RELEASE: States.NOT_RESPONDER,
      RESPONDER_TERMINATED: States.NOT_RESPONDER,
      ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
      LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
      LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
    },
    RESPONDER_ACTIVE_PRESS_OUT: {
      DELAY: States.ERROR,
      RESPONDER_GRANT: States.ERROR,
      RESPONDER_RELEASE: States.NOT_RESPONDER,
      RESPONDER_TERMINATED: States.NOT_RESPONDER,
      ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
      LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
      LONG_PRESS_DETECTED: States.ERROR
    },
    RESPONDER_ACTIVE_LONG_PRESS_IN: {
      DELAY: States.ERROR,
      RESPONDER_GRANT: States.ERROR,
      RESPONDER_RELEASE: States.NOT_RESPONDER,
      RESPONDER_TERMINATED: States.NOT_RESPONDER,
      ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
      LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
      LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
    },
    RESPONDER_ACTIVE_LONG_PRESS_OUT: {
      DELAY: States.ERROR,
      RESPONDER_GRANT: States.ERROR,
      RESPONDER_RELEASE: States.NOT_RESPONDER,
      RESPONDER_TERMINATED: States.NOT_RESPONDER,
      ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
      LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
      LONG_PRESS_DETECTED: States.ERROR
    },
    error: {
      DELAY: States.NOT_RESPONDER,
      RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
      RESPONDER_RELEASE: States.NOT_RESPONDER,
      RESPONDER_TERMINATED: States.NOT_RESPONDER,
      ENTER_PRESS_RECT: States.NOT_RESPONDER,
      LEAVE_PRESS_RECT: States.NOT_RESPONDER,
      LONG_PRESS_DETECTED: States.NOT_RESPONDER
    }
  };
  var HIGHLIGHT_DELAY_MS = 130;
  var PRESS_EXPAND_PX = 20;
  var LONG_PRESS_THRESHOLD = 500;
  var LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;
  var LONG_PRESS_ALLOWED_MOVEMENT = 10;
  var TouchableMixin = {
    // HACK (part 1): basic support for touchable interactions using a keyboard
    componentDidMount: function componentDidMount() {
      (0, _warnOnce.warnOnce)("TouchableMixin", "TouchableMixin is deprecated. Please use Pressable.");
      var touchableNode = this.getTouchableNode && this.getTouchableNode();
      if (touchableNode && touchableNode.addEventListener) {
        this._touchableBlurListener = (e) => {
          if (this._isTouchableKeyboardActive) {
            if (this.state.touchable.touchState && this.state.touchable.touchState !== States.NOT_RESPONDER) {
              this.touchableHandleResponderTerminate({
                nativeEvent: e
              });
            }
            this._isTouchableKeyboardActive = false;
          }
        };
        touchableNode.addEventListener("blur", this._touchableBlurListener);
      }
    },
    /**
     * Clear all timeouts on unmount
     */
    componentWillUnmount: function componentWillUnmount() {
      var touchableNode = this.getTouchableNode && this.getTouchableNode();
      if (touchableNode && touchableNode.addEventListener) {
        touchableNode.removeEventListener("blur", this._touchableBlurListener);
      }
      this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
      this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
      this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
      this.pressInLocation = null;
      this.state.touchable.responderID = null;
    },
    /**
     * It's prefer that mixins determine state in this way, having the class
     * explicitly mix the state in the one and only `getInitialState` method.
     *
     * @return {object} State object to be placed inside of
     * `this.state.touchable`.
     */
    touchableGetInitialState: function touchableGetInitialState() {
      return {
        touchable: {
          touchState: void 0,
          responderID: null
        }
      };
    },
    // ==== Hooks to Gesture Responder system ====
    /**
     * Must return true if embedded in a native platform scroll view.
     */
    touchableHandleResponderTerminationRequest: function touchableHandleResponderTerminationRequest() {
      return !this.props.rejectResponderTermination;
    },
    /**
     * Must return true to start the process of `Touchable`.
     */
    touchableHandleStartShouldSetResponder: function touchableHandleStartShouldSetResponder() {
      return !this.props.disabled;
    },
    /**
     * Return true to cancel press on long press.
     */
    touchableLongPressCancelsPress: function touchableLongPressCancelsPress() {
      return true;
    },
    /**
     * Place as callback for a DOM element's `onResponderGrant` event.
     * @param {SyntheticEvent} e Synthetic event from event system.
     *
     */
    touchableHandleResponderGrant: function touchableHandleResponderGrant(e) {
      var dispatchID = e.currentTarget;
      e.persist();
      this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
      this.pressOutDelayTimeout = null;
      this.state.touchable.touchState = States.NOT_RESPONDER;
      this.state.touchable.responderID = dispatchID;
      this._receiveSignal(Signals.RESPONDER_GRANT, e);
      var delayMS = this.touchableGetHighlightDelayMS !== void 0 ? Math.max(this.touchableGetHighlightDelayMS(), 0) : HIGHLIGHT_DELAY_MS;
      delayMS = isNaN(delayMS) ? HIGHLIGHT_DELAY_MS : delayMS;
      if (delayMS !== 0) {
        this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, e), delayMS);
      } else {
        this._handleDelay(e);
      }
      var longDelayMS = this.touchableGetLongPressDelayMS !== void 0 ? Math.max(this.touchableGetLongPressDelayMS(), 10) : LONG_PRESS_DELAY_MS;
      longDelayMS = isNaN(longDelayMS) ? LONG_PRESS_DELAY_MS : longDelayMS;
      this.longPressDelayTimeout = setTimeout(this._handleLongDelay.bind(this, e), longDelayMS + delayMS);
    },
    /**
     * Place as callback for a DOM element's `onResponderRelease` event.
     */
    touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
      this.pressInLocation = null;
      this._receiveSignal(Signals.RESPONDER_RELEASE, e);
    },
    /**
     * Place as callback for a DOM element's `onResponderTerminate` event.
     */
    touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
      this.pressInLocation = null;
      this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
    },
    /**
     * Place as callback for a DOM element's `onResponderMove` event.
     */
    touchableHandleResponderMove: function touchableHandleResponderMove(e) {
      if (!this.state.touchable.positionOnActivate) {
        return;
      }
      var positionOnActivate = this.state.touchable.positionOnActivate;
      var dimensionsOnActivate = this.state.touchable.dimensionsOnActivate;
      var pressRectOffset = this.touchableGetPressRectOffset ? this.touchableGetPressRectOffset() : {
        left: PRESS_EXPAND_PX,
        right: PRESS_EXPAND_PX,
        top: PRESS_EXPAND_PX,
        bottom: PRESS_EXPAND_PX
      };
      var pressExpandLeft = pressRectOffset.left;
      var pressExpandTop = pressRectOffset.top;
      var pressExpandRight = pressRectOffset.right;
      var pressExpandBottom = pressRectOffset.bottom;
      var hitSlop = this.touchableGetHitSlop ? this.touchableGetHitSlop() : null;
      if (hitSlop) {
        pressExpandLeft += hitSlop.left || 0;
        pressExpandTop += hitSlop.top || 0;
        pressExpandRight += hitSlop.right || 0;
        pressExpandBottom += hitSlop.bottom || 0;
      }
      var touch = extractSingleTouch(e.nativeEvent);
      var pageX = touch && touch.pageX;
      var pageY = touch && touch.pageY;
      if (this.pressInLocation) {
        var movedDistance = this._getDistanceBetweenPoints(pageX, pageY, this.pressInLocation.pageX, this.pressInLocation.pageY);
        if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
          this._cancelLongPressDelayTimeout();
        }
      }
      var isTouchWithinActive = pageX > positionOnActivate.left - pressExpandLeft && pageY > positionOnActivate.top - pressExpandTop && pageX < positionOnActivate.left + dimensionsOnActivate.width + pressExpandRight && pageY < positionOnActivate.top + dimensionsOnActivate.height + pressExpandBottom;
      if (isTouchWithinActive) {
        var prevState = this.state.touchable.touchState;
        this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
        var curState = this.state.touchable.touchState;
        if (curState === States.RESPONDER_INACTIVE_PRESS_IN && prevState !== States.RESPONDER_INACTIVE_PRESS_IN) {
          this._cancelLongPressDelayTimeout();
        }
      } else {
        this._cancelLongPressDelayTimeout();
        this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
      }
    },
    /**
     * Invoked when the item receives focus. Mixers might override this to
     * visually distinguish the `VisualRect` so that the user knows that it
     * currently has the focus. Most platforms only support a single element being
     * focused at a time, in which case there may have been a previously focused
     * element that was blurred just prior to this. This can be overridden when
     * using `Touchable.Mixin.withoutDefaultFocusAndBlur`.
     */
    touchableHandleFocus: function touchableHandleFocus2(e) {
      this.props.onFocus && this.props.onFocus(e);
    },
    /**
     * Invoked when the item loses focus. Mixers might override this to
     * visually distinguish the `VisualRect` so that the user knows that it
     * no longer has focus. Most platforms only support a single element being
     * focused at a time, in which case the focus may have moved to another.
     * This can be overridden when using
     * `Touchable.Mixin.withoutDefaultFocusAndBlur`.
     */
    touchableHandleBlur: function touchableHandleBlur2(e) {
      this.props.onBlur && this.props.onBlur(e);
    },
    // ==== Abstract Application Callbacks ====
    /**
     * Invoked when the item should be highlighted. Mixers should implement this
     * to visually distinguish the `VisualRect` so that the user knows that
     * releasing a touch will result in a "selection" (analog to click).
     *
     * @abstract
     * touchableHandleActivePressIn: function,
     */
    /**
     * Invoked when the item is "active" (in that it is still eligible to become
     * a "select") but the touch has left the `PressRect`. Usually the mixer will
     * want to unhighlight the `VisualRect`. If the user (while pressing) moves
     * back into the `PressRect` `touchableHandleActivePressIn` will be invoked
     * again and the mixer should probably highlight the `VisualRect` again. This
     * event will not fire on an `touchEnd/mouseUp` event, only move events while
     * the user is depressing the mouse/touch.
     *
     * @abstract
     * touchableHandleActivePressOut: function
     */
    /**
     * Invoked when the item is "selected" - meaning the interaction ended by
     * letting up while the item was either in the state
     * `RESPONDER_ACTIVE_PRESS_IN` or `RESPONDER_INACTIVE_PRESS_IN`.
     *
     * @abstract
     * touchableHandlePress: function
     */
    /**
     * Invoked when the item is long pressed - meaning the interaction ended by
     * letting up while the item was in `RESPONDER_ACTIVE_LONG_PRESS_IN`. If
     * `touchableHandleLongPress` is *not* provided, `touchableHandlePress` will
     * be called as it normally is. If `touchableHandleLongPress` is provided, by
     * default any `touchableHandlePress` callback will not be invoked. To
     * override this default behavior, override `touchableLongPressCancelsPress`
     * to return false. As a result, `touchableHandlePress` will be called when
     * lifting up, even if `touchableHandleLongPress` has also been called.
     *
     * @abstract
     * touchableHandleLongPress: function
     */
    /**
     * Returns the number of millis to wait before triggering a highlight.
     *
     * @abstract
     * touchableGetHighlightDelayMS: function
     */
    /**
     * Returns the amount to extend the `HitRect` into the `PressRect`. Positive
     * numbers mean the size expands outwards.
     *
     * @abstract
     * touchableGetPressRectOffset: function
     */
    // ==== Internal Logic ====
    /**
     * Measures the `HitRect` node on activation. The Bounding rectangle is with
     * respect to viewport - not page, so adding the `pageXOffset/pageYOffset`
     * should result in points that are in the same coordinate system as an
     * event's `globalX/globalY` data values.
     *
     * - Consider caching this for the lifetime of the component, or possibly
     *   being able to share this cache between any `ScrollMap` view.
     *
     * @sideeffects
     * @private
     */
    _remeasureMetricsOnActivation: function _remeasureMetricsOnActivation() {
      var tag = this.state.touchable.responderID;
      if (tag == null) {
        return;
      }
      _UIManager.default.measure(tag, this._handleQueryLayout);
    },
    _handleQueryLayout: function _handleQueryLayout(l, t, w, h, globalX, globalY) {
      if (!l && !t && !w && !h && !globalX && !globalY) {
        return;
      }
      this.state.touchable.positionOnActivate && _Position.default.release(this.state.touchable.positionOnActivate);
      this.state.touchable.dimensionsOnActivate && // $FlowFixMe
      _BoundingDimensions.default.release(this.state.touchable.dimensionsOnActivate);
      this.state.touchable.positionOnActivate = _Position.default.getPooled(globalX, globalY);
      this.state.touchable.dimensionsOnActivate = _BoundingDimensions.default.getPooled(w, h);
    },
    _handleDelay: function _handleDelay(e) {
      this.touchableDelayTimeout = null;
      this._receiveSignal(Signals.DELAY, e);
    },
    _handleLongDelay: function _handleLongDelay(e) {
      this.longPressDelayTimeout = null;
      var curState = this.state.touchable.touchState;
      if (curState !== States.RESPONDER_ACTIVE_PRESS_IN && curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
        console.error("Attempted to transition from state `" + curState + "` to `" + States.RESPONDER_ACTIVE_LONG_PRESS_IN + "`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled.");
      } else {
        this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
      }
    },
    /**
     * Receives a state machine signal, performs side effects of the transition
     * and stores the new state. Validates the transition as well.
     *
     * @param {Signals} signal State machine signal.
     * @throws Error if invalid state transition or unrecognized signal.
     * @sideeffects
     */
    _receiveSignal: function _receiveSignal(signal, e) {
      var responderID = this.state.touchable.responderID;
      var curState = this.state.touchable.touchState;
      var nextState = Transitions[curState] && Transitions[curState][signal];
      if (!responderID && signal === Signals.RESPONDER_RELEASE) {
        return;
      }
      if (!nextState) {
        throw new Error("Unrecognized signal `" + signal + "` or state `" + curState + "` for Touchable responder `" + responderID + "`");
      }
      if (nextState === States.ERROR) {
        throw new Error("Touchable cannot transition from `" + curState + "` to `" + signal + "` for responder `" + responderID + "`");
      }
      if (curState !== nextState) {
        this._performSideEffectsForTransition(curState, nextState, signal, e);
        this.state.touchable.touchState = nextState;
      }
    },
    _cancelLongPressDelayTimeout: function _cancelLongPressDelayTimeout() {
      this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
      this.longPressDelayTimeout = null;
    },
    _isHighlight: function _isHighlight(state) {
      return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
    },
    _savePressInLocation: function _savePressInLocation(e) {
      var touch = extractSingleTouch(e.nativeEvent);
      var pageX = touch && touch.pageX;
      var pageY = touch && touch.pageY;
      var locationX = touch && touch.locationX;
      var locationY = touch && touch.locationY;
      this.pressInLocation = {
        pageX,
        pageY,
        locationX,
        locationY
      };
    },
    _getDistanceBetweenPoints: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
      var deltaX = aX - bX;
      var deltaY = aY - bY;
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    },
    /**
     * Will perform a transition between touchable states, and identify any
     * highlighting or unhighlighting that must be performed for this particular
     * transition.
     *
     * @param {States} curState Current Touchable state.
     * @param {States} nextState Next Touchable state.
     * @param {Signal} signal Signal that triggered the transition.
     * @param {Event} e Native event.
     * @sideeffects
     */
    _performSideEffectsForTransition: function _performSideEffectsForTransition(curState, nextState, signal, e) {
      var curIsHighlight = this._isHighlight(curState);
      var newIsHighlight = this._isHighlight(nextState);
      var isFinalSignal = signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;
      if (isFinalSignal) {
        this._cancelLongPressDelayTimeout();
      }
      var isInitialTransition = curState === States.NOT_RESPONDER && nextState === States.RESPONDER_INACTIVE_PRESS_IN;
      var isActiveTransition = !IsActive[curState] && IsActive[nextState];
      if (isInitialTransition || isActiveTransition) {
        this._remeasureMetricsOnActivation();
      }
      if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
        this.touchableHandleLongPress && this.touchableHandleLongPress(e);
      }
      if (newIsHighlight && !curIsHighlight) {
        this._startHighlight(e);
      } else if (!newIsHighlight && curIsHighlight) {
        this._endHighlight(e);
      }
      if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
        var hasLongPressHandler = !!this.props.onLongPress;
        var pressIsLongButStillCallOnPress = IsLongPressingIn[curState] && // We *are* long pressing.. // But either has no long handler
        (!hasLongPressHandler || !this.touchableLongPressCancelsPress());
        var shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;
        if (shouldInvokePress && this.touchableHandlePress) {
          if (!newIsHighlight && !curIsHighlight) {
            this._startHighlight(e);
            this._endHighlight(e);
          }
          this.touchableHandlePress(e);
        }
      }
      this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
      this.touchableDelayTimeout = null;
    },
    _playTouchSound: function _playTouchSound() {
      _UIManager.default.playTouchSound();
    },
    _startHighlight: function _startHighlight(e) {
      this._savePressInLocation(e);
      this.touchableHandleActivePressIn && this.touchableHandleActivePressIn(e);
    },
    _endHighlight: function _endHighlight(e) {
      if (this.touchableHandleActivePressOut) {
        if (this.touchableGetPressOutDelayMS && this.touchableGetPressOutDelayMS()) {
          this.pressOutDelayTimeout = setTimeout(() => {
            this.touchableHandleActivePressOut(e);
          }, this.touchableGetPressOutDelayMS());
        } else {
          this.touchableHandleActivePressOut(e);
        }
      }
    },
    // HACK (part 2): basic support for touchable interactions using a keyboard (including
    // delays and longPress)
    touchableHandleKeyEvent: function touchableHandleKeyEvent(e) {
      var type = e.type, key = e.key;
      if (key === "Enter" || key === " ") {
        if (type === "keydown") {
          if (!this._isTouchableKeyboardActive) {
            if (!this.state.touchable.touchState || this.state.touchable.touchState === States.NOT_RESPONDER) {
              this.touchableHandleResponderGrant(e);
              this._isTouchableKeyboardActive = true;
            }
          }
        } else if (type === "keyup") {
          if (this._isTouchableKeyboardActive) {
            if (this.state.touchable.touchState && this.state.touchable.touchState !== States.NOT_RESPONDER) {
              this.touchableHandleResponderRelease(e);
              this._isTouchableKeyboardActive = false;
            }
          }
        }
        e.stopPropagation();
        if (!(key === "Enter" && _AccessibilityUtil.default.propsToAriaRole(this.props) === "link")) {
          e.preventDefault();
        }
      }
    },
    withoutDefaultFocusAndBlur: {}
  };
  TouchableMixin.touchableHandleFocus;
  TouchableMixin.touchableHandleBlur;
  var TouchableMixinWithoutDefaultFocusAndBlur = (0, _objectWithoutPropertiesLoose2.default)(TouchableMixin, ["touchableHandleFocus", "touchableHandleBlur"]);
  TouchableMixin.withoutDefaultFocusAndBlur = TouchableMixinWithoutDefaultFocusAndBlur;
  var Touchable$1 = {
    Mixin: TouchableMixin,
    TOUCH_TARGET_DEBUG: false,
    // Highlights all touchable targets. Toggle with Inspector.
    /**
     * Renders a debugging overlay to visualize touch target with hitSlop (might not work on Android).
     */
    renderDebugView: (_ref) => {
      var color = _ref.color, hitSlop = _ref.hitSlop;
      if (!Touchable$1.TOUCH_TARGET_DEBUG) {
        return null;
      }
      var debugHitSlopStyle = {};
      hitSlop = hitSlop || {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      };
      for (var key in hitSlop) {
        debugHitSlopStyle[key] = -hitSlop[key];
      }
      var normalizedColor = (0, _normalizeColors.default)(color);
      if (typeof normalizedColor !== "number") {
        return null;
      }
      var hexColor = "#" + ("00000000" + normalizedColor.toString(16)).substr(-8);
      return /* @__PURE__ */ _react.default.createElement(_View.default, {
        pointerEvents: "none",
        style: (0, _objectSpread2.default)({
          position: "absolute",
          borderColor: hexColor.slice(0, -2) + "55",
          // More opaque
          borderWidth: 1,
          borderStyle: "dashed",
          backgroundColor: hexColor.slice(0, -2) + "0F"
        }, debugHitSlopStyle)
      });
    }
  };
  Touchable.default = Touchable$1;
  return Touchable;
}
var TouchableHighlight = {};
var hasRequiredTouchableHighlight;
function requireTouchableHighlight() {
  if (hasRequiredTouchableHighlight) return TouchableHighlight;
  hasRequiredTouchableHighlight = 1;
  Object.defineProperty(TouchableHighlight, "__esModule", {
    value: true
  });
  TouchableHighlight.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _react = _interopRequireWildcard(requireReact());
  var React = _react;
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  var _usePressEvents = _interopRequireDefault(/* @__PURE__ */ requireUsePressEvents());
  var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["activeOpacity", "children", "delayPressIn", "delayPressOut", "delayLongPress", "disabled", "focusable", "onHideUnderlay", "onLongPress", "onPress", "onPressIn", "onPressOut", "onShowUnderlay", "rejectResponderTermination", "style", "testOnly_pressed", "underlayColor"];
  function createExtraStyles(activeOpacity, underlayColor) {
    return {
      child: {
        opacity: activeOpacity !== null && activeOpacity !== void 0 ? activeOpacity : 0.85
      },
      underlay: {
        backgroundColor: underlayColor === void 0 ? "black" : underlayColor
      }
    };
  }
  function hasPressHandler(props) {
    return props.onPress != null || props.onPressIn != null || props.onPressOut != null || props.onLongPress != null;
  }
  function TouchableHighlight$1(props, forwardedRef) {
    var activeOpacity = props.activeOpacity, children = props.children, delayPressIn = props.delayPressIn, delayPressOut = props.delayPressOut, delayLongPress = props.delayLongPress, disabled = props.disabled, focusable = props.focusable, onHideUnderlay = props.onHideUnderlay, onLongPress = props.onLongPress, onPress = props.onPress, onPressIn = props.onPressIn, onPressOut = props.onPressOut, onShowUnderlay = props.onShowUnderlay, rejectResponderTermination = props.rejectResponderTermination, style = props.style, testOnly_pressed = props.testOnly_pressed, underlayColor = props.underlayColor, rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    var hostRef = (0, _react.useRef)(null);
    var setRef = (0, _useMergeRefs.default)(forwardedRef, hostRef);
    var _useState = (0, _react.useState)(testOnly_pressed === true ? createExtraStyles(activeOpacity, underlayColor) : null), extraStyles = _useState[0], setExtraStyles = _useState[1];
    var showUnderlay = (0, _react.useCallback)(() => {
      if (!hasPressHandler(props)) {
        return;
      }
      setExtraStyles(createExtraStyles(activeOpacity, underlayColor));
      if (onShowUnderlay != null) {
        onShowUnderlay();
      }
    }, [activeOpacity, onShowUnderlay, props, underlayColor]);
    var hideUnderlay = (0, _react.useCallback)(() => {
      if (testOnly_pressed === true) {
        return;
      }
      if (hasPressHandler(props)) {
        setExtraStyles(null);
        if (onHideUnderlay != null) {
          onHideUnderlay();
        }
      }
    }, [onHideUnderlay, props, testOnly_pressed]);
    var pressConfig = (0, _react.useMemo)(() => ({
      cancelable: !rejectResponderTermination,
      disabled,
      delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress,
      onPress,
      onPressStart(event) {
        showUnderlay();
        if (onPressIn != null) {
          onPressIn(event);
        }
      },
      onPressEnd(event) {
        hideUnderlay();
        if (onPressOut != null) {
          onPressOut(event);
        }
      }
    }), [delayLongPress, delayPressIn, delayPressOut, disabled, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination, showUnderlay, hideUnderlay]);
    var pressEventHandlers = (0, _usePressEvents.default)(hostRef, pressConfig);
    var child = React.Children.only(children);
    return /* @__PURE__ */ React.createElement(_View.default, (0, _extends2.default)({}, rest, pressEventHandlers, {
      accessibilityDisabled: disabled,
      focusable: !disabled && focusable !== false,
      pointerEvents: disabled ? "box-none" : void 0,
      ref: setRef,
      style: [styles2.root, style, !disabled && styles2.actionable, extraStyles && extraStyles.underlay]
    }), /* @__PURE__ */ React.cloneElement(child, {
      style: [child.props.style, extraStyles && extraStyles.child]
    }));
  }
  var styles2 = _StyleSheet.default.create({
    root: {
      userSelect: "none"
    },
    actionable: {
      cursor: "pointer",
      touchAction: "manipulation"
    }
  });
  var MemoedTouchableHighlight = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(TouchableHighlight$1));
  MemoedTouchableHighlight.displayName = "TouchableHighlight";
  TouchableHighlight.default = MemoedTouchableHighlight;
  return TouchableHighlight;
}
var TouchableNativeFeedback = {};
var UnimplementedView = {};
var hasRequiredUnimplementedView;
function requireUnimplementedView() {
  if (hasRequiredUnimplementedView) return UnimplementedView;
  hasRequiredUnimplementedView = 1;
  Object.defineProperty(UnimplementedView, "__esModule", {
    value: true
  });
  UnimplementedView.default = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
  var _react = _interopRequireDefault(requireReact());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var _excluded = ["style"];
  function UnimplementedView$1(_ref) {
    var style = _ref.style, props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
    return /* @__PURE__ */ _react.default.createElement(_View.default, (0, _extends2.default)({}, props, {
      style: [unimplementedViewStyles, style]
    }));
  }
  var unimplementedViewStyles = {};
  UnimplementedView.default = UnimplementedView$1;
  return UnimplementedView;
}
var hasRequiredTouchableNativeFeedback;
function requireTouchableNativeFeedback() {
  if (hasRequiredTouchableNativeFeedback) return TouchableNativeFeedback;
  hasRequiredTouchableNativeFeedback = 1;
  Object.defineProperty(TouchableNativeFeedback, "__esModule", {
    value: true
  });
  TouchableNativeFeedback.default = void 0;
  var _UnimplementedView = _interopRequireDefault(/* @__PURE__ */ requireUnimplementedView());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  TouchableNativeFeedback.default = _UnimplementedView.default;
  return TouchableNativeFeedback;
}
var TouchableWithoutFeedback = {};
var hasRequiredTouchableWithoutFeedback;
function requireTouchableWithoutFeedback() {
  if (hasRequiredTouchableWithoutFeedback) return TouchableWithoutFeedback;
  hasRequiredTouchableWithoutFeedback = 1;
  Object.defineProperty(TouchableWithoutFeedback, "__esModule", {
    value: true
  });
  TouchableWithoutFeedback.default = void 0;
  var _react = _interopRequireWildcard(requireReact());
  var React = _react;
  var _pick = _interopRequireDefault(/* @__PURE__ */ requirePick());
  var _useMergeRefs = _interopRequireDefault(/* @__PURE__ */ requireUseMergeRefs$1());
  var _usePressEvents = _interopRequireDefault(/* @__PURE__ */ requireUsePressEvents());
  var _warnOnce = /* @__PURE__ */ requireWarnOnce();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  var forwardPropsList = {
    accessibilityDisabled: true,
    accessibilityLabel: true,
    accessibilityLiveRegion: true,
    accessibilityRole: true,
    accessibilityState: true,
    accessibilityValue: true,
    children: true,
    disabled: true,
    focusable: true,
    nativeID: true,
    onBlur: true,
    onFocus: true,
    onLayout: true,
    testID: true
  };
  var pickProps = (props) => (0, _pick.default)(props, forwardPropsList);
  function TouchableWithoutFeedback$1(props, forwardedRef) {
    (0, _warnOnce.warnOnce)("TouchableWithoutFeedback", "TouchableWithoutFeedback is deprecated. Please use Pressable.");
    var delayPressIn = props.delayPressIn, delayPressOut = props.delayPressOut, delayLongPress = props.delayLongPress, disabled = props.disabled, focusable = props.focusable, onLongPress = props.onLongPress, onPress = props.onPress, onPressIn = props.onPressIn, onPressOut = props.onPressOut, rejectResponderTermination = props.rejectResponderTermination;
    var hostRef = (0, _react.useRef)(null);
    var pressConfig = (0, _react.useMemo)(() => ({
      cancelable: !rejectResponderTermination,
      disabled,
      delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress,
      onPress,
      onPressStart: onPressIn,
      onPressEnd: onPressOut
    }), [disabled, delayPressIn, delayPressOut, delayLongPress, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination]);
    var pressEventHandlers = (0, _usePressEvents.default)(hostRef, pressConfig);
    var element = React.Children.only(props.children);
    var children = [element.props.children];
    var supportedProps = pickProps(props);
    supportedProps.accessibilityDisabled = disabled;
    supportedProps.focusable = !disabled && focusable !== false;
    supportedProps.ref = (0, _useMergeRefs.default)(forwardedRef, hostRef, element.ref);
    var elementProps = Object.assign(supportedProps, pressEventHandlers);
    return /* @__PURE__ */ React.cloneElement(element, elementProps, ...children);
  }
  var MemoedTouchableWithoutFeedback = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(TouchableWithoutFeedback$1));
  MemoedTouchableWithoutFeedback.displayName = "TouchableWithoutFeedback";
  TouchableWithoutFeedback.default = MemoedTouchableWithoutFeedback;
  return TouchableWithoutFeedback;
}
var VirtualizedList = {};
var hasRequiredVirtualizedList;
function requireVirtualizedList() {
  if (hasRequiredVirtualizedList) return VirtualizedList;
  hasRequiredVirtualizedList = 1;
  Object.defineProperty(VirtualizedList, "__esModule", {
    value: true
  });
  VirtualizedList.default = void 0;
  var _VirtualizedList = _interopRequireDefault(/* @__PURE__ */ requireVirtualizedList$1());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  VirtualizedList.default = _VirtualizedList.default;
  return VirtualizedList;
}
var YellowBox = {};
var hasRequiredYellowBox;
function requireYellowBox() {
  if (hasRequiredYellowBox) return YellowBox;
  hasRequiredYellowBox = 1;
  Object.defineProperty(YellowBox, "__esModule", {
    value: true
  });
  YellowBox.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _UnimplementedView = _interopRequireDefault(/* @__PURE__ */ requireUnimplementedView());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function YellowBox$1(props) {
    return /* @__PURE__ */ _react.default.createElement(_UnimplementedView.default, props);
  }
  YellowBox$1.ignoreWarnings = () => {
  };
  YellowBox.default = YellowBox$1;
  return YellowBox;
}
var LogBox = {};
var hasRequiredLogBox;
function requireLogBox() {
  if (hasRequiredLogBox) return LogBox;
  hasRequiredLogBox = 1;
  Object.defineProperty(LogBox, "__esModule", {
    value: true
  });
  LogBox.default = void 0;
  var LogBox$1 = {
    ignoreLogs() {
    },
    ignoreAllLogs() {
    },
    uninstall() {
    },
    install() {
    }
  };
  LogBox.default = LogBox$1;
  return LogBox;
}
var DeviceEventEmitter = {};
var hasRequiredDeviceEventEmitter;
function requireDeviceEventEmitter() {
  if (hasRequiredDeviceEventEmitter) return DeviceEventEmitter;
  hasRequiredDeviceEventEmitter = 1;
  Object.defineProperty(DeviceEventEmitter, "__esModule", {
    value: true
  });
  DeviceEventEmitter.default = void 0;
  var _RCTDeviceEventEmitter = _interopRequireDefault(/* @__PURE__ */ requireRCTDeviceEventEmitter());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  DeviceEventEmitter.default = _RCTDeviceEventEmitter.default;
  return DeviceEventEmitter;
}
var useColorScheme = {};
var hasRequiredUseColorScheme;
function requireUseColorScheme() {
  if (hasRequiredUseColorScheme) return useColorScheme;
  hasRequiredUseColorScheme = 1;
  Object.defineProperty(useColorScheme, "__esModule", {
    value: true
  });
  useColorScheme.default = useColorScheme$1;
  var React = _interopRequireWildcard(requireReact());
  var _Appearance = _interopRequireDefault(/* @__PURE__ */ requireAppearance());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
  }
  function useColorScheme$1() {
    var _React$useState = React.useState(_Appearance.default.getColorScheme()), colorScheme = _React$useState[0], setColorScheme = _React$useState[1];
    React.useEffect(() => {
      function listener(appearance) {
        setColorScheme(appearance.colorScheme);
      }
      var _Appearance$addChange = _Appearance.default.addChangeListener(listener), remove = _Appearance$addChange.remove;
      return remove;
    });
    return colorScheme;
  }
  return useColorScheme;
}
var useLocaleContext = {};
var hasRequiredUseLocaleContext;
function requireUseLocaleContext() {
  if (hasRequiredUseLocaleContext) return useLocaleContext;
  hasRequiredUseLocaleContext = 1;
  Object.defineProperty(useLocaleContext, "__esModule", {
    value: true
  });
  useLocaleContext.default = void 0;
  var _useLocale = /* @__PURE__ */ requireUseLocale();
  useLocaleContext.default = _useLocale.useLocaleContext;
  return useLocaleContext;
}
var useWindowDimensions = {};
var hasRequiredUseWindowDimensions;
function requireUseWindowDimensions() {
  if (hasRequiredUseWindowDimensions) return useWindowDimensions;
  hasRequiredUseWindowDimensions = 1;
  Object.defineProperty(useWindowDimensions, "__esModule", {
    value: true
  });
  useWindowDimensions.default = useWindowDimensions$1;
  var _Dimensions = _interopRequireDefault(/* @__PURE__ */ requireDimensions());
  var _react = requireReact();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function useWindowDimensions$1() {
    var _useState = (0, _react.useState)(() => _Dimensions.default.get("window")), dims = _useState[0], setDims = _useState[1];
    (0, _react.useEffect)(() => {
      function handleChange(_ref) {
        var window2 = _ref.window;
        if (window2 != null) {
          setDims(window2);
        }
      }
      _Dimensions.default.addEventListener("change", handleChange);
      setDims(_Dimensions.default.get("window"));
      return () => {
        _Dimensions.default.removeEventListener("change", handleChange);
      };
    }, []);
    return dims;
  }
  return useWindowDimensions;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "AccessibilityInfo", {
      enumerable: true,
      get: function() {
        return _AccessibilityInfo.default;
      }
    });
    Object.defineProperty(exports, "ActivityIndicator", {
      enumerable: true,
      get: function() {
        return _ActivityIndicator.default;
      }
    });
    Object.defineProperty(exports, "Alert", {
      enumerable: true,
      get: function() {
        return _Alert.default;
      }
    });
    Object.defineProperty(exports, "Animated", {
      enumerable: true,
      get: function() {
        return _Animated.default;
      }
    });
    Object.defineProperty(exports, "AppRegistry", {
      enumerable: true,
      get: function() {
        return _AppRegistry.default;
      }
    });
    Object.defineProperty(exports, "AppState", {
      enumerable: true,
      get: function() {
        return _AppState.default;
      }
    });
    Object.defineProperty(exports, "Appearance", {
      enumerable: true,
      get: function() {
        return _Appearance.default;
      }
    });
    Object.defineProperty(exports, "BackHandler", {
      enumerable: true,
      get: function() {
        return _BackHandler.default;
      }
    });
    Object.defineProperty(exports, "Button", {
      enumerable: true,
      get: function() {
        return _Button.default;
      }
    });
    Object.defineProperty(exports, "CheckBox", {
      enumerable: true,
      get: function() {
        return _CheckBox.default;
      }
    });
    Object.defineProperty(exports, "Clipboard", {
      enumerable: true,
      get: function() {
        return _Clipboard.default;
      }
    });
    Object.defineProperty(exports, "DeviceEventEmitter", {
      enumerable: true,
      get: function() {
        return _DeviceEventEmitter.default;
      }
    });
    Object.defineProperty(exports, "Dimensions", {
      enumerable: true,
      get: function() {
        return _Dimensions.default;
      }
    });
    Object.defineProperty(exports, "Easing", {
      enumerable: true,
      get: function() {
        return _Easing.default;
      }
    });
    Object.defineProperty(exports, "FlatList", {
      enumerable: true,
      get: function() {
        return _FlatList.default;
      }
    });
    Object.defineProperty(exports, "I18nManager", {
      enumerable: true,
      get: function() {
        return _I18nManager.default;
      }
    });
    Object.defineProperty(exports, "Image", {
      enumerable: true,
      get: function() {
        return _Image.default;
      }
    });
    Object.defineProperty(exports, "ImageBackground", {
      enumerable: true,
      get: function() {
        return _ImageBackground.default;
      }
    });
    Object.defineProperty(exports, "InteractionManager", {
      enumerable: true,
      get: function() {
        return _InteractionManager.default;
      }
    });
    Object.defineProperty(exports, "Keyboard", {
      enumerable: true,
      get: function() {
        return _Keyboard.default;
      }
    });
    Object.defineProperty(exports, "KeyboardAvoidingView", {
      enumerable: true,
      get: function() {
        return _KeyboardAvoidingView.default;
      }
    });
    Object.defineProperty(exports, "LayoutAnimation", {
      enumerable: true,
      get: function() {
        return _LayoutAnimation.default;
      }
    });
    Object.defineProperty(exports, "Linking", {
      enumerable: true,
      get: function() {
        return _Linking.default;
      }
    });
    Object.defineProperty(exports, "LogBox", {
      enumerable: true,
      get: function() {
        return _LogBox.default;
      }
    });
    Object.defineProperty(exports, "Modal", {
      enumerable: true,
      get: function() {
        return _Modal.default;
      }
    });
    Object.defineProperty(exports, "NativeEventEmitter", {
      enumerable: true,
      get: function() {
        return _NativeEventEmitter.default;
      }
    });
    Object.defineProperty(exports, "NativeModules", {
      enumerable: true,
      get: function() {
        return _NativeModules.default;
      }
    });
    Object.defineProperty(exports, "PanResponder", {
      enumerable: true,
      get: function() {
        return _PanResponder.default;
      }
    });
    Object.defineProperty(exports, "Picker", {
      enumerable: true,
      get: function() {
        return _Picker.default;
      }
    });
    Object.defineProperty(exports, "PixelRatio", {
      enumerable: true,
      get: function() {
        return _PixelRatio.default;
      }
    });
    Object.defineProperty(exports, "Platform", {
      enumerable: true,
      get: function() {
        return _Platform.default;
      }
    });
    Object.defineProperty(exports, "Pressable", {
      enumerable: true,
      get: function() {
        return _Pressable.default;
      }
    });
    Object.defineProperty(exports, "ProgressBar", {
      enumerable: true,
      get: function() {
        return _ProgressBar.default;
      }
    });
    Object.defineProperty(exports, "RefreshControl", {
      enumerable: true,
      get: function() {
        return _RefreshControl.default;
      }
    });
    Object.defineProperty(exports, "SafeAreaView", {
      enumerable: true,
      get: function() {
        return _SafeAreaView.default;
      }
    });
    Object.defineProperty(exports, "ScrollView", {
      enumerable: true,
      get: function() {
        return _ScrollView.default;
      }
    });
    Object.defineProperty(exports, "SectionList", {
      enumerable: true,
      get: function() {
        return _SectionList.default;
      }
    });
    Object.defineProperty(exports, "Share", {
      enumerable: true,
      get: function() {
        return _Share.default;
      }
    });
    Object.defineProperty(exports, "StatusBar", {
      enumerable: true,
      get: function() {
        return _StatusBar.default;
      }
    });
    Object.defineProperty(exports, "StyleSheet", {
      enumerable: true,
      get: function() {
        return _StyleSheet.default;
      }
    });
    Object.defineProperty(exports, "Switch", {
      enumerable: true,
      get: function() {
        return _Switch.default;
      }
    });
    Object.defineProperty(exports, "Text", {
      enumerable: true,
      get: function() {
        return _Text.default;
      }
    });
    Object.defineProperty(exports, "TextInput", {
      enumerable: true,
      get: function() {
        return _TextInput.default;
      }
    });
    Object.defineProperty(exports, "Touchable", {
      enumerable: true,
      get: function() {
        return _Touchable.default;
      }
    });
    Object.defineProperty(exports, "TouchableHighlight", {
      enumerable: true,
      get: function() {
        return _TouchableHighlight.default;
      }
    });
    Object.defineProperty(exports, "TouchableNativeFeedback", {
      enumerable: true,
      get: function() {
        return _TouchableNativeFeedback.default;
      }
    });
    Object.defineProperty(exports, "TouchableOpacity", {
      enumerable: true,
      get: function() {
        return _TouchableOpacity.default;
      }
    });
    Object.defineProperty(exports, "TouchableWithoutFeedback", {
      enumerable: true,
      get: function() {
        return _TouchableWithoutFeedback.default;
      }
    });
    Object.defineProperty(exports, "UIManager", {
      enumerable: true,
      get: function() {
        return _UIManager.default;
      }
    });
    Object.defineProperty(exports, "Vibration", {
      enumerable: true,
      get: function() {
        return _Vibration.default;
      }
    });
    Object.defineProperty(exports, "View", {
      enumerable: true,
      get: function() {
        return _View.default;
      }
    });
    Object.defineProperty(exports, "VirtualizedList", {
      enumerable: true,
      get: function() {
        return _VirtualizedList.default;
      }
    });
    Object.defineProperty(exports, "YellowBox", {
      enumerable: true,
      get: function() {
        return _YellowBox.default;
      }
    });
    Object.defineProperty(exports, "findNodeHandle", {
      enumerable: true,
      get: function() {
        return _findNodeHandle.default;
      }
    });
    Object.defineProperty(exports, "processColor", {
      enumerable: true,
      get: function() {
        return _processColor.default;
      }
    });
    Object.defineProperty(exports, "render", {
      enumerable: true,
      get: function() {
        return _render.default;
      }
    });
    Object.defineProperty(exports, "unmountComponentAtNode", {
      enumerable: true,
      get: function() {
        return _unmountComponentAtNode.default;
      }
    });
    Object.defineProperty(exports, "unstable_createElement", {
      enumerable: true,
      get: function() {
        return _createElement.default;
      }
    });
    Object.defineProperty(exports, "useColorScheme", {
      enumerable: true,
      get: function() {
        return _useColorScheme.default;
      }
    });
    Object.defineProperty(exports, "useLocaleContext", {
      enumerable: true,
      get: function() {
        return _useLocaleContext.default;
      }
    });
    Object.defineProperty(exports, "useWindowDimensions", {
      enumerable: true,
      get: function() {
        return _useWindowDimensions.default;
      }
    });
    var _createElement = _interopRequireDefault(/* @__PURE__ */ requireCreateElement());
    var _findNodeHandle = _interopRequireDefault(/* @__PURE__ */ requireFindNodeHandle());
    var _processColor = _interopRequireDefault(/* @__PURE__ */ requireProcessColor());
    var _render = _interopRequireDefault(/* @__PURE__ */ requireRender());
    var _unmountComponentAtNode = _interopRequireDefault(/* @__PURE__ */ requireUnmountComponentAtNode());
    var _NativeModules = _interopRequireDefault(/* @__PURE__ */ requireNativeModules());
    var _AccessibilityInfo = _interopRequireDefault(/* @__PURE__ */ requireAccessibilityInfo());
    var _Alert = _interopRequireDefault(/* @__PURE__ */ requireAlert());
    var _Animated = _interopRequireDefault(/* @__PURE__ */ requireAnimated());
    var _Appearance = _interopRequireDefault(/* @__PURE__ */ requireAppearance());
    var _AppRegistry = _interopRequireDefault(/* @__PURE__ */ requireAppRegistry());
    var _AppState = _interopRequireDefault(/* @__PURE__ */ requireAppState());
    var _BackHandler = _interopRequireDefault(/* @__PURE__ */ requireBackHandler());
    var _Clipboard = _interopRequireDefault(/* @__PURE__ */ requireClipboard());
    var _Dimensions = _interopRequireDefault(/* @__PURE__ */ requireDimensions());
    var _Easing = _interopRequireDefault(/* @__PURE__ */ requireEasing());
    var _I18nManager = _interopRequireDefault(/* @__PURE__ */ requireI18nManager());
    var _Keyboard = _interopRequireDefault(/* @__PURE__ */ requireKeyboard());
    var _InteractionManager = _interopRequireDefault(/* @__PURE__ */ requireInteractionManager());
    var _LayoutAnimation = _interopRequireDefault(/* @__PURE__ */ requireLayoutAnimation());
    var _Linking = _interopRequireDefault(/* @__PURE__ */ requireLinking());
    var _NativeEventEmitter = _interopRequireDefault(/* @__PURE__ */ requireNativeEventEmitter());
    var _PanResponder = _interopRequireDefault(/* @__PURE__ */ requirePanResponder());
    var _PixelRatio = _interopRequireDefault(/* @__PURE__ */ requirePixelRatio());
    var _Platform = _interopRequireDefault(/* @__PURE__ */ requirePlatform$1());
    var _Share = _interopRequireDefault(/* @__PURE__ */ requireShare());
    var _StyleSheet = _interopRequireDefault(/* @__PURE__ */ requireStyleSheet());
    var _UIManager = _interopRequireDefault(/* @__PURE__ */ requireUIManager());
    var _Vibration = _interopRequireDefault(/* @__PURE__ */ requireVibration());
    var _ActivityIndicator = _interopRequireDefault(/* @__PURE__ */ requireActivityIndicator());
    var _Button = _interopRequireDefault(/* @__PURE__ */ requireButton());
    var _CheckBox = _interopRequireDefault(/* @__PURE__ */ requireCheckBox());
    var _FlatList = _interopRequireDefault(/* @__PURE__ */ requireFlatList());
    var _Image = _interopRequireDefault(/* @__PURE__ */ requireImage());
    var _ImageBackground = _interopRequireDefault(/* @__PURE__ */ requireImageBackground());
    var _KeyboardAvoidingView = _interopRequireDefault(/* @__PURE__ */ requireKeyboardAvoidingView());
    var _Modal = _interopRequireDefault(/* @__PURE__ */ requireModal());
    var _Picker = _interopRequireDefault(/* @__PURE__ */ requirePicker());
    var _Pressable = _interopRequireDefault(/* @__PURE__ */ requirePressable());
    var _ProgressBar = _interopRequireDefault(/* @__PURE__ */ requireProgressBar());
    var _RefreshControl = _interopRequireDefault(/* @__PURE__ */ requireRefreshControl());
    var _SafeAreaView = _interopRequireDefault(/* @__PURE__ */ requireSafeAreaView());
    var _ScrollView = _interopRequireDefault(/* @__PURE__ */ requireScrollView());
    var _SectionList = _interopRequireDefault(/* @__PURE__ */ requireSectionList());
    var _StatusBar = _interopRequireDefault(/* @__PURE__ */ requireStatusBar());
    var _Switch = _interopRequireDefault(/* @__PURE__ */ requireSwitch());
    var _Text = _interopRequireDefault(/* @__PURE__ */ requireText());
    var _TextInput = _interopRequireDefault(/* @__PURE__ */ requireTextInput());
    var _Touchable = _interopRequireDefault(/* @__PURE__ */ requireTouchable());
    var _TouchableHighlight = _interopRequireDefault(/* @__PURE__ */ requireTouchableHighlight());
    var _TouchableNativeFeedback = _interopRequireDefault(/* @__PURE__ */ requireTouchableNativeFeedback());
    var _TouchableOpacity = _interopRequireDefault(/* @__PURE__ */ requireTouchableOpacity());
    var _TouchableWithoutFeedback = _interopRequireDefault(/* @__PURE__ */ requireTouchableWithoutFeedback());
    var _View = _interopRequireDefault(/* @__PURE__ */ requireView());
    var _VirtualizedList = _interopRequireDefault(/* @__PURE__ */ requireVirtualizedList());
    var _YellowBox = _interopRequireDefault(/* @__PURE__ */ requireYellowBox());
    var _LogBox = _interopRequireDefault(/* @__PURE__ */ requireLogBox());
    var _DeviceEventEmitter = _interopRequireDefault(/* @__PURE__ */ requireDeviceEventEmitter());
    var _useColorScheme = _interopRequireDefault(/* @__PURE__ */ requireUseColorScheme());
    var _useLocaleContext = _interopRequireDefault(/* @__PURE__ */ requireUseLocaleContext());
    var _useWindowDimensions = _interopRequireDefault(/* @__PURE__ */ requireUseWindowDimensions());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
  })(dist);
  return dist;
}
var distExports = /* @__PURE__ */ requireDist();
const MyButton = ({ onPress, text }) => /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.TouchableOpacity, { activeOpacity: 0.8, style: styles$1.container, onPress, children: /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.Text, { style: styles$1.text, children: text }) });
const styles$1 = distExports.StyleSheet.create({
  container: {
    backgroundColor: "purple",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  text: {
    color: "white"
  }
});
try {
  Button.displayName = "Button";
  Button.__docgenInfo = { "description": "", "displayName": "Button", "props": { "onPress": { "defaultValue": null, "description": "", "name": "onPress", "required": false, "type": { "name": "(() => void)" } }, "text": { "defaultValue": null, "description": "", "name": "text", "required": true, "type": { "name": "string" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
const meta = {
  args: {
    text: "Hello world"
  },
  argTypes: {
    onPress: {
      action: "pressed the button"
    }
  },
  component: MyButton,
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.View, { style: styles.container, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })],
  title: "MyButton"
};
const Basic = {};
const AnotherExample = {
  args: {
    text: "Another example"
  }
};
const styles = distExports.StyleSheet.create({
  container: {
    alignItems: "flex-start",
    padding: 16
  }
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...(_a = Basic.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{}",
      ...(_c = (_b = Basic.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
AnotherExample.parameters = {
  ...AnotherExample.parameters,
  docs: {
    ...(_d = AnotherExample.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    text: 'Another example'\n  }\n}",
      ...(_f = (_e = AnotherExample.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Basic", "AnotherExample"];
export {
  AnotherExample,
  Basic,
  __namedExportsOrder,
  meta as default
};
