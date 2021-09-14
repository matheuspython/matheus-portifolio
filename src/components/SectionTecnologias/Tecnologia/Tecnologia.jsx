import './style.css'

export function Tecnologia(props) {
  return (
    <article className="tecnologia">
      <img src={props.img} alt={props.tecnologia} />
      <h1>{props.tecnologia}</h1>
      <p>{props.descricao}</p>
    </article>
  )
}