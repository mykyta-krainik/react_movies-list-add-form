(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(7),s=i.n(a),c=(i(14),i(6)),n=i(2),l=i(1),r=(i(15),i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=i(8),j=i.n(m);var b=Object(l.memo)((function(e){var t=e.name,i=e.value,a=e.setNewValue,s=e.isFormatValid,c=void 0===s||s,o=e.setIsFormatValid,d=void 0===o?function(){}:o,m=e.label,b=void 0===m?t:m,u=e.required,h=void 0!==u&&u,O=e.isFieldValidCustom,g=void 0===O?function(){return!0}:O,p=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),v=Object(n.a)(p,1)[0],w=Object(l.useState)(!1),f=Object(n.a)(w,2),x=f[0],N=f[1],M=Object(l.useState)(!1),V=Object(n.a)(M,2),I=V[0],U=V[1],y=x&&h&&!i.trim();return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:v,children:b}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{id:v,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":y||!c&&!I}),type:"text",placeholder:"Enter ".concat(b),value:i,onChange:function(e){var t=e.target.value;a(t),U(!0),d(!1)},onBlur:function(){N(!0);var e=g(i);d(e),U(!1)}})}),y&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(b," is required")}),!c&&!y&&!I&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(b," format is not valid")})]})})),u=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(n.a)(i,2),s=a[0],c=a[1],o=Object(l.useState)(""),d=Object(n.a)(o,2),m=d[0],j=d[1],u=Object(l.useState)(""),h=Object(n.a)(u,2),O=h[0],g=h[1],p=Object(l.useState)(""),v=Object(n.a)(p,2),w=v[0],f=v[1],x=Object(l.useState)(""),N=Object(n.a)(x,2),M=N[0],V=N[1],I=Object(l.useState)(""),U=Object(n.a)(I,2),y=U[0],S=U[1],T=Object(l.useState)(!0),B=Object(n.a)(T,2),_=B[0],F=B[1],k=Object(l.useState)(!0),z=Object(n.a)(k,2),A=z[0],D=z[1],Y=!m||!w||!_||!M||!A||!y;var C=Object(l.useCallback)((function(e){return new RegExp("^((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&=+$,\\w]+@)?[A-Za-z0-9.-]+|(?:www\\.|[-;:&=+$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[+~%/.\\w-_]*)?\\??(?:[-+=&;%@,.\\w_]*)#?(?:[,.!/\\\\\\w]*))?)$").test(e)}),[]);return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t({title:m,description:O,imgUrl:w,imdbUrl:M,imdbId:y}),j(""),g(""),f(""),V(""),S(""),c((function(e){return e+1}))},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(b,{name:"title",label:"Title",value:m,setNewValue:j,required:!0}),Object(r.jsx)(b,{name:"description",label:"Description",value:O,setNewValue:g}),Object(r.jsx)(b,{name:"imgUrl",label:"Image URL",value:w,setNewValue:f,isFormatValid:_,setIsFormatValid:F,isFieldValidCustom:C,required:!0}),Object(r.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:M,setNewValue:V,isFormatValid:A,setIsFormatValid:D,isFieldValidCustom:C,required:!0}),Object(r.jsx)(b,{name:"imdbId",label:"Imdb ID",value:y,setNewValue:S,required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:Y,children:"Add"})})})]},s)},h=i(9),O=function(){var e=Object(l.useState)(Object(c.a)(h)),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(u,{onAdd:function(e){return a([].concat(Object(c.a)(i),[e]))}})})]})};s.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.17162859.chunk.js.map