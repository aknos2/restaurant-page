(()=>{"use strict";var __webpack_modules__={44:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('/* harmony import */ var _images_tinytrans_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);\n\nconst imgElement = document.createElement("img");\nimgElement.src = _images_tinytrans_gif__WEBPACK_IMPORTED_MODULE_0__;\n\n\nconst Pages = (() => {\n    const content = document.querySelector("#content");\n\n    const displayHomePage = async () => {\n        // Dynamically import the home page and its styles\n        const { displayHomePage } = await __webpack_require__.e(/* import() */ 477).then(__webpack_require__.bind(__webpack_require__, 477));\n        await __webpack_require__.e(/* import() */ 679).then(__webpack_require__.bind(__webpack_require__, 679));\n        displayHomePage(_images_tinytrans_gif__WEBPACK_IMPORTED_MODULE_0__);\n    };\n\n    const displayMenuPage = async () => {\n        const { displayMenuPage } = await __webpack_require__.e(/* import() */ 313).then(__webpack_require__.bind(__webpack_require__, 313));\n        await __webpack_require__.e(/* import() */ 675).then(__webpack_require__.bind(__webpack_require__, 675));\n        displayMenuPage(_images_tinytrans_gif__WEBPACK_IMPORTED_MODULE_0__);\n    };\n\n    const displayContactPage = async () => {\n        const { displayContactPage } = await __webpack_require__.e(/* import() */ 452).then(__webpack_require__.bind(__webpack_require__, 452));\n        await __webpack_require__.e(/* import() */ 360).then(__webpack_require__.bind(__webpack_require__, 360));\n        displayContactPage(_images_tinytrans_gif__WEBPACK_IMPORTED_MODULE_0__);\n    };\n\n    return { displayHomePage, displayMenuPage, displayContactPage };\n})();\n\nconst Navigation = (() => {\n    const switchTab = async (tab) => {\n        clearStyles();\n\n        if (tab === "home") {\n            Pages.displayHomePage();\n        } else if (tab === "menu") {\n            Pages.displayMenuPage();\n        } else if (tab === "contact") {\n            Pages.displayContactPage();\n        }\n    };\n\n    const clearStyles = () => {\n        const styleSheets = document.querySelectorAll("style[data-webpack]");\n        styleSheets.forEach((style) => style.remove());\n    };\n\n    const setupNavigation = () => {\n        const homeButton = document.querySelector("#home-btn");\n        const menuButton = document.querySelector("#menu-btn");\n        const contactButton = document.querySelector("#contact-btn");\n\n        homeButton.addEventListener("click", () => switchTab("home"));\n        menuButton.addEventListener("click", () => switchTab("menu"));\n        contactButton.addEventListener("click", () => switchTab("contact"));\n    };\n\n    return { setupNavigation, switchTab };\n})();\n\n// Initial Setup\nfunction startApp() {\n    Navigation.switchTab("home"); // Load the home page by default\n    Navigation.setupNavigation(); // Set up the navigation buttons\n}\n\n\nstartApp();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQuanMiLCJtYXBwaW5ncyI6IjtBQUErQztBQUMvQztBQUNBLGlCQUFpQixrREFBUzs7O0FBRzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0IsUUFBUSxrR0FBZ0I7QUFDMUQsY0FBYyxrR0FBMkI7QUFDekMsd0JBQXdCLGtEQUFTO0FBQ2pDOztBQUVBO0FBQ0EsZ0JBQWdCLGtCQUFrQixRQUFRLGtHQUFnQjtBQUMxRCxjQUFjLGtHQUEyQjtBQUN6Qyx3QkFBd0Isa0RBQVM7QUFDakM7O0FBRUE7QUFDQSxnQkFBZ0IscUJBQXFCLFFBQVEsa0dBQW1CO0FBQ2hFLGNBQWMsa0dBQThCO0FBQzVDLDJCQUEyQixrREFBUztBQUNwQzs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEM7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvb2RJbWFnZSBmcm9tICcuL2ltYWdlcy90aW55dHJhbnMuZ2lmJztcbmNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1nRWxlbWVudC5zcmMgPSBmb29kSW1hZ2U7XG5cblxuY29uc3QgUGFnZXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBkaXNwbGF5SG9tZVBhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIER5bmFtaWNhbGx5IGltcG9ydCB0aGUgaG9tZSBwYWdlIGFuZCBpdHMgc3R5bGVzXG4gICAgICAgIGNvbnN0IHsgZGlzcGxheUhvbWVQYWdlIH0gPSBhd2FpdCBpbXBvcnQoXCIuL2hvbWVcIik7XG4gICAgICAgIGF3YWl0IGltcG9ydChcIi4vc3R5bGVzL2hvbWUuY3NzXCIpO1xuICAgICAgICBkaXNwbGF5SG9tZVBhZ2UoZm9vZEltYWdlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGlzcGxheU1lbnVQYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGRpc3BsYXlNZW51UGFnZSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9tZW51XCIpO1xuICAgICAgICBhd2FpdCBpbXBvcnQoXCIuL3N0eWxlcy9tZW51LmNzc1wiKTtcbiAgICAgICAgZGlzcGxheU1lbnVQYWdlKGZvb2RJbWFnZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BsYXlDb250YWN0UGFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBkaXNwbGF5Q29udGFjdFBhZ2UgfSA9IGF3YWl0IGltcG9ydChcIi4vY29udGFjdFwiKTtcbiAgICAgICAgYXdhaXQgaW1wb3J0KFwiLi9zdHlsZXMvY29udGFjdC5jc3NcIik7XG4gICAgICAgIGRpc3BsYXlDb250YWN0UGFnZShmb29kSW1hZ2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBkaXNwbGF5SG9tZVBhZ2UsIGRpc3BsYXlNZW51UGFnZSwgZGlzcGxheUNvbnRhY3RQYWdlIH07XG59KSgpO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBzd2l0Y2hUYWIgPSBhc3luYyAodGFiKSA9PiB7XG4gICAgICAgIGNsZWFyU3R5bGVzKCk7XG5cbiAgICAgICAgaWYgKHRhYiA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgICAgIFBhZ2VzLmRpc3BsYXlIb21lUGFnZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gXCJtZW51XCIpIHtcbiAgICAgICAgICAgIFBhZ2VzLmRpc3BsYXlNZW51UGFnZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgICAgICAgIFBhZ2VzLmRpc3BsYXlDb250YWN0UGFnZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyU3R5bGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZVNoZWV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLXdlYnBhY2tdXCIpO1xuICAgICAgICBzdHlsZVNoZWV0cy5mb3JFYWNoKChzdHlsZSkgPT4gc3R5bGUucmVtb3ZlKCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtYnRuXCIpO1xuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ0blwiKTtcbiAgICAgICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1idG5cIik7XG5cbiAgICAgICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3dpdGNoVGFiKFwiaG9tZVwiKSk7XG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN3aXRjaFRhYihcIm1lbnVcIikpO1xuICAgICAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzd2l0Y2hUYWIoXCJjb250YWN0XCIpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgc2V0dXBOYXZpZ2F0aW9uLCBzd2l0Y2hUYWIgfTtcbn0pKCk7XG5cbi8vIEluaXRpYWwgU2V0dXBcbmZ1bmN0aW9uIHN0YXJ0QXBwKCkge1xuICAgIE5hdmlnYXRpb24uc3dpdGNoVGFiKFwiaG9tZVwiKTsgLy8gTG9hZCB0aGUgaG9tZSBwYWdlIGJ5IGRlZmF1bHRcbiAgICBOYXZpZ2F0aW9uLnNldHVwTmF2aWdhdGlvbigpOyAvLyBTZXQgdXAgdGhlIG5hdmlnYXRpb24gYnV0dG9uc1xufVxuXG5cbnN0YXJ0QXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///44\n')},239:(e,t,_)=>{e.exports=_.p+"93c441f0804a36d80053.gif"}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.d=(e,t)=>{for(var _ in t)__webpack_require__.o(t,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:t[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((t,_)=>(__webpack_require__.f[_](e,t),t)),[])),__webpack_require__.u=e=>e+"."+{313:"1b57498da9295e0df6fa",360:"d45b4b8dc886245e07c2",452:"1d4988b3c1cbeae3df14",477:"d899ad6397c4853bc6de",675:"cd0c22df43cd3bc6751d",679:"4e4bd6c6214995505713"}[e]+".js",__webpack_require__.miniCssF=e=>e+"."+{360:"d6065abf8b2871723551",675:"a0937cbf8cc7749aca85",679:"40e968aea2d0fd0cc8bc"}[e]+".css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),inProgress={},dataWebpackPrefix="restaurant-page:",__webpack_require__.l=(e,t,_,a)=>{if(inProgress[e])inProgress[e].push(t);else{var n,r;if(void 0!==_)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var b=i[c];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==dataWebpackPrefix+_){n=b;break}}n||(r=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",dataWebpackPrefix+_),n.src=e),inProgress[e]=[t];var u=(t,_)=>{n.onerror=n.onload=null,clearTimeout(g);var a=inProgress[e];if(delete inProgress[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(_))),t)return t(_)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=u.bind(null,n.onerror),n.onload=u.bind(null,n.onload),r&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var _=t.getElementsByTagName("script");if(_.length)for(var a=_.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=_[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{if("undefined"!=typeof document){var e={792:0};__webpack_require__.f.miniCss=(t,_)=>{e[t]?_.push(e[t]):0!==e[t]&&{360:1,675:1,679:1}[t]&&_.push(e[t]=(e=>new Promise(((t,_)=>{var a=__webpack_require__.miniCssF(e),n=__webpack_require__.p+a;if(((e,t)=>{for(var _=document.getElementsByTagName("link"),a=0;a<_.length;a++){var n=(i=_[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){var i;if((n=(i=r[a]).getAttribute("data-href"))===e||n===t)return i}})(a,n))return t();((e,t,_,a,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",__webpack_require__.nc&&(r.nonce=__webpack_require__.nc),r.onerror=r.onload=_=>{if(r.onerror=r.onload=null,"load"===_.type)a();else{var i=_&&_.type,c=_&&_.target&&_.target.href||t,b=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+c+")");b.name="ChunkLoadError",b.code="CSS_CHUNK_LOAD_FAILED",b.type=i,b.request=c,r.parentNode&&r.parentNode.removeChild(r),n(b)}},r.href=t,document.head.appendChild(r)})(e,n,0,t,_)})))(t).then((()=>{e[t]=0}),(_=>{throw delete e[t],_})))}}})(),(()=>{var e={792:0};__webpack_require__.f.j=(t,_)=>{var a=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==a)if(a)_.push(a[2]);else{var n=new Promise(((_,n)=>a=e[t]=[_,n]));_.push(a[2]=n);var r=__webpack_require__.p+__webpack_require__.u(t),i=new Error;__webpack_require__.l(r,(_=>{if(__webpack_require__.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=_&&("load"===_.type?"missing":_.type),r=_&&_.target&&_.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,a[1](i)}}),"chunk-"+t,t)}};var t=(t,_)=>{var a,n,[r,i,c]=_,b=0;if(r.some((t=>0!==e[t]))){for(a in i)__webpack_require__.o(i,a)&&(__webpack_require__.m[a]=i[a]);c&&c(__webpack_require__)}for(t&&t(_);b<r.length;b++)n=r[b],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0},_=self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[];_.forEach(t.bind(null,0)),_.push=t.bind(null,_.push.bind(_))})();var __webpack_exports__=__webpack_require__(44)})();