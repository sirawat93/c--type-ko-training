import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actionTypes/modalActionTypes';

const modalActions = {
  focusSearch() {
    dispatcher.dispatch({
      type: actionTypes.FOCUS_SEARCH,
    });
  },

  unFocusSearch() {
    dispatcher.dispatch({
      type: actionTypes.UNFOCUS_SEARCH,
    });
  },

  openModalloading() {
    dispatcher.dispatch({
      type: actionTypes.OPEN_MODAL_LOADING,
    });
  },

  closeModalloading() {
    dispatcher.dispatch({
      type: actionTypes.CLOSEE_MODAL_LOADING,
    });
  }
};

export default modalActions;
