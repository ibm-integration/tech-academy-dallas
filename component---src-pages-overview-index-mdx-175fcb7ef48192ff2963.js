(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,b=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,b=new RegExp(i+"/?(#.*)?$"),c=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(o.Link,{className:f.link,to:""+c},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(i.a.Component),N=a("MjG9"),w=a("CzIb"),k=a("Asxa"),P=a("OIbQ"),T=a.n(P),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(k.c,{className:T.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,x=s.theme,f=s.description,k=s.keywords,P=s.date,T=Object(w.a)().interiorTheme,A=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=A?n.pathname.replace(A,""):n.pathname,C=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",M=x||T;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:M,pageTitle:O,pageDescription:f,pageKeywords:k,titleType:u},Object(p.b)(g,{title:i?Object(p.b)(i,null):O,label:"label",tabs:m,theme:M}),m&&Object(p.b)(v,{title:O,slug:I,tabs:m,currentTab:C}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(y,{date:P})),Object(p.b)(h.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:C}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},fPf4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),["components"]),b={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("AnchorLinks"),d=c("AnchorLink"),u={_frontmatter:b},m=l.a;function p(e){var t=e.components,a=Object(i.a)(e,o);return Object(r.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"Goals"),Object(r.b)(d,{mdxType:"AnchorLink"},"Key Focus Areas and Targeted Skill Sets"),Object(r.b)(d,{mdxType:"AnchorLink"},"Agenda")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Goals"),Object(r.b)("p",null,"  – Develop deeper skill and knowledge in specific technical domains to effectively plan, configure and run a client facing PoC / MVP activity using the CP4i platform."),Object(r.b)("p",null,"  – Develop skills and knowledge that  can be used to demonstrate IBMs marketplace differentiation in agile integration and cloud-native deployment using the IBM integration portfolio and RHOCP (GitOpsautomation)."),Object(r.b)("p",null,"  – Develop skills that can be used for MVP development and demonstrate IBMs innovative capabilities for multi-style integration with a deep focus on event-drive integration patterns."),Object(r.b)("p",null,"  – Develop techniques and best practices for using these enhanced skills on a PoC engagement that is competitive with MuleSoft."),Object(r.b)("hr",null),Object(r.b)("h2",null,"Key Focus Areas and Targeted Skill Sets"),Object(r.b)("p",null,"Attendees will focus on the following strategic areas and develop skills that can be used to execute on PoC engagements and/or MVP development and delivery.Attendees will develop deeper skill with key technologies and tools that align with this focus areas.  Examples: CP4i/RHOCP architecture and sizing tools, IBM Event Streams, Kafka, RH GitOps& Pipeline operators, ArgoCD, and more."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Design, Architect & Size an Enterprise Grade CP4I"),Object(r.b)("li",{parentName:"ul"},"Configuration–MVP Development Using Event Driven Architecture Practices, Real-time Inventory Management"),Object(r.b)("li",{parentName:"ul"},"Agile Integration Best Practices Using an IBM GitOpsAutomation Framework")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Agenda"),Object(r.b)("p",null,"The high-level view of the agenda is shown in the table below."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The agenda is primarily divided into 3 sessions spanning approximately 12 hours of training.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Each session contains it’s own agenda with a set of activities with 4 hours duration.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Using the left navigator, you can view the individual sessions details."))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Time"),Object(r.b)("th",{parentName:"tr",align:null},"Topic"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"10 min")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Kickoff:")," Welcome, Introduction and overview of the training  activities for the Integration Portfolio")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"4 hours")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Architectute Session:")," Designing, Architecting & Sizing an Enterprise Grade CP4I Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"4 hours")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"EDA Session:")," MVP Development Using Event Driven Architecture Practices, Real-time Inventory Management")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"4 hours")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"GitOps Automation Session:")," Agile Integration Best Practices Using an IBM GitOps Automation Framework")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"20 min")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Wrap-up:")," Selection of short demos from teams & Wrap-up")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-index-mdx-175fcb7ef48192ff2963.js.map