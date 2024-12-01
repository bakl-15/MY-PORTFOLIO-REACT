import React, {useEffect, useRef  } from "react";
import { usePage } from "../porvider/TurnPageContext";
const ExperEducPage = ({addPanel}) => {
    const {updateZIndex } = usePage()
    const panelRef = useRef()
    const handleTurn = () => {
        updateZIndex(panelRef )
      }
      useEffect(()=> {
        addPanel(panelRef)
      },[])

  return (
    <div ref={panelRef} className="book-page page-right turn"   id="1" >
  
    <div className="page-front">
        <h1 className="title">EXPÉRIENCES PROFESSIONNELLES</h1>
        <div className="workeduc-box">
            <div className="workeduc-content">
                <span className="year"><i className='bx bxs-calendar'></i> 2020 - 2021 </span>
                <h3>Développeur PHP/Symfony</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur labore, magnam nobis et pariatur ratione cumque? Consectetur placeat obcaecati itaque,
                     ratione consequatur suscipit aliquid quasi vel, corporis inventore facere.</p>
            </div>
            
            <div className="workeduc-content">
               <span className="year"><i className='bx bxs-calendar'></i> 2020 - 2021 </span>
               <h3>Développeur PHP/Symfony</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur labore, magnam nobis et pariatur ratione cumque? Consectetur placeat obcaecati itaque,
                    ratione consequatur suscipit aliquid quasi vel, corporis inventore facere.</p>
            </div>
           
           
            <div className="workeduc-content">
               <span className="year"><i className='bx bxs-calendar'></i> 2020 - 2021 </span>
               <h3>Développeur PHP/Symfony</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur labore, magnam nobis et pariatur ratione cumque? Consectetur placeat obcaecati itaque,
                    ratione consequatur suscipit aliquid quasi vel, corporis inventore facere.</p>
            </div>
        </div>
            <span className="number-page">1</span>
            <button 
                 onClick={ handleTurn}
                className="nextprev-btn" data-page="turn-1">
                <i className='bx bx-chevron-right' ></i>
            </button>
    </div>
         
    <div className="page-back">
        <h1 className="title">FORMATIONS</h1>
        <div className="workeduc-box">
            <div className="workeduc-content">
                <span className="year"><i className='bx bxs-calendar'></i> 2019 - 2020 </span>
                <h3>BAC  +5  Développement  Web</h3>
               <h5 className="text-university"> École  Supérieure  Européenne  de  management,  PARIS</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur labore, magnam nobis et pariatur ratione cumque? Consectetur placeat obcaecati itaque,
             </p>
            </div>
            
            <div className="workeduc-content">
                <span className="year"><i className='bx bxs-calendar'></i>  Licence Informatique </span>
                <h3>BAC  +5  Développement  Web</h3>
                <h5 className="text-university">  École  Supérieure  Européenne  de  management,  PARIS</h5>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur labore, magnam nobis et pariatur ratione cumque? Consectetur placeat obcaecati itaque,
               </p>
            </div>
           
            <div className="workeduc-content">
                <span className="year"><i className='bx bxs-calendar'></i> 2019 - 2020 </span>
                <h3>BAC  +5  Développement  Web</h3>
                <h5 className="text-university">  École  Supérieure  Européenne  de  management,  PARIS</h5>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur labore, magnam nobis et pariatur ratione cumque? Consectetur placeat obcaecati itaque,
                  </p>
            </div>
        </div>
        <span className="number-page">2</span>
        <button
             onClick={ handleTurn}
           className="nextprev-btn back" data-page="turn-1">
            <i className='bx bx-chevron-left' ></i>
        </button>
    </div>
    </div>

  );
};

export default ExperEducPage;