import styled, { StyledComponent } from 'styled-components'
// import Image from '../images/PNIlogo.png';
import BackImage from '../images/backimage.jpg';
import { Page1 } from './Profile';

export const QContainer = () => {
    return (
        <SContainer>
            <SDiv >
                <SImg src={BackImage} />
                <SMessage>あったらいいなを実現する</SMessage>
            </SDiv>
            <Page1 />
        </SContainer>
    );
};


const SContainer = styled.div `
    margin-top: 100px;
`
const SDiv = styled.div `
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:rgba(255,255,255,0.8);
    background-position: center;
    margin: 0 auto;
`
const SImg = styled.img `
    width: 100%;
    height: auto;
`

const SMessage = styled.h1 `
    position: absolute;
    top: 250px;
    left: 700px;
    font-size: 90px;
    color: #8a8a8a;
`