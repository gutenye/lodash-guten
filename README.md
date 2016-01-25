# Guten's personal version of lodash

The idea is use semantic words as much as possible, for example, `array.insert(index, value)` instead of `array.splice(index, 0, value)`.

Forked from [lodash](https://github.com/lodash/lodash), with additions:


**Array**

```
deleteAt(array, index)
insert(array, index, value)
swap(array, i, j)
moveTo(array, i, j)
wrapArray(array_s)`
```

**Object**

```
mapOwn(object, callback{value, key, result})
pickBang(object, key, ...)
```

**DOM**

```
fetch(url, options)
params(params)
keystroke(event)    -> "a" "ctrl-a" "ctrl-alt-shift-cmd-a" `
```

need `node --harmony` for pickBang

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
$ npm install lodash-guten
import _ from "lodash-guten"
global._ = _
```
