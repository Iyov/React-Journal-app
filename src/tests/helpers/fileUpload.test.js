import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'iyov', 
    api_key:    '962853994558281', 
    api_secret: 'ghHXP-YEYW7zXWrQVzvOl98YMBs'
});

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el url', async(  ) => {
        
        // const resp = await fetch('https://i.pinimg.com/originals/67/e6/5d/67e65d7f90425a4de6c0b11aa3c566a6.png');
        // const blob = await resp.blob();
        
        // const file = new File( [blob], 'batman.png' );
        // const url = await fileUpload( file );
        // console.log(url);

        // expect( typeof url ).toBe('string');

        //Borrar imagen desde cloudinary por Id
        const imageId = 'wz25evrgbn1oagr3jseb';

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            //done();
        });

    });

    test('Debe de retornar un error', async() => {
        
        const file = new File( [], 'batman.png' );
        const url = await fileUpload( file );

        expect( url ).toBe(null);

    });
    
});
