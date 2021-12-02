import React, { useRef, useState ,useEffect} from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import { NavBar, Space, Image, DesenseText } from 'antd-mobile';
import { Upload } from 'antd'
import { SetOutline, RightOutline } from 'antd-mobile-icons';
import {setNavflag} from '../action/navAction'
import Styles from '../css/mine.module.css'
export default function mine(props: any) {
const dispatch = useDispatch()
    


    const content = useSelector((state: any) => state.userReducers.tel);
    const [namevalue, setnamevalue] = useState('NB' + content.substring(7));
    const [demoSrc, setdemoSrc] = useState('https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60');
    const right = (
        <div style={{ fontSize: 18 }}>
            <Space>
                <SetOutline></SetOutline>
            </Space>
        </div>
    )

    const props1: any = {
        showUploadList: false,
        action: '/api/uploads',
        onChange({ file }: any) {
            if (file.status !== 'uploading') {
                if (file.response.code == 1) {
                    setdemoSrc(file.response.url);
                };
            }
        },
    }
    const inputf: any = useRef();

    useEffect(() => {
        // console.log(1);
        dispatch(setNavflag(true));
    }, [])

    const focusfn = (e: any) => {
        let v = e.target.innerText;
        if (v == '修改') {
            inputf.current.disabled = false;
            inputf.current.focus();
            e.target.innerText = '保存';
        } else {
            inputf.current.disabled = true;
            e.target.innerText = '修改';
        }
    }



    return (
        <div className={Styles.mine}>
            <NavBar right={right} backArrow={false} style={{ height: '50px', width: '100%', borderBottom: '1px solid #ccc' }}>
                我的
            </NavBar>
            <div className={Styles.xx}>

                <Upload {...props1}>
                    <Image
                        src={demoSrc}
                        width={64}
                        height={64}
                        fit='cover'
                        style={{ borderRadius: 32 }}
                    />
                </Upload>,
                <div className={Styles.right}>
                    <h2> <DesenseText text={content} desenseText={content.substring(3, -1) + '****' + content.substring(7)} /></h2>
                    <p>昵称：<input type="text" value={namevalue} disabled={true} ref={inputf} onChange={(e) => {
                        setnamevalue(e.target.value)
                    }} /></p>
                    <span onClick={(e) => {
                        focusfn(e);
                    }}>修改</span>
                </div>
            </div>
            <ul className={Styles.fl1}>
                <li><h3>银行卡</h3><p><RightOutline /></p></li>
                <li><h3>交易记录</h3><p><RightOutline /></p></li>
            </ul>
            <ul className={Styles.fl2}>
                <li><h3>推荐分享</h3><p><RightOutline /></p></li>
                <li><h3>意见反馈</h3><p><RightOutline /></p></li>
                <li><h3>在线客服</h3><p><RightOutline /></p></li>
                <li><h3>帮助中心</h3><p><RightOutline /></p></li>
                <li><h3>关于我们</h3><p><RightOutline /></p></li>
            </ul>
        </div>
    )
}
