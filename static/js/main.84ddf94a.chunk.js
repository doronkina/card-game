(this["webpackJsonpcard-game"]=this["webpackJsonpcard-game"]||[]).push([[0],[,,,,function(n,t,e){n.exports=e(11)},,,,,function(n,t,e){},function(n,t,e){},function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),c=e(3),o=e.n(c),i=(e(9),e(1)),s=function(n){var t=n.hand,e=n.cards,a=n.winner,c=function(n){if(a&&t===a.hand)for(var e=0;e<a.pairs.length;e++)if(a.pairs[e]===n)return"pair".concat(e);return null};return r.a.createElement("section",{className:"hand ".concat(a&&t===a.hand&&"winning")},r.a.createElement("h1",null,"Player ",t+1),e.length&&e.map((function(n){return r.a.createElement("img",{key:"".concat(n.suit).concat(n.card),className:"card ".concat(c(n.card)),src:"http://h3h.net/images/cards/".concat(n.suit,"_").concat(n.card,".svg"),alt:"".concat(n.suit).concat(n.card)})})))},u=(e(10),{suits:["spade","heart","diamond","club"],cards:["2","3","4","5","6","7","8","9","10","J","Q","K","A"],handsNumber:2,cardsNumber:5,pairsProbability:.9}),l=function(){var n=Object(a.useState)(null),t=Object(i.a)(n,2),e=t[0],c=t[1],o=Object(a.useState)(null),l=Object(i.a)(o,2),d=l[0],h=l[1];Object(a.useEffect)((function(){e||m()}));var m=function(){var n=[],t=[],e=0;do{n.length&&(n.splice(0),t.splice(0),e=0);for(var a=0;a<u.handsNumber;a++){var r=f(n);n.push(r);var o=b(r);o.length?v(t,o)&&(t[0]&&t[0].pairs.length!==o.length?t[0]&&t[0].pairs.length<o.length&&t.splice(0,t.length,{hand:a,pairs:o}):t.push({hand:a,pairs:o})):e+=1}}while(e/u.handsNumber>1-u.pairsProbability);console.log(n),c(n),h(1===t.length?t[0]:null)},f=function(n){for(var t=[];t.length<u.cardsNumber;){var e=g();p(e,t,n)&&t.push(e)}return t},g=function(){return{suit:u.suits[Math.floor(Math.random()*u.suits.length)],card:u.cards[Math.floor(Math.random()*u.cards.length)]}},p=function(n,t,e){return!t.some((function(t){return t.suit===n.suit&&t.card===n.card}))&&(!e.length||!e.some((function(t){return t.some((function(t){return t.suit===n.suit&&t.card===n.card}))})))},b=function(n){var t={},e=[];return n.forEach((function(n){t[n.card]?(delete t[n.card],e.push(n.card)):t[n.card]=1})),e},v=function(n,t){return!n[0]||n[0].pairs.length<=t.length};return r.a.createElement("div",null,e?e.map((function(n,t){return r.a.createElement(s,{key:"".concat(n[0].suit).concat(n[0].card),hand:t,cards:n,winner:d})})):null,r.a.createElement("section",{className:"buttons"},r.a.createElement("button",{onClick:m},"Play Again")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.84ddf94a.chunk.js.map