import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])


  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((myjson) => {
      setData(myjson)
/*       console.log(data) */

    })
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      {data.map((user)=>(
        <div key={user.id} className='flex flex-col text-center m-5 p-5'>
          <h1>Name: {user.name}</h1>
          <p>Username: {user.username}</p>
          <p>E-mail: {user.email}</p>
          <p>Mobile: {user.phone}</p>
        </div>
      ))}
    </div>
  )
}

export default App
