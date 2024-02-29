import FormStyles from '../styles/Form.module.css'
const Form = ({formInput, setFormInput, setRenderForm, setRenderCard, setShowError}) => {
  //valid function 1
  const validInput1 = (inputValue) => {
    let respuesta = false;
    if(inputValue.length > 3 && inputValue[0] != ' '){
      respuesta = true;
    }
    return respuesta;
  }
  //valid function 2
  const validInput2 = (inputValue) => {
    let respuesta = false;
    if(inputValue.length > 6){
      respuesta = true;
    }
    return respuesta;
  }
  //handlerSubmit
  const handlerSubmit = (event) => {
    event.preventDefault();
    let semaforo = validInput1(formInput.cancion) && validInput2(formInput.artista);
    if(semaforo) {
      setRenderForm(false);
      setShowError(false);
      setRenderCard(true);
    } else {
      setRenderForm(true);
      setShowError(true);
      setRenderCard(false);
    }

  }
  return (
    <div>
        <form action="#" onSubmit={handlerSubmit} className={FormStyles.container}>
          <div className={FormStyles.inputContainer}>
            <label htmlFor="cancion">Canción</label>
            <input type="text" className={FormStyles.inputText} name="cancion" id="" placeholder="Ingresa una canción" onChange={(event) => setFormInput({...formInput, cancion: event.target.value})}/>
          </div>
          <div className={FormStyles.inputContainer}>
            <label htmlFor="artista">Artista</label>
            <input type="text" className={FormStyles.inputText} name="artista" id="" placeholder="Ingresa un artista" onChange={(event) => setFormInput({...formInput, artista: event.target.value})}/>
          </div>
          <input type="submit" value="Enviar" className={FormStyles.inputText}/>
        </form>
    </div>
  )
}

export default Form