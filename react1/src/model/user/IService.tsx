import { AxiosPromise } from "axios";

interface IService{
    query(params:any):AxiosPromise
    add(data:any):AxiosPromise
    verify(params:any):AxiosPromise
    sent(params:any):AxiosPromise
}

export default  IService