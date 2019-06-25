import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import WordList from './components/WordList';
import Navbar from './components/layout/Navbar';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import NewWordForm from './components/pages/NewWordForm';
import About from './components/pages/About';
import uuid from 'uuid/v4';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './App.css';


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
                  render={() => (
                     <Fragment>
                        <div className="container">
                           <Alert alert={this.state.alert} />
                        </div>
                        {this.state.words.length > 0 &&
                           <Search
                              searchWords={this.searchWords}
                              setAlert={this.setAlert}
                           />}
                        <WordList
                           words={this.state.words}
                           removeWord={this.removeWord}
                        />
                     </Fragment>)}
               />
               <Route
                  exact path='/newword'
                  render={(props) => (
                     <Fragment>
                        <div className="container">
                           <Alert alert={this.state.alert} />
                        </div>
                        <NewWordForm {...props}
                           addNewWord={this.addNewWord}
                           setAlert={this.setAlert} />
                     </Fragment>)}
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
