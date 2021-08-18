import React from 'react';

function Form (props) {
    return (
        <div className='the_body'>
            <h2> Sign up for a course today! </h2>
            <form className='form_box'>
                <label>
                    Name:
                    <input type='text'
                    />
                </label>

                <label>
                    Username:
                    <input type='text'
                    />
                </label>

                <label>
                    Password:
                    <input type='text'
                    />
                </label>

                <label>
                    
                </label>
            </form>

        </div>
    );
}

export default Form;