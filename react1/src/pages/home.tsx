import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import Styles from '../css/home.module.css';
import { Carousel, PageHeader, Alert } from 'antd';
import { TextLoop } from 'react-text-loop-next';
import {setNavflag} from '../action/navAction'
// import Marquee from 'react-fast-marquee';
export default (props: any) => {
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log(1);
        dispatch(setNavflag(true));
    }, [])
    return (
        <div className={Styles.home}>
            <PageHeader
                className={Styles.header}
                // onBack={() =>{props} }
                title="巨牛贷款"
            />
            <div className={Styles.banner}>
                <img src="https://img1.baidu.com/it/u=396375525,3789980038&fm=26&fmt=auto" alt="" />
            </div>
            <Alert
                banner
                message={
                    <TextLoop mask>
                        <div>
                            【17114700690】 还款成功，提升信用</div>
                        <div>
                            【17114700690】 还款成功，提升信用</div>
                        <div>
                            【17114700690】 还款成功，提升信用</div>
                        <div>
                            【17114700690】 还款成功，提升信用</div>
                    </TextLoop>
                }
                closable
                style={{ height: '40px' }}
            />
            <div className={Styles.jh}>
                <div onClick={()=>{
                    props.history.push('/borrow');
                }}><img src="https://image.suning.cn/uimg/sfp/ad/157681170509235851.png" alt="" /><h2>借款</h2></div>
                <div><img src="https://image.suning.cn/uimg/sfp/ad/157681161862167751.png" alt="" /><h2>还款</h2></div>
            </div>
            <div className={Styles.xy}>
                <div>
                    <img src="https://oss.suning.com/spcmp/spcmp/bQqzR1_K-m1nZSqtGawGH9tSLgil1OodLtfXhcbY6nZyyibOpvGczE8W6bfCdgtl.jpg" alt="" /><h3>
                        幸运抽奖</h3>
                    <p>借款抽奖 礼物多多</p></div>
                <div><img src="https://oss.suning.com/spcmp/spcmp/729-Skh04qbPnJH8WG6TIRpjZTRCFA5b6hsHBAV7dhAD-rZiixlQIf-KlZtDsM2K.jpg" alt="" /><h3>每日签到</h3>
                    <p>连续签到 可领奖励</p></div>
            </div>
            <Carousel autoplay style={{ width: '90%', margin: '10px auto' }}>
                <div className={Styles.lunbo}>
                    <h3 style={{ width: '90%', height: "160px" }}>
                        <img src="https://image.suning.cn/uimg/sfp/ad/163659830653721614.png" className={Styles.lbimg} alt="" />
                    </h3>
                </div>
                <div>
                    <h3 style={{ width: '90%', height: "160px" }}>
                        <img src="https://image.suning.cn/uimg/sfp/ad/163644915748164267.png" className={Styles.lbimg} alt="" />
                    </h3>
                </div>
                <div>
                    <h3 style={{ width: '90%', height: "160px" }}>
                        <img src="https://image.suning.cn/uimg/sfp/ad/163659845665534395.png" className={Styles.lbimg} alt="" />
                    </h3>
                </div>
            </Carousel>
            <div className={Styles.fl}>
                <div><img src="https://image.suning.cn/uimg/sfp/ad/158373573364178428.png" alt="" />
                <p>省薪借</p></div>
                <div><img src="https://image.suning.cn/uimg/sfp/ad/162743559078984972.png" alt="" /><p>苏宁保</p></div>
                <div><img src="https://image.suning.cn/uimg/sfp/ad/157655838734119156.png" alt="" /><p>零钱宝</p></div>
                <div><img src="https://image.suning.cn/uimg/sfp/ad/157655839887540584.png" alt="" /><p>福利中心</p></div>
            </div>
        </div>
    )
}





