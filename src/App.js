import React, { Component } from 'react';
import './App.css';
import WordList from './components/WordList';
import { Route, Switch } from 'react-router-dom'
import NewWordForm from './components/NewWordForm';
import About from './components/About';
import uuid from 'uuid/v4';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/layout/Navbar';

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         words: [
            { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'he lives with a lurking fear of exposure as a fraud', id: uuid() },
            { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'he lives with a lurking fear of exposure as a fraud', id: uuid() },
            { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'he lives with a lurking fear of exposure as a fraud', id: uuid() }
         ]
      }
   }

   addNewWord = (newWord) => {
      this.setState({
         words: [...this.state.words, newWord]
      })
   }

   removeWord = (id) => {
      const words = this.state.words.filter(word => word.id !== id)
      this.setState({ words: words })
   }

   render() {
      return (
         <div>
            <Navbar />
            <Switch>
               <Route
                  exact path='/'
                  render={() => <WordList words={this.state.words} removeWord={this.removeWord}
                  />}
               />
               <Route
                  exact path='/newword'
                  render={(props) => <NewWordForm {...props} addNewWord={this.addNewWord} />}
               />
               <Route
                  exact path='/about'
                  render={() => <About />}
               />
            </Switch>
         </div>
      );
   }
}

export default App;
