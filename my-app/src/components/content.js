import React from 'react'
import ChildContent from './childContent'


class Content extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            color : 'blue',
            count : 0
        }
        console.log("render")
    }
    
    componentDidMount() {
        setTimeout(() => {
          this.setState({color: "yellow"})
        }, 1000)
      }

    handleChangeState = () => {
        this.setState({
            color : 'pink'
        })
    }
    handleChangeStateCOunt = () => {
        this.setState({
            count : this.state.count + 1
        }) 
    }
    render() {
        return (
            <div>
                <h2 style={{color : "red"}}>hello Class Component {this.state.color} { this.props.props }</h2>
                <h2> {this.state.count} </h2>
                <button onClick={this.handleChangeState}>Change</button>
                <button onClick={this.handleChangeStateCOunt}>ChangeCount</button>
                <ChildContent color = {this.state.color}/>
            </div>
        )
    }
}

export default Content