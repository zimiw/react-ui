webpackJsonp_name_([14],{3:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=l(1),u=n(c),p=l(5),d=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,p.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,l=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(l,"")}),u.default.createElement("div",{className:"code"},u.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(c.Component);d.propTypes={children:c.PropTypes.string},d.defaultProps={children:""},t.default=d},4:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=l(1),a=n(r),i=l(2),c=n(i),u=function(e){return a.default.createElement("div",{className:(0,c.default)("docs-example",e.className)},e.children)};u.propTypes={children:r.PropTypes.any,className:r.PropTypes.string},e.exports=u},164:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=l(1),a=n(r),i=l(3),c=n(i),u=l(4),p=n(u),d=l(9);e.exports=function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"header"},a.default.createElement("h1",null,"Spin")),a.default.createElement("div",{className:"content"},a.default.createElement("div",null,a.default.createElement("a",{href:"https://github.com/tobiasahlin/SpinKit",target:"_blank"},"base on SpinKit")),a.default.createElement(c.default,null,"<Spin\nclassName={string}\ncolor={string}       // default value is '#ccc'\ntype={string}        // see example\nsize={string|number} // width && height\nmaring={string}      // css margin\n/>"),a.default.createElement("h2",{className:"subhead"},"Plane"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"40px",type:"plane"}),a.default.createElement(d.Spin,{size:"2rem",type:"plane",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="40px" type="plane" />\n          <Spin size="2rem" type="plane" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Double Bounce"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"60px",type:"double-bounce"}),a.default.createElement(d.Spin,{size:"5rem",type:"double-bounce",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="60px" type="double-bounce" />\n          <Spin size="5rem" type="double-bounce" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Wave"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"30px",type:"wave"}),a.default.createElement(d.Spin,{size:40,type:"wave",color:"green"}),a.default.createElement(d.Spin,{size:"5rem",type:"wave",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="30px" type="wave" />\n          <Spin size={40} type="wave" color="green" />\n          <Spin size="5rem" type="wave" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Pulse"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"30px",type:"pulse"}),a.default.createElement(d.Spin,{size:40,type:"pulse",color:"green"}),a.default.createElement(d.Spin,{size:"5rem",type:"pulse",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="30px" type="pulse" />\n          <Spin size={40} type="pulse" color="green" />\n          <Spin size="5rem" type="pulse" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Chasing Dots"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"30px",type:"dots"}),a.default.createElement(d.Spin,{size:40,type:"dots",color:"green"}),a.default.createElement(d.Spin,{size:"5rem",type:"dots",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="30px" type="dots" />\n          <Spin size={40} type="dots" color="green" />\n          <Spin size="5rem" type="dots" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Three Bounce"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"30px",type:"three-bounce"}),a.default.createElement(d.Spin,{size:40,type:"three-bounce",color:"green"}),a.default.createElement(d.Spin,{size:"5rem",type:"three-bounce",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="30px" type="three-bounce" />\n          <Spin size={40} type="three-bounce" color="green" />\n          <Spin size="5rem" type="three-bounce" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Circle"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"30px",type:"circle"}),a.default.createElement(d.Spin,{size:40,type:"circle",color:"green"}),a.default.createElement(d.Spin,{size:"5rem",type:"circle",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="30px" type="circle" />\n          <Spin size={40} type="circle" color="green" />\n          <Spin size="5rem" type="circle" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Simple Circle"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"28px",type:"simple-circle"}),a.default.createElement(d.Spin,{size:40,type:"simple-circle",color:"green"}),a.default.createElement(d.Spin,{size:"5rem",type:"simple-circle",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="28px" type="simple-circle" />\n          <Spin size={40} type="simple-circle" color="green" />\n          <Spin size="5rem" type="simple-circle" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Cube Grid"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"30px",type:"cube-grid"}),a.default.createElement(d.Spin,{size:40,type:"cube-grid",color:"green"}),a.default.createElement(d.Spin,{size:"5rem",type:"cube-grid",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="30px" type="cube-grid" />\n          <Spin size={40} type="cube-grid" color="green" />\n          <Spin size="5rem" type="cube-grid" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Fading Circle"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{size:"1rem",type:"fading-circle"}),a.default.createElement(d.Spin,{size:"30px",type:"fading-circle"}),a.default.createElement(d.Spin,{size:40,type:"fading-circle",color:"green"}),a.default.createElement(d.Spin,{size:"5rem",type:"fading-circle",color:"red"})),a.default.createElement(c.default,null,'          <Spin size="1rem" type="fading-circle" />\n          <Spin size="30px" type="fading-circle" />\n          <Spin size={40} type="fading-circle" color="green" />\n          <Spin size="5rem" type="fading-circle" color="red" />'),a.default.createElement("h2",{className:"subhead"},"Folding Cube"),a.default.createElement(p.default,null,a.default.createElement(d.Spin,{margin:10,size:"30px",type:"folding-cube"}),a.default.createElement(d.Spin,{margin:20,size:40,type:"folding-cube",color:"green"}),a.default.createElement(d.Spin,{margin:"3rem",size:"4rem",type:"folding-cube",color:"red"})),a.default.createElement(c.default,null,'          <Spin margin={10} size="30px" type="folding-cube" />\n          <Spin margin={20} size={40} type="folding-cube" color="green" />\n          <Spin margin="3rem" size="4rem" type="folding-cube" color="red" />')))}}});