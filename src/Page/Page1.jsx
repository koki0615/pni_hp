import React from "react";
import styled from "styled-components";


export const Page1 = () => {
    return (
        <div>
           <SK>kkk</SK>
        </div>
        
    );
};

const SK = styled.p`
font-size: 40px;
// hover:下線部
position: relative;
display: inline-block;
text-decoration: none;
&::after {
  position: absolute;
  bottom: -3px;
  left: 0;
  content: '';
  width: 100%;
  height: 1px;
  background: #000000;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform .3s;
}
&:hover::after {
  transform: scale(1, 1);
}
`