(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),p=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,b=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),v=a("dI71"),x=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,b=new RegExp(r+"/?(#.*)?$"),s=n.replace(b,a);return Object(m.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(m.b)(l.Link,{className:x.link,to:""+s},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:x.list},o))))))},t}(r.a.Component),N=a("MjG9"),y=a("CzIb"),w=a("Asxa"),T=a("OIbQ"),k=a.n(T),P=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:k.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,p=c.tabs,O=c.title,v=c.theme,x=c.description,w=c.keywords,T=c.date,k=Object(y.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,A=I?n.pathname.replace(I,""):n.pathname,D=p?A.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",E=v||k;return Object(m.b)(s.a,{tabs:p,homepage:!1,theme:E,pageTitle:O,pageDescription:x,pageKeywords:w,titleType:u},Object(m.b)(h,{title:r?Object(m.b)(r,null):O,label:"label",tabs:p,theme:E}),p&&Object(m.b)(f,{title:O,slug:A,tabs:p,currentTab:D}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d}),Object(m.b)(P,{date:T})),Object(m.b)(g.a,{pageContext:t,location:n,slug:A,tabs:p,currentTab:D}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},MOXm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),b={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=s("AnchorLinks"),d=s("AnchorLink"),u={_frontmatter:b},p=i.a;function m(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)(p,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"AnchorLinks"},Object(o.b)(d,{mdxType:"AnchorLink"},"Synopsis"),Object(o.b)(d,{mdxType:"AnchorLink"},"Deliverables"),Object(o.b)(d,{mdxType:"AnchorLink"},"Goals"),Object(o.b)(d,{mdxType:"AnchorLink"},"Guidelines"),Object(o.b)(d,{mdxType:"AnchorLink"},"Resources")),Object(o.b)("hr",null),Object(o.b)("h2",null,"Synopsis"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Advise the Client on the use of Event-Driven/Near Real-time Integration Patterns, Technologies and Implementation Strategies. "),Object(o.b)("li",{parentName:"ol"},"Students will have the opportunity to complete an end-to-end, well scripted demo, can be used to highlight some of the key features and functionality of the IBM Event Streams offering running in CP4i"),Object(o.b)("li",{parentName:"ol"},"Students will have the opportunity to follow a more complex, less scripted, demo experience that will result in the creation of a near real-time inventory management system (MVP).",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Solution design."),Object(o.b)("li",{parentName:"ul"},"KStreams API implementation"),Object(o.b)("li",{parentName:"ul"},"GitOps deployment with Day-2 operations."))),Object(o.b)("li",{parentName:"ol"},"In this session you will learn how to use event-driven / near real-time integration patterns and technologies to develop a simple streaming MVP application.")),Object(o.b)("hr",null),Object(o.b)("h2",null,"Deliverables"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Capture a screen shot of your final progress with this Lab. ",Object(o.b)("a",{href:"https://ibm.ent.box.com/folder/164731027772?s=27nu5hrsiotjgefurj3v09oz7meo7hrd"},"Upload Screen Shots Here Please"),".")),Object(o.b)("hr",null),Object(o.b)("h2",null,"Goals"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Develop a core understanding of the main components that make up the IBM Events Stream offering.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Develop an extended body of knowledge and a deeper understand of key event-driven use cases, event-drive architecture patterns, and near real-time integration patterns.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Develop knowledge and skills that can be used to explain how an event-driven integration approach can be used to solve a client’s IT and business goals.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Develop skills that can be used to assess a set of client requirements or PoC goals and propose an event-driven solution approach.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Complete a hands-on workshop exercise focused on EDA concepts, design patterns.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Establish an initial point of view for adopting GitOps methods and practices for event streams implementations."))),Object(o.b)("hr",null),Object(o.b)("h2",null,"Guidelines"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This session was designed with the recognition that not every student will have the same level of knowledge of IBM Event Streams or event-driven architecture.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This session was designed with ",Object(o.b)("strong",{parentName:"p"},"two (2) entry points")," or tracks that a student can follow depending on skill level."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Beginner Journey"),":  This Journey is an entry level starting point and offers a ",Object(o.b)("strong",{parentName:"li"},"Demonstration Event Stream from A to Z")," experience.  This option offers a well scripted demo flow that covers all key aspects of IBM Event Streams on CP4i."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Advanced Journey"),":  This Journey 2 is a more advanced entry point and covers a ",Object(o.b)("strong",{parentName:"li"},"full body of knowledge")," within the near real-time / event driven architecture domain.  This Journey will have four (4) labs that progressively build out an MVP prototype supporting DoU defined goals and objectives."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Students are ",Object(o.b)("strong",{parentName:"p"},"free to choose")," their entry point for the Tech Academy lab work.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Between Journey 1 and Journey 2 there may be ",Object(o.b)("strong",{parentName:"p"},"more content to cover")," then can be completed in this 4-hour session.  With that in mind, consider using this material as an ",Object(o.b)("strong",{parentName:"p"},"on-going learning activity")," post Academy."))),Object(o.b)("hr",null),Object(o.b)("h2",null,"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://ibm-cloud-architecture.github.io/eda-tech-academy/",target:"_blank"},"Lab Handout"))))}m.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-eda-index-mdx-b8edcc8e341d617f969f.js.map