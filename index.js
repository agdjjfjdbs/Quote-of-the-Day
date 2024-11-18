const quotes = [
    {
      quote: "Resentment is like drinking poison and waiting for your enemies to die.",
      author: "Nelson Mandela"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    }
  ];
  
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const button = document.getElementById('new-quote');
  
  let lastIndex = null;
  
  button.addEventListener('click', () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex); 
    lastIndex = randomIndex;
  
    quoteElement.textContent = `"${quotes[randomIndex].quote}"`;
    authorElement.textContent = `-- ${quotes[randomIndex].author}`;
  });
  