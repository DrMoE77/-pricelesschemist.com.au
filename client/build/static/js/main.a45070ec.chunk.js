(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},53:function(e,t,a){e.exports=a(69)},58:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),i=(a(58),a(9)),l=a(6),u=a(13),s=a(52),m=a(7),d=a(34),p=a(25),f=a(4),E={products:[],categories:[],currentCategory:"",cart:[],cartOpen:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCTS":return Object(f.a)(Object(f.a)({},e),{},{products:Object(p.a)(t.products)});case"ADD_TO_CART":return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(p.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(f.a)(Object(f.a)({},e),{},{cart:[].concat(Object(p.a)(e.cart),Object(p.a)(t.products))});case"UPDATE_CART_QUANTITY":return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(f.a)(Object(f.a)({},e),{},{cartOpen:a.length>0,cart:a});case"CLEAR_CART":return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!e.cartOpen});case"UPDATE_CATEGORIES":return Object(f.a)(Object(f.a)({},e),{},{categories:Object(p.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(f.a)(Object(f.a)({},e),{},{currentCategory:t.currentCategory});default:return e}},g=Object(d.b)(b);function h(e,t,a){return new Promise((function(n,r){var c,o,i,l=window.indexedDB.open("shop-shop",1);l.onupgradeneeded=function(e){var t=l.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},l.onerror=function(e){console.log("There was an error")},l.onsuccess=function(r){switch(c=l.result,o=c.transaction(e,"readwrite"),i=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":i.put(a),n(a);break;case"get":var u=i.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":i.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var v=function(e){var t=Object(m.b)(),a=Object(m.c)((function(e){return e})),n=e.image,c=e.name,o=e._id,l=e.price,u=e.quantity,s=a.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(o)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("div",null,u," ",function(e,t){return 1===t?e:e+"s"}("item",u)," in stock"),r.a.createElement("span",null,"$",l)),r.a.createElement("button",{onClick:function(){var a=s.find((function(e){return e._id===o}));a?(t({type:"UPDATE_CART_QUANTITY",_id:o,purchaseQuantity:parseInt(a.purchaseQuantity)+1}),h("cart","put",Object(f.a)(Object(f.a)({},a),{},{purchaseQuantity:parseInt(a.purchaseQuantity)+1}))):(t({type:"ADD_TO_CART",product:Object(f.a)(Object(f.a)({},e),{},{purchaseQuantity:1})}),h("cart","put",Object(f.a)(Object(f.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},O=a(11),y=a(23),j=a(19),w=a.n(j);function _(){var e=Object(y.a)(["\n{\n  user {\n    firstName\n    lastName\n    orders {\n      _id\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        image\n      }\n    }\n  }\n}\n"]);return _=function(){return e},e}function T(){var e=Object(y.a)(["\n{\n  categories {\n    _id\n    name\n  }\n}\n"]);return T=function(){return e},e}function k(){var e=Object(y.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(y.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]);return N=function(){return e},e}function C(){var e=Object(y.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]);return C=function(){return e},e}var A=w()(C()),x=w()(N()),R=(w()(k()),w()(T())),D=w()(_()),S=a(38),P=a.n(S);var U=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),a=t.currentCategory,c=Object(O.c)(A),o=c.loading,i=c.data;return Object(n.useEffect)((function(){i?(e({type:"UPDATE_PRODUCTS",products:i.products}),i.products.forEach((function(e){h("products","put",e)}))):o||h("products","get").then((function(t){e({type:"UPDATE_PRODUCTS",products:t})}))}),[i,o,e]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),t.products.length?r.a.createElement("div",{className:"flex-row"},(a?t.products.filter((function(e){return e.category._id===a})):t.products).map((function(e){return r.a.createElement(v,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:P.a,alt:"loading"}):null)};var I=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})).categories,a=Object(O.c)(R),c=a.loading,o=a.data;return Object(n.useEffect)((function(){o?(e({type:"UPDATE_CATEGORIES",categories:o.categories}),o.categories.forEach((function(e){h("categories","put",e)}))):c||h("categories","get").then((function(t){e({type:"UPDATE_CATEGORIES",categories:t})}))}),[o,c,e]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),t.map((function(t){return r.a.createElement("button",{key:t._id,onClick:function(){var a;a=t._id,e({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},t.name)})))},Q=a(20),$=a.n(Q),F=a(24),L=a(18),G=a(49),q=function(e){var t=e.item,a=Object(m.b)();return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),h("cart","delete",Object(f.a)({},t))):(a({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)}),h("cart","put",Object(f.a)(Object(f.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:"REMOVE_FROM_CART",_id:e._id}),h("cart","delete",Object(f.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},M=a(50),W=a(51),Y=a(42),H=a.n(Y),B=new(function(){function e(){Object(M.a)(this,e)}return Object(W.a)(e,[{key:"getProfile",value:function(){return H()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return H()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),K=(a(68),Object(G.a)("pk_live_51L9mX5KxZ9tUdGj5Ke2Kb7XHvWHGkZvs5DzjRwYOXR0omDLqYAHBMDEx4yzGWa7dwXRcRNd6Epa0H7u0j9gCKGe900dSotAptm")),V=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),a=Object(O.a)(x),c=Object(L.a)(a,2),o=c[0],i=c[1].data;function l(){e({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){i&&K.then((function(e){e.redirectToCheckout({sessionId:i.checkout.session})}))}),[i]),Object(n.useEffect)((function(){function a(){return(a=Object(F.a)($.a.mark((function t(){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h("cart","get");case 2:a=t.sent,e({type:"ADD_MULTIPLE_TO_CART",products:Object(p.a)(a)});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.cart.length||function(){a.apply(this,arguments)}()}),[t.cart.length,e]),t.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:l},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),t.cart.length?r.a.createElement("div",null,t.cart.map((function(e){return r.a.createElement(q,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var e=0;return t.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),B.loggedIn()?r.a.createElement("button",{onClick:function(){var e=[];t.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),o({variables:{products:e}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:l},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},X=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(I,null),r.a.createElement(U,null),r.a.createElement(V,null))};var z=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),a=Object(l.f)().id,c=Object(n.useState)({}),o=Object(L.a)(c,2),u=o[0],s=o[1],d=Object(O.c)(A),p=d.loading,E=d.data,b=t.products,g=t.cart;return Object(n.useEffect)((function(){b.length?s(b.find((function(e){return e._id===a}))):E?(e({type:"UPDATE_PRODUCTS",products:E.products}),E.products.forEach((function(e){h("products","put",e)}))):p||h("products","get").then((function(t){e({type:"UPDATE_PRODUCTS",products:t})}))}),[b,E,p,e,a]),r.a.createElement(r.a.Fragment,null,u&&g?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,u.name),r.a.createElement("p",null,u.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",u.price," ",r.a.createElement("button",{onClick:function(){var t=g.find((function(e){return e._id===a}));t?(e({type:"UPDATE_CART_QUANTITY",_id:a,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),h("cart","put",Object(f.a)(Object(f.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(e({type:"ADD_TO_CART",product:Object(f.a)(Object(f.a)({},u),{},{purchaseQuantity:1})}),h("cart","put",Object(f.a)(Object(f.a)({},u),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!g.find((function(e){return e._id===u._id})),onClick:function(){e({type:"REMOVE_FROM_CART",_id:u._id}),h("cart","delete",Object(f.a)({},u))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(u.image),alt:u.name})):null,p?r.a.createElement("img",{src:P.a,alt:"loading"}):null,r.a.createElement(V,null))};var J=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},Z=function(){return r.a.createElement("div",null,r.a.createElement(J,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},ee=a(27);function te(){var e=Object(y.a)(["\n  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(y.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      } \n      }\n    }\n  }\n"]);return ae=function(){return e},e}function ne(){var e=Object(y.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return ne=function(){return e},e}var re=w()(ne()),ce=w()(ae()),oe=w()(te());var ie=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(L.a)(t,2),c=a[0],o=a[1],l=Object(O.b)(re),u=Object(L.a)(l,2),s=u[0],m=u[1].error,d=function(){var e=Object(F.a)($.a.mark((function e(t){var a,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,B.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(f.a)(Object(f.a)({},c),{},Object(ee.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),m?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var le=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(L.a)(t,2),c=a[0],o=a[1],l=Object(O.b)(oe),u=Object(L.a)(l,1)[0],s=function(){var e=Object(F.a)($.a.mark((function e(t){var a,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,B.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.target,a=t.name,n=t.value;o(Object(f.a)(Object(f.a)({},c),{},Object(ee.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:s},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:m})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:m})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:m})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:m})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ue=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"Priceless Compounding Chemist")),r.a.createElement("nav",null,B.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return B.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var se=function(){var e=Object(O.b)(ce),t=Object(L.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(F.a)($.a.mark((function e(){var a,n,r,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){h("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(J,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the home page")))};var me=function(){var e,t=Object(O.c)(D).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},de=new s.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var pe=function(){return r.a.createElement(u.a,{client:de},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(m.a,{store:g},r.a.createElement(ue,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:X}),r.a.createElement(l.a,{exact:!0,path:"/login",component:ie}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:le}),r.a.createElement(l.a,{exact:!0,path:"/success",component:se}),r.a.createElement(l.a,{exact:!0,path:"/orderHistory",component:me}),r.a.createElement(l.a,{exact:!0,path:"/products/:id",component:z}),r.a.createElement(l.a,{component:Z}))))))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ee(t,e)}))}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.a45070ec.chunk.js.map