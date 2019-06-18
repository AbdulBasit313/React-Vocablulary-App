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
               <button onClick={removeWord}>Delete</button>
               <a href="#">Edit</a>
            </div>
         </div>
      </div>
   )
}

export default Word
