import React,{useEffect, useRef} from "react";
import { usePage } from "../porvider/TurnPageContext";
const SerSkillPage = ({addPanel}) => {
    const { updateZIndex } = usePage()
    const panelRef = useRef()

  const handleTurn = () => {
     updateZIndex(panelRef )
   }
   useEffect(()=> {
    addPanel(panelRef)
  },[])
  return (

  
     <div ref={panelRef} className="book-page page-right turn" id="2" >
              
                <div className="page-front">
                    <h1 className="title">MES SERVICES</h1>
                    <div className="services-box">
                        <div className="services-content">
                          <i className="bx bx-code-alt" ></i>
                          <h3>Développeur web</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              cupiditate doloribus </p>
                           <a href="" className="btn">Voir plus </a>
                        </div>
                        <div className="services-content">
                            <i className="bx bx-code-alt" ></i>
                            <h3>Développeur web</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                cupiditate doloribus nemo </p>
                             <a href="" className="btn">Voir plus </a>
                          </div>
                          <div className="services-content">
                            <i className="bx bx-code-alt" ></i>
                            <h3>Développeur web</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                cupiditate doloribus nemo </p>
                             <a href="" className="btn">Voir plus </a>
                          </div>
                          <div className="services-content">
                            <i className="bx bx-code-alt" ></i>
                            <h3>Développeur web</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                !</p>
                             <a className="btn" href="">Voir plus </a>
                          </div>
                    </div>
                    <span className="number-page">3</span>
                    <button 
                         onClick={handleTurn }
                        className="nextprev-btn" data-page="turn-2">
                        <i className='bx bx-chevron-right' ></i>
                    </button>
                </div>

            
                <div className="page-back">
                  <h1 className="title">MES COMPETENCES</h1>
                  <div className="skills-box">
                     <div className="skills-content">
                         <h3>Front-End</h3>
                         <div className="content">
                            <span><i className="bx bxl-html5"></i><p>HTML</p></span>
                            <span><i className="bx bxl-css3"></i><p>CSS</p></span>
                            <span><i className="bx bxl-javascript"></i><p>JAVASCRIPT</p></span>
                            <span><img src="img/competences/xamarin.png" alt="" /><p>XAMARIN</p></span>
                            <span><i className="bx bxl-bootstrap"></i><p>BOOTSTRAP</p></span>
                            <span><img src="img/competences/twig.png" height="60" /><p>TWIG</p></span>
                            <span><i className="bx bxl-angular"></i></span>
                            <span><i className="bx bxl-tailwind-css"></i></span>
                            <span><i className="bx bxl-react"></i></span>
                            <span><i className="bx bxl-react"></i></span>
                         </div>
                     </div>
                     <div className="skills-content">
                        <h3>Back-End</h3>
                        <div className="content">
                            <span><i className="bx bxl-php"></i></span>
                             <span><i className="bx bxl-nodejs"></i></span>
                             <span><i className="bx bxl-"></i></span>
                             <span>VB NET</span>
                        </div>
                    </div>
                    <div className="skills-content">
                        <h3>UI/UX DESIGN</h3>
                        <div className="content">
                            <span>FIGMA</span>
                            <span>PHOTOSHOP</span>
                        </div>
                    </div>
                  </div>
                  <span className="number-page">4</span>
                  <button 
                       onClick={handleTurn }
                      className="nextprev-btn back" data-page="turn-2">
                      <i className='bx bx-chevron-left' ></i>
                  </button>
                </div>
     </div> 
    
 
  );
};

export default SerSkillPage;