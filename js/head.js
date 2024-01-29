function getUrlVar() {
	var result = {};
	var location = window.location.href.split('#');
	var parts = location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { result [key] = value; });
	return result;
}
var u = getUrlVar()["u"];
var v = getUrlVar()["v"];
var t = getUrlVar()["t"];
var p = getUrlVar()["p"];
var s = getUrlVar()["s"];
var d = getUrlVar()["d"];
var h = getUrlVar()["h"];
var page = getUrlVar()["page"];
if (h){ var h = h; }else{ var h = 1; }
if (s){ var s = s; }else{ var s = 1; }
if (t){ var t = t; }else{ var t = ''; }
var titel = t.replace(/\/|_/g, " ");
document.write('<title>'+decodeURIComponent(titel.toUpperCase())+' MyXVidoes | siDemPlon DotCrott</title>');

var x = 54;
var a = 1;
let myUrl = '';
for (; a < x; ) {
var var1 = '<span>[ <a href="?h='+h+'&s='+a+'&p=1&page=1">'+a+'</a> ] </span>';
var var2 = 'href="?h='+h+'&s='+s+'&p=1&page=1"';
var var3 = 'class="active"';
var ganti = var1.split(var2).join(var3);
myUrl += ganti;
a++; }
myUrl += '';
document.getElementById("myUrl").innerHTML = myUrl;