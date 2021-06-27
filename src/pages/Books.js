import React, { useState, useContext, useEffect } from 'react'
import { instance } from '../config.axios'
import { AuthContext } from '../context/AuthContextProvider'


const Books = () => {

    const { logout} = useContext(AuthContext)
    const [Books, setBooks] = useState([])


    useEffect(() => {
        instance.get('/books', { withCredentials: true }).then(res => {
            setBooks(res.data)
           
        })
    }, [])

    return (
        <div className="form-container mx-auto form ">
            <div className="card p-4 w-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Year</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Books.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.author}</td>
                                    <td>{item.year}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                {logout()}
            </div>
        </div>
    )
}

export default Books
