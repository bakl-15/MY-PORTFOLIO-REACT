import React, { useEffect, useState } from "react";

const Cover = () => {
  const [zIndexLeft , setZIndexLeft] = useState()
  const [zIndexRight , setZIndexRight] = useState()
  const [addTurn , setAddTurn] = useState(false)
  useEffect(() => {
        setTimeout(() => {
              setZIndexRight(-1)
        },2800)
        setTimeout(() => {
                 setZIndexLeft(-1)
       },3200)
       setTimeout(() => {
          setAddTurn('turn')
       },2100)
  },[])
  return (
    <>
      <div className={"cover cover-left"} style={{zIndex:zIndexLeft}}></div>
      <div className={"cover cover-right " + addTurn} style={{zIndex: zIndexRight}}></div>
    </>
  );
};

export default Cover;