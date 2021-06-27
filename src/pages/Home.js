import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Link } from 'react-router-dom'

const Home = () => {
    const { User, logout } = useContext(AuthContext)
    console.log(User)
    return (
        <div className="form-container mx-auto form ">
            <div className="card p-4 w-100">
                <h3 className="h3 text-center">
                    Welcome!
                </h3>
                <hr />
                <div className="my-3">
                    <p className="text-center m-0">Username : {User.username}</p>
                    <p className="text-center m-0" >ID : {User.id}</p>
                </div>
                {logout()}
                <Link to="/user/products">
                    <button className="btn btn-primary w-100 waves-effect waves-light my-3" type="submit">See All Books</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
