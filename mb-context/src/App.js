
import Router from "./router/Router"
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContext } from "./contexts/GlobalContext";
import axios from "axios"
import { useEffect, useState } from "react";
import { BASE_URL } from "./constant/BASE_URL";



function App() {

  const[users, setUsers]=useState([])
  const [idSelected, setIdSelected] =useState("")

  useEffect(()=>{
    getAllUsers()
  },[])

  const getAllUsers = async ()=>{
    try {
      const headersAth ={
        headers:{
          Authorization: "marcelo-bigaram-ammal"
        }
      }
      const response = await axios.get(`${BASE_URL}/labenusers/users`,headersAth)
      setUsers(response.data)
      
  } catch (error) {
    console.log(error)
  }}

 const context ={
  users,
  idSelected,
  setIdSelected

 }

  return (
  
    <ChakraProvider>
      <GlobalContext.Provider value={context}>
      <Router />
      </GlobalContext.Provider>
      </ChakraProvider>
    
  );
}

export default App;
