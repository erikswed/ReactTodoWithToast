
import { ADD_TOAST, REMOVE_TOAST } from "../constants/action-types";

const initialState = {
  toastList: []
};

export default function toasts(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_TOAST:
      return { toastList: [...state.toastList, payload] }

    case REMOVE_TOAST:
      return state.toastList.filter(toast => toast.id !== payload);

    default:
      return state;
  }
}