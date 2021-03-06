import Axios from 'axios'
const initState = {
    listCart : [],
    listCartUser : [],
    listOrder:[],
    listItemOrder:[],
    listAllOrder:[]
}   
const users = JSON.parse(localStorage.getItem('logon'))
const urlCart =process.env.REACT_APP_CARTS
const urlOrder =process.env.REACT_APP_ORDERS



const CartReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'showListCart':
            {
                return {
                    ...state,
                    listCart: action.listCart
                }
            } 
        case 'showListCartUser':
            {
                return {
                    ...state,
                    listCartUser: action.listCart
                }
            }
        case 'showListOrder':
            {
                return {
                    ...state,
                    listOrder: action.listOrder
                }
            }
        case 'showListItemOrder':
            {
                return {
                    ...state,
                    listItemOrder: action.listOrder
                }
            }
        case 'showListAllOrder':
                {
                    return {
                        ...state,
                        listAllOrder: action.listOrder
                    }
                }
        case 'addToCart':
            let newCart = [...state.listCart]
            action.item.count=action.count
            let userCart = newCart.find(user=>user.idUser==users.id);
            if(userCart){
                let findItem = userCart.itemselected.find(items=>items.id==action.item.id);
                findItem? findItem.count+=action.count : userCart.itemselected.push(action.item);
                Axios.put(urlCart+"/"+userCart.id,userCart)
            }
            else{
                Axios.post(urlCart,{idUser:users.id,itemselected:[action.item]})
            }
            return {
                ...state,
                listCartUser: userCart,     
            }
            
        case 'deleteItemCart':
            let newCart2 = [...state.listCartUser]
            let index = newCart2.findIndex(item=>item.id==action.id)
            newCart2.splice(index,1)
            let userCart2 = state.listCart.find(user=>user.idUser==users.id);
            Axios.put(urlCart+"/"+userCart2.id,{
              idUser:users.id,
              itemselected:newCart2,
              id:userCart2.id
            })
            return {
                ...state,
                listCartUser: newCart2
            }
            
        case 'deleteCart':
            let newCart3 = action.listCart
            newCart3.splice(0)
            let userCart3 = state.listCart.find(user=>user.idUser==users.id);
            Axios.put(urlCart+"/"+userCart3.id,
                {
                    idUser:users.id,
                    itemselected:newCart3,
                    id:userCart3.id
                })                
                return {
                    ...state,
                    listCartUser: newCart3
                }
        case 'addToOrder':
            const newListOrder = [...state.listOrder]
            const allListOrder = [...state.listAllOrder]
            console.log(allListOrder)
            const newOrder = {idUser:users.id,idOrder:allListOrder.length+1,status:"chờ xác nhận",time:action.day,item:action.listItem}
            Axios.post(urlOrder,newOrder)
            newListOrder.push(newOrder)
            return{
                ...state,
                listOrder:newListOrder
            }
        case 'conFirmOrder':
            const newListAllOrder = [...state.listAllOrder]
            const findOrder = newListAllOrder.find(item=>item.idOrder==action.idOrder)
            if(findOrder) findOrder.status = 'đã xác nhận'
            Axios.put(urlOrder+"/"+action.idOrder,findOrder)
            return{
                ...state,
                listAllOrder:newListAllOrder
            }
        default: 
           return {...state}
    }
}
export default CartReducer