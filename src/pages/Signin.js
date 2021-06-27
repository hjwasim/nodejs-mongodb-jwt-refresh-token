import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from 'react-router-dom'
import { instance } from '../config.axios'
import { AuthContext } from '../context/AuthContextProvider'
import { AiOutlineUser } from 'react-icons/ai';
import { CgPassword } from 'react-icons/cg';
import { Validator } from '../helpers/Validator';

const Signin = () => {

    const { setUser } = useContext(AuthContext)
    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const error = Validator(errors)
    const do_signin = async (result) => {
        const { username, password } = result
        try {
            const res = await instance.post('/auth/signin', { username, password })
            const data = await res.data
            if (data) {
                setUser({ username: data.username, id: data.id, logged: true, load: false })
                history.push('/user/dashboard')
            }
        } catch (error) {
            alert("========= ERROR =========")
        }
    }

    return (
        <>
            <div className="form-container mx-auto form ">
                {
                    error && (
                        <div className="alert-danger text-center p-2 my-2">
                            {error}
                        </div>
                    )
                }
                <div className="card p-4 w-100">
                    <div>
                        <h3 className="h3 text-center">
                            Signin
                        </h3>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit(do_signin)} className="mt-1">
                        <div className="input-group my-3">
                            <span className="input-group-text">
                                <AiOutlineUser />
                            </span>
                            <input placeholder="Username" {...register('username', { required: true, maxLength: 15, minLength: 5 })} className="px-2 form-control is-touched is-pristine av-valid form-control input" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">
                                <CgPassword />
                            </span>
                            <input placeholder="Password" {...register('password', { required: true, minLength: 5 })} type="password" className="px-2 form-control is-touched is-pristine av-valid form-control input" />
                        </div>
                        <div className="input-group mt-4">
                            <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Signup</button>
                        </div>
                    </form>
                    <hr />
                    <div>
                        <p className="text-center" >New User! Create an account</p>
                        <Link to="/signup">
                            <button className="btn btn-outline-primary w-100 waves-effect waves-light">Signup</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
