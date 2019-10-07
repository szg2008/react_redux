import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login','/register']
        const pathname = this.props.history.location.pathname
        if(publicList.indexOf(pathname) > -1) return
        //获取用户信息
        axios.get('/user/info')
            .then(res => {
                if(res.data.code === 0) {
                    //获取登录信息
                } else {
                    this.props.history.push('/login')
                }
            })
    }
    render() {
        return null
    }
}

export default withRouter(AuthRoute)//withRouter将本不是路由组件的转换成路由组件