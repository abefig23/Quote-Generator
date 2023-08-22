const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    if (!quote.author) {
        authorText.textContent = 'Unkown';
    } else {
        authorText.textContent = quote.author;
    }

    quoteText.textContent = quote.text;
}

async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

getQuotes();   

