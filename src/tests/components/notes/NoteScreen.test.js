import 'jsdom-global/register';

import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '123',
        name: 'Francisco'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: '123456',
            title: 'Hola',
            body: 'Mundo',
            date: 0
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <NoteScreen />
    </Provider>
);


describe('Pruebas en <NoteScreen />', () => {
    
    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de disparar el active note', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        });
        expect( activeNote ).toHaveBeenCalled();
        expect( activeNote ).toHaveBeenLastCalledWith(
            '123456',
            {
                id: '123456',
                body: 'Mundo',
                title: 'Hola de nuevo',
                date: 0
            }
        );
    });
    
});
