const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');



const apiURL = 'https://api.quotable.io/random';
async function getQuote(){
    try {
        const response =await fetch(apiURL)
        const data =await response.json();
    
        const quoteContent = data.content;
        const quoteaAuthor = data.author;
    
        quoteEl.innerText = quoteContent;
        authorEl.innerText ="~"+ quoteaAuthor;
        
    } catch (error) {
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened, try again later";
        
    }
   
    
}



btnEl.addEventListener('click',getQuote);