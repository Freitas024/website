import {Wrapper, Screembox, Container} from '../../styles/styledProjects';
import Working from '../../components/working';

export default function Projects() {

    const Card = [
        {id:'card', name:'Em produção', genero:'UX Design', genero2:'Front-end'},
        {id:'card', name:'Em produção', genero:'UX Design', genero2:'UI Design'},
        {id:'card', name:'Em produção', genero:'Back-end', genero2:'UX Design'},
        {id:'card', name:'Em produção', genero:'UX Design', genero2:'UI Design'},
        {id:'card', name:'Em produção', genero:'UX Design', genero2:'UI Design'},
        {id:'card', name:'Em produção', genero:'UX Design', genero2:'UI Design'},   
    ];
    return(
        <Wrapper>
            <h2>Works</h2>
            <Container>
                    {Card.map( cards => (
                        <ul key={cards.id}>
                            <Screembox><Working/></Screembox>
                            <h3>{cards.name}</h3>
                            <li>
                                <span>{cards.genero}</span>
                                <span>{cards.genero2}</span>
                            </li>
                        </ul>
                    ))}
            </Container>
        </Wrapper>
    );
}