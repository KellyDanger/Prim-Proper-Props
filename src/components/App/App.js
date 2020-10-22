import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm'

class App extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <h2>Party Leader</h2>
        {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
        <GuestForm newGuest={this.state.newGuest} guestList={this.state.guestList}/>
        <GuestList guestList={this.state.guestList}/>
        <DinnerSupplies count={this.state.guestList.length}/>
        <Footer/>    
      </div>
    );
  }
}

export default App;
