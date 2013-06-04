$(document).ready(function (){	
	$('input#subm').click( function() {	
		t = eval($('select#select_t').val());
		t.toggleClass("codess");
		console.log(t);
	});
	
});
