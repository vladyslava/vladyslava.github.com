window.onload = function () {
	for (var i = 1; i < 6; i++) {
		var itemID = "list_item" + i;
		var  element = document.getElementById(itemID);
		
		element.onclick = function (i){
			return function() {
			var someWIdth = i*18;
			var current_el = document.getElementById("current");
			current_el.style.width = someWIdth + "px";
		}
	}(i);
	}
}