(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),i=a("NmYn"),o=a.n(i),r=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),b=a("QH2O"),m=a.n(b),u=a("qKvR"),g=function(e){var t,a=e.title,A=e.theme,n=e.tabs,i=void 0===n?[]:n;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===A,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},p=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,A=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||A,i=n.baseUrl,o=n.subDirectory,c=i+"/edit/"+n.branch+o+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+p.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:p.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),w=a("dI71"),f=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,n=A.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===n,c=new RegExp(n+"/?(#.*)?$"),l=A.replace(c,a);return Object(u.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(u.b)(r.Link,{className:f.link,to:""+l},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},i))))))},t}(n.a.Component),O=a("MjG9"),B=a("CzIb"),T=a("Asxa"),E=a("OIbQ"),N=a.n(E),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(T.c,{className:N.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,n=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,b=t.titleType,m=s.tabs,p=s.title,w=s.theme,f=s.description,T=s.keywords,E=s.date,N=Object(B.a)().interiorTheme,v=Object(r.useStaticQuery)("2456312558").site.pathPrefix,y=v?A.pathname.replace(v,""):A.pathname,Q=m?y.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",P=w||N;return Object(u.b)(l.a,{tabs:m,homepage:!1,theme:P,pageTitle:p,pageDescription:f,pageKeywords:T,titleType:b},Object(u.b)(g,{title:n?Object(u.b)(n,null):p,label:"label",tabs:m,theme:P}),m&&Object(u.b)(h,{title:p,slug:y,tabs:m,currentTab:Q}),Object(u.b)(O.a,{padded:!0},a,Object(u.b)(x,{relativePagePath:d}),Object(u.b)(k,{date:E})),Object(u.b)(j.a,{pageContext:t,location:A,slug:y,tabs:m,currentTab:Q}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},cFsu:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));var A=a("wx14"),n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("qKvR"),["components"]),c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=l("Row"),d=l("Column"),b=l("ArticleCard"),m={_frontmatter:c},u=o.a;function g(e){var t=e.components,a=Object(n.a)(e,r);return Object(i.b)(u,Object(A.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"Row"},Object(i.b)(d,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(b,{color:"dark",title:"Migrating application across clusters",href:"http://ibm.biz/CP4MCMMigrateAppsDemo",author:"Seamlessly migrate applications among clouds to adapt to changing needs",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAd5ZBCs0n//EABoQAAICAwAAAAAAAAAAAAAAAAIBAAMQEiH/2gAIAQEAAQUCj6kA5O3Qv//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwFsf//EABcRAQADAAAAAAAAAAAAAAAAAAABAhL/2gAIAQIBAT8BZvL/xAAYEAACAwAAAAAAAAAAAAAAAAAQEQABMv/aAAgBAQAGPwIZopT/xAAbEAABBQEBAAAAAAAAAAAAAAAAAREhQTFRwf/aAAgBAQABPyHLkkIz0oy8BRNLhjp//9oADAMBAAIAAwAAABAY7//EABYRAQEBAAAAAAAAAAAAAAAAAAABIf/aAAgBAwEBPxBY4//EABgRAQADAQAAAAAAAAAAAAAAAAEAETGx/9oACAECAQE/EKdgCzs//8QAGxABAAMBAAMAAAAAAAAAAAAAAQARITFBgcH/2gAIAQEAAT8QVoNl5gOgYOiTrEwke36jh6Iybx8n/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"qwik1",title:"qwik1",src:"/tech-academy-dallas/static/e76af688a0de224806170f6a493e33df/2e753/qwik1.jpg",srcSet:["/tech-academy-dallas/static/e76af688a0de224806170f6a493e33df/69549/qwik1.jpg 288w","/tech-academy-dallas/static/e76af688a0de224806170f6a493e33df/473e3/qwik1.jpg 576w","/tech-academy-dallas/static/e76af688a0de224806170f6a493e33df/2e753/qwik1.jpg 1152w","/tech-academy-dallas/static/e76af688a0de224806170f6a493e33df/d8820/qwik1.jpg 1270w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-esd-qwikdemos-index-mdx-74f945d4c221279aa1dc.js.map