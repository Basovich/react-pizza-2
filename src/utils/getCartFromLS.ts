import { CartInterface, CartPizzaInterface } from "../redux/slices/cart/types";

export const getCartFromLS = (): CartInterface => {
    const data = localStorage.getItem('pizzas');
    
    return data 
        ? JSON.parse(data) 
        : {
            pizzas: [] as CartPizzaInterface[],
            totalCount: 0,
            totalPrice: 0,
        }
}