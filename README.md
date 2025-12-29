<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# bartlettTest

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute Bartlett’s test for equal variances.

<section class="intro">

Bartlett's test is used to test the null hypothesis that the variances of k groups are equal against the alternative that at least two of them are different.

For `k` groups each with `n_i` observations, the test statistic is

<!-- <equation class="equation" label="eq:bartlett-test-statistic" align="center" raw="\chi^2 = \frac{\displaystyle N\ln(S^2) - \sum_{i=0}^{k-1} n_i \ln(S_i^2)}{\displaystyle 1 + \frac{1}{3(k-1)}\left(\sum_{i=0}^{k-1} \frac{1}{n_i} - \frac{1}{N}\right)}" alt="Equation for Bartlett's test statistic."> -->

```math
\chi^2 = \frac{\displaystyle N\ln(S^2) - \sum_{i=0}^{k-1} n_i \ln(S_i^2)}{\displaystyle 1 + \frac{1}{3(k-1)}\left(\sum_{i=0}^{k-1} \frac{1}{n_i} - \frac{1}{N}\right)}
```

<!-- <div class="equation" align="center" data-raw-text="\chi^2 = \frac{\displaystyle N\ln(S^2) - \sum_{i=0}^{k-1} n_i \ln(S_i^2)}{\displaystyle 1 + \frac{1}{3(k-1)}\left(\sum_{i=0}^{k-1} \frac{1}{n_i} - \frac{1}{N}\right)}" data-equation="eq:bartlett-test-statistic">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@4b1db4ebd815eb54bf53a3fa132b992604743d9c/lib/node_modules/@stdlib/stats/bartlett-test/docs/img/equation_bartlett-test-statistic.svg" alt="Equation for Bartlett's test statistic.">
    <br>
</div> -->

<!-- </equation> -->

where `N` is the total number of observations, `S_i` are the biased group-level variances and `S^2` is a (biased) pooled estimate for the variance. Under the null hypothesis, the test statistic follows a _chi-square_ distribution with `df = k - 1` degrees of freedom.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-bartlett-test
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var bartlettTest = require( '@stdlib/stats-bartlett-test' );
```

#### bartlettTest( a\[,b,...,k]\[, opts] )

For input arrays `a`, `b`, ... holding numeric observations, this function calculates Bartlett’s test, which tests the null hypothesis that the variances in all `k` groups are the same.

```javascript
// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = bartlettTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': 2,
        'pValue': ~0.573,
        'statistic': ~1.112,
        ...
    }
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **groups**: an `array` of group indicators. If set, the function assumes that only a single numeric array is provided holding all observations.

By default, the test is carried out at a significance level of `0.05`. To choose a custom significance level, set the `alpha` option.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = bartlettTest( x, y, z, {
    'alpha': 0.01
});
/* returns
    {
        'rejected': false,
        'alpha': 0.01,
        'df': 2,
        'pValue': ~0.573,
        'statistic': ~1.112,
        ...
    }
*/
```

The function provides an alternate interface by supplying an array of group indicators to the `groups` option. In this case, it is assumed that only a single numeric array holding all observations is provided to the function.

<!-- eslint-disable array-element-newline -->

```javascript
var arr = [
    2.9, 3.0, 2.5, 2.6, 3.2,
    3.8, 2.7, 4.0, 2.4,
    2.8, 3.4, 3.7, 2.2, 2.0
];
var groups = [
    'a', 'a', 'a', 'a', 'a',
    'b', 'b', 'b', 'b',
    'c', 'c', 'c', 'c', 'c'
];
var out = bartlettTest( arr, {
    'groups': groups
});
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = bartlettTest( x, y, z );
console.log( out.print() );
/* =>
    Bartlett's test of equal variances

    Null hypothesis: The variances in all groups are the same.

        pValue: 0.5735
        statistic: 1.1122
        df: 2

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bartlettTest = require( '@stdlib/stats-bartlett-test' );

// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = bartlettTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': 2,
        'pValue': ~0.573,
        'statistic': ~1.112,
        ...
    }
*/

var table = out.print();
/* returns
    Bartlett's test of equal variances

    Null hypothesis: The variances in all groups are the same.

        pValue: 0.5735
        statistic: 1.1122
        df: 2

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-vartest`][@stdlib/stats/vartest]</span><span class="delimiter">: </span><span class="description">two-sample F-test for equal variances.</span>
-   <span class="package-name">[`@stdlib/stats-levene-test`][@stdlib/stats/levene-test]</span><span class="delimiter">: </span><span class="description">Levene's test for equal variances.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-bartlett-test.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-bartlett-test

[test-image]: https://github.com/stdlib-js/stats-bartlett-test/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-bartlett-test/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-bartlett-test/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-bartlett-test?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-bartlett-test.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-bartlett-test/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-bartlett-test/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-bartlett-test/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-bartlett-test/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-bartlett-test/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-bartlett-test/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-bartlett-test/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-bartlett-test/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-bartlett-test/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/vartest]: https://github.com/stdlib-js/stats-vartest

[@stdlib/stats/levene-test]: https://github.com/stdlib-js/stats-levene-test

<!-- </related-links> -->

</section>

<!-- /.links -->
