import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "I'm sleeping in the bath tub.",
      character: "Marge Simpson",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    }
  }



  getNewCardQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
        });
      });
  }

  render() {

    return (
      <div className="App">
        <QuoteCard simpsonPers={this.state} />
        <button type="button" onClick={this.getNewCardQuote}> New quote!</button>
      </div>
    );

  }
}
export default App;
