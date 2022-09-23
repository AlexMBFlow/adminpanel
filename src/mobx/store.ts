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
    _id: string
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

interface ISnusListItem {
    name: string;
    taste: string;
    packs: number;
    nicotine: number;
    saturation: string;
    price: number;
    avatar: string;
    rate: number;
    _id: string;
}

interface IOrder {
    basket: ISnusListItem[];
    info: IUserInfo[];
}

interface IStore {
    orderList: IOrder[];
    snusList: ISnusListItem[];
    isStoreLoading: boolean;
    inputFilterValue: string;
}

class Store implements IStore {
    public orderList: IOrder[] = [];
    public snusList: ISnusListItem[] = [];
    //public snusListFiltered: ISnusListItem[] = []
    public isStoreLoading: boolean = true;
    public inputFilterValue: string = "";

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

    public setResultAfterEditing = (snus: ISnus): void => {
        let index = this.snusList.findIndex(element => element._id === snus._id ? true : false);
        this.snusList[index] = snus;
    }

    public filteredStore = (): ISnusListItem[] => {
        const filteredArray = this.snusList.filter(el => {
            let regExp = new RegExp(this.inputFilterValue, "gi");
            //debugger
            if (!!this.inputFilterValue) {
                return regExp.test(el.name) || regExp.test(el.taste)
            } else {
                return true
            }
        })
        return filteredArray
    }

    public setFilterValue = (value: string): void => {
        this.inputFilterValue = value;
        //this.filteredStore()
    }
}

export default new Store()