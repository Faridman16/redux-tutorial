import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {data:'', time:''}
  }

  changeTitle(val){
    console.log(val.target.value);
    var input = val.target.value;
    this.setState({data:input});
  }
  
  render() {
    setTimeout(()=>{
      this.setState({time:Date.now()});
    }, 5000);
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



