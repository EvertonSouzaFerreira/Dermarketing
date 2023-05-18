import React from 'react'

import { useInView } from 'react-intersection-observer';

//styled
import {ContainerVamosComecar} from './VamosComecarStyled'


//imagens
import imgDoctor from '../../images/img-doctor 1.png'
import SiglaLogo from '../../images/SiglaLogo.png'

function VamosComecar() {


  
  return (
    <ContainerVamosComecar id='divulgue'>
      <div className='container'>
        <div className='containertitle'>
              <img src={SiglaLogo} alt="Logo" />
              <h4> <span>Divulgue, impulsione e <br/>
                  cresça</span> o seu consultório <br/>
                  com a Dermarketing.</h4>
              <p>Vamos começar?</p>
              <button> <a href="https://contate.me/dermarketing"> Entrar em contato</a></button>
          </div>
          <img className='imgDoctor' src={imgDoctor} alt="imagenDotor" />
      </div>
        

    </ContainerVamosComecar>
  )
}

export default VamosComecar