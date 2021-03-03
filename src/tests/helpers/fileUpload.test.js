import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'iyov', 
    api_key:    '962853994558281', 
    api_secret: 'ghHXP-YEYW7zXWrQVzvOl98YMBs'
});

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el url', async(  ) => {
        
        // const img = 'https://ichef.bbci.co.uk/news/410/cpsprodpb/113AC/production/_113427507_solar_orbiter_eui-fullsun01.jpg';
        // const resp = await fetch(img);
        // const blob = await resp.blob();
        
        // const file = new File( [blob], 'foto.png' );
        // const url = await fileUpload( file );
        // console.log(url);

        // expect( typeof url ).toBe('string');

        // //Borrar imagen desde cloudinary por Id
        // const segments = url.split('/');
        // const imgId = segments[segments.length-1].split('.')[0];

        // cloudinary.v2.api.delete_resources(imageId, {}, () => {
        //     console.log(`Este es el ID: ${imgId}`);
        //     // done();
        // });

    }); //, 40000

    test('Debe de retornar un error', async() => {
        
        // const file = new File( [], 'batman.png' );
        // const url = await fileUpload( file );

        // expect( url ).toBe(null);

    });
    
});
