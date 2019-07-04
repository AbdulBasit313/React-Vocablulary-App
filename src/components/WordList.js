import React from 'react'
import Word from './Word';


const WordList = ({ words, removeWord }) => {
   return (
      <div className="container">
         {!words.length ?
            <h4 style={{ textAlign: 'center' }}>You don't have any word saved</h4>
            :
            <div className='row'>{
               words.map((word, index) => {
                  return (
                     <Word
                        key={word.id}
                        word={word.word}
                        partOfSpeech={word.partOfSpeech}
                        meaning={word.meaning}
                        sentence={word.sentence}
                        removeWord={() => removeWord(word.id)}
                     />
                  )
               })
            }</div>}
      </div>
   )
}

export default WordList
