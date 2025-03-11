import styled from "styled-components";
import { Link } from "../../../../components/Link";


type ItemsPropsType={
    items?:Array<string>,
}

export const TabMenu = (props:ItemsPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.items && props.items.length > 0?(
                    props.items.map((item,index) => (
                            <ListItem key={index}>
                                <Link href="">{item}</Link>
                            </ListItem>
                        )
                    )):(<li>{'no elements'}</li> )}

            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu=styled.nav`
    margin-bottom: 40px;
    ul{
        display: flex;
        gap:20px;
        justify-content: center;
    }
`

const ListItem=styled.li`
  
`

