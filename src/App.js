import React, { useState, Fragment } from 'react';
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


const App = () => {
   const [words, setWords] = useState([
      { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'He lives with a lurking fear of exposure as a fraud', id: uuid() },
      { word: 'procrastinate', partOfSpeech: 'verb', meaning: 'to be slow or late about doing something', sentence: 'He procrastinated and missed the submission deadline', id: uuid() },
      { word: 'invincible', partOfSpeech: 'adjective', meaning: 'impossible to defeat or overcome, bulletproof', sentence: 'The loss proved that the team is not invincible', id: uuid() },
      { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'He lives with a lurking fear of exposure as a fraud', id: uuid() }
   ])

   const [alert, setAlert] = useState(null)

   const addNewWord = (newWord) => {
      setWords([...words, newWord])
   }

   const searchWords = (w) => {
      const findWord = words.filter(item => item.word.includes(w))
      setWords(findWord)
   }

   const removeWord = (id) => {
      const deleteWords = words.filter(item => item.id !== id)
      setWords(deleteWords)
   }

   const showAlert = (msg) => {
      setAlert(msg)

      setTimeout(() => setAlert(null), 3000)
   }

   return (
      <div>
         <Navbar />
         <Switch>
            <Route
               exact path='/'
               render={() => (
                  <Fragment>
                     <div className="container">
                        <Alert alert={alert} />
                     </div>
                     {words.length > 0 &&
                        <Search
                           searchWords={searchWords}
                           setAlert={showAlert}
                        />}
                     <WordList
                        words={words}
                        removeWord={removeWord}
                     />
                  </Fragment>)}
            />
            <Route
               exact path='/newword'
               render={(props) => (
                  <Fragment>
                     <div className="container">
                        <Alert alert={alert} />
                     </div>
                     <NewWordForm {...props}
                        addNewWord={addNewWord}
                        setAlert={showAlert} />
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


export default App;
