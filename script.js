//Get Quotes from API using async
let apiQuotes=[];

//Show new quote
function newQuote(){
   // Pick a random quote from apiQuotes array.
    let indexNumber = Math.floor(Math.random()*apiQuotes.length);
   const quote = apiQuotes[indexNumber];  //Math.floor rounds to the nearest highest integer. Math.random generates any decimal number between 0 and 1.
    console.log(indexNumber);
    console.log(quote);
}

async function getQuotes(){
    const apiurl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiurl);
        apiQuotes =await response.json();  //Changes the data fetched from API into a JSON object.
      newQuote();
    }
    catch (e) {
       //Catch Error Here
    }
}

//On Load
getQuotes();