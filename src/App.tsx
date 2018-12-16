import React, { Component } from 'react';
import './App.css';
import PoemInput from './Components/PoemInput';
import PoemLines from './Components/PoemLines';
import LanguageSelector from './Components/LanguageSelector';
import languageStore from './Stores/LanguageStore';
import poemStore, { PoemStore } from './Stores/PoemStore';

interface AppProps {
  readonly poemStore: PoemStore;
}

class App extends Component<AppProps> {

  _onPoemInputSubmit = (newLine: string) => {
    poemStore.verses.push(newLine);
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          Infinite Poem
        </header>
        <LanguageSelector store={languageStore}/>
        <div className="app__content">
          <PoemLines poemStore={poemStore}/>
          <PoemInput onSubmit={this._onPoemInputSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
