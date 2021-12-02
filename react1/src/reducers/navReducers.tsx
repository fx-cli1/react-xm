import actionType from '../action/index';
let navReducers=(state={navflag:false},action:any)=>{
    // console.log(2); 
    switch (action.type){
        case actionType.NAVFLAG :
            return {navflag:action.playload}
    }
    return state
}
export default navReducers