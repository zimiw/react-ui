webpackJsonp_name_([6],{3:function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=t(1),s=l(i),u=t(5),c=function(e){function n(){return a(this,n),r(this,e.apply(this,arguments))}return o(n,e),n.prototype.componentDidMount=function(){window.prettyPrint(null,(0,u.findDOMNode)(this.code))},n.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),n=e[0]?/^(\s*)/.exec(e[0])[1].length:0,t=new RegExp("^(\\s{"+n+"})");return e=e.map(function(e){return e.replace(t,"")}),s.default.createElement("div",{className:"code"},s.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},n}(i.Component);c.propTypes={children:i.PropTypes.string},c.defaultProps={children:""},n.default=c},4:function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=t(1),r=l(a),o=t(2),i=l(o),s=function(e){return r.default.createElement("div",{className:(0,i.default)("docs-example",e.className)},e.children)};s.propTypes={children:a.PropTypes.any,className:a.PropTypes.string},e.exports=s},172:function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=t(1),r=l(a),o=t(3),i=l(o),s=t(4),u=l(s),c=t(9),d=t(10);e.exports=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"header"},r.default.createElement("h1",null,"Upload"),r.default.createElement(d.Cn,{tag:"h2"},"文件上传")),r.default.createElement("div",{className:"content"},r.default.createElement(d.Cn,null,"使用了 formdata 进行数据传输，IE10以下暂不支持，慎用。"),r.default.createElement(d.Cn,null,r.default.createElement(i.default,null,"<Upload\naccept={string}         // input accept\naction={string}         // 服务端地址，必填\nclassName={string}      //\ncontent={element}       // 显示内容\ndisabled={bool}         // 禁用，默认为 false\nfileSize={number}       // 单个文件最大尺寸，单位 KB\nlimit={number}          // 最大上传文件个数，默认为 1\nname={string}           // field name，必填\nonUpload={func}         // 处理服务端返回的数据\nreadOnly={bool}         // 只读，默认为 false\nparams={object}\nstyle={object}\ngrid={[width, responsive]} // 宽度，详见Grid\nwithCredentials={bool}  // xhr2 withCredentials\n/>")),r.default.createElement(d.En,null,r.default.createElement(i.default,null,"<Upload\n  accept={string}         // input accept\n  action={string}         // required\n  className={string}      //\n  disabled={bool}         // default is false\n  fileSize={number}       // single file size, unit KB\n  limit={number}          // default is 1\n  name={string}           // field name, required\n  onUpload={func}         // handle server result\n  readOnly={bool}         // default false\n  params={object}\n  style={object}\n  grid={[width, responsive]} // see Grid\n  withCredentials={bool}  // xhr2 withCredentials\n>\n  {children}            // button or something\n</Upload>")),r.default.createElement("h2",{className:"subhead"},"Example"),r.default.createElement(u.default,null,r.default.createElement(c.Upload,{grid:.5,name:"file",action:"/upload",accept:"image/*",limit:3,onChange:function(e){return console.log(e)},value:[{name:"init.txt"}],params:{arg:"test"},onUpload:function(e){var n=JSON.parse(e);return n.success?n.model:new Error(n.message)}},r.default.createElement(c.Button,null,r.default.createElement(c.Icon,{icon:"upload"})," Choose a file"))),r.default.createElement(i.default,null,'<Upload\n  grid={1 / 2}\n  name="file"\n  action="/upload"\n  accept="image/*"\n  limit={3}\n  onChange={(value) => console.log(value)}\n  value={[{ name: \'init.txt\' }]}\n  params={{ arg: \'test\' }}\n  onUpload={(res) => {\n    var json = JSON.parse(res)\n    if (json.success) {\n      return json.model\n    } else {\n      return new Error(json.message)\n    }\n  }}>\n  <Button><Icon icon="upload" /> Choose a file</Button>\n</Upload>')))}}});