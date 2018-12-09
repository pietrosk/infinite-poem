import React, { Component } from 'react';
import './PoemInput.css';

interface PoemInputState {
  readonly line: string;
}

interface PoemInputProps {
  readonly onSubmit: (newLine: string) => void;
}

class PoemInput extends Component<PoemInputProps, PoemInputState> {

  constructor(props: any) {
    super(props);
    
    this.state = { line: "" };
  }

  _onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({line: event.target.value}); 
  }

  _onInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const ENTER = 13;
    if (event.charCode === ENTER) {
      this._submitAndClear();
    }
  }

  _onInputSubmitClick = () => {
    this._submitAndClear();
  }

  _submitAndClear = () => {
    this.props.onSubmit(this.state.line);
    this.setState({line: ""});
  }

  render() {
    const { line } = this.state;
    return (
      <div className="poem-input">
        Please type your poem line:
        <input type="text" onChange={this._onInputChange} onKeyPress={this._onInputKeyPress} value={line}/>
        <input type="button" onClick={this._onInputSubmitClick} className="poem-input__submit" title="Submit" name="Submit" value="Submit"/>
      </div>
    );
  }
}

export default PoemInput;