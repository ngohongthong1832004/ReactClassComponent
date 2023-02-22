import React, { Component } from 'react'


class ChildContent extends Component{
    constructor(props){
        super(props)
    }
    // static getDerivedStateFromProps (props , state) {
    //     return { color : 'black' }
    // }

    render() {
        return (
            <h3>this is the ChildContent {this.props.color}</h3>
        )
    }
}

export default ChildContent