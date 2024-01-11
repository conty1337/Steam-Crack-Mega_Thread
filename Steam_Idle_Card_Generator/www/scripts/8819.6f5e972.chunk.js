"use strict";(self.webpackChunkasf_ui=self.webpackChunkasf_ui||[]).push([[8819],{4098:(t,e,i)=>{i.d(e,{B4:()=>o,Hx:()=>r,Js:()=>n,WH:()=>a});var s=i(144);const a=[{name:s.default.i18n.translate("basic"),fields:["SteamOwnerID"]},{name:s.default.i18n.translate("trade"),fields:["MaxTradeHoldDuration","FilterBadBots","LicenseID"]},{name:s.default.i18n.translate("customization"),fields:["AutoRestart","Blacklist","CommandPrefix","CurrentCulture","SteamMessagePrefix"]},{name:s.default.i18n.translate("remote-access"),fields:["Headless","IPC","IPCPassword","IPCPasswordFormat"]},{name:s.default.i18n.translate("connection"),fields:["ConnectionTimeout","SteamProtocols","WebProxy","WebProxyPassword","WebProxyUsername"]},{name:s.default.i18n.translate("farming"),fields:["FarmingDelay","IdleFarmingPeriod","MaxFarmingTime","MinFarmingDelayAfterBlock"]},{name:s.default.i18n.translate("performance"),fields:["OptimizationMode","ConfirmationsLimiterDelay","GiftsLimiterDelay","InventoryLimiterDelay","LoginLimiterDelay","WebLimiterDelay"]},{name:s.default.i18n.translate("updates"),fields:["UpdateChannel","UpdatePeriod"]},{name:s.default.i18n.translate("advanced"),fields:["Debug"]}],o=[{name:s.default.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword","Enabled","Paused","OnlineStatus","BotBehaviour"]},{name:s.default.i18n.translate("security"),fields:["PasswordFormat","UseLoginKeys"]},{name:s.default.i18n.translate("access"),fields:["SteamUserPermissions","SteamParentalCode"]},{name:s.default.i18n.translate("trade"),fields:["SteamTradeToken","AcceptGifts","TradeCheckPeriod","SendTradePeriod","SendOnFarmingFinished","CompleteTypesToSend","TradingPreferences","LootableTypes","TransferableTypes","MatchableTypes"]},{name:s.default.i18n.translate("farming"),fields:["FarmingOrders","AutoSteamSaleEvent","FarmPriorityQueueOnly","SkipRefundableGames","FarmOffline","ShutdownOnFarmingFinished"]},{name:s.default.i18n.translate("customization"),fields:["RemoteCommunication","SteamMasterClanID","UserInterfaceMode","OnlineFlags","RedeemingPreferences","GamesPlayedWhileIdle","CustomGamePlayedWhileFarming","CustomGamePlayedWhileIdle"]},{name:s.default.i18n.translate("performance"),fields:["HoursUntilCardDrops"]}],n=[{name:s.default.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword"]}],r=[{name:s.default.i18n.translate("general"),fields:[s.default.i18n.translate("default-page"),s.default.i18n.translate("notification-position"),s.default.i18n.translate("notify-release"),s.default.i18n.translate("display-categories"),s.default.i18n.translate("tooltip-delay")]},{name:s.default.i18n.translate("bots"),fields:[s.default.i18n.translate("bot-nicknames"),s.default.i18n.translate("bot-game-name"),s.default.i18n.translate("bot-order-numeric"),s.default.i18n.translate("bot-order-disabled"),s.default.i18n.translate("bot-fav-buttons")]},{name:s.default.i18n.translate("commands"),fields:[s.default.i18n.translate("timestamps")]},{name:s.default.i18n.translate("log"),fields:[s.default.i18n.translate("log-previous-amount"),s.default.i18n.translate("log-information"),s.default.i18n.translate("log-timestamp")]}]},8819:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});var s=function(){var t=this,e=t._self._c;return e("main",{staticClass:"main-container main-container--fullheight"},[e("div",{staticClass:"container"},[e("ConfigEditor",{attrs:{fields:t.fields,categories:t.displayCategories?t.categories:null,model:t.model}}),t._v(" "),e("div",{staticClass:"form-item"},[e("button",{staticClass:"button button--confirm",on:{click:t.save}},[t._v(t._s(t.$t("save")))])])],1)])};s._withStripped=!0;var a=i(629),o=i(8530),n=i(4098),r=i(6169);const l={name:"UiConfig",metaInfo(){return{title:this.$t("ui-config")}},components:{ConfigEditor:o.Z},data(){return{fields:[{param:this.$t("default-page"),paramName:"defaultView",type:"enum",defaultValue:"bots",values:{[this.$t("bots")]:"bots",[this.$t("commands")]:"commands",[this.$t("releases")]:"releases",[this.$t("plugins")]:"plugins",[this.$t("log")]:"log",[this.$t("asf-config")]:"asf-config",[this.$t("ui-config")]:"ui-config",[this.$t("mass-editor")]:"mass-editor",[this.$t("last-visited-page")]:"_last-visited-page"},description:this.$t("default-page-description")},{param:this.$t("notification-position"),paramName:"notificationPosition",type:"enum",defaultValue:"rightBottom",values:{[this.$t("notification-position-left-top")]:"leftTop",[this.$t("notification-position-left-bottom")]:"leftBottom",[this.$t("notification-position-right-top")]:"rightTop",[this.$t("notification-position-right-bottom")]:"rightBottom",[this.$t("notification-position-center-top")]:"centerTop",[this.$t("notification-position-center-bottom")]:"centerBottom"},description:this.$t("notification-position-description")},{param:this.$t("notify-release"),paramName:"notifyRelease",type:"boolean",description:this.$t("notify-release-description")},{param:this.$t("display-categories"),paramName:"displayCategories",type:"boolean",description:this.$t("display-categories-description")},{param:this.$t("timestamps"),paramName:"timestamps",type:"boolean",description:this.$t("timestamps-description")},{param:this.$t("bot-nicknames"),paramName:"nicknames",type:"boolean",description:this.$t("bot-nicknames-description")},{param:this.$t("bot-game-name"),paramName:"gameName",type:"boolean",description:this.$t("bot-game-name-description")},{param:this.$t("bot-order-numeric"),paramName:"orderBotsNumeric",type:"boolean",description:this.$t("bot-order-numeric-description")},{param:this.$t("bot-order-disabled"),paramName:"orderDisabledBotsLast",type:"boolean",description:this.$t("bot-order-disabled-description")},{param:this.$t("bot-fav-buttons"),paramName:"favButtons",type:"flag",defaultValue:0,values:{[this.$t("none")]:0,[this.$t("bot-fav-buttons-2fa")]:1,[this.$t("bot-fav-buttons-bgr")]:2,[this.$t("bot-fav-buttons-config")]:4,[this.$t("bot-fav-buttons-pause")]:8,[this.$t("all")]:15},description:this.$t("bot-fav-buttons-description")},{param:this.$t("tooltip-delay"),paramName:"tooltipDelay",type:"enum",defaultValue:800,values:{[this.$t("tooltip-instant")]:0,[this.$t("tooltip-delayed")]:800,[this.$t("tooltip-hide")]:6e5},description:this.$t("tooltip-delay-description")},{param:this.$t("log-previous-amount"),paramName:"previousAmount",type:"enum",defaultValue:50,values:{25:25,50:50,75:75,100:100},description:this.$t("log-previous-amount-description")},{param:this.$t("log-information"),paramName:"logInformation",type:"flag",defaultValue:13,values:{[this.$t("none")]:0,[this.$t("log-information-time")]:1,[this.$t("log-information-process")]:2,[this.$t("log-information-level")]:4,[this.$t("log-information-logger")]:8,[this.$t("all")]:15},description:this.$t("log-information-description")},{param:this.$t("log-timestamp"),paramName:"logTimestamp",type:"enum",defaultValue:"timeOnlyEu",values:{[this.$t("log-timestamp-time-only-eu")]:"timeOnlyEu",[this.$t("log-timestamp-time-only-locale")]:"timeOnlyLocale",[this.$t("log-timestamp-time-only-us")]:"timeOnlyUs",[this.$t("log-timestamp-time-date-eu")]:"timeDateEu",[this.$t("log-timestamp-time-date-locale")]:"timeDateLocale",[this.$t("log-timestamp-time-date-us")]:"timeDateUs"},description:this.$t("log-timestamp-description")}],categories:n.Hx,model:{defaultView:this.$store.getters["settings/defaultView"],notificationPosition:this.$store.getters["settings/notificationPosition"],notifyRelease:this.$store.getters["settings/notifyRelease"],displayCategories:this.$store.getters["settings/displayCategories"],timestamps:this.$store.getters["settings/timestamps"],nicknames:this.$store.getters["settings/nicknames"],gameName:this.$store.getters["settings/gameName"],favButtons:this.$store.getters["settings/favButtons"],tooltipDelay:this.$store.getters["settings/tooltipDelay"],orderDisabledBotsLast:this.$store.getters["settings/orderDisabledBotsLast"],previousAmount:this.$store.getters["settings/previousAmount"],logInformation:this.$store.getters["settings/logInformation"],logTimestamp:this.$store.getters["settings/logTimestamp"],orderBotsNumeric:this.$store.getters["settings/orderBotsNumeric"]}}},computed:{...(0,a.Se)({displayCategories:"settings/displayCategories"})},methods:{async save(){this.$store.dispatch("settings/setDefaultView",this.model.defaultView),this.$store.dispatch("settings/setNotificationPosition",this.model.notificationPosition),this.$store.dispatch("settings/setNotifyRelease",this.model.notifyRelease),this.$store.dispatch("settings/setDisplayCategories",this.model.displayCategories),this.$store.dispatch("settings/setTimestamps",this.model.timestamps),this.$store.dispatch("settings/setNicknames",this.model.nicknames),this.$store.dispatch("settings/setGameName",this.model.gameName),this.$store.dispatch("settings/setFavButtons",this.model.favButtons),this.$store.dispatch("settings/setTooltipDelay",this.model.tooltipDelay),this.$store.dispatch("settings/setOrderDisabledBotsLast",this.model.orderDisabledBotsLast),this.$store.dispatch("settings/setPreviousAmount",this.model.previousAmount),this.$store.dispatch("settings/setLogInformation",this.model.logInformation),this.$store.dispatch("settings/setLogTimestamp",this.model.logTimestamp),this.$store.dispatch("settings/setOrderBotsNumeric",this.model.orderBotsNumeric),this.$snotify.setDefaults({toast:{position:this.model.notificationPosition}}),this.$success(this.$t("settings-saved")),await(0,r.Z)(1e3),window.location.reload()}}},m=(0,i(1900).Z)(l,s,[],!1,null,null,null).exports}}]);