!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(6)},function(e,t,n){var a=n(2);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.mce-window.mce-container.mce-sc-panel .mce-container-body.mce-abs-layout {\n    overflow: hidden;\n}\n\nform#sc-start-point fieldset {\n    padding-top: 15px;\n}\n\nform#sc-start-point fieldset input:not([type=checkbox]), form#sc-start-point fieldset select {\n    width: 69%;\n    display: block;\n    box-sizing: border-box;\n    margin-bottom: 15px;\n    height: 30px;\n    border: 1px solid #ddd;\n}\n\nform#sc-start-point fieldset label {\n    display: block;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    width: 31%;\n    float: left;\n}\n\nform#sc-start-point fieldset div {\n    overflow: hidden;\n    clear: both;\n}\n\nform#sc-start-point fieldset div[name=imageID] {\n    width: 31%;\n    float: left;\n}\n\nform#sc-start-point fieldset div[name=imageID]:before {\n    content: "Bild ID: ";\n    pointer-events: none;\n}\n\nform#sc-start-point fieldset .mce-btn.long {\n    width: 100%;\n}\n\n#fields + .mce-btn.long {\n    width: 100%;\n    margin-top: 15px;\n}\n\nform#sc-start-point fieldset .mce-btn.removeLast {\n    display: none;\n}\n\nform#sc-start-point fieldset:last-of-type .mce-btn.removeLast {\n    display: table;\n}\n\nform#sc-start-point textarea {\n    white-space: normal;\n    border: 1px solid #ddd;\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.07);\n    background-color: #fff;\n    color: #32373c;\n    margin-bottom: 15px;\n    width: 69%;\n    display: block;\n    box-sizing: border-box;\n}\n\nform#sc-start-point #addOne {\n    width: 100%;\n}\n\nform#sc-start-point .sc-hr {\n    border: .5px solid #ddd;\n    margin: 10px 0;\n}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(c=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),l=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[n].concat(l).concat([o]).join("\n")}var c;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var l=this[o][0];"number"==typeof l&&(a[l]=!0)}for(o=0;o<e.length;o++){var c=e[o];"number"==typeof c[0]&&a[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t,n){var a,o,l={},c=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=a.apply(this,arguments)),o}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},r=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var a=s.call(this,e,n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}}(),i=null,p=0,d=[],g=n(5);function u(e,t){for(var n=0;n<e.length;n++){var a=e[n],o=l[a.id];if(o){o.refs++;for(var c=0;c<o.parts.length;c++)o.parts[c](a.parts[c]);for(;c<a.parts.length;c++)o.parts.push(y(a.parts[c],t))}else{var s=[];for(c=0;c<a.parts.length;c++)s.push(y(a.parts[c],t));l[a.id]={id:a.id,refs:1,parts:s}}}}function m(e,t){for(var n=[],a={},o=0;o<e.length;o++){var l=e[o],c=t.base?l[0]+t.base:l[0],s={css:l[1],media:l[2],sourceMap:l[3]};a[c]?a[c].parts.push(s):n.push(a[c]={id:c,parts:[s]})}return n}function h(e,t){var n=r(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=d[d.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=r(e.insertAt.before,n);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var a=function(){0;return n.nc}();a&&(e.attrs.nonce=a)}return f(t,e.attrs),h(e,t),t}function f(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,a,o,l;if(t.transform&&e.css){if(!(l="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=l}if(t.singleton){var c=p++;n=i||(i=v(t)),a=x.bind(null,n,c,!1),o=x.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",f(t,e.attrs),h(e,t),t}(t),a=T.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),a=_.bind(null,n),o=function(){b(n)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return u(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var c=n[o];(s=l[c.id]).refs--,a.push(s)}e&&u(m(e,t),t);for(o=0;o<a.length;o++){var s;if(0===(s=a[o]).refs){for(var r=0;r<s.parts.length;r++)s.parts[r]();delete l[s.id]}}}};var w,L=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,a){var o=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=L(t,o);else{var l=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(l,c[t]):e.appendChild(l)}}function _(e,t){var n=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function T(e,t,n){var a=n.css,o=n.sourceMap,l=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||l)&&(a=g(a)),o&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var c=new Blob([a],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(c),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,a=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,l=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l)?e:(o=0===l.indexOf("//")?l:0===l.indexOf("/")?n+l:a+l.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){"use strict";n.r(t);n(1);var a=function(e){return{text:e.getLang("wpsc.faqButtonText","Single FAQ"),tooltip:e.getLang("wpsc.faqTooltip","Adds a FAQ block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.faqTitle","Featured Snippet FAQ"),minWidth:500,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"listbox",name:"sc_headline",label:e.getLang("wpsc.titleTag","Title Tag"),values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{type:"textbox",name:"sc_question",label:e.getLang("wpsc.question","Question"),value:"",placeholder:e.getLang("wpsc.questionPlaceholder","Enter Your Question here..."),multiline:!0},{type:"textbox",name:"sc_answer",label:e.getLang("wpsc.answer","Answer"),value:"",placeholder:e.getLang("wpsc.answerPlaceholder","Enter your answer here..."),multiline:!0,minHeight:100},{type:"textbox",name:"sc_img",label:e.getLang("wpsc.image","Image"),value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:e.getLang("wpsc.addImage","Add Image"),classes:"select_image"},{type:"textbox",name:"sc_img_description",label:e.getLang("wpsc.imageDescription","Image Description"),value:"",multiline:!0},{type:"textbox",name:"sc_css_classes",label:e.getLang("wpsc.cssClass","CSS class"),placeholder:e.getLang("wpsc.cssClassPlaceholder","additional css classes ..."),value:""}],onsubmit:function(t){var n=t.data;return e.insertContent('[sc_fs_faq html="'.concat(n.giveHTML,'" headline="').concat(n.sc_headline,'" img="').concat(n.sc_img,'" question="').concat(n.sc_question,'" img_alt="').concat(n.sc_img_description,'" css_class="').concat(n.sc_css_classes,'"]\n                ').concat(n.sc_answer,"\n               [/sc_fs_faq]"))}})}}};function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelector(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return Array.from(t.querySelectorAll(e))}function c(e,t,n){document.addEventListener(e,(function(e){var a=e.target.closest(t);a&&n(e,a)}))}function s(){var e=document.createElement("input");return e.setAttribute("type","datetime-local"),"datetime-local"===e.type}function r(){var e=document.createElement("input");return e.setAttribute("type","date"),"date"===e.type}function i(e){c("click","#addOne",(function(){var t,n,a,s,r=l("#fields fieldset").length,i=o("#fields #fieldset-".concat(r-1)).offsetHeight,p=1===r?i+30:i-30,d=o(".mce-container > .mce-container-body.mce-abs-layout"),g=o("#fields #fieldset-".concat(r-1)),u='\n                    <fieldset id="fieldset-'.concat(r,'" data-key="').concat(r,'">\n                        <hr class="sc-hr">\n                        <div>\n                            <label>').concat(e.getLang("wpsc.titleTag","Title Tag"),'</label>\n                            <select name="headlineTag" id="headlineTag-').concat(r,'">\n                                <option value="h2">h2</option>\n                                <option value="h3">h3</option>\n                                <option value="h4">h4</option>\n                                <option value="h5">h5</option>\n                                <option value="h6">h6</option>\n                                <option value="p">p</option>\n                            </select>\n                        </div>\n                        <div>\n                            <label>').concat(e.getLang("wpsc.question","Question"),'</label>\n                            <input type="text" id="question-').concat(r,'" name="question" placeholder="').concat(e.getLang("wpsc.questionPlaceholder","Enter Your Question here..."),'">\n                        </div>\n                        <div>\n                            <label>').concat(e.getLang("wpsc.answer","Answer"),'</label>\n                            <textarea id="answer-').concat(r,'" rows="5" name="answer" placeholder="').concat(e.getLang("wpsc.answerPlaceholder","Enter your answer here..."),'"></textarea>\n                        </div>\n                        <div>\n                            <div type="text" id="imageID-').concat(r,'" name="imageID"></div>\n                            <div class="mce-btn">\n                                <button type="button"  class="mce-select_image" data-target="imageID-').concat(r,'">').concat(e.getLang("wpsc.addImage","Add Image"),'</button>\n                            </div>\n                        </div>\n                        <div class="mce-btn removeLast">\n                            <button type="button" class="sc-removeLastFaq" data-target="bild-').concat(r,'">- ').concat(e.getLang("wpsc.removeLastOne","Add Image"),"</button>\n                        </div>\n                    </fieldset>\n                ");t=d,"function"==typeof(n=d.offsetHeight+p)&&(n=n()),t.style.height="string"==typeof n?n:n+"px",function(e,t){t.parentNode.insertBefore(e,t.nextSibling)}((a=u,(s=document.createElement("div")).innerHTML=a.trim(),s.firstChild),g),c("click",".sc-removeLastFaq",(function(){return o("#sc-start-point fieldset:last-of-type").remove()}))}))}var p=function(e){return{text:e.getLang("wpsc.multiFaqButtonText","Multi FAQ"),tooltip:e.getLang("wpsc.multiFaqTooltip","Adds multiple FAQ blocks to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.faqTitle","Featured Snippet FAQ"),minWidth:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"textbox",name:"sc_css_classes",label:e.getLang("wpsc.cssClass","CSS class"),placeholder:e.getLang("wpsc.cssClassPlaceholder","additional css classes ..."),value:""},{type:"container",name:"container",label:"",html:' \n                    <form id="sc-start-point">\n                    <div id="fields">\n                        <fieldset id="fieldset-0" data-key="0">\n                            <hr class="sc-hr">\n                            <div>\n                                <label>'.concat(e.getLang("wpsc.titleTag","Title Tag"),'</label>\n                                <select name="headlineTag" id="headlineTag-0">\n                                    <option value="h2">h2</option>\n                                    <option value="h3">h3</option>\n                                    <option value="h4">h4</option>\n                                    <option value="h5">h5</option>\n                                    <option value="h6">h6</option>\n                                    <option value="p">p</option>\n                                </select>\n                            </div>\n                            <div>\n                                <label>').concat(e.getLang("wpsc.question","Question"),'</label>\n                                <input type="text" id="question-0" name="question" placeholder="').concat(e.getLang("wpsc.questionPlaceholder","Enter Your Question here..."),'">\n                            </div>\n                            <div>\n                                <label>').concat(e.getLang("wpsc.answer","Answer"),'</label>\n                                <textarea id="answer-0" rows="5" name="answer" placeholder="').concat(e.getLang("wpsc.answerPlaceholder","Enter your answer here..."),'"></textarea>\n                            </div>\n                            <div>\n                                <div type="text" id="imageID-0" name="imageID"></div>\n                                <div class="mce-btn">\n                                    <button type="button" class="mce-select_image" data-target="imageID-0">').concat(e.getLang("wpsc.addImage","Add Image"),'</button>\n                                </div>\n                            </div> \n                        </fieldset>\n                    </div>\n                    <div class="mce-btn long">\n                        <button id="addOne" type="button">').concat(e.getLang("wpsc.addOne","Answer"),"</button>\n                    </div>\n                </form>")}],onsubmit:function(t){var n=t.data;return e.insertContent(function(e){for(var t="[sc_fs_multi_faq ",n=l("#sc-start-point fieldset"),a=0;a<n.length;a++){var c=n[a].dataset.key,s=o("#headlineTag-".concat(c)).value,r=o("#question-".concat(c)).value,i=o("#answer-".concat(c)).value,p=o("#imageID-".concat(c)).innerHTML;t+="headline-".concat(c,'="').concat(s,'" question-').concat(c,'="').concat(r,'" answer-').concat(c,'="').concat(i,'" image-').concat(c,'="').concat(p,'" ')}return t+=' count="'.concat(n.length,'" html="').concat(e.giveHTML,'" css_class="').concat(e.sc_css_classes,'"]')}(n))}}),i(e)}}},d=function(e){var t=r()?"":"(Format: 2019-08-22)",n=r()?500:800;return{text:e.getLang("wpsc.jobButtonText","Job"),tooltip:e.getLang("wpsc.jobTooltip","Adds a JobPosting block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.jobPopupTitle","Featured Snippet Job"),minWidth:n,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"listbox",name:"titleTag",label:e.getLang("wpsc.titleTag","Title Tag"),values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{type:"textbox",name:"jobTitle",label:e.getLang("wpsc.job","Job title"),value:"",placeholder:e.getLang("wpsc.jobPlaceholder","Please enter your job title here ..."),multiline:!0},{type:"textbox",name:"description",label:e.getLang("wpsc.description","Description"),value:"",placeholder:e.getLang("wpsc.jobDescriptionPlaceholder","Enter your job description here..."),multiline:!0,minHeight:100},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.company","Company"),"</h1>")},{type:"textbox",name:"companyName",label:e.getLang("wpsc.companyName","Company Name"),value:"",placeholder:e.getLang("wpsc.companyNamePlaceholder","Company Name"),multiline:!0},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.sameAsHeadline","Same as"),"</h1>")},{type:"textbox",name:"sameAs",label:e.getLang("wpsc.sameAsLabel","Website / Social Media"),value:"",placeholder:e.getLang("wpsc.sameAsPlaceholder","https://your-website.com"),multiline:!1},{type:"textbox",name:"sc_img",label:e.getLang("wpsc.image","Image"),value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:e.getLang("wpsc.addImage","Add Image"),classes:"select_image"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.jobLocation","Job Location"),"</h1>")},{type:"textbox",name:"streetAddress",label:e.getLang("wpsc.street","Street"),value:"",placeholder:e.getLang("wpsc.streetPlaceholder","Any Street 3A")},{type:"textbox",name:"postalCode",label:e.getLang("wpsc.zip","Postal Code"),value:"",placeholder:e.getLang("wpsc.zipPlaceholder","Any Postal Code")},{type:"textbox",name:"addressLocality",label:e.getLang("wpsc.locality","Locality"),value:"",placeholder:e.getLang("wpsc.localityPlaceholder","Any City")},{type:"textbox",name:"addressCountry",label:e.getLang("wpsc.countryCode","Country ISO Code"),value:"",placeholder:e.getLang("wpsc.countryCode","US")},{type:"textbox",name:"addressRegion",label:e.getLang("wpsc.regionCode","Region ISO Code"),value:"",placeholder:e.getLang("wpsc.regionCodePlaceholder","US-CA")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.salary","Salary"),"</h1>")},{type:"listbox",name:"baseSalary",label:e.getLang("wpsc.unit","Unit"),values:[{text:e.getLang("wpsc.hourly","Hourly"),value:"HOUR"},{text:e.getLang("wpsc.daily","Daily"),value:"DAY"},{text:e.getLang("wpsc.weekly","Weekly"),value:"WEEK"},{text:e.getLang("wpsc.monthly","Monthly"),value:"MONTH"},{text:e.getLang("wpsc.yearly","Yearly"),value:"YEAR"}]},{type:"textbox",name:"currencyCode",label:e.getLang("wpsc.currencyCode","Currency ISO Code"),value:"",placeholder:e.getLang("wosc.currencyCodePlaceholder","USD")},{type:"textbox",name:"quantitativeValue",label:e.getLang("wpsc.value","Value"),value:"",placeholder:"40.00"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.jobMeta","Job Meta"),"</h1>")},{type:"listbox",name:"employmentType",label:e.getLang("wpsc.employmentType","CSS class"),values:[{text:e.getLang("wpsc.fullTime","Full Time"),value:"FULL_TIME"},{text:e.getLang("wpsc.partTime","Part Time"),value:"PART_TIME"},{text:e.getLang("wpsc.contractor","Contractor"),value:"CONTRACTOR"},{text:e.getLang("wpsc.temporary","Temporary"),value:"TEMPORARY"},{text:e.getLang("wpsc.intern","Intern"),value:"INTERN"},{text:e.getLang("wpsc.volunteer","Volunteer"),value:"VOLUNTEER"},{text:e.getLang("wpsc.perDiem","Per Diem"),value:"PER_DIEM"},{text:e.getLang("wpsc.other","Other"),value:"OTHER"}]},{type:"textbox",name:"validThrough",label:"".concat(e.getLang("wpsc.validThrough","Valid Through")," ").concat(t),classes:"sc_valid_through"},{type:"textbox",name:"sc_cssClass",label:e.getLang("wpsc.cssClass","CSS class"),value:""}],onsubmit:function(t){var n=t.data;e.insertContent("[sc_fs_job\n                html = '".concat(n.giveHTML,"'\n                title = '").concat(n.jobTitle,"'\n                title_tag = '").concat(n.titleTag,"'\n                valid_through = '").concat(n.validThrough,"'\n                employment_type = '").concat(n.employmentType,"'\n                company_name = '").concat(n.companyName,"'\n                same_as = '").concat(n.sameAs,"'\n                logo_id = '").concat(n.sc_img,"'\n                street_address = '").concat(n.streetAddress,"'\n                address_locality = '").concat(n.addressLocality,"'\n                address_region = '").concat(n.addressRegion,"'\n                postal_code = '").concat(n.postalCode,"'\n                address_country = '").concat(n.addressCountry,"'\n                currency_code = '").concat(n.currencyCode,"'\n                quantitative_value = '").concat(n.quantitativeValue,"'\n                base_salary = '").concat(n.baseSalary,"'\n                css_class = '").concat(n.sc_cssClass,"'\n                ]\n                ").concat(n.description,"\n                [/sc_fs_job]"))}}),r()&&(o(".mce-sc_valid_through").type="date")}}},g=function(e){var t=s()?"":"(Format: 2019-08-22, 12:45)",n=s()?500:800;return{text:e.getLang("wpsc.eventButtonText","Event"),tooltip:e.getLang("wpsc.eventTooltip","Adds a Event block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.eventPopupTitle","Featured Snippet Event"),minWidth:n,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"listbox",name:"titleTag",label:e.getLang("wpsc.titleTag","Title Tag"),values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{type:"textbox",name:"title",label:e.getLang("wpsc.event","Event Title"),value:"",placeholder:e.getLang("wpsc.eventPlaceholder","Enter Your Event Title...")},{type:"textbox",name:"description",label:e.getLang("wpsc.description","Description"),value:"",placeholder:e.getLang("wpsc.eventDescriptionPlaceholder","Enter your event description here..."),multiline:!0,minHeight:100},{type:"textbox",name:"image_id",label:e.getLang("wpsc.image","Image"),value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:e.getLang("wpsc.addImage","Add Image"),classes:"select_image"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.eventMeta","Event Meta"),"</h1>")},{type:"textbox",name:"eventLocation",label:e.getLang("wpsc.name","Name"),value:"",placeholder:e.getLang("wpsc.eventLocationNamePlaceholder","Event Location Name")},{type:"listbox",name:"status",label:e.getLang("wpsc.event_status","Event Status"),values:[{text:e.getLang("wpsc.eventScheduled","Scheduled"),value:"EventScheduled"},{text:e.getLang("wpsc.eventCancelled","Cancelled"),value:"EventCancelled"},{text:e.getLang("wpsc.eventMovedOnline","Moved Online"),value:"EventMovedOnline"},{text:e.getLang("wpsc.eventPostponed","Postponed"),value:"EventPostponed"},{text:e.getLang("wpsc.eventRescheduled","Rescheduled"),value:"EventRescheduled"}]},{type:"textbox",name:"prev_start_date",label:"".concat(e.getLang("wpsc.prev_start_date","Previous Start Date")," ").concat(t),placeholder:e.getLang("wpsc.prev_start_datePlaceholder","optional"),classes:"sc_prev_start_date"},{type:"textbox",name:"startDate",label:"".concat(e.getLang("wpsc.startDate","Start Date")," ").concat(t),classes:"sc_start_date"},{type:"textbox",name:"endDate",label:"".concat(e.getLang("wpsc.endDate","End Date")," ").concat(t),classes:"sc_end_date"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.eventLocation","Event Location"),"</h1>")},{type:"listbox",name:"event_attendance_mode",label:e.getLang("wpsc.event_attendance_mode","Attendance Mode"),values:[{text:e.getLang("wpsc.offlineEventAttendanceMode","Offline"),value:"OfflineEventAttendanceMode"},{text:e.getLang("wpsc.onlineEventAttendanceMode","Online"),value:"OnlineEventAttendanceMode"},{text:e.getLang("wpsc.mixedEventAttendanceMode","Mixed"),value:"MixedEventAttendanceMode"}]},{type:"textbox",name:"online_url",label:e.getLang("wpsc.online_url","URL"),value:"",placeholder:e.getLang("wpsc.online_urlPlaceholder","Online URL of Event"),multiline:!1,classes:"sc_online_url"},{type:"textbox",name:"streetAddress",label:e.getLang("wpsc.street","Street"),value:"",placeholder:e.getLang("wpsc.streetPlaceholder","Any Street 3A")},{type:"textbox",name:"postalCode",label:e.getLang("wpsc.zip","Postal Code"),value:"",placeholder:e.getLang("wpsc.zipPlaceholder","Any Postal Code")},{type:"textbox",name:"addressLocality",label:e.getLang("wpsc.locality","Locality"),value:"",placeholder:e.getLang("wpsc.localityPlaceholder","Any City")},{type:"textbox",name:"addressCountry",label:e.getLang("wpsc.countryCode","Country ISO Code"),value:"",placeholder:e.getLang("wpsc.countryCodePlaceholder","US")},{type:"textbox",name:"addressRegion",label:e.getLang("wpsc.regionCode","Region ISO Code"),value:"",placeholder:e.getLang("wpsc.regionCodePlaceholder","US-CA")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.performer","Performer"),"</h1>")},{type:"listbox",name:"performer",label:e.getLang("wpsc.type","Type"),values:[{text:e.getLang("wpsc.performingGroup","Performing Group"),value:"PerformingGroup"},{text:e.getLang("wpsc.performingPerson","Person"),value:"Person"}]},{type:"textbox",name:"performerName",label:e.getLang("wpsc.performerName","Performer"),value:"",placeholder:e.getLang("wpsc.performerNamePlaceholder","John Doe")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.offer","Offer"),"</h1>")},{type:"listbox",name:"offerAvailability",label:e.getLang("wpsc.availability","Availability"),values:[{text:e.getLang("wpsc.inStock","In Stock"),value:"InStock"},{text:e.getLang("wpsc.soldOut","Sold Out"),value:"SoldOut"},{text:e.getLang("wpsc.preOrder","Pre Order"),value:"PreOrder"}]},{type:"textbox",name:"offerUrl",label:e.getLang("wpsc.ticketWebsite","Ticket Website"),value:"",placeholder:e.getLang("wpsc.ticketWebsitePlaceholder","https://your-website.com"),multiline:!1},{type:"textbox",name:"currencyCode",label:e.getLang("wpsc.currencyCode","Currency ISO Code"),value:"",placeholder:e.getLang("wpsc.currencyCodePlaceholder","USD")},{type:"textbox",name:"price",label:e.getLang("wpsc.price","Price"),value:"",placeholder:"40.00"},{type:"textbox",name:"offerValidFrom",label:"".concat(e.getLang("wpsc.validFrom","Valid From")," ").concat(t),classes:"sc_valid_from"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.additional","Additional"),"</h1>")},{type:"textbox",name:"cssClass",label:e.getLang("wpsc.cssClass","CSS class"),value:""}],onsubmit:function(t){var n=t.data;e.insertContent('[sc_fs_event \n                html="'.concat(n.giveHTML,'" \n                title="').concat(n.title,'" \n                title_tag="').concat(n.titleTag,'"\n                event_location="').concat(n.eventLocation,'"\n                status="').concat(n.status,'"\n                ').concat(n.online_url?'online_url="'.concat(n.online_url,'"'):"","\n                ").concat(n.prev_start_date?'prev_start_date="'.concat(n.prev_start_date,'"'):"",'\n                event_attendance_mode="').concat(n.event_attendance_mode,'"\n                start_date="').concat(n.startDate,'"\n                end_date="').concat(n.endDate,'"\n                street_address="').concat(n.streetAddress,'"\n                address_locality="').concat(n.addressLocality,'"\n                address_region="').concat(n.addressRegion,'"\n                postal_code="').concat(n.postalCode,'"\n                address_country="').concat(n.addressCountry,'"\n                image_id="').concat(n.image_id,'"\n                performer="').concat(n.performer,'"\n                performer_name="').concat(n.performerName,'"\n                offer_availability="').concat(n.offerAvailability,'"\n                offer_url="').concat(n.offerUrl,'"\n                currency_code="').concat(n.currencyCode,'"\n                price="').concat(n.price,'"\n                offer_valid_from="').concat(n.offerValidFrom,'"\n                css_class="').concat(n.cssClass,'"\n            ]\n                ').concat(n.description,"\n            [/sc_fs_event]"))}}),s()&&(o(".mce-sc_prev_start_date").type="datetime-local",o(".mce-sc_start_date").type="datetime-local",o(".mce-sc_end_date").type="datetime-local",o(".mce-sc_valid_from").type="datetime-local")}}},u=function(e){var t=r()?"":"(Format: 2019-08-22)",n=r()?500:800;return{text:e.getLang("wpsc.personButtonText","Person"),tooltip:e.getLang("wpsc.personTooltip","Adds a Person block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.personPopupTitle","Featured Snippet Person"),minWidth:n,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.personal","Personal"),"</h1>")},{type:"textbox",name:"personName",label:e.getLang("wpsc.name","Name"),value:"",placeholder:e.getLang("wpsc.namePlaceholder","Please enter your Name here ...")},{type:"textbox",name:"personName",label:e.getLang("wpsc.alt_name","Alternate Name"),value:"",placeholder:e.getLang("wpsc.altNamePlaceholder","Alternate Name here ...")},{type:"textbox",name:"jobTitle",label:e.getLang("wpsc.jobTitle","Job Title"),value:"",placeholder:e.getLang("wpsc.jobTitlePlaceholder","Please enter your job title here ...")},{type:"textbox",name:"sc_img",label:e.getLang("wpsc.image","Image"),value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:e.getLang("wpsc.addImage","Add Image"),classes:"select_image"},{type:"textbox",name:"birthdate",label:"".concat(e.getLang("wpsc.birthdate","Birthdate")," ").concat(t),classes:"sc_birthdate"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.contact","Contact"),"</h1>")},{type:"textbox",name:"email",label:e.getLang("wpsc.email","E-Mail"),value:"",placeholder:e.getLang("wpsc.contactEmail","jane-doe@xyz.edu"),multiline:!1},{type:"textbox",name:"homepage",label:e.getLang("wpsc.contactHomepage","URL"),value:"",placeholder:e.getLang("wpsc.contactHomepagePlaceholder","http://www.janedoe.com"),multiline:!1},{type:"textbox",name:"telephone",label:e.getLang("wpsc.contactPhone","Telephone"),value:"",placeholder:e.getLang("wpsc.contactPhonePlaceholder","(425) 123-4567"),multiline:!1},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.address","Address"),"</h1>")},{type:"textbox",name:"streetAddress",label:e.getLang("wpsc.street","Street"),value:"",placeholder:e.getLang("wpsc.streetPlaceholder","Any Street 3A")},{type:"textbox",name:"postalCode",label:e.getLang("wpsc.zip","Postal Code"),value:"",placeholder:e.getLang("wpsc.zipPlaceholder","Any Postal Code")},{type:"textbox",name:"addressLocality",label:e.getLang("wpsc.locality","Locality"),value:"",placeholder:e.getLang("wpsc.localityPlaceholder","Any City")},{type:"textbox",name:"addressCountry",label:e.getLang("wpsc.countryCode","Country ISO Code"),value:"",placeholder:e.getLang("wpsc.countryCodePlaceholder","US")},{type:"textbox",name:"addressRegion",label:e.getLang("wpsc.regionCode","Region ISO Code"),value:"",placeholder:e.getLang("wpsc.regionCodePlaceholder","US-CA")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.colleagues","Colleagues"),"</h1>")},{type:"textbox",name:"colleague",label:e.getLang("wpsc.colleagueLabel","Colleague"),value:"",placeholder:e.getLang("wpsc.colleaguePlaceholder","Comma seperated URLs")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.work","Work"),"</h1>")},{type:"textbox",name:"works_for_name",label:e.getLang("wpsc.works_for_name","Organisation Name"),value:"",placeholder:e.getLang("wpsc.works_for_namePlaceholder","Your Works Name")},{type:"textbox",name:"works_for_alt",label:e.getLang("wpsc.works_for_alt","Alternate Name"),value:"",placeholder:e.getLang("wpsc.works_for_altPlaceholder","Your Works Alternate Name")},{type:"textbox",name:"works_for_url",label:e.getLang("wpsc.works_for_url","Url"),value:"",placeholder:e.getLang("wpsc.works_for_urlPlaceholder","Organisation Website")},{type:"textbox",name:"works_for_logo",label:e.getLang("wpsc.works_for_logo","Logo"),value:"",placeholder:e.getLang("wpsc.works_for_logoPlaceholder","Organisation Logo")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.sameAsHeadline","Same as"),"</h1>")},{type:"textbox",name:"same_as",label:e.getLang("wpsc.sameAsLabel","Website / Social Media"),value:"",placeholder:e.getLang("wpsc.sameAsPlaceholder","https://xyz.com/me.html")},{type:"textbox",name:"sc_cssClass",label:e.getLang("wpsc.cssClass","CSS class"),value:"",default:""}],onsubmit:function(t){var n=t.data;e.insertContent('[sc_fs_person \n                html="'.concat(n.giveHTML,'"\n                person_name="').concat(n.personName,'" \n                job_title="').concat(n.jobTitle,'" \n                image_id="').concat(n.sc_img,'"\n                birthdate="').concat(n.birthdate,'"\n                street_address="').concat(n.streetAddress,'"\n                address_locality="').concat(n.addressLocality,'"\n                address_region="').concat(n.addressRegion,'"\n                postal_code="').concat(n.postalCode,'"\n                address_country="').concat(n.addressCountry,'"\n                email="').concat(n.email,'"\n                url="').concat(n.homepage,'"\n                telephone="').concat(n.telephone,'"\n                css_class="').concat(n.sc_cssClass,'"\n                colleague="').concat(n.colleague,'"\n                works_for_name="').concat(n.works_for_name,'"\n                works_for_alt="').concat(n.works_for_alt,'"\n                works_for_url="').concat(n.works_for_url,'"\n                works_for_logo="').concat(n.works_for_logo,'"\n                same_as="').concat(n.same_as,'"\n              ]'))}}),r()&&(o(".mce-sc_birthdate").type="date")}}},m=function(e){return{text:e.getLang("wpsc.courseButtonText","Course"),tooltip:e.getLang("wpsc.courseTooltip","Adds a Course block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.coursePopupTitle","Featured Snippet Course"),minWidth:500,height:500,autoScroll:!0,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"listbox",name:"titleTag",label:e.getLang("wpsc.titleTag","Title Tag"),values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{type:"textbox",name:"title",label:e.getLang("wpsc.course","Course Name"),value:"",placeholder:e.getLang("wpsc.coursePlaceholder","Enter Your Course Name here...")},{type:"textbox",name:"description",label:e.getLang("wpsc.description","Description"),value:"",placeholder:e.getLang("wpsc.description","Enter your description here..."),multiline:!0,minHeight:100},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.providerInformation","Provider Information"),"</h1>")},{type:"textbox",name:"providerName",label:e.getLang("wpsc.providerName","Provider Name"),value:"",placeholder:e.getLang("wpsc.providerName","Provider Name"),multiline:!1},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.sameAsHeadline","Same as"),"</h1>")},{type:"textbox",name:"providerSameAs",label:e.getLang("wpsc.sameAsLabel","Website / Social Media"),value:"",placeholder:e.getLang("wpsc.sameAsPlaceholder","https://your-website.com"),multiline:!1},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.additional","Additional"),"</h1>")},{type:"textbox",name:"cssClass",label:e.getLang("wpsc.cssClass","CSS class"),value:""}],onsubmit:function(t){var n=t.data;e.insertContent('[sc_fs_course \n                            html="'.concat(n.giveHTML,'" \n                            title="').concat(n.title,'" \n                            title_tag="').concat(n.titleTag,'"\n                            provider_name="').concat(n.providerName,'"\n                            provider_same_as="').concat(n.providerSameAs,'"\n                            css_class="').concat(n.cssClass,'"\n                ]\n                ').concat(n.description,"\n                [/sc_fs_course]"))}})}}};"undefined"!=typeof tinymce&&tinymce.PluginManager.add("structured_content_dropdown",(function(e){return c("click",".mce-select_image",(function(e){e.preventDefault();var t=e.target.dataset.target,n=o(void 0===t?".mce-image":"#".concat(t)),a=void 0===t,l=wp.media.frames.file_frame=wp.media({title:"Add Image",button:{text:"Add Image"},multiple:!1});l.on("select",(function(){var e=l.state().get("selection").first().toJSON();a?n.value=e.id:n.innerHTML=e.id})),l.open()})),e.addButton("structured_content_dropdown",{icon:"structured-content",type:"menubutton",menu:[a(e),p(e),d(e),g(e),u(e),m(e)]})}))}]);