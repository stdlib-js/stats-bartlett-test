// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-cdf@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-group@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@esm/index.mjs";function c(s){var t,e,i,r,n,o;for(t=0,e=0,r=0,i=s.length,n=0;n<i;n++)r+=(t=(o=s[n])-e)*(o-(e+=t/(n+1)));return r/(n-1)}function g(s,e){return t(e)?h(e,"alpha")&&(s.alpha=e.alpha,!d(s.alpha)||p(s.alpha))?new TypeError(r("0Rk8h","alpha",s.alpha)):h(e,"groups")&&(s.groups=e.groups,!l(s.groups))?new TypeError(r("0Rk8t","groups",s.groups)):null:new TypeError(r("0Rk2h",e))}function u(s){var e,i,n;if(i=4,e=!0,arguments.length>0){if(!t(s))throw new TypeError(r("0Rk3X",s));if(h(s,"digits")){if(!m(s.digits))throw new TypeError(r("0Rk3b","digits",s.digits));i=s.digits}if(h(s,"decision")){if(!f(s.decision))throw new TypeError(r("0Rk30","decision",s.decision));e=s.decision}}return n="",n+=this.method,n+="\n\n",n+="Null hypothesis: The variances in all groups are the same.",n+="\n\n",n+="    pValue: "+j(this.pValue,-i)+"\n",n+="    statistic: "+j(this.statistic,-i)+"\n",n+="    df: "+j(this.df,-i),n+="\n\n",e&&(n+="Test Decision: ",this.rejected?n+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":n+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",n+="\n"),n}function v(){var l,d,p,h,m,f,j,v,b,w,x,y,E,R,k,T,q,V,O,A;if(b=[],w={},t(arguments[(d=arguments.length)-1])&&(l=arguments[d-1],d-=1,R=g(w,l)))throw R;if(w.groups){if(m=o(arguments[0],w.groups),(d=(h=i(m)).length)<2)throw new Error(r("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",h));for(A=0;A<d;A++)b.push(m[h[A]])}else for(A=0;A<d;A++)b.push(arguments[A]);for(j=0,p=0,v=0,k=0,O=(V=new Array(d)).slice(),A=0;A<d;A++){if(E=b[A],!s(E))throw new TypeError(r("0Rk8q",E));if(0===E.length)throw new Error(r("0Rk8r",E));V[A]=E.length-1,j+=V[A],p+=1/V[A],O[A]=c(E),v+=V[A]*O[A],k+=V[A]*a(O[A])}if(v/=j,(f=void 0===w.alpha?.05:w.alpha)<0||f>1)throw new RangeError(r("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",f));return y=j*a(v)-k,x=1-n(y/=1+(p-1/j)/(3*(d-1)),q=d-1),e(T={},"rejected",x<=f),e(T,"alpha",f),e(T,"pValue",x),e(T,"statistic",y),e(T,"df",q),e(T,"method","Bartlett's test of equal variances"),e(T,"print",u),T}export{v as default};
//# sourceMappingURL=index.mjs.map
