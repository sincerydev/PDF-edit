import * as eventListeners from 'src/event-listeners';
import hotkeysManager from 'helpers/hotkeysManager';
import core from 'core';
const { ToolNames } = window.Tools;

export default store => {
  const { dispatch } = store;
  const onBeforeDocumentLoaded = eventListeners.onBeforeDocumentLoaded(dispatch);
  const onCheckStampAnnotationAdded = eventListeners.onCheckStampAnnotationAdded(dispatch);
  const onCrossStampAnnotationAdded = eventListeners.onCrossStampAnnotationAdded(dispatch);
  const onDisplayModeUpdated = eventListeners.onDisplayModeUpdated(dispatch);
  const onDocumentLoaded = eventListeners.onDocumentLoaded(store);
  const onDocumentUnloaded = eventListeners.onDocumentUnloaded(dispatch);
  const onFitModeUpdated = eventListeners.onFitModeUpdated(dispatch);
  const onRotationUpdated = eventListeners.onRotationUpdated(dispatch);
  const onToolUpdated = eventListeners.onToolUpdated(dispatch);
  const onToolModeUpdated = eventListeners.onToolModeUpdated(dispatch);
  const onZoomUpdated = eventListeners.onZoomUpdated(dispatch);
  const onPageNumberUpdated = eventListeners.onPageNumberUpdated(dispatch);
  const onUpdateAnnotationPermission = eventListeners.onUpdateAnnotationPermission(store);
  const onAnnotationChanged = eventListeners.onAnnotationChanged(dispatch);
  const onStampAnnotationAdded = eventListeners.onStampAnnotationAdded(dispatch);
  const onSignatureAnnotationAdded = eventListeners.onSignatureAnnotationAdded(dispatch);
  const onStickyAnnotationAdded = eventListeners.onStickyAnnotationAdded(store);
  const onFullScreenChange = eventListeners.onFullScreenChange(store);
  const onLayoutChanged = eventListeners.onLayoutChanged(dispatch);
  const onLocationSelected = eventListeners.onLocationSelected(store);
  const onDotStampAnnotationAdded = eventListeners.onDotStampAnnotationAdded(dispatch);
  const onRubberStampAnnotationAdded = eventListeners.onRubberStampAnnotationAdded(dispatch);
  const onPageComplete = eventListeners.onPageComplete(store);
  const onFileAttachmentAnnotationAdded = eventListeners.onFileAttachmentAnnotationAdded(dispatch);
  const onFileAttachmentDataAvailable = eventListeners.onFileAttachmentDataAvailable(dispatch);
  const onSignatureSaved = eventListeners.onSignatureSaved(dispatch, store);
  const onSignatureDeleted = eventListeners.onSignatureDeleted(dispatch, store);
  const onHistoryChanged = eventListeners.onHistoryChanged(dispatch, store);
  const onFormFieldCreationModeStarted = eventListeners.onFormFieldCreationModeStarted(dispatch);
  const onFormFieldCreationModeEnded = eventListeners.onFormFieldCreationModeEnded(dispatch);
  const onDigitalSignatureAvailable = eventListeners.onDigitalSignatureAvailable(dispatch);

  return {
    addEventHandlers: () => {
      core.addEventListener('beforeDocumentLoaded', onBeforeDocumentLoaded);
      core.addEventListener('beforeDocumentLoaded', onBeforeDocumentLoaded);
      core.addEventListener('displayModeUpdated', onDisplayModeUpdated);
      core.addEventListener('documentLoaded', onDocumentLoaded);
      core.addEventListener('documentUnloaded', onDocumentUnloaded);
      core.addEventListener('fitModeUpdated', onFitModeUpdated);
      core.addEventListener('rotationUpdated', onRotationUpdated);
      core.addEventListener('toolUpdated', onToolUpdated);
      core.addEventListener('toolModeUpdated', onToolModeUpdated);
      core.addEventListener('zoomUpdated', onZoomUpdated);
      core.addEventListener('pageNumberUpdated', onPageNumberUpdated);
      core.addEventListener('layoutChanged', onLayoutChanged);
      core.addEventListener('updateAnnotationPermission', onUpdateAnnotationPermission);
      core.addEventListener('annotationChanged', onAnnotationChanged);
      core.addEventListener('historyChanged', onHistoryChanged);
      core.addEventListener('pageComplete', onPageComplete);
      core.addEventListener('fileAttachmentDataAvailable', onFileAttachmentDataAvailable);
      core.addEventListener('formFieldCreationModeStarted', onFormFieldCreationModeStarted);
      core.addEventListener('formFieldCreationModeEnded', onFormFieldCreationModeEnded);
      core.addEventListener('digitalSignatureAvailable', onDigitalSignatureAvailable);
      core.getTool('AnnotationCreateStamp').addEventListener('annotationAdded', onStampAnnotationAdded);
      core.getTool('AnnotationCreateSticky').addEventListener('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSticky2').addEventListener('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSticky3').addEventListener('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSticky4').addEventListener('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSignature').addEventListener('locationSelected', onLocationSelected);
      core.getTool('AnnotationCreateSignature').addEventListener('annotationAdded', onSignatureAnnotationAdded);
      core.getTool('AnnotationCreateSignature').addEventListener('signatureSaved', onSignatureSaved);
      core.getTool('AnnotationCreateSignature').addEventListener('signatureDeleted', onSignatureDeleted);
      core.getTool(ToolNames.FORM_FILL_DOT).addEventListener('annotationAdded', onDotStampAnnotationAdded);
      core.getTool('AnnotationCreateRubberStamp').addEventListener('annotationAdded', onRubberStampAnnotationAdded);
      core.getTool('AnnotationCreateFileAttachment').addEventListener('annotationAdded', onFileAttachmentAnnotationAdded);
      core.getTool(ToolNames.FORM_FILL_CROSS).addEventListener('annotationAdded', onCrossStampAnnotationAdded);
      core.getTool(ToolNames.FORM_FILL_CHECKMARK).addEventListener('annotationAdded', onCheckStampAnnotationAdded);
      hotkeysManager.initialize(store);
      document.addEventListener('fullscreenchange', onFullScreenChange);
      document.addEventListener('mozfullscreenchange', onFullScreenChange);
      document.addEventListener('webkitfullscreenchange', onFullScreenChange);
      document.addEventListener('MSFullscreenChange', onFullScreenChange);
    },
    removeEventHandlers: () => {
      core.removeEventListener('beforeDocumentLoaded', onBeforeDocumentLoaded);
      core.removeEventListener('displayModeUpdated', onDisplayModeUpdated);
      core.removeEventListener('documentLoaded', onDocumentLoaded);
      core.removeEventListener('documentUnloaded', onDocumentUnloaded);
      core.removeEventListener('fitModeUpdated', onFitModeUpdated);
      core.removeEventListener('rotationUpdated', onRotationUpdated);
      core.removeEventListener('toolUpdated', onToolUpdated);
      core.removeEventListener('toolModeUpdated', onToolModeUpdated);
      core.removeEventListener('zoomUpdated', onZoomUpdated);
      core.removeEventListener('pageNumberUpdated', onPageNumberUpdated);
      core.removeEventListener('layoutChanged', onLayoutChanged);
      core.removeEventListener('updateAnnotationPermission', onUpdateAnnotationPermission);
      core.removeEventListener('annotationChanged', onAnnotationChanged);
      core.removeEventListener('pageComplete', onPageComplete);
      core.removeEventListener('fileAttachmentDataAvailable', onFileAttachmentDataAvailable);
      core.removeEventListener('formFieldCreationModeStarted', onFormFieldCreationModeStarted);
      core.removeEventListener('formFieldCreationModeEnded', onFormFieldCreationModeEnded);
      core.removeEventListener('digitalSignatureAvailable', onDigitalSignatureAvailable);
      core.getTool('AnnotationCreateStamp').removeEventListener('annotationAdded', onStampAnnotationAdded);
      core.getTool('AnnotationCreateSticky').removeEventListener('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSticky2').removeEventListener('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSticky3').removeEventListener('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSticky4').removeEventListener('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSignature').removeEventListener('locationSelected', onLocationSelected);
      core.getTool(ToolNames.FORM_FILL_DOT).removeEventListener('annotationAdded', onDotStampAnnotationAdded);
      core.getTool('AnnotationCreateRubberStamp').removeEventListener('annotationAdded', onRubberStampAnnotationAdded);
      core.getTool('AnnotationCreateFileAttachment').removeEventListener('annotationAdded', onFileAttachmentAnnotationAdded);
      core.getTool(ToolNames.FORM_FILL_CROSS).removeEventListener('annotationAdded', onCrossStampAnnotationAdded);
      core.getTool(ToolNames.FORM_FILL_CHECKMARK).removeEventListener('annotationAdded', onCheckStampAnnotationAdded);
      hotkeysManager.off();
      document.removeEventListener('fullscreenchange', onFullScreenChange);
      document.removeEventListener('mozfullscreenchange', onFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
      document.removeEventListener('MSFullscreenChange', onFullScreenChange);
    },
  };
};