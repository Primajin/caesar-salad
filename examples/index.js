(()=>{var A=Object.defineProperty;var y=(t,e)=>{for(var o in e)A(t,o,{get:e[o],enumerable:!0})};var f={};y(f,{applyKey:()=>l,isInLatinLowercaseRange:()=>m,isInLatinUppercaseRange:()=>g,isWithinLatinRange:()=>h,makeKeyArray:()=>C});var g=t=>t>=65&&t<=90,m=t=>t>=97&&t<=122,h=t=>t>=65&&t<=122,l=(t,e)=>{let o="";if(!e||e.length===0)return t;let n=0;for(let a of t){let r=a.codePointAt(0);g(r)?(o+=String.fromCodePoint((r-65+e[n%e.length])%26+65),n++):m(r)?(o+=String.fromCodePoint((r-97+e[n%e.length])%26+97),n++):o+=a}return o},C=t=>{let e=[];for(let o of t){let n=o.codePointAt(0);h(n)&&e.push((n-65)%32)}return e};var p={};y(p,{animateTextCypher:()=>w,generateKeyArray:()=>u});var d=t=>new Promise(e=>setTimeout(e,t)),u=(t,e)=>{let o=t.replaceAll(/\s/g,""),n=[];for(let a of o)n.push(e);return n},w=async(t,e=5,o=0,n=!1)=>{let a=t.textContent,r=u(a,e),x=async(s,i)=>{for(let c=s-1;c>=0;c--)await d(o),r[i]=c,t.textContent=l(a,r)};if(n)for(let s=r.length-1,i=r[s];s>=0;s--)await x(i,s);else for(let[s,i]of r.entries())await x(i,s)};globalThis.caesar={cypher:f,animations:p};})();
