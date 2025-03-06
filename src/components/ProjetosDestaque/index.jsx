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
                                <a href={repo.url} target="_blank">
                                    <strong>{repo.name}</strong>
                                </a>
                                <p>{repo.description}</p>
                            </li>
                        ))
                    ) : <p>Carregando projetos ...</p>
                }
            </ul>
        </Wrapper>
    )
}