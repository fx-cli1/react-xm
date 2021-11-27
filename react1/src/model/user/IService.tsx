import { AxiosPromise } from "axios";

interface IService{
    query(params:any):AxiosPromise
    add(data:any):AxiosPromise
}

export default  IService