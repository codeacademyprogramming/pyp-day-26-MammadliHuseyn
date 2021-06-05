import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './rooms/reducer';

export const store = createStore(
    reducer,
    applyMiddleware(
        logger,
        thunk
    )
);