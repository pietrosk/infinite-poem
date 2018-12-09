import React, { Component } from 'react';

interface PoemLinesProps {
  readonly lines: string[];
}

class PoemLines extends Component<PoemLinesProps> {
  render() {
    const { lines } = this.props;

    return (
      <div className="poem-lines">
        <p>
          {lines.map(line => 
            <>{line}<br/></>
          )}
        </p>
      </div>
    );
  }
}

export default PoemLines;