import './style.css'

export function Projeto(props) {
  return (
    <article className="projeto">
      <img src={props.img} alt={props.descricao} />
      <p>{props.descricao}</p>
      <a href={props.link} target="_blank" title={`link para ${props.link}`}>link</a>
    </article>
  )
}