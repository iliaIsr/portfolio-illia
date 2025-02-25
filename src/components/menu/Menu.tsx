import styled from "styled-components";

type ItemsPropsType={
    items?:Array<string>,
}

export const Menu = (props:ItemsPropsType) => {
    return (
        <StyledMenu>
           <ul>
               {props.items && props.items.length > 0?(
                   props.items.map((item,index) => (
                           <li key={index}>
                               <a href="">{item}</a>
                           </li>
                       )
                   )):(<li>{'no elements'}</li> )}

           </ul>
        </StyledMenu>
    );
};

const StyledMenu=styled.nav`
ul{
    display: flex;
    gap:30px;
    justify-content: center;
}
`