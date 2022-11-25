import React from "react";

import Mainbar from "./components/Mainbar/Mainbar";
import Dekho from "./components/Dekho/Dekho";
import Diseases from "./components/Diseases/Diseases";
import Search from "./components/search/Search";
import Selects from "./components/Selects/Selects";
import ImgCarousel from "./components/Carousel/ImgCarousel";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import { AuthContextProvider } from "./Context/AuthContext";
import db from './config'

const arr = document.querySelector('#doctorData');

function renderDoc(doc){
  const selname = String(doc.data().Name);
     document.getElementById('#doctorData').appendChild(document.createElement('li')).textContent=selname;

}
  var Dheeraj = "Brain Tumour";
  // document.getElementById('diseaseName').value="";
  db.collection ('Disease').where('diseaseName',"==",Dheeraj).get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
      const exp = String(doc.data().Expertise);
      db.collection ('Doctors').where('Expertise',"==",exp).get().then((snapshot) => {
        snapshot.docs.forEach(doc =>{
          renderDoc(doc);
       // }
          
        }) })
       
    }) })

  

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Mainbar />
        <Dekho />
        <Diseases />
        <Search />
        <Selects />
        <ImgCarousel />
        <Signin />
        <Footer />
      </AuthContextProvider>
    </div>
  )
}
