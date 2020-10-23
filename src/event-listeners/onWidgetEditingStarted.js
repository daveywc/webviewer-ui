import actions from 'actions';
import core from 'core';

export default dispatch => () => {
  dispatch(actions.setCustomElementOverrides('downloadButton', { disabled: true }));
  dispatch(actions.setCustomElementOverrides('printButton', { disabled: true }));

  core.setToolMode(window.Tools.ToolNames.EDIT);
  dispatch(actions.setToolbarGroup('toolbarGroup-View'));
};
