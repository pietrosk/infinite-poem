import React, { Component } from 'react';
import './App.css';
import PoemInput from './Components/PoemInput';
import PoemLines from './Components/PoemLines';
import LanguageSelector from './Components/LanguageSelector';
import languageStore from './Stores/LanguageStore';

interface AppState {
  readonly lines: string[];
}

class App extends Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    
    this.state = {
      lines: ['icinkin prvy poeeeem']
    }
  }

  _onPoemInputSubmit = (newLine: string) => {
    this.setState((oldState) => ({ lines: oldState.lines.concat([ newLine ]) }));
  }

  render() {
    const { lines } = this.state;
    return (
      <div className="app">
        <header className="app__header">
          Infinite Poem
        </header>
        <LanguageSelector store={languageStore}/>
        <div className="app__content">
          <PoemLines lines={lines}/>
          <PoemInput onSubmit={this._onPoemInputSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
