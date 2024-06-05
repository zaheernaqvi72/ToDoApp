import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './redux/reducers/taskReducer';
import { loadState, saveState } from './utils/localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
