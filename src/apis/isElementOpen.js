/**
 * Returns whether the element is open.
 * @method UI.isElementOpen
 * @param {string} dataElement data-element attribute value for a DOM element. To find data-element of a DOM element, refer to <a href='https://docs.apryse.com/documentation/web/guides/hiding-elements/#finding-dataelement-attribute-values' target='_blank'>Finding data-element attribute values</a>.
 * @returns {boolean} Whether the element is open.
 * @example
WebViewer(...)
  .then(function(instance) {
    console.log(instance.UI.isElementOpen('leftPanel'));
  });
 */

import selectors from 'selectors';

export default (store) => (dataElement) => !!selectors.isElementOpen(store.getState(), dataElement);
