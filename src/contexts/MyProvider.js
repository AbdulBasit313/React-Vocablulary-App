import React, { Component } from 'react'
import WordsContext from './WordsContext';
import uuid from 'uuid/v4';

class MyProvider extends Component {
    state = {
        words: [
            { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'he lives with a lurking fear of exposure as a fraud', id: uuid() },
            { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'he lives with a lurking fear of exposure as a fraud', id: uuid() },
            { word: 'lurking', partOfSpeech: 'adjective', meaning: 'remaining hidden so as to wait in ambush', sentence: 'he lives with a lurking fear of exposure as a fraud', id: uuid() }
        ]
    }

    render() {
        return (
            <WordsContext.Provider value={{
                state: this.state,
                removeWord: (id) => this.setState({
                    words: this.state.words.filter(word => word.id !== id)
                }),
                addNewWord: (newWord) => this.setState({
                    words: [...this.state.words, newWord]
                })
            }}>
                {this.props.children}
            </WordsContext.Provider>
        )
    }
}

export default MyProvider