export const fetchCart = () =>{
    return async dispatch =>{
            let string ='http://localhost:4000/cart?';
            try {
                const request = string;
                const response = await fetch(request);
                const responseJson = await response.json();
                dispatch( showListCart(responseJson) )   
            } catch (error) {
                alert('Error: '+error.message);
                
            }
        }
             
}
export const showListCart = listCart => {
    return {
        type: 'showListCart',
        listCart,
        
    }
}