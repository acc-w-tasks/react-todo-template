import React, { Component } from 'react'


export default function withSome(WrappedComponent){
  return class WithSome extends Component{
    componentDidMount(){
      console.log('with some hoc')
    }
    render(){
      return <WrappedComponent {...this.props} />
    }
  }
}