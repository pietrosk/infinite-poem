import { observable, computed } from "mobx";

export type Language = 'en' | 'sk';

export class LanguageStore {

  @observable private _currentLanguage: Language = 'en';

  @computed get currentLanguage(): Language {
      return this._currentLanguage;
  }

  set currentLanguage(value: Language) {
    this._currentLanguage = value;
  }
}

const languageStore = new LanguageStore();
export default languageStore;

