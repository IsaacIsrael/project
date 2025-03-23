/**
 * Pauses the execution for a specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to pause execution.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
export default function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
