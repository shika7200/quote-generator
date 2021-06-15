const quoteContainer = document.getElementById('qute-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
// let apiQuotes = [];

//Show New Quote
function newQuote () {
// Pick a random quote  from apiquote array
const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// console.log(quote);
//authorText.textContent = quote.author;
// check if Author field is blank and replace it with 'unknown'
if (!quote.author){
  authorText.textContent = 'Unknown';
}else {
  authorText.textContent = quote.author;
}
//Check  Quote lenght  to determine stylling
if (quote.text.length > 120){
  quoteText.classList.add('long-quote');
} else {quoteText.classList.remove('long-quote')
}
quoteText.textContent =  quote.text;

}


//  // Get Quotes From API
   async function getQuotes() {
      const apiUrl = 'https://type.fit/api/quotes';
      try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json(); 
         newQuote();
       } catch(error) {
          // Catch Error Here
       }
   }



//newQuote();

//  Tweet Quote
function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click' ,newQuote);
twitterBtn.addEventListener('click',tweetQuote);


  //On load
 getQuotes();