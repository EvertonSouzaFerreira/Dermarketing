import React from 'react'


//imagens
import grafico1 from '../../images/grafico01.png'
import grafico2 from '../../images/grafico02.png'

//style
import { ContainerGraficos, GraficoImg } from './GraficoStyled'

function Grafico() {
  return (
    <ContainerGraficos id='mentoria'>
        <div className='containerPergunta'>
        <h3>Você sabe <span>quantas pessoas estão buscando </span> <br/>
            consultas com <span>sua especialidade?</span> </h3>
            <p>Veja a média de pesquisas mensais para algumas especialidades da área de beleza:</p>
        </div>
        <div className='containerGrafico'>
          <GraficoImg>
              <img src={grafico1} alt="" />
              <h3>DERMATOLOGIA</h3>
              <p>Média de pesquisas SEMANALMENTE e MENSALMENTE</p>
              <h4>100 mil - 1 Milhão</h4>
          </GraficoImg>
          <GraficoImg>
              <img src={grafico2} alt="" />
              <h3>DERMATOLOGIA</h3>
              <p>Média de pesquisas SEMANALMENTE e MENSALMENTE</p>
              <h4>100 mil - 1 Milhão</h4>
          </GraficoImg>
        </div>
        

    </ContainerGraficos>
  )
}

export default Grafico