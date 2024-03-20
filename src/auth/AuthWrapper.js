import React, { useEffect } from 'react'
import { createContext, useContext, useState } from "react"
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { publicroutes,privateroutes } from './navigation';
import { apiaddress } from './apiaddress';
import Setpermissions from 'views/Users/Setpermissions';
import { string } from 'prop-types';
import { postData } from './datapost';
const AuthContext = createContext();


export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
     let iser = localStorage.getItem('username')
     const [ user, setUser ] = useState({name: "", isAuthenticated: false})
     const [permissions,setPermissions] = useState([])



     const login = async (userName, password) => {
          
          // Make a call to the authentication API to check the username
          
          return new Promise(async (resolve, reject) => {

               const getdata = await postData(apiaddress+'/match-user',{userName,password})

               if (userName === getdata.employee_number & password === getdata.password) {
                    localStorage.setItem('auth','true')
                    localStorage.setItem('username',userName)
                    setUser({name: userName, isAuthenticated: true})

                    const getpermissions = await postData(apiaddress+'/get-permissions',{usern:userName})
                    setPermissions(getpermissions)


                    resolve("success")
               } else {
                    reject("Incorrect username or password")
                    
               }
          })
          
          
     }
     const logout = () => {
  
          setUser({...user, isAuthenticated: false})
          localStorage.setItem('auth',false)
          localStorage.setItem('username','')
     }


     useEffect(()=>{
          const getperm = async () => {
          const usern = localStorage.getItem('username')
          const getpermissions = await postData(apiaddress+'/get-permissions',{usern})
          setPermissions(getpermissions)
          }
          getperm()
          },[])
if(user.isAuthenticated | localStorage.getItem('auth')==='true'){

     return (
               <AuthContext.Provider value={{user,permissions, login, logout}}>
                    <Switch>
                 
                    {privateroutes}
               
                    </Switch>
              </AuthContext.Provider>

     )
}else{
     return (
          <AuthContext.Provider value={{user, login, logout}}>
               <Switch>

               {publicroutes}
              
               </Switch>
         </AuthContext.Provider>

)  
}

}

