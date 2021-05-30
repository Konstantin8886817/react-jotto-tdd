import { combineReducers } from 'redux';
import success from './successReduser';
import guessedWords from './guessedWordsReducer';

export default combineReducers({
    success,
    guessedWords,
});