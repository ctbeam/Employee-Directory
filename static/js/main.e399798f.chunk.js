(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r);a(13),a(14),a(15);var c=function(){return l.a.createElement("nav",{className:"navbar navbar-light"},l.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Employee Directory"))},s=a(1),i=a(4),m=a(5),u=a(7),d=a(6);a(16),a(17);var p=function(e){return l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.name}),l.a.createElement("div",{className:"card-body"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null," ",e.firstName," ",e.lastName)),l.a.createElement("li",null,l.a.createElement("p",null," ",e.email)),l.a.createElement("li",null,l.a.createElement("p",null," ",e.phone)),l.a.createElement("li",null,l.a.createElement("p",null," ",e.address.number," ",e.address.name,", ",e.city,","," ",e.state," ",e.country)),l.a.createElement("li",null,l.a.createElement("p",null,"Age: ",e.age))))))};a(18);var h=function(e){return l.a.createElement("div",{className:"row",id:"BtnRow"},l.a.createElement("button",{onClick:e.handleClickABC,id:"sortABC",className:"col-sm-4"},"Sort A-Z"),l.a.createElement("button",{onClick:e.handleClickZYX,id:"sortZYX",className:"col-sm-4"},"Sort Z-A"),l.a.createElement("button",{onClick:e.handleClickReset,id:"reset",className:"col-sm-4"},"Reset All Filters"))},f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employee:[],original:[]},e.handleClickABC=function(t){t.preventDefault(),console.log("Sort Alphabetically A-Z"),console.log("Employee State",e.state.employee);var a=Object(s.a)(e.state.employee).sort((function(e,t){return e.name.first>t.name.first?1:-1}));e.setState({employee:a}),console.log("original array",e.state.original)},e.handleClickZYX=function(t){t.preventDefault(),console.log("Sort Alphabetically Z-A"),console.log(e.state.employee);var a=Object(s.a)(e.state.employee).sort((function(e,t){return e.name.first>t.name.first?-1:1}));console.log(a),e.setState({employee:a})},e.handleClickReset=function(t){t.preventDefault();var a=Object(s.a)(e.state.original);e.setState({employee:a})},e.handleClickSearch=function(t){t.preventDefault();var a=document.getElementById("search").value;console.log(a);var n=Object(s.a)(e.state.employee);console.log(n);var l=n.filter((function(e){return e.name.last===a}));console.log(l),e.setState({employee:l})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=20&nat=us").then((function(e){return e.json()})).then((function(t){e.setState({employee:t.results,original:t.results})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},"Employee Info"),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClickABC:this.handleClickABC,handleClickZYX:this.handleClickZYX,handleClickReset:this.handleClickReset})),l.a.createElement("div",{className:"row",id:"searchRow"},l.a.createElement("input",{type:"text",placeholder:"Last Name",id:"search",className:"col-sm-8"}),l.a.createElement("button",{type:"submit",id:"searchBtn",onClick:this.handleClickSearch},"Search by Last Name")),l.a.createElement("div",{className:"row"},0===this.state.employee.length?l.a.createElement("p",null,"There are no profiles to display"):this.state.employee.map((function(e){return l.a.createElement(p,{key:e.login.uuid,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,address:e.location.street,image:e.picture.large,city:e.location.city,country:e.location.country,state:e.location.state,age:e.dob.age})})))))}}]),a}(n.Component);var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c,null),l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.e399798f.chunk.js.map