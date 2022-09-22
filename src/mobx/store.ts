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

interface ISnusListItem {
    name: string;
    taste: string;
    packs: number;
    nicotine: number;
    saturation: string;
    price: number;
    avatar: string;
    rate: number;
}

interface IStore {
    orderList: IOrder[];
    snusList: ISnusListItem[];
    isStoreLoading: boolean;
}

class Store implements IStore {
    public orderList: IOrder[] | never[] = [];
    public snusList: ISnusListItem[] | never[] = [];
    public isStoreLoading: boolean = true;


    constructor() {
        makeAutoObservable(this);
    }

    public setOrders = (orders: IOrder[]): void => {
        this.orderList = orders;
    }

    public setSnusStore = (store: ISnusListItem[]): void => {
        this.snusList = store;
    }

    public setStoreLoading = (isLoading: boolean): void => {
        this.isStoreLoading = isLoading;
    }
}

export default new Store()