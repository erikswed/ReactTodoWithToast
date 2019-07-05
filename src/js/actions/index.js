import { ADD_ARTICLE } from "../constants/action-types";
import createToast from "../factories/createToast";
import { ADD_TOAST, REMOVE_TOAST } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST
  };
}

export function removeToast(id) {
  return {
    payload: id,
    type: REMOVE_TOAST
  };
}