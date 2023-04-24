import React from 'react'


//imagens
import grafico from '../../images/grafico01.png'

//style
import { ContainerGraficos, GraficoImg } from './GraficoStyled'

function Grafico() {
  return (
    <ContainerGraficos id='mentoria'>
        <GraficoImg>
            <img src={grafico} alt="" />
            <h3>DERMATOLOGIA</h3>
            <p>Média de pesquisas SEMANALMENTE e MENSALMENTE</p>
            <h4>100 mil - 1 Milhão</h4>
        </GraficoImg>
        <GraficoImg>
            <img src={grafico} alt="" />
            <h3>DERMATOLOGIA</h3>
            <p>Média de pesquisas SEMANALMENTE e MENSALMENTE</p>
            <h4>100 mil - 1 Milhão</h4>
        </GraficoImg>
        <GraficoImg>
            <img src={grafico} alt="" />
            <h3>DERMATOLOGIA</h3>
            <p>Média de pesquisas SEMANALMENTE e MENSALMENTE</p>
            <h4>100 mil - 1 Milhão</h4>
        </GraficoImg>
        <GraficoImg>
            <img src={grafico} alt="" />
            <h3>DERMATOLOGIA</h3>
            <p>Média de pesquisas SEMANALMENTE e MENSALMENTE</p>
            <h4>100 mil - 1 Milhão</h4>
        </GraficoImg>

    </ContainerGraficos>
  )
}

export default Grafico