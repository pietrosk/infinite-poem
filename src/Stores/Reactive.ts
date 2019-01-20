import { autorun } from "mobx";
import languageStore from "./LanguageStore";
import poemStore from "./PoemStore";
import { ApiVerseModel } from "../Models/ApiVerseModel";

export const runReactiveStores = () => {
  var poemLoader = autorun(() => {
    console.log('now load for new language', languageStore.currentLanguage);

    const url = `https://infinitepoemv1.azurewebsites.net/api/verses/${languageStore.currentLanguage}`;
    fetch(url)
      .then(response => response.json())
      .then(response => { 
        console.log('got result:', response);
        return response as ApiVerseModel[];
      })
      .then(response => poemStore.verses = response.map(v => v.text));
  });
}