/**
 * Sets a panel to be active in the leftPanel element. Note that this API does not include opening the leftPanel.
 * @method UI.setActiveLeftPanel
 * @param {string} dataElement Name of the panel to be active in leftPanel. Default WebViewer UI has three panel options: thumbnailsPanel, outlinesPanel and notesPanel.
 * @example
WebViewer(...)
  .then(function(instance) {
    // open left panel
    instance.UI.openElements([ 'leftPanel' ]);
    // view outlines panel
    instance.UI.setActiveLeftPanel('outlinesPanel');
 */

import actions from 'actions';

export default (store) => (headerGroup) => {
  store.dispatch(actions.setActiveLeftPanel(headerGroup));
};