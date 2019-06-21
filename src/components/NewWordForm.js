import React, { Component } from 'react';
import uuid from 'uuid/v4';


class NewWordForm extends Component {
   constructor(props) {
      super(props)
      this.state = {
         word: '',
         partOfSpeech: '',
         meaning: '',
         sentence: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()
      if (this.state.word.trim() === '' || this.state.partOfSpeech.trim() === ''|| this.state.meaning.trim() === '' || this.state.sentence.trim() === '') {
         alert("Inputs can't be empty")
      }
      else {
         const newWord = { ...this.state, id: uuid() }
         this.props.addNewWord(newWord)
         this.setState({
            word: '',
            partOfSpeech: '',
            meaning: '',
            sentence: ''
         })
         this.props.history.push('/');
      }
   }

   render() {
      const { word, partOfSpeech, meaning, sentence } = this.state
      return (
         <div className="row container">
            <form className="col s12" onSubmit={this.handleSubmit}>

               <div className="row">
                  <div className="input-field col s12">
                     <input
                        className="validate"
                        type="text" name='word' value={word}
                        id='word'
                        onChange={this.handleChange}
                     />
                     <label htmlFor="word">Word</label>
                  </div>
               </div>

               <div className="row">
                  <div className="input-field col s12">
                     <input
                        className="validate"
                        type="text" name='partOfSpeech' value={partOfSpeech}
                        id='partOfSpeech'
                        onChange={this.handleChange}
                     />
                     <label htmlFor="partOfSpeech">Part of Speech</label>
                  </div>
               </div>

               <div className="row">
                  <div className="input-field col s12">
                     <input
                        className="validate"
                        type="text" name='meaning' value={meaning}
                        id="meaning"
                        onChange={this.handleChange}
                     />
                     <label htmlFor="meaning">Meaning</label>
                  </div>
               </div>

               <div className="row">
                  <div className="input-field col s12">
                     <input
                        className="validate"
                        type="text" name='sentence' value={sentence}
                        id='sentence'
                        onChange={this.handleChange}
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
}

export default NewWordForm
