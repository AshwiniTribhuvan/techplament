const quotes = [
  { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { quote: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
  { quote: "If opportunity doesn't knock, build a door.", author: "Milton Berle" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" }
  
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote(quote) {
  var quoteContainer = document.getElementById('quoteContainer');
  quoteContainer.innerHTML = <div class="quote"><p>"${quote.quote}"</p><p><strong>- ${quote.author}</strong></p></div>;
}

function searchQuotes() {
  var author = document.getElementById('authorInput').value.trim().toLowerCase();

  var filteredQuotes = quotes.filter(function(quote) {
    return quote.author.toLowerCase().includes(author);
  });

  var quoteContainer = document.getElementById('quoteContainer');
  quoteContainer.innerHTML = '';
  if (filteredQuotes.length > 0) {
    filteredQuotes.forEach(function(quote) {
      var quoteDiv = document.createElement('div');
      quoteDiv.className = 'quote';
      <div>quoteDiv.innerHTML = <p>"${quote.quote}"</p>
      <p><strong>- ${quote.author}</strong></p>;</div>
      quoteContainer.appendChild(quoteDiv);
    });
  } else {
    quoteContainer.innerHTML = '<p>No quotes found for the specified author.</p>';
  }
}

window.onload = function() {
  const randomQuote = getRandomQuote();
  displayQuote(randomQuote);
}
