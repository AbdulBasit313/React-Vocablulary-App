import React, { Component } from 'react'
import Word from './Word';


class WordList extends Component {

   renderWordList() {
      return this.props.words.map((word, index) => {
         return (
            <Word
               key={word.id}
               word={word.word}
               partOfSpeech={word.partOfSpeech}
               meaning={word.meaning}
               sentence={word.sentence}
               removeWord={() => this.props.removeWord(word.id)}
            />
         )
      })
   }

   render() {
      return (
         <div className='word-list'>{this.renderWordList()}</div>
      )
   }
}

export default WordList
