//useAppSelector: store内部の状態（state）を取得するためのHook
//読み取りのみで変更はできない
// //const selectedState = useAppSelector((state) => state.[キー名]);

//useAppDispatch: Redux のアクションを発行（dispatch）するためのフック
//Storeに対して、状態を更新するアクションを送ります
//定義方法 = const dispatch = useAppDispatch();
//使用方法 = dispatch(action);

import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  console.log("count");
  console.log(count);
  console.log("dispatch");
  console.log(dispatch);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;