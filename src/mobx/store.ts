import { makeAutoObservable } from "mobx";


interface ISnus {
    name: string;
    taste: string;
    packs: number;
    nicotine: number;
    saturation: string;
    price: number;
    avatar: string;
    rate: number;
}

interface IUserInfo {
    firstName: string;
    secondName: string;
    phone: number;
    country: string;
    city: string;
    area: string;
    email: string;
    someInfo: string;
}

interface IOrder {
    basket: ISnus[];
    info: IUserInfo[];
}

interface IStore {
    orderList: IOrder[];
}

class Store implements IStore {
    public orderList = [];
    constructor() {
        makeAutoObservable(this);
    }

    setOrders = (orders: never[]): void => {
        this.orderList = orders;
    }
}

export default new Store()