export const fetchProduct = () =>{
    return async dispatch =>{
            let string ='http://localhost:4000/product?';
            try {
                const request = string;
                const response = await fetch(request);
                const responseJson = await response.json();
                dispatch( showListProduct(responseJson) )   
            } catch (error) {
                alert('Error: '+error.message);
                
            }
        }
             
}
export const showListProduct = listProduct => {
    return {
        type: 'showListProduct',
        listProduct,
        
    }
}