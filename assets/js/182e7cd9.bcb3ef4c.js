"use strict";(self.webpackChunkyadogo_docu=self.webpackChunkyadogo_docu||[]).push([[957],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=o,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Conventional Commit",sidebar_position:1},i="Conventional Commit",l={unversionedId:"git/conventional_commit",id:"git/conventional_commit",title:"Conventional Commit",description:'En el desarrollo de software, los "Conventional Commits" (Commits Convencionales) son una convenci\xf3n para escribir mensajes de commit que siguen un formato estructurado y consistente. Esta pr\xe1ctica se ha vuelto popular en proyectos de c\xf3digo abierto y en la comunidad de desarrollo en general debido a su claridad, legibilidad y facilidad para automatizar ciertas tareas relacionadas con el versionado del software y la generaci\xf3n de cambios.',source:"@site/docs/git/conventional_commit.md",sourceDirName:"git",slug:"/git/conventional_commit",permalink:"/yadogo-docu/docs/git/conventional_commit",draft:!1,editUrl:"https://yadogo.github.io/yadogo-docu/docs/git/conventional_commit.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Conventional Commit",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/yadogo-docu/docs/category/git"},next:{title:"Flujo de trabajo de Gitflow",permalink:"/yadogo-docu/docs/git/branch"}},c={},s=[{value:"El formato de un &quot;Conventional Commit&quot; se compone de tres partes principales:",id:"el-formato-de-un-conventional-commit-se-compone-de-tres-partes-principales",level:2},{value:"Recursos",id:"recursos",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conventional-commit"},"Conventional Commit"),(0,o.kt)("p",null,'En el desarrollo de software, los "Conventional Commits" (Commits Convencionales) son una convenci\xf3n para escribir mensajes de commit que siguen un formato estructurado y consistente. Esta pr\xe1ctica se ha vuelto popular en proyectos de c\xf3digo abierto y en la comunidad de desarrollo en general debido a su claridad, legibilidad y facilidad para automatizar ciertas tareas relacionadas con el versionado del software y la generaci\xf3n de cambios.'),(0,o.kt)("h2",{id:"el-formato-de-un-conventional-commit-se-compone-de-tres-partes-principales"},'El formato de un "Conventional Commit" se compone de tres partes principales:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Tipo (Type):")," Representa el prop\xf3sito general del cambio introducido en el commit. Los tipos m\xe1s comunes incluyen:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feat:")," Se utiliza cuando se agrega una nueva caracter\xedstica al c\xf3digo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fix:")," Se usa cuando se corrige un error o un bug."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"docs:")," Hace referencia a cambios en la documentaci\xf3n del proyecto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style:")," Refleja cambios que no afectan el c\xf3digo en s\xed, sino la forma en que se ve o se formatea."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"refactor:")," Se utiliza cuando se realiza un cambio interno en el c\xf3digo que no agrega nuevas caracter\xedsticas ni corrige errores."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"test"),": Representa cambios en los casos de prueba (tests) del proyecto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chore:")," Indica cambios en tareas de mantenimiento, configuraci\xf3n, entre otros."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\xc1rea (Scope) ","[opcional]",":")," Indica la parte espec\xedfica del proyecto que se ve afectada por el commit. No es obligatorio, pero puede ser \xfatil para proyectos grandes con m\xfaltiples componentes o m\xf3dulos.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mensaje (Message):"),' Es una breve descripci\xf3n del cambio realizado en el commit. Debe estar escrito en tiempo presente y en imperativo. Por ejemplo: "Agrega nueva funci\xf3n X" o "Corrige el c\xe1lculo de Y".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ejemplo de un Conventional Commit")),(0,o.kt)("p",{parentName:"li"},"A continuaci\xf3n, se muestra un ejemplo de c\xf3mo se ver\xeda un commit convencional:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"feat(users): \ud83d\udce6 Add login functionality\n")),(0,o.kt)("p",{parentName:"li"},"En este caso, el commit agrega una nueva caracter\xedstica relacionada con los usuarios (users), espec\xedficamente, la funcionalidad de inicio de sesi\xf3n (feat).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Extensi\xf3n Conventional Commit:"),"\nHay una extensi\xf3n para Visual Studio Code llamada ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits"},"Conventional Commit")," muy intuitiva que nos ayudara en los primeros d\xedas a hacerlo bien"))),(0,o.kt)("h2",{id:"recursos"},"Recursos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"https://www.conventionalcommits.org/en/v1.0.0/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://carlosazaustre.es/conventional-commits"},"https://carlosazaustre.es/conventional-commits")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitmoji.dev/"},"https://gitmoji.dev/"))))}u.isMDXComponent=!0}}]);