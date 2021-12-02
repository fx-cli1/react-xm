import axios from '../axios'
import { AxiosPromise } from "axios";
import IService from "./Iservice";
class Service implements IService{
    query(params:any):AxiosPromise{
        return axios({
            
        })
    }
}