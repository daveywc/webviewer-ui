import actions from 'actions';

export default dispatch => () => {
  dispatch(actions.setDocumentLoaded(false));
  dispatch(actions.closeElements([ 'pageNavOverlay', 'searchOverlay', 'leftPanel', 'PagePreviousOverlay', 'PageNextOverlay' ]));
  dispatch(actions.setOutlines([]));
  dispatch(actions.setTotalPages(0));
};