// Settings
let mi = '#items > ytd-guide-entry-renderer:nth-child(1)';
let gb = '#guide-button';
let yh = 'ytd-topbar-logo-renderer#logo';
let rd = '/playlist?list=WL';
let wl = 'a[href="/playlist?list=WL"]';

// Functions
function wlRedirect() {
	setTimeout(function(){
		$(wl).parent().click();
	}, 0);
}

function ytCleanUp() {
	$(yh).on( "click", function() {wlRedirect();})
	$(gb).css("pointer-events","none");
	$(mi).remove();
	$(mi).remove();
}

// Init
if (window.location.pathname == '/' ||
	window.location.pathname == '/feed/trending') {
		wlRedirect();
}
ytCleanUp();