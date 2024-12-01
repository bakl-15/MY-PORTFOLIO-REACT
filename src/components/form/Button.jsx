import React from 'react'
import styled, {css} from 'styled-components'
 const StyledButton =  styled.button`
    background-color: ${primary => primary ? primary : "blue"} ;
    color: white;
    padding: 1 rem 3rem ;
    border-radius: 3px;
    ${(primary) => primary && css`
       background: green;
       border-color: red;
    `}
    &:active{
        transform:scale(2)
    }
 `



function Button({children, primary}) {
  return (
    <StyledButton primary={primary}>
        {children}
    </StyledButton>
  )
}

export default Button