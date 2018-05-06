import React from 'react';
import { Button, List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component {
    render() {
        const boss = 'li';
        return (
            <div>
                <h2>独立团,{boss}团长</h2>
                <Ying data="xiaoying"></Ying>
                <Fn data="xiaohong"></Fn>
                <Fn2 data="xiaosun"></Fn2>
            </div>
        )
    }
}

function Fn(props) {
    return <h2>{props.data}</h2>
}

const Fn2 = (props) => {
    return <h2>{props.data}</h2>
}

class Ying extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            solders:['name','age','addr','sex','school']
        }
        // this.addSolder = this.addSolder.bind(this)
    }
    addSolder = () => {
        this.setState({
            solders:[...this.state.solders,'ID'+Math.random()]
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.data}</h2>
                <Button type="primary" onClick={this.addSolder}>new</Button>
                <List>
                    {
                        this.state.solders.map(v => {
                            return <List.Item key={v}>{v}</List.Item>
                        })
                    }
                </List>
            </div>
        )
    }
}

export default App;
