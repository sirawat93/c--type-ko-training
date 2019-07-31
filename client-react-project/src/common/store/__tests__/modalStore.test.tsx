import modalActions from '../../actions/modalActions';
import modalStore from '../../store/modalStore';

describe ('/modalStore tests',()=>{
    it('should return correct boolean if search is on/off focus', () => {
        expect(modalStore.getIsSearchFocus()).toEqual(false);
        modalActions.focusSearch();
        expect(modalStore.getIsSearchFocus()).toEqual(true);
        modalActions.unFocusSearch();
        expect(modalStore.getIsSearchFocus()).toEqual(false);
    });

    it('should return correct boolean when modal\'s page open or close', () => {
        expect(modalStore.getIsModalLoading()).toEqual(false);
        modalActions.openModalloading();
        expect(modalStore.getIsModalLoading()).toEqual(true);
        modalActions.closeModalloading();
        expect(modalStore.getIsModalLoading()).toEqual(false);
    });
});