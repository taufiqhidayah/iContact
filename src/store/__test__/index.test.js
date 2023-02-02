import store from '../index';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

describe('Store', () => {
    it('should be created using createStore', () => {
        expect(store).toBeInstanceOf(createStore);
    });

    it('should have rootReducer', () => {
        expect(store.getState().reducer).toBe(rootReducer);
    });

    it('should have thunk middleware', () => {
        const middleware = store._getMiddleware();
        const hasThunk = middleware.some(
            mw => mw.name === 'thunkMiddleware' && mw.middleware === thunk
        );
        expect(hasThunk).toBe(true);
    });
});