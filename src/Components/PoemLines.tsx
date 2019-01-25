import React, { Component } from 'react';
import { PoemStore } from '../Stores/PoemStore';
import { observer } from 'mobx-react';
import './PoemLines.css';

interface PoemLinesProps {
  readonly poemStore: PoemStore;
}

@observer
class PoemLines extends Component<PoemLinesProps> {
  render() {
    const { verses } = this.props.poemStore;

    return (
      <div className="poem-lines">
        {verses.map((verse, index) => 
            <div key={index}>{verse}</div>
          )}
      </div>
    );
  }
}

export default PoemLines;