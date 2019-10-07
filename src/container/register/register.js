import React from 'react'
import Logo from '../../component/logo/logo'
import 'antd-mobile/dist/antd-mobile.css'
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type: 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleRegister() {
        this.props.register(this.state)
    }
    handleChange(key,val) {
        this.setState({
            [key]:val
        })
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <List>
                    {this.props.msg ? <p className="err-info">{this.props.msg}</p> : null}
                    <InputItem onChange={v => this.handleChange('user',v)}>用户</InputItem>
                    <WhiteSpace />
                    <InputItem type="password" onChange={v => this.handleChange('pwd',v)}>密码</InputItem>
                    <WhiteSpace />
                    <InputItem type="password" onChange={v => this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem 
                        checked={this.state.type === 'genius'}
                        onChange={() => this.handleChange('type','genius')}
                    >
                        牛人
                    </RadioItem>
                    <RadioItem 
                        checked={this.state.type === 'boss'}
                        onChange={() => this.handleChange('type','boss')}
                    >
                        boss
                    </RadioItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </List>
            </div>
        )
    }
}

export default connect(
    state => state.user,
    { register }
)(Register)