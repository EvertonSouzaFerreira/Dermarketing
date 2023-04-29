import React from 'react'

//styled
import {ContainerVamosComecar} from './VamosComecarStyled'


//imagens
import imgDoctor from '../../images/img-doctor 1.png'
import SiglaLogo from '../../images/SiglaLogo.png'

function VamosComecar() {
  return (
    <ContainerVamosComecar id='divulgue'>

        <div className='containertitle'>
            <img src={SiglaLogo} alt="Logo" />
            <h4> <span>Divulgue, impulsione e <br/>
                cresça</span> o seu consultório <br/>
                com a Dermarketing.</h4>
            <p>Vamos começar?</p>
            <button>Entrar em contato</button>
        </div>
        <img src={imgDoctor} alt="imagenDotor" />

    </ContainerVamosComecar>
  )
}

export default VamosComecar