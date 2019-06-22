import React, { Component } from 'react';
import './App.css';
import WordList from './components/WordList';
import { Route, Switch } from 'react-router-dom'
import NewWordForm from './components/NewWordForm';
import About from './components/About';
import uuid from 'uuid/v4';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/layout/Navbar';


class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         words: [
            { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'He lives with a lurking fear of exposure as a fraud', id: uuid() },
            { word: 'procrastinate', partOfSpeech: 'verb', meaning: 'to be slow or late about doing something', sentence: 'He procrastinated and missed the submission deadline', id: uuid() },
            { word: 'invincible', partOfSpeech: 'adjective', meaning: 'impossible to defeat or overcome, bulletproof', sentence: 'The loss proved that the team is not invincible', id: uuid() },
            { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'He lives with a lurking fear of exposure as a fraud', id: uuid() }
         ],
         alert: null
      }
   }

   addNewWord = (newWord) => {
      this.setState({
         words: [...this.state.words, newWord]
      })
   }

   searchWords = (w) => {
      const words = this.state.words.filter(item => item.word.includes(w))
      this.setState({ words })
   }

   removeWord = (id) => {
      const words = this.state.words.filter(item => item.id !== id)
      this.setState({ words })
   }

   setAlert = (msg) => {
      this.setState({ alert: msg })

      setTimeout(() => this.setState({ alert: null }), 3000)
   }

   render() {
      return (
         <div>
            <Navbar />

            <Switch>
               <Route
                  exact path='/'
                  render={() => <WordList words={this.state.words} removeWord={this.removeWord} searchWords={this.searchWords}
                     alert={this.state.alert}
                     setAlert={this.setAlert}
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
