import axios from "axios";

interface IResult {
    name: string;
    taste: string;
    packs: number;
    nicotine: number;
    saturation: string;
    price: number;
    avatar: string;
    _id: string
}

interface AxiosResponse<T = unknown>  {
    data: T;
    status: number;
    statusText: string;
    headers: unknown;
    config: unknown;
    request?: unknown;
}

export const sendEdit = async (payload: IResult): Promise<AxiosResponse<string>> => {
    return await axios.post<IResult, AxiosResponse<string>>("http://localhost:5000/admin/edit", JSON.stringify(
        {
            method: "POST",
            data: JSON.stringify(payload),
        }),
        {
            headers: {
                "Content-type": "application/json"
            }
        }
    )
}