import axios from "axios";

export const fetchNutrientsByBarCode = async ( upc_code ) => {

        const URI = `https://api.edamam.com`;
        const endpoint = `/api/food-database/v2/parser`;

        try {

             const response = await axios.get(`${ URI }${ endpoint }`,{
                     params:{
                             app_id: `61cfb2f7`,
                             app_key: `708d13ed4fbe9a0281610a7b0db21d50`,
                             upc: upc_code
                     }
             } );
             console.log( response.data.hints[0].food.nutrients );

        } catch( err ){
                console.log( err );
        }
};