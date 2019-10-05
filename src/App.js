import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <p>Demo</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUser("tom")}>액션디스패치</button>
    </div>
  );
}

// store의 state를 props 매핑

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽이 store state
  product: state.products,
  user : state.user
});

//액션을 디스패치하는 펑션을 props 매핑
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 펑션 (액션을 디스패치하는)
  updateUser: (name) => dispatch(updateUser(name))
})


// 커링펑션, HoC
export default connect(mapStateToProps, mapActionToProps)(App);
