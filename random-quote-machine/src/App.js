import React from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
    {
      quote: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.", 
      author: "Steve Jobs"
    },
    {
      quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      author: "Robert Louis Stevenson"
    },
    {
      quote: "Courage isn't having the strength to go on – it is going on when you don't have strength.",
      author: "Napoleon Bonaparte"
    },
    {
      quote: "Pain is inevitable. Suffering is optional.",
      author: "Haruki Murakami"
    },
    {
      quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
      author: "Albert Camus"
    },
    {
      quote: "Cut your own firewood. It will heat you twice.",
      author: "Henry Ford"
    },
    {
      quote: "Only those who dare to fail greatly can ever achieve greatly.",
      author: "Robert F. Kennedy"
    }
    ]


const App = () => {

  const [index, setIndex] = React.useState(Math.floor(Math.random() * Math.floor(quotes.length)));
  const [href, setHref] = React.useState("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + "\'" + quotes[index].quote + "\' " + quotes[index].author);

  const randomize = () => {
    var i = Math.floor(Math.random() * Math.floor(quotes.length));
    var href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + "\'" + quotes[i].quote + "\' " + quotes[i].author;
    setIndex(i);
    setHref(href);
  };


  return (
    <div>
      <div id="quote-box">
        <Quote quoteIndex={index} />
      
      
        <Author authorIndex={index} />
      
        <button type="button" id="new-quote" onClick={randomize}>Get Quote</button>
      
        <a href={href} target="_blank" id="tweet-quote">Tweet Quote</a>
      </div>
      
    </div>
  );
}


const Quote = ({quoteIndex}) => {

  return (
    <div id="text">
      {quotes[quoteIndex].quote}
    </div>
  );
}


const Author = ({authorIndex}) => {

  return (
    <div id="author">
      {quotes[authorIndex].author}
    </div>
  );
}

export default App;
