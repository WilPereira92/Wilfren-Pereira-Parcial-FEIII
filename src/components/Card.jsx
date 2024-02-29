import CardStyles from '../styles/Card.module.css'
const Card = ({formInput}) => {
  return (
    <div className={CardStyles.container}>
      <h2>Ingresaste la canción {formInput.cancion}</h2>
      <h2>Y es del artista {formInput.artista}</h2>
    </div>
  )
}

export default Card