// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","./settingComponents","./SettingObject"],function(f,g,h,c,k){return f(k,{_inputControl:null,constructor:function(a,b,d,e){a=[];b=c.checkboxCtl("inline-block",!1,b);a.push(b.div);this._inputControl=b.ctl;e&&this.own(h(this._inputControl,"change",g.hitch(this,e)));d&&a.push(c.container("variable-width","minorTrailingVertGap",[c.text("hint",d)]));this._mainDiv=c.container("full-width flexbox","minorTrailingHorizGap",a)},setValue:function(a){this._inputControl&&
this._inputControl.setValue(a)},getValue:function(){if(this._inputControl)return this._inputControl.getValue()},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(a,b){this._inputControl&&(this._config=this.getValue())}})});