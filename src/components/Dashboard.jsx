import axios from 'axios'
import React from 'react'
import  { useState } from 'react'
import Header from './Header'

const Users = () => {
const apilink="https://jsonplaceholder.typicode.com/users"
    var[users,changeUsers]=useState([
    ]
    );
    React.useEffect(
    ()=>{
        axios.get(apilink).then(
            (response)=>{
                changeUsers(response.data)
            }
        )
    },[]
    )
  return (
    <div>
             <Header/>
             <h1 class="display-5 mt-3 mb-3 text-center">Employee Dashboard</h1>
             <table class="table">
  <thead>
    <tr>
     
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    
     {users.map(
        (value,index)=>{
            return <tr>

<td>{value.id}</td>
<td>{value.name}</td>
<td>{value.email}</td>
</tr>
        }
     )}

  </tbody>
</table>
    </div>
  )
}

export default Users

