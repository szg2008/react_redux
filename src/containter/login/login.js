import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlack, WhiteSpace, Button } from 'antd-mobile'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <WingBlack>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace />
                        <InputItem>密码</InputItem>
                    </List>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlack>
            </div>
        )
    }
}

export default Login