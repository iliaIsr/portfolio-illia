import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <MyDiv>
                        <SmallText>Hi there</SmallText>
                        <Name>I am <span> Illia Sobolevsky </span> </Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </MyDiv>

                    <PhotoWrapper>
                        <Photo src={photo} alt=''/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>


    );
};
const StyledMain=styled.section`
    min-height: 100vh;
    background-color: #b8d1c5;
    display: flex;

`
const PhotoWrapper=styled.div`
position: relative;
    z-index: 1;
    
    &::before{
        content:'';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent} ;
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`

const Photo=styled.img`
width: 350px;
height: 430px;
object-fit: cover;`


export const MyDiv=styled.div`
    display: flex;
    flex-direction: column;
`
export const MainTitle=styled.h1`
    text-align: start;
    
    font-weight: 400;
    font-size: 27px;
    
`

export const Name=styled.h2`
    text-align: start;
    
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    letter-spacing: 0.05em;
    font-size: 50px;
    margin: 10px 0;
    
    span{
        position: relative;
        z-index: 0;
        &::before {
            content:"";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

export const SmallText=styled.span`
    text-align: start;
    
    font-weight: 400;
    font-size: 14px;
`