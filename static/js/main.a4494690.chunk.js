(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_components_result_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_components_keypad_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),App=function(_Component){function App(){var _this;return Object(_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this)),_this.onClick=function(e){"="===e?_this.calculate():"AC"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){var checkResult="";checkResult=_this.state.result.includes("--")?_this.state.result.replace("--","+"):_this.state.result;try{_this.setState({result:(eval(checkResult)||"")+""})}catch(e){_this.setState({result:"ERR"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(_Users_meganakiba_Documents_Fall_2019_github_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"Mock iOS Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_result_js__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_keypad_js__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.onClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var n=t(1),a=t(2),r=t(4),c=t(3),l=t(5),o=t(0),s=t.n(o),u=function(e){function _(){return Object(n.a)(this,_),Object(r.a)(this,Object(c.a)(_).apply(this,arguments))}return Object(l.a)(_,e),Object(a.a)(_,[{key:"render",value:function(){var e=this.props.result;return s.a.createElement("div",{className:"result"},s.a.createElement("p",null,e))}}]),_}(o.Component);_.a=u},function(e,_,t){"use strict";var n=t(1),a=t(2),r=t(4),c=t(3),l=t(5),o=t(0),s=t.n(o),u=function(e){function _(){return Object(n.a)(this,_),Object(r.a)(this,Object(c.a)(_).apply(this,arguments))}return Object(l.a)(_,e),Object(a.a)(_,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"button"},s.a.createElement("button",{name:"AC",onClick:function(_){return e.props.onClick(_.target.name)}},"AC"),s.a.createElement("button",{name:"+/-",onClick:function(_){return e.props.onClick(_.target.name)}},"+/-"),s.a.createElement("button",{name:"%",onClick:function(_){return e.props.onClick(_.target.name)}},"%"),s.a.createElement("button",{name:"/",class:"funct",onClick:function(_){return e.props.onClick(_.target.name)}},"\xf7"),s.a.createElement("br",null),s.a.createElement("button",{name:"7",onClick:function(_){return e.props.onClick(_.target.name)}},"7"),s.a.createElement("button",{name:"8",onClick:function(_){return e.props.onClick(_.target.name)}},"8"),s.a.createElement("button",{name:"9",onClick:function(_){return e.props.onClick(_.target.name)}},"9"),s.a.createElement("button",{name:"*",class:"funct",onClick:function(_){return e.props.onClick(_.target.name)}},"x"),s.a.createElement("br",null),s.a.createElement("button",{name:"4",onClick:function(_){return e.props.onClick(_.target.name)}},"4"),s.a.createElement("button",{name:"5",onClick:function(_){return e.props.onClick(_.target.name)}},"5"),s.a.createElement("button",{name:"6",onClick:function(_){return e.props.onClick(_.target.name)}},"6"),s.a.createElement("button",{name:"-",class:"funct",onClick:function(_){return e.props.onClick(_.target.name)}},"-"),s.a.createElement("br",null),s.a.createElement("button",{name:"1",onClick:function(_){return e.props.onClick(_.target.name)}},"1"),s.a.createElement("button",{name:"2",onClick:function(_){return e.props.onClick(_.target.name)}},"2"),s.a.createElement("button",{name:"3",onClick:function(_){return e.props.onClick(_.target.name)}},"3"),s.a.createElement("button",{name:"+",class:"funct",onClick:function(_){return e.props.onClick(_.target.name)}},"+"),s.a.createElement("br",null),s.a.createElement("button",{class:"zero",name:"0",onClick:function(_){return e.props.onClick(_.target.name)}},"0"),s.a.createElement("button",{name:".",onClick:function(_){return e.props.onClick(_.target.name)}},"."),s.a.createElement("button",{name:"=",class:"funct",onClick:function(_){return e.props.onClick(_.target.name)}},"="),s.a.createElement("br",null))}}]),_}(o.Component);_.a=u},function(e,_,t){e.exports=t(18)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var n=t(0),a=t.n(n),r=t(7),c=t.n(r),l=(t(16),t(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.a4494690.chunk.js.map