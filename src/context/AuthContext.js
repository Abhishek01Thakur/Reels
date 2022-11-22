import React , {useState , useEffect} from "react";
import {auth} from  "../firebase";
import {onAuthStateChanged} from "firebase/auth";
export const AuthContext = React.createContext();
// children is an inbuilt prop -> it refers to all components specified inside
export function AuthContextProvider({children}) {
    let [mainLoader, setMainLoader] = useState(true)
    let [cUser,setUser] = useState(null)
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
      setMainLoader(false);
    });
  
  },[]);
  let value = cUser;      //{cUser} ki jagah sirf cUser pass kiya 
  return(
    <AuthContext.Provider value={value}>
       {!mainLoader &&children}  {/*iska matlab login ya signup tabhi render jab mere pass mera user aa chuka ho */}
    </AuthContext.Provider>
  )
}