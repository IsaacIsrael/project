import { CounterActions } from '../counter.constants';
import { setCounterValue } from '../counter.slice';
import selectCount from '../selectors/selectCount';

import createAppAsyncThunk from '@utils/createAppAsyncThunk';
import sleep from '@utils/sleep';

/**
 * Async thunk action to decrement the counter value.
 *
 * @param {number} value - The value to decrement from the counter.
 * @returns {Promise<number>} A promise that resolves to the new counter value.
 */
const decrement = createAppAsyncThunk<number, number>(
  CounterActions.decrement,
  async function decrementAction(value, thunkAPI) {
    await sleep(1000);
    const count = selectCount(thunkAPI.getState());
    const newCount = count - value;
    thunkAPI.dispatch(setCounterValue(newCount));
    return newCount;
  },
);

export default decrement;
