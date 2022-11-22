import React , {useState ,useEffect} from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import './profile.css';
import {useContext} from "react"
import {AuthContext} from "../context/AuthContext";

function Profie() {

  let cUser = useContext(AuthContext);
  //console.log(contextObj)
  //let [loading , setLoading] = useState("")
  // useEffect((function fun() {
  //   (async function () {
  //     // get user
  //     // docRef
  //     // firebase 8 version
  //     // var docRef = db.collection("users").doc(cUser.uid);
  //     // let userObj = await docRef.get();
  //     // firebase 9 
  //     if(cUser){
  //     const docRef = doc(db, "users", cUser.uid);
  //     const userObj = await getDoc(docRef);
  //     console.log("Document data:", userObj.data());
  //   }
  //     // setUser
  //     // setpageLoading
  // })()
  // })(), [cUser]);


  return (
    <>
      {cUser == null ? <div>Need to Login</div>:
      <>
            <div className="header"></div>
              <div className="main">
                <div className="pimg_container">
                <img src="http://via.placeholder.com/640x360" alt="" className="pimg" />
                </div>
                  <div className="details">
                    <div className="content">Name</div>
                    <div className="content">No of Posts: <span className='bold_text'>Posts</span></div>
                    <div className="content">Email <span className='bold_text'>Email.com</span></div>
                  </div>
              </div>
      </>
    }
    </>

  )
}

export default Profie