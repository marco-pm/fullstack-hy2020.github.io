(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/4ef":function(e,t,a){},"0v46":function(e,t,a){},N1om:function(e,t,a){var n=a("sgoq")((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=n},XFRJ:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("aHCT"),a("y7hu"),a("m4Pe");var n=a("jsr+"),r=a("Wbzz"),o=a("q1tI"),l=a.n(o),i=a("u1fg");var c=function(e){var t,a=e.className,o=e.wrapperClassName,c=e.link,s=e.content,u=e.stack,d=e.bold,m=e.thickBorder,p=e.upperCase,g=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),b=l.a.createElement("div",{className:"arrow__container arrows--horizontal "+a},s.map((function(e,t){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===i.black?"white":i.black};return l.a.createElement("div",Object.assign({key:"arrow"+t,className:"arrow__wrapper"},g),l.a.createElement("div",{className:"arrow__rectangle "+(d?"bold":"")+" "+(m?"arrow__rectangle--thick-border":""),style:a},e.link?l.a.createElement(r.Link,{to:e.link},p?e.text.toUpperCase():e.text):p?e.text.toUpperCase():e.text),l.a.createElement("div",{className:"arrow__point "+(m?"arrow__point--thick-border":""),style:a}))})));return u||c?!u&&c?t=l.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},l.a.createElement(r.Link,{to:c,style:{display:"inline-block"}},b)):u&&(t=l.a.createElement("div",{className:"col-10 spacing--after "+o},l.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map((function(e){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===i.black?"white":i.black};return l.a.createElement(r.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+a},g),l.a.createElement(n.a,{flex:!0,className:"arrow__rectangle",style:t},l.a.createElement("p",{className:"arrow--stacked-title"},l.a.createElement("span",null,e.text))),l.a.createElement("div",{className:"arrow__point",style:t}))}))))):t=l.a.createElement("div",{className:"col-10 spacing--after"},b),t};c.defaultProps={className:"",wrapperClassName:""},t.a=c},Zosa:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise",9:"light-green",10:"part10-light-blue",11:"purple"}},gqR3:function(e,t){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},jyfX:function(e,t,a){var n=a("sZCt")("kebabCase",a("N1om"),a("Eszj"));n.placeholder=a("wuTn"),e.exports=n},kl3L:function(e,t,a){"use strict";a("q8oJ"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("gu/5"),a("eoYm"),a("l54/");var n=a("jsr+"),r=a("Wbzz"),o=a("q1tI"),l=a.n(o),i=a("ymbu"),c=a.n(i),s=a("c7NW"),u=a.n(s),d=a("9Koi"),m=(a("UX5x"),function(e){return String.fromCharCode(e.charCodeAt(0)-1)}),p=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},g=function(e,t){return Object.keys(c.a[t]).includes(e.toString())},b=function(e,t,a){return p(e)in c.a[a][t]},f=function(e,t,a){return!e&&g(t+1,a)||e&&b(e,t,a)},h=function(e){return"fi"===e?"Osa":"Part"},k=function(e){return"fi"===e?"/osa":"/"+e+"/part"},v=function(e){var t=e.part,a=e.letter,o=e.lang,i=Object(d.a)().t;return l.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!a&&g(t-1,o)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+k(o)+(t-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",t-1),l.a.createElement("b",null,i("previousPart")))),f(a,t,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):a?"a"!==a?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+k(o)+t+"/"+u()(c.a[o][t][m(a)]),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",""+t+m(a)),l.a.createElement("b",null,i("previousPart")))),f(a,t,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):g(t-1,o)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+k(o)+(t-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",t-1),l.a.createElement("b",null,i("previousPart")))),f(a,t,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):l.a.createElement(n.a,{className:"push-right-1"}):l.a.createElement(n.a,{className:"push-right-1"}),!a&&g(t+1,o)?l.a.createElement(r.Link,{to:""+k(o)+(t+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",t+1),l.a.createElement("b",null,i("nextPart")))):a?b(a,t,o)?l.a.createElement(r.Link,{to:""+k(o)+t+"/"+u()(c.a[o][t][p(a)]),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",""+t+p(a)),l.a.createElement("b",null,i("nextPart")))):g(t+1,o)?l.a.createElement(r.Link,{to:""+k(o)+(t+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",t+1),l.a.createElement("b",null,i("nextPart")))):l.a.createElement(n.a,{className:"push-left-1"}):l.a.createElement(n.a,{className:"push-left-1"}))};v.defaultProps={part:void 0,letter:void 0},t.a=v},"l54/":function(e,t,a){},m4Pe:function(e,t,a){},mt4B:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("rXWv");var n=a("q1tI"),r=a.n(n);var o=function(e){var t=e.className,a=e.backgroundColor,n=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className","backgroundColor"]),o=a?{backgroundColor:a}:null;return r.a.createElement("div",Object.assign({className:"banner "+t,style:o},n))};o.defaultProps={className:""}},rXWv:function(e,t,a){},tkMx:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z})),a.d(t,"contentPageQuery",(function(){return W}));a("q8oJ"),a("8npG"),a("m210"),a("4DPX"),a("rzGZ"),a("pJf4"),a("YbXK"),a("cFtU"),a("xPXs");var n=a("q1tI"),r=a.n(n),o=a("XFRJ"),l=a("y2O/"),i=a.n(l),c=a("mt4B"),s=a("9Koi"),u=a("jsr+"),d=(a("/4ef"),function(e){var t=e.part,a=e.letter,n=Object(s.a)(),o=n.t,l=n.i18n.language,i="fi"===l?"osa"+t:"part"+t;return r.a.createElement(u.a,{flex:!0,className:"container spacing",centered:!0},r.a.createElement("a",{className:"edit-link",target:"__BLANK",href:"zh"===l?"https://github.com/RichardStark/fullstack-hy2020.github.io/edit/source/src/content/"+t+"/"+l+"/"+i+a+".md":"https://github.com/fullstack-hy2020/fullstack-hy2020.github.io/edit/source/src/content/"+t+"/"+l+"/"+i+a+".md"},r.a.createElement("span",null,o("proposeChanges"))))}),m=a("CN8t"),p=a("Bl7J"),g=a("76ZC"),b=a.n(g),f=a("kl3L"),h=a("vrFN"),k=(a("0v46"),a("XSxc")),v=a("Wbzz"),y=a("jyfX"),E=a.n(y),N=a("ymbu"),C=a.n(N),x=a("c7NW"),w=a.n(x),j=a("xB9W");var I=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")).map((function(e){return e.id=E()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}}));a.setState({headings:e}),window.addEventListener("scroll",a.scrollHandler)},a.scrollHandler=function(){a.scrollTimer&&clearTimeout(a.scrollTimer),a.scrollTimer=setTimeout((function(){var e=window.scrollY,t=a.state.headings[0],n=a.state.headings,r=Array.isArray(n),o=0;for(n=r?n:n[Symbol.iterator]();;){var l;if(r){if(o>=n.length)break;l=n[o++]}else{if((o=n.next()).done)break;l=o.value}var i=l,c=document.getElementById(i.id);if(c&&c.offsetTop>=e)break;t=i}a.state.selectedItem!==t.id&&a.setState({selectedItem:t.id})}),50)},a.loopThroughPartsNode=function(e){var t=a.state.headings,n=a.props,o=n.part,l=n.letter,i=n.currentPath,c=n.currentPartTitle,s=n.colorCode,u=n.lang,d=[];for(var m in e)console.log(Object(j.a)(u,o,"/"+w()(e[m]))),c!==e[m]?d.push(r.a.createElement(v.Link,{key:m,className:"left-navigation-link",style:{borderColor:s},to:Object(j.a)(u,o,"/"+w()(e[m]))},m+" "+e[m])):d.push(r.a.createElement(k.a,{containerClassName:"accordion--side-navigation",style:{color:s},titleStyle:{backgroundColor:s,borderColor:s},initiallyOpened:!0,key:m,title:l+" "+e[m],selectedItem:a.state.selectedItem,list:t.map((function(e){return{id:e.id,href:i+"#"+e.id,text:e.text}}))}));return d},a.state={headings:[],selectedItem:null},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler)},o.render=function(){var e=this.props.part;return r.a.createElement(u.a,{className:"scroll-navigation-container"},r.a.createElement(u.a,{className:"scroll-navigation-container-inner"},r.a.createElement(u.a,{tag:"ul",dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(C.a[this.props.lang][e]))))},n}(n.Component);I.defaultProps={className:"",lang:"fi"};var R=I,A=a("K4iA"),T=a("u1fg"),L=a("GkXj"),S=a.n(L),P=a("gqR3"),_=a.n(P),F=a("5I0T"),G=a.n(F),D=a("Zosa"),O=a("33yf"),B=a.n(O);function M(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var z=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleScroll=function(){window.scrollY>300&&!a.state.showArrowUp?a.setState({showArrowUp:!0}):window.scrollY<=300&&a.state.showArrowUp&&a.setState({showArrowUp:!1})},a.state={h1Title:"",otherTitles:"",showArrowUp:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a")),t=document.querySelector("h1"),a=document.querySelectorAll("h3"),n=Array.from(a).map((function(e){return e.innerText})),r=this.props.data.markdownRemark.frontmatter;e.map((function(e){return e.style="border-color: "+T[D.a[r.part]],e.classList.contains("language-switcher__language")?e.target=e.target:e.target="_blank",e.onmouseover=function(){e.style.backgroundColor=T[D.a[r.part]]},e.onmouseleave=function(){e.style.backgroundColor="transparent"},null})),this.setState({h1Title:t.innerText,otherTitles:M(n)}),window.addEventListener("scroll",this.handleScroll)},l.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},l.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,a=e.html,n=t.mainImage,l=t.letter,s=t.part,g=t.lang,k=T[D.a[s]],v={replace:function(e){var t=e.type,a=e.name,n=e.attribs,o=e.children;return"tag"===t&&"picture"===a?r.a.createElement("picture",null,r.a.createElement("img",{style:{borderColor:k},alt:"fullstack content",src:o[0].attribs.src})):"tag"===t&&"pre"===a?r.a.createElement("pre",null,S()(o,v)):"tag"===t&&"content"===n.class?r.a.createElement(u.a,{className:"course-content"},r.a.createElement(u.a,{className:"course-content-inner"},S()(o,v))):"tag"===t&&"tasks"===n.class?r.a.createElement(c.a,{style:{backgroundColor:k},className:"spacing tasks content-banner"},r.a.createElement(u.a,{className:"course-content",style:{borderColor:k,backgroundColor:"transparent"}},r.a.createElement(u.a,{className:"course-content-inner"},"pre"===o.name?r.a.createElement("pre",null,S()(o,v)):S()(o,v)))):void 0}};return r.a.createElement(p.a,null,r.a.createElement(h.a,{lang:g,title:"Fullstack "+("fi"===g?"osa":"part")+s+" | "+this.state.h1Title,description:_.a[g],keywords:[].concat(M(G.a),[this.state.h1Title],M(this.state.otherTitles))}),this.state.showArrowUp&&r.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},r.a.createElement("img",{src:i.a,alt:"arrow-up"})),r.a.createElement("div",{className:"course-container spacing--after"},r.a.createElement(c.a,{className:"part-main__banner spacing--mobile--small",backgroundColor:k,style:{backgroundImage:"url("+B.a.resolve(n.publicURL)+")",backgroundColor:k}},r.a.createElement("div",{className:"container spacing--after"},r.a.createElement(o.a,{className:"breadcrumb",content:[{backgroundColor:k,text:"Fullstack",link:"/"+("fi"===g?"":g+"/")+"#course-contents"},{backgroundColor:k,text:("fi"===g?"Osa":"Part")+" "+s,link:Object(j.a)(g,s)},{backgroundColor:T.black,text:C.a[g][s][l]}]}))),r.a.createElement(u.a,{className:"course"},r.a.createElement(R,{part:s,letter:l,lang:g,currentPartTitle:C.a[g][s][l],currentPath:Object(j.a)(g,s,"/"+w()(C.a[g][s][l])),colorCode:k}),r.a.createElement(u.a,{className:"course-content-container"},r.a.createElement(u.a,{className:"course-content",autoBottomMargin:!0},r.a.createElement(u.a,{className:"course-content-inner"},r.a.createElement("p",{className:"col-1 letter",style:{borderColor:k}},l),r.a.createElement(A.a,{headingLevel:"h1",text:C.a[g][s][l]}))),b()(a,v))),r.a.createElement(d,{part:s,letter:l,lang:g}),r.a.createElement(f.a,{part:s,letter:l,lang:g})),r.a.createElement(m.a,{lang:g}))},n}(n.Component),W="3474053423"},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","smartly-purple":"#f8f5f9","part10-light-blue":"#AFF4FE","purple":"#D4A8E2"}')},xB9W:function(e,t,a){"use strict";t.a=function(e,t,a){return void 0===a&&(a=""),"fi"===e?"/osa"+t+a:"/"+e+"/part"+t+a}},xPXs:function(e,t,a){},"y2O/":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"},y7hu:function(e,t,a){"use strict";a("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},ymbu:function(e,t){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"End to end -testaus"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria",c:"Redux-sovelluksen kommunikointi palvelimen kanssa",d:"connect"},7:{a:"React-router",b:"custom-hookit",c:"Lisää tyyleistä",d:"Webpack",e:"Luokkakomponentit, Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"},9:{},10:{},11:{}},en:{0:{a:"General info",b:"Fundamentals of Web apps"},1:{a:"Introduction to React",b:"JavaScript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend",c:"User administration",d:"Token authentication"},5:{a:"Login in frontend",b:"props.children and proptypes",c:"Testing React apps",d:"End to end -testing"},6:{a:"Flux-architecture and Redux",b:"Many reducers",c:"Communicating with server in a redux application",d:"connect"},7:{a:"React-router",b:"Custom hooks",c:"More about styles",d:"Webpack",e:"Class components, Miscellaneous",f:"Exercises: extending the bloglist"},8:{a:"GraphQL-server",b:"React and GraphQL",c:"Database and user administration",d:"Login and updating the cache",e:"Fragments and subscriptions"},9:{a:"Background and introduction",b:"First steps with Typescript",c:"Typing the express app",d:"React with types"},10:{a:"Introduction to React Native",b:"React Native basics",c:"Communicating with server",d:"Testing and extending our application"},11:{a:"Introduction to CI/CD",b:"Getting started with GitHub Actions",c:"Deployment",d:"Keeping green",e:"Expanding Further"}},zh:{0:{a:"基础知识",b:"Web 应用的基础设施"},1:{a:"React 简介",b:"JavaScript",c:"组件状态，事件处理",d:"深入React 应用调试"},2:{a:"从渲染集合到模块学习",b:"表单",c:"从服务器获取数据",d:"在服务端将数据Alert出来",e:"给React应用加点样式"},3:{a:"Node.js 与 Express",b:"把应用部署到网上",c:"将数据存入MongoDB",d:"ESLint与代码检查"},4:{a:"从后端结构到测试入门",b:"测试后端应用",c:"用户管理",d:"密钥认证"},5:{a:"完成前台的登录功能",b:"props.children 与 proptypes",c:"测试React 应用",d:"端到端测试"},6:{a:"Flux架构与Redux",b:"再来点 reducers",c:"在Redux应用中与后端通信",d:"connect方法"},7:{a:"React-router",b:"自定义 hooks",c:"样式进阶",d:"Webpack",e:"各种各样的Class components",f:"练习：扩展你的博客列表"},8:{a:"GraphQL服务器",b:"React 与 GraphQL",c:"数据库与用户管理",d:"登录与更新缓存",e:"Fragments 与 subscriptions"},9:{a:"背景与介绍",b:"Typescript的一小步",c:"Typescript版的express应用",d:"利用Typescript编写React应用"},10:{a:"React Native 介绍",b:"React Native 入门",c:"与服务端通信",d:"测试与扩展我们的应用"},11:{a:"CI/CD 简介",b:"开始认识 GitHub Actions 吧",c:"部署",d:"保持健康状态",e:"再扩展一下"}},es:{0:{a:"Información general",b:"Fundamentos de las aplicaiones web"},1:{a:"Introducción a React",b:"JavaScript",c:"Estado del componente, controladores de eventos",d:"Un estado más complejo, depurando aplicaciones React"},2:{a:"Renderizando una colección, módulos",b:"Formularios",c:"Obteniendo datos del servidor",d:"Alterando datos en el servidor",e:"Agregar estilos a la aplicación React"},3:{a:"Node.js y Express",b:"Implementación de la aplicación en Internet",c:"Guardando datos en MongoDB",d:"Validación y ESLint"},4:{a:"Estructura de la aplicación backend, introducción a las pruebas",b:"Porbando el backend",c:"Administración de usuarios",d:"Autenticación de token"},5:{a:"Iniciar sesión en la interfaz",b:"props.children y proptypes",c:"Probando aplicaciones React",d:"Pruebas de extremo a extremo"},6:{a:"Flux-architecture y Redux",b:"Muchos reducers",c:"Comunicarse con el servidor en una aplicación redux",d:"conectar"},7:{a:"React-router",b:"Hooks personalizados",c:"Más sobre estilos",d:"Webpack",e:"Componentes de clases, varios",f:"Ejercicios: ampliar la lista de blogs"},8:{a:"Servidor GraphQL",b:"React y GraphQL",c:"Administración de bases de datos y usuarios",d:"Iniciar sesión y actualizar la caché",e:"Fragmentos y suscripciones"},9:{a:"Antecedentes e introducción",b:"Primeros pasos con Typescript",c:"Escribiendo la aplicación express",d:"React con tipos"},10:{a:"Introducción a React Native",b:"Conceptos básicos de React Native",c:"Comunicandose con el servidor",d:"Probar y ampliar nuestra aplicación"},11:{a:"Introducción a CI/CD",b:"Introducción a las acciones de Github",c:"Despliegue",d:"Manteniéndose verde",e:"Expandiéndose aún más"}}}}}]);
//# sourceMappingURL=component---src-templates-content-template-js-dae400591bbe6c344419.js.map