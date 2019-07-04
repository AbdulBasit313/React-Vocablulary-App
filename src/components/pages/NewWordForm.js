import React, { useState } from 'react';
import uuid from 'uuid/v4';
import Dropdown from '../Dropdown';


const NewWordForm = ({ setAlert, addNewWord, history }) => {

   const [word, setWord] = useState('')
   const [partOfSpeech, setPartOfSpeech] = useState('Parts of speech')
   const [meaning, setMeaning] = useState('')
   const [sentence, setSentence] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      if (word.trim() === '' || partOfSpeech.trim() === '' || meaning.trim() === '' || sentence.trim() === '') {
         setAlert("Inputs can't be empty")
      }
      else {
         const newWord = { ...{ word, partOfSpeech, meaning, sentence }, id: uuid() }
         addNewWord(newWord)
         setWord('')
         setPartOfSpeech('')
         setMeaning('')
         setSentence('')
         history.push('/');
      }
   }

   const onSelectPartsOfSpeech = (partOfSpeech) => {
      setPartOfSpeech(partOfSpeech)
   }

   return (
      <div className="row container">
         <form className="col s12" onSubmit={handleSubmit}>

            <div className="row">
               <div className="input-field col s12">
                  <input
                     className="validate"
                     type="text" value={word}
                     name='word'
                     id='word'
                     onChange={(e) => setWord(e.target.value)}
                  />
                  <label htmlFor="word">Word</label>
               </div>
            </div>

            <div className="row dropdown-item">
               <Dropdown
                  onSelectPartsOfSpeech={onSelectPartsOfSpeech}
                  partOfSpeech={partOfSpeech}
               />
            </div>

            <div className="row">
               <div className="input-field col s12">
                  <input
                     className="validate"
                     type="text" value={meaning}
                     name='meaning'
                     id="meaning"
                     onChange={(e) => setMeaning(e.target.value)}
                  />
                  <label htmlFor="meaning">Meaning</label>
               </div>
            </div>

            <div className="row">
               <div className="input-field col s12">
                  <input
                     className="validate"
                     type="text" value={sentence}
                     name='sentence'
                     id='sentence'
                     onChange={(e) => setSentence(e.target.value)}
                  />
                  <label htmlFor="sentence">Sentence</label>
               </div>
            </div>

            <button className='btn waves-effect waves-light'>
               Submit
               <i className="material-icons right">send</i>
            </button>

         </form>
      </div>
   )
}


export default NewWordForm
