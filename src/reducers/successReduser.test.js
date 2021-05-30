import { actionTypes } from '../actions';
import successReduser from './successReduser';

test('when previous state is underfined, return false', () => {
    const newState = successReduser(undefined, {});
    expect(newState).toBe(false);
});

test('return previous state when unknown action type', () => {
    const newState = successReduser(false, {type: 'unknown'});
    expect(newState).toBe(false);
});

test('return `true` for action type CORRECT_GUESS', () => {
    const newState = successReduser(false, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});