import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { LanguageStore, Language } from '../Stores/LanguageStore';
import './LanguageSelector.css';
import classNames from 'classnames';

interface LanguageSelectorProps {
  readonly store: LanguageStore;
}

@observer
class LanguageSelector extends Component<LanguageSelectorProps> {

  _onLanguageClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    this.props.store.currentLanguage = event.currentTarget.value as Language;
  }

  render() {
    const currentLanguage = this.props.store.currentLanguage;

    return (
      <div>
        <input 
          type="button"
          value="en"
          onClick={this._onLanguageClickHandler} 
          className={classNames('button', { 'button--selected': currentLanguage == 'en'})}
        />

        <input 
          type="button"
          value="sk"
          onClick={this._onLanguageClickHandler}
          className={classNames('button', { 'button--selected': currentLanguage == 'sk'})}
        />

      </div>
    );
  }
}

export default LanguageSelector;