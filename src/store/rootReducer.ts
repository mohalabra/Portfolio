import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
// Import other slices here

const rootReducer = combineReducers({
  theme: themeReducer,
  // Add other slice reducers here
});

export default rootReducer;