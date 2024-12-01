import { useContext, useState, createContext } from "react";
const TurnContext =  createContext()

export default function TurnContextProvider({children}){
     
     const [ setHasTurn] = useState(true)
     const handleBtnTurn = () => {
         setHasTurn(prev => !prev)
     } 

     const updateZIndex = (panelRef) => {
        if( panelRef.current.classList.contains('turn')){
            panelRef.current.classList.remove('turn')
           setTimeout(() =>{
              const newIndex = 200 - parseFloat(panelRef.current.getAttribute('id')) 
              panelRef.current.style.zIndex = newIndex
            },500)
            //setHasTurn(false)
        }else{
             panelRef.current.classList.add('turn')
            setTimeout(() =>{
               const newIndex = 200 +  parseFloat(panelRef.current.getAttribute('id')) 
               panelRef.current.style.zIndex = newIndex
             },500)
            // setHasTurn(true)
        }
    
     }

      let pageNumber = 0 
      const animatePages = (panels,index) =>{
            //const newIndex = 10 +  parseFloat(panelRef.current.getAttribute('id')) 
          
                 setTimeout(() => {
                    reverseIndex(pageNumber, panels.length)
                    panels[pageNumber].current.classList.remove('turn')
                    setTimeout(() =>{
                       reverseIndex(pageNumber, panels.length)
                       panels[pageNumber].current.style.zIndex = 10 + index
                    },500 )
                 }, ( index +1 ) * 200 + 2100)  
           
      }
      function reverseIndex(pageNumber, totalPage) {
         pageNumber--
         if(pageNumber < 0){
             pageNumber = totalPage -1
         }
     }
     
     return (
        <TurnContext.Provider value={{handleBtnTurn, updateZIndex ,animatePages}}>
             {children};
        </TurnContext.Provider>
     )
}

export const usePage = () =>  useContext(TurnContext)