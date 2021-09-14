import './style.css'

export function Contato() {
  return (
    <section className="contato">
      <div className="container">
        <h4>contato</h4>
        <form action="https://formsquash.io/f/Ga5B4r42Nob0blUxuiTv" method="POST">
          <input type="email" name="email" placeholder="digite o seu email aqui" />
          <input type="text" name="firstName" placeholder="digite o seu nome aqui" />
          <textarea placeholder="escreva a sua mensagem aqui" name="mensagem" id="mensagem" type="mensagem" name="mensagem" className="text">

          </textarea>

          <input type="hidden" name="_gotcha"></input>
          <input className="enviar" type="submit" value="enviar" />
        </form>

      </div>
    </section>
  )

}