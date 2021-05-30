import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Input({ secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState("");
    const success = useSelector(state => state.success);

    if (success) {
        return <div data-test='component-input'></div>
    }
    return (
        <div data-test = 'component-input'>
            <form className="form-inline">
                <input data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <button 
                    data-test="submit-button" 
                    onClick={(evt) => {
                        evt.preventDefault();
                    setCurrentGuess("");
                }} 
                    className="btn btn-primary mb-2">
                    Submit</button>
            </form>
        </div>
    );
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}

export default Input;