import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Body  />
        <Footer />
      </div>
    );
  }
}

export default App;


