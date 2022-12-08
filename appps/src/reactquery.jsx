import { useQuery } from "@tanstack/react-query"
import React  from 'react'
import Axios from "axios"



function ReactQuery() {
  const {data}=useQuery([],()=>{return Axios.get("https://dummyjson.com/comments/1").then((res)=>res.data)})
  return (
    <div>
      <h1>React Query is used for fetching data {data.body}</h1>


    </div>
  )
}

export default ReactQuery;