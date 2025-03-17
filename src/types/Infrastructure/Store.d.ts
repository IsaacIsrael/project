import type store from '@store';
import type rootReducer from '@store/rootReducer';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
