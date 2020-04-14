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
    poemStore.addVerse(newLine);
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          Infinite Poem (v{process.env.REACT_APP_INFINITE_POEM_VERSION})
        </header>
        <LanguageSelector store={languageStore}/>
        <PoemLines poemStore={poemStore}/>
        <PoemInput onSubmit={this._onPoemInputSubmit}/>
      </div>
    );
  }
}

export default App;
