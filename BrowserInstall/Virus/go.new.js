function QueryString(qs)
{this.dict={};if(!qs)qs=location.search;if(qs.charAt(0)=='?')qs=qs.substring(1);var re=/([^=&]+)(=([^&]*))?/g;while(match=re.exec(qs))
{var key=decodeURIComponent(match[1].replace(/\+/g,' '));var value=match[3]?QueryString.decode(match[3]):'';if(this.dict[key])
this.dict[key].push(value);else
this.dict[key]=[value];}}
QueryString.decode=function(s)
{s=s.replace(/\+/g,' ');s=s.replace(/%([EF][0-9A-F])%([89AB][0-9A-F])%([89AB][0-9A-F])/g,function(code,hex1,hex2,hex3)
{var n1=parseInt(hex1,16)-0xE0;var n2=parseInt(hex2,16)-0x80;if(n1==0&&n2<32)return code;var n3=parseInt(hex3,16)-0x80;var n=(n1<<12)+(n2<<6)+ n3;if(n>0xFFFF)return code;return String.fromCharCode(n);});s=s.replace(/%([CD][0-9A-F])%([89AB][0-9A-F])/g,function(code,hex1,hex2)
{var n1=parseInt(hex1,16)-0xC0;if(n1<2)return code;var n2=parseInt(hex2,16)-0x80;return String.fromCharCode((n1<<6)+n2);});s=s.replace(/%([0-7][0-9A-F])/g,function(code,hex)
{return String.fromCharCode(parseInt(hex,16));});return s;};QueryString.prototype.value=function(key)
{var a=this.dict[key];return a?a[a.length-1]:undefined;};QueryString.prototype.values=function(key)
{var a=this.dict[key];return a?a:[];};QueryString.prototype.keys=function()
{var a=[];for(var key in this.dict)
a.push(key);return a;};QueryString.prototype.set=function(key,value)
{this.dict[key]=[value];};QueryString.prototype.add=function(key,value)
{if(typeof this.dict[key]=='undefined'){this.dict[key]=[value];}else{this.dict[key].push(value);}};QueryString.prototype.toString=function()
{var pieces=[];for(var key in this.dict){for(var idx in this.dict[key]){pieces.push(encodeURIComponent(key)+'='+ encodeURIComponent(this.dict[key][idx]));}}
return pieces.join('&');};function backtrap(){var qs=new QueryString();var own_url=window.location.href;qs.set('redir',1);var qs_at=own_url.indexOf('?');var doped_url;if(qs_at==-1){doped_url=own_url+'?'+ qs.toString();}else{doped_url=own_url.substring(0,qs_at)+'?'+ qs.toString();}
History.pushState({},'',doped_url);History.pushState({},'',own_url);}