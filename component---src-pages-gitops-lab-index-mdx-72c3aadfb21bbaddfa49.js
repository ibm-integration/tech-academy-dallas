(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),d=a.n(m),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},A=a("FCXl"),j=a("dI71"),y=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,a);return Object(u.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(u.b)(l.Link,{className:y.link,to:""+c},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},i))))))},t}(o.a.Component),N=a("MjG9"),w=a("CzIb"),v=a("Asxa"),k=a("OIbQ"),C=a.n(k),I=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:C.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,d=b.tabs,g=b.title,j=b.theme,y=b.description,v=b.keywords,k=b.date,C=Object(w.a)().interiorTheme,x=Object(l.useStaticQuery)("2456312558").site.pathPrefix,E=x?n.pathname.replace(x,""):n.pathname,P=d?E.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",S=j||C;return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:S,pageTitle:g,pageDescription:y,pageKeywords:v,titleType:m},Object(u.b)(h,{title:o?Object(u.b)(o,null):g,label:"label",tabs:d,theme:S}),d&&Object(u.b)(f,{title:g,slug:E,tabs:d,currentTab:P}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p}),Object(u.b)(I,{date:k})),Object(u.b)(A.a,{pageContext:t,location:n,slug:E,tabs:d,currentTab:P}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},cpfm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),s={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("FeatureCard"),p=c("AnchorLinks"),m=c("AnchorLink"),d={_frontmatter:s},u=r.a;function h(e){var t=e.components,a=Object(o.a)(e,l);return Object(i.b)(u,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{title:"Agile Integration Best Practices Using an IBM GitOps Automation Framework",color:"dark",mdxType:"FeatureCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAcwuIE//xAAZEAACAwEAAAAAAAAAAAAAAAACAQADERL/2gAIAQEAAQUCEp08uSI//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBABAQADAAAAAAAAAAAAAAAAIQARIoH/2gAIAQEABj8COTs2W//EABkQAAIDAQAAAAAAAAAAAAAAAAERIQAxQf/aAAgBAQABPyHIm0IEQ6J5htZWpJcN/9oADAMBAAIAAwAAABAEH//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ECf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxBH/8QAGxABAAIDAQEAAAAAAAAAAAAAASERADFBUeH/2gAIAQEAAT8QUBdEQImd8y2NyktFUcn5ggFApVt97n//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/tech-academy-dallas/static/15159c3da54ef9934401fd98b2b1de53/2e753/automation.jpg",srcSet:["/tech-academy-dallas/static/15159c3da54ef9934401fd98b2b1de53/69549/automation.jpg 288w","/tech-academy-dallas/static/15159c3da54ef9934401fd98b2b1de53/473e3/automation.jpg 576w","/tech-academy-dallas/static/15159c3da54ef9934401fd98b2b1de53/2e753/automation.jpg 1152w","/tech-academy-dallas/static/15159c3da54ef9934401fd98b2b1de53/74f4b/automation.jpg 1728w","/tech-academy-dallas/static/15159c3da54ef9934401fd98b2b1de53/12e8d/automation.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)(p,{mdxType:"AnchorLinks"},Object(i.b)(m,{mdxType:"AnchorLink"},"Lab Overview"),Object(i.b)(m,{mdxType:"AnchorLink"},"Prerequisites"),Object(i.b)(m,{mdxType:"AnchorLink"},"Business Context"),Object(i.b)(m,{mdxType:"AnchorLink"},"Automation Framework Introduction"),Object(i.b)(m,{mdxType:"AnchorLink"},"Lab Environment"),Object(i.b)(m,{mdxType:"AnchorLink"},"1 - Clone Repositories"),Object(i.b)(m,{mdxType:"AnchorLink"},"2 - Explore the Environment"),Object(i.b)(m,{mdxType:"AnchorLink"},"3 - Prepare the Subscription"),Object(i.b)(m,{mdxType:"AnchorLink"},"4 - Deploy ACE and ES instances"),Object(i.b)(m,{mdxType:"AnchorLink"},"5 - Activate MQ Queue Manager"),Object(i.b)(m,{mdxType:"AnchorLink"},"6 - Customize Event Streams"),Object(i.b)(m,{mdxType:"AnchorLink"},"7 - Configure ACE"),Object(i.b)(m,{mdxType:"AnchorLink"},"8 - Customize APIC"),Object(i.b)(m,{mdxType:"AnchorLink"},"9 - Check the Demo Assets"),Object(i.b)(m,{mdxType:"AnchorLink"},"Summary")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Lab Overview"),Object(i.b)("p",null,"Have you received requests to deliver a Multi-style Integration demo or PoC, and you don’t know how to quickly prepare this environment? You are on the right place. In this session,  you will learn how to prepare a demo/PoC environment using GitOps automation framework. This environment will include different assets, capabilities, services and applications of IBM Cloud Pak for Integration."),Object(i.b)("p",null,"The first main goal of this session is to provide you a complete CP4I environment with multiple demo assets to be ready to progress your sales opportunity. This first goal is achieved by reusing a ",Object(i.b)("a",{href:"",target:"_blank"},"multi-style integratio demo assets"),"."),Object(i.b)("p",null,"The second goal is to provide this environment quickly and easily, by using the GitOps automation framework, more details ",Object(i.b)("a",{href:"https://production-gitops.dev/",target:"_blank"},"here")," about Cloud Pak Production Deployment Guides."),Object(i.b)("p",null,"This document was created for Senior Technical Specialists, and we know you are one of them. Because of that, instead to have very detailled steps, we have high level directions about what you need to do. There are some challenges that we don’t explain how to do them, but we are pretty sure that you can do it! But let the proctors know if you have any issue to complete the challenges."),Object(i.b)("p",null,"As part of the evalution process of this session, at the end, you will need to capture and upload screenshots of your final progress. In this document, you will see some references about the necessary screenshots."),Object(i.b)("p",null,"In this session you will learn to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"understand an IBM opinionated point of view regarding a GitOps centric method to manage RHOCP infrastructure, IBM integration software and application workload code (three tier GitOps architecture)."),Object(i.b)("li",{parentName:"ul"},"Review, develop, and extend an IBM GitOps automation repository that incapsulate key software components within the IBM Integration portfolio."),Object(i.b)("li",{parentName:"ul"},"Position a GitOps automation framework as a key boot-strapping and operational mechanism supporting a Client PoC activity and Client adoption.")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You need to have an OpenShift environment with GitOps operators. For this session, your proctor will provide you a pre-installed environment, with admin access (more details below). If you want to create your personal environment, check this ",Object(i.b)("a",{href:"https://www.youtube.com/watch?v=SmDE80vuP3w",target:"_blank"},"video")," or follow the preparation section from this ",Object(i.b)("a",{href:"https://github.com/sko-master/multi-tenancy-gitops/blob/master/doc/sko-scenario.md",target:"_blank"},"documentation"),"."),Object(i.b)("li",{parentName:"ul"},"You need to have installed in your machine:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://docs.openshift.com/container-platform/4.8/cli_reference/openshift_cli/getting-started-cli.html",target:"_blank"},"oc CLI")," v4.6+."),Object(i.b)("li",{parentName:"ul"},"github CLI"),Object(i.b)("li",{parentName:"ul"},"Bash Shell"),Object(i.b)("li",{parentName:"ul"},"JAVA v8+"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://stedolan.github.io/jq/",target:"_blank"},"jq CLI")))),Object(i.b)("li",{parentName:"ul"},"You need to have a SalesForce account. This should have been completed as part of the ",Object(i.b)("a",{href:"https://ibm-garage-tsa.github.io/cp4i-demohub/salesdemos/carrepair-new/prepare/#setting-up-salesforce",target:"_blank"},"Tech Academy pre-requisite work"),"."),Object(i.b)("li",{parentName:"ul"},"You need to have a mailtrap account. This too should have been completed as part of the ",Object(i.b)("a",{href:"https://mailtrap.io/",target:"_blank"},"Tech Academy pre-requisite work"),"."),Object(i.b)("li",{parentName:"ul"},"You have access to GitHub Organization with all repositories. Your proctor will provide that for you.")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Business Context"),Object(i.b)("p",null,"This document describes multiple use cases that highlight the multi-style integration patterns needed by an Integration Specialist to implement a digital transformation initiative that showcase the value Cloud Pak for Integration can provide."),Object(i.b)("p",null,"In this case a customer has a system of record that has used for many years which ws designed to work with MQ to process requirements, and now they want to extend the application to expose an API in a asecure way as part of their mobile app."),Object(i.b)("p",null,"But the requirement doesn’t end there, they are also implementing a new CRM system as a Service and they want to keep both systems in sync without having to modify the original system of record."),Object(i.b)("p",null,"Additionally as part of their digital transformation initiative they want to stay closer to their clients and they want to send email notifications when the client is taking certain actions in their mobile app. To support this strategy, the enterprise architecture team wants to implement an event backbone, as part of their event driven architecture."),Object(i.b)("p",null,"The following diagram provides a high level view of the scenario:\n",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVQoz22S3UtTcRjHz17Unb2cvbhNUzfn5oZCubmpLQXtxsBZUsmGWeBFZGUFXgTe9BdEZF1kN90IUVh0EQSRiWgimRciSXmRRCoKFVnpMtDs0znHfAm6+PJ7fr/f8zzf7/MiuN1uvF4vBQUFeDwe9Ho9giCg0+nUU4FGo1HvoijSdPoCNke2+lZeXo7JZNr2U+Hz+aipqSEej1NWVkYoFNr+dLlceGQyvV6nElktFuINxzBaJGxWK21tbWqcVqslLy9vS8ROduVDEDRYrDZu9/TQPzDA8NAgz/oHqK2tRTCYt31NJiNKdYpCh8NBXV3dplqbzaaWa5UZVedMM05fKXOzH1hchemFdd7OQ+uJFgTRjNdfTEaGgUgkTjKVorDQJ6vLx+XOwWiSCQOBANFoVGUxGAwo98rKSiYmZ/gNzH1aY102WlJHESx2OTAbySQn3Bem63InpSE/es2uHpaUlKi9M5vNGOWmi2Yb9vwgDYkEqWQzqZOnOHOxk3D1YaSiKmIHj1NaUY8ltxR7QZhsbwSXL6rCHdi/2UO/rEqSNkvWZxllZ//OhEWrnCiGP9GLs6qH8ub7Mvo40PqIWPKBaseSD3HEblLd8RLBbrcTkccfDAbR6nTqREVDFk6nk+JgiLxcF8G9VXjOzuLp+E5O+xKBS0vktm8i1rWE5/xXfOc+UnHlG4KyT7v3bctW+lpff0i1M+1F9A4vMbUAozMbPJ9a4+7wKvdGVhmaXmf03Qbj739xZ2T937XZDWUtpL+TVxI+HvvMi9erjL75wdyXDQYn0zwdX2Fetp+MLTM4sUzfqzUESZL4H5SdMsowiZnsCYRpvLpIY/dPGq6t0Hg9TdONNIld55HuNM23VvgDQEmDpncrenYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"CP4I MultiStyle DemoScenario",title:"CP4I MultiStyle DemoScenario",src:"/tech-academy-dallas/static/598c4ca36b0e293e16510a83830579b4/3cbba/CP4I_MultiStyle_DemoScenario.png",srcSet:["/tech-academy-dallas/static/598c4ca36b0e293e16510a83830579b4/7fc1e/CP4I_MultiStyle_DemoScenario.png 288w","/tech-academy-dallas/static/598c4ca36b0e293e16510a83830579b4/a5df1/CP4I_MultiStyle_DemoScenario.png 576w","/tech-academy-dallas/static/598c4ca36b0e293e16510a83830579b4/3cbba/CP4I_MultiStyle_DemoScenario.png 1152w","/tech-academy-dallas/static/598c4ca36b0e293e16510a83830579b4/7ea17/CP4I_MultiStyle_DemoScenario.png 1420w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,"In order to implement this demo you will need to deploy an instance of each one of the following components in your OCP Cluster:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"API Connect Cluster"),Object(i.b)("li",{parentName:"ul"},"Event Streams Cluster"),Object(i.b)("li",{parentName:"ul"},"Queue Manager"),Object(i.b)("li",{parentName:"ul"},"App Connect Enterprise Integration Servers")),Object(i.b)("p",null,"The following diagram provides a high level implementation view of the scenario with the core capabilities:\n",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQUlEQVQoz3WSzWsTURTF8xe59g8QBDfiouKmC9241KUIIuhCammxohWkxRZXARG0paUGq22SpqmNzXx/NDOpMR8zk0mDlbTLn++9mFJFF+fdx5u5555778kUCgVWV1fJ5XKsrKxQLpfRdR3DMPB9nzRN6Xa7pAKdKMUO+7RFTNOuepdIkuT0nqnVapimieu6WKYh7gaapmGIN8/ziONYIUliGs2IshHRaMVEUaQgyc4i0+v16Pf7HB72uDF/wsWpE2zXpx54qogsJtXalonthcxmPTZKNt/qvvju0Wq1kBwSSqFsSRKmacT5Bz85d/eI7YpFvqSzVzVE+xq7uxWh3iT79hPTc0UKOx7liovtOIqw2WwRBIHqJKNpOsViHtOLGXt6zO3FAR+KPhOvPEpfLBxbjEGvqFFcvf6YO/ees1YIeTRvU/m6R7NxwMbndRYWFjk4OCCzuZln6f07nP2Ey9MDrj07obznk9/2MCypwmX5o862IJ+ZfcPc4jKaWWN9S8zcsvDDNmEjESq/D2coj57cZJpwYWLA+Owxa3mXhy9NdioOpu0y9dpnKWdwaew+N289IbdVVwq1apWSFmEERxz25La7knC4btn/+IsfXJkZoJsOnlNFOkCqCGsOQc0XLQXU6wH7vks99JQLoo5cym/rjBQOfZQIn8U020M7mKZFNptVhFGc0G53BNoqdjqd0zjM76p8pfBvc0oDSwvI5MnJSaVSumD037/wh7EdsXopfVTprEnDMFSjGCX9D2dJfwFJ5AMENCcQNwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"CP4I MultiStyle HighLevelView",title:"CP4I MultiStyle HighLevelView",src:"/tech-academy-dallas/static/547d04df9baa90fb6ffd67d28dca1303/3cbba/CP4I_MultiStyle_HighLevelView.png",srcSet:["/tech-academy-dallas/static/547d04df9baa90fb6ffd67d28dca1303/7fc1e/CP4I_MultiStyle_HighLevelView.png 288w","/tech-academy-dallas/static/547d04df9baa90fb6ffd67d28dca1303/a5df1/CP4I_MultiStyle_HighLevelView.png 576w","/tech-academy-dallas/static/547d04df9baa90fb6ffd67d28dca1303/3cbba/CP4I_MultiStyle_HighLevelView.png 1152w","/tech-academy-dallas/static/547d04df9baa90fb6ffd67d28dca1303/0b124/CP4I_MultiStyle_HighLevelView.png 1728w","/tech-academy-dallas/static/547d04df9baa90fb6ffd67d28dca1303/e957c/CP4I_MultiStyle_HighLevelView.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,"To demonstrate the added value capabilities provided by CP4I you will deploy an instance of the following components in your OCP Cluster:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Platform UI (formerly known as Platform Navigator)"),Object(i.b)("li",{parentName:"ul"},"Automation Foundation Assets (formerly known as Asset Repository)"),Object(i.b)("li",{parentName:"ul"},"Operations Dashboard")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Automation Framework Introduction"),Object(i.b)("h3",null,"What are the Production Deployment Guides?"),Object(i.b)("p",null,"The ",Object(i.b)("a",{href:"https://production-gitops.dev/",target:"_blank"},"Cloud Pak Production Deployment Guides")," document and demonstrate how to design, deploy and operate cloud-native solutions leveraging IBM Cloud Pak capabilities in Red Hat OpenShift environments. The guides focus on Production level qualities of services such as High Availability, Security and Performance including how to design, install and manage your Cluster in the popular managed and unmanaged Cloud environments as well as tackling disconnected or air-gapped environments."),Object(i.b)("h3",null,"Production Deployment Guide objectives"),Object(i.b)("p",null,"There are a number of objectives behind providing the Production Deployment Guides. The three main goals of the Guides are provided below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Provide opinionated, validated Production topologies"),Object(i.b)("li",{parentName:"ul"},"Provide a GitOps driven automation framework"),Object(i.b)("li",{parentName:"ul"},"Enable IBMers to setup Production topologies")),Object(i.b)("h3",null,"What is GitOps?"),Object(i.b)("p",null,"GitOps requires us to describe the entire system declaratively in Git where the desired system state is versioned, managed and applied by software agents."),Object(i.b)("p",null,"Automation is key for scale in the Cloud world and OpenShift and Cloud Paks are no different. The implementation code and artifacts provided along with these guides are based on a GitOps approach where infrastructure and everything deployed in to an OpenShift Cluster (including Cloud Paks) is described as code and is managed in the same way that application code would be."),Object(i.b)("p",null,"More information on the gitops structure can be read in this ",Object(i.b)("a",{href:"https://production-gitops.dev/gitops/structure/",target:"_blank"},"page"),"."),Object(i.b)("hr",null),Object(i.b)("h2",null,"Lab Environment"),Object(i.b)("p",null,"For this session you will use a ROKS 4.8 environment with 5 nodes (b3c.16x64). Following this video, you can have a personal environment for you, including GitOps operator and configuration. But for this section, your lab proctors pre-installed this cluster for you. They already installed GitOps, created an empty GitHub Organization and forked the automation repositories that you will use, for this empty organization (check the video to see the steps already completed)."),Object(i.b)("p",null,"Because of time restrictions, the proctors already installed some core services of Cloud Pak for Integration, avoiding you to wait almost 90 minutes to complete this installation. In the previous sections, you will check what are installed in this environment. Enjoy your lab!"),Object(i.b)("hr",null),Object(i.b)("h2",null,"1 - Clone Repositories"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"As explained before, you already have Github repositories for your team. On the left navigator menu, check the name of your cluster and GitHub organization. As soon as you have the name, let’s clone the repositories in your local machine. Use the command below to define your GIT_ORG variable.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"export GIT_ORG={REPLACE_WITH_YOUR_GIT_ORG}\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Now let’s clone the repositories to your local machine.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mkdir ${GIT_ORG}\ncd ${GIT_ORG}\ngit clone https://github.com/${GIT_ORG}/multi-tenancy-gitops\ngit clone https://github.com/${GIT_ORG}/multi-tenancy-gitops-infra\ngit clone https://github.com/${GIT_ORG}/multi-tenancy-gitops-services\ngit clone https://github.com/${GIT_ORG}/multi-tenancy-gitops-apps\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"You are welcome to explore all the four repositories of the GitOps Automation framework.")),Object(i.b)("hr",null),Object(i.b)("h2",null,"2 - Explore the Environment"),Object(i.b)("p",null,"Now that you have all the repositories locally, let’s check what have been deployed."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Let’s start by exploring the GitOps Automation Framework YAML files. First, let’s check the kustomization.yaml in infra layer (/multi-tenancy-gitops/0-bootstrap/single-cluster/1-infra/)."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 2.1:")," what namespaces are enabled? openshift console - check namespaces (tools ibm-common-services)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Let’s explore the kustomization.yaml in services layer (/multi-tenancy-gitops/0-bootstrap/single-cluster/2-services/)"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 2.2:")," what are the instances enabled? How can you check Platform navigator and API Connect?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Let’s check the installed operators in your Cluster Web Console (there is a URL available in the Team Environments page)."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 2.3:")," how do I see the Installed Operators in OpenShift web console?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now, let’s open the ArgoCD UI. Don’t forget to find the ArgoCD URL and admin’s password. ",Object(i.b)("em",{parentName:"p"},"Tip:")," ArgoCD is installed in the openshift-gitops namespace, just look for openshift-gitops-cntk in Secrets and in Routes."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 2.4:")," Where do I see the ArgoCD URL? Where do I get the ArgoCD admin password?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ArgoCD UI check all applications available. Check the application’s healthy status.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Let’s open the Platform navigator. ",Object(i.b)("em",{parentName:"p"},"Tip:")," All CP4I services are installed in the tools namespace."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 2.5:")," Where do I see the Platform navigator URL? How do I get the CP4i admin’s password?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the Integration’s Instances available."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 2.6:")," What are the instances available?"))),Object(i.b)("hr",null),Object(i.b)("h2",null,"3 - Prepare the Subscription"),Object(i.b)("p",null,"Now it’s your time to do some actions using the GitOps Automation Framework. Let’s start by preparing some subscriptions."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit ",Object(i.b)("strong",{parentName:"p"},"multi-tenancy-gitops/0-bootstrap/single-cluster/2-services/kustomization.yaml"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Uncomment the lines below."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"- argocd/operators/ibm-ace-operator.yaml\n- argocd/operators/ibm-eventstreams-operator.yaml\n- argocd/operators/ibm-mq-operator.yaml\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"In the multi-tenancy-gitops folder: Add, Commit and Push the changes to multi-tenancy-gitops repository.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'git add .\ngit commit -m "adding new operators"\ngit push origin\n')),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to the argoCD console, refresh the ",Object(i.b)("strong",{parentName:"p"},"02-Services")," application. Maybe you need to wait few minutes to make sure that all the status are Sync and Healthy, before progressing."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 3.1:")," What are the new applications available in ArgoCD?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to the OpenShift Web console, check if there are new operators available."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 3.2:")," What are the new operators? How to check them?"))),Object(i.b)("hr",null),Object(i.b)("h2",null,"4 - Deploy ACE and ES instances"),Object(i.b)("p",null,"Now, let’s create App Connect Enterprise and Event Streams instances using the GitOps Automation Framework."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit ",Object(i.b)("strong",{parentName:"p"},"multi-tenancy-gitops/0-bootstrap/single-cluster/2-services/kustomization.yaml"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Uncomment the lines below."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"- argocd/instances/es-demo.yaml\n- argocd/instances/ace-infra.yaml\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"In the multi-tenancy-gitops folder: Add, Commit and Push the changes to multi-tenancy-gitops repository.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'git add .\ngit commit -m "deploying ace and es"\ngit push origin\n')),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to the argoCD console, refresh the ",Object(i.b)("strong",{parentName:"p"},"02-Services")," application. Maybe you need to wait few minutes to make sure that all the status are Sync and Healthy, before progressing."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 4.1:")," What are the new applications available in ArgoCD?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to the OpenShift Web console, check if there are new operators available."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 4.2:")," What are the new operators?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to CP4i Platform Navigator, check if the new instances are available and ready."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 4.3:")," How to check if the instances are available in Platform Navigator?"))),Object(i.b)("hr",null),Object(i.b)("h2",null,"5 - Activate MQ Queue Manager"),Object(i.b)("p",null,"Now, let’s start the application layer. First we need to create the MQ Queue Manager."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit ",Object(i.b)("strong",{parentName:"p"},"multi-tenancy-gitops/0-bootstrap/single-cluster/3-apps/kustomization.yaml"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Uncomment the line below."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"- argocd/sko-sample/mqmgr.yaml\n\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"In the multi-tenancy-gitops folder: Add, Commit and Push the changes to multi-tenancy-gitops repository.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'git add .\ngit commit -m "mq queue manager"\ngit push origin\n')),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to the argoCD console, refresh the ",Object(i.b)("strong",{parentName:"p"},"03-Application")," application. Maybe you need to wait few minutes to make sure that all the status are Sync and Healthy, before progressing."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 5.1:")," What are the new applications available in ArgoCD?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the OpenShift Web Console page, check the ",Object(i.b)("strong",{parentName:"p"},"qmgr-demo")," are running.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the CP4i Platform Navigator page, check the Queue Managers."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Challenge 5.2:")," How many Queue Managers are available? How do you check them?"))),Object(i.b)("hr",null),Object(i.b)("h2",null,"6 - Customize Event Streams"),Object(i.b)("p",null,"Now, let’s create the Event Streams resources for our Multi-Style demo."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit ",Object(i.b)("strong",{parentName:"p"},"multi-tenancy-gitops/0-bootstrap/single-cluster/3-apps/kustomization.yaml"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Uncomment the line below."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"- argocd/sko-sample/eventstream.yaml\n\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"In the multi-tenancy-gitops folder: Add, Commit and Push the changes to multi-tenancy-gitops repository.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'git add .\ngit commit -m "customize ES"\ngit push origin\n')),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to the argoCD console, refresh the ",Object(i.b)("strong",{parentName:"p"},"03-Application")," application. Maybe you need to wait few minutes to make sure that all the status are Sync and Healthy, before progressing.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("strong",{parentName:"p"},"eventstream")," application and check the log of ",Object(i.b)("strong",{parentName:"p"},"es-demo-setup-job-???")," pod.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You should see a failure that statefulsets.apps is forbidden. Let’s fix it! Edit ",Object(i.b)("strong",{parentName:"p"},"multi-tenancy-gitops-apps/sko-sample/eventstream/es-demo-setup-job-sa-role.yaml"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the Rules section, create a new rule with the content below and save the new YAML file."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'- apiGroups: ["apps"]\n  resources: ["statefulsets"]\n  verbs: ["get", "watch", "list"]\n')),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},"In the multi-tenancy-gitops-apps folder: Add, Commit and Push the changes to multi-tenancy-gitops-apps repository.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'git add .\ngit commit -m "apps statefulsets permission"\ngit push origin\n')),Object(i.b)("ol",{start:9},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to the argoCD console, refresh the ",Object(i.b)("strong",{parentName:"p"},"eventstream")," application. Maybe you need to wait few minutes to make sure that all the status are Sync and Healthy.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now you need to delete ",Object(i.b)("strong",{parentName:"p"},"es-demo-setup-job")," to re-run the pod.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now let’s check the log of ",Object(i.b)("strong",{parentName:"p"},"es-demo-setup-job-???")," pod again.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Wow, another failure!! Now with route. Follow the same approach of the previous error, but now include a rule to resources ",Object(i.b)("strong",{parentName:"p"},"routes")," in the apiGroups ",Object(i.b)("strong",{parentName:"p"},"route.openshift.io"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Repeat steps 8 to 11, to deploy the changes."))),Object(i.b)("hr",null),Object(i.b)("h2",null,"7 - Configure ACE"),Object(i.b)("p",null,"Now, let’s work with Application Connect Enterprise. In this part, you are configuring artifacts, secrets and certificates."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("strong",{parentName:"p"},"multi-tenancy-gitops-apps/sko-sample/ace-00-config")," folder.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Execute the commands below to generate the configuration YAML files.\n",Object(i.b)("strong",{parentName:"p"},"Note:")," SF_USER is ",Object(i.b)("em",{parentName:"p"},"Email addess used to log into Salesforce"),"\nSF_PWD is ",Object(i.b)("em",{parentName:"p"},"\\<Password used to log in",">","\\<token received in email",">"),"\nSF_CLIENT_ID is ",Object(i.b)("em",{parentName:"p"},"\\<Consumer Key",">"),"\nSF_CLIENT_SECRET is ",Object(i.b)("em",{parentName:"p"},"\\<Consumer Secret",">"),"\nMAILTRAP_USER is ",Object(i.b)("em",{parentName:"p"},"Mailtrap SMTP User"),"\nMAILTRAP_PWD is ",Object(i.b)("em",{parentName:"p"},"Mailtrap SMTP Password")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'./06-ace-config-barauth-github.sh\n./07-ace-config-policy-mq.sh\nSF_USER=<my-sf-user> SF_PWD=<my-sf-pwd> SF_CLIENT_ID=<my-sf-client-id> SF_CLIENT_SECRET=<my-sf-client-secret> SF_LOGIN_URL="https://login.salesforce.com" ./08-ace-config-accounts-sf.sh\n./10-ace-config-policy-es-scram.sh\n./11-ace-config-setdbparms-es-scram.sh\n./12-ace-config-truststore-es.sh\n./13-ace-config-policy-udp.sh\n./14-ace-config-policy-email.sh\nMAILTRAP_USER=<user> MAILTRAP_PWD=<pwd> ./15-ace-config-setdbparms-email.sh\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify that there are 9 YAML files generated in the ",Object(i.b)("em",{parentName:"p"},"ace-00-config")," folder.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit ",Object(i.b)("strong",{parentName:"p"},"multi-tenancy-gitops-apps/sko-sample/ace-00-config/kustomization.yaml")," file.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Uncomment the lines below (all the content)."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"- ace-config-accounts-designer.yaml\n\n- ace-config-policy-es-scram.yaml\n- ace-config-setdbparms-es-scram.yaml\n- ace-config-truststore.yaml\n\n- ace-config-policy-udp.yaml\n- ace-config-policy-email.yaml\n- ace-config-setdbparms-email.yaml\n")),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"In the multi-tenancy-gitops-apps folder: Add, Commit and Push the changes to multi-tenancy-gitops-apps repository.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'git add .\ngit commit -m "ace config"\ngit push origin\n')),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to the argoCD console, refresh the ",Object(i.b)("strong",{parentName:"p"},"03-Application")," application. Maybe you need to wait few minutes to make sure that all the status are Sync and Healthy, before progressing.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Back to Platform Navigator, open ",Object(i.b)("strong",{parentName:"p"},"App Connect Dashboard")," (Run > Integration) and check the Integration servers."))),Object(i.b)("hr",null),Object(i.b)("h2",null,"8 - Customize APIC"),Object(i.b)("hr",null),Object(i.b)("h2",null,"9 - Check the Demo Assets"),Object(i.b)("hr",null),Object(i.b)("h2",null,"Summary"),Object(i.b)("p",null,"You have successfully completed this lab. In this lab you learned how to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deploy a back-end integration to containers that are readily available as a scalable web service."),Object(i.b)("li",{parentName:"ul"},"Secure access to the back-end integration by creating a secure, governed API using the OpenAPI definition of the integration."),Object(i.b)("li",{parentName:"ul"},"Use Operations Dashboard to tracing  MQ, APIC and APPC")),Object(i.b)("p",null,"Now that you’ve made your back-end integrations ready for external distribution, your developer community is able to access the APIs via a developer portal. The developer portal is included in the platform and provides a full-featured experience to onboard and nurture your API consumers.  For more information about Cloud Pak for Integration, access ",Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/cloud-pak-for-integration"},"here"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gitops-lab-index-mdx-72c3aadfb21bbaddfa49.js.map