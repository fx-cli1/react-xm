import { AxiosPromise } from "axios";

interface IService {
    query(params:any):AxiosPromise
}