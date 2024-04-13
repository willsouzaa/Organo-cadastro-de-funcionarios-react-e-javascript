import './Time.css'
import Colaborado from '../colaborador/index'
import colaborador from '../colaborador/index';




const time = (props) => {
  
    const css = {backgroundColor: props.corSecundaria}

    return(
       (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{borderColor:  props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborado => <Colaborado corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborado.nome} cargo={colaborado.cargo} imagem={colaborado.imagem} />)}

            </div>

        </section>
        : ''
    )   
};

export default time;  