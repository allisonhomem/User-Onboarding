import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';


const schema = yup.object().shape({
    user: yup.string().required('name is required').min(2, 'name must be at least 2 chars'),
    email: yup.string().required('email is required').min(8, 'email must be at least 8 chars'),
    password: yup.string().required('name is required').min(10, 'password must be at least 10 chars'),
    course: yup.string().oneOf(['1','2','3','4','5'], 'you must pick a course'),
    level: yup.string().oneOf(['novice','casual','nerd'], 'you must select a level'),
    agree: yup.boolean().oneOf([true], 'sorry, you must agree to our terms to participate'),
})

const testUser = [
    {
        user: 'Allison',
        email: 'coffeegirl@gmail.com',
        password: 'aoiufhjpoir',
        course: 'Espresso',
        level: 'casual',
        agree: true,
    }
]

function Form () {
    const [form,setForm] = useState({user:'',email:'',password:'',course:'',level:'',agree:false});
    const [errors,setErrors] = useState({user:'',email:'',password:'',course:'',level:'',agree:false});
    const [users,setUsers] = useState({user:'',email:'',password:'',course:'',level:'',agree:false});
    const [disabled,setDisabled] = useState(true);

    useEffect(() => {
        setUsers(testUser);
    },[]);

    const setFormErrors = (name,value) => {
        yup.reach(schema,name).validate(value)
           .then(() => setErrors({...errors, [name]:''}))
           .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const change = event => {
        const { checked, value, name, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked:value;
        setFormErrors(name, valueToUse);
        setForm({ ...form, [name]: valueToUse});
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    },[form]);

    const submitForm = (event) => {
        event.preventDefault();
        const newUser = {
            user: form.user.trim(),
            email: form.email.trim(),
            password: form.password.trim(),
            course: form.course,
            level: form.level,
            agree: form.agree,
        };

        axios.post(`https://reqres.in/api/users`)
        .then(res => {
            console.log(res.data,newUser);
            setUsers([users.concat(newUser)]);
            setForm({user:'',email:'',password:'',course:'',level:'',agree:false})
        })
        .catch(err => {
            console.error('there was an error in submitting the form',err)
        })
    }

    return (
        <div className='the_body'>
            <h2> Sign up for a course today! </h2>
            <form className='form_box'
                  onSubmit={submitForm}>
                <label>
                    Name:
                    <input type='text'
                           name='user'
                           value={form.user}
                           onChange={change}
                    />
                </label>

                <label>
                    Email:
                    <input type='text'
                           name='email'
                           value={form.email}
                           onChange={change}
                    />
                </label>

                <label>
                    Password:
                    <input type='text'
                           name='password'
                           value={form.password}
                           onChange={change}
                    />
                </label>

                <label>
                    Which course? 
                    <select name='course'
                            value={form.course}
                            onChange={change}> 
                        <option> -- Pick a course below -- </option>
                        <option value='1'> Coffee Growing </option>
                        <option value='2'> Coffee Roasting </option>
                        <option value='3'> Coffee Brewing </option>
                        <option value='4'> Espresso </option>
                        <option value='5'> Coffee History </option>
                    </select>
                </label>

                <p> Level of Experience: </p>

                <div className='radio_buttons'>
                  <label>
                    Novice:
                    <input type='radio'
                           name='level'
                           value='novice'
                           checked={form.level==='novice'}
                           onChange={change}
                    />
                  </label>

                  <label>
                      Casual Sipper:
                      <input type='radio'
                             name='level'
                             value='casual'
                             checked={form.level==='casual'}
                             onChange={change}
                      />
                  </label>

                  <label>
                      Total Nerd:
                      <input type='radio'
                             name='level'
                             value='nerd'
                             checked={form.level==='nerd'}
                             onChange={change}
                      />
                  </label>
                </div>

                <label>
                    Agree to our legal stuff?
                    <input type='checkbox'
                           name='agree'
                           checked={form.agree}
                           onChange={change}
                    />
                </label>

                <label>
                    <button type='submit'
                            disabled={disabled}> Start Now!</button>
                </label>
            </form>

        </div>
    );
}

export default Form;