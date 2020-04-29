/**
 * Set the language of WebViewer UI.
 * @method WebViewerInstance#setLanguage
 * @param {string} language The language WebViewer UI will use. By default, following languages are supported: en, zh_cn, fr.
 * @example
WebViewer(...)
  .then(function(instance) {
    instance.setLanguage('fr'); // set the language to French
  });
 */

import i18next from 'i18next';
import setDatePickerLocale from './setDatePickerLocale';

export default language => {
  const promise = i18next.changeLanguage(language);
  setDatePickerLocale(promise);
};
