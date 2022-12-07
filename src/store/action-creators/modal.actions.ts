import { Dispatch } from 'redux';
import { ActionType } from '../actions-types/modal.actionType';
import { ModalAction } from '../../types/reduxTypes/modal.types';

export const openModal = (id: string) => {
  return async (dispatch: Dispatch<ModalAction>) => {
    dispatch({
      type: ActionType.SET_CARD_TO_CART,
      payload: id
    });
  };
};

export const closeModal = () => {
  return async (dispatch: Dispatch<ModalAction>) => {
    dispatch({
      type: ActionType.SET_CARD_TO_CART,
      payload: ""
    });
  };
};
