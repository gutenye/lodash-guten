'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require("lodash")) : typeof define === 'function' && define.amd ? define(factory) : global._ = factory(_);
})(this, function (_) {
  ////////////
  // ¤Array
  ///////////

  function insert(array, index, value) {
    array.splice(index, 0, value);
  }
  _.insert = insert;

  function swap(array, i, j) {
    var tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
  }
  _.swap = swap;

  function moveTo(array, i, j) {
    if (i === j) {
      return array;
    }
    var value = _.pullAt(array, i)[0];
    insert(array, j, value);
    return array;
  }
  _.moveTo = moveTo;

  function wrapArray(array) {
    return _.isArray(array) ? array : [array];
  }
  _.wrapArray = wrapArray;

  ///////////
  // ¤Object
  //////////

  // Iterate object and create a new object.
  //
  // mapOwn(object, callback{value, key, result}) // -> new result object
  //
  // Example:
  //
  //   mapOwn({a: 1}, (value, key, result) => {
  //     result[key.toUpperCase()] = value
  //   })
  //   // => {A: 1}
  //
  function mapOwn(object, callback) {
    var result = {};
    _.forOwn(object, function (value, key) {
      callback(value, key, result);
    });
    return result;
  }
  _.mapOwn = mapOwn;

  // Like pick, but modify in Place
  //
  function pickBang(object) {
    for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      keys[_key - 1] = arguments[_key];
    }

    var ret = _.pick.apply(_, [object].concat(keys));
    keys.forEach(function (key) {
      delete object[key];
    });
    return ret;
  }
  _.pickBang = pickBang;

  //////////////
  // ¤DOM
  /////////////

  // _.mousestroke(e) -> "left" right middle
  var _buttonMap = {
    0: "left",
    1: "middle",
    2: "right"
  };
  function mousestroke(e) {
    return _buttonMap[e.button];
  }
  _.mousestroke = mousestroke;

  // _.keystroke(event) -> "a" "ctrl-a" "ctrl-alt-shift-cmd-a"
  var keystrokes = {
    8: "backspace",
    9: "tab",
    13: "enter",
    19: "pause",
    20: "capsLock",
    27: "escape",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    91: "command",
    93: "rightclick",
    106: "numpadmultiply",
    107: "numpadadd",
    109: "numpadsubtract",
    110: "numpaddot",
    111: "numpaddivide",
    144: "numlock",
    145: "scrolllock",
    182: "mycomputer",
    183: "mycalculator",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  };
  // lower case chars
  for (var i = 97; i < 123; i++) keystrokes[i - 32] = String.fromCharCode(i);
  // numbers
  for (i = 48; i < 58; i++) keystrokes[i] = '' + (i - 48);
  // function keys
  for (i = 1; i < 13; i++) keystrokes[i + 111] = 'f' + i;
  // numpad keys
  for (i = 0; i < 10; i++) keystrokes[i + 96] = 'numpad' + i;

  function keystroke(event) {
    var keyCode = event.which || event.keyCode || event.charCode;
    var key = keystrokes[keyCode];

    var keystroke = '';
    if (event.ctrlKey) {
      keystroke += 'ctrl';
    }
    if (event.altKey) {
      if (keystroke) keystroke += '-';
      keystroke += 'alt';
    }
    if (event.shiftKey) {
      // Don't push 'shift' when modifying symbolic characters like '{'
      if (!/^[^A-Za-z]$/.test(key)) {
        if (keystroke) keystroke += '-';
        keystroke += 'shift';
      }
    }
    if (event.metaKey) {
      if (keystroke) keystroke += '-';
      keystroke += 'cmd';
    }
    if (key) {
      if (keystroke) keystroke += '-';
      keystroke += key;
    }

    return keystroke;
  }
  _.keystroke = keystroke;

  // - add params options for GET.
  // - add JSON.stringify(body) with "Content-Type": "application/json" if body is object.
  function _fetch(url, options) {
    var query = "";
    if (options.params) query = '?' + params(options.params);
    if (_.isObject(options.body)) {
      options.headers = options.headers || {};
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(options.body);
    }

    return fetch('' + url + query, options).then(function (resp) {
      if (resp.ok) return resp.json();else return Promise.reject(new Error(resp.statusText));
    });
  }
  _.fetch = _fetch;

  function params(arg) {
    return arg ? Object.keys(arg).reduce(function (a, k) {
      a.push(k + '=' + encodeURIComponent(arg[k]));return a;
    }, []).join('&') : "";
  }
  _.params = params;

  return _;
});

