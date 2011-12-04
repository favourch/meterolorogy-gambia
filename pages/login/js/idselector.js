function gen_selector(){function w(a){window.console&&window.console.log("ID Selector: "+a)}function v(a,g){this.grid=a;this.idx=g;var c=this.td=d.createElement("td");b=c.style;b.fontWeight="bold";b.padding="4px";b.verticalAlign="middle";b.cursor="pointer";var f=this;c.onmouseover=function(){f.onMouseOver()};c.onmouseout=function(){f.onMouseOut()};c.onclick=function(){f.onClick()};var e=o[g],h=d.createElement("img");h.src=e?"/images/openid/"+e.icon:"/images/openid/openid.ico";h.style.width="16px";
h.style.height="16px";h.style.verticalAlign="middle";c.appendChild(h);c.appendChild(d.createTextNode(" "));c.appendChild(d.createTextNode(e?e.shortname:"Other OpenID"));this.selected=!1}function x(){this.table=d.createElement("table");this.table.style.backgroundColor="#FFF";this.table.style.width="100%";this.table.style.border="1px solid #6e91af";this.tbody=d.createElement("tbody");this.table.appendChild(this.tbody);this.maxOffset=(Math.ceil(o.length/12)-1)*12;this.cells=[];for(var a=0;a<o.length;a++)this.cells[a]=
new v(this,a);this.rows=[d.createElement("tr"),d.createElement("tr"),d.createElement("tr"),d.createElement("tr")];this.otherCell=new v(this,-1);var g=d.createElement("td");g.style.padding="4px";g.style.textAlign="right";g.style.verticalAlign="middle";g.colSpan=2;g.innerHTML='<a href="http://openid.net/" style="color:#6e91af;" target="_blank">Help</a>';a=d.createElement("tr");a.style.borderTop="1px solid #AAA";a.appendChild(this.otherCell.td);a.appendChild(g);for(g=0;g<4;g++)this.tbody.appendChild(this.rows[g]);
this.tbody.appendChild(a);this.offset=0}function t(){var a=(y?document.body.clientWidth:document.documentElement.clientWidth)+(window.ActiveXObject?y?document.body.scrollLeft:document.documentElement.scrollLeft:window.pageXOffset)-401,g=c.offsetLeft,b=c.offsetTop;if(c.clientTop)b+=c.clientTop;else if(document.defaultView&&document.defaultView.getComputedStyle){var d=document.defaultView.getComputedStyle(c,"");b+=parseInt(d.getPropertyValue("border-top-width"));b+=parseInt(d.getPropertyValue("border-bottom-width"))}for(var e=
c.offsetParent;e;)g+=e.offsetLeft,b+=e.offsetTop,e.clientLeft?(g+=e.clientLeft,b+=e.clientTop):document.defaultView&&document.defaultView.getComputedStyle&&(d=document.defaultView.getComputedStyle(e,""),b+=parseInt(d.getPropertyValue("border-top-width")),g+=parseInt(d.getPropertyValue("border-left-width"))),e=e.offsetParent;b+=c.offsetHeight;g=Math.max(Math.min(g,a),0);a=h.style;a.left=g+"px";a.top=b+"px";a.display="block";a.height=p.offsetHeight+2+"px"}function q(){h.style.display="none"}function z(){var a=
c;if(a.isTextEdit){var b=a.createTextRange();b&&(b.move("character",a.value.length),b.select())}t()}var y=document.compatMode!="CSS1Compat",b,o=[{longname:"myOpenID",shortname:"myOpenID",url_suffix:".myopenid.com/",usercalled:"username",icon:"myopenid.ico",id:8,website:"https://www.myopenid.com/",openid1:!0,url_prefix:"http://",openid2:!0},{longname:"Google",shortname:"Google",url_suffix:"",usercalled:"username",icon:"google.ico",id:3,website:"https://www.google.com/accounts/o8/id",openid1:!1,url_prefix:"https://www.google.com/accounts/o8/id",
openid2:!0},{longname:"Flickr",shortname:"Flickr",url_suffix:"",usercalled:"username",icon:"flickr.ico",id:6,website:"http://www.flickr.com/",openid1:!1,url_prefix:"http://www.flickr.com/photos/",openid2:!0},{longname:"Yahoo!",shortname:"Yahoo!",url_suffix:"",usercalled:"yahoo id",icon:"yahoo.ico",id:15,website:"http://yahoo.com/",openid1:!0,url_prefix:"http://me.yahoo.com/",openid2:!1},{longname:"America Online/AIM",shortname:"AOL",url_suffix:"",usercalled:"screenname",icon:"aol.ico",id:1,website:"http://www.aol.com/",
openid1:!0,url_prefix:"http://openid.aol.com/",openid2:!1},{longname:"Google Blogger",shortname:"Blogger",url_suffix:".blogspot.com/",usercalled:"blog name",icon:"blogger.ico",id:2,website:"http://www.blogger.com/",openid1:!0,url_prefix:"http://",openid2:!1},{longname:"Livejournal",shortname:"Livejournal",url_suffix:".livejournal.com/",usercalled:"username",icon:"lj.ico",id:7,website:"http://www.livejournal.com/",openid1:!0,url_prefix:"http://",openid2:!1},{longname:"Verisign PIP",shortname:"Verisign",
url_suffix:".pip.verisignlabs.com/",usercalled:"username",icon:"verisign.ico",id:11,website:"http://pip.verisignlabs.com/",openid1:!0,url_prefix:"http://",openid2:!0},{longname:"Vidoop",shortname:"Vidoop",url_suffix:".myvidoop.com/",usercalled:"username",icon:"vidoop.ico",id:12,website:"http://www.vidoop.com/",openid1:!0,url_prefix:"http://",openid2:!0},{longname:"claimID",shortname:"claimID",url_suffix:"",usercalled:"username",icon:"claimid.ico",id:4,website:"http://claimid.com/",openid1:!0,url_prefix:"http://claimid.com/",
openid2:!1},{longname:"Technorati",shortname:"Technorati",url_suffix:"",usercalled:"username",icon:"technorati.ico",id:10,website:"http://www.technorati.com/",openid1:!0,url_prefix:"http://technorati.com/people/technorati/",openid2:!1},{longname:"Vox",shortname:"Vox",url_suffix:".vox.com/",usercalled:"username",icon:"vox.ico",id:13,website:"http://www.vox.com/",openid1:!0,url_prefix:"http://",openid2:!1},{longname:"Wordpress",shortname:"Wordpress",url_suffix:".wordpress.com/",usercalled:"username",
icon:"wordpress.ico",id:14,website:"http://www.wordpress.com/",openid1:!0,url_prefix:"http://",openid2:!1}],c=document.getElementById("openid_identifier");if(c==null){w("couldn't find openid input box with id = openid_identifier");for(i=0;!c&&i<document.forms.length;i++)c=document.forms[i].openid_identifier;for(i=0;!c&&i<document.forms.length;i++)c=document.forms[i].openid_url}if(c==null)w("couldn't find openid input box");else{var u=document.createElement("img");b=u.style;b.width="16px";b.height=
"16px";b.verticalAlign="middle";b.padding="0px";b.border="0px";b.margin="0px";b.display="inline";var f=document.createElement("div");f.innerHTML='<button type="button"></button>';var e=document.createElement("img");e.src="https://www.idselector.com/images/arrow.gif";e.style.display="inline";var j=f.firstChild;f.removeChild(j);j.id="__idselector_button";j.style.cursor="pointer";j.appendChild(u);j.appendChild(document.createTextNode(" "));j.appendChild(e);var h=new Element("iframe",{src:"/empty.html"});
h.id="idselector";h.frameBorder=0;h.scrolling="no";b=h.style;b.display="none";b.position="absolute";b.width="400px";b.height="0px";b.margin="0px";b.padding="0px";b.zIndex=1E4;b.border="0px";f=c.parentNode;f.insertBefore(j,c.nextSibling);f.insertBefore(document.createTextNode(" "),j);document.body.appendChild(h);var d=h.contentWindow.document;d.open();d.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head><title>ID Selector</title><style type="text/css">html{color:#000;background:transparent;}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0;}table{border-collapse:collapse;border-spacing:0;}fieldset,img{border:0;}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal;}li{list-style:none;}caption,th{text-align:left;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}q:before,q:after{content:\'\';}abbr,acronym {border:0;font-variant:normal;}sup {vertical-align:text-top;}sub {vertical-align:text-bottom;}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;}input,textarea,select{*font-size:100%;}legend{color:#000;}body {border:1px solid #083145;font:13px/1.231 arial,helvetica,clean,sans-serif;*font-size:small;*font:x-small;}table {font-size:inherit;font:100%;}pre,code,kbd,samp,tt{font-family:monospace;*font-size:108%;line-height:100%;}</style></head><body></body></html>');
d.close();var p=d.body,r=d.createElement("img");r.style.verticalAlign="middle";r.style.cursor="pointer";r.src="https://www.idselector.com/images/arrow_white_back.png";var s=d.createElement("img");s.style.verticalAlign="middle";s.style.cursor="pointer";s.src="https://www.idselector.com/images/arrow_white_forward.png";e=d.createElement("div");e.style[document.all?"styleFloat":"cssFloat"]="right";e.innerHTML='<a href="https://www.myopenid.com/signup" style="color:#fff;" target="_blank">Get an OpenID</a>';
f=d.createElement("div");b=f.style;b.fontWeight="bold";b.color="#082F42";b.backgroundColor="#B8E6F9";b.padding="2px 8px 2px 8px";f.appendChild(e);f.appendChild(d.createTextNode("Sign in with OpenID using"));var n=d.createElement("span");n.appendChild(d.createTextNode("xxx:"));var k=d.createElement("input");k.type="text";k.size=20;b=k.style;b.verticalAlign="middle";b.padding="2px 2px 2px 20px";b.backgroundRepeat="no-repeat";b.backgroundPosition="2px 2px";e=d.createElement("div");b=e.style;b.color=
"#082F42";b.padding="2px 8px 2px 8px";b.textAlign="right";b.position="relative";b.backgroundColor="#B8E6F9";e.appendChild(n);e.appendChild(d.createTextNode(" "));e.appendChild(k);var l=v.prototype={};l.onMouseOver=function(){if(!this.selected)this.td.style.backgroundColor="#cee1f8"};l.onMouseOut=function(){if(!this.selected)this.td.style.backgroundColor=""};l.onClick=function(){this.grid.select(this);var a=o[this.idx];this.idx==-1?(c.value="http://",c.focus()):a.openid2&&!a.openid1?(c.focus(),setTimeout(q,
1)):(k.focus(),k.select())};l.setSelected=function(a){this.td.style.backgroundColor=a?"#aeccf1":"";this.selected=a};l=x.prototype={};l.forward=function(){this.offset=Math.min(this.offset+12,this.maxOffset);this.gen()};l.back=function(){this.offset=Math.max(this.offset-12,0);this.gen()};l.gen=function(){for(var a=0;a<4;a++)for(var b=this.rows[a];b.firstChild;)b.removeChild(b.firstChild);for(a=0;a<12;a++){var b=this.rows[Math.floor(a/3)],c=this.cells[this.offset+a];c?b.appendChild(c.td):b.appendChild(d.createElement("td"))}s.style.visibility=
this.offset==this.maxOffset?"hidden":"";r.style.visibility=this.offset==0?"hidden":"";h.style.height=p.offsetHeight+2+"px"};l.select=function(a){this.curr&&this.curr.setSelected(!1);this.curr=a;a.setSelected(!0);if(a.idx>-1){a=o[a.idx];if(a.openid2&&!a.openid1)n.style.visibility="hidden",k.style.visibility="hidden",c.value=a.website;else{n.style.visibility="";k.style.visibility="";n.removeChild(n.firstChild);var b=d.createTextNode(a.longname+" "+a.usercalled+":");n.appendChild(b);k.style.backgroundImage=
"url(https://www.idselector.com/static/opicons/"+a.icon+")";c.value=a.url_prefix+"username"+a.url_suffix;k.value="username"}u.src="https://www.idselector.com/static/opicons/"+a.icon}else n.style.visibility="hidden",k.style.visibility="hidden",u.src="/images/openid/openid.ico"};l.setName=function(a){var b=o[this.curr.idx];c.value=b.url_prefix+a+b.url_suffix};var m=new x;m.gen();p.appendChild(f);p.appendChild(m.table);p.appendChild(e);j.onclick=function(a){h.style.display=="none"?t():q();if(a)a.cancelBubble=
!0;return!1};j.onfocus=function(){j.blur()};s.onclick=function(){m.forward()};r.onclick=function(){m.back()};c.onkeypress=function(a){var b;if(window.event)b=window.event.keyCode;else if(a.which)b=a.which;b!=13&&b!=9&&m.select(m.otherCell)};k.onkeydown=function(a){var b;if(h.contentWindow.event)b=h.contentWindow.event.keyCode;else if(a.which)b=a.which;(b==13||b==9)&&setTimeout(function(){c.onfocus=z;c.focus();setTimeout(q,1)},1)};k.onkeyup=function(){var a=this.value;if(!a)this.value=a="username",
this.select();m.setName(a)};var A=window.onresize;window.onresize=function(a){try{h.style.display=="block"&&t()}finally{A&&A(a)}};var B=window.onscroll;window.onscroll=function(a){try{h.style.display=="block"&&t()}finally{B&&B(a)}};m.curr||m.select(m.otherCell);c.onfocus=z;e=null;for(f=c.parentNode;f&&f.nodeType==1;){if(f.nodeName=="FORM"){e=f;break}f=f.parentNode}if(e){var C=e.onsubmit;e.onsubmit=function(a){if(C)return C(a)}}window.ActiveXObject?document.body.parentNode.attachEvent("onclick",function(){window.event.srcElement!=
c&&window.event.srcElement!=j&&q()}):document.body.parentNode.addEventListener("click",function(a){a.target!=c&&a.target!=j&&q()},!1)}};