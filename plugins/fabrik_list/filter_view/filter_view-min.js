var FbListFilterView=new Class({Extends:FbListPlugin,initialize:function(a){this.parent(a);this.groupbyMenus={};document.getElement(".filter_view").getElements("ul.floating-tip").each(function(d){var e=d.clone();e.fade("hide");e.inject(document.body);e.setStyles({position:"absolute"});var b=d.getPrevious();b.store("target",e);b.addEvent("click",function(f){f.stop();var g=b.retrieve("target");g.setStyle("top",b.getTop());g.setStyle("left",b.getLeft()+b.getWidth()/1.5);g.fade("toggle")});d.dispose()});document.getElements(".fabrik_filter_view").addEvent("click:relay(a)",function(c){var b=c.target.get("href")})}});