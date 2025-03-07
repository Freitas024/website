import { useState, useEffect } from 'react';
import { Wrapper } from './styles';


export default function ProjetosDestaque() {
    
    const [repos, setRepos] = useState([]);

    const fetchRepo = () => {
        fetch("https://raw.githubusercontent.com/Freitas024/projetos-destaque/refs/heads/main/projetos.json")
        .then((response) => response.json())
        .then((data) => setRepos(data))
        .catch((err) => console.log('Erro ao buscar o repositorio: ', err))
    }   

    useEffect(() => {
        fetchRepo();
    },[]);

    return(
        <Wrapper>
            <ul>
                {
                    repos.length > 0 ? (
                        repos.map((repo, index) => (
                            <li key={index}>
                                <strong>{repo.name}</strong>
                                <p>{repo.description}</p>
                                <a href={repo.url} target='_blank'>Veja o codigo</a>
                            </li>
                        ))
                    ) : <p>Carregando projetos ...</p>
                }
            </ul>
        </Wrapper>
    )
}