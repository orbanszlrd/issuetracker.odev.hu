import { Action, createReducer, on } from '@ngrx/store';

import * as ProjectPageActions from '../actions/project.actions';
import { Project } from '../../models/project.model';

export const key = 'projects';

export interface State {
  data: Project[];
}

export const initialState: State = {
  data: [],
};

const projectReducer = createReducer(
  initialState,
  on(ProjectPageActions.selectData, (state) => ({
    ...state,
  })),
  on(ProjectPageActions.selectSuccess, (state, action) => ({
    ...state,
    data: [...action.data],
  })),
  on(ProjectPageActions.insertData, (state, action) => ({
    ...state,
  })),
  on(ProjectPageActions.insertSuccess, (state, action) => ({
    ...state,
  })),
  on(ProjectPageActions.updateData, (state, action) => ({
    ...state,
  })),
  on(ProjectPageActions.updateSuccess, (state, action) => ({
    ...state,
  })),
  on(ProjectPageActions.deleteData, (state, action) => ({
    ...state,
  })),
  on(ProjectPageActions.deleteSuccess, (state, action) => ({
    ...state,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return projectReducer(state, action);
}
