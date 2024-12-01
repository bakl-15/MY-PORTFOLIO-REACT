import React, {  useEffect, useState } from "react";
import ProfilePage from "./ProfilePage";
import ExperEducPage from "./ExperEducPage";
import SerSkillPage from "./SerSkillPage";
import ProjectContactPage from "./ProjectContactPage";
import { usePage } from "../porvider/TurnPageContext";


const Book = () => {

   const [panels , setPanels] = useState([])
 
   // create reverse  index function 
let totalPage  = panels.length/2
let pageNumber = 0

function reverseIndex() {
    pageNumber--
    if(pageNumber < 0){
        pageNumber = totalPage -1
    }
}

   const addPanel = (p) =>{
      setPanels(prev =>[...prev, p ])
   }

   const handleContactBtn = () => {
    
    panels.forEach((page,index) => {
      if(index < panels.length /2){
      setTimeout(() => {
          page.current.classList.add('turn')
          setTimeout(() => {
              page.current.style.zIndex = 20 + index
          },500)
      }, (index + 1) * 200  + 100)
    }
     })
   
   }

   useEffect(() =>{
    
      panels.forEach((_,index) => {
          if(index < panels.length /2){
        setTimeout(() => {
           reverseIndex()
           panels[pageNumber].current.classList.remove('turn')
           setTimeout(() =>{
               reverseIndex()
               panels[pageNumber].current.style.zIndex = 10 + index
           },500 )
          }, (index +1 ) * 200 + 2100)
        }
       })
   },[totalPage])

  

  return (
    <div className="book">
      <ProfilePage handleContactBtn={handleContactBtn} />
      <ExperEducPage addPanel={addPanel} />
      < SerSkillPage addPanel={addPanel} />
      <ProjectContactPage addPanel={addPanel} />
    </div>
  );
};
export default Book;