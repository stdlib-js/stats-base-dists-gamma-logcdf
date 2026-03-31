"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=u(function(R,n){
var s=require('@stdlib/stats-base-dists-gamma-cdf/dist'),v=require('@stdlib/math-base-special-ln/dist');function d(e,r,i){return v(s(e,r,i))}n.exports=d
});var o=u(function(j,f){
var y=require('@stdlib/utils-constant-function/dist'),N=require('@stdlib/stats-base-dists-degenerate-logcdf/dist').factory,g=require('@stdlib/math-base-special-gammainc/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/constants-float64-pinf/dist'),F=require('@stdlib/constants-float64-ninf/dist'),l=require('@stdlib/math-base-special-ln/dist');function I(e,r){if(c(e)||c(r)||e<0||r<=0)return y(NaN);if(e===0)return N(0);return i;function i(t){return t<=0?F:t===m?0:l(g(t*r,e))}}f.exports=I
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=a(),O=o();x(q,"factory",O);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
