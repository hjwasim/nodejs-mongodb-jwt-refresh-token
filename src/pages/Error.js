import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className="form-container mx-auto form ">
            <div className="card p-4 w-100">
                <h3 className="h3 text-center">
                    NO PAGE HERE!
                </h3>
                <hr />
                <Link to="/signin">
                    <button className="btn btn-primary w-100 waves-effect waves-light my-3" type="submit">Signin</button>
                </Link>
            </div>
        </div>
    )
}

export default Error
