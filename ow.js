// Settings
let yt_logo = document.querySelector("ytd-topbar-logo-renderer#logo");
let w_later = document.querySelector('a[href="/playlist?list=WL"]');
let redir = "/playlist?list=WL";
var loc_old = window.location.pathname;
const DEBUG = false;
const VER = "0.3"

// Functions
function wlRedirect() {
  let loc = window.location.pathname;
  if (loc == '/' || loc == '/feed/trending') {
  	setTimeout(function(){
      document.onclick = null;
      if (w_later !== null) {
    		w_later.parentNode.click();
      } else {
        window.location.replace('/playlist?list=WL');
      }
      document.onclick = function(e) {reHandler(e)};
      loc_old = redir;
      if (DEBUG) {
        console.log("Location changed (redirect): "+loc+" > "+loc_old)
      }
  	}, 0);
	}
}

function reHandler(e) {
  if (DEBUG) {
    console.log(e.target);
  }
  let loc_new = window.location.pathname;
  if (loc_old != loc_new) {
    if (DEBUG) {
      console.log("Location changed: "+loc_old+" > "+loc_new)
    }
    loc_old = loc_new;
    wlRedirect(e);
  }
}

// Init
if (DEBUG) {
  console.log("Over Watch v"+VER+" is running")
}
wlRedirect();
document.onclick = function(e) {reHandler(e)};
