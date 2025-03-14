import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.ts";

type SkillPropsType={
    iconId: string,
    title: string,
    description: string,

}

export const Skill = ({iconId,title,description}:SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" align="center">
                <IconWrapper>
                    <Icon iconId={iconId}/>
                </IconWrapper>
                <SkillTitle>{title}</SkillTitle>
                <SkillText>{description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill=styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`

const SkillTitle=styled.h2`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const SkillText=styled.p`
    text-align: center;
`
export const IconWrapper=styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 80px;
        width: 80px;
        // background-color: ${theme.colors.primaryBg};
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
        
    }
`