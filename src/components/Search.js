import React, { Component } from 'react'


class Search extends Component {
   state = {
      text: ''
   }

   onChangeText = (e) => this.setState({ [e.target.name]: e.target.value })

   submitForm = (e) => {
      e.preventDefault()
      if (this.state.text === '') {
         this.props.setAlert('Please enter something')
      }
      else {
         this.props.searchWords(this.state.text)
         this.setState({ text: '' })
      }
   }

   render() {
      return (
         <form onSubmit={this.submitForm}>
            <div className="row">
               <div className="input-field col s12">
                  <input
                     className='validate'
                     type="text" name='text' id='text'
                     onChange={this.onChangeText}
                     value={this.state.text}
                  />
                  <label htmlFor="text">Search</label>
               </div>
               <button className="waves-effect waves-light btn-small"><i className="material-icons left">find_in_page</i>Go!</button>
            </div>
         </form>
      )
   }
}

export default Search
