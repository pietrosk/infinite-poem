import { autorun } from "mobx";
import languageStore from "./LanguageStore";
import poemStore from "./PoemStore";

export const runReactiveStores = () => {
  var poemLoader = autorun(() => {
    console.log('now load for new language', languageStore.currentLanguage);

    const url = `https://infinitepoemv1.azurewebsites.net/api/verse?language=${languageStore.currentLanguage}`;
    fetch(url)
      .then(response => response.json())
      .then(response => { 
        console.log('got result:', response);
        return response as string[];
      })
      .then(response => poemStore.verses = response);
  });
}