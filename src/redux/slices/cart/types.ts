export type CartPizzaInterface = {
    id: number;
    name: string;
    about: string;
    imageUrl: string;
    typePizza: string;
    sizePizza: number;
    pricePizza: number;
    count: number;
    index?: number;
}

export type CartInterface = {
    pizzas: CartPizzaInterface[]
    totalCount: number
    totalPrice: number
}