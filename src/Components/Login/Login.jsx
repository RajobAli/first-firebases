
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

import app from "../../Firebase/Firebase.config";
import { useState } from "react";

const Login = () => {
    const [user,setUser] = useState()
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth,provider)
    .then(result =>{
        const LogedInUser = result.user;
        console.log(LogedInUser);
        setUser(LogedInUser)
        
    })
    .catch(error=>{
        console.log(error.message)
    })
   
  }
const handleSignOut = () =>{
    signOut(auth)
    .then(result =>{
        console.log(result)
        setUser(null)
    })
    .catch(error =>{
        console.log(error.message)
    })

}
  
    return (
        // user ? logout : sign in

        <div>
   { user ? <button onClick={handleSignOut}>Sign Out</button> :
     <button onClick={handleGoogleSignIn}> Google Login</button>}
    {user &&
         <div>
         <h3>User:{user.displayName}</h3>
         <h3>Email:{user.email}</h3>
         <img src= {user.photoURL} alt=""></img>
         <h3>User Id:{user.uid}</h3>
  
         </div>
    
    }
            
        </div>
    );
};

export default Login;