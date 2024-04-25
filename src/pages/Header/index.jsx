import {Wrapper, Title} from '../../styles/styledHeader';

export default function Header(){
    return(
        <Wrapper>
            <Title>@souo_vini</Title>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#Works'>Works</a></li>
                <li><a href='#Footer'>Contato</a></li>
            </ul>
        </Wrapper>
    );
}