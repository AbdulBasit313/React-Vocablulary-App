import React, { Component, Fragment } from 'react'

class Dropdown extends Component {
   constructor(props) {
      super(props)
      this.state = {
         items: ['Noun', 'Pronoun', 'Verb', 'Adverb', 'Adjective', 'preposition', 'Conjunction', 'Interjection'],
         toggleList: false
      }
   }

   toggleList = () => this.setState({ toggleList: !this.state.toggleList })

   onSelect = (item) => {
      this.props.onSelectPartsOfSpeech(item)
      this.setState({
         toggleList: !this.state.toggleList
      })
   }


   render() {
      return (
         <Fragment>
            <h6 onClick={this.toggleList} className='input-item'>{this.props.partOfSpeech}</h6>
            {this.state.toggleList &&
               <ul className='list'>{this.state.items.map((item, index) => {
                  return (
                     <li
                        className='list-item'
                        key={index}
                        onClick={() => this.onSelect(item)}
                     >
                        {item}
                     </li>
                  )
               })}</ul>
            }
         </Fragment>
      )
   }
}

export default Dropdown
