(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(a,e,t){"use strict";var i=t("q1tI"),c=t.n(i),s=t("NmYn"),l=t.n(s),n=t("Wbzz"),o=t("Xrax"),d=t("k4MR"),b=t("TSYQ"),r=t.n(b),p=t("QH2O"),m=t.n(p),A=t("qKvR"),g=function(a){var e,t=a.title,i=a.theme,c=a.tabs,s=void 0===c?[]:c;return Object(A.b)("div",{className:r()(m.a.pageHeader,(e={},e[m.a.withTabs]=s.length,e[m.a.darkMode]="dark"===i,e))},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12"},Object(A.b)("h1",{id:"page-title",className:m.a.text},t)))))},u=t("BAC9"),f=function(a){var e=a.relativePagePath,t=a.repository,i=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,c=t||i,s=c.baseUrl,l=c.subDirectory,o=s+"/edit/"+c.branch+l+"/src/pages"+e;return s?Object(A.b)("div",{className:"bx--row "+u.row},Object(A.b)("div",{className:"bx--col"},Object(A.b)("a",{className:u.link,href:o},"Edit this page on GitHub"))):null},h=t("FCXl"),y=t("dI71"),w=t("I8xM"),O=function(a){function e(){return a.apply(this,arguments)||this}return Object(y.a)(e,a),e.prototype.render=function(){var a=this.props,e=a.title,t=a.tabs,i=a.slug,c=i.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(a){var e,t=l()(a,{lower:!0,strict:!0}),s=t===c,o=new RegExp(c+"/?(#.*)?$"),d=i.replace(o,t);return Object(A.b)("li",{key:a,className:r()((e={},e[w.selectedItem]=s,e),w.listItem)},Object(A.b)(n.Link,{className:w.link,to:""+d},a))}));return Object(A.b)("div",{className:w.tabsContainer},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(A.b)("nav",{"aria-label":e},Object(A.b)("ul",{className:w.list},s))))))},e}(c.a.Component),N=t("MjG9"),x=t("CzIb"),j=t("Asxa"),k=t("OIbQ"),v=t.n(k),B=function(a){var e=a.date,t=new Date(e);return e?Object(A.b)(j.c,{className:v.a.row},Object(A.b)(j.a,null,Object(A.b)("div",{className:v.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(a){var e=a.pageContext,t=a.children,i=a.location,c=a.Title,s=e.frontmatter,b=void 0===s?{}:s,r=e.relativePagePath,p=e.titleType,m=b.tabs,u=b.title,y=b.theme,w=b.description,j=b.keywords,k=b.date,v=Object(x.a)().interiorTheme,C=Object(n.useStaticQuery)("2456312558").site.pathPrefix,T=C?i.pathname.replace(C,""):i.pathname,E=m?T.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",Q=y||v;return Object(A.b)(d.a,{tabs:m,homepage:!1,theme:Q,pageTitle:u,pageDescription:w,pageKeywords:j,titleType:p},Object(A.b)(g,{title:c?Object(A.b)(c,null):u,label:"label",tabs:m,theme:Q}),m&&Object(A.b)(O,{title:u,slug:T,tabs:m,currentTab:E}),Object(A.b)(N.a,{padded:!0},t,Object(A.b)(f,{relativePagePath:r}),Object(A.b)(B,{date:k})),Object(A.b)(h.a,{pageContext:e,location:i,slug:T,tabs:m,currentTab:E}),Object(A.b)(o.a,null))}},BAC9:function(a,e,t){a.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(a,e,t){a.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(a,e,t){a.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},P6aI:function(a,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return r}));var i=t("wx14"),c=t("zLVn"),s=(t("q1tI"),t("7ljp")),l=t("013z"),n=(t("qKvR"),["components"]),o={},d={_frontmatter:o},b=l.a;function r(a){var e=a.components,t=Object(c.a)(a,n);return Object(s.b)(b,Object(i.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Now that you have a ROKS cluster, you need to install manually the Cloud Pak for Pak_Name. Let’s do it!"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Login to ",Object(s.b)("a",{parentName:"p",href:"https://cloud.ibm.com/catalog"},"https://cloud.ibm.com/catalog")," if you have not already")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"From the Catalog, select Cloud Pak for Pak_Name"),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"840px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNElEQVQ4y5VSTWsTURSdhYhpUQmKMR+NGcdqEoIhxIo2iCBUEanLKFTSggt1pUv/gn9C/KDVUkqhunDpouAPcNGkTVHiJppM5uu9TD4kx/teEztNq+LicO97M/fcc8+7iqqqCAaDOBEI4FRMg3p6HLE+VO0stDPnZPT5fDhw8BBGo9cwGruJI+oNHI/fwtHYVYycnMDhwHmMHBuHEo/HoWkashcu4vmLecwvLOHV67d4SXizuIzllfdYWFzB9akpTFyZRu7RGiafrCP3+DMmH64h9+AjLt//gMztZ7g0/RRKOp1GJBLBzL0ZbH35iuLGJkqbW4SyzNdLGygWS/hWqaD6vQbDMODYNmyHERxwt43qDx2rq+/g0FlJJpMIhcOYJcKfjoWOZaBrGzK2jQaalgnebMI0TdiWRUU2GHN2g+5EE8ZYX2E0itl8HpbO0TCaqNXEj230Wi5cvQ6Hcdl9G8yTO7vuJWEqlUJ4bAxzd+9QF4aaSePwFniri06ngxapdOhH5ikWhcO5iGIKSRgiDwVh12zAbejoUOxxhp5twa3X4HD+m9BLMIA4u66LcrncV0geFgoFuOIjdZEgvxj5x8ibgUIvyTChiLquQ8lms4iSh5LQbcniYUh1/yATkdMkSiaT8RC6O9548DeF24+x81hKIpFAKBTaQ/i/GKyQJBSLvUchdee0Ln/ybT+lFm2JIsb1+/3I0x4KDyx6DAGbHqPeqMMwDZkP7vcDZxYqVRtLn5r4BTC3S5lDjgcCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cp4mcm in catalog",title:"cp4mcm in catalog",src:"/tech-academy-dallas/static/1cd5b4d68ef820fa205ce925c28dd2c8/a6874/2020-05-12-20-28-23.png",srcSet:["/tech-academy-dallas/static/1cd5b4d68ef820fa205ce925c28dd2c8/7fc1e/2020-05-12-20-28-23.png 288w","/tech-academy-dallas/static/1cd5b4d68ef820fa205ce925c28dd2c8/a5df1/2020-05-12-20-28-23.png 576w","/tech-academy-dallas/static/1cd5b4d68ef820fa205ce925c28dd2c8/a6874/2020-05-12-20-28-23.png 840w"],sizes:"(max-width: 840px) 100vw, 840px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Select the Redhat Openshift Cluster that you just created from the list. The DTE provisioned cluster name starts with dteroks or playgrowth. Select ",Object(s.b)("strong",{parentName:"p"},"kube-system")," as project name."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"840px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgElEQVQ4y22TS08TURiGz2/wQowIQZSCIVhogTZQIkIavJEC5Y7VjVs3blxiYly40RULDSs3bvwJym0hhF/gxghMOzOlM51Lp7Qzhb5+52DJFJnkzfdN5pwn7znvN2xudh6J8QSmJqaQeppCaimFpYUlLC4snr0/Sz3HPK2bnprBdHIG83MLGIuPoaW5BTeuNwk1NzajqbEJTFUPkctpUFUViqJQr5NysG0bFz0nJyei7uzsINwTRm+oF6HuELrvdqPtVhuYaTgoOi5UJQuNQJ5Xqdt8XpXK6fftn9uI9kcxfO8+YgMxAW9vawfLSGmosoKMlBHKZXPQyaVlWjhyjlAsFOtUsAqoHlexub6J/t5+AeUOO+90InA7ACbtHUDal4SUjIIsOeUy82YdsNb7gX3hPgwNxggaQbAriNaWVjDnMAvLsuEUCiQHpWJJqAaoVcd2RM+BoGvkwJ5gmFxGqIbouB109CGwXPZQHJM7KtKmM/2DnXfJwTWH44/iSC3OYjaZwNjoMFY/fwLLGxb0vAGLFpbKLlwKxfWOUabeD/U7rZLDjbU17K5/Qcn8Ben3LuDt4dvXVbCiLMPTdbiaJsR7j2pZ0+uO7HcIAVzHq5cv8OH9Mt69eY2Vj28x8eQBmC1JtJmD8j7pdUD/ffrvsOHqNVy53HBaLzXQoN8Ek2UVGUpXoWR13YCm5cVwG4b1XyC1lDlwi4B8VPhg81CCNNgdgQ6w/T/74KOTOUgjzceHejktI0/Qi8bGsfnYAD++byAcimBk9DEGYyOIRmLo6uwCMygQ0zCF3JILz/VQ4cGcC+UUfISyU4BBf+XyyhYexuNI0v89mZjETHIaA9EB/AWKHD9nAwMT/gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"select project",title:"select project",src:"/tech-academy-dallas/static/83bca83f604cb4472d8626bbf8efed5f/a6874/2020-05-12-20-47-59.png",srcSet:["/tech-academy-dallas/static/83bca83f604cb4472d8626bbf8efed5f/7fc1e/2020-05-12-20-47-59.png 288w","/tech-academy-dallas/static/83bca83f604cb4472d8626bbf8efed5f/a5df1/2020-05-12-20-47-59.png 576w","/tech-academy-dallas/static/83bca83f604cb4472d8626bbf8efed5f/a6874/2020-05-12-20-47-59.png 840w"],sizes:"(max-width: 840px) 100vw, 840px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"You must run the preinstallation script before you install the Cloud Pak. There is no need to modify the content of the script, simply click on Run Script to complete the pre-installation step."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"842px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVQoz42TX0vcQBTF81FbEPoNWnzQx9LHIvTZL+GTPiiFFmxpKYV1VRBEdJNMMtnM/0l2s8e5d82yCoIDh3MH5v44mTvJZCVR5iVEIVDMCtSihlFmI6stvPVvVlaVFfKHgqFUjyIwedu0fNAZ9yZllDCf5WjnLfqux6JfsKgmdbFD8IEVfeR9H/vn/nSOE1pjURTpU+saUkoIIbhWSkFrDWMMuq7baLVa4bXV9z0yrTQDy7JkiVKgqiqWrCUDQwgYhoE1Asm3RWu5XK4TUnPTNOzWpiH4dGfObeSdZ2iMEasn6EsYAxcJSM2UgkDk2yleW5Rk+8yYnoEuXSTdVUhJbAI6SmgdD4aahmU6nABrHzZ7amalmgZmtOHBZLATxPkUMr9EI65gJOkacvYf1f0/qHICW1/CVFNoccHetdforEzPJPBToekGF+BNmvLN9Bd+/zzBn/PvmJ6f4e/pESY/jtGKW7T1Hez8AUHnCCqHV2uPpkCwKsE8f82zd3jw9Rvev9vB/u4eDj9/wcedDzj4tAvX2jSIRWqI6Roi+yjaj7CXf8ojFTxGb7GDqGMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"run script",title:"run script",src:"/tech-academy-dallas/static/04beae5cc96f57d63bbbe1f155234cd1/60ef9/2020-05-12-20-49-57.png",srcSet:["/tech-academy-dallas/static/04beae5cc96f57d63bbbe1f155234cd1/7fc1e/2020-05-12-20-49-57.png 288w","/tech-academy-dallas/static/04beae5cc96f57d63bbbe1f155234cd1/a5df1/2020-05-12-20-49-57.png 576w","/tech-academy-dallas/static/04beae5cc96f57d63bbbe1f155234cd1/60ef9/2020-05-12-20-49-57.png 842w"],sizes:"(max-width: 842px) 100vw, 842px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Once the pre-installation step is complete, you may proceed with the installation."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"863px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.416666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVQI10WMwQ6CMBQE+f9PIxZMSluotSJEQEpML8JxLBr1MNk3u8nL8lBRzgbRKg6tpOwUxbVC3U/IscEsHh1cyvOPKm06fN1T7zwu3NZAJqJBRkc+OIopPR4UYlQc5zq5RkePXXvss/tkotnvt/87u/V028QLZXWQoaTQPLYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"pre-req completed",title:"pre-req completed",src:"/tech-academy-dallas/static/67a246f305419358adfee85d748fa66c/26f46/2020-05-12-20-51-05.png",srcSet:["/tech-academy-dallas/static/67a246f305419358adfee85d748fa66c/7fc1e/2020-05-12-20-51-05.png 288w","/tech-academy-dallas/static/67a246f305419358adfee85d748fa66c/a5df1/2020-05-12-20-51-05.png 576w","/tech-academy-dallas/static/67a246f305419358adfee85d748fa66c/26f46/2020-05-12-20-51-05.png 863w"],sizes:"(max-width: 863px) 100vw, 863px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Enter a value for defaultAdminPassword. It is important that you choose a password that is 32 characters in length and conforms to the password rule: include only numbers, letters or ’-‘."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"818px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAq0lEQVQY021Q2w7CIBTj/39RnT7KJjBug3GrQIKJGU2aPpRzOC0RQmDbNlBKOxljCCFgoJRy4cxD01xAvPcw2iDn3JlS6uqcQ/NmiPWNdVcv16XkOA5wzvtwjPFnsg8DfVNorTuNMVBS9WWpfmZrmqgkwr4jSIkoOHKdJ+P0cdmIpJTCuq5olVhjYa3tS3MzrcG5POBeT7jn0tXfbyjnCTLraNbXX2+Yo0X+Anbyh23zZURJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"password",title:"password",src:"/tech-academy-dallas/static/99f376873532a0e85b02d60ddd5bfc89/96d67/2020-05-12-20-54-44.png",srcSet:["/tech-academy-dallas/static/99f376873532a0e85b02d60ddd5bfc89/7fc1e/2020-05-12-20-54-44.png 288w","/tech-academy-dallas/static/99f376873532a0e85b02d60ddd5bfc89/a5df1/2020-05-12-20-54-44.png 576w","/tech-academy-dallas/static/99f376873532a0e85b02d60ddd5bfc89/96d67/2020-05-12-20-54-44.png 818w"],sizes:"(max-width: 818px) 100vw, 818px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Accept license agreement and click ",Object(s.b)("strong",{parentName:"p"},"Install")," to install Cloud Pak for Pak_Name. The installation takes about 30 minutes."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"377px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVQoz6WTS2/TQBRG8y9QF6Wkfo2dBDtx4tgeO3bsNE0FggUgsUiLRElCE4FDmxRCEUi81qjqjh/7ccd5iAoh8Vgcz53r8Zk715qC67iQihJUWQVT2T+jazo0RUOhbJTRbDRh3bby5BqDGdfG9UdivmadFwhZLty6sYWryytMTiao2w0kcQLuBegkHQR+gFbQQq/bQyftIAojxFEbaTtFmqR5XsA9DnlXXgrFUUWVZsXcCAKfI25FCHlIBGhHMRq02bIKdVONvqpa11jeslwoHsKuawY8l0P01PdbaIUxzX24TZ7nLbMGRVKhszI0VV9J2YZrQka7GqyCWrMLy45RbaSwnD1UrACmHaHqdGG7+3D4XRq7OU54H05wD3XvAFYtBJMV8pBQkTVs01++JWkw6inKJNKrEUokqbgHec5odMAoJxs2tneKuEnrd3ZVQsljgXAUJQUFk/rw1HXQ9z0c/sQR9e6Icxx6Xo6Il3N3RXMT94lj7uGOZaIQ6jq+D4/x/tUpPmcZPmVTfKTx9/z6/sPLDN9mZ7jodVHwGcOX0RAvFu8wW1xgOn+DcXaKyfQM4z9ArBvR+tezc2T7JAyowssnfcxHz/F2MMRiSAz+jvNnA3wdn2C+l9BNUTU8orM//A8eEI+rFpJSCT8A1LKnhml00PIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"accept license",title:"accept license",src:"/tech-academy-dallas/static/a37f587846deb370f64c24cab697302f/e27b9/2020-05-12-21-02-48.png",srcSet:["/tech-academy-dallas/static/a37f587846deb370f64c24cab697302f/7fc1e/2020-05-12-21-02-48.png 288w","/tech-academy-dallas/static/a37f587846deb370f64c24cab697302f/e27b9/2020-05-12-21-02-48.png 377w"],sizes:"(max-width: 377px) 100vw, 377px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",{parentName:"li"},"You can track the deployment on the Schematics workspace that opens."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"840px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.166666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLUlEQVQY05WPy06DQBiFeUNLEVqrLfoW7nwAF93otjG61Bh3bnwJ98ZU6IVrgQIDVOjnQN0bM/Odk5PJf/6MMhqe0Vc1dO2Yi4l5wDQ5H086zPGY05MRmtpH7Wkc9QZo2gBVNVD7Q5l1DN1gKDE0HeXjy8K2POaWi73w+Ph0sBYBYVSyiStcP+Pu/onp9IbZ8ztXjzB7K7l9rbh82HH9ssMNBCtfECUlytye46x9Vk5EEGY4ssAPc4nA34jOl06MvQxZuRlrv2DpSdwCy2ldFsUCz8+JNimKt/ZIky1ZklKIklLk7JsaKfI2nUv5pc31wTvqLu/lqQOPwnFQ0rYoL8iznCSNSbcpVbWjafY0ddNR/0EjFzffNVUhvywyQZ7mB2RpmwtRUMrH/1F1cz9ZeKQD/XuavwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"schematics",title:"schematics",src:"/tech-academy-dallas/static/5ed0664c1db29f474d4ba9287a960f7a/a6874/2020-05-12-21-00-21.png",srcSet:["/tech-academy-dallas/static/5ed0664c1db29f474d4ba9287a960f7a/7fc1e/2020-05-12-21-00-21.png 288w","/tech-academy-dallas/static/5ed0664c1db29f474d4ba9287a960f7a/a5df1/2020-05-12-21-00-21.png 576w","/tech-academy-dallas/static/5ed0664c1db29f474d4ba9287a960f7a/a6874/2020-05-12-21-00-21.png 840w"],sizes:"(max-width: 840px) 100vw, 840px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"840px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABn0lEQVQoz3VSiW7CMBTjOzdN4po2YPtkikRpSym9L3p6z4+rsK2S9ZKX1LGdjCbjGSbjOV5f3jCfvmO1+BZ84Wu5wvJzqVgtVlh8LDCdzBTz6fxcZ++PvfEUoyTO4dgewjDFqWxRCuqqRVvf0TWd4t5rtDaXOsQoSWMURY6+6wUdsixDLuDmTuZN0yCOY+nlt17XntG27Q2cV2UlhEkCz/OQxAnSNEUYhMjSDEVeyEGFKC61z33alx7X8jwXRyddL4sSdV3rfBSFEQzDgLk1Yds2HMfB4XCA67rwj76OgyBQwuuhVEyQvO97Vc1aVzUzTLDb7eAdPOz3e1iWJXmGqpRrJKqqCsOPP18x/BiJKlyv10JqYbvd4ng8IooiJaUKktGOWjqdtP5F/kBorA1YQmiapubp7l2tvu+rXRKragEzeyZ6IIyjGJvNBrZlq/XAD/RHWtXgRdXtZi9ZPZM9ED5nyIuhMgZOe3w2z1kN7f5SSMKhVY6pkNldM+PtccwewUOo9k+FN8uijDnyuTi2o6p5Qfr+svP7I9n1If9n+QeqgH8NbrSbAAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"log",title:"log",src:"/tech-academy-dallas/static/c24bdec4cd19c62f45d651d08bbb2832/a6874/2020-05-12-21-06-11.png",srcSet:["/tech-academy-dallas/static/c24bdec4cd19c62f45d651d08bbb2832/7fc1e/2020-05-12-21-06-11.png 288w","/tech-academy-dallas/static/c24bdec4cd19c62f45d651d08bbb2832/a5df1/2020-05-12-21-06-11.png 576w","/tech-academy-dallas/static/c24bdec4cd19c62f45d651d08bbb2832/a6874/2020-05-12-21-06-11.png 840w"],sizes:"(max-width: 840px) 100vw, 840px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Your cluster domain can be found in multiple places, for example at the end of installation log file."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1115px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"13.88888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAq0lEQVQI11WPywrCMBBF+/8fJiiCrtSCfVljjLG2sam2YnKMwY0DhzOrO3OTLE0RdU2V50hxou06rLU472EcwfYwDNG+v//hAm/T4R4PvuOcJynmM8R6xWG5QJcFumk4hgNKKXSeoXYbZOC829IWGaYqueX7uPd1xVOKENrGQB+eSDbblLI6ss/KaCEvSHVFX1sujUEFpL7RGIsZph9jZJjevEKRIKaX4zk5Pi+v4lEHQi1DAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"output parameters",title:"output parameters",src:"/tech-academy-dallas/static/8f5876e6f5d08551f7d32fba700aa15b/c8ede/2020-05-12-21-23-09.png",srcSet:["/tech-academy-dallas/static/8f5876e6f5d08551f7d32fba700aa15b/7fc1e/2020-05-12-21-23-09.png 288w","/tech-academy-dallas/static/8f5876e6f5d08551f7d32fba700aa15b/a5df1/2020-05-12-21-23-09.png 576w","/tech-academy-dallas/static/8f5876e6f5d08551f7d32fba700aa15b/c8ede/2020-05-12-21-23-09.png 1115w"],sizes:"(max-width: 1115px) 100vw, 1115px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",{parentName:"li"},"However the easiest way is to click ",Object(s.b)("strong",{parentName:"p"},"Offering dashboard")," at the top of the Schematics workspace"),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"839px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGklEQVQY042PyUoDQRRF+0NFQ4zjUoPdGTSDfoOgkr0QwQ8wuHPtwn0ECUln0O6u6q7q+ViJZO/i8N67XC7vWo7dpOG0OT+r03QadC+vDB36nR79bo+b/jWNC5vD/Rq16gF7Ry0qx21OTm12qzY7FZv6mUO72aJhsiwhQ+ZLwXQucReCyUwaBCsvIwhBp/D+MeZ+8Mjw+YXBK9yOYPQWcjf0eXjyGX8lCAV5Btb4c8JsOsN1V6xWAT9eiOdHBELjB2qDDGOUztE6I1YKFSmiSKOVJok1QioC4xOBwFq4S7xvDyUjpBTISJAmCZSFodxQmr0stqzvrVZSFH++9YzjFCsylSMTpkJtAiW+8AmNlmWZqZD/nzw3j6T8AvxhYIRk+H4GAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"offering dashboard",title:"offering dashboard",src:"/tech-academy-dallas/static/7b37e6e112f693c9e1c6a51d36fb74e7/b6bf4/2020-05-12-21-25-47.png",srcSet:["/tech-academy-dallas/static/7b37e6e112f693c9e1c6a51d36fb74e7/7fc1e/2020-05-12-21-25-47.png 288w","/tech-academy-dallas/static/7b37e6e112f693c9e1c6a51d36fb74e7/a5df1/2020-05-12-21-25-47.png 576w","/tech-academy-dallas/static/7b37e6e112f693c9e1c6a51d36fb74e7/b6bf4/2020-05-12-21-25-47.png 839w"],sizes:"(max-width: 839px) 100vw, 839px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Login to Cloud Pak interface using icp-console.",Object(s.b)("em",{parentName:"p"},"yourcluster-domain-name"),". Provide ",Object(s.b)("strong",{parentName:"p"},"admin")," and the password that you specified in step 6 above."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"840px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZUlEQVQ4y2WTyW/TUBDG/Sdz5ciVG0dOIEClpIJDhFSKBIXSpAkJtGmL09AkbfbFWRovb7X9Me+ZJhFY+jSTief3Zt6MnZAnCFgCn2T8bUUixXKlMVtIeHNlNVtstFgqrHxt7Zx+z8k6zUGMZ/sczz9wjBcJpE7BCGSATKbw6MWJJxFFMSVqjCYSgzFpJMknYBATPIuPpxLO3E9wM9RoDzQm85ik4S1jAqYWOJlllYUEFAKUqNG8lWh2pLWNtkCL/O5AotMn4CqMMZ5JSqQTKHnkKWsDFlvgcKpsUuVcoN6UOL8SOHMz1eqCwApCJnQ1Ma5vCGjubxkmuAtTxNg8KgEBE3SGCqe/OC6uOH5cchR/Gl9YcOmM49SV6I8VOgMF91rAGXs+josVfCuUrS19P0XhpIraRQNcpWh1JUGYhdbqHIcljvKZQJUq/lLO4O5vE2Mo1xicdmeEl692sbf3DrncW+TI7rzO4eDjIQQNyG1J7H8NUafT+0OBwxOGvfccu3mOnTzDJQG7fYHjKsOnYgSHiQQp/n+oYwts0MV/LkW4bHD0KPFF3seDxx4ePvHx6CmzoN6AKr7gKFAnjh+ZfQpo/Bw+KWQKUmW3aSYdMA0/1HbHJlMzWdPqCkeViO5R4rYnMKMt4IKGyDWc6O/OhTy2k9XEcm9WeHPQRkj/RRQ3BwiZyQ80pp6mnVNrkIkv7pS1zv0XkYFTCAX0pxxVd57FmEnQNEVhkww8iDTu/AxmFFEXZl8ZHe5E/3xqxhpokm5a5oIAVFlo/Xgt06LRfZXrljcVbqBmP0NbYZZkErYh27Bt/w+s/NFm8curTAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"login",title:"login",src:"/tech-academy-dallas/static/42db5bc5b9d767c6241b22cecffe5480/a6874/2020-05-12-21-28-45.png",srcSet:["/tech-academy-dallas/static/42db5bc5b9d767c6241b22cecffe5480/7fc1e/2020-05-12-21-28-45.png 288w","/tech-academy-dallas/static/42db5bc5b9d767c6241b22cecffe5480/a5df1/2020-05-12-21-28-45.png 576w","/tech-academy-dallas/static/42db5bc5b9d767c6241b22cecffe5480/a6874/2020-05-12-21-28-45.png 840w"],sizes:"(max-width: 840px) 100vw, 840px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"You have successfully completed cluster provisioning, Cloud Pak for Pak_Name installation. You are ready to proceed to tutorials that use Cloud Pak for Pak_Name on ROKS, or install other tools if desired."),Object(s.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"840px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXElEQVQ4y3VTuY4TQRCdP0RAQsgaH8Emlu1gxQcgEiQEAhLyTQiQkICAACGEIOGw1+v1LqyvOXzO2XP6eFTVMAaEGOmpprtrql6/V6M1mw00m020Wi00Gg1Uq1WUy+V/UKlUUCrdws2DEq0rODw8ROkgj/V6HbVaTd41z/fhBwoBwfV8JGmKP5/dboftdisxy9bwVET5Ab51zvH8HfD20xyWOaZzYL1eQxtPdDAmhoHheALdMGFNpzBMExPdwGplw+emhOVqBcdXePjoCa5ev4Y7jz/jyo0Gjo5asG0XnudB65yeod3t4WunK7Hb60vsnPbwpX2CETUJw1AKel5+m/cfPuLeg6e4f+zj9t3XePXyBZTKc7TlcokFYTZfCANhE/hyLX4PKHJBpRTM2QK6NceC2DheiGdvLPQGioTZiGSco0VRStoQSLtUkCGKOSZIkhxxkkKFFOMYURRLA47bdYx1FiGMIjkTDdmIIMivw2yYuuP6okfBUFEBzwv2WjITReasHN77vZ9lGbTvlwPoZABfOS+ocDkcinaO4+z1+zEYyB7n5QUVmTkRQw3TEkLCcDTWYU5n4iazYobzRa6r47jyIeujGxZMa0oTMJM8bsR5jL8YOh5pQnokSSw6JKSX6yeyx2tBsRfSuejImiXgb1WYr7nBZrOBVlT/Hwo26S/T2KR0b2C6N66Adn5xgT6hd9bHJek0YV1IK44maWsYPNwruSoPOmM6m8N1XdiksUsNWfsCWqd7ivZJV4oORyMMyBDGaDTGlP4Yy7LoL7BlRrkQg40pZte2nb1JjJ+uTq9LyztSvAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"welcome page",title:"welcome page",src:"/tech-academy-dallas/static/5563b1c2ed6bd227610c00ba754bc01e/a6874/2020-05-12-21-31-32.png",srcSet:["/tech-academy-dallas/static/5563b1c2ed6bd227610c00ba754bc01e/7fc1e/2020-05-12-21-31-32.png 288w","/tech-academy-dallas/static/5563b1c2ed6bd227610c00ba754bc01e/a5df1/2020-05-12-21-31-32.png 576w","/tech-academy-dallas/static/5563b1c2ed6bd227610c00ba754bc01e/a6874/2020-05-12-21-31-32.png 840w"],sizes:"(max-width: 840px) 100vw, 840px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))}r.isMDXComponent=!0},QH2O:function(a,e,t){a.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-environment-installpak-index-mdx-087e735abdad4204c2b4.js.map