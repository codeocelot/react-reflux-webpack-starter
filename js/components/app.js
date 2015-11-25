import React from 'react'
import Reflux from 'reflux'
import RefluxApp from './refluxApp'
// import myActions from '../actions/myFirstActions'
// import myStore = from '../store/myFirstStore'

export default class App extends React.Component{
  constructor(props){
    super(props);
    // extend this as necessary
  }
  componentDidMount(){

  }
  render(){
    return(
      <div>
        <h1>Hi world</h1>
        <h3>If you see this, ready to get started with React + Reflux + Webpack :)</h3>
        <h4>Have you read the <a href="https://github.com/codeocelot/react-webkit-starter/">Read me</a> yet?</h4>
        <RefluxApp/>
      </div>
    )
  }
}
