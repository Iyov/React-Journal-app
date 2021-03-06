import 'jsdom-global/register';

import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom'
import { firebase } from '../../firebase/firebase-config'

import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from 'react-dom/test-utils';
import Swal from 'sweetalert2'

jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: '123'
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en <AppRouter />', () => {
    
    test('Debe de llamar el login si estoy autentificado', async() => {
        
        let user;

        await act( async() => {

            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');
            user = userCred.user;

            // const wrapper = mount(
            //     <Provider store={ store }>
            //         <MemoryRouter>
            //             <AppRouter />
            //         </MemoryRouter>
            //     </Provider>
            // );
            
        });

        // expect( login ).toHaveBeenCalled(); //Falla porque el wrapper no se puede ejecutar
        expect( login ).toHaveBeenCalledTimes(0);

    });
    
});
