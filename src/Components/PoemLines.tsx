import React, { Component } from 'react';
import { PoemStore } from '../Stores/PoemStore';
import { observer } from 'mobx-react';

interface PoemLinesProps {
  readonly poemStore: PoemStore;
}

@observer
class PoemLines extends Component<PoemLinesProps> {
  render() {
    const { verses } = this.props.poemStore;

    return (
      <div className="poem-lines">
        <p>
          {verses.map((verse) => 
            <>{verse}<br/></>
          )}
        </p>
      </div>
    );
  }
}

export default PoemLines;