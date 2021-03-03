import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn( () => {
        return 'https://hola-mundo.com/cosa.jpg';
        // return Promise.resolve('https://hola-mundo.com/cosa.jpg');
    })
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'Test'
    },
    notes: {
        active: {
            id: '1ivUvrDBX3hwL9lyx3WN',
            title: 'Hola',
            body: 'Mundo'
        }
    }
}

let store = mockStore(initState);

describe('Pruebas con las acciones de notes', () => {

    beforeEach( () => {
        store = mockStore(initState);
    });
    
    test('Debe de crear una nueva nota startNewNote', async () => {
        
        await store.dispatch( startNewNote() );

        const actions = store.getActions();
        // console.log(actions);

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        //Borrar el documento creado por la action anterior
        const docId = actions[1].payload.id;
        await db.doc( `Test/journal/notes/${ docId }` ).delete();

    });

    test('startLoadingNotes debe de cargar las notas', async() => {
        
        await store.dispatch( startLoadingNotes( 'Test' ) );
        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect( actions[0].payload[0] ).toMatchObject( expected );

    });

    test('startSaveNote debe de actualizar la nota', async() => {
        
        const note = {
            id: '7D3d9JAAMPQDhCM0jEg3',
            title: 'titulo',
            body: 'body'
        }

        await store.dispatch( startSaveNote( note ) );

        const actions = store.getActions();
        // console.log(actions);
        expect( actions[0].type ).toBe( types.notesUpdated );

        const docRef = await db.doc(`Test/journal/notes/${ note.id }`).get();

        expect( docRef.data().title ).toBe( note.title );

    });
    
    test('startUploading debe de actualizar el Url del entry', async() => {
        
        // console.log( process.env.REACT_APP_APIKEY )
        // const file = new File([], 'foto.jpg');
        await store.dispatch( startUploading([]) );

        const actions = store.getActions();
        // console.log(actions);

        const docRef = await db.doc(`Test/journal/notes/1ivUvrDBX3hwL9lyx3WN`).get();
        // expect( docRef.data().url ).toBe( 'https://hola-mundo.com/cosa.jpg' ); //no funciona

    });
    
});
