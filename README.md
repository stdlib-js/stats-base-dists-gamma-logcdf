<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gamma][gamma-distribution] distribution logarithm of cumulative distribution function (CDF).

<section class="intro">

The [cumulative distribution function][cdf] for a [gamma][gamma-distribution] random variable is

<!-- <equation class="equation" label="eq:gamma_cdf" align="center" raw="F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}" alt="Cumulative distribution function for a Gamma distribution."> -->

```math
F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}" data-equation="eq:gamma_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@9dcb6eb6ab19f2ea81f3bcab5344b29961028a0c/lib/node_modules/@stdlib/stats/base/dists/gamma/logcdf/docs/img/equation_gamma_cdf.svg" alt="Cumulative distribution function for a Gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha` is the shape parameter and `beta` is the rate parameter of the distribution. `gamma` is the lower [incomplete gamma function][@stdlib/math/base/special/gammainc].

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-logcdf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-logcdf@esm/index.mjs';
```

#### logcdf( x, alpha, beta )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = logcdf( 2.0, 0.5, 1.0 );
// returns ~-0.047

y = logcdf( 0.1, 1.0, 1.0 );
// returns ~-2.352

y = logcdf( -1.0, 4.0, 2.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha < 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -0.5, 1.0 );
// returns NaN
```

If provided `alpha = 0`, the function evaluates the logarithm of the [CDF][cdf] for a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logcdf( 2.0, 0.0, 2.0 );
// returns 0.0

y = logcdf( -2.0, 0.0, 2.0 );
// returns -Infinity

y = logcdf( 0.0, 0.0, 2.0 );
// returns 0.0
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 1.0, 0.0 );
// returns NaN

y = logcdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### logcdf.factory( alpha, beta )

Returns a `function` for evaluating the natural logarithm of the [CDF][cdf] for a [gamma][gamma-distribution]  distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mylogcdf = logcdf.factory( 3.0, 1.5 );

var y = mylogcdf( 1.0 );
// returns ~-1.655

y = mylogcdf( 4.0 );
// returns ~-0.064
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import logcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-logcdf@esm/index.mjs';

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 3.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = logcdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, ln(F(x;α,β)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gamma-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gamma-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-gamma-logcdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-gamma-logcdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gamma-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gamma-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gamma-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gamma-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-gamma-logcdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-gamma-logcdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-gamma-logcdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-gamma-logcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gamma-logcdf/main/LICENSE

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_Distribution_Function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[@stdlib/math/base/special/gammainc]: https://github.com/stdlib-js/math-base-special-gammainc/tree/esm

</section>

<!-- /.links -->
