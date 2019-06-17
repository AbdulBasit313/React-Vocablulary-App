import React from 'react'


const Word = ({ word, partOfSpeech, meaning, sentence, removeWord }) => {
   return (
      <div className='card'>
         <button onClick={removeWord}>remove</button>
         <h1>{word}</h1>
         <p>{partOfSpeech}</p>
         <p>{meaning}</p>
         <p>{sentence}</p>
      </div>
   )
}

export default Word
