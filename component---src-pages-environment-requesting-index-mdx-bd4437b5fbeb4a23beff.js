(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=a("NmYn"),l=a.n(s),o=a("Wbzz"),c=a("Xrax"),r=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),p=a.n(m),g=a("qKvR"),A=function(e){var t,a=e.title,i=e.theme,n=e.tabs,s=void 0===n?[]:n;return Object(g.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=s.length,t[p.a.darkMode]="dark"===i,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,s=n.baseUrl,l=n.subDirectory,c=s+"/edit/"+n.branch+l+"/src/pages"+t;return s?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),y=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===n,c=new RegExp(n+"/?(#.*)?$"),r=i.replace(c,a);return Object(g.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=s,t),y.listItem)},Object(g.b)(o.Link,{className:y.link,to:""+r},e))}));return Object(g.b)("div",{className:y.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:y.list},s))))))},t}(n.a.Component),N=a("MjG9"),w=a("CzIb"),R=a("Asxa"),S=a("OIbQ"),j=a.n(S),v=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(R.c,{className:j.a.row},Object(g.b)(R.a,null,Object(g.b)("div",{className:j.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,s=t.frontmatter,b=void 0===s?{}:s,d=t.relativePagePath,m=t.titleType,p=b.tabs,u=b.title,x=b.theme,y=b.description,R=b.keywords,S=b.date,j=Object(w.a)().interiorTheme,k=Object(o.useStaticQuery)("2456312558").site.pathPrefix,K=k?i.pathname.replace(k,""):i.pathname,B=p?K.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",T=x||j;return Object(g.b)(r.a,{tabs:p,homepage:!1,theme:T,pageTitle:u,pageDescription:y,pageKeywords:R,titleType:m},Object(g.b)(A,{title:n?Object(g.b)(n,null):u,label:"label",tabs:p,theme:T}),p&&Object(g.b)(O,{title:u,slug:K,tabs:p,currentTab:B}),Object(g.b)(N.a,{padded:!0},a,Object(g.b)(f,{relativePagePath:d}),Object(g.b)(v,{date:S})),Object(g.b)(h.a,{pageContext:t,location:i,slug:K,tabs:p,currentTab:B}),Object(g.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XGMA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a("wx14"),n=a("zLVn"),s=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),["components"]),c={},r={_frontmatter:c},b=l.a;function d(e){var t=e.components,a=Object(n.a)(e,o);return Object(s.b)(b,Object(i.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Cloud Pak for Pak_Name ROKS cluster can be provisioned from IBMDemos for demo purposes, self-learning or Proof of Concept projects. If you have not already provisioned a cluster, follow these steps."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Log in to ",Object(s.b)("a",{parentName:"p",href:"https://www.ibm.com/demos/"},"https://www.ibm.com/demos/")," using your IBM credentials."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"715px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACWElEQVQoz4VQy05TURQ9baUPC/Rxue29bem7BW5bah9y+6QFWoqlVSKGDsBHMBqJiYkDJ471F0gcONCYSKFNE0f8kR/gByzPPmACJuJg5ezH2muvfdjx8TGGw1OcnZ1hNBphMplgPB6L+F845dzvJycYjsb4+onPfx5heP4Lpz9+grkkGV41AJPJBJvNJl7G2I2w3mLwyw4oDjtkK0Nb7+LozTmeH34BS6fTKBQK0DQN2WwWkiSJIaPRCIPBcA2MGWA1TyGqSshrMawsxdBOJ/D+5WN8+/gaB3oUzO12Q1EUyLIMVVVB+U3uTEYDLGazEPe7HLhfTOHD2yM83T9AI5MBo81X3fzv3KuIBeex1yjh3asXiCfTqGTvUP066Zr45TICOboAcS7+uVSu4slggMOdHrLLOdSLd8E8wSqUcB3eUA1uXwk2dw4zniIcygqcHJTbpTxcqi76UqAMJ49n5CKCyRai6S4SWgehhTYkfxVMK+4hVz2AN7oFh28NtrmaeCOpB9CbzxDN7GBWbWIu1EKqOECec+dCbUx7V+EJb2Ixtwtfogu7tw6LVAGLpHrQCo/4pj4c6ioXrGDKqUMObfD6LsJL27B7qjC7dC60ASm4Dou7BKtUFphR6qJP8W2ZO1Rim3D6m9xVQzQtvEFiaryDQPIed9ESRF98i6ODiNYXMXFpNpLq86U9OPk8mWF/Nlm5XSoQprn94OI2P28fYa0n8lnufiH3EMv6ANL8ulhCIuSYcnIpBKnxN+gkV2BNOKBlRKSX3Kq8Nu2pwSpqFc4ti6uIQ7O/ARPUZqURVEnCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"login ibm demos",title:"login ibm demos",src:"/ibm-integration/tech-academy-dallas/static/de0fec51f3fbea83a87baf6e4fbe68f1/8895e/1-Request-ROKS.png",srcSet:["/ibm-integration/tech-academy-dallas/static/de0fec51f3fbea83a87baf6e4fbe68f1/7fc1e/1-Request-ROKS.png 288w","/ibm-integration/tech-academy-dallas/static/de0fec51f3fbea83a87baf6e4fbe68f1/a5df1/1-Request-ROKS.png 576w","/ibm-integration/tech-academy-dallas/static/de0fec51f3fbea83a87baf6e4fbe68f1/8895e/1-Request-ROKS.png 715w"],sizes:"(max-width: 715px) 100vw, 715px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"On the IBM Demos page, scroll down to see the Featured Collections section. Then open ",Object(s.b)("strong",{parentName:"p"},"Cloud Pak for Pak_Name")," collection."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"715px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVQoz23SyU9aYRTGYTZujNpYYxWbIlZNUWkFKSAyCOiFMiPIjAwKV4bW4lBj0qQLtf1X1YVxZRNB/fXDxjSp3uTdPt97zzmKq6srzs7OuLy85ObmhrZIJurnjXIEr9PK4twkHvN79vZ3qchVQgEvsVgUud6k1aiRSyTJJFJ4HA6a5SKKLnh+fs7FxcVDfl9f4191MT02zIrdgsNiFPAScq1Gsy5TDC2TivjYKG9xcHiEvFVhPRQmGAhyfPoLxd3dHbe3t3Q6He7v72m3O8TDAcJuK1aBWU1G8qkEla0yxfImhYSPwrqbVDbP4dH3h5RyecqZFCddkP++jsDtRh2qgR48to/oplQsGebJBp049O+ISAZcS2NY7HYa9TrV6jaFeJSk5OTH8U8U3VaPeQBFU4fDztCLPowaNTatmlUxw2JUIuLQEXVNYVkYwWAyIxcLpEMhfDYLQfcKJ8en/xo+gt3FJOIRyhsZDvZaVMsFNnNxMtUWUzNaRkdeohQLm50Yp5lco1HI0ygVyAR9fF4LPQXboqG04sYkZvdlp8W3g31WncsEYiVUE5MCU9I30M9b5SjbAkvnN0im0yST63xNRp8B221cbjcq9QRuf4jatoxep0dnsDI/rWawtweFQsH4q2Gy4lxmDWbxuJm8wE935Kdgd4ZeSeKDVoPXJ+FYFIvRzuHze3AuaFD1/wUH+3r5ZLWhm5zGNKMhGw5yKD8Ddk+oWSlSSoXYLQTJSWY20zFy2QQ2o57FsddoB4eYF39gtzvxLruwi6NOp5PEM2n+AGUK1wAZlEPmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"featured collection",title:"featured collection",src:"/ibm-integration/tech-academy-dallas/static/d960ebcd1634d591cc3ec2f90bfe5b45/8895e/2-Request-ROKS.png",srcSet:["/ibm-integration/tech-academy-dallas/static/d960ebcd1634d591cc3ec2f90bfe5b45/7fc1e/2-Request-ROKS.png 288w","/ibm-integration/tech-academy-dallas/static/d960ebcd1634d591cc3ec2f90bfe5b45/a5df1/2-Request-ROKS.png 576w","/ibm-integration/tech-academy-dallas/static/d960ebcd1634d591cc3ec2f90bfe5b45/8895e/2-Request-ROKS.png 715w"],sizes:"(max-width: 715px) 100vw, 715px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Now, scroll down to see the Demo Environments section. If necessary, click ",Object(s.b)("strong",{parentName:"p"},"Show All"),".  On the ",Object(s.b)("strong",{parentName:"p"},"Cloud Pak for Pak_Name ROKS 4.3 Cluster (Express)")," Demo Environment, click ",Object(s.b)("strong",{parentName:"p"},"Reserve Instance"),"."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"715px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVQoz6WSz2sTQRTH959RPKh4qTdBzyqIerBFrBY86MVjexJKBMGDJ2/SW622tknatFURS8GWgq2taWMq6e4m2SS7+dUkG7eSbLLzcbKJgqgU8cF3vsN33nvz5r1RarWam8/nqVarotls0m63sSwLVVUxDINsNov08bmjZTIZjIzR8ffPNU3zOZfLYds2inNw4FYqlU6Q6Dg1Gg3yhSKqppMzLR/l/YoMsND1FKaV91Gt2mSyOTQ9iWnmZREF9itVFMCla6LHFMwUe7tb6Ikd0nqc/aKBldXY+/KJhNSTagzHLpJNJ3xNS2yTiG9SLhgoQghXAtE1ybCte6zEWqztenxIwEcVljfrvF23Wdp0eLfxlXWpr+40WNlpshZvs/rZY0vj9wo9uQ4ML3HqapCTl2c4emFS7mc4eyvC6f5ZTkjt2MUp+q6FODMYoa8/zPFL0xw5P8m5oXmUer3ulkolJES5XMZxHJaXXjEXnCASek545hmR8AteLwSZD08yF5qQ2jgLc1MsRqaZn+1p0+O8WQyhmKbpdiYlWViWSalY5H9MsQpFV5XTSxlZoSXTlCs12rKRnkSr1fK/0b9AKRoJNxXfIK/HhKlGqReStB2bZrXSbWx3YH+sRvjnvb3oQgk8irp3HujcDeji9miKe6O7GLEkNL/1AsRfn/cjyS8JR4afuNeHHjIwGBBX+u9z42aAdCrnO3WezCFJ+Vmlfz2K13LcdkP2rWkLr2nTatiMjT1lZGSEaDTqB3ied0iFgpfvBY+Dgu+AmmIX+WZ/lAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"express cluster selection",title:"express cluster selection",src:"/ibm-integration/tech-academy-dallas/static/810b7901fdddf97be5d6f507b4587aa1/8895e/3-Request-ROKS.png",srcSet:["/ibm-integration/tech-academy-dallas/static/810b7901fdddf97be5d6f507b4587aa1/7fc1e/3-Request-ROKS.png 288w","/ibm-integration/tech-academy-dallas/static/810b7901fdddf97be5d6f507b4587aa1/a5df1/3-Request-ROKS.png 576w","/ibm-integration/tech-academy-dallas/static/810b7901fdddf97be5d6f507b4587aa1/8895e/3-Request-ROKS.png 715w"],sizes:"(max-width: 715px) 100vw, 715px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",{parentName:"li"},"Note: If you cannot see the Demo Environment section, make sure you are logged in as shown in Step 1. At this time, only IBMers are able to request ROKS Demo environments.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Enter your ",Object(s.b)("strong",{parentName:"p"},"Opportunity number, Purpose, Provision duration")," and ",Object(s.b)("strong",{parentName:"p"},"country/region"),". The environment can be provisioned immediately by selecting the checkbox for a duration up to 14 days."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"715px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXUlEQVQ4y6WT3UuTURzHH7As2kydbxtWhigEhrpKQyoJK21zFvlSVuBmsSV01X/QXVflRXjVRS9XdVl4UxBCOqcIQRcmpaEoBO6Ze391bp+ec2qWlRfRgQ/ne76c33l+5/c7j+J0DWG3O3A6nZu4XC6J0A6HQzI4OCgR2m63S37VAwMDclbW1gLEolGNCJFImGAohOrzEY5ECAQCrK+vs5HJkEqlNJ2GbIbcyPLnUPq6rDiuXaXLep4bt4bouNTNwZpaOnv7aNd0vdlM47Em6urrOVR3mJbjTfR3tHLn8jn6rW20njyF66aD4eEHvBp9g1J9YD+Vpgqstgu0nG5DX1pGvr4AncHACUsnBpMJfWEB5cZyKowV6IuKMZbspaOlgeu93TQ0mrloO8ttVw8vR1+j7N61g7LSEs60W7TNRezcoyNfp0PJy8NYVcU+LdsCza+uraHQUIypspLm5mYsFis9fVcwHzmKzWZl+P49RkYeooyNjeHxePBMTTExMcGkpt1ut9Tj4+9wT04yMzPD3NxHpqenmZ2dZXl5mZWVFcnS0hKfPs9r3netpNNpWXhZ/I0NxPp/htblNcLhMFGt0xGts2KOxWLE43GCwSB+v1/6yWRSktE6niObzW7RAkUEiGCxWTyN3xF+IpGQiLV8Lj+C/4bi096cyEpcVQSIQPEBMYvDRBlymWx3SCbzM1PFHwj99arCE1ps+qcaRqNx+afkDsxllruq8LYjmYjx1Zfgw2KK+YVFviwsoKiqF1VVN/F6vVtYXV3dxlcJBby8fe/n7vM4j5684NnTx3wDIYxAK1aSlGkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"reservation form",title:"reservation form",src:"/ibm-integration/tech-academy-dallas/static/9e3836f2cbdc76f4741acfd1d5e1a51c/8895e/4-Request-ROKS.png",srcSet:["/ibm-integration/tech-academy-dallas/static/9e3836f2cbdc76f4741acfd1d5e1a51c/7fc1e/4-Request-ROKS.png 288w","/ibm-integration/tech-academy-dallas/static/9e3836f2cbdc76f4741acfd1d5e1a51c/a5df1/4-Request-ROKS.png 576w","/ibm-integration/tech-academy-dallas/static/9e3836f2cbdc76f4741acfd1d5e1a51c/8895e/4-Request-ROKS.png 715w"],sizes:"(max-width: 715px) 100vw, 715px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"The reservation status is shown in the next screen if there is an available cluster from the pool for immediate use. Otherwise, an email notification will be sent when the cluster is ready."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"715px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSklEQVQoz6WPzUoCARSFB1TSdPIH6WcRRLVxk6v2UZt2vUNkic6Itght0SKwJ1CiFxAfKFJCxxQsM0dz488449c4EbQKtAMf93K5nMMRRI/IDJfThdcbQBR9uJfdFh63x7o77A6cS078Xj+BQJBAcJW19Q12tnfZC4XYD4c5OjgkEokimMJus1nM9r9w2BzWdIpeRJ8ZvuIjtLXJ6ckxsfMzlOdHhHhcInoRQ4rLSJKELMkk5ASy/D1/76nUpfkjk0ymuEqnyWSuyWbvKBSKJgVarw0ETA2HEwwdDMPgvxIGgwHlUpnSU5lqReG91WY8GpvmOro+H9PpFGE4GlFRFN6aLTofKmqny2SiW2mzh3kRNE0zuzfpdTp89voWs7Qfw7krD0ca1UaPal2lptR5qdUZj7XFDettg5vilNtCn1zugft8HlXtLmz4BUCsN4ZsLyfUAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"active reservations",title:"active reservations",src:"/ibm-integration/tech-academy-dallas/static/82e2352b66441dc797f8164bb941d542/8895e/5-Request-ROKS.png",srcSet:["/ibm-integration/tech-academy-dallas/static/82e2352b66441dc797f8164bb941d542/7fc1e/5-Request-ROKS.png 288w","/ibm-integration/tech-academy-dallas/static/82e2352b66441dc797f8164bb941d542/a5df1/5-Request-ROKS.png 576w","/ibm-integration/tech-academy-dallas/static/82e2352b66441dc797f8164bb941d542/8895e/5-Request-ROKS.png 715w"],sizes:"(max-width: 715px) 100vw, 715px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"The reservation details can be viewed by selecting Details."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"715px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHklEQVQoz42SS2/TQBSFXaUUStJUCLGlO1L6S3gs2NCIHbBhwZY/AQFR8sC1J6nAdgusAKmoDa2Axk4WiFRtJXYNwhsQCNImsZ3YzuMwM86jrMDSp3vvyDo+Z66FiWMTmI5OIxKeQnQqivHQOARB+CehsRAmT5yk/RiOT0Zw6vQZhMMRCLOxWcTOxYbMnZ/DzNkZxOfjKGxt4c3qKjY3NlA0DBiGHqDrKBWLKJWK0HU2F1D6uIdbt+9AUJRlEPIESzkFmroCVdGQyy5BLxhoNj3U6w7+99nd+wxBU5exKMocaVGGLLEqUVebqB02UP1dg+O4aDSaQyyrX/u9bTlo+22UP5Wpw6cqHiTuI3EvwUklU0g+SiK/nqfumvj2/ReqBxZsx4dlexzHYfi82gzbRbfbQ7m8zSKrSKZTkESJu8tlc8ikM1zQtltU1KZuWjw+F6CCrPc9f4jXctGjgtsDwYcLC0in0pCoYJYQ3jNBFpXdIXPjuT6NNeIvQdcbCWqqBkKFiEzFZILswGH+LQ4OLfz4WeUxbWfk8OjsDCN3A0G2VZEuRBQJReILYXe4trbO49ZrFndqWS1+Baw2WN+f+RldTqfdF0xmVnDlpoLL159h/sZdXItfxcULl7hL9nQ6Pfp1BPTo3A0YzPysE/w2Ozu71KH6HBJhvIBMVBqd4HFGxKuXr2GaJir7+6hUKvhCGdSjsDP2jvnVxPt3H/AHUZK4NYhh0bYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"details dialog",title:"details dialog",src:"/ibm-integration/tech-academy-dallas/static/1423ef1a6f72997eca74efc4d3df9547/8895e/6-Request-ROKS.png",srcSet:["/ibm-integration/tech-academy-dallas/static/1423ef1a6f72997eca74efc4d3df9547/7fc1e/6-Request-ROKS.png 288w","/ibm-integration/tech-academy-dallas/static/1423ef1a6f72997eca74efc4d3df9547/a5df1/6-Request-ROKS.png 576w","/ibm-integration/tech-academy-dallas/static/1423ef1a6f72997eca74efc4d3df9547/8895e/6-Request-ROKS.png 715w"],sizes:"(max-width: 715px) 100vw, 715px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",{parentName:"li"},"Now you are ready to move to the next step and install Cloud Pak for Pak_Name!"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-environment-requesting-index-mdx-bd4437b5fbeb4a23beff.js.map