import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [nameError, setNameError] = useState("")
    const { createUser, setUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        const name = form.name.value
        if (name.length < 5) {
            setNameError("Name should be more then 5 character")
            return
        }
        else {
            setNameError("")
        }
        // console.log({ email, password, name, photo })
        createUser(email, password)
            .then(result => {
                // console.log(result.user)
                const user = result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate("/")
                    })
                    .catch((error) => {
                        alert(error)
                        setUser(user)
                    });

            })
            .catch(error => {
                alert(error)
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center pt-5 font-bold'>Register Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        {nameError && <p className='text-xs text-error'>{nameError}</p>}
                        {/* Photo url */}
                        <label className="label">Photo url</label>
                        <input type="text" name='photo' className="input" placeholder="Photo url" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center p-2 font-bold'>
                            Already Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;