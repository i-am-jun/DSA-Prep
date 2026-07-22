/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
/**************************😎**************************/
const maxActiveSectionsAfterTrade=(t,e)=>{const r=t.length,n=new Array(r);let o=Number(t[0]);n[0]=o;const s=new Map;s.set(o,0);for(let e=1;e<r;e++)t[e]!==t[e-1]&&(o++,s.set(o,e)),n[e]=o;const a=new Map;for(const t of n)a.set(t,(a.get(t)||0)+1);a.has(0)||a.set(0,0);let l=[];for(let t=2;t<=o+1&&a.has(t);t+=2)l.push((a.get(t)||0)+(a.get(t-2)||0));const f=l.length;l=new Array(2*f).fill(0).map(((t,e)=>e>=f?l[e-f]:0));for(let t=f-1;t>0;t--)l[t]=Math.max(l[t<<1],l[1+(t<<1)]);const c=[...t].filter((t=>"1"===t)).length,g=(t,e)=>{let r=c;const o=n[e]-n[t];if(o<2||2===o&&1&n[e])return r;if(2===o&&!(1&n[e]))return e-s.get(n[e])+1+(s.get(n[t]+1)-t)+r;let g=0,h=0;1&n[t]||(g=(a.get(n[t]+2)||0)+(s.get(n[t]+1)-t)),1&n[e]||(h=(a.get(n[e]-2)||0)+(e-s.get(n[e])+1));const u=n[t]+1&1?n[t]+2>>1:n[t]+1>>1,m=n[e]-1&1?n[e]-2>>1:n[e]-1>>1;return Math.max(g,h,((t,e)=>{let r=0;for(t+=f,e+=f;t<e;)1&t&&(r=Math.max(r,l[t++])),1&e&&(r=Math.max(r,l[--e])),t>>=1,e>>=1;return r})(u,m))+r},h=[];for(const[t,r]of e)h.push(g(t,r));return h};