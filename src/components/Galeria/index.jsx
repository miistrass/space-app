import styled from "styled-components"
import { Titulo } from "../Titulo"
import { Populares } from "./Populares"
import { Tags } from "./Tags"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

export const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
                                
            </GaleriaContainer>
        </>
    )
}