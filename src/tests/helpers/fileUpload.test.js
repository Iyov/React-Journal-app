import { fileUpload } from "../../helpers/fileUpload";

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el url', async() => {
        const resp = await fetch('https://i.pinimg.com/originals/67/e6/5d/67e65d7f90425a4de6c0b11aa3c566a6.png');
        const blob = await resp.blob();
        
        const file = new File( [blob], 'batman.png' );
        const url = await fileUpload( file );
        console.log(url);

    });
    
});
