import React, { useState, Fragment } from 'react'

const Dropdown = ({ partOfSpeech, onSelectPartsOfSpeech }) => {
   // state = {
   //    items: ['Noun', 'Pronoun', 'Verb', 'Adverb', 'Adjective', 'preposition', 'Conjunction', 'Interjection'],
   //    toggleList: false
   // }
   const [items, setItems] = useState(['Noun', 'Pronoun', 'Verb', 'Adverb', 'Adjective', 'preposition', 'Conjunction', 'Interjection'])
   const [toggleList, setToggleList] = useState(false)

   const showList = () => setToggleList(!toggleList)

   const onSelect = (item) => {
      onSelectPartsOfSpeech(item)
      // this.setState({
      //    toggleList: !this.state.toggleList
      // })
      setToggleList(!toggleList)
   }

   return (
      <Fragment>
         <h6 onClick={showList} className='input-item'>{partOfSpeech}</h6>
         {toggleList &&
            <ul className='list'>{items.map((item, index) => {
               return (
                  <li
                     className='list-item'
                     key={index}
                     onClick={() => onSelect(item)}
                  >
                     {item}
                  </li>
               )
            })}</ul>
         }
      </Fragment>
   )
}


export default Dropdown
