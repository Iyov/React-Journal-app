import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en reducer authReducer', () => {
    
    test('Debe de realizar el login', () => {
        
        const user = {
            uid: '123',
            displayName: 'Francisco'
        }

        const action = {
            type: types.login,
            payload: user
        }
        const state = authReducer( {}, action );

        expect( state ).toEqual( {
            uid: user.uid,
            name: user.displayName
        } );
        
    });

    test('Debe de realizar el logout', () => {
        
        const initState = {
            uid: '123',
            name: 'Francisco'
        }
        const action = {
            type: types.logout,
            payload: null
        }
        const state = authReducer( initState, action );

        expect( state ).toEqual( {} );

    });

    test('Debe de retornar el state en default', () => {
        
        const state = authReducer( {}, {} );

        expect( state ).toEqual( {} );

    });
    
});
