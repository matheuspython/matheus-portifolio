import './style.css'
import { Projeto } from "./Projeto/Projeto"
import express from "../../images/express.png"
import devFinances from "../../images/devFinance.png"
import foodBox from "../../images/foodBox.png"
import moveit from "../../images/moveit.png"
import projetoReactAPIDEOUTRO from "../../images/projetoReactAPIDEOUTRO.png"
import reactFilmesAPIPropria from "../../images/reactFilmesAPIPropria.png"

export function SectionProjetos(){
  function criaProjeto(img, descricao, link){
    return { img, descricao, link }
  }
  const projetos = [
    criaProjeto(express,'freelance que fiz para a oficina mecanica express centro automotivo','https://express-centro-automotivo.com/'),
    criaProjeto(devFinances,'aplicação desenvolvida para ajudar programadores em suas finanças pessoais','dev-finance.matheuspython.vercel.app'),
    criaProjeto(foodBox,'delivery rapido aonde o cliente pode montar sua refeição rapidamente','food-box-gamma.vercel.app'),
    criaProjeto(moveit,'aplicação para programadores que passam tempo demais na frente de seu computador','moveit-roan-eight.vercel.app/'),
    criaProjeto(projetoReactAPIDEOUTRO,'aplicação front end que consome api do omdb','filmes-sooty.vercel.app'),
    criaProjeto(reactFilmesAPIPropria,'aplicação full stack desenvolvida por mim que consome uma api propria de filmes','http://consumindo-api-de-filmes-com-react.vercel.app/'),
  ]
  
  return (
    <section className="projetos">
      <div className="container">
        <h3>ABAIXO TEM ALGUNS DOS MEUS PROJETOS</h3>
        <main>
          {projetos.map(projeto => (
            <Projeto img={projeto.img} descricao={projeto.descricao} link={projeto.link} />
          ))}
        </main>
      </div>
    </section>
  )
}