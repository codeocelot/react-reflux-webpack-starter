import Reflux from 'reflux'
import myActions from '../actions/myFirstActions'

export default Reflux.createStore({
  init(){
    this.objs = [];
    this.listenToMany(myActions);
  },
  onAdd(obj){
    this.objs.push(obj);
    // trigger an update 
    this.trigger(this.objs)
  }
})
