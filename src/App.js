import React from 'react';
import './App.css';
// Importing Components
import HeaderNav from '../src/components/HeaderNav.js';
import ToDoHeader from '../src/components/ToDoHeader.js';
import EnterHeros from '../src/components/EnterHeros.js';
import HeroDiscription from '../src/components/HeroDiscription.js';
import YourHero from '../src/components/YourHero.js';


// Importing Lib
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter, Route } from 'react-router-dom';
import { faCheckSquare, faCoffee, faTrashAlt, faBell, faFlag, faUserNinja } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faCheckSquare, faCoffee, faTrashAlt, faBell, faFlag, faUserNinja);

class App extends React.Component {
  constructor(){
    super();
  }
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <HeaderNav />
          <Route exact path='/' component={ToDoHeader}></Route>
          <Route exact path='/' component={EnterHeros} ></Route>
          <Route exact path='/Discription/:heroid' component={HeroDiscription}></Route>
          <Route exact path='/YourHero' component={YourHero}></Route>
        </header>
      </div>
    </BrowserRouter>
  );
  }
}
export default App;
