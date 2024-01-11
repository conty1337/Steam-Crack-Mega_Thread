(self.webpackChunkasf_ui=self.webpackChunkasf_ui||[]).push([[106],{9049:(t,e,s)=>{"use strict";function a(t){const e=document.implementation.createHTMLDocument().createElement("html");return e.innerHTML=t,e}s.d(e,{Z:()=>a})},1692:(t,e,s)=>{"use strict";s.d(e,{Z:()=>m});var a=s(3063);const n=new Map,i=new Map,r=/\[[^\]]+]/g;async function o(t){if(i.has(t))return i.get(t);const e=a.U2(`structure/${encodeURIComponent(t)}`);return i.set(t,e),e}async function c(t){const e=function(t){const e=t.match(r);return e?e.map((t=>t.slice(1,t.length-1))):[]}(t);switch(t.split("`")[0]){case"System.Boolean":return{type:"boolean"};case"System.String":case"System.Guid":return{type:"string"};case"System.Byte":return{type:"byte"};case"System.UInt32":return{type:"uint32"};case"System.UInt16":return{type:"uint16"};case"System.Collections.Generic.HashSet":case"System.Collections.Immutable.ImmutableHashSet":return{type:"hashSet",values:await c(e[0])};case"System.Collections.Immutable.ImmutableList":return{type:"list",values:await c(e[0])};case"System.UInt64":return{type:"uint64"};case"System.Collections.Generic.Dictionary":case"System.Collections.Immutable.ImmutableDictionary":return{type:"dictionary",key:await c(e[0]),value:await c(e[1])};case"System.Nullable":const{type:s}=await c(e[0]);return{type:s,nullable:!0};default:return u(t)}}function l(t){const e={};return Object.keys(t).forEach((s=>{e[s]=parseInt(t[s],10)})),e}async function u(t){"ArchiSteamFarm.Steam.Storage.BotConfig"===t&&o(t);const e=await async function(t){if(n.has(t))return n.get(t);const e=a.U2(`type/${encodeURIComponent(t)}`);return n.set(t,e),e}(t);switch(e.Properties.BaseType){case"System.Object":return async function(t,e){const s={type:"object",body:{}},[a,n]=await Promise.all([o(t),Promise.all(Object.keys(e.Body).map((async t=>({param:t,type:await c(e.Body[t])}))))]);return n.forEach((t=>{const{param:n,type:i}=t,r="System.UInt64"!==e.Body[n]?n:`s_${n}`;s.body[n]={defaultValue:a[n],paramName:r,param:n,...i}})),s}(t,e);case"System.Enum":return{type:(e.Properties.CustomAttributes||[]).includes("System.FlagsAttribute")?"flag":"enum",values:l(e.Body)};default:return{type:"unknown",typeDefinition:e,structureDefinition:await o(t)}}}const m=u},9086:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(3063),n=s(9764);async function i(t,e,s){const i=await async function(t,e,s){const i=(0,n.Z)(s),r=`www/github/wiki/page/${t}${i}`;if(!e)return r;if(e>=(await a.U2("www/github/release")).Version)return r;const o=await a.U2(`www/github/release/${e}`),c=new Date(o.ReleasedAt),l=await a.U2(`www/github/wiki/history/${t}${i}`),u=Object.entries(l).map((t=>({id:t[0],releaseTime:new Date(t[1])})));u.sort(((t,e)=>new Date(e.releaseTime)-new Date(t.releaseTime)));const m=u.find((({releaseTime:t})=>t<c));return m?`${r}?revision=${m.id}`:r}(t,e,s);return a.U2(i)}},9764:(t,e,s)=>{"use strict";function a(t){return"en-US"!==t?`-${t}`:""}s.d(e,{Z:()=>a})},678:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(9086),n=s(9764),i=s(795),r=s(9049);async function o(t,e){const s=i.U2(`cache:parameter-descriptions:${e}`);if(s){const{timestamp:t,descriptions:e}=s;if(t>Date.now()-216e5)return e}const o={},l=await(0,a.Z)("Configuration",t,e),u=(0,r.Z)(l);return Array.from(u.querySelectorAll("h3 > code")).forEach((t=>{const s=t.innerText,a=[];let i=t.parentElement.nextElementSibling;for(;i&&"hr"!==i.tagName.toLowerCase();)c(i.querySelectorAll('a[href^="#"]'),"Configuration",(0,n.Z)(e)),a.push(i.outerHTML),i=i.nextElementSibling;o[s]=a.join(" ")})),i.t8(`cache:parameter-descriptions:${e}`,{timestamp:Date.now(),descriptions:o}),o}function c(t,e,s){t.forEach((t=>{t&&(t.setAttribute("href",`https://github.com/JustArchiNET/ArchiSteamFarm/wiki/${e}${s}${t.hash}`),t.setAttribute("target","_blank"))}))}},3152:(t,e,s)=>{var a=s(8081),n=s(3645)(a);n.push([t.id,".form-item__code[data-v-feb79524]{padding:0 1em 1em}",""]),t.exports=n},106:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=function(){var t=this,e=t._self._c;return t.label?e("main",{staticClass:"main-container main-container--bot-profile"},[e("h2",{staticClass:"title"},[t._v(t._s(t.$t("hash")))]),t._v(" "),t.loading?[e("h3",{staticClass:"subtitle"},[e("FontAwesomeIcon",{attrs:{icon:"spinner",size:"lg",spin:""}})],1)]:[e("div",{staticClass:"form-item"},[e("ConfigEditor",{attrs:{fields:t.fields,model:t.config,deleteDefaultValues:!1}}),t._v(" "),e("div",{staticClass:"form-item__code"},[e("div",[e("label",{staticClass:"form-item__label",attrs:{for:"hash"}},[t._v(t._s(t.label))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.hash,expression:"hash"}],staticClass:"form-item__input",attrs:{id:"hash",type:"password",autocomplete:"new-password"},domProps:{value:t.hash},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.savePassword.apply(null,arguments)},input:function(e){e.target.composing||(t.hash=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-item__buttons form-item__buttons--column"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("input-switch-visibility"),expression:"$t('input-switch-visibility')"}],staticClass:"button button--helper",on:{click:t.switchInputType}},[t.inputHidden?e("FontAwesomeIcon",{attrs:{icon:"eye",size:"lg"}}):e("FontAwesomeIcon",{attrs:{icon:"eye-slash",size:"lg"}})],1)])]),t._v(" "),e("div",{staticClass:"form-item__buttons form-item__buttons--center"},[e("button",{staticClass:"button",attrs:{disabled:!t.hash},on:{click:t.savePassword}},[t.saving?e("FontAwesomeIcon",{attrs:{icon:"spinner",spin:""}}):e("span",[t._v(t._s(t.$t("hash")))])],1),t._v(" "),e("button",{staticClass:"button",on:{click:function(e){return t.$router.back()}}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")])])],1)]],2):t._e()};a._withStripped=!0;var n=s(629),i=s(8530),r=s(1692),o=s(678);const c={name:"PasswordHash",components:{ConfigEditor:i.Z},data:()=>({hash:"",inputHidden:!0,config:{},loading:!0,fields:[],saving:!1}),computed:{...(0,n.Se)({version:"asf/version"}),label(){return this.$route.params.label},key(){return`${this.$route.params.label}Format`}},async created(){this.label||this.$router.replace({name:"asf-config"});const[{GlobalConfig:t},{body:e},s]=await Promise.all([this.$http.get("asf"),(0,r.Z)("ArchiSteamFarm.Storage.GlobalConfig"),(0,o.Z)(this.version,this.$i18n.locale)]);this.config={[this.key]:t[this.key]};const a=s[this.key]?s[this.key].replace(/<a href="/g,'<a target="_blank" rel="noreferrer noopener" href="'):this.$t("description-not-found");this.fields=[{description:a,...e[this.key]}],this.loading=!1},methods:{switchInputType(){this.inputHidden=!this.inputHidden;const t=document.getElementById("hash");"password"===t.getAttribute("type")?t.setAttribute("type","text"):t.setAttribute("type","password")},async savePassword(){if(!this.saving){this.saving=!0;try{const t={ipcPassword:await this.$http.post("asf/hash",{HashingMethod:this.config[this.key],StringToHash:this.hash}),ipcPasswordFormat:this.config[this.key]};this.$info(this.$t("hash-success")),this.$router.push({name:"asf-config",params:t})}finally{this.saving=!1}}}}};s(7600);const l=(0,s(1900).Z)(c,a,[],!1,null,"feb79524",null).exports},7600:(t,e,s)=>{var a=s(3152);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,s(5346).Z)("11862ec0",a,!1,{})}}]);