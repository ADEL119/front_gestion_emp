import React from 'react'
import { useState } from 'react'

const ListeEmployes = () => {

    const [employes,setEmployes]=useState([])

    const fetchEmployes=async()=>{

        await axios.get("")



    }


  return (
    <div>ListeEmployes</div>
  )
}

export default ListeEmployes