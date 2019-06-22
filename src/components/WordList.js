import React, { Component } from 'react'
import Word from './Word';
import Search from './Search';
import Alert from './layout/Alert';


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
         <div className="container">
            <Alert alert={this.props.alert} />
            {this.props.words.length > 0 && <Search searchWords={this.props.searchWords} setAlert={this.props.setAlert} />}
            {!this.props.words.length ?
               <h4 style={{ textAlign: 'center' }}>You don't have any word saved</h4>
               :
               <div className='row'>{this.renderWordList()}</div>}
         </div>
      )
   }
}

export default WordList
