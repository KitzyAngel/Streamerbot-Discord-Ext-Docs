
const themeButton = document.getElementById("themeButton");
var darkTheme = localStorage.getItem('theme');

// On load setup theme button
addEventListener("load", (event) => { 
	updateTheme();
});
	
// On theme button switch theme
themeButton.addEventListener("click", (event) => {
	darkTheme = darkTheme=="dark" ? "light" : "dark";
	localStorage.setItem('theme', darkTheme);
	updateTheme();
});

function updateTheme(){
	if(darkTheme==null){
		darkTheme = "dark";
		localStorage.setItem('theme', darkTheme);
	}
	jtd.setTheme(darkTheme);
	themeButton.textContent = `${darkTheme=="dark" ? "☀️" : "🌙"}`;
}