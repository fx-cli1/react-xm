import { Form, Input, Button, Checkbox } from 'antd';
import { useSelector } from 'react-redux';
import { LeftOutlined } from '@ant-design/icons';
import Styles from '../css/login/register.module.css';

export default () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={Styles.register}>
            <div className={Styles.nav}>
                <LeftOutlined width={"10em"} height={"10em"} />
            </div>
            <h3 className={Styles.h3}>验证码已发送至手机号：13396135859</h3>
            <ul className={Styles.form}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className={Styles.yzm}>
                    <Form.Item
                        name="username"
                    >
                        <Input  size="large" maxLength={6}/>
                    </Form.Item>
                    <Button type='primary' style={{height:'100%'}}>获取验证码</Button>
                    </div>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </ul>
        </div>
    );
};
