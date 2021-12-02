import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { Input ,Button} from 'antd'
import  styles from '../css/login/loginstart.module.css';
import UserService from '../model/user/Service';
import {setTel} from '../action/userAction'
export default function LoginStart(props:any) {
    // console.log(style);
    
    const [tel, settel] = useState('');
    const [flag, setflag] = useState(true)
    const dispatch = useDispatch()
    let changetel=(v:any)=>{
        let reg=/^1[3-9][0-9]{9}$/
        settel(v);
        if(reg.test(v)){
            setflag(false)  
        }else{
            setflag(true)  
        }
    }
    let login=async()=>{
         let {data}=await UserService.query({tel});
         console.log(data);
         window.localStorage.setItem('tel',tel);
         dispatch(setTel(tel));
         if(data.code){
             props.history.push('/userlogin');
         }else{
             props.history.push('/register');
         }
    }
    return (
        <div className={styles.loginstart}>
            <h2>输入手机号</h2>
            <div className={styles.startinput}>
            <Input placeholder="+86   请输入手机号" bordered={false} value={tel} onChange={(e)=>{
                changetel(e.target.value)
            }}/>
            </div>
           <div className={styles.loginstartbtn}>
               <Button type='primary' block={true} disabled={flag} size='large' style={{height:'100%'}} onClick={()=>{
                   login()
               }}>确定</Button>
           </div>
        </div>
    )
}
