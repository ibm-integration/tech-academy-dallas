(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(A,e,a){"use strict";var t=a("q1tI"),i=a.n(t),o=a("NmYn"),c=a.n(o),d=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),n=a("TSYQ"),b=a.n(n),r=a("QH2O"),g=a.n(r),m=a("qKvR"),p=function(A){var e,a=A.title,t=A.theme,i=A.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:b()(g.a.pageHeader,(e={},e[g.a.withTabs]=o.length,e[g.a.darkMode]="dark"===t,e))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:g.a.text},a)))))},B=a("BAC9"),E=function(A){var e=A.relativePagePath,a=A.repository,t=Object(d.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||t,o=i.baseUrl,c=i.subDirectory,s=o+"/edit/"+i.branch+c+"/src/pages"+e;return o?Object(m.b)("div",{className:"bx--row "+B.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:B.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),u=a("I8xM"),Q=function(A){function e(){return A.apply(this,arguments)||this}return Object(j.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.title,a=A.tabs,t=A.slug,i=t.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(A){var e,a=c()(A,{lower:!0,strict:!0}),o=a===i,s=new RegExp(i+"/?(#.*)?$"),l=t.replace(s,a);return Object(m.b)("li",{key:A,className:b()((e={},e[u.selectedItem]=o,e),u.listItem)},Object(m.b)(d.Link,{className:u.link,to:""+l},A))}));return Object(m.b)("div",{className:u.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":e},Object(m.b)("ul",{className:u.list},o))))))},e}(i.a.Component),f=a("MjG9"),w=a("CzIb"),N=a("Asxa"),x=a("OIbQ"),y=a.n(x),Y=function(A){var e=A.date,a=new Date(e);return e?Object(m.b)(N.c,{className:y.a.row},Object(m.b)(N.a,null,Object(m.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(A){var e=A.pageContext,a=A.children,t=A.location,i=A.Title,o=e.frontmatter,n=void 0===o?{}:o,b=e.relativePagePath,r=e.titleType,g=n.tabs,B=n.title,j=n.theme,u=n.description,N=n.keywords,x=n.date,y=Object(w.a)().interiorTheme,C=Object(d.useStaticQuery)("2456312558").site.pathPrefix,v=C?t.pathname.replace(C,""):t.pathname,D=g?v.split("/").filter(Boolean).slice(-1)[0]||c()(g[0],{lower:!0}):"",P=j||y;return Object(m.b)(l.a,{tabs:g,homepage:!1,theme:P,pageTitle:B,pageDescription:u,pageKeywords:N,titleType:r},Object(m.b)(p,{title:i?Object(m.b)(i,null):B,label:"label",tabs:g,theme:P}),g&&Object(m.b)(Q,{title:B,slug:v,tabs:g,currentTab:D}),Object(m.b)(f.a,{padded:!0},a,Object(m.b)(E,{relativePagePath:b}),Object(m.b)(Y,{date:x})),Object(m.b)(h.a,{pageContext:e,location:t,slug:v,tabs:g,currentTab:D}),Object(m.b)(s.a,null))}},"9ZfZ":function(A,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return s})),a.d(e,"default",(function(){return p}));var t=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),d=(a("qKvR"),["components"]),s={},l=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}},n=l("Row"),b=l("Column"),r=l("ArticleCard"),g={_frontmatter:s},m=c.a;function p(A){var e=A.components,a=Object(i.a)(A,d);return Object(o.b)(m,Object(t.a)({},g,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)(n,{mdxType:"Row"},Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"CP4MCM Part 1 - Getting Started and Cluster Management",href:"https://youtu.be/QD6b6kjviZ4",author:"Demo of IBM Cloud Pak for Multicluster Management covering the Getting Started and Cluster Management capabilities",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEE/9oADAMBAAIQAxAAAAHi6L0JTwf/xAAZEAACAwEAAAAAAAAAAAAAAAAAASEQETH/2gAIAQEAAQUCggdLmI//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERAv/aAAgBAgEBPwHFbIf/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAcEAACAQUBAAAAAAAAAAAAAAABAGEQESExUaH/2gAIAQEAAT8hEkS9bid0DBPJ/9oADAMBAAIAAwAAABBLP//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/EKP/xAAWEQEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQIBAT8QKoyZtq7/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMdFhcZH/2gAIAQEAAT8QFSzft6jLgQ8uomr8ORhBhzrCVjif/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video1 thumb",title:"video1 thumb",src:"/tech-academy-dallas/static/fc2953570c76f52a5c403636585b1c5c/2e753/video1-thumb.jpg",srcSet:["/tech-academy-dallas/static/fc2953570c76f52a5c403636585b1c5c/69549/video1-thumb.jpg 288w","/tech-academy-dallas/static/fc2953570c76f52a5c403636585b1c5c/473e3/video1-thumb.jpg 576w","/tech-academy-dallas/static/fc2953570c76f52a5c403636585b1c5c/2e753/video1-thumb.jpg 1152w","/tech-academy-dallas/static/fc2953570c76f52a5c403636585b1c5c/533d0/video1-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"CP4MCM Part 2 - Application Management",href:"https://youtu.be/IEX_rTZC99I",author:"Demo of IBM Cloud Pak for Multicluster Management covering the Application Management and Application monitoring capabilities",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEDBP/aAAwDAQACEAMQAAAB4qOjQxVTP//EABgQAAIDAAAAAAAAAAAAAAAAAAECESAh/9oACAEBAAEFAoq43//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASf/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oACAECAQE/AcdZL//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EAB0QAQACAAcAAAAAAAAAAAAAAAEAERAhMUFRYaH/2gAIAQEAAT8hpz7NO42tuAGRABRtP//aAAwDAQACAAMAAAAQeD//xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPxCj/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAECAQE/ECqjJqLd/8QAGxABAQEAAgMAAAAAAAAAAAAAAREAITFRkaH/2gAIAQEAAT8QJDPpqFSx4SZ1HOXTQ4nWDoDX13//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video2 thumb",title:"video2 thumb",src:"/tech-academy-dallas/static/6067a28744e0a2dc7fa17fbac0e5b609/2e753/video2-thumb.jpg",srcSet:["/tech-academy-dallas/static/6067a28744e0a2dc7fa17fbac0e5b609/69549/video2-thumb.jpg 288w","/tech-academy-dallas/static/6067a28744e0a2dc7fa17fbac0e5b609/473e3/video2-thumb.jpg 576w","/tech-academy-dallas/static/6067a28744e0a2dc7fa17fbac0e5b609/2e753/video2-thumb.jpg 1152w","/tech-academy-dallas/static/6067a28744e0a2dc7fa17fbac0e5b609/533d0/video2-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"CP4MCM Part 3 - Governance, Risk and Compliance",href:"https://youtu.be/o072Bgo2jsM",author:"In this demo you can see how IBM Cloud Pak for Pak_Name helps you manage governance, risk and compliance across hybrid cloud environments and how you can manage policies as code.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQADBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFUHjwsbho//8QAGhAAAwEAAwAAAAAAAAAAAAAAAwIBAAQSIv/aAAgBAQABBQI3kNOTCK7LeUZp3bQrzf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAbEAACAgMBAAAAAAAAAAAAAAABAAIRITEyQf/aAAgBAQAGPwKZGwHpyfWjM07cF//EABsQAQACAwEBAAAAAAAAAAAAAAEAETEhoWFx/9oACAEBAAE/IXpZoNQ+OSMG98EavLJRLM8QmqT5P//aAAwDAQACAAMAAAAQZ9//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QSxv/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEx/9oACAECAQE/EBDti//EAB0QAQACAgIDAAAAAAAAAAAAAAERACExQZFhgfD/2gAIAQEAAT8QiksQGGwMo/XFju0JdUHikpWEyHVeYelXLZlAb6v/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video3 thumb",title:"video3 thumb",src:"/tech-academy-dallas/static/c013fb4e4759af5cd4e1225888dcbfa5/2e753/video3-thumb.jpg",srcSet:["/tech-academy-dallas/static/c013fb4e4759af5cd4e1225888dcbfa5/69549/video3-thumb.jpg 288w","/tech-academy-dallas/static/c013fb4e4759af5cd4e1225888dcbfa5/473e3/video3-thumb.jpg 576w","/tech-academy-dallas/static/c013fb4e4759af5cd4e1225888dcbfa5/2e753/video3-thumb.jpg 1152w","/tech-academy-dallas/static/c013fb4e4759af5cd4e1225888dcbfa5/533d0/video3-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)(n,{mdxType:"Row"},Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"CP4MCM - A day in the life of Operations Manager",href:"https://youtu.be/x7hQAaYU3C4",author:"Manage, monitor, optimize cost/quality of service for workloads across multiple clouds. Included in this view is Cost & Asset Management, which is currently NOT part of Cloud Pak for Pak_Name but a separate entitlement.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB2lYIyIf/xAAZEAABBQAAAAAAAAAAAAAAAAARAAEQITH/2gAIAQEAAQUCNlNk/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAbEAEAAgIDAAAAAAAAAAAAAAABABExUSFhkf/aAAgBAQABPyFAi3O5Xv2YIcyjUVMT/9oADAMBAAIAAwAAABBUH//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EFf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhQZFhcf/aAAgBAQABPxDWBEIb34jtM5LzAC0F+TwcigKip//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video4 thumb",title:"video4 thumb",src:"/tech-academy-dallas/static/060df8c0b717b67854051e849f028337/2e753/video4-thumb.jpg",srcSet:["/tech-academy-dallas/static/060df8c0b717b67854051e849f028337/69549/video4-thumb.jpg 288w","/tech-academy-dallas/static/060df8c0b717b67854051e849f028337/473e3/video4-thumb.jpg 576w","/tech-academy-dallas/static/060df8c0b717b67854051e849f028337/2e753/video4-thumb.jpg 1152w","/tech-academy-dallas/static/060df8c0b717b67854051e849f028337/533d0/video4-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"CP4MCM - A day in the life of Applications Manager",href:"https://youtu.be/BfcCBV1q83M",author:"Self service deployment, compliance enforcement and management simplifications of applications across multiple clouds. The Cloud Application Manager shown in this view is currently in tech preview.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHaKaMgP//EABkQAAEFAAAAAAAAAAAAAAAAAAEAEBEhMf/aAAgBAQABBQIm5Qx//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGxABAQACAwEAAAAAAAAAAAAAAQARUTFBYZH/2gAIAQEAAT8hA7c7sffsshiwalS//9oADAMBAAIAAwAAABCk3//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EFf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxBH/8QAHhABAAIBBAMAAAAAAAAAAAAAAREAQSExUWFxgZH/2gAIAQEAAT8QQE6Qe1i5b5YsEZJsElBfF6HyqAMEX//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video5 thumb",title:"video5 thumb",src:"/tech-academy-dallas/static/eb047da97a5f4024ff89c4cfbab2ac10/2e753/video5-thumb.jpg",srcSet:["/tech-academy-dallas/static/eb047da97a5f4024ff89c4cfbab2ac10/69549/video5-thumb.jpg 288w","/tech-academy-dallas/static/eb047da97a5f4024ff89c4cfbab2ac10/473e3/video5-thumb.jpg 576w","/tech-academy-dallas/static/eb047da97a5f4024ff89c4cfbab2ac10/2e753/video5-thumb.jpg 1152w","/tech-academy-dallas/static/eb047da97a5f4024ff89c4cfbab2ac10/533d0/video5-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"Using Golden Signals for application monitoring in multicloud environment",href:"https://youtu.be/z5WLD6vANvw",author:"This short demonstration of IBM Cloud App Management (part of IBM Cloud Pak for Pak_Name), shows how the golden signals approach helps monitor microservice-based applications deployed in the cloud environment and quickly resolves any availability issues.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAdOVGktiA//EABkQAAMBAQEAAAAAAAAAAAAAAAECABIQIf/aAAgBAQABBQIsbbSt5hRAc//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAECAQE/AZS//8QAHBAAAQQDAQAAAAAAAAAAAAAAAAERAjEQEiEi/9oACAEBAAY/ApNqXGj0wqt1c//EABsQAAICAwEAAAAAAAAAAAAAAAEAETFBYXGR/9oACAEBAAE/ITSBDFaRKKerc5LSYjCwygBz6h//2gAMAwEAAgADAAAAEOwP/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qqv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EIS//8QAGhABAAIDAQAAAAAAAAAAAAAAAREAIVExgf/aAAgBAQABPxATNgpZlxcasyEEEH05UcVPdI9LpiAhczuiIfbbzf/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video6 thumb",title:"video6 thumb",src:"/tech-academy-dallas/static/d4eea1a703cc923f6b8156691423ad22/2e753/video6-thumb.jpg",srcSet:["/tech-academy-dallas/static/d4eea1a703cc923f6b8156691423ad22/69549/video6-thumb.jpg 288w","/tech-academy-dallas/static/d4eea1a703cc923f6b8156691423ad22/473e3/video6-thumb.jpg 576w","/tech-academy-dallas/static/d4eea1a703cc923f6b8156691423ad22/2e753/video6-thumb.jpg 1152w","/tech-academy-dallas/static/d4eea1a703cc923f6b8156691423ad22/533d0/video6-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)(n,{mdxType:"Row"},Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"Cloud native delivery with CP4A, CP4MCM and IBM DevOps",href:"https://youtu.be/hfCxvrndqYY",author:"This demonstration shows how IBM Cloud Pak for Applications, IBM Cloud DevOps and IBM Cloud Pak for Pak_Name work hand-in-hand, delivering the integrated hybrid cloud DevOps solution and provide easy portability of applications across cloud environments.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAwb/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFOsjXTnjQH/8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDBAARM//aAAgBAQABBQIVIVVUjYOqzmrKOb/b/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EAB0QAAICAQUAAAAAAAAAAAAAAAEAESEQMTJBUXL/2gAIAQEABj8CAgadOxFRSJHGB5f/xAAdEAEAAgEFAQAAAAAAAAAAAAABABFhITFBobHw/9oACAEBAAE/ITTWDfCCmkon1WNNmjnEABOu9Z//2gAMAwEAAgADAAAAEJwP/8QAFxEBAAMAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxAL2P/EABcRAAMBAAAAAAAAAAAAAAAAABEAASH/2gAIAQIBAT8QoYkv/8QAGhABAQEAAwEAAAAAAAAAAAAAAREAIUFhMf/aAAgBAQABPxBBYrgvx3igNDnCcDDBo9msLN+R09xAECAZ1meRMf/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video7 thumb",title:"video7 thumb",src:"/tech-academy-dallas/static/21bfb50605fccf8e0405e19ab9ca6973/2e753/video7-thumb.jpg",srcSet:["/tech-academy-dallas/static/21bfb50605fccf8e0405e19ab9ca6973/69549/video7-thumb.jpg 288w","/tech-academy-dallas/static/21bfb50605fccf8e0405e19ab9ca6973/473e3/video7-thumb.jpg 576w","/tech-academy-dallas/static/21bfb50605fccf8e0405e19ab9ca6973/2e753/video7-thumb.jpg 1152w","/tech-academy-dallas/static/21bfb50605fccf8e0405e19ab9ca6973/533d0/video7-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"Partner spotlight: Figuring out developer induced issue with Humio",href:"https://youtu.be/HceOGMPBHCs",author:"IBM’s cloud Pak for Pak_Name is a modern management control plane with a single view of “what an app is” and Humio’s integrated application log solution, ensure developers can find logs pointing to problems very quickly and in context with issues.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABCgSzdmP/xAAaEAABBQEAAAAAAAAAAAAAAAABAAIDERAy/9oACAEBAAEFAo3uJsqyoes//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAkQABMQIgMv/aAAgBAQAGPwLrItyW5On/xAAbEAACAQUAAAAAAAAAAAAAAAABAPEQETFRcf/aAAgBAQABPyE/BMLbM+Z85OV//9oADAMBAAIAAwAAABBwD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAAICAQUAAAAAAAAAAAAAAAARAfBxIUFRYaH/2gAIAQEAAT8Qh5hlPNk2LWRdr0r9i1JP/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video8 thumb",title:"video8 thumb",src:"/tech-academy-dallas/static/996f361169b722ff4b01ea38b4fbcb39/2e753/video8-thumb.jpg",srcSet:["/tech-academy-dallas/static/996f361169b722ff4b01ea38b4fbcb39/69549/video8-thumb.jpg 288w","/tech-academy-dallas/static/996f361169b722ff4b01ea38b4fbcb39/473e3/video8-thumb.jpg 576w","/tech-academy-dallas/static/996f361169b722ff4b01ea38b4fbcb39/2e753/video8-thumb.jpg 1152w","/tech-academy-dallas/static/996f361169b722ff4b01ea38b4fbcb39/533d0/video8-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"Partner spotlight: Expiring SSL certificate problem resolution with Humio",href:"https://youtu.be/if7hZT03Ggk",author:"Does your company have a bulletproof system for managing SSL certificates? Watch IBM’s Cloud Pak for Pak_Name working with Humio's centralized log management to provide an elegant solution for the SSL certificate expiration problem.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAewrpJYf/8QAFxAAAwEAAAAAAAAAAAAAAAAAAhMAIP/aAAgBAQABBQJYyxljj//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAQEBAAAAAAAAAAAAAAAAADEAIP/aAAgBAQAGPwIiMf/EABgQAQADAQAAAAAAAAAAAAAAAAEA8BEQ/9oACAEBAAE/IallSy5Zg53/2gAMAwEAAgADAAAAEOAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAIBAAAgAEBwAAAAAAAAAAAAAAAQAhYfAQETFBUXGB4f/aAAgBAQABPxAGGurdh5+PZmqpsIISBierf//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video9 thumb",title:"video9 thumb",src:"/tech-academy-dallas/static/5c2ec48774fd67480a6e6ed4a510dc52/2e753/video9-thumb.jpg",srcSet:["/tech-academy-dallas/static/5c2ec48774fd67480a6e6ed4a510dc52/69549/video9-thumb.jpg 288w","/tech-academy-dallas/static/5c2ec48774fd67480a6e6ed4a510dc52/473e3/video9-thumb.jpg 576w","/tech-academy-dallas/static/5c2ec48774fd67480a6e6ed4a510dc52/2e753/video9-thumb.jpg 1152w","/tech-academy-dallas/static/5c2ec48774fd67480a6e6ed4a510dc52/533d0/video9-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)(n,{mdxType:"Row"},Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"Partner spotlight: Extending Security Governance with Sysdig",href:"https://youtu.be/lIOwvccdYPs",author:"A consistent, automated approach to securing containerized apps helps you ensure smooth operations and deliver applications faster with less risk. Watch IBM Cloud Pak for Pak_Name enhanced with in-depth container security from Sysdig Secure.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAV+jwaKEif/EABwQAAEDBQAAAAAAAAAAAAAAAAEABBICAwUQEf/aAAgBAQABBQLH2J1xC4E2ADfX/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAQMFAAAAAAAAAAAAAAAAADEBAgMQERNR/9oACAEBAAY/AtkkiIwjFPHL/wD/xAAcEAACAQUBAAAAAAAAAAAAAAABABHxECFBUWH/2gAIAQEAAT8hkQcvS0ZpyNgjE22X/9oADAMBAAIAAwAAABBrP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQACAgMBAAAAAAAAAAAAAAEAEZEx8SFB4f/aAAgBAQABPxALlainXx3icBnEYJMKA9UtcyiCo3powT//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video10 thumb",title:"video10 thumb",src:"/tech-academy-dallas/static/b667b0fa964b6e0c2b52139ad3e1297f/2e753/video10-thumb.jpg",srcSet:["/tech-academy-dallas/static/b667b0fa964b6e0c2b52139ad3e1297f/69549/video10-thumb.jpg 288w","/tech-academy-dallas/static/b667b0fa964b6e0c2b52139ad3e1297f/473e3/video10-thumb.jpg 576w","/tech-academy-dallas/static/b667b0fa964b6e0c2b52139ad3e1297f/2e753/video10-thumb.jpg 1152w","/tech-academy-dallas/static/b667b0fa964b6e0c2b52139ad3e1297f/533d0/video10-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(r,{color:"dark",title:"Partner spotlight: Application-Centric Approach to CP4MCM with Turbonomic",href:"https://youtu.be/WM-Xg9Nu6rs",author:"Today, more than ever, applications are the business. See how Turbonomic’s Application Resource Management (ARM) with the IBM Cloud Pak for Pak_Name enables full-stack application management to remove silos and help applications perform.",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAezlhJUf/8QAGBAAAwEBAAAAAAAAAAAAAAAAEwADAiD/2gAIAQEAAQUCHNHNHjj/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAYEAADAQEAAAAAAAAAAAAAAAACMpEAIP/aAAgBAQAGPwJRmQZkGcf/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAfER/9oACAEBAAE/IcMwTEo5Ff/aAAwDAQACAAMAAAAQQA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAdEAACAQQDAAAAAAAAAAAAAAABAFEhYfARMXHh/9oACAEBAAE/EJMqzAYT5MeZZAVo6KgAHp5P/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"video11 thumb",title:"video11 thumb",src:"/tech-academy-dallas/static/9371abbf7bddb5d2788a08d68ddd1813/2e753/video11-thumb.jpg",srcSet:["/tech-academy-dallas/static/9371abbf7bddb5d2788a08d68ddd1813/69549/video11-thumb.jpg 288w","/tech-academy-dallas/static/9371abbf7bddb5d2788a08d68ddd1813/473e3/video11-thumb.jpg 576w","/tech-academy-dallas/static/9371abbf7bddb5d2788a08d68ddd1813/2e753/video11-thumb.jpg 1152w","/tech-academy-dallas/static/9371abbf7bddb5d2788a08d68ddd1813/533d0/video11-thumb.jpg 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))))}p.isMDXComponent=!0},BAC9:function(A,e,a){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,a){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(A,e,a){A.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(A,e,a){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-esd-videos-index-mdx-1a71e657d725ba1f498d.js.map