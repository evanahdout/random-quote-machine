const quotes = [
    {
      quote: "If you can't explain it simply, you don't understand it well enough.",
      source: "Albert Einstein"
    },
    {
      quote: "I didn't fail the test. I just found 100 ways to do it wrong.",
      source: "Benjamin Franklin"
    },
    {
      quote: "If the current me is out of options, then I need to just bring out the next me.",
      source: "Might Guy"
    },
    {
      quote: "Take care of the pennies, and the pounds will take care of themselves.",
      source: "Andrew Carnegie"
    },
    {
      quote: "Only a Sith deals in absolutes.",
      source: "Star Wars: Episode III - Revenge of the Sith, 2005"
    },
    {
      quote: "If I tell you I'm good, probably you will say I'm boasting. But if I tell you I'm not good, you'll know I'm lying.",
      source: "Bruce Lee"
    },
    {
      quote: "A truth told with bad intent beats all the lies you can invent.",
      source: "William Blake"
    },
    {
      quote: "It is not wisdom but authority that makes a law.",
      source: "Thomas Hobbes"
    },
    {
      quote: "Danger gleams like sunshine to a brave man's eyes.",
      source: "Cicero"
    },
    {
      quote: "The question of whether machines can think is about as relevant as the question of whether submarines can swim.",
      source: "Edsger Dijkstra"
    },
    {
      quote: "Mercy to the guilty is cruelty to the innocent.",
      source: "Adam Smith"
    },
    {
      quote: "The best way to predict the future is to invent it.",
      source: "Alan Kay"
    },
    {
      quote: "Life would be tragic if it weren't funny.",
      source: "Stephen Hawking"
    },
    {
      quote: "I believe that whatever doesn't kill you, simply makes you... stranger.",
      source: "The Dark Knight, 2012"
    },
    {
      quote: "Rocks in my path? I keep them all. With them, I shall build my castle.",
      source: "Nemo Nox"
    },
    {
      quote: "Rome wasn't built in a day.",
      source: "A wise man"
    },
    {
      quote: "Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
      source: "Alan Turing"
    },
    {
      quote: "I'd rather regret the risks that didn't work out than the chances I didn't take at all.",
      source: "Simone Biles"
    },
    {
      quote: "Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.",
      source: "Ada Lovelace"
    },
    {
      quote: "Laugh and the world laughs with you; weep, and you weep alone; for the sad old earth must borrow its mirth.",
      source: "Ella Wheeler Wilcox"
    }
  ];

  const colors = [
    "#20368F",
    "#323232",
    "#000B4F",
  ]
  
  function change() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteAndSource = quotes[randomIndex];
    const quote = quoteAndSource.quote;
    const source = quoteAndSource.source;
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.getElementById("text").innerHTML = quote; 
    document.getElementById("author").innerHTML = source;
    document.documentElement.style.setProperty("--body-color", randomColor);
  }
  change();
