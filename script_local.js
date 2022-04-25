const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn =document.getElementById('new-quote');

//Show new quote
function newQuote(){
    // Pick a random quote from apiQuotes array.
    let indexNumber = Math.floor(Math.random()* localQuotes.length);
    const quote = localQuotes[indexNumber];  //Math.floor rounds to the nearest highest integer. Math.random generates any decimal number between 0 and 1.

    //Check if author field is blank and replace it with 'Unknown'
    if(!quote.author){
        authorText.textContent='Unknown';
    }
    else{
        authorText.textContent = quote.author;
    }

    //Check quote length to determine styling
    if (quote.text.length>100){
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }

    //Assigns value of text of the quote to the quote id.
    quoteText.textContent = quote.text;
}

//Tweet Quote
function tweetQuote(){
    const twitterUrl = ` https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}` ; //Template strings use backticks
    open(twitterUrl,'_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
//On Load
newQuote();