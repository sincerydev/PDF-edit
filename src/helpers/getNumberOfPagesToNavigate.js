import core from 'core';

export default (documentViewerKey = 1) => {
  const mapDisplayModeToNumberOfPages = {
    Single: 1,
    Continuous: 1,
    Facing: 2,
    FacingContinuous: 2,
    CoverFacing: 2,
    Cover: 2,
  };

  return mapDisplayModeToNumberOfPages[core.getDisplayMode(documentViewerKey)] || 1;
};
