import React,{useState} from "react";

export default function Formulario(){

    const estiloDiv = {
        borderStyle: 'outset',
        display: 'flex', 
        flexDirection: 'column', 
        width: '30%',
        marginTop: '1%',
        marginLeft: '32%',
        position: 'Fixed',
    }

    const [nome,setNome] = useState('')
    
    const [nomeH,setNomeH] = useState('')
    const handleChangeNome=(e)=>{
        setNomeH(e.target.value)
    }

    const [carro,setCarro]=useState('')

    return(
        <div style={estiloDiv}>
            <label>Digite seu nome (STATE)</label>
            <input 
                type='text' 
                name='fnome'
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
            />
            <p>Nome digitado: {nome}</p>

            <br/>

            <label>Digite seu nome (HANDLE)</label>
            <input 
                type='text' 
                name='fnomeH'
                value={nomeH}
                onChange={(e)=>handleChangeNome(e)}
            />
            <p>Nome digitado: {nomeH}</p>

            <br/>

            <label>Selecione um carro</label>
            <select values={carro} onChange={(e)=>setCarro(e.target.value)}>
                <option value='HRV'>HRV</option>
                <option value='Golf'>Golf</option>
                <option value='Cruse'>Cruse</option>
                <option value='Argo'>Argo</option>
            </select>
            <p>Carro selecionado: {carro}</p>
        </div>
    )
}