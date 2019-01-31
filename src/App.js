import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <nav className="myStyle">
           <Link to='/'>Landing</Link>
           <Link to='/library'>Library</Link>
         </nav>
         <nav className="secondStyle">
         </nav>
         <h1 id="Title">Bloc Classical Jams!</h1>
         <h5>(Because sometimes, you just wanna be classy)</h5>
        </header>
        <div id="banner"></div>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
          </main>
        </div>
      );
    }
  }

export default App;
