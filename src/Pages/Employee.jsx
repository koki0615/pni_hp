import React from 'react'
import styled from 'styled-components'
import Haruna from '../images/Haruna.jpg'

const Employee = () => {
  return (
    <div style={{marginTop: "100px"}}>
      <SContainer>
        <div style={{marginLeft:"70px"}}>
            <h4 style={{marginBottom: "0px",marginLeft:"50px"}}>EMPLOYEE</h4>
            <h1 style={{marginTop: "0px",fontSize: "40px"}}>社員紹介</h1>
        </div>
        <div style={{margin:"20px 10%"}}>
            <SCard>
                <div>
                    <SImg src={Haruna} />
                </div>
                <div>
                    <SContents>
                        こんにちは<br/>
                        こんにちは<br/>
                        こんにちは<br/>
                        こんにちは<br/>
                        こんにちは<br/>
                    </SContents>
                </div>
            </SCard>
            <SCard>
                <div>
                    <SImg src={Haruna} />
                </div>
                <div>
                    <SContents>

                    </SContents>
                </div>
            </SCard>
            <SCard>
                <div>
                    <SImg src={Haruna} />
                </div>
                <div>
                    <SContents>

                    </SContents>
                </div>
            </SCard>
        </div>
        
      </SContainer>
    </div>
  )
}

export default Employee

const SContainer = styled.div `
    background-color: ;
`

const SCard = styled.div `
    margin: 30px 0px;
    display: flex;
    border-radius: 25px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`
const SImg = styled.img `
    width: 250px;
    height: auto;
    border-radius: 25px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

const SContents = styled.p `
    font-size: 25px;
    margin-left: 30px;
`