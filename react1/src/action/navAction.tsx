import actionType from './index'

let setNavflag=(playload:any)=>{
    return {
        type:actionType.NAVFLAG,
        playload
    }
}

export {setNavflag}