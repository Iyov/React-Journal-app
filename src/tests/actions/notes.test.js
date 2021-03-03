import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'Test'
    }
});

jest.setTimeout(1000 * 10);

describe('Pruebas con las acciones de notes', () => {
    
    test('Debe de crear una nueva nota startNewNote', async () => {
        
        await store.dispatch( startNewNote() )
            // .then( (res) => {
            //     console.log('Resultado: ', res)
            // })
            // .catch( (e) => console.log('Error: ', e) )

    });
    
});

