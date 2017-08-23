[![build status](https://img.shields.io/travis/ginkgobioworks/scatter-matrix.svg)](https://travis-ci.org/ginkgobioworks/scatter-matrix)
[![npm version](https://img.shields.io/npm/v/@ginkgobioworks/scatter-matrix.svg)](https://www.npmjs.com/package/@ginkgobioworks/scatter-matrix)

* * *

# scatter-matrix.js

scatter-matrix.js (SM) is a JavaScript library for drawing scatterplot matrix.
SM handles matrix data in CSV format: rows represent samples and columns
represent observations. SM interprets the first row as a header. All numeric
columns appear as rows and columns of the scatterplot matrix.

SM is a simple extension/generalization of [Mike Bostock's scatterplot matrix
example](http://mbostock.github.io/d3/talk/20111116/iris-splom.html).
Additional features include

  * User can color dots by values of a non-numeric observation.
  * User can filter data by values of a non-numeric observation.
  * User can decide what numeric observations to include in the matrix.
  * User can expand the matrix and view data by fixing one or more observations at set values.

For demo, see http://benjiec.github.io/scatter-matrix/demo/demo.html

### Installation

To install:

```
npm install --save @ginkgobioworks/scatter-matrix
```

If you're not using [npm](https://www.npmjs.com) as a package manager, this
library is available in a [UMD](https://github.com/umdjs/umd) build at
[unpkg](https://unpkg.com/@ginkgobioworks/scatter-matrix) that you can use in a
`<script>` tag in the browser, or install with bower. The UMD build makes
`ScatterMatrix` available as a `window.ScatterMatrix` global variable.
