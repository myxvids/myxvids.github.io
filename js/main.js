let myHost = '';
for (; aa < ax; ) {
var var1a = '<a href="?h='+aa+'&s=1&p=1&page=1">'+arrName[aa]+'</a>';
var var2a = '<a href="?h='+h+'&s=1&p=1&page=1">'+arrName[aa]+'</a>';
var var3a = '<a class="active">'+arrName[aa]+'</a>';
var ganti1 = var1a.split(var2a).join(var3a);
myHost += ganti1;
aa++; }
myHost += '';
document.getElementById("myHost").innerHTML = myHost;
if (v >= 1){
	var embed = u.replace(/(^\w+:|^)\/\//, '');
	var titles = decodeURIComponent(t);
	let txt = '<h1>'+titles+'</h1>';
	var img = 'https://'+arrUrl[h]+'/contents/videos_screenshots/';
	txt += '<div class="container-video"><div class="container"><video controls><source src="'+vProxy+embed+'" type="video/mp4"></video><button class="btn2" onclick="document.location.reload(true)"><i class="fa fa-refresh" aria-hidden="true"></i></button></div></div>';
	txt += '<hr style="border: 0; height: 1px; background: #c0c0c0; margin:12px;"><div class="title">PREVIEW</div><div class="preview lazyloaded" data-expand="-20">';
	txt += '<div class="center"><img class="lazyload preview" data-src="'+iProxy+img+d+'/preview.jpg" width="320" height="auto" alt="img"></div>';
	var o = 2;
	for (; o < 6; ) {
	txt += '<img class="lazyload" data-src="'+iProxy+img+d+'/320x180/'+o+'.jpg" alt="img">';	
	o++; }
	txt += '</div><div class="back"><a href="?s='+s+'&p=1&page='+p+'"><i class="fa fa-chevron-left" aria-hidden="true"></i> BACK</a></div>';
	document.getElementById("demo").innerHTML = txt;
}else{
document.addEventListener("DOMContentLoaded", function() { getDataRender(); })
function getDataRender() {
	fetch(fetchUrl)
	.then(response => response.text())
	.then(text => { console.log(text)
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(text,"text/xml");
		var img = xmlDoc.getElementsByTagName("video:thumbnail_loc");
		var ttl = xmlDoc.getElementsByTagName("video:title");
		var dsc = xmlDoc.getElementsByTagName("video:description");
		var vds = xmlDoc.getElementsByTagName("video:content_loc");
		var xx = xmlDoc.getElementsByTagName("url");
		var zz = xx.length;
		var z = 20;
		var i = (page*z-z);
		var ii = (page*z);
		var s = getUrlVar()["s"];
		let rendered = '<h1>'+arrName[h]+' (Page:'+page+')</h1>';
		for (; i < ii; ) {
			var thumbs = img[i].childNodes[0].nodeValue;
			var str1 = 'videos_screenshots/';
			var str2 = '/preview';
			var kiri = thumbs.search (str1)+19;
			var kanan = thumbs.search (str2);
			var potong = thumbs.substring(kiri, kanan);
			var title = ttl[i].childNodes[0].nodeValue;
			var desc = dsc[i].childNodes[0].nodeValue;
			var vids = vds[i].childNodes[0].nodeValue;
			var tit = title.substring(0, 40);
			var owd = thumbs.replace(/(^\w+:|^)\/\//, '');
			var acak = Math.floor(Math.random() * 9) + 2;
			var thumb = owd.split('240x180').join('300x169');
			var thum = owd.split('preview.').join('320x180/'+acak+'.');
			rendered += '<div class="gallery lazyloaded" data-expand="-20"><a target="_blank" href="?v=1&h='+h+'&s='+s+'&p='+page+'&d='+potong+'&t='+title+'&u='+vids+'"><img class="lazyload" data-src="'+iProxy+thumbs+'" alt="img"><div class="desc">'+tit+'</div></a></div>';
		i++;}
		document.getElementById("demo").innerHTML = rendered
	})
	.catch(err => { console.log(err) });
}
}