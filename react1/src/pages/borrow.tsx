import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Styles from '../css/borrow.module.css';
import { NavBar, Space, Toast, Button, Popup, Checkbox, Radio, Dialog } from 'antd-mobile';
import Marquee from 'react-fast-marquee';
import { Slider, InputNumber, Row, Col, Alert } from 'antd';
import { setNavflag } from '../action/navAction'
export default function borrow(props: any) {
    const [inputValue, setinputValue] = useState(100);
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [value, setValue] = useState<string[]>([])
    const [value1, setValue1] = useState<string[]>([])
    const [timer, settimer] = useState('');
    const [checked, setchecked] = useState(false);
    const dispatch = useDispatch()
    const onChange = (value: any) => {
        setinputValue(value);
    }
    useEffect(() => {
        let date = Date.now() + 21 * 24 * 60 * 60 * 1000;
        let y = new Date(date).getFullYear();
        let m = new Date(date).getMonth() + 1;
        let day = new Date(date).getDate();
        settimer(`${y}-${m}-${day}`);
        dispatch(setNavflag(false));
    }, [])
    const right = (
        <div style={{ fontSize: 16 }}>
            <Space>
                <span onClick={() => {
                    Dialog.alert({
                        content: `
                        　　借款人、保证人、抵押人请认真地阅读本合同项下的所有条款，尤其是用黑体字表明了的条款，对于不理解的条款可以向贷款人征询，贷款人将进行解释。下面是学习啦小编为大家带来的借款条约怎么写，欢迎阅读。`,
                        onConfirm: () => {

                },
                      })
                }}>借款说明</span>
        </Space>
        </div >
    )
    const back = () => {
        props.history.push('/home');
    }
    const calc = (v: any) => {
        let sum = v + inputValue;
        if (sum > 2000) {
            sum = 2000
        }
        if (sum < 100) {
            sum = 100
        }
        setinputValue(sum);
    }
    const ts = () => {
        Toast.show({
            content: '该时间暂未开放',
        })
    }
    const dkpd = () => {
        console.log(value);
        console.log(value1);
        console.log(timer);
        console.log(inputValue);
        console.log(checked);
        if (!value.length) {
            Toast.show({
                content: '请选择借款用途',
            })
        } else if (!value1.length) {
            Toast.show({
                content: '请选择还款来源',
            })
        } else if (!checked) {
            Toast.show({
                content: '请阅读同意提示',
            })
        } else {
            console.log("贷款成功");

        }
    }
    return (
        <div className={Styles.borrow}>
            <NavBar right={right} onBack={back} style={{ height: '50px', fontSize: '20px', borderBottom: '1px solid #ccc' }}>
                借款
            </NavBar>
            <Alert
                closable
                style={{ height: '40px' }}
                banner
                message={
                    <Marquee pauseOnHover gradient={false} style={{ width: '80%', margin: '0 auto' }}>
                        应监管要求，巨牛不受理在校学生借款申请，敬请谅解！
                    </Marquee>
                }
            />
            <div className={Styles.syed}>
                <h2>试用额度</h2>
                <h5>2000</h5>
                <p>完成基础修炼激活信用额度</p>
            </div>
            <div className={Styles.jkje}>
                <ul>
                    <li>{inputValue} <br />借款金额(元)</li>
                    <li>{parseInt(inputValue * 0.05 * 21 + '')} <br />还款金额(元)</li>
                    <li>{timer}<br />还款时间</li>
                </ul>
                <div className={Styles.setnum}>
                    <div><h3>借款金额</h3>
                    </div>
                    <div><Button color='primary' onClick={() => {
                        calc(-100)
                    }}>-</Button><Button color='primary' onClick={() => {
                        calc(100)
                    }}>+</Button></div>
                </div>
                <Row style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                    <Col span={12}>
                        <Slider
                            min={100}
                            max={2000}
                            onChange={onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={100}
                            max={2000}
                            style={{ margin: '0 16px' }}
                            value={inputValue}
                            onChange={onChange}
                        />
                    </Col>
                </Row>
                <div className={Styles.jkjeend}>
                    <p>100元</p>
                    <p>2000元</p>
                </div>
            </div>
            <div className={Styles.jkqx}>
                <h2>借款期限</h2>
                <div><Button color="default" fill='solid' onClick={() => {
                    ts()
                }}>
                    7天
                </Button><Button color='default' fill='solid' onClick={() => {
                    ts()
                }}>
                        14天
                    </Button><Button color='primary' fill='solid'>
                        21天
                    </Button></div>
            </div>
            <div className={Styles.xzly}>
                <div>
                    <h3>借款用途</h3>
                    <p onClick={() => {
                        setVisible(true)
                    }}>请选择借款用途 ＞ </p>
                </div>
                <div>
                    <h3>还款来源</h3>
                    <p onClick={() => {
                        setVisible1(true)
                    }}>请选择还款来源 ＞</p>
                </div>
            </div>
            <Popup
                visible={visible}
                onMaskClick={() => {
                    setVisible(false)
                }}
                bodyStyle={{ minHeight: '40vh' }}
            >
                <Checkbox.Group
                    value={value}
                    onChange={(val: string[]) => {
                        setValue(val)
                    }}
                >
                    <Space direction='vertical' style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
                        <Checkbox value='1' style={{ height: '30px' }}> 旅游度假</Checkbox>
                        <Checkbox value='2' style={{ height: '30px' }}> 租房装修</Checkbox>
                        <Checkbox value='3' style={{ height: '30px' }}> 培训深造</Checkbox>
                        <Checkbox value='4' style={{ height: '30px' }}> 数码分期</Checkbox>
                        <Checkbox value='5' style={{ height: '30px' }}> 购物消费</Checkbox>
                        <Checkbox value='6' style={{ height: '30px' }}> 购房融资</Checkbox>
                        <Checkbox value='7' style={{ height: '30px' }}> 投资股票</Checkbox>
                        <Checkbox value='8' style={{ height: '30px' }}> 场外配资</Checkbox>
                        <Checkbox value='9' style={{ height: '30px' }}> 期货合约</Checkbox>
                        <Checkbox value='10' style={{ height: '30px' }}> 结构化产品</Checkbox>
                    </Space>
                </Checkbox.Group>
            </Popup>
            <Popup
                visible={visible1}
                onMaskClick={() => {
                    setVisible1(false)
                }}
                bodyStyle={{ minHeight: '40vh' }}
            >
                <Radio.Group
                    value={value1}
                    onChange={(val: string) => {
                        setValue1(val)
                    }}
                >
                    <Space direction='vertical' style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
                        <Radio value='1'>工资收入</Radio>
                        <Radio value='2'>家庭收入</Radio>
                        <Radio value='3'>生意收入</Radio>
                        <Radio value='4'>其他收入</Radio>
                    </Space>
                </Radio.Group>
            </Popup>
            <div className={Styles.xy}>
                <p><input type="checkbox" checked={checked} onChange={() => {
                    setchecked(!checked)
                }} />我已阅读并同意《借款人居间服务协议》《重要提示》</p>
                <h3> <Button block color='primary' size='large' style={{ width: '80%', margin: '0 auto' }} onClick={() => {
                    dkpd()
                }}>
                    申请借款
                </Button></h3>
            </div>
        </div>
    )
}

