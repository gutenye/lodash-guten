# Guten's personal version of lodash

The idea is use semantic words as much as possible, for example, `array.insert(index, value)` instead of `array.splice(index, 0, value)`.

Forked from [lodash](https://github.com/lodash/lodash), with additions:

- `_.keystroke(event)    -> "a" "ctrl-a" "ctrl-alt-shift-cmd-a" `
- `_.deleteAt(array, index)`
- `_.insert(array, index, value)`
- `_.swap(array, i, j)`        e.g.: `[0, 1, 2, 3]  swap(0, 3)   -> [3, 1, 2, 0]`
- `_.moveTo(array, i, j)`      e.g.: `[0, 1, 2, 3]  moveTo(0, 3) -> [1, 2, 3, 0] move afterwards is +1, moveTo(3, 0) -> [3, 0, 1, 2] move backwards is +0`

Install
-------

In Browser

```
$ bower install lodash lodash-guten
<script src="bower_components/lodash/lodash.js"></script>
<script src="bower_components/lodash-guten/lodash-guten.js"></script>
```

In Node
```
$ npm install lodash lodash-guten
var _ = require("lodash")
require("lodash-guten")
```
