const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const copyBtn = document.getElementById("copy-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");
let localQuotes = null;
let seenQuotesId = [];
let lastQuote = null;

async function getQuote(){
    const response = await fetch("./datasets/quotes.jsonl");
    const stringData = await response.text();
    localQuotes = stringData.trim().split("\n").map(line => JSON.parse(line));

    let randomQuoteIndex = Math.floor(Math.random() * localQuotes.length) + 1;
    seenQuotesId.push(`${Number(localQuotes[randomQuoteIndex].id)}`);
    quoteText.textContent = localQuotes[randomQuoteIndex].quote;
    quoteAuthor.textContent = localQuotes[randomQuoteIndex].author;
    lastQuote = localQuotes[randomQuoteIndex];
    console.log(Number(seenQuotesId[seenQuotesId.length - 1]))
    console.log(`currentQuote is ${lastQuote.id}\nlocalquotes is ${localQuotes[5]}`)
}

newQuoteBtn.addEventListener("click", () => {
    getQuote();
});

if(document.readyState === "interactive"){
    getQuote();
}

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(`${lastQuote.quote} - ${lastQuote.author}`);
});