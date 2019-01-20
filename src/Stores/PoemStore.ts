import { observable, computed, autorun } from "mobx";
import languageStore from "./LanguageStore";

export class PoemStore {
  @observable public verses: string[] = [ 'default verse' ];

  addVerse(verse: string) {
    const url = `https://infinitepoemv1.azurewebsites.net/api/verses/${languageStore.currentLanguage}`;
    fetch(url, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: verse })
    }).then(response => this.verses.push(verse))
    .catch(reason => console.log(reason));
  }
}

const poemStore = new PoemStore();
export default poemStore;

var logger = autorun(() => console.log('verses length: ', poemStore.verses.length));