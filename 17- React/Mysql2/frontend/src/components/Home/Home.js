import React from "react";
import {useHistory} from "react-router-dom";
const Home = () => {
    
    let history = useHistory();

      const clear =()=>{
        localStorage.clear(); //clear all localstorage
        //localStorage.removeItem("idUser",idUser);
        history.push(`/`);
      }
  return <div>Home <button onClick={clear}>clear</button ></div>;
};
export default Home;
