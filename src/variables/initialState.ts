import { monoInitial } from "./monoInitial";
import { Currency, Operation, Exchange } from "../../types/types";

type State = {
  mono: Exchange,
  leftCurrency: Currency,
  rightCurrency: Currency,
  operation: Operation,
  switchData: boolean
}

export const initialState: State = {
  mono: monoInitial,
  leftCurrency: 'UAH',
  rightCurrency: 'USD',
  operation: 'buy',
  switchData: false,
};
