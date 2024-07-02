// script.js

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const authorInput = document.getElementById('authorInput');

// Fetch a random quote when the page loads
document.addEventListener('DOMContentLoaded', getRandomQuote);

// Function to fetch a random quote
function getRandomQuote() {
  fetch('/api/quote')
    .then(response => response.json())
    .then(data => {
      quoteElement.textContent = data.quote;
      authorElement.textContent = `- ${data.author}`;
    })
    .catch(error => console.error('Error fetching quote:', error));
}

// Function to search quotes by author
function searchQuotes() {
  const author = authorInput.value.trim();
  if (author === '') {
    alert('Please enter an author name to search.');
    return;
  }

  fetch(`/api/quotes/${author}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        alert('No quotes found for this author.');
      } else {
        // Display first quote found (assuming there could be multiple)
        quoteElement.textContent = data[0].quote;
        authorElement.textContent = `- ${data[0].author}`;
      }
    })
   
  }
