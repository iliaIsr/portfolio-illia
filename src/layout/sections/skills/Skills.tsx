import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";


export const Skills = () => {
    return (
        <StyleSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'codeSvg'}
                           title={"html5"} description={"fdsfjhvdfjndnkjdd"}/>
                    <Skill iconId={'css'}
                           title={"css"} description={"fdsfjhvdfjndnkjdd"}/>
                    <Skill iconId={'react'}
                           title={"react"} description={"fdsfjhvdfjndnkjdd"}/>
                    <Skill iconId={'typescript'}
                           title={"typeScript"} description={"fdsfjhvdfjndnkjdd"}/>
                    <Skill iconId={'sc'}
                           title={'styled components'} description={"fdsfjhvdfjndnkjdd"}/>
                    <Skill iconId={'figma'}
                           title={"figma"} description={"fdsfjhvdfjndnkjdd"}/>
                </FlexWrapper>
            </Container>
        </StyleSkills>
    );
};

const StyleSkills = styled.section`
`