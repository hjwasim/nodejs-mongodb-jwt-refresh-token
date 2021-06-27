import React from 'react'
import { useForm } from 'react-hook-form'
import { instance } from '../config.axios'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { CgPassword } from 'react-icons/cg';
import { Validator } from '../helpers/Validator';

const Signup = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const error = Validator(errors)

    const do_signup = (result) => {
        instance.post('/auth/signup', result)
            .then(({ data }) => {
                if (data.status)
                    props.history.push('/signin')
            })
            .catch(({ response }) => {
                if (response) {
                    alert(response['data'].message)
                }
                alert("========= ERROR =========")
            })
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
                            Signup
                        </h3>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit(do_signup)} className="mt-1">
                        <div className="input-group">
                            <span className="input-group-text">
                                <AiOutlineMail />
                            </span>
                            <input placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="px-2 form-control is-touched is-pristine av-valid form-control input" />
                        </div>

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
                        <p className="text-center" >Already have an account!</p>
                        <button className="btn btn-outline-primary w-100 waves-effect waves-light">Signin</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
