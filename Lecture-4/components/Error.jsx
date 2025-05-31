import React from 'react'
import { useRouteError } from 'react-router';
const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
    <h1>
       Oops! Something went wrong.
    </h1>
    <p>{err.status} - {err.statusText} - {err.data}</p>
     
    </div>
  )
}

export default Error
