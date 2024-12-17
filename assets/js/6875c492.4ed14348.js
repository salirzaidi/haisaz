"use strict";(self.webpackChunkhaisaz=self.webpackChunkhaisaz||[]).push([[813],{7713:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(1312),s=a(9022),r=a(4848);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(s.A,{permalink:a,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(s.A,{permalink:i,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2907:(e,t,a)=>{a.d(t,{A:()=>U});a(6540);var n=a(4164),s=a(4096),r=a(4848);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,s.e7)(),{permalink:c,title:d}=a,g=i?"h1":"h2";return(0,r.jsx)(g,{className:(0,n.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=a(1312),g=a(5846),u=a(6266);const h={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,s.e7)(),{date:i,readingTime:l}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,n.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(m,{readingTime:l})]})]});var c}var A=a(6913);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,s.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,n.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(A.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(f,{})]})}var T=a(440),N=a(7910);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,s.e7)();return(0,r.jsx)("div",{id:i?T.LU:void 0,className:(0,n.A)("markdown",a),children:(0,r.jsx)(N.A,{children:t})})}var y=a(7559),_=a(4336),k=a(2053);function P(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(P,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,u=a.length>0;if(!(u||g||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.A,{tags:a})})}),e&&(0,r.jsx)(_.A,{className:(0,n.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("col",{"col--9":g}),children:(0,r.jsx)(k.A,{tags:a})}),g&&(0,r.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(C,{blogPostTitle:i,to:e.permalink})})]})}function U(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,n.A)(l,a),children:[(0,r.jsx)(v,{}),(0,r.jsx)(w,{children:t}),(0,r.jsx)(R,{})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(4096),s=a(2907),r=a(4848);function i(e){let{items:t,component:a=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});a(6540);var n=a(4164),s=a(1312),r=a(1213),i=a(7559),l=a(6461),o=a(8774),c=a(8027),d=a(7713),g=a(1463),u=a(3892),h=a(2234),m=a(1107),x=a(4848);function p(e){let{tag:t}=e;const a=(0,l.ZD)(t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.be,{title:a,description:t.description}),(0,x.jsx)(g.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:a,sidebar:n,listMetadata:r}=e;const i=(0,l.ZD)(t);return(0,x.jsxs)(c.A,{sidebar:n,children:[t.unlisted&&(0,x.jsx)(h.A,{}),(0,x.jsxs)("header",{className:"margin-bottom--xl",children:[(0,x.jsx)(m.A,{as:"h1",children:i}),t.description&&(0,x.jsx)("p",{children:t.description}),(0,x.jsx)(o.A,{href:t.allTagsPath,children:(0,x.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(u.A,{items:a}),(0,x.jsx)(d.A,{metadata:r})]})}function A(e){return(0,x.jsxs)(r.e3,{className:(0,n.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage),children:[(0,x.jsx)(p,{...e}),(0,x.jsx)(j,{...e})]})}},2234:(e,t,a)=>{a.d(t,{A:()=>c});a(6540);var n=a(4164),s=a(4084),r=a(7559),i=a(7293),l=a(4848);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,n.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},9022:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(4164),s=a(8774),r=a(4848);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(4164),s=a(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(4848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},2053:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var n=a(4164),s=a(1312),r=a(6133);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.A,{...e})},e.permalink)))})]})}},6461:(e,t,a)=>{a.d(t,{Y4:()=>g,ZD:()=>l,np:()=>d,uz:()=>c,wI:()=>o});a(6540);var n=a(1312),s=a(5846),r=a(4848);function i(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,n.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=i();return(0,n.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=i();return(0,n.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,n.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,r.jsx)(n.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function g(){return(0,r.jsx)(n.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},4084:(e,t,a)=>{a.d(t,{AE:()=>o,Rc:()=>i,TT:()=>d,Uh:()=>l,Yh:()=>c});a(6540);var n=a(1312),s=a(5260),r=a(4848);function i(){return(0,r.jsx)(n.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(n.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(n.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(n.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},5054:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var n=a(4164),s=a(4848);const r=e=>{let{className:t,style:a,children:r,textAlign:i,variant:l,italic:o=!1,noDecoration:c=!1,transform:d,breakWord:g=!1,truncate:u=!1,weight:h}=e;const m=i?`text--${i}`:"",x=l?`text--${l}`:"",p=o?"text--italic":"",j=c?"text-no-decoration":"",A=d?`text--${d}`:"",b=g?"text--break":"",f=u?"text--truncate":"",v=h?`text--${h}`:"";return(0,s.jsx)("div",{className:(0,n.A)("card__body",t,m,A,x,p,j,b,f,v),style:a,children:r})}},1575:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var n=a(4164),s=a(4848);const r=e=>{let{className:t,style:a,children:r,textAlign:i,variant:l,italic:o=!1,noDecoration:c=!1,transform:d,breakWord:g=!1,truncate:u=!1,weight:h}=e;const m=i?`text--${i}`:"",x=l?`text--${l}`:"",p=o?"text--italic":"",j=c?"text-no-decoration":"",A=d?`text--${d}`:"",b=g?"text--break":"",f=u?"text--truncate":"",v=h?`text--${h}`:"";return(0,s.jsx)("div",{className:(0,n.A)("card__footer",t,m,A,x,p,j,b,f,v),style:a,children:r})}},4077:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var n=a(4164),s=a(4848);const r=e=>{let{className:t,style:a,children:r,textAlign:i,variant:l,italic:o=!1,noDecoration:c=!1,transform:d,breakWord:g=!1,truncate:u=!1,weight:h}=e;const m=i?`text--${i}`:"",x=l?`text--${l}`:"",p=o?"text--italic":"",j=c?"text-no-decoration":"",A=d?`text--${d}`:"",b=g?"text--break":"",f=u?"text--truncate":"",v=h?`text--${h}`:"";return(0,s.jsx)("div",{className:(0,n.A)("card__header",t,m,A,x,p,j,b,f,v),style:a,children:r})}},1997:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var n=a(4164),s=a(4848);const r=e=>{let{className:t,style:a,children:r,shadow:i}=e;const l=i?`item shadow--${i}`:"";return(0,s.jsx)("div",{className:(0,n.A)("card",t,l),style:a,children:r})}},8506:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var n=a(3384),s=a(1997),r=a(5054),i=a(1575),l=a(4077);const o={...n.A,Card:s.A,CardHeader:l.A,CardBody:r.A,CardFooter:i.A}}}]);