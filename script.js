const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn =document.getElementById('new-quote');
const loader = document.getElementById("loader");

//Get Quotes from API using async
let apiQuotes=[];

// Show Loading
function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function hideLoadingSpinner(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}


//Show new quote
function newQuote(){
    showLoadingSpinner();
   // Pick a random quote from apiQuotes array.
    let indexNumber = Math.floor(Math.random()*apiQuotes.length);
   const quote = apiQuotes[indexNumber];  //Math.floor rounds to the nearest highest integer. Math.random generates any decimal number between 0 and 1.
    console.log(indexNumber);
    console.log(quote);

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
    //Set quote,hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();

}

//Tweet Quote
function tweetQuote(){
    const twitterUrl = ` https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}` ; //Template strings use backticks
    open(twitterUrl,'_blank');
}


async function getQuotes(){
    showLoadingSpinner();
    const apiurl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiurl);
        apiQuotes =await response.json();  //Changes the data fetched from API into a JSON object.
      newQuote();
    }
    catch (error) {
       getQuotes()
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//On Load
 getQuotes();
// loading();