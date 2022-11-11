import { useState } from "react";
import { Container } from "./styled";
import Logo from "../../assets/alecto.png";
import Lupa from "../../assets/lupa.png";

export default function Header() {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    window.location.href = `https://www.lecto.com.br/busca/basica/${search}/keyword/todas-as-cidades/0#resultado`

    // try{
    //     window.location.href = `https://www.lecto.com.br/busca/basica/${search}/keyword/todas-as-cidades/0#resultado`
    //     console.log(window.location.href)

    // }catch(error){
    //     alert('Deu erro ' + error)
    // }
  }

  return (
    <Container>
      <div className="line-top" />
      <div className="grid-search">
        <div className="box-logo">
          <a href="/">
            <img id="logo" src={Logo} alt="Logo Lecto" />
          </a>
        </div>

        <div className="box-input-search-header">
          <div className="input-search">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="input-search"
                name="input-search"
                placeholder="Digite aqui para realizar sua pesquisa..."
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button title="Buscar" id="btn-search" type="submit" name="busca">
                <img id="icon-lupa" src={Lupa} alt="icone lupa botão buscar" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
