(function($) {
	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		xlarge:  [ '1281px',  '1680px' ],
		large:   [ '981px',   '1280px' ],
		medium:  [ '737px',   '980px'  ],
		small:   [ null,      '736px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('#nav a, .scrolly').scrolly({
		speed: 1000,
		offset: function() { return $nav.height(); }
	});
})(jQuery);

// Copy text function
function copyText(event) {
	event.preventDefault();
	const textToCopy = event.currentTarget.getAttribute("title");
	const tempInput = document.createElement("textarea");
	tempInput.value = textToCopy;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);
	alert('Copied: ' + textToCopy);
}

// Password overlay logic
const PASSWORD = "shenmeows"; // Change your password
const overlay = document.getElementById("passwordOverlay");
const site = document.getElementById("siteContent");
const message = document.getElementById("passwordMessage");
const input = document.getElementById("sitePassword");
const btn = document.getElementById("unlockBtn");

btn.addEventListener("click", unlock);
input.addEventListener("keydown", (e) => { if(e.key === "Enter") unlock(); });

function unlock(){
	if(input.value === PASSWORD){
		overlay.style.display = "none";
		site.style.display = "block";
		sessionStorage.setItem("unlocked","1");
	} else {
		message.textContent = "Incorrect password!";
		input.value = "";
	}
}

// Auto-unlock if already entered this session
if(sessionStorage.getItem("unlocked") === "1"){
	overlay.style.display = "none";
	site.style.display = "block";
}
