// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-cdf@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-group@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.1.0-esm/index.mjs";function c(s){var t,e,i,r,n,o;for(t=0,e=0,r=0,i=s.length,n=0;n<i;n++)r+=(t=(o=s[n])-e)*(o-(e+=t/(n+1)));return r/(n-1)}function v(s,e){return t(e)?p(e,"alpha")&&(s.alpha=e.alpha,!a(s.alpha)||d(s.alpha))?new TypeError(r("0th8P,GU","alpha",s.alpha)):p(e,"groups")&&(s.groups=e.groups,!l(s.groups))?new TypeError(r("0th8Z,GX","groups",s.groups)):null:new TypeError(r("0th2V,FD",e))}function g(s){var e,i,n;if(i=4,e=!0,arguments.length>0){if(!t(s))throw new TypeError(r("0th3L,Gc",s));if(p(s,"digits")){if(!m(s.digits))throw new TypeError(r("0th3P,Fv","digits",s.digits));i=s.digits}if(p(s,"decision")){if(!j(s.decision))throw new TypeError(r("0th2o,GE","decision",s.decision));e=s.decision}}return n="",n+=this.method,n+="\n\n",n+="Null hypothesis: The variances in all groups are the same.",n+="\n\n",n+="    pValue: "+f(this.pValue,-i)+"\n",n+="    statistic: "+f(this.statistic,-i)+"\n",n+="    df: "+f(this.df,-i),n+="\n\n",e&&(n+="Test Decision: ",this.rejected?n+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":n+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",n+="\n"),n}function u(){var l,a,d,p,m,j,f,u,b,w,x,y,E,T,G,V,F,P,q,D;if(b=[],w={},t(arguments[(a=arguments.length)-1])&&(l=arguments[a-1],a-=1,T=v(w,l)))throw T;if(w.groups){if(m=o(arguments[0],w.groups),(a=(p=i(m)).length)<2)throw new Error(r("0th8W,GY","groups",p));for(D=0;D<a;D++)b.push(m[p[D]])}else for(D=0;D<a;D++)b.push(arguments[D]);for(f=0,d=0,u=0,G=0,q=(P=new Array(a)).slice(),D=0;D<a;D++){if(E=b[D],!s(E))throw new TypeError(r("0th8X,GZ",E));if(0===E.length)throw new Error(r("0th8Y,Ga",E));P[D]=E.length-1,f+=P[D],d+=1/P[D],q[D]=c(E),u+=P[D]*q[D],G+=P[D]*h(q[D])}if(u/=f,(j=void 0===w.alpha?.05:w.alpha)<0||j>1)throw new RangeError(r("0th8V,Gb","alpha",j));return y=f*h(u)-G,x=1-n(y/=1+(d-1/f)/(3*(a-1)),F=a-1),e(V={},"rejected",x<=j),e(V,"alpha",j),e(V,"pValue",x),e(V,"statistic",y),e(V,"df",F),e(V,"method","Bartlett's test of equal variances"),e(V,"print",g),V}export{u as default};
//# sourceMappingURL=index.mjs.map
