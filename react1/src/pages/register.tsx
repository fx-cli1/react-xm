import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { useState ,useRef} from 'react'
import { useSelector } from 'react-redux';
import { LeftOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import UserService from '../model/user/Service';
import Styles from '../css/login/register.module.css';

let arrflag = [false, false, false];
export default (props: any) => {
    const sjv:any = useRef()
    const [tsflag, settsflag] = useState(false)
    const [flag, setFlag] = useState(false)
    const [pwdzt, setpwdzt] = useState("password");
    const [disabled, setdisabled] = useState(false);
    const [zcflag, setzcflag] = useState(true);
    const [yzmvalue, setyzmvalue] = useState('');
    const [pwdvalue, setpwdvalue] = useState('');
    const [yqmvalue, setyqmvalue] = useState('');
    const [qxchecked, setqxchecked] = useState(false);
    const phone = useSelector((state: any) => state.userReducers.tel);
    function success() {
        Modal.success({
            style: { top: "10%", },
            bodyStyle: { height: '530px' },
            content: `一、【协议的范围】
            1.1【协议适用主体范围】
            本协议是用户（以下可称为“您”）与腾讯之间关于下载、安装、使用、登录本软件，以及使用本服务所订立的协议。 
            1.2【协议关系及冲突条款】
            本协议被视为《腾讯服务协议》及《腾讯QQ软件许可及服务协议》、《QQ号码规则》的补充协议，是其不可分割的组成部分，与其构成统一整体。本协议与上述内容存在冲突的，以本协议为准。本协议内容同时包括腾讯可能不断发布的关于本服务的相 关协议、服务声明、业务规则及公告指引等内容（以下统称为“专项规则”）。专项规则一经正式发布，即为本协议不可分割的组成部分，您同样应当遵守。二、【关于本服务】
            2.1【相关定义】
            （1）腾讯企点软件：指由腾讯开发、运营并享有独立知识产权的，专为市场营销、在线客服、销售管理等需求提供内容制作、内容分发、用户数据分析、用户互动等服务的企业服务软件，以下可简称为“企点”。
            
            （2）单位用户：指按照腾讯指定方式、渠道获得本软件使用权，并对相应的企点帐号（以下可简称为“帐号”，包括单位用户帐号和个人用户帐号）有管理权限的用户。一个企点帐号下仅有一个单位用户帐号。
            
            （3）个人用户：指经过单位用户授权使用本软件的普通用户。单位用户仅可以将本软件的使用权转授权给属于本单位的工作人员或其他协助运营企点账户的人员进行使用，这里称为个人用户。
            
            2.2【本服务内容】
            本服务内容是指，通过本软件可以对腾讯指定产品进行相关操作（例如在本软件中编辑、整理QQ公众号、微信公众号的文字、图片等消息内容并对外发送）的企业服 务（简称“本服务”）。具体产品以腾讯实际指定的为准。用户在使用本服务进行相关操作时，需要遵守相关产品的服务规则 `,
        });
    }

    let changeFlag = (e: any) => {
        if (flag) {
            setpwdzt('password')
        } else {
            setpwdzt('text')
        }
        setFlag(!flag);
    }
    let getyzm = async () => {
        await UserService.sent({ phone });
        let timestamp: any = Date.now() + 1000 * 60;
        let timer1 = setInterval(() => {
            let sj: any = Date.now();
            let s: any = Math.round((timestamp - sj) / 1000);
            if (s <= 0) {
                // sjv.current.innerText='获取验证码';
                clearInterval(timer1);
            }
            sjv.current.innerText=s+'s';
        }, 1000)
        // console.log(timestamp);
        let timer = setTimeout(() => {
            settsflag(true)
        }, 5000);
        setdisabled(!disabled);
    }
    let yzmfn = (v: any) => {
        setyzmvalue(v);
        let reg = /^[0-9]{4}$/
        if (reg.test(v)) {
            arrflag[0] = true;
            yz()
        } else {
            arrflag[0] = false
        }
    }
    let pwdfn = (v: any) => {
        setpwdvalue(v);
        let reg = /^[0-9a-z]{6,12}$/i
        if (reg.test(v)) {
            arrflag[1] = true
            yz()
        } else {
            arrflag[1] = false
        }
    }
    let checkedfn = (flag: any) => {
        setqxchecked(flag);
        arrflag[2] = flag;
        yz()
    }

    let yz = () => {
        let zt = arrflag.every((item: any) => item);
        setzcflag(!zt);
    }

    let zc = async () => {
        let { data } = await UserService.verify({ phone, captcha: yzmvalue })
        if (data.data) {
            let res=await UserService.add({
                tel:phone,
                username:'NB'+phone.substring(7),
                userpwd:pwdvalue
            })
            console.log(res);
           props.history.push('/login');
        }
    }
    let gotologin = () => {
        props.history.push('/login');
    }

    return (
        <div className={Styles.register}>
            <div className={Styles.nav}>
                <LeftOutlined width={"10em"} height={"10em"} onClick={()=>{
                    props.history.push('/loginstart')
                }} />
                <h3>注册</h3>
            </div>
            {tsflag ? <h3 className={Styles.h3}>验证码已发送至手机号：{phone}</h3> : ''}
            <ul className={Styles.form}>
                <li className={Styles.yzm}><input type='text' placeholder='请输入验证码' maxLength={4} value={yzmvalue} onChange={(e) => {
                    yzmfn(e.target.value);
                }}></input><Button type='primary' style={{ height: '100%' }} disabled={disabled} onClick={() => {
                    getyzm();
                }}><span ref={sjv}>获取验证码</span></Button></li>
                <li className={Styles.pwd}><input type={pwdzt} placeholder='请输入密码(6-12位)' value={pwdvalue} onChange={(e) => {
                    pwdfn(e.target.value)
                }} /><button onClick={(e) => {
                    changeFlag(e)
                }}>{flag ? <EyeTwoTone /> : <EyeInvisibleOutlined />}</button></li>
                <li className={Styles.yqm}><input placeholder='请填写邀请码(选填)' value={yqmvalue} onChange={(e) => {
                    setyqmvalue(e.target.value)
                }}></input></li>
                <li className={Styles.yhxy}><input type="Checkbox" checked={qxchecked} onChange={(e) => {
                    checkedfn(e.target.checked)

                }} /><p>继续表示您已同意</p><span onClick={() => {
                    success()
                }}>《用户服务协议》</span></li>
                <li className={Styles.zc}><Button type='primary' style={{ height: "100%" }} block={true} disabled={zcflag} onClick={() => {
                    zc()
                }}>注册</Button></li>
                <li className={Styles.tzdl} onClick={() => {
                    gotologin()
                }}>已有账号?，点击前往登录</li>
            </ul>

        </div>
    );
};
