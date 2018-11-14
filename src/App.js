import React, { Component } from 'react';
import produce from 'immer';

class App extends Component {
  id = 0;
  state = {
    counter: 0,
    textList: {
      input: '',
      list: [
        {
          id: 0,
          text: '안녕하세요'
        }
      ]
    }
  };

  handleClick=()=>{
    this.setState({
      counter: ++this.state.counter
    })
  }
  handleChange=(e)=>{
    e.persist();
    this.setState(
      produce(draft=> {
        draft.textList.input = e.target.value
      })
    )
    // this.setState({
    //   textList: {
    //     ...this.state.textList,
    //     input: e.target.value
    //   }
    // })
  }
  handleKeyPress=(e)=>{
    if(e.key!=='Enter') return
    else{
      this.setState(
        produce(draft=>{
          draft.textList.input = '';
          draft.textList.list.push({
            
          })
        })
      )
      // this.setState({
      //   textList: {
      //     list: this.state.textList.list.concat({
      //       id: this.id++,
      //       text: this.state.textList.input
      //     })
      //   },
      //   input: ''
      // })
    }
  }

  render() {

    return (
      <div>
        <h2>카운터</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleClick}>+</button>
        <h2>리스트</h2>
        <input
          onChange={this.handleChange}
          value={this.state.textList.input}
          onKeyPress={this.handleKeyPress}
        />
        <ul>
          { this.state.textList.list.map( 
              item => <li key={item.id}>{item.text}</li>
            ) }
        </ul>
        {JSON.stringify(this.state.textList.input)}
      </div>
    );
  }
}

export default App;