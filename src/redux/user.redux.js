import axios from "axios";

const REGISTRE_SUCCESS = 'REGISTRE_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}
export function user(state = initState,action) {
    switch(action.type) {
        case REGISTRE_SUCCESS:
            return {...state,msg:'',isAuth:true,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
            return state
    }
    return state
}

function registerSuccess(data) {
    return { type:REGISTRE_SUCCESS,payload:data }
}

function errorMsg(msg) {
    return { type: ERROR_MSG,msg: msg }
}

export function register({user, pwd, repeatpwd, type}) {
    if(!user || !pwd || !type) {
        return errorMsg('用户名或者密码必填')
    }

    if(pwd !== repeatpwd) {
        return errorMsg('两次密码输入不一致')
    }

    return dispatch => {
        axios.post('/user/register',{user, pwd, type})
            .then(res => {
                if(res.state === 200 && res.data.code === 0) {
                    dispatch(registerSuccess({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}