import { observable, computed, autorun } from "mobx";
import { Language } from "./LanguageStore";

export class PoemStore {
  @observable public verses: string[] = [ 'default verse' ];

  loadPoem(variant: Language) {

  }
}

const poemStore = new PoemStore();
export default poemStore;

var logger = autorun(() => console.log('verses length: ', poemStore.verses.length));