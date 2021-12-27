if ('serviceWorker' in navigator) {
	console.log("registered");
	navigator.serviceWorker.register('/sw.js');
}