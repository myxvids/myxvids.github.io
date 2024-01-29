var mySite = ["", "sweetsextube.yn.lt", "dutabokep.xtgem.com", "85tube.wap.sh", "7xpron.wap.sh", "xnxnx.wap.sh", "sslkn.wap.sh", "sidemplon.xtgem.com", "sidemplon.hexat.com", "sidemplon.mw.lt", "sidemplon.yn.lt", "xjav.yn.lt", "deva19.wapsite.me", "megajav.wap.sh", "megaporn.wap.sh", "porn66.wap.sh",  "milfxteen.yn.lt", "ruvid.yn.lt", "goporn.xtgem.com", "pohub.yn.lt", "imouto.yn.lt", "xtoon.yn.lt", "xbokep.yn.lt", "komixxx.wap.sh", "idolz.yn.lt", "forvip.yn.lt", "xiuren.wap.sh", "sidemplon.wap.sh", "girlv.wap.sh", "xiuren.yn.lt", "youngtube.wap.sh", "xskirt.wap.sh", "sharelinks.mobie.in", "xroom.yn.lt"];
var tSite = ["", "SWEET SEXTUBE", "DUTA BOKEP", "TEEN TUBE", "7X-PORN", "XNXNX", "FREE PREMIUM PORN", "XXX VIDEOS", "ALL PORNJAV", "ALL ASIAN PORN", "JAV-BABE", "X-JAV HD", "JAV-HAY", "MEGA-JAV", "MEGA-PORN", "PORN66 HD", "MILF-X-TEEN", "RUSIAN SEX", "GOPORN HD", "PORNHUB HD", "SEXTOON ART", "XXX HENTAI ANIME", "BOKEP INDO", "KOMIK DEWASA", "FELLATIO REVIEWS", "FELLATIO GALLERY", "BEAUTIFUL GIRLS", "HOTGIRLS GALLERY", "SEXY GIRLS", "XIUREN GIRLS", "YOUNGTUBE", "X-SKIRT", "TOP PORNSITE", "FEEDBACK"];
var t = mySite.length; var s = 1; 
let tgs = '<p>Support: siDemPlon App | GirlV Collect | Xiuren-WAP | Katok Gallery | Garsela Team</p>';
for (; s < t; ) {
	var tag = mySite[s];
	tgs += '<a target="_blank" href="http://'+mySite[s]+'">'+tSite[s].toUpperCase()+'</a>';
	s++; }
tgs += '<p>Mod-all siDemPlon 2021<br>CopyRieuth Script &copy; Girl V - 2020</p>';
document.getElementById("mySite").innerHTML = tgs;

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		mybutton.style.display = "block";
	} else { mybutton.style.display = "none"; }
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
function myDark() {
	var element = document.body;
	element.classList.toggle("dark");
}