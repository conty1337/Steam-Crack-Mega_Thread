(self.webpackChunkasf_ui=self.webpackChunkasf_ui||[]).push([[8530],{6034:(e,t,s)=>{var i=s(8081),n=s(3645)(i);n.push([e.id,".config-editor{margin-bottom:1em}.config-editor:last-child{margin-bottom:0}.config-uncategorized{border:0 solid var(--color-border);padding:0 1em 1em}",""]),e.exports=n},9766:(e,t,s)=>{var i=s(8081),n=s(3645)(i);n.push([e.id,".form-item__description{backface-visibility:hidden;perspective:1000px;transform:translateZ(0);will-change:height}.form-item__description-enter,.form-item__description-leave-to{opacity:0}.form-item__description-enter-active,.form-item__description-leave-active{transition:height .25s,opacity .25s}.form-item__description-content{display:block;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0px;margin-inline-end:0px}",""]),e.exports=n},920:(e,t,s)=>{var i=s(8081),n=s(3645),l=s(3032),a=n(i);a.i(l),a.push([e.id,".multiselect{border:1px solid rgba(var(--color-text-dark), 0.1);border-radius:.1875em}@media screen and (max-height: 725px),screen and (max-width: 1366px){.multiselect{min-height:20px}}@media screen and (max-height: 640px),screen and (max-width: 1000px){.multiselect{min-height:20px}}@media screen and (max-height: 725px),screen and (max-width: 1366px){.multiselect__select{height:33px}}@media screen and (max-height: 640px),screen and (max-width: 1000px){.multiselect__select{height:28px}}.multiselect,.multiselect__input,.multiselect__single{font-size:inherit;background:var(--color-background)}.multiselect__single{top:2px;font-size:14px}@media screen and (max-height: 725px),screen and (max-width: 1366px){.multiselect__single{vertical-align:sub;font-size:.9375em}}@media screen and (max-height: 640px),screen and (max-width: 1000px){.multiselect__single{vertical-align:top}}.multiselect,.multiselect__input::placeholder,.multiselect__placeholder,.multiselect__option--selected.multiselect__option--highlight{color:var(--color-text-dark)}.multiselect__tags,.multiselect__spinner{background:var(--color-background);border-color:var(--color-border)}.multiselect__content-wrapper{top:35px;background:var(--color-background);border-color:var(--color-border);color:var(--color-text-dark)}.multiselect__tags{border:none}@media screen and (max-height: 640px),screen and (max-width: 1000px){.multiselect__tags{min-height:20px;height:33px;padding:5px 40px 0 8px}}@media screen and (max-height: 725px),screen and (max-width: 1366px){.multiselect__tags{min-height:20px;height:30px;padding:5px 40px 0 8px}}.multiselect__tags>input{color:var(--color-text-dark);margin-left:-5px;margin-top:.7px}.multiselect__tag,.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:var(--color-theme)}.multiselect__tag-icon:after{color:var(--color-button-cancel);font-size:22px}.multiselect__spinner:after,.multiselect__spinner:before{border-top-color:var(--color-theme)}.multiselect__option--highlight:after{color:var(--color-theme);background:var(--color-background-light)}.multiselect__option--highlight{background:var(--color-background-light);color:var(--color-theme)}.multiselect__option--selected{color:var(--color-theme);background:var(--color-background)}.multiselect__option--selected.multiselect__option--highlight:hover{color:var(--color-button-cancel);font-weight:700}.multiselect__option--selected.multiselect__option--highlight,.multiselect__option--selected.multiselect__option--highlight:after{color:var(--color-theme);background:var(--color-background-light);font-weight:normal}.multiselect__option--selected.multiselect__option--highlight:after{color:#f44336}",""]),e.exports=a},4643:(e,t,s)=>{var i=s(8081),n=s(3645)(i);n.push([e.id,".input-unknown{color:var(--color-theme);font-weight:600}",""]),e.exports=n},8530:(e,t,s)=>{"use strict";s.d(t,{Z:()=>se});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"config-editor"},[e.nonEmptyCategories?[e._l(e.nonEmptyCategories,(function(s){return t("ConfigCategory",{key:s.name,attrs:{name:s.name}},e._l(e.categoryFields(s.name),(function(s){return t(e.componentFromField(s),{key:s.param,tag:"component",staticClass:"form-item--config",attrs:{schema:s,currentValue:e.model[s.paramName]},on:{update:e.updateModel}})})),1)})),e._v(" "),e.uncategorizedFields.length?t("ConfigCategory",{key:"Other",attrs:{name:e.$t("other")}},e._l(e.uncategorizedFields,(function(s){return t(e.componentFromField(s),{key:s.param,tag:"component",staticClass:"form-item--config",attrs:{schema:s,currentValue:e.model[s.paramName]},on:{update:e.updateModel}})})),1):e._e()]:e._e(),e._v(" "),e.nonEmptyCategories?e._e():[t("fieldset",{staticClass:"config-uncategorized"},e._l(e.uncategorizedFields,(function(s){return t(e.componentFromField(s),{key:s.param,tag:"component",staticClass:"form-item--config",attrs:{schema:s,currentValue:e.model[s.paramName]},on:{update:e.updateModel}})})),1)]],2)};i._withStripped=!0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-item__input",attrs:{id:e.field,type:"text",name:e.field,placeholder:e.placeholder},domProps:{value:e.value},on:{blur:e.onBlur,keypress:e.onKeyPress,input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),e.hasErrors?t("span",{staticClass:"form-item__error"},[e._v(e._s(e.errorText))]):e._e()]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};n._withStripped=!0;var l=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"form-item__description"},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave}},[t("div",{staticClass:"form-item__description",class:{"form-item__description--shown":e.shown}},[t("div",{staticClass:"form-item__description-content",domProps:{innerHTML:e._s(e.description)}})])])};l._withStripped=!0;const a={name:"InputDescription",props:{description:String,shown:Boolean},methods:{enter(e){e.style.width=getComputedStyle(e).width,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";const{height:t}=getComputedStyle(e);e.style.width=null,e.style.position=null,e.style.visibility=null,e.style.height=0,setTimeout((()=>e.style.height=t),0)},afterEnter(e){e.style.height="auto"},leave(e){e.style.height=getComputedStyle(e).height,setTimeout((()=>e.style.height=0),0)}}};s(154);var r=s(1900);const o=(0,r.Z)(a,l,[],!1,null,null,null).exports;var u=function(){var e=this,t=e._self._c;return t("label",{staticClass:"form-item__label"},[e._v(e._s(e.label)+"\n  "),e.hasDescription?t("FontAwesomeIcon",{staticClass:"form-item__description-icon",attrs:{icon:"question"},on:{click:e.$parent.toggleDescription}}):e._e(),e._v(" "),e.showKey?t("FontAwesomeIcon",{staticClass:"form-item__description-icon pull-right",attrs:{icon:"key"},on:{click:function(t){return e.onRoute(e.label)}}}):e._e()],1)};u._withStripped=!0;const c={name:"InputLabel",props:{label:String,field:String,hasDescription:Boolean},computed:{showKey(){return"IPCPassword"===this.label&&"asf-config"===this.$route.name||"SteamPassword"===this.label&&"bot-config"===this.$route.name}},methods:{onRoute(e){return"IPCPassword"===e?this.$router.push({name:"password-hash",params:{label:e}}):"SteamPassword"===e?this.$router.push({name:"password-encrypt",params:{label:e}}):void 0}}},m=(0,r.Z)(c,u,[],!1,null,null,null).exports,p=/^[1-9][0-9]{16,17}$/;function d(e){return`${e}`.split("").every((e=>!Number.isNaN(e)))}function h(e=0,t){return function(s){const i=[];return d(s)||i.push("not a number"),s<e&&i.push(`lesser than allowed (${e})`),s>t&&i.push(`greater than allowed (${t})`),i}}const v={byte:h(0,255),uint16:h(0,65535),uint32:h(0,4294967295),uint64:function(e){const t=[];return d(e)||t.push("not a number"),p.test(`${e}`)||"0"==`${e}`||t.push("not valid steamid"),t}},_={components:{InputLabel:m,InputDescription:o},props:{schema:{type:Object,required:!0},currentValue:{defaultValue:!0}},data(){const e=void 0!==this.currentValue?this.currentValue:this.schema.defaultValue;return{value:"object"==typeof e?JSON.parse(JSON.stringify(e)):e,showDescription:!1}},computed:{defaultValue(){return this.schema.defaultValue},label(){return this.schema.label||this.schema.param||this.schema.paramName},field(){return this.schema.paramName},placeholder(){return this.schema.placeholder||this.schema.defaultValue},description(){return this.schema.description},hasDescription(){return!!this.description},isValid(){return!this.hasErrors},hasErrors(){return this.errors.length},errors(){return Object.prototype.hasOwnProperty.call(v,this.schema.type)?v[this.schema.type](this.value,this.schema):[]},errorText(){return this.errors.map((e=>`Value is ${e}!`)).join(" ")}},watch:{value:{handler:"update",deep:!0}},methods:{update(){const e="object"==typeof this.value?JSON.parse(JSON.stringify(this.value)):this.value;this.$emit("update",e,this.field)},toggleDescription(){this.showDescription=!this.showDescription}}},f=(0,r.Z)(_,void 0,void 0,!1,null,null,null).exports,g={name:"InputString",mixins:[f],methods:{onBlur(){""===this.value&&(this.value=this.defaultValue)},onKeyPress(e){if("uint64"!==this.schema.type)return!0;const t=e.which?e.which:e.keyCode;return!(t>31&&(t<48||t>57)&&46!==t)||e.preventDefault()}}},y=(0,r.Z)(g,n,[],!1,null,null,null).exports;var b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("div",{staticClass:"form-item__buttons"},[t("button",{staticClass:"button",class:{"button--active":e.value},on:{click:function(t){t.preventDefault(),e.value=!0}}},[e._v("\n        ✔\n      ")]),e._v(" "),t("button",{staticClass:"button",class:{"button--cancel":!e.value},on:{click:function(t){t.preventDefault(),e.value=!1}}},[e._v("\n        ✖\n      ")])])]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};b._withStripped=!0;const w={name:"InputBoolean",mixins:[f]},x=(0,r.Z)(w,b,[],!1,null,null,null).exports;var D=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"form-item__input",attrs:{id:e.field,type:"number",name:e.field,placeholder:e.placeholder},domProps:{value:e.value},on:{blur:[e.onBlur,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.value=e._n(t.target.value))}}}),e._v(" "),e.hasErrors?t("span",{staticClass:"form-item__error"},[e._v(e._s(e.errorText))]):e._e()]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};D._withStripped=!0;const k={name:"InputNumber",mixins:[f],methods:{onBlur(){""===this.value&&(this.value=this.defaultValue)}}},C=(0,r.Z)(k,D,[],!1,null,null,null).exports;var V=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item input-option"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedElement,expression:"selectedElement"}],staticClass:"form-item__input",attrs:{id:e.field},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedElement=t.target.multiple?s:s[0]},function(t){return e.addFlag(t.target.value)}]}},[t("option",{attrs:{disabled:"",selected:"",hidden:""},domProps:{value:null}},[e._v(e._s(e.$t("input-select-enum-value")))]),e._v(" "),e._l(e.flags,(function(s,i){return t("option",{directives:[{name:"show",rawName:"v-show",value:0===s||!((e.value&s)===s),expression:"enumValue === 0 || !((value & enumValue) === enumValue)"}],key:i,domProps:{value:s}},[e._v("\n        "+e._s(i)+"\n      ")])}))],2),e._v(" "),t("div",{staticClass:"input-option__items"},e._l(e.getSelectedFlagValues(),(function(s){return t("button",{key:s,staticClass:"button input-option__item",on:{click:function(t){return t.preventDefault(),e.removeFlag(s)}}},[e._v("\n        "+e._s(e.resolveFlagName(s))+"\n      ")])})),0)]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};V._withStripped=!0;const E={name:"InputFlag",mixins:[f],data:()=>({selectedElement:null}),computed:{flags(){return this.schema.values}},methods:{getSelectedFlagValues(){return[...Array(32).keys()].map((e=>1<<e)).filter((e=>this.value&e))},addFlag(e){const t="number"!=typeof e?parseInt(e,10):e;(t||0===t)&&(0===t?this.value=0:this.value|=t,this.selectedElement=null)},removeFlag(e){this.value&=~e},resolveFlagName(e){return Object.keys(this.flags).find((t=>this.flags[t]===e))}}},N=(0,r.Z)(E,V,[],!1,null,null,null).exports;var S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedElement,expression:"selectedElement"}],staticClass:"form-item__input",attrs:{id:e.field,disabled:!e.availableEnumValues.length},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedElement=t.target.multiple?s:s[0]},function(t){return e.addElement(t.target.value)}]}},[t("option",{attrs:{disabled:"",selected:"",hidden:""},domProps:{value:null}},[e._v(e._s(e.$t("input-select-enum-value")))]),e._v(" "),e._l(e.enumValues,(function(s,i){return t("option",{directives:[{name:"show",rawName:"v-show",value:!e.value.includes(s),expression:"!value.includes(enumValue)"}],key:i,domProps:{value:s}},[e._v("\n        "+e._s(i)+"\n      ")])})),e._v(" "),e.availableEnumValues.length?e._e():t("option",{attrs:{disabled:""},domProps:{value:void 0}},[e._v("\n        "+e._s(e.$t("input-all-selected"))+"\n      ")])],2),e._v(" "),t("div",{staticClass:"input-option__items"},e._l(e.value,(function(s,i){return t("button",{key:i,staticClass:"button input-option__item",on:{click:function(t){return t.preventDefault(),e.removeElement(s)}}},[e._v("\n        "+e._s(e.resolveOption(s))+"\n      ")])})),0)]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};S._withStripped=!0;const $={name:"InputSet",mixins:[f],data:()=>({selectedElement:null}),computed:{availableEnumValues(){const e=[];return Object.keys(this.enumValues).forEach((t=>{this.value.includes(this.enumValues[t])||e.push(this.enumValues[t])})),e},enumValues(){return this.schema.values.values}},created(){this.value.sort()},methods:{addElement(e){const t="number"!=typeof e?parseInt(e,10):e;this.value.includes(t)||(this.value.push(t),this.value.sort(),this.selectedElement=null)},removeElement(e){const t="number"!=typeof e?parseInt(e,10):e;this.value=this.value.filter((e=>e!==t))},resolveOption(e){return Object.keys(this.enumValues).find((t=>this.enumValues[t]===e))}}},I=(0,r.Z)($,S,[],!1,null,null,null).exports;var O=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedElement,expression:"selectedElement"}],staticClass:"form-item__input",attrs:{id:e.field,disabled:!e.availableEnumValues.length},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedElement=t.target.multiple?s:s[0]},function(t){return e.addElement(t.target.value)}]}},[t("option",{attrs:{disabled:"",selected:"",hidden:""},domProps:{value:null}},[e._v(e._s(e.$t("input-select-enum-value")))]),e._v(" "),e._l(e.enumValues,(function(s,i){return t("option",{directives:[{name:"show",rawName:"v-show",value:!e.value.includes(s),expression:"!value.includes(enumValue)"}],key:i,domProps:{value:s}},[e._v("\n        "+e._s(i)+"\n      ")])})),e._v(" "),e.availableEnumValues.length?e._e():t("option",{attrs:{disabled:""},domProps:{value:void 0}},[e._v("\n        "+e._s(e.$t("input-all-selected"))+"\n      ")])],2),e._v(" "),t("div",{staticClass:"input-option__items"},e._l(e.value,(function(s,i){return t("button",{key:i,staticClass:"button input-option__item",on:{click:function(t){return t.preventDefault(),e.removeElementAtIndex(i)}}},[e._v("\n        "+e._s(e.resolveOption(s))+"\n      ")])})),0)]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};O._withStripped=!0;const K={name:"InputList",mixins:[f],data:()=>({selectedElement:null}),computed:{availableEnumValues(){const e=[];return Object.keys(this.enumValues).forEach((t=>{this.value.includes(this.enumValues[t])||e.push(this.enumValues[t])})),e},enumValues(){return this.schema.values.values}},methods:{addElement(e){const t="number"!=typeof e?parseInt(e,10):e;this.value.includes(t)||(this.value.push(t),this.selectedElement=null)},removeElementAtIndex(e){this.value.splice(e,1)},resolveOption(e){return Object.keys(this.enumValues).find((t=>this.enumValues[t]===e))}}},F=(0,r.Z)(K,O,[],!1,null,null,null).exports;var P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("div",{staticClass:"input-option__field"},[t("div",{staticClass:"form-item__input form-item__input--tag-wrapper",class:{"form-item__input--focus":e.focus}},[e._l(e.value,(function(s,i){return t("button",{key:i,staticClass:"form-item__tag",on:{click:function(t){return t.preventDefault(),e.removeElement(i)}}},[t("span",{staticClass:"form-item__tag-value"},[e._v(e._s(s))]),e._v(" "),t("FontAwesomeIcon",{staticClass:"form-item__tag-remove",attrs:{icon:"times"}})],1)})),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.element,expression:"element"}],staticClass:"form-item__input form-item__input--tag",attrs:{type:"text"},domProps:{value:e.element},on:{keydown:e.onKeyDown,focus:e.onFocus,blur:e.onBlur,input:function(t){t.target.composing||(e.element=t.target.value)}}})],2),e._v(" "),t("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addElement.apply(null,arguments)}}},[e._v("\n        "+e._s(e.$t("add"))+"\n      ")])]),e._v(" "),e.hasErrors?t("span",{staticClass:"form-item__error"},[e._v(e._s(e.errorText))]):e._e()]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};P._withStripped=!0;const j={name:"InputTag",mixins:[f],data:()=>({focus:!1,element:""}),computed:{isString(){return["string","uint64"].includes(this.schema.values.type)},isNumber(){return["uint32","uint16"].includes(this.schema.values.type)},errors(){return Object.prototype.hasOwnProperty.call(v,this.schema.values.type)?v[this.schema.values.type](this.element):[]},isValid:()=>!0},watch:{element(e,t){Number.isNaN(e)&&(this.element=t)}},methods:{addElement(){if(this.hasErrors)return;const e=this.isNumber?parseInt(this.element,10):this.element;(e||0===e)&&(this.value.includes(e)||(this.value.push(e),this.element=""))},removeElement(e){this.value.splice(e,1),this.element=""},onKeyDown(e){const t=e.which?e.which:e.keyCode;return[9,13,188,32].includes(t)?(this.addElement(),e.preventDefault()):8!==t||this.element&&this.element.length?void 0:(this.value.splice(-1),e.preventDefault())},onFocus(){this.focus=!0},onBlur(){this.focus=!1}}},Z=(0,r.Z)(j,P,[],!1,null,null,null).exports;var A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-item__input",attrs:{id:e.field,name:e.field},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.value=t.target.multiple?s:s[0]}}},e._l(e.values,(function(s,i){return"Max"===i&&e.isLastValue(s)?e._e():t("option",{key:i,domProps:{value:s}},[e._v("\n        "+e._s(i)+"\n      ")])})),0)]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};A._withStripped=!0;const M={name:"InputEnum",mixins:[f],computed:{values(){return this.schema.values}},methods:{isLastValue(e){return e===Math.max(...Object.values(this.values))}}},L=(0,r.Z)(M,A,[],!1,null,null,null).exports;var z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("div",{staticClass:"input-option__field input-option__field--three"},[e.keyIsString?t("input",{directives:[{name:"model",rawName:"v-model",value:e.elementKey,expression:"elementKey"}],staticClass:"form-item__input",attrs:{id:`${e.field}-key`,type:"text"},domProps:{value:e.elementKey},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addElement.apply(null,arguments)},input:function(t){t.target.composing||(e.elementKey=t.target.value)}}}):e._e(),e._v(" "),e.valueIsEnum?t("select",{directives:[{name:"model",rawName:"v-model",value:e.elementValue,expression:"elementValue"}],staticClass:"form-item__input",attrs:{id:`${e.field}-value`},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.elementValue=t.target.multiple?s:s[0]}}},e._l(e.schema.value.values,(function(s,i){return t("option",{key:i,domProps:{value:s}},[e._v("\n          "+e._s(i)+"\n        ")])})),0):e._e(),e._v(" "),t("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addElement.apply(null,arguments)}}},[e._v("\n        "+e._s(e.$t("add"))+"\n      ")])]),e._v(" "),t("div",{staticClass:"input-option__items"},e._l(e.value,(function(s,i){return t("button",{key:i,staticClass:"button input-option__item",on:{click:function(t){return t.preventDefault(),e.removeElement(i)}}},[e._v("\n        "+e._s(i)+" => "+e._s(e.resolveValue(s))+"\n      ")])})),0)]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};z._withStripped=!0;const B={name:"InputDictionary",mixins:[f],data:()=>({elementKey:null,elementValue:null}),computed:{keyIsString(){return["string","uint64"].includes(this.schema.key.type)},valueIsEnum(){return"enum"===this.schema.value.type},valueAvailableEnumValues(){const e=[];return Object.keys(this.schema.value.values).forEach((t=>{e.push(this.schema.value.values[t])})),e}},created(){this.elementKey=this.getDefaultKey(),this.elementValue=this.getDefaultValue()},methods:{getDefaultKey:()=>null,getDefaultValue(){return this.valueIsEnum?this.valueAvailableEnumValues[0]:null},resolveValue(e){return this.valueIsEnum?Object.keys(this.schema.value.values).find((t=>this.schema.value.values[t]===e)):e},addElement(){!this.elementValue&&0!==this.elementValue||!this.elementKey&&0!==this.elementKey||(this.$set(this.value,this.elementKey,this.elementValue),this.elementValue=this.getDefaultValue(),this.elementKey=this.getDefaultKey())},removeElement(e){this.$delete(this.value,e)}}},T=(0,r.Z)(B,z,[],!1,null,null,null).exports;var q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("span",{staticClass:"input-unknown"},[e._v(e._s(e.$t("input-unknown-type")))])]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};q._withStripped=!0;const J={name:"InputUnknown",mixins:[f]};s(7391);const W=(0,r.Z)(J,q,[],!1,null,null,null).exports;var U=function(){var e=this,t=e._self._c;return t("fieldset",{staticClass:"config-category form-group"},[e.name?t("legend",{staticClass:"form-group__legend"},[e._v("\n    "+e._s(e.name)+"\n  ")]):e._e(),e._v(" "),e._t("default")],2)};U._withStripped=!0;const R={name:"ConfigCategory",props:{name:String},computed:{isValid(){return this.$children.every((e=>e.isValid))}}},H=(0,r.Z)(R,U,[],!1,null,null,null).exports;var G=function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-item"},[t("input-label",{attrs:{label:e.label,hasDescription:e.hasDescription}}),e._v(" "),t("div",{staticClass:"form-item__value"},[t("div",{staticClass:"input-option__field input-option__field--three"},[t("Multiselect",e._b({on:{tag:e.addSteamId},model:{value:e.elementKey,callback:function(t){e.elementKey=t},expression:"elementKey"}},"Multiselect",{label:"label",trackBy:"key",multiple:!1,options:e.botOptions,closeOnSelect:!0,taggable:!0,placeholder:"",deselectLabel:"",selectLabel:"",selectedLabel:"",tagPlaceholder:e.$t("tag-placeholder")},!1)),e._v(" "),e.valueIsEnum?t("select",{directives:[{name:"model",rawName:"v-model",value:e.elementValue,expression:"elementValue"}],staticClass:"form-item__input",attrs:{id:`${e.field}-value`},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.elementValue=t.target.multiple?s:s[0]}}},e._l(e.schema.value.values,(function(s,i){return t("option",{key:i,domProps:{value:s}},[e._v("\n          "+e._s(i)+"\n        ")])})),0):e._e(),e._v(" "),t("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addElement.apply(null,arguments)}}},[e._v("\n        "+e._s(e.$t("add"))+"\n      ")])],1),e._v(" "),t("div",{staticClass:"input-option__items"},e._l(e.value,(function(s,i){return t("button",{key:i,staticClass:"button input-option__item",on:{click:function(t){return t.preventDefault(),e.removeElement(i)}}},[e._v("\n        "+e._s(e.resolveKey(i))+" => "+e._s(e.resolveValue(s))+"\n      ")])})),0)]),e._v(" "),e.hasDescription?t("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};G._withStripped=!0;var Q=s(629),X=s(7907);const Y={name:"InputSelect",components:{Multiselect:s.n(X)()},mixins:[f],data:()=>({elementKey:null,elementValue:null}),computed:{...(0,Q.Se)({bots:"bots/bots"}),valueIsEnum(){return"enum"===this.schema.value.type},valueAvailableEnumValues(){const e=[];return Object.keys(this.schema.value.values).forEach((t=>{e.push(this.schema.value.values[t])})),e},botOptions(){return this.bots.map((e=>({label:e.nickname?`${e.name} (${e.nickname})`:e.name,key:e.steamid})))}},created(){this.elementKey=this.getDefaultKey(),this.elementValue=this.getDefaultValue()},methods:{getDefaultKey:()=>null,getDefaultValue(){return this.valueIsEnum?this.valueAvailableEnumValues[0]:null},resolveKey(e){const t=this.bots.find((t=>t.steamid===e));return t?`${e} (${t.name})`:e},resolveValue(e){return this.valueIsEnum?Object.keys(this.schema.value.values).find((t=>this.schema.value.values[t]===e)):e},addElement(){!this.elementValue&&0!==this.elementValue||!this.elementKey&&0!==this.elementKey||(this.$set(this.value,this.elementKey.key,this.elementValue),this.elementValue=this.getDefaultValue(),this.elementKey=this.getDefaultKey())},removeElement(e){this.$delete(this.value,e)},addSteamId(e){this.elementKey={label:e,key:e}}}};s(8429);const ee=(0,r.Z)(Y,G,[],!1,null,null,null).exports,te={name:"ConfigEditor",components:{ConfigCategory:H},props:{fields:{type:Array,required:!0},model:{type:Object,required:!0},categories:Array,descriptions:Object,extendedFields:Object,deleteDefaultValues:{type:Boolean,required:!1,default:!0}},computed:{nonEmptyCategories(){return this.categories?this.categories.filter((e=>this.categoryFields(e.name).length)):this.categories},uncategorizedFields(){if(!this.categories)return this.fields;const e=this.categories.map((e=>e.fields)).reduce(((e,t)=>[...e,...t]),[]);return this.fields.filter((t=>!e.includes(t.param)))},categoryFields(){return e=>{if(!this.categories)return[];const t=this.categories.find((({name:t})=>t===e));return t?this.getFields(t.fields).sort(((e,s)=>t.fields.indexOf(e.paramName)-t.fields.indexOf(s.paramName))):[]}},isValid(){return this.$children.every((e=>e.isValid))}},mounted(){window.addEventListener("resize",this.computeLabelWidth),this.computeLabelWidth()},beforeDestroy(){window.removeEventListener("resize",this.computeLabelWidth)},methods:{componentFromField(e){switch(e.type){case"string":case"uint64":case"guid":return y;case"boolean":return x;case"uint32":case"uint16":case"byte":return C;case"flag":return N;case"enum":return L;case"hashSet":case"list":return["enum"].includes(e.values.type)?"list"===e.type?F:I:["byte","uint16","uint32","uint64","string"].includes(e.values.type)?Z:W;case"dictionary":return"SteamUserPermissions"===e.param?ee:T;default:return W}},updateModel(e,t){const s=this.fields.find((e=>e.paramName===t));this.deleteDefaultValues&&s&&void 0!==s.defaultValue&&this.isDefault(e,s)?delete this.model[t]:this.model[t]&&this.model[t].constructor===Array&&!["dictionary","list"].includes(s.type)?this.model[t]=e.sort(((e,t)=>e-t)):this.model[t]&&this.model[t].constructor===Object&&"dictionary"!==s.type?this.model[t]=Object.keys(e).sort(((t,s)=>e[t]-e[s])):this.model[t]=e},isDefault(e,t){return this.isEqual(e,t.defaultValue,t.type)},isEqual(e,t,s){if(typeof e!=typeof t)return!1;switch(s){case"uint32":case"byte":case"uint16":case"uint64":case"string":case"boolean":return e===t;case"hashSet":return e.length===t.length&&e.every((e=>t.includes(e)));case"list":return e.length===t.length&&e.every(((e,s)=>e===t[s]));case"dictionary":return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((s=>e[s]===t[s]))}return!1},getFields(e){return this.fields.filter((t=>e.includes(t.param)))},computeLabelWidth(){this.$el.style.setProperty("--label-width","auto"),this.$nextTick((()=>{const e=Math.max(...Array.from(this.$el.querySelectorAll(".form-item__label")).map((e=>Math.ceil(parseFloat(getComputedStyle(e).width)))));this.$el.style.setProperty("--label-width",`${e}px`)}))}}};s(58);const se=(0,r.Z)(te,i,[],!1,null,null,null).exports},58:(e,t,s)=>{var i=s(6034);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,s(5346).Z)("41d9ed93",i,!1,{})},154:(e,t,s)=>{var i=s(9766);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,s(5346).Z)("21817ab1",i,!1,{})},8429:(e,t,s)=>{var i=s(920);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,s(5346).Z)("0b228341",i,!1,{})},7391:(e,t,s)=>{var i=s(4643);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,s(5346).Z)("734779f5",i,!1,{})}}]);