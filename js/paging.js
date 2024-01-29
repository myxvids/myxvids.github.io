if (v >= 1){
}else{
	if (p >= 1){ var page = page; }else{ var page = 1; }
	/*PAGINATION*/
	var vars1 = 'h='+h+'&p=1&'
	var vars2 = 's='+s+'&'	
	var vars3 = '<input type="hidden" name="h" value="'+h+'"><input type="hidden" name="p" value="1">'
	var vars4 = '<input type="hidden" name="s" value="'+s+'">'
	var jumlah = 500;
	var perPage = 20;
	var total = Math.ceil(jumlah/perPage);
	var prevClass = 'paginationjs-prev J-paginationjs-previous';
	var firstClass = 'paginationjs-page paginationjs-first J-paginationjs-page';
	var dottedClass = 'paginationjs-ellipsis disabled';
	var lastClass = 'paginationjs-page paginationjs-last J-paginationjs-page';
	var liClass = 'paginationjs-page J-paginationjs-page'
	var goInput = 'jump'
	var goSubmit = 'go'
	var activeClass = 'paginationjs-page J-paginationjs-page active';
	var dottedPage = '<li class="dottedClass"><a>...</a></li>';
	var activePage = '<li class="'+activeClass+'"><a>'+page+'</a></li>';
	var firstPage = '<li class="firstClass"><a href="?'+vars1+vars2+'page=1">1</a></li>';
	var lastPage = '<li class="lastClass"><a href="?'+vars1+vars2+'page='+total+'">'+total+'</a></li>';
	var prevPage = '<li class="prevClass"><a href="?'+vars1+vars2+'page='+(page*1-1)+'">&laquo;</a></li>';
	var nextPage = '<li class="nextclass"><a href="?'+vars1+vars2+'page='+(page*1+1)+'">&raquo;</a></li>';
	var page2 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page=2">2</a></li>'
	var page3 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page=3">3</a></li>'
	var page4 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page=4">4</a></li>'
	var page5 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page=5">5</a></li>'
	var page6 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page=6">6</a></li>'
	var page7 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page=7">7</a></li>'
	var page8 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page=8">8</a></li>'
	var pageA1 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page='+(page*1-1)+'">'+(page*1-1)+'</a></li>'
	var pageA2 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page='+(page*1-2)+'">'+(page*1-2)+'</a></li>'
	var pageB1 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page='+(page*1+1)+'">'+(page*1+1)+'</a></li>'
	var pageB2 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page='+(page*1+2)+'">'+(page*1+2)+'</a></li>'
	var pageT1 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page='+(total-1)+'">'+(total-1)+'</a></li>'
	var pageT2 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page='+(total-2)+'">'+(total-2)+'</a></li>'
	var pageT3 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page='+(total-3)+'">'+(total-3)+'</a></li>'
	var pageT4 = '<li class="'+liClass+'"><a href="?'+vars1+vars2+'page='+(total-4)+'">'+(total-4)+'</a></li>'
	var goPage = '<div style="text-align:center;"><form action="?" method="get">'+vars3+vars4+'<input name="page" type="text" class="'+goInput+'"><input type="submit" class="'+goSubmit+'" value="Go"></form></div>';
	document.write( '<div id="pagination-demo1"><div class="paginationjs">' );
	document.write( '<div class="paginationjs-pages"><ul>' );
	if (page > total || page <= 0) { document.write( goPage ); 
	}else{
		if (total <= 8){
			if (total == 1){
			document.write(firstPage);
			}else if (total == 2){
			document.write(firstPage,page2);
			}else if (total == 3){
			document.write(firstPage,page2,page3);
			}else if (total == 4){
			document.write(firstPage,page2,page3,page4);
			}else if (total == 5){
			document.write(firstPage,page2,page3,page4,page5);
			}else if (total == 6){
			document.write(firstPage,page2,page3,page4,page5,page6);
			}else if (total == 7){
			document.write(firstPage,page2,page3,page4,page5,page6,page7);
			}else if (total == 8){
			document.write(firstPage,page2,page3,page4,page5,page6,page7,page8);
			}
			document.write( '</ul>' );
			document.write( goPage );
			document.write( '</div></div></div>' );
		}else{
			if (page == 1){
			document.write( activePage,page2,page3,page4,page5,dottedPage,lastPage,nextPage );
			}else if (page == 2){
			document.write( prevPage,firstPage,activePage,page3,page4,page5,dottedPage,lastPage,nextPage );
			}else if (page == 3){
			document.write( prevPage,firstPage,page2,activePage,page4,page5,dottedPage+lastPage+nextPage );
			}else if (page == (total-2)){
			document.write( prevPage,firstPage,dottedPage,pageT4,pageT3,activePage,pageT1,lastPage,nextPage );
			}else if (page == (total-1)){
			document.write( prevPage,firstPage,dottedPage,pageT4,pageT3,pageT2,activePage,lastPage,nextPage );
			}else if (page == total){
			document.write( prevPage,firstPage,dottedPage,pageT4,pageT3,pageT2,pageT1,activePage );
			}else{
			document.write( prevPage,firstPage,dottedPage,pageA2,pageA1,activePage,pageB1,pageB2,dottedPage,lastPage,nextPage );
			}
			document.write( '</ul>' );
			document.write( goPage );
			document.write( '</div></div></div>' );
		}
	}
}
