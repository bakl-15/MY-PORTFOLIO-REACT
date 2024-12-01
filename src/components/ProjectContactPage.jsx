import React,{useEffect, useRef} from "react";
import { usePage } from "../porvider/TurnPageContext";

const ProjectContactPage = ({addPanel} ) => {
    const { updateZIndex } = usePage()
    const panelRef = useRef()
    const handleTurn = () => {
     updateZIndex(panelRef )
   }
   useEffect(()=> {
     addPanel(panelRef)
   },[])
  return (
     <>
      <div ref={panelRef} className="book-page page-right turn"  id="3"  >
              
                <div class="page-front">
                    <h1 class="title">LATEST PROJECT</h1>
                    <div class="portfolio-box">
                         <div class="img-box">
                            <img src="./img/photo.jpg" alt="" srcset="" />
                         </div>
                    </div>
                    <div class="info-box">
                        <div class="info-title">
                            <h3>Project name</h3>
                            <a href="#">Live preview<i class="bx bx-link-external"></i></a>
                        </div>
                        <p class="s-title">Tech used:</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam natus velit unde? 
                                vero debitis inventore consequuntur corporis! Dolore aut expedita earum mollitia? Illum!</p>
                        
                    </div>
                    <div class="btn-box">
                        <a href="#" class="btn">Code source</a>
                        <a href="#" class="btn">More project</a>
                    </div>
                    <span class="number-page">5</span>
                    <button 
                         onClick={() => updateZIndex(panelRef)}
                        class="nextprev-btn" data-page="turn-3"> 
                        <i class='bx bx-chevron-right' ></i>
                    </button>
                </div>

          
                <div class="page-back">
                    <h1 class="title">CONTACTEZ-MOI !</h1>
                    <button class="btn back-profile">Profil</button>
                  <span class="number-page">6</span>
                  <button
                      onClick={handleTurn}
                      class="nextprev-btn back" data-page="turn-3">
                      <i class='bx bx-chevron-left' ></i>
                  </button>
                </div>
      </div>
     </>
  );
};

export default ProjectContactPage;