import axios from 'axios';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(()=>{
        const verifyAuth = async ()=>{
            const token = localStorage.getItem('token');
            console.log(token)
            if(!token){
                setIsAuthenticated(false)
                setIsLoading(false)
                return;
            }
            
            await axios.get("http://localhost:3000/api-verify-auth",{authorization:"secret-key"})
            .then((res)=>{
                console.log(res)
                setIsAuthenticated(res.isAuthenticated)
                
                console.log("Site loaded!");
                setLoading(false)
            })
            .catch((err)=>{
                console.log("Error verifying auth: ",err);
                setIsAuthenticated(false)
            })
            

        verifyAuth();
        }
    },[])

    if(isLoading){
        return <div>Loading...</div>
    }

    if (!isAuthenticated){
        return <Navigate to="/login"/>
    }


return (
    {children}
    )
};

export default ProtectedRoute