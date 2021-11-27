import IService from "./IService";

import axios from "../axios";
import { AxiosPromise } from "axios";

class Service implements IService{
    query(params:any):AxiosPromise{
        return axios({
            method:'get',
            url:'/api/users/loginstart',
            params
        })
    }
    add(data:any):AxiosPromise{
        return axios({
            method:'post',
            url:'/apo/users/add',
            data
        })
    }
}

export default new Service();