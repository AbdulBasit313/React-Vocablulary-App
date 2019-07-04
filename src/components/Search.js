import React, { useState } from 'react'


const Search = ({ setAlert, searchWords }) => {
   const [text, setText] = useState('')

   const onChangeText = (e) => setText(e.target.value)

   const submitForm = (e) => {
      e.preventDefault()
      if (text === '') {
         setAlert('Please enter something')
      }
      else {
         searchWords(text)
         setText('')
      }
   }

   return (
      <div className="container">
         <form onSubmit={submitForm}>
            <div className="row">
               <div className="input-field col s12">
                  <input
                     className='validate'
                     type="text" name='text' id='text'
                     onChange={onChangeText}
                     value={text}
                  />
                  <label htmlFor="text">Search</label>
               </div>
               <button className="waves-effect waves-light btn-small"><i className="material-icons left">find_in_page</i>Go!</button>
            </div>
         </form>
      </div>
   )
}

export default Search
