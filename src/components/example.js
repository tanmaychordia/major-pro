import React,{Component} from 'react';
import Caraousel from 'react-elastic-carousel';

export default class Example extends Component{
  state={
    items:[
      {id:1,title:'#1'},
      {id:2,title:'#2'},
      {id:3,title:'#3'},
      {id:4,title:'#4'},
      {id:5,title:'#5'},
    ]
  }

  render(){
    const{items}=this.state;
    return(
      <Caraousel>
        {items.map(item=> <div key={item.id}>{item.title}</div>)}
      </Caraousel>
    )
  }

}
