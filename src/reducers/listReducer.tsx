import { ListReducer } from "../interfaces/ListReducer";
import { Transaction } from "../interfaces/transactions";

export const listReducer = (state: Transaction[], action: ListReducer) => {
  switch (action.type) {
    case "REMOVE":
      return state.filter((item) => item.id! === action.id);
    default:
      throw new Error();
  }
};
