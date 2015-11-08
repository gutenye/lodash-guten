function insert(array, index, value) {
  array.splice(index, 0, value)
}
_.insert = insert;

function swap(array, i, j) {
  var tmp = array[j]
  array[j] = array[i]
  array[i] = tmp
}
_.swap = swap;

function moveTo(array, i, j) {
  if (i === j) {
    return array
  }
  var value = _.pullAt(array, i)[0]
  insert(array, j, value)
  return array
}
_.moveTo = moveTo;


// _.mousestroke(e) -> "left" right middle
var _buttonMap = {
  0: "left",
  1: "middle",
  2: "right"
}
function mousestroke(e) {
  return _buttonMap[e.button]
}
_.mousestroke = mousestroke

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
  222: "'",
}
// lower case chars
for (var i = 97; i < 123; i++) keystrokes[i-32] = String.fromCharCode(i)
// numbers
for (i = 48; i < 58; i++) keystrokes[i] = `${i - 48}`
// function keys
for (i = 1; i < 13; i++) keystrokes[i+111] = `f${i}`
// numpad keys
for (i = 0; i < 10; i++) keystrokes[i+96] = `numpad${i}`

function keystroke(event) {
  var keyCode = event.which || event.keyCode || event.charCode
  var key = keystrokes[keyCode]

  var keystroke = ''
  if (event.ctrlKey) {
    keystroke += 'ctrl'
  }
  if (event.altKey) {
    if (keystroke)
      keystroke += '-'
    keystroke += 'alt'
  }
  if (event.shiftKey) {
    // Don't push 'shift' when modifying symbolic characters like '{'
    if (!/^[^A-Za-z]$/.test(key)) {
      if (keystroke)
        keystroke += '-'
      keystroke += 'shift'
    }
  }
  if (event.metaKey) {
    if (keystroke)
      keystroke += '-'
    keystroke += 'cmd'
  }
  if (key) {
    if (keystroke)
      keystroke += '-'
    keystroke += key
  }

  return keystroke
}
_.keystroke = keystroke
