export type PizzaInterface = {
    id: number;
    name: string;
    about: string;
    imageUrl: string;
    types: string[];
    sizes: number[];
    category: number;
    popular: number;
    price: number;
    prices: Record<string, number[]>;
}

export type PizzasInterface = {
    pizzas: PizzaInterface[];
    status: Status;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}