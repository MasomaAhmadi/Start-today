const text = document.getElementById("text");
const qouted = document.getElementById("qouted");
const author = document.getElementById("author");
const change = document.getElementById("change");
const twitterBtn = document.getElementById("twitterBtn");
const whatsAppBtn = document.getElementById("whatsAppBtn");
const container = document.getElementById("container");

function takeData() {
	let random = Math.floor(Math.random() * localQuotes.length);
	const quote = localQuotes[random];
	if (quote.text.length > 100) {
		text.classList.remove("text-lg");
		text.classList.add("text-md");
		text.textContent = quote.text;
		author.textContent = quote.author;
		qouted.textContent = quote.qouted;
	} else {
		text.textContent = quote.text;
		author.textContent = quote.author;
		qouted.textContent = quote.qouted;
	}
}

change.addEventListener("click", takeData);

/////////////////////////////////////////////////////////////////////////////////////
//share button
function share() {
	const twitter = `https://twitter.com/intent/tweet?text=${text.textContent}-${author.textContent}`;
	window.open(twitter, "_blank");
}
twitterBtn.addEventListener("click", share);
////////////////////////////////////////////////////////////////////////////////////
function shareWhatsApp() {
	const whatsApp = `https://api.whatsapp.com/send?text=${text.textContent}-${author.textContent}`;
	window.open(whatsApp, "_blank");
}
whatsAppBtn.addEventListener("click", shareWhatsApp);
///////////////////////////////////////////////////////////////////////////////////////

// automatic change 
setInterval(takeData, 7000)
setInterval(() => { AOS.refresh(); }, 7000)
