import { setCounterValue } from '../counter.slice';
import selectCount from '../selectors/selectCount';

import createAppAsyncThunk from '@utils/createAppAsyncThunk';
import sleep from '@utils/sleep';

/**
 * Async thunk action to increment the counter value.
 *
 * @param {number} value - The value to increment the counter by.
 * @returns {Promise<number>} A promise that resolves to the new counter value.
 */
const increment = createAppAsyncThunk<number, number>(
  'counter/increment',
  async function incrementAction(value, thunkAPI) {
    await sleep(1000);
    const count = selectCount(thunkAPI.getState());
    const newCount = count + value;
    thunkAPI.dispatch(setCounterValue(newCount));
    return newCount;
  },
);

export default increment;
