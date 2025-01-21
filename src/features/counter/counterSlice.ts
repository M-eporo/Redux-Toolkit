import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//stateの型定義
interface CounterState {
  value: number;
}
//初期状態
const initialState: CounterState = {
  value: 0,
};

//sliceを作成
const counterSlice = createSlice({
  //slice名(アクションタイプのプレフィックスとして使用する)
  //reducer関数のcase句参照
  name: "counter",
  //初期状態
  initialState,
  //reducerを定義
  reducers: {
    //Immer.jsが使用されているので直接状態の変化が可能
    // state.user = action.payload; は、実質下記と一緒
    /*return {
      ...state,
      user: action.payload,
    };*/

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});
console.log(`counterSlice`);
console.log(counterSlice);
console.log(counterSlice.reducer);

//actionsは、reducers.increment,decrement,incrementByAmountを含むオブジェクト
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
//counterReducerとしてstoreでインポートされる
//Reducer は、現在の状態（state）とアクション（action）を受け取り、新しい状態を返す純粋関数
//Reduxではアクションの種類（type）によって、どの状態をどのように変更するかをReducerで記述する
//counterSlice.reducerは、createSlice の中で定義されたすべての状態変更ロジックを含む、1つの統合されたReducer関数
//counterSlice.reducer の中身を擬似コードで表すと、以下のように動作

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "counter/increment":
//       return { ...state, value: state.value + 1 };
//     case "counter/decrement":
//       return { ...state, value: state.value - 1 };
//     case "counter/incrementByAmount":
//       return { ...state, value: state.value + action.payload };
//     default:
//       return state;
//   }
// };
// この処理をRedux Toolkitの createSlice が自動的に生成してくれる
// store.tsでインポートする
export default counterSlice.reducer;