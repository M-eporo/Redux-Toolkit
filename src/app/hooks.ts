//カスタムHook
//ReactでReduxの状態やアクションを簡単に使うためにカスタムHooksを定義
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

//dispatch用のHook
//useDispatch（React-Reduxが提供する元のフック）は型付けされていない
//型安全性を向上させるために、型付けされたカスタムフック useAppDispatch を定義する
export const useAppDispatch: () => AppDispatch = useDispatch;

//selector用のHook
//useSelector（React-Reduxが提供する元のフック）は型付けされていない
//型安全性を向上させるために useAppSelector を定義する
//state（Redux Storeの全体状態）を関数に渡し、その結果を返す
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;