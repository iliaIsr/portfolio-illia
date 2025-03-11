import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from './../../../assets/images/proj-1.pgn.webp'
import timerImg from './../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container.ts";

const items=["All", "Landing Page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={items}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work title={"Social Network"} text={"Lorem Ipsum"} src={socialImg}/>
                    <Work title={"Timer"} text={"Lorem Ipsum"} src={timerImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks=styled.section`
   
   
`