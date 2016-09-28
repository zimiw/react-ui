webpackJsonp_name_([8],{3:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var r=o(1),u=n(r),a=o(5),c=function(t){function e(){return i(this,e),l(this,t.apply(this,arguments))}return p(e,t),e.prototype.componentDidMount=function(){window.prettyPrint(null,(0,a.findDOMNode)(this.code))},e.prototype.render=function(){var t=this.props.children.split("\n").filter(function(t){return t.length>0}),e=t[0]?/^(\s*)/.exec(t[0])[1].length:0,o=new RegExp("^(\\s{"+e+"})");return t=t.map(function(t){return t.replace(o,"")}),u.default.createElement("div",{className:"code"},u.default.createElement("pre",{className:"prettyprint"},t.join("\n")))},e}(r.Component);c.propTypes={children:r.PropTypes.string},c.defaultProps={children:""},e.default=c},4:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=o(1),l=n(i),p=o(2),r=n(p),u=function(t){return l.default.createElement("div",{className:(0,r.default)("docs-example",t.className)},t.children)};u.propTypes={children:i.PropTypes.any,className:i.PropTypes.string},t.exports=u},170:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=o(1),l=n(i),p=o(3),r=n(p),u=o(4),a=n(u),c=o(9);t.exports=function(){return l.default.createElement("div",null,l.default.createElement("div",{className:"header"},l.default.createElement("h1",null,"Tooltip")),l.default.createElement("div",{className:"content button-docs"},l.default.createElement(r.default,null,"<Tooltip\n  position={string}  // one of 'left|top|right|bootom', default value is 'right'\n  trigger={string}    // one of 'click|hover', default value is 'hover'\n  tip={string}        // tip text\n>\n{ReactElement}\n</Tooltip>"),l.default.createElement("h2",{className:"subhead"},"Hover"),l.default.createElement(a.default,null,l.default.createElement(c.Tooltip,{position:"left",tip:"some tip text"},l.default.createElement(c.Button,null,"Tip Left")),l.default.createElement(c.Tooltip,{position:"top",tip:"some tip text"},l.default.createElement(c.Button,null,"Tip Top")),l.default.createElement(c.Tooltip,{position:"bottom",tip:"some tip text"},l.default.createElement(c.Button,null,"Tip Bottom")),l.default.createElement(c.Tooltip,{position:"right",tip:"some tip text"},l.default.createElement(c.Button,null,"Tip Right"))),l.default.createElement(r.default,null,'          <Tooltip position="left" tip="some tip text">\n            <Button>Tip Left</Button>\n          </Tooltip>\n\n          <Tooltip position="top" tip="some tip text">\n            <Button>Tip Top</Button>\n          </Tooltip>\n\n          <Tooltip position="bottom" tip="some tip text">\n            <Button>Tip Bottom</Button>\n          </Tooltip>\n\n          <Tooltip position="right" tip="some tip text">\n            <Button>Tip Right</Button>\n          </Tooltip>'),l.default.createElement("h2",{className:"subhead"},"Click"),l.default.createElement(a.default,null,l.default.createElement(c.Tooltip,{trigger:"click",position:"left",tip:"some tip text"},l.default.createElement(c.Button,null,"Tip Left")),l.default.createElement(c.Tooltip,{trigger:"click",position:"top",tip:"some tip text"},l.default.createElement(c.Button,null,"Tip Top")),l.default.createElement(c.Tooltip,{trigger:"click",position:"bottom",tip:"some tip text"},l.default.createElement(c.Button,null,"Tip Bottom")),l.default.createElement(c.Tooltip,{trigger:"click",position:"right",tip:"some tip text"},l.default.createElement(c.Button,null,"Tip Right"))),l.default.createElement(r.default,null,'          <Tooltip trigger="click" position="left" tip="some tip text">\n            <Button>Tip Left</Button>\n          </Tooltip>\n\n          <Tooltip trigger="click" position="top" tip="some tip text">\n            <Button>Tip Top</Button>\n          </Tooltip>\n\n          <Tooltip trigger="click" position="bottom" tip="some tip text">\n            <Button>Tip Bottom</Button>\n          </Tooltip>\n\n          <Tooltip trigger="click" position="right" tip="some tip text">\n            <Button>Tip Right</Button>\n          </Tooltip>')))}}});