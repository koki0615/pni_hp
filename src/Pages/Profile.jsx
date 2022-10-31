import React from "react";
import styled from "styled-components";
import Image from '../images/PNIlogo.png';


export const Page1 = () => {
    return (
      <div style={{marginTop: "150px"}}>
        <SDiv>
            <div style={{marginLeft:"70px"}}>
              <h4 style={{marginBottom: "0px"}}>COMPANY PROFILE</h4>
              <h1 style={{marginTop: "0px",fontSize: "60px"}}>会社概要</h1>
            </div>
            <div>
              <STable>
                <STr>
                  <STh>会社名</STh>
                  <STd>Plus newit (プラスニューイット)</STd>
                </STr>
                <STr>
                  <STh>住所</STh>
                  <STd>〒815-0075 福岡県福岡市南区長丘2-9-17</STd>
                </STr>
                <STr>
                  <STh>設立日</STh>
                  <STd>2021年5月1日</STd>
                </STr>
                <STr>
                  <STh>社員数</STh>
                  <STd>3名</STd>
                </STr>
                <STr>
                  <STh>代表</STh>
                  <STd>大西 恒輝</STd>
                </STr>
                <STr>
                  <STh>事業内容</STh>
                  <STd>
                    ・HP作成<br/>
                    ・webシステム開発<br/>
                    ・アプリ開発
                  </STd>
                </STr>
                <STr>
                  <STh>TEL</STh>
                  <STd>080-3946-1239</STd>
                </STr>
                <STr>
                  <STh>MAIL</STh>
                  <STd>plusnewit@gmail.com</STd>
                </STr>
              </STable>
            </div>
        </SDiv>
       </div> 
    );
};

const SDiv = styled.div `
  height: 1000px;
  width: 100%;
  background-repeat: no-repeat;
  background-image: url(${Image});
  background-size: contain;
  background-color:rgba(255,255,255,0.8);
  background-blend-mode:lighten;
  background-position: center;
  margin: 0 auto;
`

const STable = styled.table`
  width: 80%;
  margin: auto;
  border-collapse: collapse;
`

const STr = styled.tr `
  border-bottom: solid 2px white;
  :last-child {
    border-bottom: none;
  }
`

const STh = styled.th `
  position: relative;
  text-align: left;
  widtd: 30%;
  background-color: #696969;
  color: white;
  text-align: center;
  padding: 10px 0;  

  &:after {
    display: block;
    content: "";
    widtd: 0px;
    height: 0px;
    position: absolute;
    top:calc(50% - 10px);
    right:-10px;
    border-left: 10px solid #696969;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  
`

const STd = styled.td `
  text-align: left;
  width: 70%;
  text-align: center;
  background-color: #eee;
  padding: 10px 0;
`