(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),u=n.n(o),c=(n(14),n(16),n(1)),s=n(2),i=n(4),l=n(3),p=n(5),d=["animal","beaker","fozzie","gonzo","kermit","miss-piggy","rizzo","rowlf","sam-eagle","scooter","statler-and-waldorf","swedish-chef"];function h(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}function m(e){var t="images/"+e.name+".jpg";return a.a.createElement("button",null,a.a.createElement("img",{src:t,alt:e.name,onClick:e.onClick}))}var f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderMuppetButton",value:function(e){var t=this,n=this.props.muppets[e];return a.a.createElement(m,{name:n,onClick:function(){return t.props.onClick(n)}})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",null,this.renderMuppetButton(0),this.renderMuppetButton(1),this.renderMuppetButton(2),this.renderMuppetButton(3)),a.a.createElement("div",null,this.renderMuppetButton(4),this.renderMuppetButton(5),this.renderMuppetButton(6),this.renderMuppetButton(7)),a.a.createElement("div",null,this.renderMuppetButton(8),this.renderMuppetButton(9),this.renderMuppetButton(10),this.renderMuppetButton(11)))}}]),t}(a.a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={shuffledMuppets:h(d),score:0,topscore:0,clickedMuppets:[],message:"Clicky Game"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state,n=t.score,r=t.topscore,a=t.clickedMuppets;if(a.includes(e))n=0,this.setState({score:0,clickedMuppets:[],message:"You guessed incorrectly! Start over."});else{r=++n>r?n:r;var o="You guessed correctly!";a=a.concat([e]),12===n&&(n=0,a=[],o="Awesome! You got them all!"),this.setState({shuffledMuppets:h(d),score:n,topscore:r,clickedMuppets:a,message:o})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.message,r=t.score,o=t.topscore,u=t.shuffledMuppets;return a.a.createElement("div",null,a.a.createElement("h2",null,"Click an image to earn a point, but don't click any more than once."),a.a.createElement("h1",null,n),a.a.createElement("h1",null,"Score: ",r," \xa0\xa0 Top Score: ",o),a.a.createElement(f,{muppets:u,onClick:function(t){return e.handleClick(t)}}))}}]),t}(a.a.Component);u.a.render(a.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.29e04539.chunk.js.map