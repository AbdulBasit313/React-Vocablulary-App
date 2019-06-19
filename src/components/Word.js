import React from 'react'


const Word = ({ word, partOfSpeech, meaning, sentence, removeWord }) => {
   return (
      <div className="col s4">
         <div className="card blue-grey darken-1">
            <div className="card-content white-text">
               <span className="card-title">{word}</span>
               <p>{partOfSpeech}</p>
               <p>{meaning}</p>
               <p>{sentence}</p>
            </div>
            <div className="card-action">
               <i className="material-icons" onClick={removeWord}>delete</i>
               <i className="material-icons">create</i>
            </div>
         </div>
      </div>
   )
}

export default Word
