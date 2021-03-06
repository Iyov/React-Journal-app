import { types } from "../../types/types";


describe('Pruebas en types.js', () => {
    
    test('Debe de tener estos tipos', () => {
        const tipos = types;
        expect( tipos ).toEqual({

            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
        
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load note',
            notesUpdated: '[Notes] Updated note',
            notesFileUrl: '[Notes] Updated image note',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
            
        });
    });
    
});
