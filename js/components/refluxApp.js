import Reflux from 'reflux'
import myActions from '../actions/myFirstActions'
import myStore from '../stores/myFirstStore'
import React from 'react'

export default class RefluxApp extends React.Component{
  constructor(props){
    super(props);
    console.log(this);
    this.handleAdd = this.handleAdd.bind(this);
    // this.setState({items:[]})
    this.state = {items:[]}
  }
  // getInitialState(){
  //   this.setState({
  //     items:[]
  //   })
  // }
  componentDidMount(){
    myStore.listen(items =>{this.setState({items})})
  }
  handleAdd(){
    var content = this.refs.userInput.value;
    myActions.add({content})
    this.refs.userInput.value = ''
  }
  handleRemove(id){
    myActions.remove(id)
  }
  render(){
    var items = this.state.items.map((item)=>{return(
      <li>
        {item.content}
        <button type="button" className="btn-rm" onClick={this.handleRemove.bind(this,item.id)}> Remove </button>
      </li>
    )})
    return(
      <section>
        <h2>Some Reflux Actions</h2>
        <label htmlFor="input">Enter some text to add to store</label>
        <input type="text" ref="userInput" name="input"></input>
        <button type="button" onClick={this.handleAdd}>Submit</button>
        <ul>
          {items}
        </ul>
      </section>
    )
  }
}
