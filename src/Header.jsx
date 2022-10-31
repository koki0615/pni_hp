import styled from 'styled-components'
import Icon from './images/PNIlogo.png';
import { Link } from "react-router-dom";

//ヘッダーの作成
export const Header = () => {
    return (
      
        <div>
            <SHeader>
                <SDiv>
                    <SImg src={Icon} style={{height:"80px",width:"80px"}} />
                    <STitle>
                      <Link to="/" style={{textDecoration: "none", color: "black"}}>Plus newit</Link>
                    </STitle>
                </SDiv>
                <SLink>
                    <SUl>
                      <Li><Link to="/profile" style={{textDecoration: "none", color: "black"}}>社員紹介</Link></Li>
                      <Li><Link to="/business" style={{textDecoration: "none", color: "black"}}>事業内容</Link></Li>
                      <Li><Link to="/new" style={{textDecoration: "none", color: "black"}}>新着情報</Link></Li>
                    </SUl>  
                </SLink>    
            </SHeader>
            <Subtitle>

            </Subtitle>
        </div>

    );
};


const SHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: #e0e0e0;
    display: flex;
    vertical-align: middle;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    
    
`

const SDiv = styled.div`
    color: blcak;
    display: flex;
    align-items: center;
`

const SImg = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 20px;
`

const STitle = styled.p`
    font-size: 40px;
    font-family: Comic Sans MS;
`

const SLink = styled.div`
    list-style: none;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;

`

const SUl = styled.ul`
    list-style: none;
    display:flex;
    vertical-align: middle;
`

const Li = styled.li`
    margin-right: 20px;
    font-size: 20px;
    font-family: Verdana;
    color: black;

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

const Subtitle = styled.div`
    height: 0;
    overflow: hedden;

`