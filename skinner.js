(
	window.onload = function() {
	var width = 300;
	var height = 300;
	var skinnerFacebookId = 502351067 
	// can be doug's or anyone else in the family's. After all. This is skinner js.

	var imgs = document.getElementsByTagName("img");
	for(var i = 0; i < imgs.length; i++){
		imgs[i].src = "http://graph.facebook.com/502351067/picture?width=" 
		+ width 
		+ "&height="
		+ height
	};
}());
