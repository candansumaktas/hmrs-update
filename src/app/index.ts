import { Action, ActionReducer, combineReducers } from '@ngrx/store';

export interface AppState {}

export const appReducers: ActionReducer<AppState, Action> = combineReducers({});

// reset all states on user logout
export function rootReducer(state: AppState, action: Action) {
  return appReducers(state, action);
}
