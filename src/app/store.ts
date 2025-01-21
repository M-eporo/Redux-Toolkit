import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";

// reducer: {
//   [キー名]: [対応するReducer関数],
// }
//このコードの結果、Redux Storeは、次の構造を持つ
// {
//   counter: {
//     value: 0,
//   },
//   auth: {
//     isLoggedIn: false,
//     user: null,
//   }
// }
//slice名と同一が望ましい。
//Counterコンポーネント内の状態を最小する際に、キー名に応じて変更が必要。
//const count = useAppSlelector((state) => state.counter.value)
export const store = configureStore({
  reducer: {
    //複数のReducerをここに追加可能
    counter: counterReducer,
    auth: authReducer,
  },
});
console.log(`store`);
console.log(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;