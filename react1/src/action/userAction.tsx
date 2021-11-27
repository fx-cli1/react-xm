import actionType from './index'

let setTel=(playload:any)=>{
    return {
        type:actionType.TEL,
        playload
    }
}

export {setTel}