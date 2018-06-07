import * as constants from '../constants';

// action should look like:
export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

// type
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// action creator
export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}