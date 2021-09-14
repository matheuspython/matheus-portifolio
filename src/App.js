import { Contato } from "./components/Contato";
import Header from "./components/Header";
import { SectionProjetos } from "./components/SectionProjetos";
import { SectionTecnologias } from "./components/SectionTecnologias";
import { SectionTop } from "./components/SectionTop";

function App() {
  return (
    <>
      <Header />
      <SectionTop />
      <SectionTecnologias />
      <SectionProjetos />
      <Contato />
    </>
  );
}

export default App;
