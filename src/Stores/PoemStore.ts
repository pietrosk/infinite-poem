import { observable, computed, autorun } from "mobx";
import languageStore from "./LanguageStore";
import { BackendUrl } from "../config";

interface CreateVerseRequestModel {
  readonly text: string;
}

export class PoemStore {
  @observable public verses: string[] = [ 'default verse' ];

  addVerse(verse: string) {
    const createVerseModel: CreateVerseRequestModel = {
      text: verse,
    };

    const url = `${BackendUrl}/api/verses/${languageStore.currentLanguage}`;
    fetch(url, { 
      method: 'POST',
      body: JSON.stringify(createVerseModel),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(res => res.json())
    .then(response => this.verses.push(verse))
    .catch(reason => console.log(reason));
  }
}

const poemStore = new PoemStore();
export default poemStore;

var logger = autorun(() => console.log('verses length: ', poemStore.verses.length));