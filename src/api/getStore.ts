import axios from "axios"

interface IResponseItem {
    name: string;
    taste: string;
    packs: number;
    nicotine: number;
    saturation: string;
    price: number;
    avatar: string;
    rate: number;
}

export const getStore = async (): Promise<IResponseItem[]> => {
    const { data } = await axios.get<string>("http://localhost:5000/api/snus");
    const json = JSON.parse(data);
    return json;
}