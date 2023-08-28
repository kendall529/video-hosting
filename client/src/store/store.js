// import { createStore } from 'redux';
// import mainReducer from './reducer';

// const store = createStore(
//     mainReducer
// );

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
});


export default store;