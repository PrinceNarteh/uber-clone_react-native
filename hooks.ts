import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, NavDispatch } from "./store";

export const useNavDispatch = () => useDispatch<NavDispatch>();
export const useNavSelector: TypedUseSelectorHook<RootState> = useSelector;
