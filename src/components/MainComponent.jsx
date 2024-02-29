import { useState } from "react"
import Form from "./Form"
import Card from "./Card";
import MainComponentStyles from '../styles/MainComponent.module.css'
const MainComponent = () => {
    const [renderCard, setRenderCard] = useState(false);
    const [renderForm, setRenderForm] = useState(true);
    const [showError, setShowError] = useState(false);
    const [formInput, setFormInput] = useState({
        cancion: '',
        artista: ''
    })
  return (
    <>
        <div className={MainComponentStyles.container}>
            {renderForm && <Form formInput={formInput} setFormInput={setFormInput} setRenderForm={setRenderForm} setRenderCard={setRenderCard} setShowError={setShowError}/>}
            {renderCard && <Card formInput={formInput}/>} 
            {showError && <h3 className={MainComponentStyles.contentError}>Por favor chequea que la información sea correcta</h3>}
        </div>
    </>
  )
}

export default MainComponent