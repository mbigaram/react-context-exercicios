import React from 'react'
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Card from "../components/Card"
import styled from "@emotion/styled"

function HomePage () {
    const context = useContext(GlobalContext)
    const {users} =context
    console.log("entrou")
    const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 10px;
    
    `
    
  return (
    <Div>
    {users.map((user)=>{
        console.log(user)
    return <Card user={user}/>})}
    </Div>
  )
}

export default HomePage