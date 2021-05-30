import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
}

export const guessedWord = (guessedWord) => {
    return function(dispatch, getState) {

    };
};

export const getSecretWord = () => {
    // TODO: write actual action in Redux
    return axios.get('http://localhost:3030')
        .then(response => response.data);
}