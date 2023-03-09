import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function HomePage() {
    const [filmes, setFilmes] = useState([])
    const filme = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
 
   useEffect(() => {
    const promise = axios.get(filme)

    promise.then((res) => {setFilmes(res.data)})
    promise.catch((err) => {console.log(err.data)})
   }, [])

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {filmes.map((movie) => 
                    <MovieContainer data-test="movie">
                        <img src={movie.posterURL} alt="poster" key={movie.id}/>
                    </MovieContainer>
                )}
            </ListContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`