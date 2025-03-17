import type store from '@store';
import type rootReducer from '@store/rootReducer';

/**
 * The type of the store's dispatch.
 */
export type AppDispatch = typeof store.dispatch;

/**
 * The type of the store's root state.
 */
export type RootState = ReturnType<typeof rootReducer>;
