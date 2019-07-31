import { EventEmitter } from 'events';
import actionTypes from '../actionTypes/modalActionTypes';
import dispatcher from '../dispatcher/dispatcher';

let isSearchFocus = false;
let isModalLoading = false;
const CHANGE = 'CHANGE';

class modalStore extends EventEmitter {

  constructor() {
    super();
    dispatcher.register(this.reduce.bind(this));
  }

  getIsSearchFocus(): boolean {
    return isSearchFocus;
  }
  getIsModalLoading(): boolean {
    return isModalLoading;
  }
  
	addChangeListener(callback) {
		this.on(CHANGE, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE, callback);
	}

  reduce(action) {
    switch (action.type) {
      case actionTypes.FOCUS_SEARCH:
        isSearchFocus = true; break;
      case actionTypes.UNFOCUS_SEARCH:
         isSearchFocus = false; break;
      case actionTypes.OPEN_MODAL_LOADING:
         isModalLoading = true; break;
      case actionTypes.CLOSEE_MODAL_LOADING:
         isModalLoading = false; break;
      default: break;
    }
    this.emit(CHANGE);
  }
}

export default new modalStore();
