import actionType from '../action/index';

let userInfo:any={
    tel:''
}

let userReducers=(state=userInfo,action:any)=>{
    switch (action.type){
        case actionType.TEL :
            return {tel:action.playload}
    }
    return state
}


export default userReducers