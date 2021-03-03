import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { types } from "../../types/types";
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones con Auth', () => {

    beforeEach( () => {
        store = mockStore(initState);
    });

    test('login y logout deben de crear la acción respectiva', () => {
        
        const uid = '123';
        const displayName = 'Francisco';

        const loginAction = login(uid, displayName);
        expect( loginAction ).toEqual({
            type: types.login,
            payload: {
                uid: uid,
                displayName: displayName
            }
        });

        const logoutAction = logout();
        expect( logoutAction ).toEqual({
            type: types.logout
        });

    });

    test('Debe de realizar el startLogout', async() => {
        
        await store.dispatch( startLogout() );

        const actions = store.getActions();
        // console.log(actions);

        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });

    });

    test('debe de iniciar el startLoginEmailPassword', async() => {
        
        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456') );
        const actions = store.getActions();
        // console.log(actions);

        expect( actions[0] ).toEqual({ type: types.uiStartLoading });
        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: 'A0DzvBlvcPaHeqD7ffaWd03Smio2',
                displayName: null
            }
        });
        expect( actions[2] ).toEqual({ type: types.uiFinishLoading });

    });
    
});
