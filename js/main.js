$("#toggleBtn").click(function(){
	$("#overlayMenu, #mainContent").toggle();
	$("#overlayMenu").toggleClass("animated fadeIn");
	$("#toggleBtn").toggleClass("animated flipInY");
});
